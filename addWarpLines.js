// addWarpLines.js
// For adding warp lines to the warp layer on the star chart.

// How many pixels to separate two-way
var mutshift = 3
var pointdist = 50

function planetId(name) { return name.replace(' ','_') }

function addWarpLines (scdoc, graph){
  var warpLayer = scdoc.getElementById("warp-layer")

  // Clear any existing warp data.
  warpLayer.innerHTML = ''

  for(start in graph) {
    var startId = planetId(start)
    var startNode = scdoc.getElementById(startId + "-node")
    var startX = +startNode.getAttribute("cx")
    var startY = +startNode.getAttribute("cy")

    //this is always 10 but why not be courteous about it
    var noderad = +startNode.getAttribute("r")

    for (dest in graph[start].warps) {
      var destId = planetId(dest)
      var destNode = scdoc.getElementById(destId + "-node")
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

      // Whether to display the line as dotted or not.
      // The only lines that are displayed like this are
      // hidden gates (other than the one to Fana).
      // The reason for displaying them in this fashion
      // is most likely because they intersect several
      // other lines, but testing that is a fair bit more
      // involved than this, which yields the same result.
      var longwarp = graph[start].warps[dest].dist > 20

      if (longwarp) {
        warpClass += " long-warp"
        x1 += noderad * deltaX / length
        y1 += noderad * deltaY / length
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

      warpLine.setAttribute("id",startId+'-to-'+destId+'-warp')
      warpLine.setAttribute("class",warpClass)
      warpLine.setAttribute("x1",x1)
      warpLine.setAttribute("y1",y1)
      warpLine.setAttribute("x2",x2)
      warpLine.setAttribute("y2",y2)
      warpLayer.appendChild(warpLine)
    }
  }
}

var module = module || {}

module.exports = addWarpLines
