# Get ASCII Value of Character

## Difficulty

**8kyu**

## Problem

Create a function that returns the ASCII value of a given character.

## Examples

    getASCII("A") → 65

    getASCII("a") → 97

    getASCII("0") → 48

## Approach

- Use the `charCodeAt()` method.
- Pass index `0` to get the ASCII value of the first character.
- Return the resulting ASCII value.

## Time Complexity

    O(1)

Only one character is processed.

## Space Complexity

    O(1)

No additional data structures are required.

## Solution

See `solution.js`

## Status

Solved ✔️