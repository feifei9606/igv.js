import IGVGraphics from "./igv-canvas.js"
import {IGVColor} from "../node_modules/igv-utils/src/index.js"

/**
 * Class represents an ideogram of a chromsome cytobands.  It is used for the header of a track panel.
 *
 * Layout: the upper half of the track is a title row showing the sample name (from config.sampleName), the cytobands
 * are drawn in the lower half.  The chromosome name is painted in the axis column.
 */
class IdeogramTrack {
    constructor(browser) {
        this.browser = browser
        this.type = 'ideogram'
        this.id = 'ideogram'
        this.height = browser.config.ideogramHeight || 36
        this.order = Number.MIN_SAFE_INTEGER
        this.disableButtons = true
        this.ignoreTrackMenu = true

        // Check whether we should show the cytoband names in the ideogram
        this.showCytobandNames = browser.config.showCytobandNames !== false

        // 统一字号；条带宽度放不下的名称直接不画，不再逐条缩小字号
        this.cytobandFontSize = browser.config.cytobandFontSize
    }

    computePixelHeight(ignore) {
        return this.height
    }

    draw({context, referenceFrame, pixelWidth, pixelHeight, features}) {

        const chr = referenceFrame.chr
        const chromosome = referenceFrame.genome.getChromosome(chr)

        if (undefined === chromosome || pixelWidth <= 0 || pixelHeight <= 0 || 'all' === chr.toLowerCase()) {
            return
        }

        const stainColors = []

        drawIdeogram({
            ctx: context,
            features,
            chr,
            referenceFrame,
            genome: referenceFrame.genome,
            width: pixelWidth,
            height: pixelHeight,
            stainColors,
            showCytobandNames: this.showCytobandNames,
            cytobandFontSize: this.cytobandFontSize,
            sampleName: this.browser.config.sampleName
        })

        const widthBP = Math.round(referenceFrame.bpPerPixel * pixelWidth)
        const xBP = referenceFrame.start

        // Total chromosome length can be > chromosome.bpLength for partial fastas.
        let chrLength = chromosome.bpLength
        const cytobands = referenceFrame.genome.getCytobands(chr)
        if (cytobands && cytobands.length > 0 && cytobands[cytobands.length - 1].end) {
            chrLength = Math.max(chrLength, cytobands[cytobands.length - 1].end)
            chromosome.bpLength = chrLength   // Correct bp length, bit of a hack
        }

        if (widthBP < chrLength) {

            const bandTop = Math.round(pixelHeight / 2)
            const bandHeight = pixelHeight - bandTop

            const percentWidth = widthBP / chrLength
            const percentX = xBP / chrLength

            let x = Math.floor(percentX * pixelWidth)
            let ww = Math.floor(percentWidth * pixelWidth)

            x = Math.max(0, x)
            x = Math.min(pixelWidth - ww, x)

            // Push current context
            context.save()

            // Draw red box
            context.strokeStyle = "red"
            context.lineWidth = (ww < 2) ? 1 : 2

            const xx = x + (context.lineWidth) / 2
            ww = (ww < 2) ? 1 : ww - context.lineWidth

            const yy = bandTop + context.lineWidth / 2
            const hh = bandHeight - context.lineWidth

            context.strokeRect(xx, yy, ww, hh)

            // Pop current context
            context.restore()
        }
    }

    /**
     * Chromosome name, displayed in the axis column
     */
    paintAxis(ctx, pixelWidth, pixelHeight) {

        IGVGraphics.fillRect(ctx, 0, 0, pixelWidth, pixelHeight, {fillStyle: 'white'})

        const locus = this.browser.currentLoci()
        if (typeof locus === 'string' && locus.includes(':')) {

            // 与 cytoband 名称共用同一条水平中线，避免染色体号偏高
            const bandTop = Math.round(pixelHeight / 2)
            const bandHeight = pixelHeight - bandTop
            const chrName = locus.split(':')[0].replace(/^chr/i, '')

            fillTextInkCentered(ctx, chrName, pixelWidth - 4, bandTop + bandHeight / 2, 'bold 12px Arial', 'black', 'right')
        }
    }

    dispose() {
        this.trackView = undefined
    }
}

