# Question: Square Every Digit

## Difficulty

**7kyu**

---

## Description

Square every digit of a given integer and concatenate the results.

The function accepts an integer and returns an integer.

---

## Example

```javascript
squareDigits(9119); // 811181
squareDigits(765);  // 493625
```

---

## Approach

- Convert the number into a string.
- Loop through each digit.
- Square each digit.
- Concatenate the squared values into a string.
- Convert the final string back into a number.

---

## Time Complexity

**O(n)**

## Space Complexity

**O(n)**

---

## Language

JavaScript (ES6+)