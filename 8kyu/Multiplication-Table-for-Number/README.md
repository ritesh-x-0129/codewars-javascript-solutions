# Multiplication Table for Number

## 📌 Difficulty

**8kyu**

## 📝 Problem

Given an integer from **1 to 10**, return its multiplication table as a string.

Each row should be separated by a newline (`\n`), and there should be **no extra newline at the end**.

### Example

```text
Input: 5

Output:

1 * 5 = 5
2 * 5 = 10
3 * 5 = 15
4 * 5 = 20
5 * 5 = 25
6 * 5 = 30
7 * 5 = 35
8 * 5 = 40
9 * 5 = 45
10 * 5 = 50
```

---

## 💡 Approach

1. Create an empty string.
2. Loop from `1` to `10`.
3. Append each multiplication result followed by a newline.
4. Remove the trailing newline using `trim()`.
5. Return the final string.

---

## ⏱ Time Complexity

```text
O(1)
```

The loop always runs **10 times**, so the time is constant.

---

## 💾 Space Complexity

```text
O(1)
```

The output size is fixed (10 lines).

---

## 🛠 Technologies Used

- JavaScript (ES6)

---

## ✅ Example

```javascript
multiTable(5);
```