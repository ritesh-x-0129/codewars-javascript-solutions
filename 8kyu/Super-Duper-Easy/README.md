# Super Duper Easy

## 📌 Difficulty

**8kyu**

---

## 📝 Problem

Create a function that:

- Returns the given value multiplied by **50** and then increased by **6**.
- If the input is a **string**, return `"Error"`.

---

## 💡 Approach

1. Check whether the input is a string using `typeof`.
2. If it is a string, return `"Error"`.
3. Otherwise, multiply the number by `50`.
4. Add `6` to the result.
5. Return the final value.

---

## ⏱ Time Complexity

```text
O(1)
```

Only a constant number of operations are performed.

---

## 💾 Space Complexity

```text
O(1)
```

No extra data structures are used.

---

## 🛠 Technologies Used

- JavaScript (ES6)

---

## ✅ Example

```javascript
problem(6);
// 306

problem(1);
// 56

problem("hello");
// "Error"
```