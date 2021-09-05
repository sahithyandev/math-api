'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var mathjax = require('mathjax-full/js/mathjax');
var tex = require('mathjax-full/js/input/tex');
var svg = require('mathjax-full/js/output/svg');
var liteAdaptor = require('mathjax-full/js/adaptors/liteAdaptor');
var html$1 = require('mathjax-full/js/handlers/html');
var AllPackages = require('mathjax-full/js/input/tex/AllPackages');

// MathJax bootstrap
var adaptor = new liteAdaptor.LiteAdaptor();
html$1.RegisterHTMLHandler(adaptor);
var html = mathjax.mathjax.document("", {
    InputJax: new tex.TeX({ packages: AllPackages.AllPackages }),
    OutputJax: new svg.SVG({ fontCache: "none" })
});
function tex2svg(equation, isInline, color, alternateColor) {
    var svg = adaptor
        .innerHTML(html.convert(equation, { display: !isInline }))
        .replace(/(?<=<svg.+?>)/, "\n<style>\n  * {\n    fill: " + (color || "black") + ";\n  }\n  @media (prefers-color-scheme: dark) {\n    * {\n      fill: " + (alternateColor || color || "white") + ";\n    }\n  }\n</style>");
    if (svg.includes("merror")) {
        return svg.replace(/<rect.+?><\/rect>/, "");
    }
    return svg;
}

function renderLatex(options) {
    var content = options.content, _a = options.mode, mode = _a === void 0 ? "block" : _a, _b = options.color, color = _b === void 0 ? "black" : _b, alternateColor = options.alternateColor;
    return [
        "<?xml version=\"1.0\" standalone=\"no\" ?>",
        "<!DOCTYPE svg PUBLIC \"-//W3C//DTD SVG 1.0//EN\" \"http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd\">",
        tex2svg(content, mode === "inline", color, alternateColor)
    ].join("\n");
}

exports.renderLatex = renderLatex;
