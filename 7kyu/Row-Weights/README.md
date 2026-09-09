# Row Weights

## Difficulty

**7kyu**

## Problem

Given an array of positive integers representing the weights of people standing in a row, divide them into two teams.

The first person goes into team 1, the second into team 2, the third into team 1, and so on.

Return an array containing the total weight of team 1 and team 2.

## Examples

    rowWeights([13, 27, 49]) → [62, 27]

    rowWeights([50, 60, 70, 80]) → [120, 140]

    rowWeights([80]) → [80, 0]

## Approach

- Create two variables to store the total weight of each team.
- Loop through the array.
- Add values at even indexes to team 1.
- Add values at odd indexes to team 2.
- Return both team weights in an array.

## Time Complexity

    O(n)

The array is traversed once.

## Space Complexity

    O(1)

Only variables are used apart from the returned array.

## Solution

See `solution.js`

## Status

Solved ✔️