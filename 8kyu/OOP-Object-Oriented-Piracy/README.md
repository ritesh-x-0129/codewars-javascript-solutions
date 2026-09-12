# OOP: Object Oriented Piracy

## Difficulty

**8kyu**

## Problem

Create a `Ship` class that stores the ship's `draft` and `crew`.

Each crew member adds `1.5` units to the ship's draft.

Add an `isWorthIt()` method that returns `true` if the ship's weight after removing the crew's weight is greater than `20`.

## Examples

    const titanic = new Ship(15, 10)

    titanic.isWorthIt() → false

## Approach

- Create a `Ship` class with `draft` and `crew` properties.
- Calculate the crew's total weight using `crew * 1.5`.
- Subtract the crew's weight from the ship's draft.
- Return `true` if the remaining weight is greater than `20`.

## Time Complexity

    O(1)

Only a fixed number of calculations are performed.

## Space Complexity

    O(1)

No additional data structures are required.

## Solution

See `solution.js`

## Status

Solved ✔️