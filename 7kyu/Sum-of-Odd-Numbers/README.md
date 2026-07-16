# Question: Sum of Odd Numbers

## Difficulty

**7kyu**

---

## Description

Given the triangle of consecutive odd numbers, return the sum of all numbers in the **nth row**.

---

## Example

```javascript
rowSumOddNumbers(1); // 1
rowSumOddNumbers(2); // 8
rowSumOddNumbers(5); // 125
```

---

## Approach

- Find the first odd number of the nth row.
- Add the next `n` consecutive odd numbers.
- Return the total sum.

---

## Time Complexity

**O(n)**

## Space Complexity

**O(1)**

---

## Language

JavaScript (ES6+)