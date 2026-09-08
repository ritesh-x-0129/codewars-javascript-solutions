# Minimum Steps

## Difficulty

**7kyu**

## Problem

Given an array of positive integers and a value `K`, find how many steps are required to add the smallest numbers until their sum becomes greater than or equal to `K`.

## Examples

    minimumSteps([1, 10, 12, 9, 2, 3], 6) → 2

    minimumSteps([8, 9, 4, 2], 23) → 3

    minimumSteps([19, 98, 69, 28, 75, 45, 17, 98, 67], 464) → 8

## Approach

- Sort the array in ascending order.
- Start by adding the two smallest numbers.
- Keep adding the next smallest number until the sum reaches `K`.
- Return the number of steps required.

## Time Complexity

    O(n log n)

Sorting the array takes `O(n log n)` time.

## Space Complexity

    O(1)

No additional data structure is required apart from variables.

## Solution

See `solution.js`

## Status

Solved ✔️