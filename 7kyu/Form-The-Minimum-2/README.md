# Form The Minimum

## Difficulty

**7kyu**

## Problem

Given a list of digits, return the smallest number that can be formed using each unique digit only once.

Duplicate digits should be ignored.

## Examples

    minValue([1, 3, 1]) → 13

    minValue([5, 7, 5, 9, 7]) → 579

    minValue([1, 9, 3, 1, 7, 4, 6, 6, 7]) → 134679

## Approach

- Remove duplicate digits using a `Set`.
- Sort the remaining digits in ascending order.
- Join the digits to form the smallest possible number.
- Convert the resulting string into a number and return it.

## Time Complexity

    O(n log n)

Sorting the unique digits takes `O(n log n)` time.

## Space Complexity

    O(n)

The `Set` and resulting array store the unique digits.

## Solution

See `solution.js`

## Status

Solved ✔️