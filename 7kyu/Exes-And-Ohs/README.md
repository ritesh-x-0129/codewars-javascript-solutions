# Exes and Ohs

## Difficulty

**7kyu**

## Problem

Check whether a string contains the same number of `x` and `o` characters.

The check must be case insensitive, and the string can contain any characters.

If there are no `x` or `o` characters, return `true`.

## Examples

    XO("ooxx") → true

    XO("xooxx") → false

    XO("ooxXm") → true

    XO("zpzpzpp") → true

    XO("zzoo") → false

## Approach

- Convert the string to lowercase.
- Create counters for `x` and `o`.
- Loop through the string and count each `x` and `o`.
- Return `true` if both counts are equal; otherwise return `false`.

## Time Complexity

    O(n)

The string is traversed once.

## Space Complexity

    O(n)

A lowercase copy of the string is created.

## Solution

See `solution.js`

## Status

Solved ✔️