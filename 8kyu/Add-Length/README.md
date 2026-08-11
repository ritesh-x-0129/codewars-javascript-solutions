# Add Length

## 📌 Difficulty

**8kyu**

---

## 📝 Problem

Given a string containing words separated by spaces, return an array where each word has its length added at the end.

### Examples

```text
"apple ban" → ["apple 5", "ban 3"]

"you will win" → ["you 3", "will 4", "win 3"]
```

---

## 💡 Approach

First, split the string into individual words using `split(" ")`.

```javascript
let len = str.split(" ");
```

Then loop through each word and add its length.

```javascript
char + " " + char.length
```

Finally, return the resulting array.

---

## ⏱ Time Complexity

```text
O(n)
```

Each character/word is processed once.

---

## 💾 Space Complexity

```text
O(n)
```

The result array stores the modified words.

---

## 🛠 Technologies Used

- JavaScript
- Strings
- Arrays
- Loops

---

## ✅ Examples

```javascript
addLength("apple ban");
// ["apple 5", "ban 3"]

addLength("you will win");
// ["you 3", "will 4", "win 3"]
```