# 🧮 Simple Calculator

## 📌 Difficulty

**8kyu**

---

## 📝 Problem

Create a simple calculator that performs addition, subtraction, multiplication, or division on two values.

The function accepts three arguments:

- `a` → first value
- `b` → second value
- `sign` → operation to perform

If either `a` or `b` is not a valid number, return:

`"unknown value"`

If the operation is not one of the four supported operations, also return:

`"unknown value"`

### Examples

    calculator(1, 2, "+") → 3

    calculator(10, 5, "-") → 5

    calculator(4, 3, "*") → 12

    calculator(20, 4, "/") → 5

    calculator(1, 2, "&") → "unknown value"

    calculator(1, "k", "*") → "unknown value"

---

## 💡 Approach

- First check whether `a` or `b` is not a valid number using `isNaN()`.
- If either value is invalid, return `"unknown value"`.
- Check the `sign` using conditional statements.
- Perform the corresponding mathematical operation.
- If the sign is not `+`, `-`, `*`, or `/`, return `"unknown value"`.

---

## ⚠️ Edge Cases

- Non-numeric values return `"unknown value"`.
- Unsupported operators return `"unknown value"`.
- Division is performed normally using JavaScript's `/` operator.
- The function supports all four required operations.

---

## ⏱️ Time Complexity

    O(1)

Only a fixed number of checks and one mathematical operation are performed.

## 💾 Space Complexity

    O(1)

No additional space proportional to the input is required.

---

## 📂 Solution

See **solution.js**

---

## ✅ Status

Solved ✔️