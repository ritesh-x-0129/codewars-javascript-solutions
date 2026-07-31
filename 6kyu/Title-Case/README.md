# Title Case

## 📌 Difficulty

**6kyu**

---

## 📝 Problem

Convert a given string into title case.

- The first word should always be capitalized.
- Minor words (exceptions) should remain lowercase unless they are the first word.
- Comparison with minor words should be case-insensitive.

---

## 💡 Approach

1. Return an empty string if the input title is empty.
2. Convert the list of minor words to lowercase and store them in an array.
3. Convert the title to lowercase and split it into individual words.
4. Capitalize the first word.
5. For the remaining words:
   - Keep them lowercase if they are minor words.
   - Otherwise, capitalize the first letter.
6. Join all words back into a single string.

---

## ⏱ Time Complexity

```text
O(n × m)
```

Where:

- `n` = number of words in the title.
- `m` = number of minor words.

The `includes()` method performs a linear search for each word.

---

## 💾 Space Complexity

```text
O(n + m)
```

Additional space is used for the title words array and the minor words array.

---

## 🛠 Technologies Used

- JavaScript (ES6)

---

## ✅ Example

```javascript
titleCase('a clash of KINGS', 'a an the of');
// "A Clash of Kings"

titleCase('THE WIND IN THE WILLOWS', 'The In');
// "The Wind in the Willows"

titleCase('the quick brown fox');
// "The Quick Brown Fox"
```