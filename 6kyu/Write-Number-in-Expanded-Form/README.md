# Write Number in Expanded Form

## 📌 Difficulty

**6kyu**

---

## 📝 Problem

Given a positive whole number, convert it into its expanded form.

Each non-zero digit should be represented according to its place value and the values should be joined using:

```text
+
```

### Examples

```text
12 → "10 + 2"

45 → "40 + 5"

70304 → "70000 + 300 + 4"
```

Zero-value place positions should not be included.

---

## 💡 Approach

The number is first converted into a string so that each digit can be processed individually.

```javascript
let digit = String(num).split("");
```

For every digit:

1. Check whether it is `"0"`.
2. If it is zero, ignore it.
3. Calculate how many zeros should follow the digit.
4. Create the expanded value.
5. Store it in the result array.

For example:

```text
70304

7 → 70000
0 → ignored
3 → 300
0 → ignored
4 → 4
```

Finally, all values are joined using:

```javascript
result.join(" + ");
```

---

## ⏱ Time Complexity

```text
O(n)
```

Where `n` is the number of digits in the input number.

Each digit is processed once.

---

## 💾 Space Complexity

```text
O(n)
```

The result array and expanded strings require space proportional to the number of digits.

---

## 🛠 Technologies Used

- JavaScript
- Strings
- Arrays
- Algorithms

---

## ✅ Examples

```javascript
expandedForm(12);
// "10 + 2"

expandedForm(45);
// "40 + 5"

expandedForm(70304);
// "70000 + 300 + 4"

expandedForm(798495);
// "700000 + 90000 + 8000 + 400 + 90 + 5"
```

---

## 🔑 Key Concepts

- String conversion
- Array traversal
- Place value
- `String.prototype.repeat()`
- `Array.prototype.join()`