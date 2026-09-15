# Even Numbers in an Array

## Difficulty

**7kyu**

## Problem

Given an array of numbers, return a new array containing the last `number` even numbers from the original array, in the same order.

The original array will not be empty and will contain at least `number` even numbers.

## Examples

    evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) → [4, 6, 8]

    evenNumbers([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) → [-8, 26]

    evenNumbers([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) → [6]

## Approach

- Start traversing the array from the end.
- Check whether each number is even.
- Add each even number to the result array.
- Stop when the required number of even values has been collected.
- Reverse the result to restore the original order.
- Return the result array.

## Time Complexity

    O(n)

The array may be traversed from the end until the required even numbers are found.

## Space Complexity

    O(number)

The result array stores the required even numbers.

## Solution

See `solution.js`

## Status

Solved ✔️