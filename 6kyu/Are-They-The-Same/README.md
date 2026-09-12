# Are They the "Same"?

## Difficulty

**6kyu**

## Problem

Given two arrays, check whether the second array contains the squares of all elements from the first array, with the same multiplicities and regardless of order.

If either array is `null`, return `false`.

## Examples

    comp([121, 144, 19, 161, 19, 144, 19, 11],
         [121, 14641, 20736, 361, 25921, 361, 20736, 361]) → true

    comp([121, 144, 19, 161, 19, 144, 19, 11],
         [132, 14641, 20736, 361, 25921, 361, 20736, 361]) → false

    comp([], []) → true

## Approach

- Check if either array is `null`.
- Check whether both arrays have the same length.
- If both arrays are empty, return `true`.
- Sort both arrays in ascending order.
- Loop through the first array and square each element.
- Compare the squared value with the corresponding element in the second array.
- Return `false` if any value does not match; otherwise return `true`.

## Time Complexity

    O(n log n)

Sorting both arrays takes `O(n log n)` time.

## Space Complexity

    O(1)

Only variables are used apart from the sorting operation.

## Solution

See `solution.js`

## Status

Solved ✔️