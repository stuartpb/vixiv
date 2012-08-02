warps={
  Taros    = {"Winow"};
  Winow    = {"Mapate","Renbuda"};
  Mapate   = {"Mordarl","Igran"};
  Renbuda  = {"Igran","Taros"};
  Mordarl  = {"Mapate"};
  Igran    = {"Chekon","Sankmee"};
  Chekon   = {"Menfarb","Pukkeera","Mapate","Igran"};
  Sankmee  = {"Menfarb","Igran","Renbuda","Dalde-Dalde"};
  Menfarb  = {"Tif","Zagueel","Gurin Fa"};
  Pukkeera = {"Rappi","Chekon"};
  ["Dalde-Dalde"] = {"Sankmee","Winow"};
  Tif = {"Logree"};
  Zagueel  = {"Logree","Pukkeera"};
  ["Gurin Fa"] = {"Earth"};
  Rappi    = {"Nerleeni","Tif"};
  Logree   = {"Zagueel","Menfarb"};
  Earth    = {"Tetamus II"};
  Nerleeni = {"Rappi"};
  ["Tetamus II"] = {}; -- final boss only - no exit
  Fana = {"Sankmee"}; -- only accessible through hidden gate on Renbuda
}

hidden={
  Taros    = {"Menfarb"};
  Renbuda  = {"Fana"};
  Winow    = {"Rappi","Dalde-Dalde"};
  ["Dalde-Dalde"] = {"Winow"};
}

stats={
  Menfarb={ --from Taros
    dist = 41.2e10,
    time = 60
  }
}
