# Question: Sum of a Sequence [Hard-Core Version]

## Difficulty

**6kyu**

---

## Description

Calculate the sum of a sequence defined by:

- `begin` – Starting number
- `end` – Ending limit
- `step` – Step size

Return `0` if the sequence is impossible.

Unlike the easier version of this kata, very large ranges are tested, so an optimized mathematical solution is required.

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

- Handle impossible sequences.
- Calculate the number of terms using a mathematical formula.
- Find the last valid term.
- Apply the arithmetic progression (AP) sum formula.
- Return the calculated sum without iterating through the sequence.

---

## Time Complexity

**O(1)**

## Space Complexity

**O(1)**

---

## Language

JavaScript (ES6+)