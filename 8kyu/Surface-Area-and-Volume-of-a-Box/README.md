# Surface Area and Volume of a Box

## 📌 Difficulty

**8kyu**

---

## 📝 Problem

Given the `width`, `height`, and `depth` of a rectangular box, calculate:

1. Total surface area
2. Volume

All three dimensions are positive non-zero integers.

The function should return both values in an array.

### Example

```javascript
getSize(6, 3, 8);
// [180, 144]
```

---

## 💡 Approach

The total surface area of a rectangular box is calculated using:

```text
Surface Area = 2 × (width × height + width × depth + height × depth)
```

The volume is calculated using:

```text
Volume = width × height × depth
```

Both calculated values are returned as an array:

```javascript
[surfaceArea, volume]
```

---

## ⏱ Time Complexity

```text
O(1)
```

Only a fixed number of arithmetic operations are performed.

---

## 💾 Space Complexity

```text
O(1)
```

Only a constant amount of extra space is used.

---

## 🛠 Technologies Used

- JavaScript

---

## ✅ Examples

```javascript
getSize(6, 3, 8);
// [180, 144]

getSize(2, 2, 2);
// [24, 8]

getSize(5, 4, 3);
// [94, 60]
```