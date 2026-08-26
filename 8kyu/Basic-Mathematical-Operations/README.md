# 🧮 Basic Mathematical Operations

## 📌 Difficulty

**8kyu**

---

## 📝 Problem

Create a function that performs four basic mathematical operations.

The function takes three arguments:

- `operation` — the mathematical operator as a string.
- `value1` — the first number.
- `value2` — the second number.

The function should return the result after applying the selected operation.

### Examples

    basicOp("+", 4, 7) → 11

    basicOp("-", 15, 18) → -3

    basicOp("*", 5, 5) → 25

    basicOp("/", 49, 7) → 7

---

## 💡 Approach

- Check the value of the `operation` argument using conditional statements.
- If the operation is `"+"`, add the two values.
- If the operation is `"-"`, subtract the second value from the first.
- If the operation is `"*"`, multiply the two values.
- If the operation is `"/"`, divide the first value by the second.
- Return the calculated result.

---

## ⚠️ Edge Cases

- The operation determines which mathematical calculation is performed.
- Division follows JavaScript's normal division behavior.
- The kata provides valid operations and numeric values.

---

## ⏱️ Time Complexity

    O(1)

Only one mathematical operation and a constant number of comparisons are performed.

## 💾 Space Complexity

    O(1)

No additional data structures are used.

---

## 📂 Solution

See **solution.js**

---

## ✅ Status

Solved ✔️