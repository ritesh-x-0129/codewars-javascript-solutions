# esreveR

## Difficulty

**7kyu**

## Problem

Write a function `reverse` that reverses a list and returns the elements in reverse order.

The dedicated built-in reverse functionality is disabled.

## Examples

    reverse([1, 2, 3, 4]) → [4, 3, 2, 1]

    reverse(["a", "b", "c"]) → ["c", "b", "a"]

## Approach

- Create an empty result array.
- Start iterating from the last element of the input array.
- Add each element to the result array.
- Return the result array.

## Time Complexity

    O(n)

Each element is visited once.

## Space Complexity

    O(n)

The result array stores all `n` elements.

## Solution

See `solution.js`

## Status

Solved ✔️