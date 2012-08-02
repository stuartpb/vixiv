local match = '<g.-transform="matrix%(0%.5,0,0,0%.5,(.-),(.-)%)".->.-<text.->.-<tspan.-x="(.-)".->(.-)</tspan>.-</text>.-</g>'
local function replacement(gx,gy,textx,name)
  gx = tonumber(gx)
  gy = tonumber(gy)
  local id = name:gsub(' ','_')
  return table.concat({'<g',
    string.rep(' ',7)..'id="'..id..'-group">',
    string.rep(' ',6)..'<circle',
    string.rep(' ',9)..'id="'..id..'-node"',
    string.rep(' ',9)..'cx="'..tostring(gx+217.5/2)..'"',
    string.rep(' ',9)..'cy="'..tostring(gy+97.5/2)..'"',
    string.rep(' ',9)..'r="10"',
    string.rep(' ',9)..'class="planet-node" />',
    string.rep(' ',6)..'<text',
    string.rep(' ',9)..'id="'..id..'-label"',
    string.rep(' ',9)..'x="'..tostring(gx+textx/2)..'"',
    string.rep(' ',9)..'y="'..tostring(gy+73.33333)..'"',
    string.rep(' ',9)..'class="planet-label">'..name..'</text>',
    string.rep(' ',4)..'</g>',
  },'\n')
end

local file = io.open('starchart.svg','r')
local content = file:read'*a'
file:close()
file = io.open('starchart.svg','w')
file:write((content:gsub(match,replacement)))
file:close()
