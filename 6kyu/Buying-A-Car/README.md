# Buying a Car

## Difficulty

**6kyu**

## Problem

Calculate how many months it will take to save enough money to buy a new car.

Each month:

- Both car prices decrease by the current percentage.
- The depreciation percentage increases by `0.5%` every two months.
- The monthly saving is added to the available money.

Return an array containing the number of months and the remaining money.

If the old car is already worth as much as or more than the new car, return immediately.

## Examples

    nbMonths(2000, 8000, 1000, 1.5) → [6, 766]

    nbMonths(12000, 8000, 1000, 1.5) → [0, 4000]

    nbMonths(8000, 8000, 1000, 1.5) → [0, 0]

## Approach

- Check if the old car is already worth as much as the new car.
- Track the old price, new price, savings, month, and depreciation rate.
- Increase the depreciation rate by `0.5%` every second month.
- Apply the depreciation to both cars.
- Add the monthly savings.
- Stop when the old car's value plus savings is enough to buy the new car.
- Round the remaining money to the nearest integer.

## Time Complexity

    O(m)

Where `m` is the number of months required to afford the new car.

## Space Complexity

    O(1)

Only a fixed number of variables are used.

## Solution

See `solution.js`

## Status

Solved ✔️