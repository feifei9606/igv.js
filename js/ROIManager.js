import Picker from '../node_modules/vanilla-picker/dist/vanilla-picker.mjs'
import {DOMUtils, StringUtils, Icon} from '../node_modules/igv-utils/src/index.js'

import ROI, {GLOBAL_ROI_TYPE, ROI_DEFAULT_COLOR, ROI_HEADER_DEFAULT_COLOR, screenCoordinates} from './roi.js'


class ROIManager {
    constructor(browser, top, roi) {

        this.browser = browser
        this.top = top
        this.roi = roi || []
        this.monitorBrowserEvents()
    }

    monitorBrowserEvents() {
        this.browser.on('locuschange',       () => paint(this.browser, this.top, this.roi))
        this.browser.on('trackremoved',      () => paint(this.browser, this.top, this.roi))
        this.browser.on('trackorderchanged', () => paint(this.browser, this.top, this.roi))
    }

    addROI(region) {

        const config =
            {
                name: 'unnamed',
                featureSource:
                    {
                        getFeatures :(chr, start, end) => [ region ]
                    },
                color: ROI_HEADER_DEFAULT_COLOR
            }

        this.roi.push(new ROI(config, this.browser.genome, GLOBAL_ROI_TYPE))

        paint(this.browser, this.top, this.roi)
    }

}

async function paint(browser, top, roiList) {

    const columns = browser.root.querySelectorAll('.igv-column')

    for (let i = 0; i < columns.length; i++) {

        clear(columns[ i ])

        const { chr, start:startBP, end:endBP, bpPerPixel:bpp } = browser.referenceFrameList[ i ]

        console.log(`ROI Manager paint bpp ${ browser.referenceFrameList[ i ].bpPerPixel }`)


        for (let roi of roiList) {

            const regions = await roi.getFeatures(chr, startBP, endBP)

            if (regions && regions.length > 0) {

                for (let { start:regionStartBP, end:regionEndBP } of regions) {

                    if (regionEndBP < startBP) {
                        continue
                    }

                    if (regionStartBP > endBP) {
                        break
                    }

                    regionStartBP = Math.max(regionStartBP, startBP)
                    regionEndBP = Math.min(regionEndBP, endBP)
                    columns[ i ].appendChild(createGlobalROI(top, roi, regionStartBP, regionEndBP, startBP, bpp))
                }
            }

        }

    }


}

function clear(column) {

    const regionElements = column.querySelectorAll('.igv-roi')
    for (let i = 0; i < regionElements.length; i++) {
        regionElements[ i ].remove()
    }
}

function createGlobalROI(top, roi, regionStartBP, regionEndBP, startBP, bpp) {

    const { x:regionX, width:regionWidth } = screenCoordinates(regionStartBP, regionEndBP, startBP, bpp)

    // ROI container
    const container = DOMUtils.div({class: 'igv-roi'})
    container.style.top = `${top}px`
    container.style.left = `${regionX}px`
    container.style.width = `${regionWidth}px`
    // container.style.backgroundColor = roi.color
    container.style.backgroundColor = ROI_DEFAULT_COLOR

    // header
    const header = DOMUtils.div()
    header.style.backgroundColor = roi.color
    container.appendChild(header)

    // Color and Alpha Picker
    const pickerConfig =
        {
            parent: header,
            popup: 'right',
            editorFormat: 'rgb',
            editor:false,
            color: header.style.backgroundColor,
            onChange: ({rgbaString}) => {
                header.style.backgroundColor = roi.color = rgbaString
            }
        }

    new Picker(pickerConfig)

    return container
}

export default ROIManager