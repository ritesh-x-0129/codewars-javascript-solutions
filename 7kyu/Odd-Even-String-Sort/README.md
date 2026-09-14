# Odd-Even String Sort

## Difficulty

**7kyu**

## Problem

Given a string `s`, return another string where the characters at even indexes and odd indexes are grouped separately.

The even-indexed characters should come first, followed by a space, and then the odd-indexed characters.

## Examples

    sortMyString("CodeWars") → "CdWr oeas"

## Approach

- Create two empty strings for the even and odd indexed characters.
- Loop through the string.
- Add characters at even indexes to the `even` string.
- Add characters at odd indexes to the `odd` string.
- Return both strings separated by a space.

## Time Complexity

    O(n)

The string is traversed once.

## Space Complexity

    O(n)

The two resulting strings store all characters from the input.

## Solution

See `solution.js`

## Status

Solved ✔️