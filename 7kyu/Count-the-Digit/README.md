# Count the Digit

## 📌 Difficulty

**7kyu**

---

## 📝 Problem

Given:

- An integer `n` where `n >= 0`
- A digit `d` where `0 <= d <= 9`

Square every number from `0` to `n` and count how many times the digit `d` appears in all those squared numbers.

The function should return the total count of the digit.

### Example

For:

```javascript
n = 10
d = 1
```

The squares are:

```text
0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100
```

The digit `1` appears in:

```text
1
16
81
100
```

The total count is:

```text
4
```

Note that repeated occurrences count separately.

For example:

```text
121
```

contains the digit `1` twice.

---

## 💡 Approach

The solution uses two loops.

### 1. Generate squares

The outer loop generates every number from `0` to `n` and calculates its square:

```javascript
const square = i ** 2;
```

### 2. Convert the square to a string

The square is converted to a string so each individual digit can be checked:

```javascript
const squareString = String(square);
```

### 3. Count the required digit

The inner loop checks every character.

If the character matches the requested digit `d`, the counter is increased.

```javascript
if (squareString[j] === String(d)) {
  result++;
}
```

Finally, the total count is returned.

---

## ⏱ Time Complexity

```text
O(n × log n)
```

There are `n + 1` squares, and each square can contain approximately `log(n)` digits.

---

## 💾 Space Complexity

```text
O(log n)
```

The largest square is converted into a string, whose length grows logarithmically with `n`.

---

## 🛠 Technologies Used

- JavaScript

---

## ✅ Examples

```javascript
nbDig(10, 1);
// 4

nbDig(25, 1);
// 11

nbDig(21, 2);
// 3
```