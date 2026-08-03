# Multiplication Table

## 📌 Difficulty

**6kyu**

---

## 📝 Problem

Create an **N × N multiplication table** based on the given size.

Each element at position `(i, j)` should contain the product of its row and column numbers.

For example, if `size = 3`, the function should return:

```javascript
[
  [1, 2, 3],
  [2, 4, 6],
  [3, 6, 9]
]
```

---

## 💡 Approach

1. Create an empty array to store the multiplication table.
2. Use the outer loop to generate each row.
3. Use the inner loop to calculate multiplication values for each column.
4. Store each row in the result array.
5. Return the completed multiplication table.

---

## ⏱ Time Complexity

```text
O(n²)
```

Two nested loops each iterate `size` times.

---

## 💾 Space Complexity

```text
O(n²)
```

The output matrix stores `size × size` elements.

---

## 🛠 Technologies Used

- JavaScript (ES6)

---

## ✅ Example

```javascript
multiplicationTable(3);

// [
//   [1, 2, 3],
//   [2, 4, 6],
//   [3, 6, 9]
// ]
```