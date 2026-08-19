# 🍺 L1: Bartender, Drinks!

## 📌 Difficulty

**8kyu**

---

## 📝 Problem

Create a function that receives a profession as a string and returns the corresponding drink according to the given table.

The comparison should be case-insensitive, so different capitalization of the same profession must still return the correct result.

### Examples

    "Jabroni" → "Patron Tequila"

    "School Counselor" → "Anything with Alcohol"

    "Programmer" → "Hipster Craft Beer"

    "Bike Gang Member" → "Moonshine"

    "Politician" → "Your tax dollars"

    "Rapper" → "Cristal"

    "Anything else" → "Beer"

---

## 💡 Approach

- Convert the input profession to lowercase using `toLowerCase()`.
- Compare the normalized value with each supported profession.
- Return the corresponding drink when a match is found.
- Use `"Beer"` as the default return value for any profession that is not listed.

---

## ⚠️ Edge Cases

- Different capitalization should still match the correct profession.
- Any profession not listed in the requirements returns `"Beer"`.
- For example, `"pOLitiCIaN"` is converted to `"politician"` and returns `"Your tax dollars"`.

---

## ⏱️ Time Complexity

    O(n)

## 💾 Space Complexity

    O(n)

---

## 📂 Solution

See **solution.js**

---

## ✅ Status

Solved ✔️