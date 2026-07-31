# Sort the Odd

## 📌 Difficulty

**6kyu**

---

## 📝 Problem

Given an array of integers, sort only the **odd numbers** in ascending order while keeping all **even numbers** in their original positions.

---

## 💡 Approach

1. Traverse the array and collect all odd numbers.
2. Sort the collected odd numbers in ascending order.
3. Traverse the original array again.
4. Replace each odd number with the next sorted odd number while leaving even numbers unchanged.
5. Return the modified array.

---

## ⏱ Time Complexity

```text
O(n log n)
```

- Traversing the array: **O(n)**
- Sorting odd numbers: **O(k log k)**, where `k` is the number of odd elements.
- Replacing odd numbers: **O(n)**

Overall: **O(n + k log k)**, which is commonly expressed as **O(n log n)** in the worst case.

---

## 💾 Space Complexity

```text
O(k)
```

Where `k` is the number of odd numbers stored in the temporary array.

---

## 🛠 Technologies Used

- JavaScript (ES6)

---

## ✅ Example

```javascript
sortArray([5, 8, 6, 3, 4]);
// [3, 8, 6, 5, 4]

sortArray([7, 1]);
// [1, 7]
```