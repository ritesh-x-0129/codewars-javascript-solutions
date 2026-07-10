# ➕ Count of Positives / Sum of Negatives

## 📌 Difficulty

**8kyu**

---

## 📝 Problem

Given an array of integers:

- Count the number of positive values.
- Calculate the sum of all negative values.
- `0` is neither positive nor negative.
- If the input is `null` or an empty array, return an empty array.

Return the result as:

```js
[countOfPositives, sumOfNegatives]
```

---

## 💡 Approach

- Return an empty array if the input is `null` or empty.
- Traverse the array once.
- Increment the positive counter for values greater than `0`.
- Add negative values to the running sum.
- Ignore `0`.

---

## ⏱️ Time Complexity

```text
O(n)
```

## 💾 Space Complexity

```text
O(1)
```

---

## 📂 Solution

See **solution.js**

---

## ✅ Status

Solved ✔️