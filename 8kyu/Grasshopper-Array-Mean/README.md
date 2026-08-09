# Grasshopper - Array Mean

## 📌 Difficulty

**8kyu**

---

## 📝 Problem

Find the mean (average) of a list of numbers stored in an array.

To calculate the mean:

1. Add all numbers together.
2. Divide the total by the number of values in the array.

### Example

For:

```javascript
[1, 3, 5, 7]
```

Calculate the sum:

```text
1 + 3 + 5 + 7 = 16
```

There are 4 values:

```text
16 / 4 = 4
```

Therefore, the mean is:

```text
4
```

---

## 💡 Approach

The solution loops through the array and adds each number divided by the total number of elements.

```javascript
result += nums[i] / nums.length;
```

Mathematically:

```text
a/n + b/n + c/n
=
(a + b + c) / n
```

Therefore, the final value is the mean of the array.

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

Only one variable is used to store the result.

---

## 🛠 Technologies Used

- JavaScript

---

## ✅ Examples

```javascript
findAverage([1, 3, 5, 7]);
// 4

findAverage([3, 5, 7, 2, 8, 6]);
// 5.166666666666667

findAverage([10, 20, 30]);
// 20
```