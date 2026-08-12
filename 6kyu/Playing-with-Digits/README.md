# Playing with Digits

## 📌 Difficulty

**6kyu**

---

## 📝 Problem

Given two positive integers `n` and `p`, calculate the sum of the digits of `n` raised to consecutive powers starting from `p`.

If the resulting sum is equal to `n * k` for some positive integer `k`, return `k`.

Otherwise, return `-1`.

### Examples

```text
89, p = 1
8¹ + 9² = 89
89 / 89 = 1

→ 1
```

```text
92, p = 1
9¹ + 2² = 13

13 is not divisible by 92

→ -1
```

```text
695, p = 2
6² + 9³ + 5⁴ = 1390
1390 / 695 = 2

→ 2
```

---

## 💡 Approach

1. Convert the number into an array of digits.
2. Start with the given power `p`.
3. Raise each digit to the current power.
4. Increase the power for the next digit.
5. Add all the results.
6. Check whether the total is divisible by `n`.
7. If it is, return the quotient. Otherwise return `-1`.

### Important Logic

```javascript
result += digit[i] ** p++;
```

The `p++` increases the exponent after each calculation.

---

## ⏱ Time Complexity

```text
O(d)
```

Where `d` is the number of digits in `n`.

---

## 💾 Space Complexity

```text
O(d)
```

Because the digits of `n` are stored in an array.

---

## 🛠 Technologies Used

- JavaScript
- Strings
- Arrays
- `map()`
- Mathematical operators
- Loops

---

## ✅ Example

```javascript
digPow(625, 2);
```

Output:

```text
-1
```