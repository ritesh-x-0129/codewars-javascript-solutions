# 🔄 Double Trouble

## 📌 Difficulty

**7kyu**

---

## 📝 Problem

Given an array of integers and a target value:

- Check each pair of consecutive numbers from left to right.
- If the sum of a pair equals the target, remove the second number.
- Continue until the end of the array.
- Return the modified array.

---

## 💡 Approach

- Traverse the array from left to right.
- Check whether the current element and the next element sum to the target.
- If they do, remove the second element using `splice()`.
- Move one step back to recheck the new consecutive pair.
- Return the updated array.

---

## ⏱️ Time Complexity

```text
O(n²)
```

> `splice()` shifts elements, making removal an O(n) operation.

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