# Highest Rank Number in an Array

## Difficulty

**6kyu**

## Problem

Complete the method which returns the number that appears most frequently in the given array.

If multiple numbers have the same highest frequency, return the largest number among them.

The array will never be empty.

## Examples

    highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12]) → 12

    highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12, 10]) → 12

    highestRank([12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]) → 3

## Approach

- Loop through each number in the array.
- For each number, count how many times it appears.
- Keep track of the highest frequency found so far.
- If two numbers have the same frequency, keep the larger number.
- Return the number with the highest frequency.

## Time Complexity

    O(n²)

For each element, the array is traversed again to count its occurrences.

## Space Complexity

    O(1)

Only a few variables are used.

## Solution

See `solution.js`

## Status

Solved ✔️