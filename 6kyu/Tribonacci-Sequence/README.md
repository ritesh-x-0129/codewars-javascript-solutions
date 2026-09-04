# Tribonacci Sequence

## Difficulty

**6kyu**

## Problem

Create a function that returns the first `n` elements of a Tribonacci sequence.

A Tribonacci sequence works like Fibonacci, but instead of adding the last two numbers, it adds the last three numbers.

The sequence starts with a given three-number `signature`.

For example:

    tribonacci([1, 1, 1], 10)

returns:

    [1, 1, 1, 3, 5, 9, 17, 31, 57, 105]

If `n` is `0`, return an empty array.

## Examples

    tribonacci([1, 1, 1], 5) → [1, 1, 1, 3, 5]

    tribonacci([0, 0, 1], 8) → [0, 0, 1, 1, 2, 4, 7, 13]

    tribonacci([1, 1, 1], 0) → []

## Approach

- If `n` is 3 or less, return the first `n` elements of the signature.
- Copy the signature into a new array.
- While the result contains fewer than `n` elements, add the last three elements.
- Push each calculated value into the result array.
- Return the completed sequence.

## Time Complexity

    O(n)

The function generates each required Tribonacci element once.

## Space Complexity

    O(n)

The result array stores `n` elements.

## Solution

See `solution.js`

## Status

Solved ✔️