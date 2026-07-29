# Make a Function That Does Arithmetic!

## 📖 Problem

Given two numbers and an arithmetic operator (as a string), return the result of performing that operation.

The supported operators are:

- `"add"`
- `"subtract"`
- `"multiply"`
- `"divide"`

### Example

```javascript
arithmetic(5, 2, "add");      // 7
arithmetic(5, 2, "subtract"); // 3
arithmetic(5, 2, "multiply"); // 10
arithmetic(5, 2, "divide");   // 2.5
```

---

## 💡 Approach

- Create an object where each operator maps to its corresponding function.
- Use the operator string as the object key.
- Call the selected function with the given numbers.
- Return the result.

This approach avoids using multiple `if` or `switch` statements.

---

## ⏱️ Complexity

- **Time Complexity:** `O(1)`
- **Space Complexity:** `O(1)`