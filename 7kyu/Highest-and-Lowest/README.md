# Question: Highest and Lowest

## Difficulty

**7kyu**

---

## Description

Given a string of space-separated numbers, return the highest and lowest number as a single string.

The highest number should come first, followed by the lowest number.

---

## Example

```javascript
highAndLow("1 2 3 4 5");    // "5 1"
highAndLow("1 2 -3 4 5");   // "5 -3"
highAndLow("1 9 3 4 -5");   // "9 -5"
```

---

## Approach

- Split the string into an array.
- Convert each value to a number.
- Traverse the array to find the highest and lowest values.
- Return them as a space-separated string.

---

## Time Complexity

**O(n)**

## Space Complexity

**O(n)**

---

## Language

JavaScript (ES6+)