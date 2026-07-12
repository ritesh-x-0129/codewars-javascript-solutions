# Question: Remove String Spaces

## Difficulty

**8kyu**

---

## Description

Write a function that removes all spaces from a given string and returns the resulting string.

---

## Example

```javascript
noSpace("8 j 8   mBliB8g  imjB8B8  jl  B");
// "8j8mBliB8gimjB8B8jlB"

noSpace("8aaaaa dddd r     ");
// "8aaaaaddddr"
```

---

## Approach

- Use the `replaceAll()` method.
- Replace every space `" "` with an empty string `""`.
- Return the updated string.

---

## Time Complexity

**O(n)**

## Space Complexity

**O(n)**

---

## Language

JavaScript (ES6+)