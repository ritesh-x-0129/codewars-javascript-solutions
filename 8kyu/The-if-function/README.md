# 🔀 The 'if' Function

## 📌 Difficulty

**8kyu**

---

## 📝 Problem

Create a function that takes three arguments:

- A value to be evaluated for truthiness.
- A function to execute if the first argument is truthy.
- A function to execute if the first argument is falsy.

If the first argument is truthy, execute the second function. Otherwise, execute the third function.

---

## 💡 Approach

- Check the truthiness of the first argument using an `if` statement.
- If the value is truthy, call `func1()`.
- If the value is falsy, call `func2()`.
- The function arguments are callback functions that are executed based on the condition.

---

## ⚠️ Edge Cases

- Truthy values should execute `func1()`.
- Falsy values should execute `func2()`.
- The function works with JavaScript's truthy and falsy values.

---

## ⏱️ Time Complexity

    O(1)

## 💾 Space Complexity

    O(1)

---

## 📂 Solution

See **solution.js**

---

## ✅ Status

Solved ✔️