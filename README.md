# Simon (jQuery) — No-Async Version

Minimal Simon game using jQuery and callbacks — **no `async/await`**. Each round adds **one new color**; the game flashes **only that new step**, and the **player replays the full sequence**.

## How it works

* `keypress` starts the game.
* `nextSequence()` increments level, picks a color, flashes **that one** color, plays sound.
* Button clicks push to `userClickedPattern`, animate, play sound.
* `checkAnswer(i)` compares step-by-step; on success schedules `nextSequence()` via `setTimeout`, on error plays `wrong`, flashes red, resets.

## Files

* `index.html` — markup + jQuery
* `styles.css` — styles (`.pressed`, `.game-over`)
* `game.js` — game logic
* `sounds/` — `red.mp3`, `blue.mp3`, `green.mp3`, `yellow.mp3`, `wrong.mp3`

## Run

Open `index.html` (preferably via a local server).
