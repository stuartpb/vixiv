var fs = require("fs")
var jsdom = require("jsdom").jsdom
var yaml = require("js-yaml")
var scdoc = jsdom(fs.readFileSync("starchart.svg","utf-8"))

var noderad = 10
var mutshift = 3
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
    var warpClass = "warp-line"
    var x1 = startX + noderad * deltaX / length
    var y1 = startY + noderad * deltaY / length
    var x2 = destX - pointdist * deltaX / length
    var y2 = destY - pointdist * deltaY / length
    var longwarp = graph[start].warps[dest].hidden && dest != "Fana"

    if (longwarp) {
      warpClass += " long-warp"
      x2 += (pointdist/2) * deltaX / length
      y2 += (pointdist/2) * deltaY / length
    }

    if (graph[dest].warps[start]) {
      warpClass += " two-way-warp"
      x1 += mutshift * -deltaY / length
      x2 += mutshift * -deltaY / length + (longwarp?0:pointdist/4) * deltaX / length
      y1 += mutshift * deltaX / length
      y2 += mutshift * deltaX / length + (longwarp?0:pointdist/4) * deltaY / length
    }

    if (!graph[start].warps[dest].time) {
      warpClass += " missing-data"
    }

    warpLine.setAttribute("id",startId+'-to-'+destId+'-warp')
    warpLine.setAttribute("class",warpClass)
    warpLine.setAttribute("x1",x1)
    warpLine.setAttribute("y1",y1)
    warpLine.setAttribute("x2",x2)
    warpLine.setAttribute("y2",y2)
    warpLayer.appendChild(warpLine)
  }
}

fs.writeFileSync("starchart-warpy.svg",scdoc.innerHTML,"utf-8")
