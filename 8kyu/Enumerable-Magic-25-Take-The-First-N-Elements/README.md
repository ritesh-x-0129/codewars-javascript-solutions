# Enumerable Magic #25 - Take the First N Elements

## Difficulty

**8kyu**

## Problem

Create a function that accepts a sequence and a non-negative integer `n`, and returns a sequence containing the first `n` elements.

If the sequence has fewer than `n` elements, return all of them.

## Examples

    take([0, 1, 2, 3, 5, 8, 13], 3) → [0, 1, 2]

    take([0, 1, 2, 3, 5, 8, 13], 0) → []

    take([], 3) → []

## Approach

- Use the `slice()` method to extract elements from the beginning of the array.
- Start from index `0` and stop at index `n`.
- `slice()` automatically returns all available elements if `n` is greater than the array length.

## Time Complexity

    O(n)

The function returns the first `n` elements.

## Space Complexity

    O(n)

The returned array stores up to `n` elements.

## Solution

See `solution.js`

## Status

Solved ✔️