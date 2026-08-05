# Return the Day

## 📌 Difficulty

**8kyu**

---

## 📝 Problem

Complete a function that returns the weekday corresponding to an input number.

| Number | Day |
|---|---|
| 1 | Sunday |
| 2 | Monday |
| 3 | Tuesday |
| 4 | Wednesday |
| 5 | Thursday |
| 6 | Friday |
| 7 | Saturday |

For any other number, return:

```text
Wrong, please enter a number between 1 and 7
```

---

## 💡 Approach

A `switch` statement is used to match the input number with its corresponding weekday.

If the input does not match any case, the `default` case returns the required error message.

---

## ⏱ Time Complexity

**O(1)**

There are only seven possible valid cases.

---

## 💾 Space Complexity

**O(1)**

Only a constant amount of additional space is used.

---

## 🛠 Technologies Used

- JavaScript

---

## ✅ Examples

```javascript
whatday(1);
// "Sunday"

whatday(5);
// "Thursday"

whatday(7);
// "Saturday"

whatday(10);
// "Wrong, please enter a number between 1 and 7"
```