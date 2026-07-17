# Question: Lario and Muigi Pipe Problem

## Difficulty

**8kyu**

---

## Description

Given a sorted array of unique numbers, return a new array containing every number from the minimum value to the maximum value (inclusive).

---

## Example

```javascript
pipeFix([1, 3, 5, 6, 7, 8]);
// [1, 2, 3, 4, 5, 6, 7, 8]
```

---

## Approach

- Start from the first element of the array.
- Continue until the last element.
- Add every number to a new array.
- Return the completed array.

---

## Time Complexity

**O(n)**

## Space Complexity

**O(n)**

---

## Language

JavaScript (ES6+)