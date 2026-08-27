# 🧮 Factorial

## 📌 Difficulty

**7kyu**

---

## 📝 Problem

Write a function that calculates the factorial of a given number.

The factorial of a non-negative integer `n` is the product of all positive integers less than or equal to `n`.

### Example

    factorial(5) → 120

    5! = 5 × 4 × 3 × 2 × 1 = 120

---

## 💡 Approach

- Start with `result = 1`.
- Use a `for` loop starting from `n` and move down to `1`.
- Multiply `result` by the current value on every iteration.
- After the loop finishes, return the calculated factorial.

---

## ⚠️ Edge Cases

- `0!` is `1`, so the initial value of `result` handles this correctly.
- The function works with non-negative integers.
- The result can become very large for large input values.

---

## ⏱️ Time Complexity

    O(n)

The loop runs `n` times.

## 💾 Space Complexity

    O(1)

Only one variable is used to store the result.

---

## 📂 Solution

See **solution.js**

---

## ✅ Status

Solved ✔️