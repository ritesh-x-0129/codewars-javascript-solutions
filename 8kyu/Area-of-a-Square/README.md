# 🟥 Area of a Square

## 📌 Difficulty

**8kyu**

---

## 📝 Problem

Calculate the area of the red square when the length of the circular arc `A` is given.

Use the value of π provided by the language (`Math.PI` in JavaScript).

### Example

    squareArea(3) → 3.647562158473502

---

## 💡 Approach

- Use the given arc length `A` to calculate the side length of the square.
- The side length is calculated using `2 * A / Math.PI`.
- Square the side length to get the area of the square.
- Return the calculated area.

---

## ⚠️ Edge Cases

- The input `A` is expected to be a valid number.
- `Math.PI` is used for the value of π.
- The result may be a decimal number.

---

## ⏱️ Time Complexity

    O(1)

The calculation uses a fixed number of arithmetic operations.

## 💾 Space Complexity

    O(1)

No additional space proportional to the input is used.

---

## 📂 Solution

See **solution.js**

---

## ✅ Status

Solved ✔️