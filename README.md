# Texas Hold'em State Engine (WIP)

A lightweight, **Texas Hold'em state-management ONLY engine**, currently under __early development.__
This package is designed as a game state engine for building poker systems such as Discord bots, multiplayer games, or AI tools.

---

## Status: Work In Progress 
Last updated: 11/26/2025 next update -> 12/18/2025
This project is in beginning phases, which focuses primarily on:
- Creating core game necessities
- Defining structures
- Preparing for future game-state logic

---

## Current Features (Skeleton Only)


### Card
Defines a card interface, rank/suit types, and base util functions.

### Deck
A class for 52 cards with placeholder methods for:
- `reset()`
- `shuffle()`
- `draw()`

### Player
Represents a Texas Hold'em player, including:
- Player ID (Discord ID, User ID) whatever you choose.
- Chip count
- hole cards
- fold/all-in status
- round-based betting values

--- 

# Roadmap:
### Phase 1 -- In Testing
- Card (Done)
- Deck (Done)
- Player (Done)
- StateMachine (Done)

### Phase 2 -- Base Game Engine
- TexasHoldEm game class
- Deal order & hole cards
- Community cards.
- Turn rotation.

### Phase 3 -- Pot Management
- Contribution Tracking
- All-in support
- Side pots
- Pot distribution

### Phase 4 -- Hand Eval
- Hand ranking logic
- Tie breaking 
- Showdown results
- Ability to display hand ranking via a option to enable.

### Phase 5 -- API
- Serialization & deserialization
- Event Hooks (eg. onAction, onRoundStart)
- Public vs. private state snapshots

### Phase 6 -- Documentation
- Complete API References.
- Example games
- Discord bot demo


### Phase 7 -- Release
- Alpha -> Private Beta -> Public Beta -> Stable

---

# Contributions
Contributions will be welcomed once the project reaches **Phase 2.**
For now the architecture is still being designed/tested/explored.

You are welcome to open:
- Issues
- Feature suggestions
- Discussions

---

# License
This project is released under the **MIT License**, allowing free use, modification, and distribution.

