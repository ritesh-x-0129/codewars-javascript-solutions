# Transform To Prime

## Difficulty

**6kyu**

## Problem

Given a list of positive integers, determine the minimum non-negative integer that needs to be inserted so that the sum of all elements becomes a prime number.

The new sum must be the closest prime number that is greater than or equal to the current sum.

## Examples

    minimumNumber([3, 1, 2]) → 1

    minimumNumber([2, 12, 8, 4, 6]) → 5

    minimumNumber([50, 39, 49, 6, 17, 28]) → 2

## Approach

- Calculate the sum of all elements in the array.
- Starting from the current sum, check each number to see if it is prime.
- For each number, test whether it is divisible by any number from 2 up to itself.
- When the closest prime is found, return the difference between the prime and the original sum.

## Time Complexity

    O(p²)

Where `p` is the closest prime number greater than or equal to the array sum.

## Space Complexity

    O(1)

Only a few variables are used apart from the input array.

## Solution

See `solution.js`

## Status

Solved ✔️