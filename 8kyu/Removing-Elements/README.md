# Question: Removing Elements

## Difficulty

**8kyu**

---

## Description

Given an array, remove every second element.

Always keep the first element and remove the next one repeatedly.

---

## Example

```javascript
removeEveryOther(["Keep", "Remove", "Keep", "Remove", "Keep"]);
// ["Keep", "Keep", "Keep"]
```

---

## Approach

- Use the `filter()` method.
- Keep only the elements whose index is even.
- Return the filtered array.

---

## Time Complexity

**O(n)**

## Space Complexity

**O(n)**

---

## Language

JavaScript (ES6+)