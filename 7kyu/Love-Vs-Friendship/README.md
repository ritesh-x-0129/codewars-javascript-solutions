# Love vs Friendship

## Difficulty

**7kyu**

## Problem

Calculate the value of a word based on the sum of the alphabet positions of its characters.

The alphabet values are:

    a = 1, b = 2, c = 3, ... z = 26

The input contains only lowercase letters and is never empty.

## Examples

    wordsToMarks("love") → 54

    wordsToMarks("friendship") → 108

    wordsToMarks("code") → 27

## Approach

- Convert the string into an array of characters.
- Use `reduce()` to calculate the total value.
- Convert each character to its ASCII value using `charCodeAt()`.
- Subtract `96` to convert `a` to `1`, `b` to `2`, and so on.
- Add each character's value to the total.

## Time Complexity

    O(n)

Each character is processed once.

## Space Complexity

    O(n)

The spread operator creates an array of the characters.

## Solution

See `solution.js`

## Status

Solved ✔️