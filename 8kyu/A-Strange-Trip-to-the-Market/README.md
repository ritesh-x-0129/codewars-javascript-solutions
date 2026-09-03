# 🐉 A Strange Trip to the Market

## 📌 Difficulty

**8kyu**

---

## 📝 Problem

Write a function that checks whether a given string contains a phrase that identifies the Loch Ness Monster.

The following phrases are valid:

- `tree fiddy`
- `3.50`
- `three fifty`

If any of these phrases appear in the string, return `true`.

Otherwise, return `false`.

### Examples

    isLochNessMonster("I want tree fiddy")
    → true

    isLochNessMonster("Give me 3.50")
    → true

    isLochNessMonster("Can you spare three fifty?")
    → true

    isLochNessMonster("This is not correct")
    → false

---

## 💡 Approach

- Use a regular expression to search for the three possible phrases.
- `tree fiddy` matches the original phrase.
- `3\.50` matches the decimal form. The `\.` is used because `.` has a special meaning in regular expressions.
- `three fifty` matches the written-out form.
- `test()` returns `true` if any of the patterns are found and `false` otherwise.

---

## ⚠️ Edge Cases

- The function returns `true` if any one of the three phrases is present.
- If none of the phrases are present, it returns `false`.
- The decimal point in `3.50` is escaped so that it matches an actual `.` character.

---

## ⏱️ Time Complexity

    O(n)

The regular expression searches through the input string.

## 💾 Space Complexity

    O(1)

The regular expression uses a fixed amount of additional space.

---

## 📂 Solution

See **solution.js**

---

## ✅ Status

Solved ✔️