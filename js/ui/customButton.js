/**
 * User supplied button for the navbar
 *
 * Supported options
 *   label       button text
 *   callback    function(browser, event)
 *   icon        optional svg string, rendered as the button background (switches the button to icon mode)
 *   hoverIcon   optional svg string shown while hovering
 */

import * as DOMUtils from "../ui/utils/dom-utils.js"

const CustomButton = function (parent, browser, b) {

    const button = DOMUtils.div({class: b.icon ? 'igv-navbar-icon-button' : 'igv-navbar-button'})
    parent.appendChild(button)

    button.textContent = b.label

    const backgroundImage = svg => `url("data:image/svg+xml,${encodeURIComponent(svg)}")`

    if (b.icon) {
        button.style.backgroundImage = backgroundImage(b.icon)
        if (b.hoverIcon) {
            button.addEventListener('mouseover', () => {
                button.style.backgroundImage = backgroundImage(b.hoverIcon)
            })
            button.addEventListener('mouseout', () => {
                button.style.backgroundImage = backgroundImage(b.icon)
            })
        }
    }

    button.addEventListener('click', event => b.callback(browser, event))
}

export default CustomButton
