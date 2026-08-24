# 📊 Sorted? Yes? No? How?

## 📌 Difficulty

**7kyu**

---

## 📝 Problem

Given an array of integers, determine whether the array is sorted in ascending order, descending order, or not sorted.

Return one of the following:

- `"yes, ascending"` — if the array is sorted in ascending order.
- `"yes, descending"` — if the array is sorted in descending order.
- `"no"` — if the array is not sorted.

Consecutive duplicate values are allowed.

### Examples

    isSortedAndHow([1, 2, 2, 4, 7]) → "yes, ascending"

    isSortedAndHow([7, 4, 2, 2, 1]) → "yes, descending"

    isSortedAndHow([1, 3, 2, 4]) → "no"

---

## 💡 Approach

- Assume the array is both ascending and descending initially.
- Loop through the array starting from the second element.
- Compare each element with the previous element.
- If the current element is smaller than the previous element, the array cannot be ascending.
- If the current element is larger than the previous element, the array cannot be descending.
- After checking the complete array:
  - If `ascending` is still `true`, return `"yes, ascending"`.
  - If `descending` is still `true`, return `"yes, descending"`.
  - Otherwise, return `"no"`.

Duplicate values do not affect either condition because equal consecutive values are valid in both sorted orders.

---

## ⚠️ Edge Cases

- The array always contains at least two elements.
- Consecutive duplicate values are allowed.
- An array containing all equal values will not be tested.
- The array must have a unique valid answer.

---

## ⏱️ Time Complexity

    O(n)

Where `n` is the number of elements in the array.

The array is traversed only once.

## 💾 Space Complexity

    O(1)

Only two boolean variables are used regardless of the input size.

---

## 📂 Solution

See **solution.js**

---

## ✅ Status

Solved ✔️