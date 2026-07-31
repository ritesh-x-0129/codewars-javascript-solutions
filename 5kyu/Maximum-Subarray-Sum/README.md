# Maximum Subarray Sum

## 📌 Difficulty

**5kyu**

---

## 📝 Problem

Given an array of integers, find the maximum possible sum of any contiguous subarray.

If the array contains only negative numbers or is empty, return `0`.

---

## 💡 Approach

1. Traverse the array while maintaining a running sum.
2. Update the maximum sum whenever a larger sum is found.
3. If the running sum becomes negative, reset it to `0`.
4. Return the maximum sum after processing the entire array.

This solution uses **Kadane's Algorithm**, which efficiently finds the maximum subarray sum in a single pass.

---

## ⏱ Time Complexity

```text
O(n)
```

The array is traversed only once.

---

## 💾 Space Complexity

```text
O(1)
```

Only two variables are used regardless of input size.

---

## 🛠 Technologies Used

- JavaScript (ES6)

---

## ✅ Example

```javascript
maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]); // 6

maxSequence([-1, -2, -3]); // 0

maxSequence([]); // 0
```