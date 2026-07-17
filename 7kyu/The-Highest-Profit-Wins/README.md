# Question: The Highest Profit Wins!

## Difficulty

**7kyu**

---

## Description

Given an array of numbers, return an array containing the minimum and maximum values.

The returned array should be in the format:

```javascript
[minimum, maximum]
```

---

## Example

```javascript
minMax([1, 2, 3, 4, 5]);      // [1, 5]
minMax([2334454, 5]);         // [5, 2334454]
minMax([1]);                  // [1, 1]
```

---

## Approach

- Assume the first element is both the minimum and maximum.
- Traverse the array once.
- Update the minimum and maximum whenever needed.
- Return them in a new array.

---

## Time Complexity

**O(n)**

## Space Complexity

**O(1)**

---

## Language

JavaScript (ES6+)