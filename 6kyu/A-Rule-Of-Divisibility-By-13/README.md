# A Rule of Divisibility by 13

## Difficulty

**6kyu**

## Problem

Given an integer `n`, repeatedly process its digits using the repeating sequence of weights:

    1, 10, 9, 12, 3, 4

Starting from the rightmost digit, multiply each digit by the corresponding weight and sum the products.

Repeat the process until the resulting number becomes stationary, then return that number.

## Examples

    thirt(1234567) → 87

    thirt(321) → 48

## Approach

- Store the repeating weights in an array.
- Extract digits from right to left using `% 10`.
- Multiply each digit by the corresponding weight.
- Use `i % 6` because the weight sequence repeats every 6 positions.
- Repeat the process until the calculated sum is equal to the current number.

## Time Complexity

    O(d)

Where `d` is the number of digits processed across the iterations.

## Space Complexity

    O(1)

Only a fixed-size weights array and a few variables are used.

## Solution

See `solution.js`

## Status

Solved ✔️