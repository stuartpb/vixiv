warps={
  Taros    = {"Winow"};
  Winow    = {"Mapate","Renbuda"};
  Renbuda  = {"Igran","Taros"};
  Menfarb  = {"Tif","Zagueel","Gurin Fa"};
  Mapate   = {"Mordarl","Igran"};
  Igran    = {"Chekon","Sankmee"};
  Chekon   = {"Menfarb","Pukkeera","Mapate","Igran"};
  Nerleeni = {"Rappi"};
  Zagueel  = {"Logree","Pukkeera"};
  Pukkeera = {"Rappi","Chekon"};
  Fana = {"Sankmee"}; -- only accessible through hidden gate on Renbuda
  Sankmee  = {"Menfarb","Igran","Renbuda","Dalde-Dalde"};
  Logree   = {"Zagueel","Menfarb"};
  Tif = {"Logree"};
  ["Gurin Fa"] = {"Earth"};
  ["Dalde-Dalde"] = {"Sankmee","Winow"};
  Rappi    = {"Nerleeni","Tif"};
  ["Tetamus II"] = {}; -- final boss only - no exit
  Earth    = {"Tetamus II"};
  Mordarl  = {"Mapate"};
  -- Gamish - listed only in the log
}

hidden={
  Taros    = {"Menfarb"};
  Winow    = {"Rappi","Dalde-Dalde"};
  Renbuda  = {"Fana"};
  ["Dalde-Dalde"] = {"Winow"};
}

stats={
  Menfarb={ --from Taros
    dist = 41.2e10,
    time = 60
  }
}
