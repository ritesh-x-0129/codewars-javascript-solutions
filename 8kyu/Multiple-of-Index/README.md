# 🔢 Multiple of Index

## 📌 Difficulty

**8kyu**

---

## 📝 Problem

Given an array of integers, return a new array containing only the elements that are multiples of their own index.

The input array will always contain more than one element.

### Examples

    [22, -6, 32, 82, 9, 25]
    → [-6, 32, 25]

    [68, -1, 1, -7, 10, 10]
    → [-1, 10]

    [-56, -85, 72, -26, -14, 76, -27, 72, 35, -21, -67, 87, 0, 21, 59, 27, -92, 68]
    → [-85, 72, 0, 68]

---

## 💡 Approach

- Create an empty array to store the matching elements.
- Loop through every element and its index.
- For index `0`, check separately because division by zero is not possible.
- If the element at index `0` is `0`, include it in the result.
- For every other index, use the modulo operator `%` to check whether the element is evenly divisible by its index.
- If `array[i] % i === 0`, add the element to the result array.
- Return the new array.

---

## ⚠️ Edge Cases

- The input array always contains more than one element.
- Index `0` requires special handling because division by zero is undefined.
- `0` at index `0` is considered a valid result.
- Negative numbers can also be multiples of their index.
- Elements are included only when the remainder is exactly `0`.

---

## ⏱️ Time Complexity

    O(n)

Where `n` is the number of elements in the array.

The array is traversed once.

## 💾 Space Complexity

    O(n)

The result array can contain up to `n` elements.

---

## 📂 Solution

See **solution.js**

---

## ✅ Status

Solved ✔️