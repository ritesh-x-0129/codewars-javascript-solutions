# Remove Duplicates from List

## 📌 Difficulty

**8kyu**

---

## 📝 Problem

Given an array of non-negative numbers, remove all duplicate values while preserving the original order of the elements.

Return the resulting array.

---

## 💡 Approach

1. Create a `Set` from the input array to automatically remove duplicate values.
2. Convert the `Set` back into an array using the spread operator (`...`).
3. Return the new array.

Since JavaScript's `Set` preserves insertion order, the original sequence remains unchanged.

---

## ⏱ Time Complexity

```text
O(n)
```

Creating a `Set` and converting it back to an array both require linear time.

---

## 💾 Space Complexity

```text
O(n)
```

A new `Set` and a new array are created.

---

## 🛠 Technologies Used

- JavaScript (ES6)

---

## ✅ Example

```javascript
distinct([1, 1, 2]);
// [1, 2]

distinct([1, 2, 1, 1, 3, 2]);
// [1, 2, 3]
```