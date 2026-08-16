# ⚔️ How Many Lightsabers Do You Own?

## 📌 Difficulty

**8kyu**

---

## 📝 Problem

Write a function that accepts the name of a programmer and returns the number of lightsabers owned by that person.

Only **Zach** owns lightsabers, and he owns **18**. Everyone else owns `0`.

The function should also have a default parameter.

### Examples

    "Zach" → 18
    "anyone else" → 0
    "" → 0

---

## 💡 Approach

- Give the `name` parameter a default value of an empty string.
- Check whether the given name is `"Zach"`.
- If the name is `"Zach"`, return `18`.
- Otherwise, return `0`.

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