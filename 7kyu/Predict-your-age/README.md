# 🔮 Predict Your Age!

## 📌 Difficulty

**7kyu**

---

## 📝 Problem

Create a function that predicts an age using the following formula:

1. Take the ages of eight great-grandparents.
2. Square each age.
3. Add all the squared values together.
4. Take the square root of the total.
5. Divide the result by `2`.
6. Round the final result down to the nearest integer.

### Example

    predictAge(65, 60, 75, 55, 60, 63, 64, 45)

    → 86

---

## 💡 Approach

- Store all eight ages in an array.
- Loop through the array and square each age.
- Add every squared age to a running total.
- Calculate the square root of the total using `Math.sqrt()`.
- Divide the result by `2`.
- Use `Math.floor()` to round the result down.
- Return the final integer.

---

## ⚠️ Edge Cases

- The function always receives eight age values.
- Each age is squared before being added to the total.
- The final result must be rounded down.
- The result should always be returned as an integer.

---

## ⏱️ Time Complexity

    O(n)

Where `n` is the number of ages.

## 💾 Space Complexity

    O(n)

The ages are stored in an array before processing.

---

## 📂 Solution

See **solution.js**

---

## ✅ Status

Solved ✔️