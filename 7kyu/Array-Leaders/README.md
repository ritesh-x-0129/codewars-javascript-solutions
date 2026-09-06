# Array Leaders

## Difficulty

**7kyu**

## Problem

An element is a leader if it is greater than the sum of all the elements to its right.

Return all the leaders in the same order as they appear in the original array.

## Examples

    arrayLeaders([1, 2, 3, 4, 0]) → [4]

    arrayLeaders([16, 17, 4, 3, 5, 2]) → [17, 5, 2]

    arrayLeaders([5, 2, -1]) → [5, 2]

## Approach

- Traverse the array from right to left.
- Keep track of the sum of elements on the right.
- If the current element is greater than the right-side sum, add it to the leaders array.
- Reverse the result to restore the original order.
- Return the leaders array.

## Time Complexity

    O(n)

The array is traversed once.

## Space Complexity

    O(n)

The leaders array stores the result.

## Solution

See `solution.js`

## Status

Solved ✔️