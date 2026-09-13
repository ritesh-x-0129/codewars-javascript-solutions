# Exclamation Marks Series #2: Remove All Exclamation Marks From The End Of Sentence

## Difficulty

**8kyu**

## Problem

Remove all exclamation marks from the end of a sentence.

Exclamation marks at the beginning or in the middle of the sentence should remain unchanged.

## Examples

    remove("Hi!") → "Hi"

    remove("Hi!!!") → "Hi"

    remove("!Hi") → "!Hi"

    remove("!Hi!") → "!Hi"

    remove("Hi! Hi!") → "Hi! Hi"

    remove("Hi") → "Hi"

## Approach

- Use the `replace()` method with a regular expression.
- `!+` matches one or more exclamation marks.
- `$` ensures that only exclamation marks at the end of the string are matched.
- Replace the matched exclamation marks with an empty string.

## Time Complexity

    O(n)

The string may need to be traversed to find the matching characters.

## Space Complexity

    O(n)

A new string is created after removing the exclamation marks.

## Solution

See `solution.js`

## Status

Solved ✔️