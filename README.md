# VIXIV

A helper for the DSiWare game X-Scape

## Data format

Each key in planetgraph.yaml is a different planet.

### log

The description of the planet in the log.

### stats

The statistics shown when loading a planet:

- eqrad: The equatorial radius of that planet (in km).
- porad: The polar radius of that planet (in km).
- mass: The mass of that planet (in 10x24 kg).

### quests

A list of the quests available on a planet:

- name: The name of the quest (as described in the log).
- pts: The number of points awarded for completing that quest.
- type: The type of quest, one of:
  - combat: Enemy fighting.
  - coin: Coin collecting.
  - defense: Point defense.
  - race: Aerial race.
- description: The description of the quest in the log.

### warps

A hash of the destination planets available from warp gates on the planet:

- hidden: If the gate is initially hidden, this is `true`.
- dist: The length of the tunnel shown while loading (in 10x10 km).
- time: The time limit to clear the tunnel (in seconds).
