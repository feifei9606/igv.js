/**
 * 测试数据地址的镜像改写。
 *
 * igv.js 的测试数据托管在 GitHub raw 上（https://raw.githubusercontent.com/igvteam/igv-data/...），
 * 国内网络直连经常被阻断或极慢，因此默认经 GitHub 镜像访问。镜像只需在完整 URL 前加前缀：
 *
 *   https://raw.githubusercontent.com/igvteam/igv-data/.../x.wig
 *   → https://gh-proxy.com/https://raw.githubusercontent.com/igvteam/igv-data/.../x.wig
 *
 * 通过环境变量控制（见下方 MIRROR），只影响测试进程，不改动任何测试数据本身。
 */

const GITHUB_RAW = "https://raw.githubusercontent.com"

// 实测（2026-10-21，本机）：gh-proxy.com ≈1.4s，ghfast.top ≈2.4s，ghproxy.net ≈6.4s
const DEFAULT_MIRROR = "https://gh-proxy.com/"

// 用 globalThis 取 process，避免在浏览器 globals 的 lint 配置下报 no-undef
const env = globalThis.process?.env || {}

const configured = env.IGV_TEST_DATA_MIRROR === undefined ?
    DEFAULT_MIRROR :
    env.IGV_TEST_DATA_MIRROR.trim()

// 空串表示直连；否则统一补一个结尾斜杠
const MIRROR = configured === "" ? "" : configured.replace(/\/*$/, "/")

let installed = false

/**
 * 把 GitHub raw 地址改写为镜像地址，其它地址（本地文件、示例域名、igv.org 等）原样返回。
 *
 * @param url
 * @returns {string}
 */
export function testDataURL(url) {

    if (MIRROR === "" || typeof url !== "string" || !url.startsWith(GITHUB_RAW)) {
        return url
    }

    return MIRROR + url
}

/**
 * 在传输层安装改写（幂等）：包装全局 fetch 与 XMLHttpRequest.prototype.open。
 * 这样测试代码里写死的 URL 不需要改动，断言里的字符串也不会被影响。
 */
export function installTestDataMirror() {

    if (installed || MIRROR === "") {
        return
    }
    installed = true

    const fetchOriginal = globalThis.fetch
    if (typeof fetchOriginal === "function") {
        globalThis.fetch = function (input, init) {
            return fetchOriginal(typeof input === "string" ? testDataURL(input) : input, init)
        }
    }

    const XHR = globalThis.XMLHttpRequest
    if (XHR && XHR.prototype && typeof XHR.prototype.open === "function") {
        const openOriginal = XHR.prototype.open
        XHR.prototype.open = function (method, url, ...rest) {
            return openOriginal.call(this, method, testDataURL(url), ...rest)
        }
    }

    console.log(`[test] GitHub raw 测试数据经镜像访问: ${MIRROR}（设 IGV_TEST_DATA_MIRROR= 可改回直连）`)
}
