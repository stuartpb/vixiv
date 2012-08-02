local match = '(<g.-id=").-(".-<path.-id=").-(".-<text.-id=").-(".-><tspan.-id=").-(".->)(.-)(</tspan>)'
local function replacement(...)
  local matches = {...}
  local planet = matches[6]
  local idbase = planet:gsub(' ','_')
  local function insid(position,ext)
    return table.insert(matches,position,idbase..'-'..ext)
  end
  insid(5,'span')
  insid(4,'label')
  insid(3,'node')
  insid(2,'group')
  return table.concat(matches)
end

local file = io.open('starchart.svg','r')
local content = file:read'*a'
file:close()
file = io.open('starchart.svg','w')
file:write(content:gsub(match,replacement))
file:close()
