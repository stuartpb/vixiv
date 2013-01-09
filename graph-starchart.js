var fs = require('fs')
var jsdom = require('jsdom').jsdom
var yaml = require('js-yaml')

var addWarpLines = require ('./addWarpLines.js')

var scdoc = jsdom(fs.readFileSync('starchart.svg','utf-8'))
var graph = require('./planetgraph.yaml')

addWarpLines(scdoc, graph)

fs.writeFileSync('starchart.svg',scdoc.innerHTML,'utf-8')
