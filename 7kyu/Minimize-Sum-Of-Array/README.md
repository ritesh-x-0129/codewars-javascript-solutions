# Minimize Sum Of Array

## Difficulty

**7kyu**

## Problem

Given an array of positive integers with an even number of elements, pair the numbers so that the sum of the products of each pair is as small as possible.

## Examples

    minSum([5, 4, 2, 3]) → 22

    minSum([12, 6, 10, 26, 3, 24]) → 342

    minSum([9, 2, 8, 7, 5, 4, 0, 6]) → 74

## Approach

- Sort the array in ascending order.
- Pair the smallest number with the largest number.
- Continue pairing from both ends toward the middle.
- Add the product of each pair.
- Return the final sum.

## Time Complexity

    O(n log n)

Sorting the array takes O(n log n), while pairing takes O(n).

## Space Complexity

    O(log n)

The sorting operation may use additional space depending on the JavaScript engine.

## Solution

See `solution.js`

## Status

Solved ✔️