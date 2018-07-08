# way-cli
> Helping terminal users find their way.

The terminal alone can achieve so much, so why leave it for directions or durations to various locations? Rather than tabbing to a browser to look up directions to the newest restaurant or the time it takes to reach the babysitter, `way-cli` aims to assist in speeding a terminal user's locational needs.

![preview](https://raw.githubusercontent.com/dainguyendo/way-cli/master/assets/distance.gif)

## Table of contents
- [About](##**about**)
- [Installation](##**installation**)
- [Options](##**options**)
- [Commands](##**commands**)
- [Issues](##**issues**)

---

## **About**

 This project uses the [Google Maps Platform](https://cloud.google.com/maps-platform/). Exposing the available APIs to serve data for project.

---

## Installation

---

## **Options**

#### `-a, --avoid <avoid>`
Options: *(defaults to `null`)*
- `tolls`
- `highways`
- `ferries`
- `indoor`

Adds restrictions to the route as an option to `distance` command. Only a single restriction can be applied as an option.

#### `-h, --help`
Displays help information.

```
Usage: way-cli [options] [command]

  Options:

    -v, --version                           output the version number
    -m, --mode <mode>                       Mode of transportation preference. Options: driving, walking, biycling, or transit (directions command only) (default: driving)
    -u, --unit <unit>                       Return results in either metric or imperial units (default: metric)
    -a, --avoid <avoid>                     Avoidance preferences. Options: tolls, highways, ferries, indoor (default: null)
    -i, --interactive                       Performs command as interactive interface
    -h, --help                              output usage information

  Commands:

    save|s [place] [alias]                  Save a location as an alias for optional <origins> or <destinations> arguements. If the alias already exists the aliases will be updated.
    delete|del [alias]                      Remove an alias.
    list|l                                  List all saved aliases.
    distance|dist [origins] [destinations]  Creates a distance matrix between <origins> and <destinations>
    directions|dir [origin] [destination]   Outputs a Google Maps direction URL for copy/pasta ease
```

#### `-i, --interactive`
Executes the command in interactive mode to assist user interaction. Command arguements and options are presented via [Inquirer prompt](https://github.com/SBoudrias/Inquirer.js).

#### `-m, --mode <mode>`
Options:
- `bicycling`
- `driving (default)`
- `transit`
    - *Only available as an option for `directions` command.*
- `walking`

Specify the mode of transportation/travel for either `directions` or `distance` commands.

#### `-u, --unit <unit>`
Options:
- `imperial`
- `metric (default)`

Specify the unit of results for the `distance` command.

#### `-v, --version`
Ouputs the version of the cli.

---

## **Commands**

#### `delete || del [alias]`
Deletes the specified `alias` from `aliases.json` if the alias exists.

#### `directions || dir [origin] [destination] <options>`
Arguements:
- `origin`
    - Origin address/alias for starting location
    - Example: `'123 abc street, new york, new york'` or `mall` if aliased
- `destination`
    - Refer to `origin` arguement above for example input
- `options`
    - Refer to [options](###options) documentation for possible command options

Returns a [Google Maps Direction URL](https://developers.google.com/maps/documentation/urls/guide#directions-action). Terminals such as [iTerm2](https://www.iterm2.com/) will allow clicking the output and opening the directions into a browser seemlessly.

#### `distance || dist [origins] [destinations] <options>`
Arguements:
- `origins`
    - One or more origins to be used as starting locations for the distance matrix.
    - To specify multiple `origins`, utilize the pipe (`|`) character.
        - Example: `'123 abc street, new york|678 def st, new jersey'`
        - Combinations of both raw addressed and `aliases` will be honored.
- `destinations`
    - Refer to `origins` arguement above for example input
- `options`
    - Refer to [options](###options) documentation for possible command options

Returns a [Google Maps Distance Matrix](https://developers.google.com/maps/documentation/distance-matrix/start) detailing the duration and distance from origins to destinations.

Example: `way-cli distance place-a 'place-b|place-c'`

| Origin        | Destination           | Duration  | Distance   |
| ------------- |:---------------------:| ---------:| ----------:|
| place-a       | place-b               | 20 mins   | 20.0 km    |
| place-a       | place-c               | 13 mins   | 6.5 km     |

#### `list || l`
Lists all saved aliases.

| Alias      | Value                    |
| -----------|:------------------------:|
| mall       | 123 abc street, new york |
| work       | 678 def st, new jersey   |

#### `save || s [place] [alias]`
Arguements:
- `place`
    - An address wanting to be aliased. Example: `123 abc street, new york`
- `alias`
    - Desired alias name to refer to `place` arguement.
         - *Tip: Follow the convention of easy alias schemes such as `work` or `fave-restaurant`*

Saves `place` as `alias` within `aliases.json`. When specifying arguments for `origin(s)` or `destination(s)` the use of aliases will be honored through a dictionary lookup.

---

## **Issues**


