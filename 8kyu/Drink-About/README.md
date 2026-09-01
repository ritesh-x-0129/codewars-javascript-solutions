# 🥤 Drink About

## 📌 Difficulty

**8kyu**

---

## 📝 Problem

Write a function that receives an age and returns what the person should drink based on their age.

### Rules

- Children → under 14 → `"drink toddy"`
- Teens → under 18 → `"drink coke"`
- Young adults → under 21 → `"drink beer"`
- Adults → 21 or older → `"drink whisky"`

### Examples

    peopleWithAgeDrink(13) → "drink toddy"

    peopleWithAgeDrink(17) → "drink coke"

    peopleWithAgeDrink(18) → "drink beer"

    peopleWithAgeDrink(20) → "drink beer"

    peopleWithAgeDrink(30) → "drink whisky"

---

## 💡 Approach

- Check the age against each limit using conditional statements.
- If the age is below `14`, return `"drink toddy"`.
- If the age is below `18`, return `"drink coke"`.
- If the age is below `21`, return `"drink beer"`.
- Otherwise, return `"drink whisky"`.

---

## ⚠️ Edge Cases

- Ages below `14` return `"drink toddy"`.
- Age `14` starts the `"drink coke"` category.
- Age `18` starts the `"drink beer"` category.
- Age `21` and above return `"drink whisky"`.

---

## ⏱️ Time Complexity

    O(1)

A fixed number of age comparisons are performed.

## 💾 Space Complexity

    O(1)

No additional space proportional to the input is used.

---

## 📂 Solution

See **solution.js**

---

## ✅ Status

Solved ✔️