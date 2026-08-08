# Break CamelCase

## 📌 Difficulty

**6kyu**

---

## 📝 Problem

Given a camelCase string, insert a space before every uppercase letter to separate the words.

### Examples

```text
"camelCasing" → "camel Casing"
"identifier"  → "identifier"
""            → ""
```

---

## 💡 Approach

The string is traversed character by character.

For every character:

- If the character is uppercase, add a space before it.
- Otherwise, add the character normally.

For example:

```text
camelCasing
     ↑
uppercase C
```

The result becomes:

```text
camel Casing
```

The same loop also correctly handles empty strings and strings containing only lowercase letters, so separate checks for those cases are unnecessary.

---

## ⏱ Time Complexity

```text
O(n)
```

The string is traversed once.

---

## 💾 Space Complexity

```text
O(n)
```

A new string is created to store the result.

---

## 🛠 Technologies Used

- JavaScript

---

## ✅ Examples

```javascript
solution("camelCasing");
// "camel Casing"

solution("identifier");
// "identifier"

solution("");
// ""

solution("helloWorld");
// "hello World"

solution("myVariableName");
// "my Variable Name"
```