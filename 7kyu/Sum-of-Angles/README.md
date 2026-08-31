# 📐 Sum of Angles

## 📌 Difficulty

**7kyu**

---

## 📝 Problem

Find the total sum of the internal angles, in degrees, of an `n`-sided simple polygon.

`n` will always be greater than `2`.

### Example

    angle(5) → 540

---

## 💡 Approach

- Use the formula for the sum of the interior angles of a polygon.
- Subtract `2` from the number of sides.
- Multiply the result by `180`.
- Return the calculated sum.

---

## ⚠️ Edge Cases

- `n` is always greater than `2`.
- A triangle (`n = 3`) has an angle sum of `180°`.
- The result is always returned in degrees.

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