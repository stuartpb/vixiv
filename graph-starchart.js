var fs = require("fs")
var jsdom = require("jsdom").jsdom
var yaml = require("js-yaml")
var scdoc = jsdom(fs.readFileSync("starchart.svg","utf-8"))

var noderad = 10
var pointdist = 50

function planetId(name) { return name.replace(' ','_') }

var graph = require("./planetgraph.yaml")

var warpLayer = scdoc.getElementById("warp-layer")

for(start in graph) {
  for (dest in graph[start].warps) {
    var startId = planetId(start)
    var destId = planetId(dest)
    var startNode = scdoc.getElementById(startId + "-node")
    var destNode = scdoc.getElementById(destId + "-node")
    var startX = +startNode.getAttribute("cx")
    var startY = +startNode.getAttribute("cy")
    var destX = +destNode.getAttribute("cx")
    var destY = +destNode.getAttribute("cy")
    var deltaX = destX - startX
    var deltaY = destY - startY
    var length = Math.sqrt(deltaX * deltaX + deltaY * deltaY)
    var warpLine = scdoc.createElement("line")
    var warpClass = graph[start].warps[dest].time ? "have-data-warp" : "missing-data-warp"
    if (graph[start].warps[dest].hidden && dest != "Fana") { warpClass += " hidden-warp" }
    warpLine.setAttribute("id",startId+'-to-'+destId+'-warp')
    warpLine.setAttribute("class",warpClass)
    warpLine.setAttribute("x1",startX + noderad * deltaX / length)
    warpLine.setAttribute("y1",startY + noderad * deltaY / length)
    warpLine.setAttribute("x2",destX - pointdist * deltaX / length)
    warpLine.setAttribute("y2",destY - pointdist * deltaY / length)
    warpLayer.appendChild(warpLine)
  }
}

fs.writeFileSync("starchart-warpy.svg",scdoc.innerHTML,"utf-8")
