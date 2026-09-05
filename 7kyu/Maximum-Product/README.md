# Maximum Product

## Difficulty

**7kyu**

## Problem

Given an array of integers, find the maximum product obtained by multiplying two adjacent numbers in the array.

The array contains at least two numbers and may contain positive numbers, negative numbers, and zeroes.

## Examples

    [1, 2, 3] → 6

    [9, 5, 10, 2, 24, -1, -48] → 50

    [-23, 4, -5, 99, -27, 329, -2, 7, -921] → -14

## Approach

- Start with the product of the first two elements.
- Loop through every pair of adjacent elements.
- Calculate the product of each pair.
- Keep the largest product found.
- Return the maximum product.

## Time Complexity

    O(n)

The array is traversed once.

## Space Complexity

    O(1)

Only a few variables are used.

## Solution

See `solution.js`

## Status

Solved ✔️