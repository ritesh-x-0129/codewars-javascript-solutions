# Nth Smallest Element

## Difficulty

**7kyu**

## Problem

Given an array of integers and a position, find the nth smallest element in the array.

Repetitions in the array are not removed, so duplicate values are counted separately.

## Examples

    nthSmallest([3, 1, 2], 2) → 2

    nthSmallest([15, 20, 7, 10, 4, 3], 3) → 7

    nthSmallest([2, 169, 13, -5, 0, -1], 4) → 2

    nthSmallest([2, 1, 3, 3, 1, 2], 3) → 2

## Approach

- Sort the array in ascending order.
- Use `pos - 1` as the array index because arrays are zero-indexed.
- Return the element at that index.

## Time Complexity

    O(n log n)

The array is sorted before finding the required element.

## Space Complexity

    O(log n)

The sorting operation may use additional space depending on the JavaScript engine.

## Solution

See `solution.js`

## Status

Solved ✔️