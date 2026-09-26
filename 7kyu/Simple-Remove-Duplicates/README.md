# Simple Remove Duplicates

## Difficulty

**7kyu**

## Problem

Remove duplicate integers from an array while keeping only the last (rightmost) occurrence of each element.

## Examples

    solve([3, 4, 4, 3, 6, 3]) → [4, 6, 3]

    solve([1, 2, 1, 2, 1]) → [2, 1]

## Approach

- Traverse the array from right to left.
- Use a `Set` to keep track of values already encountered.
- Add an element to the result only if it has not been seen before.
- Reverse the result to restore the original left-to-right order of the remaining elements.

## Time Complexity

    O(n)

The array is traversed once, and reversing the result also takes O(n).

## Space Complexity

    O(n)

The `Set` and result array can store up to `n` elements.

## Solution

See `solution.js`

## Status

Solved ✔️