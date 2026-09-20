# Switcheroo

## Difficulty

**7kyu**

## Problem

Given a string containing the letters `a`, `b`, and/or `c`, switch the positions of `a` and `b`.

- Change `a` to `b`.
- Change `b` to `a`.
- Leave `c` unchanged.

## Examples

    switcheroo("acb") → "bca"

    switcheroo("aabacbaa") → "bbabcabb"

## Approach

- Convert the string into an array of characters using `split()`.
- Use `map()` to replace `a` with `b` and `b` with `a`.
- Keep `c` unchanged.
- Join the characters back into a string.

## Time Complexity

    O(n)

Each character is processed once.

## Space Complexity

    O(n)

A new character array and result string are created.

## Solution

See `solution.js`

## Status

Solved ✔️