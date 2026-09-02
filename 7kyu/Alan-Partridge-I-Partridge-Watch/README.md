# 🍺 Alan Partridge I - Partridge Watch

## 📌 Difficulty

**7kyu**

---

## 📝 Problem

Given an array of terms, check whether any terms are related to Alan Partridge.

The related terms are:

- `Partridge`
- `PearTree`
- `Chat`
- `Dan`
- `Toblerone`
- `Lynn`
- `AlphaPapa`
- `Nomad`

If related terms are found, return `"Mine's a Pint"` followed by the same number of exclamation marks as the number of related terms found.

If no related terms are found, return:

`"Lynn, I've pierced my foot on a spike!!"`

### Examples

    part(["Partridge", "Hello", "Nomad", "Lynn"])
    → "Mine's a Pint!!!"

---

## 💡 Approach

- Store all Alan-related terms in an array.
- Loop through the given array and check each term using `includes()`.
- Increase the counter whenever a related term is found.
- If the count is `0`, return the no-match message.
- Otherwise, append the required number of `!` using `repeat()`.

---

## ⚠️ Edge Cases

- If no Alan-related terms are found, return the specified `"Lynn..."` message.
- Multiple occurrences of the same related term are counted separately.
- The number of `!` is equal to the number of related terms found.

---

## ⏱️ Time Complexity

    O(n)

The input array is traversed once. Each `includes()` lookup checks a fixed-size list of 8 terms, so it is effectively constant time.

## 💾 Space Complexity

    O(n)

The result string can grow based on the number of matching terms.

---

## 📂 Solution

See **solution.js**

---

## ✅ Status

Solved ✔️