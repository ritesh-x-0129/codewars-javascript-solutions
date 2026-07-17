# Question: Find the Smallest Integer in the Array

## Difficulty

**8kyu**

---

## Description

Given an array of integers, return the smallest integer in the array.

You can assume the array will never be empty.

---

## Example

```javascript
findSmallestInt([34, 15, 88, 2]);
// 2

findSmallestInt([34, -345, -1, 100]);
// -345
```

---

## Approach

- Assume the first element is the smallest.
- Traverse the array.
- If a smaller element is found, update the smallest value.
- Return the smallest value.

---

## Time Complexity

**O(n)**

## Space Complexity

**O(1)**

---

## Language

JavaScript (ES6+)