# 🍎 Alan Partridge II - Apple Turnover

## 📌 Difficulty

**8kyu**

---

## 📝 Problem

Given a positive integer `x`, calculate `x²`.

If `x²` is greater than `1000`, return:

`"It's hotter than the sun!!"`

Otherwise, return:

`"Help yourself to a honeycomb Yorkie for the glovebox."`

### Examples

    apple(14) → "Help yourself to a honeycomb Yorkie for the glovebox."

    apple(33) → "It's hotter than the sun!!"

---

## 💡 Approach

- Calculate the square of `x` using multiplication.
- Check whether the squared value is greater than `1000`.
- If it is greater than `1000`, return the hotter-than-the-sun message.
- Otherwise, return the honeycomb Yorkie message.

---

## ⚠️ Edge Cases

- If `x²` is exactly `1000`, return the second message because the condition is strictly greater than `1000`.
- Positive integers are provided as input.
- The function returns one of the two specified strings.

---

## ⏱️ Time Complexity

    O(1)

Only a fixed number of arithmetic and comparison operations are performed.

## 💾 Space Complexity

    O(1)

No additional space proportional to the input is required.

---

## 📂 Solution

See **solution.js**

---

## ✅ Status

Solved ✔️