function drawIdeogram({ctx, chr, referenceFrame, genome, width, height, stainColors, features, showCytobandNames, cytobandFontSize, sampleName}) {
    const shim = 1
    const shim2 = 0.5 * shim

    // Cytobands occupy the lower half of the track, the upper half is the title row
    const bandTop = Math.round(height / 2)
    const bandHeight = height - bandTop

    // 所有条带共用一个字号，且不超出条带高度
    const fontSize = Math.max(6, Math.min(cytobandFontSize || 10, bandHeight - 2))

    if (undefined === genome) {
        return
    }

    IGVGraphics.fillRect(ctx, 0, 0, width, height, {fillStyle: IGVColor.greyScale(255)})

    if (sampleName) {
        // 标题行（上半部分）垂直居中
        fillTextInkCentered(ctx, sampleName, 0, bandTop / 2, 'bold 12px Arial', 'black', 'left')
    }

    const cytobands = features
    if (cytobands) {

        const center = (bandTop + bandHeight / 2)

        const xC = []
        const yC = []

        if (0 === cytobands.length) {
            return
        }

        // Get chrLength from the cytobands -- chromsome.bpLength might not work for igv-reports fasta files, which
        // contain only a portion of the chromosome sequence
        // *DOESNT WORK* const chrLength = referenceFrame.genome.getChromosome(chr).bpLength;

        const chrLength = cytobands[cytobands.length - 1].end
        const scale = width / chrLength

        // round rect clipping path
        ctx.beginPath()
        IGVGraphics.roundRect(ctx, shim2, bandTop + shim2, width - 2 * shim2, bandHeight - 2 * shim2, (bandHeight - 2 * shim2) / 2, 0, 1)
        ctx.clip()

        for (let i = 0; i < cytobands.length; i++) {

            const cytoband = cytobands[i]
            const start = scale * cytoband.start
            const end = scale * cytoband.end

            if (cytoband.type === 'c') {

                if (cytoband.name.charAt(0) === 'p') {
                    xC[0] = start
                    yC[0] = bandTop + bandHeight
                    xC[1] = start
                    yC[1] = bandTop
                    xC[2] = end
                    yC[2] = center
                } else {
                    xC[0] = end
                    yC[0] = bandTop + bandHeight
                    xC[1] = end
                    yC[1] = bandTop
                    xC[2] = start
                    yC[2] = center
                }

                ctx.fillStyle = "rgb(150, 0, 0)"
                ctx.strokeStyle = "rgb(150, 0, 0)"
                IGVGraphics.polygon(ctx, xC, yC, 1, 0)
            }
            else {
                const backgroundColor = getCytobandColor(stainColors, cytoband);
                ctx.fillStyle = backgroundColor.color;
                IGVGraphics.fillRect(ctx, start, bandTop + shim, (end - start), bandHeight - 2 * shim)

                if (showCytobandNames) {
                    drawIdeogramCytobandName(ctx, cytoband.name, start, end, bandTop, bandHeight, backgroundColor.shade, fontSize)
                }
            }
        }
    }

    // round rect border
    ctx.strokeStyle = IGVColor.greyScale(41)
    IGVGraphics.roundRect(ctx, shim2, bandTop + shim2, width - 2 * shim2, bandHeight - 2 * shim2, (bandHeight - 2 * shim2) / 2, 0, 1)
}

/**
 * Draw a cytoband name.  All bands share the same font size (passed in); a name that does not fit in its band is
 * skipped rather than shrunk, so the row of labels stays visually uniform at any zoom level.
 *
 * @param ctx
 * @param name        cytoband name, e.g. "p11.2"
 * @param start       band start, in pixels
 * @param end         band end, in pixels
 * @param bandTop     band top, in pixels
 * @param bandHeight  band height, in pixels
 * @param shade       gray shade of the band, used to pick a readable text color
 * @param fontSize    font size in pixels, identical for every band
 */
function drawIdeogramCytobandName(ctx, name, start, end, bandTop, bandHeight, shade, fontSize) {

    const padding = 2  // Padding between the band edges and the text
    const bandWidth = end - start - 2 * padding

    if (bandWidth <= 0) {
        return
    }

    const font = `${fontSize}px sans-serif`
    ctx.font = font

    // 统一字号：放不下就不画，不再逐条缩小字号去硬塞
    if (ctx.measureText(name).width > bandWidth) {
        return
    }

    // Determine the luminance
    let luminance
    if (shade !== null) {
        luminance = 0.2126 * shade + 0.7152 * shade + 0.0722 * shade  // Simplified since R=G=B=shade
    } else {
        luminance = 0.2126 * 150 + 0.7152 * 10 + 0.0722 * 10  // Hardcoded for "acen"
    }

    // Choose text color based on luminance
    const textColor = luminance < 128 ? "white" : "black"

    fillTextInkCentered(ctx, name, start + (end - start) / 2, bandTop + bandHeight / 2, font, textColor, 'center')
}

/**
 * Draw text with its glyph ink box vertically centered on centerY.  canvas' "middle" baseline centers the em box,
 * which sits a pixel or two off for most fonts, so the actual glyph bounds are used instead.  Contexts without
 * actualBoundingBox* (e.g. the SVG canvas) fall back to a 0.35em baseline offset.
 */
function fillTextInkCentered(ctx, text, x, centerY, font, fillStyle, textAlign) {

    ctx.font = font
    const metrics = ctx.measureText(text)

    const ascent = metrics.actualBoundingBoxAscent
    const descent = metrics.actualBoundingBoxDescent
    const sizeMatch = /(\d+(?:\.\d+)?)px/.exec(font)

    const y = (Number.isFinite(ascent) && Number.isFinite(descent)) ?
        centerY + (ascent - descent) / 2 :
        centerY + (sizeMatch ? parseFloat(sizeMatch[1]) : 10) * 0.35

    IGVGraphics.fillText(ctx, text, x, y, {fillStyle, textAlign, font})
}

function getCytobandColor(colors, data) {
    if (data.type === 'c') { // centromere: "acen"
        return { color: "rgb(150, 10, 10)", shade: null }; // Shade is not relevant here
    } 
    else {
        let stain = data.stain; // Stain value
        let shade = 230; // Default shade for 'g'

        if (data.type === 'p') {
            shade = Math.floor(230 - stain / 100.0 * 230);
        }

        // Cache the color if not already stored
        var c = colors[shade]
        if (!c) {
            c = "rgb(" + shade + "," + shade + "," + shade + ")"
            colors[shade] = c
        }

        return { color: c, shade }; // Return both the color and shade
    }
}

export default IdeogramTrack
