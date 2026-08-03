# Highest Scoring Word

## 📌 Difficulty

**6kyu**

---

## 📝 Problem

Given a string of lowercase words, determine which word has the highest alphabetical score.

Each letter scores according to its position in the alphabet:

- a = 1
- b = 2
- c = 3
- ...
- z = 26

If two words have the same score, return the one that appears first.

---

## 💡 Approach

1. Split the input string into individual words.
2. Traverse each word.
3. Calculate the score of each word by summing the alphabetical value of every character.
4. Keep track of the highest score and its corresponding word.
5. Return the highest-scoring word.

---

## ⏱ Time Complexity

```text
O(n)
```

Where `n` is the total number of characters in the input string.

---

## 💾 Space Complexity

```text
O(w)
```

Where `w` is the number of words after splitting the string.

---

## 🛠 Technologies Used

- JavaScript (ES6)

---

## ✅ Example

```javascript
high("man i need a taxi");
// "taxi"

high("what time are we climbing up the volcano");
// "volcano"

high("take me to semynak");
// "semynak"
```