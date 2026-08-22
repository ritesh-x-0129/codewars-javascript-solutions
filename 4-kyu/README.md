# 🔤 Strings Mix

## 📌 Difficulty

**4kyu**

---

## 📝 Problem

Given two strings `s1` and `s2`, compare the frequency of lowercase letters from `a` to `z`.

For each lowercase letter:

- Find its maximum number of occurrences between the two strings.
- Ignore letters whose maximum occurrence is `1` or less.
- Prefix the repeated letters with:
  - `1:` if the maximum comes from `s1`.
  - `2:` if the maximum comes from `s2`.
  - `=:` if both strings contain the same maximum number of occurrences.
- Sort the resulting groups by decreasing length.
- For groups with the same length, sort them lexicographically.
- Separate the groups using `/`.

Uppercase letters, numbers, spaces, and punctuation are ignored.

### Example

    s1 = "my&friend&Paul has heavy hats! &"

    s2 = "my friend John has many many friends &"

    mix(s1, s2)

    → "2:nnnnn/1:aaaa/1:hhh/2:mmm/2:yyy/2:dd/2:ff/2:ii/2:rr/=:ee/=:ss"

---

## 💡 Approach

- Create a frequency array of 26 elements for each input string.
- Traverse each string and count only lowercase letters from `a` to `z`.
- Compare the frequency of each letter in both strings.
- Ignore letters whose maximum frequency is `1` or less.
- Determine whether the maximum frequency belongs to `s1`, `s2`, or both.
- Create the required substring using the appropriate prefix and repeated letter.
- Store all generated substrings in an array.
- Sort the substrings by decreasing length.
- For equal lengths, sort them lexicographically.
- Join all substrings using `/` and return the final string.

---

## ⚠️ Edge Cases

- Uppercase letters are ignored.
- Numbers and punctuation are ignored.
- Spaces are ignored.
- Letters occurring once or less in both strings are excluded.
- If both strings contain the same maximum frequency for a letter, use `=:`.
- If no lowercase letter occurs more than once, the result is an empty string.

---

## ⏱️ Time Complexity

    O(n + m + k log k)

Where:

- `n` is the length of `s1`.
- `m` is the length of `s2`.
- `k` is the number of result groups.

Since there are only 26 possible lowercase letters, `k` is bounded by 26.

---

## 💾 Space Complexity

    O(k)

The frequency arrays contain a fixed 26 elements, while the result stores the generated substrings.

---

## 📂 Solution

See **solution.js**

---

## ✅ Status

Solved ✔️