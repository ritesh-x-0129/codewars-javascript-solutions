# ⚔️ Grasshopper - Terminal Game Combat Function

## 📌 Difficulty

**8kyu**

---

## 📝 Problem

Create a `combat` function that takes the player's current health and the amount of damage received.

Return the player's new health.

The player's health cannot be less than `0`.

### Examples

    combat(120, 45) → 75
    combat(100, 100) → 0
    combat(50, 80) → 0

---

## 💡 Approach

- Subtract the received damage from the player's current health.
- Use `Math.max()` with `0` to ensure the resulting health never becomes negative.
- Return the new health value.

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