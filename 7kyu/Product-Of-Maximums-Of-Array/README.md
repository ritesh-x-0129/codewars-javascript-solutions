# Product Of Maximums Of Array

## Difficulty

**7kyu**

## Problem

Given an array of integers and a number `k`, find the product of the `k` largest numbers in the array.

The array may contain positive numbers, negative numbers, and zeros. Duplicate values should be considered.

## Examples

    maxProduct([4, 3, 5], 2) → 20

    maxProduct([8, 10, 9, 7], 3) → 720

    maxProduct([-4, -27, -15, -6, -1], 2) → 4

    maxProduct([10, 3, -1, -27], 3) → -30

## Approach

- Sort the array in descending order.
- Take the first `k` largest numbers.
- Multiply them together.
- Return the product.

## Time Complexity

    O(n log n)

The array is sorted before selecting the largest `k` numbers.

## Space Complexity

    O(n)

The sorting operation may use additional space depending on the JavaScript engine.

## Solution

See `solution.js`

## Status

Solved ✔️