# Consonant Value

## Difficulty

**6kyu**

## Problem

Given a lowercase string containing only alphabetic characters, return the highest value of its consonant substrings.

Vowels are `a`, `e`, `i`, `o`, and `u`. Consonants are all other letters.

Each letter has a value based on its position in the alphabet:

    a = 1, b = 2, c = 3, ..., z = 26

The value of a consonant substring is the sum of the values of all its consonants.

## Examples

    solve("zodiac") → 26

    solve("strength") → 57

## Approach

- Store the vowels in a string for easy checking.
- Traverse the input string character by character.
- Reset the current sum to `0` whenever a vowel is found.
- For each consonant, calculate its alphabet value using `charCodeAt()`.
- Add the value to the current substring sum.
- Keep track of the maximum consonant substring value.
- Return the maximum value.

## Time Complexity

    O(n)

The string is traversed once.

## Space Complexity

    O(1)

Only a few variables are used.

## Solution

See `solution.js`

## Status

Solved ✔️