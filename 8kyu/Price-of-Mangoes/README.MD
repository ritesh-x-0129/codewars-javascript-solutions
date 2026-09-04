# 🥭 Price of Mangoes

## 📌 Difficulty

**8kyu**

---

## 📝 Problem

Given a quantity of mangoes and the price per mango, calculate the total cost.

Every third mango is free.

### Examples

    mango(2, 3) → 6

    mango(3, 3) → 6

    mango(5, 3) → 12

    mango(9, 5) → 30

---

## 💡 Approach

- Calculate how many mangoes are free using `Math.floor(quantity / 3)`.
- Subtract the free mangoes from the total quantity.
- Multiply the number of paid mangoes by the price.
- Return the total cost.

---

## ⚠️ Edge Cases

- If the quantity is less than 3, there are no free mangoes.
- Every complete group of 3 mangoes gives 1 free mango.
- The remaining mangoes after complete groups of 3 are charged normally.

---

## ⏱️ Time Complexity

    O(1)

Only a fixed number of arithmetic operations are performed.

## 💾 Space Complexity

    O(1)

No additional space proportional to the input is required.

---

## 📂 Solution

See **solution.js**

---

## ✅ Status

Solved ✔️