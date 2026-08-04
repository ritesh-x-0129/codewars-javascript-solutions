# Calculating with Functions

## 📌 Difficulty

**5kyu**

---

## 📝 Problem

Create functions for the numbers `zero` through `nine` and functions for the operations:

- `plus`
- `minus`
- `times`
- `dividedBy`

The functions should allow calculations to be written in the following form:

```javascript
seven(times(five()));    // 35
four(plus(nine()));      // 13
eight(minus(three()));   // 5
six(dividedBy(two()));   // 3
```

Each calculation contains exactly one operation and two numbers.

Division should use integer division.

---

## 💡 Approach

Each number function returns its number when called without an operation.

When an operation is passed, the number function executes that operation with its number.

The operation functions use closures to receive the right operand first and return another function that receives the left operand.

For example:

```javascript
seven(times(five()));
```

works conceptually as:

```text
five() → 5
times(5) → returns a function
seven(...) → executes that function with 7
7 × 5 → 35
```

---

## 🧠 Concepts

- Higher-Order Functions
- Closures
- Arrow Functions
- Function Composition
- Functional Programming

---

## ⏱ Time Complexity

```text
O(1)
```

Each calculation performs a constant number of operations.

---

## 💾 Space Complexity

```text
O(1)
```

Only a constant amount of additional space is used.

---

## 🛠 Technologies Used

- JavaScript (ES6)

---

## ✅ Examples

```javascript
seven(times(five()));
// 35

four(plus(nine()));
// 13

eight(minus(three()));
// 5

six(dividedBy(two()));
// 3

eight(dividedBy(three()));
// 2
```

---

## 📌 Note

This solution was studied and understood as part of learning higher-order functions and closures.

It is kept separately from the personal solved-kata milestone count.