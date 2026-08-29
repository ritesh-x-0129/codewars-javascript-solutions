# 📝 Training JS #3: Basic Data Types — String

## 📌 Difficulty

**8kyu**

---

## 📝 Problem

Use string variables to create the required function names by selecting and combining the provided variables.

After completing the first mission, answer three questions using the `answer1`, `answer2`, and `answer3` functions.

Capitalization matters because uppercase and lowercase letters are different characters.

### Examples

    Dad() → "Dad"

    Bee() → "Bee"

    banana() → "banana"

    answer1() → "no"

    answer2() → "no"

    answer3() → "yes"

---

## 💡 Approach

- Use the provided variables containing uppercase and lowercase characters.
- Combine the required variables using the `+` operator.
- Return the resulting string from each function.
- Use `"yes"` or `"no"` for the three answer functions.

---

## ⚠️ Edge Cases

- Uppercase and lowercase letters are different.
- The variables must be combined in the correct order.
- The returned strings must match the required names exactly.

---

## ⏱️ Time Complexity

    O(1)

Each function performs a fixed number of string concatenation operations.

## 💾 Space Complexity

    O(1)

Only a constant amount of additional space is used.

---

## 📂 Solution

See **solution.js**

---

## ✅ Status

Solved ✔️