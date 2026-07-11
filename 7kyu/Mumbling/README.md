# 🔤 Mumbling

## 📌 Difficulty

**7kyu**

---

## 📝 Problem

Given a string, return a new string where:

- The first occurrence of each character is uppercase.
- The remaining occurrences are lowercase.
- Each group is separated by a hyphen (`-`).

### Example

```text
accum("abcd")
↓
A-Bb-Ccc-Dddd
```

---

## 💡 Approach

- Traverse the string character by character.
- Convert the first character of each group to uppercase.
- Repeat the lowercase version of the character based on its index.
- Join all groups with a hyphen.
- Remove the final trailing hyphen before returning the result.

---

## ⏱️ Time Complexity

```text
O(n²)
```

> `repeat(i)` creates progressively larger strings.

## 💾 Space Complexity

```text
O(n²)
```

---

## 📂 Solution

See **solution.js**

---

## ✅ Status

Solved ✔️