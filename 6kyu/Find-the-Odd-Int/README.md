# Question: Find the Odd Int

## Difficulty

**6kyu**

---

## Description

Given an array of integers, find the integer that appears an **odd number of times**.

It is guaranteed that exactly one integer appears an odd number of times.

---

## Example

```javascript
findOdd([7]); // 7
findOdd([1, 1, 2]); // 2
findOdd([0, 1, 0, 1, 0]); // 0
findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]); // 4
```

---

## Approach

- Traverse each element in the array.
- Count how many times the current element appears.
- If its count is odd, return that element.

---

## Time Complexity

**O(n²)**

## Space Complexity

**O(1)**

---

## Language

JavaScript (ES6+)