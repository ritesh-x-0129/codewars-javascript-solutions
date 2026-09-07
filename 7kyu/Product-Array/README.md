# Product Array

## Difficulty

**7kyu**

## Problem

Given an array of positive integers, create a new array of the same size where each element is the product of all the elements from the original array except the element at the same index.

## Examples

    productArray([12, 20]) → [20, 12]

    productArray([1, 5, 2]) → [10, 2, 5]

    productArray([10, 3, 5, 6, 2]) → [180, 600, 360, 300, 900]

## Approach

- Create an empty result array.
- For each element, calculate the product of all other elements.
- Skip the element at the current index.
- Add the calculated product to the result array.
- Return the result array.

## Time Complexity

    O(n²)

For each element, the function loops through the entire array.

## Space Complexity

    O(n)

The result array stores `n` products.

## Solution

See `solution.js`

## Status

Solved ✔️
