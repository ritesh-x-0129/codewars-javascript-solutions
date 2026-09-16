# Training JS #6: Basic Data Types - Boolean and Conditional Statements

## Difficulty

**8kyu**

## Problem

Create a function that accepts a value `val` and returns a string based on its Boolean value.

If `val` is `false` or can be converted to `false`, return `"false"`.

Otherwise, return `"true"`.

The following values are converted to `false` in conditional statements:

    0, -0, "", null, undefined, NaN

## Examples

    trueOrFalse(true) → "true"

    trueOrFalse(false) → "false"

    trueOrFalse(1) → "true"

    trueOrFalse(0) → "false"

    trueOrFalse("") → "false"

## Approach

- Use an `if...else` conditional statement.
- If `val` is truthy, return `"true"`.
- If `val` is falsy, return `"false"`.

## Time Complexity

    O(1)

Only a single conditional check is performed.

## Space Complexity

    O(1)

No additional data structures are required.

## Solution

See `solution.js`

## Status

Solved ✔️