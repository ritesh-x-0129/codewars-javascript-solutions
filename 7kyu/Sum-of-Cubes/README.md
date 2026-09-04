# Sum of Cubes

## Difficulty

**7kyu**

## Problem

Create a function that takes a positive integer `n`, sums all the cubed values from `1` to `n` (inclusive), and returns that sum.

For example:

    sumCubes(2) → 9

Because:

    1³ + 2³ = 1 + 8 = 9

## Examples

    sumCubes(2) → 9

    sumCubes(3) → 36

## Approach

- Start the result at `0`.
- Loop from `1` to `n`.
- Add the cube of each number to the result.
- Return the final sum.

## Time Complexity

    O(n)

The loop runs once for every number from `1` to `n`.

## Space Complexity

    O(1)

Only a few variables are used.

## Solution

See `solution.js`

## Status

Solved ✔️