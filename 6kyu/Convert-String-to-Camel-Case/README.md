# Convert String to Camel Case

## 📌 Difficulty

**6kyu**

---

## 📝 Problem

Convert a string containing dash (`-`) or underscore (`_`) delimited words into camel case.

The first word should preserve its original capitalization:

- If the first word starts with lowercase, the result uses lower camel case.
- If the first word starts with uppercase, the result uses Upper Camel Case (Pascal Case).

All following words must have their first letter capitalized.

### Examples

```javascript
"the-stealth-warrior"
// "theStealthWarrior"

"The_Stealth_Warrior"
// "TheStealthWarrior"

"The_Stealth-Warrior"
// "TheStealthWarrior"
```

---

## 💡 Approach

### 1. Split the string

Use a regular expression to split the string at both `-` and `_`:

```javascript
str.split(/[-_]/g)
```

### 2. Capitalize subsequent words

The first word is kept unchanged.

Every word after the first one has its first character converted to uppercase:

```javascript
words[i][0].toUpperCase()
```

### 3. Join the words

Finally, all words are joined together without a separator:

```javascript
words.join("")
```

This produces the required camel-case string.

---

## ⏱ Time Complexity

```text
O(n)
```

The string is processed based on its length.

---

## 💾 Space Complexity

```text
O(n)
```

The split words and resulting string require additional space.

---

## 🛠 Technologies Used

- JavaScript
- Regular Expressions

---

## ✅ Examples

```javascript
toCamelCase("the-stealth-warrior");
// "theStealthWarrior"

toCamelCase("The_Stealth_Warrior");
// "TheStealthWarrior"

toCamelCase("The_Stealth-Warrior");
// "TheStealthWarrior"

toCamelCase("hello-world");
// "helloWorld"
```