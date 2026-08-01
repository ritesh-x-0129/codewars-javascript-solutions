# Remove the Minimum

## 📌 Difficulty

**7kyu**

---

## 📝 Problem

Given an array of integers, remove the smallest value without modifying the original array.

- If multiple elements have the same smallest value, remove only the **first occurrence**.
- If the array is empty, return an empty array.

---

## 💡 Approach

1. Check if the array is empty.
2. Find the smallest value using `Math.min()`.
3. Find the index of its first occurrence using `indexOf()`.
4. Create a new array by filtering out the element at that index.
5. Return the new array.

---

## ⏱ Time Complexity

```text
O(n)
```

- Finding the minimum: **O(n)**
- Finding its index: **O(n)**
- Filtering the array: **O(n)**

Overall time complexity is **O(n)**.

---

## 💾 Space Complexity

```text
O(n)
```

A new array is created to store the result.

---

## 🛠 Technologies Used

- JavaScript (ES6)

---

## ✅ Example

```javascript
removeSmallest([1, 2, 3, 4, 5]);
// [2, 3, 4, 5]

removeSmallest([2, 2, 1, 2, 1]);
// [2, 2, 2, 1]
```