# Basic Subclasses - Adam and Eve

## Difficulty

**8kyu**

## Problem

Implement the `Human`, `Man`, and `Woman` classes.

- `Man` must be a subclass of `Human`.
- `Woman` must be a subclass of `Human`.
- `God.create()` must return an array of length 2.
- The first object must be an instance of `Man`.
- The second object must be an instance of `Woman`.

## Examples

    God.create()[0] instanceof Man → true

    God.create()[1] instanceof Woman → true

    God.create()[0] instanceof Human → true

    God.create()[1] instanceof Human → true

## Approach

- Create a base `Human` class.
- Extend `Human` to create `Man` and `Woman`.
- Create a static `create()` method in `God`.
- Return a `Man` instance followed by a `Woman` instance.

## Time Complexity

    O(1)

Only two objects are created.

## Space Complexity

    O(1)

Only two objects are created.

## Solution

See `solution.js`

## Status

Solved ✔️