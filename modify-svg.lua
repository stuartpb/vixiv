local match = '<path(.-) />'
local function replacement(content)
  local id = content:match'id="(.-)"'
  local cx = content:match'sodipodi:cx="(.-)"'
  local cy = content:match'sodipodi:cy="(.-)"'
  return table.concat({'<circle',
    'id="'..id..'"',
    'cx="'..cx..'"',
    'cy="'..cy..'"',
    'r="20"',
    'class="planet-node" />'},'\n'..string.rep(' ',9))
end

local file = io.open('starchart.svg','r')
local content = file:read'*a'
file:close()
file = io.open('starchart.svg','w')
file:write((content:gsub(match,replacement)))
file:close()
