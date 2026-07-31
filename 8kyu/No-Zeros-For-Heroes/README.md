# No Zeros for Heroes

## 📌 Difficulty

**8kyu**

---

## 📝 Problem

Given an integer, remove all trailing zeros from the number.

If the number is `0`, return `0` unchanged.

---

## 💡 Approach

1. Check if the number is not `0`.
2. While the last digit is `0`, divide the number by `10`.
3. Return the resulting number after all trailing zeros are removed.

---

## ⏱ Time Complexity

```text
O(k)
```

Where `k` is the number of trailing zeros.

---

## 💾 Space Complexity

```text
O(1)
```

Only a constant amount of extra space is used.

---

## 🛠 Technologies Used

- JavaScript (ES6)

---

## ✅ Example

```javascript
noBoringZeros(1450);    // 145
noBoringZeros(960000);  // 96
noBoringZeros(-1050);   // -105
noBoringZeros(0);       // 0
```