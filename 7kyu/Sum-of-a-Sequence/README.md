# Question: Sum of a Sequence

## Difficulty

**7kyu**

---

## Description

Write a function that returns the sum of a sequence of integers.

The sequence is defined by three non-negative values:

- `begin`
- `end`
- `step`

If `begin` is greater than `end`, return `0`.

If `end` cannot be reached exactly by repeatedly adding `step`, do not include it in the sum.

---

## Example

```javascript
sequenceSum(2, 2, 2); // 2
sequenceSum(2, 6, 2); // 12
sequenceSum(1, 5, 1); // 15
sequenceSum(1, 5, 3); // 5
```

---

## Approach

- Return `0` if the starting value is greater than the ending value.
- Traverse the sequence from `begin` to `end` using the given `step`.
- Add each value to the total sum.
- Return the final sum.

---

## Time Complexity

**O(n)**

## Space Complexity

**O(1)**

---

## Language

JavaScript (ES6+)