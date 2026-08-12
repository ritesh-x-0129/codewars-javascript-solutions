# The Coupon Code

## 📌 Difficulty

**7kyu**

## 🏷️ Category

- Date Time
- Strings
- Fundamentals

---

## 📝 Problem Description

Create a function called `checkCoupon` that verifies whether a coupon code is valid and has not expired.

The coupon is valid only when:

1. The entered coupon code exactly matches the correct coupon code.
2. The current date is on or before the expiration date.

The coupon becomes invalid starting from the day **after** the expiration date.

Dates are provided as strings in the following format:

```text
"MONTH DATE, YEAR"
```

The coupon codes must match both in **value and data type**.

For example:

```javascript
123 === "123" // false

false === 0 // false
```

---

## 💡 Approach

The solution checks both conditions using the logical `&&` operator.

### 1. Compare the coupon codes

```javascript
enteredCode === correctCode
```

Strict equality ensures that both the value and data type are the same.

### 2. Compare the dates

The date strings are converted into JavaScript `Date` objects:

```javascript
new Date(currentDate)
new Date(expirationDate)
```

Then the current date is compared with the expiration date:

```javascript
new Date(currentDate) <= new Date(expirationDate)
```

Using `<=` is important because the coupon is still valid **on the expiration date itself**.

---

## 🔍 Example

```javascript
checkCoupon(
  "123",
  "123",
  "July 9, 2015",
  "July 9, 2015"
);
```

Output:

```text
true
```

The code matches and the current date is exactly the expiration date, so the coupon is still valid.

---

## ❌ Invalid Examples

```javascript
checkCoupon(
  0,
  false,
  "July 9, 2015",
  "July 9, 2015"
);
```

Output:

```text
false
```

The values are different and their data types are also different.

Another example:

```javascript
checkCoupon(
  "123",
  "123",
  "July 9, 2015",
  "July 2, 2015"
);
```

Output:

```text
false
```

The current date is after the expiration date.

---

## 🧠 Important Concepts

### Strict Equality

The `===` operator checks both value and type.

```javascript
"123" === "123" // true
123 === "123"   // false
false === 0     // false
```

### JavaScript Date

The `Date` object can convert a valid date string into a date value that can be compared with another date.

```javascript
new Date("July 9, 2015")
```

---

## ⏱️ Time Complexity

```text
O(1)
```

The function performs a fixed number of comparisons and date conversions.

---

## 💾 Space Complexity

```text
O(1)
```

Only a constant amount of additional memory is used.

---

## 🛠️ Technologies Used

- JavaScript
- Strict Equality (`===`)
- Logical AND (`&&`)
- `Date` object
- Conditional comparison

---

## ✅ Function Example

```javascript
function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
  return (
    enteredCode === correctCode &&
    new Date(currentDate) <= new Date(expirationDate)
  );
}
```