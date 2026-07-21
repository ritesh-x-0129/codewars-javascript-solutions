# Question: Is it a Palindrome?

## Difficulty

**8kyu**

---

## Description

Write a function that checks whether a given string is a palindrome.

The comparison should be **case-insensitive**.

A palindrome is a word, number, or phrase that reads the same forwards and backwards.

---

## Example

```javascript
isPalindrome("madam");   // true
isPalindrome("RaceCar"); // true
isPalindrome("hello");   // false
```

---

## Approach

- Convert the string to lowercase.
- Reverse the string.
- Compare the original string with the reversed string.
- Return the comparison result.

---

## Time Complexity

**O(n)**

## Space Complexity

**O(n)**

---

## Language

JavaScript (ES6+)