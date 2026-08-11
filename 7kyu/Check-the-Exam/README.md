# Check the Exam

## 📌 Difficulty

**7kyu**

---

## 📝 Problem

Given two arrays:

- The first array contains the correct answers.
- The second array contains a student's submitted answers.

Calculate the student's score using these rules:

- Correct answer: **+4**
- Incorrect answer: **-1**
- Blank answer: **0**
- If the final score is negative, return **0**.

### Examples

```text
["a", "a", "b", "b"], ["a", "c", "b", "d"] → 6

["a", "a", "c", "b"], ["a", "a", "b", ""] → 7

["a", "a", "b", "c"], ["a", "a", "b", "c"] → 16

["b", "c", "b", "a"], ["", "a", "a", "c"] → 0
```

---

## 💡 Approach

Loop through both arrays using the same index.

For every answer:

```text
Correct → +4
Incorrect → -1
Blank → 0
```

After calculating the total score, check if it is below zero. If it is, return `0`.

---

## ⏱ Time Complexity

```text
O(n)
```

The array is traversed once.

---

## 💾 Space Complexity

```text
O(1)
```

Only a few variables are used.

---

## 🛠 Technologies Used

- JavaScript
- Arrays
- Loops
- Conditional Statements

---

## ✅ Example

```javascript
checkExam(
  ["a", "a", "b", "d"],
  ["a", "c", "b", ""]
);

// 7
```