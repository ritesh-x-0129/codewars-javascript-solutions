# Printing Array Elements with Comma Delimiters

## Difficulty

**8kyu**

## Problem

Given an array of elements, return a string containing all elements separated by commas while preserving their original order.

The array can contain strings, numbers, booleans, objects, or other arrays.

## Examples

    printArray(["h", "o", "l", "a"]) → "h,o,l,a"

    printArray([1, 2, 3]) → "1,2,3"

    printArray([true, false, true]) → "true,false,true"

## Approach

- Use the `join()` method.
- Pass `","` as the separator.
- `join()` converts the array elements into a single comma-delimited string.

## Time Complexity

    O(n)

Each element is processed once.

## Space Complexity

    O(n)

A new string containing all elements is created.

## Solution

See `solution.js`

## Status

Solved ✔️