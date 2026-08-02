# Difference of Volumes of Cuboids

## 📌 Difficulty

**8kyu**

---

## 📝 Problem

Given the dimensions of two cuboids, calculate the absolute difference between their volumes.

Each cuboid is represented by an array of three positive integers:

- `[length, width, height]`

Return the absolute difference regardless of which cuboid has the larger volume.

---

## 💡 Approach

1. Calculate the volume of the first cuboid.
2. Calculate the volume of the second cuboid.
3. Find the difference between the two volumes.
4. Return the absolute value of the difference.

---

## ⏱ Time Complexity

```text
O(1)
```

The number of operations is constant.

---

## 💾 Space Complexity

```text
O(1)
```

Only a few variables are used.

---

## 🛠 Technologies Used

- JavaScript (ES6)

---

## ✅ Example

```javascript
findDifference([2, 2, 3], [5, 4, 1]);
// 8

findDifference([3, 2, 5], [1, 4, 4]);
// 14
```