# List Filtering

## 📌 Difficulty

**7kyu**

---

## 📝 Problem

Given an array containing non-negative integers and strings, return a new array that contains only the integers while filtering out all the strings.

---

## 💡 Approach

1. Use the `filter()` method to iterate through the array.
2. Check the type of each element using `typeof`.
3. Keep only the elements whose type is `"number"`.
4. Return the filtered array.

---

## ⏱ Time Complexity

```text
O(n)
```

The array is traversed once.

---

## 💾 Space Complexity

```text
O(n)
```

A new array is created to store the filtered numbers.

---

## 🛠 Technologies Used

- JavaScript (ES6)

---

## ✅ Example

```javascript
filter_list([1, 2, "a", "b"]); // [1, 2]

filter_list([1, "a", "b", 0, 15]); // [1, 0, 15]
```