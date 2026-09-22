# Power

## Difficulty

**8kyu**

## Problem

Create a function that raises a number to a given power without using `Math.pow()`, `**`, or other restricted Math functions.

The function should multiply the number by itself the specified number of times.

## Examples

    numberToPower(3, 2) → 9

    numberToPower(2, 3) → 8

    numberToPower(10, 6) → 1000000

## Approach

- Start `result` at `1`.
- Loop `power` times.
- Multiply `result` by `number` during each iteration.
- Return the final result.

## Time Complexity

    O(power)

The loop runs once for each power.

## Space Complexity

    O(1)

Only one result variable is used.

## Solution

See `solution.js`

## Status

Solved ✔️