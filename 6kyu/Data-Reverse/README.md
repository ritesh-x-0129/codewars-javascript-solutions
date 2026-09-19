# Data Reverse

## Difficulty

**6kyu**

## Problem

Reverse a stream of binary data by reversing the order of its 8-bit segments.

The order of bits inside each 8-bit segment must remain unchanged.

The total number of bits is always a multiple of 8.

## Examples

    [11111111, 00000000, 00001111, 10101010]

    → [10101010, 00001111, 00000000, 11111111]

## Approach

- Start from the beginning of the last 8-bit segment.
- Move backwards through the array in steps of 8.
- Extract each 8-bit segment using `slice()`.
- Add each segment to the result array using the spread operator.

## Time Complexity

    O(n)

Each bit is processed once.

## Space Complexity

    O(n)

The result array stores all `n` bits.

## Solution

See `solution.js`

## Status

Solved ✔️