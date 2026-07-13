# Question: Welcome!

## Difficulty

**8kyu**

---

## Description

Create a function that returns a welcome message based on the user's language.

If the language exists in the database, return its corresponding greeting.

If the language is invalid or not found, return the English greeting:

```text
Welcome
```

---

## Example

```javascript
greet("french");   // "Bienvenue"
greet("german");   // "Willkommen"
greet("unknown");  // "Welcome"
```

---

## Approach

- Store all greetings in an object.
- Check whether the given language exists.
- Return the corresponding greeting.
- Otherwise, return the default English greeting.

---

## Time Complexity

**O(1)**

## Space Complexity

**O(1)**

---

## Language

JavaScript (ES6+)