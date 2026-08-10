# Hex to Decimal

## 📌 Difficulty

**8kyu**

---

## 📝 Problem

Convert a hexadecimal number represented as a string into its decimal number.

Hexadecimal uses base `16` and contains:

```text
0 1 2 3 4 5 6 7 8 9 A B C D E F
```

Where:

```text
A = 10
B = 11
C = 12
D = 13
E = 14
F = 15
```

The function should return the corresponding decimal value.

Negative hexadecimal numbers should also be handled.

### Examples

```javascript
hexToDec("1A");
// 26

hexToDec("FF");
// 255

hexToDec("10");
// 16

hexToDec("-A");
// -10
```

---

## 💡 Approach

The solution manually converts each hexadecimal digit into its decimal value.

### 1. Handle the sign

If the hexadecimal string starts with `-`, the sign is stored separately and the `-` is removed.

```javascript
if (hexString[0] === '-') {
  sign = -1;
  hexString = hexString.slice(1);
}
```

### 2. Convert each digit

For digits `0–9`, `Number()` is used.

For letters `A–F`, their ASCII character codes are used to calculate their hexadecimal value.

For example:

```text
A → 10
B → 11
C → 12
D → 13
E → 14
F → 15
```

### 3. Build the decimal number

For every hexadecimal digit:

```javascript
decimal = decimal * 16 + value;
```

Multiplying by `16` shifts the previous hexadecimal value one position to the left.

For example, converting `"1A"`:

```text
0 × 16 + 1 = 1
1 × 16 + 10 = 26
```

Therefore:

```text
1A₁₆ = 26₁₀
```

---

## ⏱ Time Complexity

```text
O(n)
```

Each character of the hexadecimal string is processed once.

---

## 💾 Space Complexity

```text
O(1)
```

Only a constant number of variables are used.

---

## 🛠 Technologies Used

- JavaScript
- Number Systems
- Character Codes

---

## ✅ Examples

```javascript
hexToDec("1A");
// 26

hexToDec("FF");
// 255

hexToDec("10");
// 16

hexToDec("ABC");
// 2748

hexToDec("-A");
// -10
```