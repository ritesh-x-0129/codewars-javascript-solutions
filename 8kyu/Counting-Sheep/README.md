# Question: Counting Sheep

## Difficulty

**8kyu**

---

## Description

Given an array of boolean values, count how many sheep are present.

- `true` means a sheep is present.
- `false`, `null`, or `undefined` mean no sheep is present.

---

## Example

```javascript
countSheeps([true, true, false, true]);
// 3
```

---

## Approach

- Traverse the array.
- Count every element whose value is `true`.
- Return the total count.

---

## Time Complexity

**O(n)**

## Space Complexity

**O(1)**

---

## Language

JavaScript (ES6+)