# Question: Sum without highest and lowest number

## Difficulty
**8kyu**

---

## Description

Sum all the numbers of a given array except the highest and the lowest value.

- Remove only one highest and one lowest value.
- If the input is `null`, empty, or contains only one element, return `0`.

---

## Example

```javascript
sumArray([6, 2, 1, 8, 10]) // 16
sumArray([1, 1, 11, 2, 3]) // 6
sumArray(null)             // 0
```

---

## Approach

- Check if the input is valid.
- Find the highest element.
- Find the lowest element.
- Calculate the total sum of all elements.
- Return:

```text
Total Sum - Highest Element - Lowest Element
```

---

## Time Complexity

**O(n)**

## Space Complexity

**O(1)**

---

## Language

JavaScript (ES6+)