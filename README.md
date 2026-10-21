# igv.js
![build](https://github.com/igvteam/igv.js/actions/workflows/ci_build.yml/badge.svg)
[![](https://img.shields.io/npm/dw/igv.svg)](https://www.npmjs.com/package/igv)
[![](https://img.shields.io/github/last-commit/igvteam/igv.js.svg)](https://github.com/igvteam/igv.js)
[![](https://img.shields.io/npm/l/igv.svg)](LICENSE)
[![](https://data.jsdelivr.com/v1/package/npm/igv/badge)](https://www.jsdelivr.com/package/npm/igv)

igv.js is an embeddable interactive genome visualization component developed by the 
 [Integrative Genomics Viewer (IGV)](https://igv.org) team. 

## Citing igv.js

James T Robinson, Helga Thorvaldsdottir, Douglass Turner, Jill P Mesirov, igv.js: an embeddable JavaScript 
implementation of the Integrative Genomics Viewer (IGV), Bioinformatics, Volume 39, Issue 1, January 2023, 
btac830, https://doi.org/10.1093/bioinformatics/btac830
 
Below are examples and a quickstart guide.  See the [developer documentation](https://igv.org/doc/igvjs) for more documentation.  

# Examples
 
***[Alignments](https://igv.org/web/release/3.8.10/examples/cram-vcf.html)***

***[Interactions](https://igv.org/web/release/3.8.10/examples/interact.html)***

***[Copy number](https://igv.org/web/release/3.8.10/examples/copyNumber.html)***

***[Multiple regions](https://igv.org/web/release/3.8.10/examples/multi-locus.html)***

***[Mutation Annotation Format (MAF)](https://igv.org/web/release/3.8.10/examples/maf-tcga.html)***

***[Variant color options](https://igv.org/web/release/3.8.10/examples/variant-colors.html)***

***[More](https://igv.org/web/release/3.8.10/examples/)***

 
# Quickstart

## Installation
igv.js consists of a single javascript file with no external dependencies.  

Pre-built files for script include, AMD, or CJS module systems (igv.min.js) and an ES6 module (igv.esm.min.js)
can be downloaded from [https://cdn.jsdelivr.net/npm/igv@3.8.10/dist/](https://cdn.jsdelivr.net/npm/igv@3.8.10/dist/). 

To import igv as an ES6 module

```javascript
import igv from "https://cdn.jsdelivr.net/npm/igv@3.8.10/dist/igv.esm.min.js"
``` 

Or as a script include (defines the "igv" global)

```html
<script src="https://cdn.jsdelivr.net/npm/igv@3.8.10/dist/igv.min.js"></script>
```   
 
Alternatively you can install with npm  
 
 ```npm install igv```

and source the appropriate file for your module system (igv.min.js or igv.esm.min.js)  in node_modules/igv/dist.


## Usage

To create an igv.js ***browser*** supply a container div 
and an initial configuration defining the reference genome, initial tracks, and other state to the 
function ```igv.createBrowser(div, config)```.  

This function returns a promise for an igv.Browser object which can used to control the browser.  For example, to open
a browser on a single alignment track opened at a specific locus:

```
      var igvDiv = document.getElementById("igv-div");
      var options =
        {
            genome: "hg38",
            locus: "chr8:127,736,588-127,739,371",
            tracks: [
                {
                    "name": "HG00103",
                    "url": "https://s3.amazonaws.com/1000genomes/data/HG00103/alignment/HG00103.alt_bwamem_GRCh38DH.20150718.GBR.low_coverage.cram",
                    "indexURL": "https://s3.amazonaws.com/1000genomes/data/HG00103/alignment/HG00103.alt_bwamem_GRCh38DH.20150718.GBR.low_coverage.cram.crai",
                    "format": "cram"
                }
            ]
        };

        igv.createBrowser(igvDiv, options)
                .then(function (browser) {
                    console.log("Created IGV browser");
                })
```

## Documentation

Full documentation of the igv.js API is available at [https://igv.org/doc/igvjs/](https://igv.org/doc/igvjs/).

## Development

### Requirements

Building igv.js and running the examples require Linux or MacOS.  Other Unix environments will probably
work but have not been tested.  

Windows users can use [Windows Subsystem for Linux](https://docs.microsoft.com/en-us/windows/wsl/install-win10).

### Building

Building igv.js and running the examples requires [node.js](https://nodejs.org/).  

Development can be done directly from the source files by importing igv.js from ```js/index.js```.  
See the html files in the ```dev``` folder for examples of how to import igv.js from the source
directory. The ```dist```files are not required for development, however you must build at least 
once to compile the CSS and create the required file  ```js/embedCss.js```.  


```  
git clone https://github.com/igvteam/igv.js.git
cd igv.js
npm install
npm run build
```

**Note**: igv.js has a large history with many commits which can make cloning and building the entire history time consuming.  
To clone just the latest commit, use the ```--depth``` option, for example

```
git clone --depth 1 https://github.com/igvteam/igv.js.git
```


This creates a dist folder with the following files

* igv.js - UMDS file for script include, AMD, or CJS modules.  A script include will define an "igv" global.
* igv.min.js - minified version of igv.js
* igv.esm.js --  ES6 module 
* igv.esm.min.js --  minified version of igv.esm.js

Additionally the file ```embedCSS.js``` is created in the ```js``` folder.  This contains the CSS required for igv.js,
which is injected into a shadow root containing igv.js.

### Tests

To run the tests from the command line

```
npm run test
```

# 本分支的定制扩展（相对上游 igv.js v3.8.10）

本仓库在 [igv.js](https://github.com/igvteam/igv.js) v3.8.10 基础上维护。除上游功能外，另新增了下列配置项与 API
（标 ★ 的为上游没有的能力，标 ⚠ 的为与上游默认值不同）。

## 轨道配置（track config）

| 选项 | 适用轨道 | 默认值 | 说明 |
|---|---|---|---|
| `axis` ★ | wig、merged 等数值轨道 | 无 | 显式刻度值数组，例如拷贝数轨道用 `[0, 1, 2, 3, 4]`。用户调整 `min`/`max` 后，刻度会按原步长自动向外延伸覆盖整个范围（1~4 调到 -2~6 则显示 -2…6），不会只标中间一段；刻度非等差、或步长在当前高度下密于 10px 时，退回只标 `min`/`max` 两个刻度。不设置 `axis` 时即上游行为。刻度按**线性轴**定位，`logScale: true` 时位置不准，两者不要同时使用。 |
| `offset` ★ | wig | `0` | 柱状图的基线值。`graphType: "bar"` 时柱子从该值画起，可用于"从某个中线出发"的图形。 |
| `symbol` ★ | wig（`graphType: "line"`） | 无 | 在线段中点画出方向符号（三角形），取值 `"arrow-up"` / `"arrow-down"`。三角画在线段**外侧**（底边贴条形的上/下边，整个三角露在条外），默认与线段同色，高度默认等于 `lineWidth`（底边 0.7×高），可用 `symbolSize` / `symbolColor` 单独调整，`symbol: false` 可整体关闭符号；自定义数据源也可在 feature 上直接给 `symbol` 覆盖该配置。`line` 模式不再画相邻片段间的连接线，区间数据的每段都是一条独立的水平线。 |
| `lineWidth` | wig | `2` | 线宽；同时作为柱/线的最小绘制宽度（区间宽度小于 1px 时保证可见）。 |
| `showAminoAcids` ★ | 注释轨道（refGene/genePred 等） | `true` | 高倍放大时是否在 exon 上绘制氨基酸字母。设为 `false` 关闭字母并始终绘制方向箭头。 |

```javascript
{
    type: "wig",
    name: "copy number",
    url: "sample.seg",
    graphType: "line",
    min: 0,
    max: 4,
    axis: [0, 1, 2, 3, 4],
    offset: 2,
    symbol: "arrow-up"
}
```

## 浏览器配置（browser config）

| 选项 | 默认值 | 说明 |
|---|---|---|
| `ideogramHeight` ★ | `36` | ideogram 轨道高度（px）。上半部分为标题行，下半部分为 cytoband 带，布局按 `height / 2` 自动分配。 |
| `showCytobandNames` ⚠ | `true` | 是否在 cytoband 上显示条带名（上游默认 `false`）。 |
| `cytobandFontSize` ★ | `10` | 条带名统一字号，且不超过"条带高度 - 2"。宽度放不下的条带名会整条不显示，不再逐条缩小字号。 |
| `sampleName` ★ | 无 | 显示在 ideogram 标题行左侧的样本名（常用于多面板/多样本截图）。 |

```javascript
igv.createBrowser(div, {
    genome: "hg38",
    ideogramHeight: 36,
    showCytobandNames: true,
    cytobandFontSize: 10,
    sampleName: "SAMPLE-01",
    tracks: [ ... ]
})
```

## API 扩展

| 方法 | 说明 |
|---|---|
| `browser.toSVG(targetTracks?)` ★ | 返回 SVG 字符串。可选 `targetTracks`（track id 数组）只导出指定轨道，图像高度按选中轨道自动裁剪。 |
| `browser.savePNGtoFile(filename?, targetTracks?)` ★ | 保存 PNG。第二个参数同 `toSVG`，可只导出部分轨道。 |
| `browser.toPNGDataURL(targetTracks?)` ★ | 返回 `Promise<string>`，内容为 `data:image/png;base64,...`，便于嵌入报告。 |
| `browser.savePNGCallBack(filename?, targetTracks?)` ★ | 与 `toPNGDataURL` 相同（返回 Promise），`filename` 仅为兼容旧调用保留，实际未使用。 |

```javascript
// 只导出两份 track，并直接拿到 dataURL
const dataUrl = await browser.toPNGDataURL(["tumor", "normal"])
```

## 本地测试

测试数据托管在 GitHub raw（`raw.githubusercontent.com/igvteam/igv-data`），国内直连不通，默认经 GitHub 镜像访问：

```bash
npm test                                            # 默认镜像 https://gh-proxy.com/
IGV_TEST_DATA_MIRROR=https://ghfast.top/ npm test   # 换镜像
IGV_TEST_DATA_MIRROR= npm test                      # 强制直连（海外网络）
```

改写发生在传输层（`test/utils/testDataURL.js` 包装 `fetch` 与 `XMLHttpRequest.open`），测试代码和断言里的 URL 都不需要改；`npm test` 的超时已放宽到 15s（镜像首包较慢）。

仍有两个用例依赖非 GitHub 站点，国内网络下会失败，属已知限制：`bbChromTree`（hgdownload.soe.ucsc.edu）、`hub.txt` 的 NCBI Hosted Hub（ftp.ncbi.nlm.nih.gov）。

## 其它行为变更

- 搜索框支持裸染色体名：输入 `chr8`（不含坐标）可直接跳转到该染色体全程。
- `genePred` / `genePredExt` 解码会解析 `score` 列，便于按打分着色或过滤。
- merged track 通过菜单修改数据范围后立即重绘（此前需要手动触发）。
- 数值轨道右键菜单新增 **Set point size**，支持同时对 merged track 内的多个 points 子轨道生效。
- 上游误提交的 `.git-rewrite/`（BFG 哈希映射，2429 个文件）已从版本控制移除并加入 `.gitignore`。

# Supported Browsers

igv.js require a modern web browser with support for Javascript ECMAScript 2015 (ES6). 

# License

igv.js is [MIT](/LICENSE) licensed.

## More info

The `CLAUDE.md` file provides guidance to Claude Code (claude.ai/code) when working with code in this repository and
contains useful general information about the app, including build and run commands, architecture, and configuration.



### [Release Notes](https://github.com/igvteam/igv.js/releases)

 
