import IGVGraphics from "../igv-canvas.js"

const shim = .01
const diagnosticColor = "rgb(251,128,114)"
const colorStripWidth = 4
const axesXOffset = colorStripWidth + 1

function paintAxis(ctx, width, height, colorOrUndefined) {

    let axisMin = this.axisMin //|| this.dataRange ? this.dataRange.min : 0
    let axisMax = this.axisMax //|| this.dataRange ? this.dataRange.max : undefined
    if (undefined === axisMax && this.dataRange) {
        axisMin = this.dataRange.min || 0
        axisMax = this.dataRange.max
    }
    if (undefined === axisMax) {
        return
    }

    IGVGraphics.fillRect(ctx, 0, 0, width, height, {fillStyle: 'white'})
    if (colorOrUndefined) {
        IGVGraphics.fillRect(ctx, width - colorStripWidth - 2, 0, colorStripWidth, height, {fillStyle: colorOrUndefined})
    }

    const flipAxis = (undefined === this.flipAxis) ? false : this.flipAxis

    const xTickStart = 0.95 * width - 8 - axesXOffset
    const xTickEnd = 0.95 * width - axesXOffset

    const properties =
        {
            font: 'normal 10px Arial',
            textAlign: 'right',
            fillStyle: 'black',
            strokeStyle: 'black',
        }

    // Explicit tick values, e.g. copy number states 0, 1, 2, 3, 4.  The sequence is extended outwards with the same
    // step so that the whole axis is labelled after the user changes min/max, instead of leaving the ends blank.
    const explicitTicks = (this.config && Array.isArray(this.config.axis)) ?
        extendTicks(this.config.axis.filter(value => Number.isFinite(value)), axisMin, axisMax, height) : []

    if (explicitTicks.length > 1) {

        const yFor = value => {
            const ratio = (value - axisMin) / (axisMax - axisMin)
            return flipAxis ? ratio * height : (1.0 - ratio) * height
        }

        // vertical axis spanning the data range
        IGVGraphics.strokeLine(ctx, xTickEnd, yFor(axisMin), xTickEnd, yFor(axisMax), properties)

        for (const value of explicitTicks) {
            const y = yFor(value)
            IGVGraphics.strokeLine(ctx, xTickStart, y, xTickEnd, y, properties)
            const textY = Math.max(10, Math.min(height - 2, y + 4))
            IGVGraphics.fillText(ctx, prettyPrint(value), xTickStart + 4, textY, properties)
        }

        return
    }

    // Fall through to the default min/max labels: no explicit ticks in range, an irregular tick sequence, or a
    // sequence too dense to be readable at this height

    // tick
    IGVGraphics.strokeLine(ctx, xTickStart, shim * height, xTickEnd, shim * height, properties)
    IGVGraphics.fillText(ctx, prettyPrint(flipAxis ? axisMin : axisMax), xTickStart + 4, shim * height + 12, properties)

    const y = (1.0 - shim) * height

    // tick
    IGVGraphics.strokeLine(ctx, xTickStart, y, xTickEnd, y, properties)
    IGVGraphics.fillText(ctx, prettyPrint(flipAxis ? axisMax : axisMin), xTickStart + 4, y - 4, properties)

    // vertical axis
    IGVGraphics.strokeLine(ctx, xTickEnd, shim * height, xTickEnd, y, properties)

    function prettyPrint(number) {

        if (Number.isInteger(number)) {
            return number
        } else if (number % 1 === 0) {   // Number can be represented exactly as an integer
            return number
        } else if (Math.abs(number) >= 10) {
            return number.toFixed()
        } else if (Math.abs(number) >= 1) {
            return number.toFixed(1)
        } else if (Math.abs(number) >= 0.1) {
            return number.toFixed(2)
        } else {
            return number.toExponential(1)
        }
    }
}

/**
 * 把显式刻度（如拷贝数 0,1,2,3,4）扩展成覆盖 [min, max] 的等差序列。
 *
 * 只有在刻度为等差、且步长在当前高度上不至于把标签挤在一起时才扩展；否则返回空数组，
 * 让调用方退回"只标 min/max"的默认画法（例如用户把范围放到 -1000~1000，或刻度本身不规则）。
 *
 * @param values  显式刻度，允许乱序/重复
 * @param min     轴下限
 * @param max     轴上限
 * @param height  轴高度（px），用于判断标签密度
 * @returns {number[]} 升序刻度值
 */
function extendTicks(values, min, max, height) {

    const sorted = [...new Set(values)].sort((a, b) => a - b)
    const inRange = sorted.filter(value => value >= min && value <= max)

    if (sorted.length < 2 || !(max > min)) {
        return inRange
    }

    const step = sorted[1] - sorted[0]
    const uniform = step > 0 && sorted.every((value, i) => 0 === i || Math.abs(value - sorted[i - 1] - step) < 1e-9)

    if (!uniform) {
        return inRange
    }

    // 标签间距小于 10px 就不再细分，交给默认的 min/max 画法
    if (step / (max - min) * height < 10) {
        return []
    }

    const first = Math.ceil((min - sorted[0]) / step - 1e-9)
    const last = Math.floor((max - sorted[0]) / step + 1e-9)

    const ticks = []
    for (let n = first; n <= last; n++) {
        ticks.push(Math.round((sorted[0] + n * step) * 1e6) / 1e6)   // 消除浮点累加误差
    }
    return ticks
}

export default paintAxis
