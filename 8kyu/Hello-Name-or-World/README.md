# Hello, Name or World!

## 📌 Difficulty

**8kyu**

---

## 📝 Problem

Create a function that returns a greeting for a given name.

- If no name or an empty string is provided, return **"Hello, World!"**.
- Otherwise, return the greeting with the name formatted so that only the first letter is uppercase and the remaining letters are lowercase.

---

## 💡 Approach

1. Check if the name is empty or undefined.
2. Return the default greeting if no valid name is provided.
3. Format the name by capitalizing the first letter and converting the rest to lowercase.
4. Return the formatted greeting.

---

## ⏱ Time Complexity

```text
O(n)
```

Where `n` is the length of the input string.

---

## 💾 Space Complexity

```text
O(n)
```

A new formatted string is created.

---

## 🛠 Technologies Used

- JavaScript (ES6)

---

## ✅ Example

```javascript
hello("john");   // "Hello, John!"
hello("aliCE");  // "Hello, Alice!"
hello("");       // "Hello, World!"
```