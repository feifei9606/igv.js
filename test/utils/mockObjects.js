/**
 * Define global mock objects for running unit tests in Node.  This file is imported for side effects only and
 * has no exports.
 */

import {File} from "./File.js"
import {XMLHttpRequestMock} from "./XMLHttpRequestMock.js"
import {Document, DOMImplementation} from "./Document.js"
import {DOMParser} from "./DOMParser.js"
import atob from 'atob'
import btoa from 'btoa'
import {installTestDataMirror} from "./testDataURL.js"

global.document = new Document()

global.document.implementation = new DOMImplementation()    // For jQUery

global.window = {
    document: global.document,
    setTimeout: function () {
    },
    location : {
        href: ""
    },
    navigator: {
        userAgent: "Node",
        vendor: "Node",
        clipboard: {
            writeText: async function(text) {
                // Mock implementation
                return Promise.resolve();
            }
        }
    }
}

global.File = File

global.XMLHttpRequest = XMLHttpRequestMock

global.DOMParser = DOMParser

global.atob = atob

global.btoa = btoa

// 测试数据在 GitHub raw 上，默认经镜像访问（见 testDataURL.js）；必须在 global.XMLHttpRequest 设置之后安装
installTestDataMirror()

