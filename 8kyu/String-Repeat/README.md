# String Repeat

## 📖 Problem

Write a function that accepts a non-negative integer `n` and a string `s`, then returns the string repeated exactly `n` times.

### Example

```javascript
repeatStr(6, "I"); // "IIIIII"
repeatStr(5, "Hello"); // "HelloHelloHelloHelloHello"
```

---

## 💡 Approach

- Create an empty string.
- Loop `n` times.
- Append the given string to the result during each iteration.
- Return the final repeated string.

---

## ⏱️ Complexity

- **Time Complexity:** `O(n × m)`
- **Space Complexity:** `O(n × m)`

> `n` = number of repetitions  
> `m` = length of the string