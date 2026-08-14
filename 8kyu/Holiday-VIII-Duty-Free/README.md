# Holiday VIII - Duty Free

## 📌 Difficulty

**8kyu**

## 🏷️ Category

- Fundamentals
- Mathematics

---

## 📝 Problem Description

The goal of this kata is to calculate how many bottles of duty-free whiskey need to be purchased so that the total savings cover the cost of a holiday.

The function receives three integer parameters:

- `normPrice` — normal high street price of one bottle in pounds.
- `discount` — duty-free discount percentage.
- `hol` — total cost of the holiday in pounds.

The savings on one bottle are calculated using the discount percentage.

Then, divide the holiday cost by the saving per bottle.

The final answer must be an integer, so the result should be **rounded down**.

---

## 📥 Input

```javascript
dutyFree(normPrice, discount, hol)
```

Example:

```javascript
dutyFree(10, 10, 500)
```

A bottle normally costs £10 and the discount is 10%.

Savings per bottle:

```text
£10 × 10% = £1
```

To cover a £500 holiday:

```text
£500 / £1 = 500
```

Output:

```text
500
```

---

## 💡 Approach

### Step 1: Calculate the saving per bottle

```javascript
let result = normPrice * discount / 100;
```

For example:

```text
normPrice = 12
discount = 50

12 × 50 / 100 = 6
```

So, each bottle saves £6.

### Step 2: Calculate the required number of bottles

```javascript
let saving = hol / result;
```

If the holiday costs £1000:

```text
1000 / 6 = 166.666...
```

### Step 3: Round down

```javascript
Math.floor(saving)
```

Since only complete bottles can be purchased:

```text
166.666... → 166
```

Therefore, the answer is:

```text
166
```

---

## 🧪 Examples

### Example 1

```javascript
dutyFree(10, 10, 500);
```

Output:

```text
500
```

Because each bottle saves £1 and £500 is needed.

### Example 2

```javascript
dutyFree(12, 50, 1000);
```

Output:

```text
166
```

Because each bottle saves £6 and:

```text
1000 / 6 = 166.666...
```

After rounding down:

```text
166
```

---

## 🧠 Important JavaScript Concepts

### Percentage Calculation

```javascript
normPrice * discount / 100
```

This calculates the discount amount from the original price.

### `Math.floor()`

`Math.floor()` rounds a number down to the nearest integer.

```javascript
Math.floor(166.666);
// 166
```

---

## 🔄 Logic Flow

```text
Normal Price + Discount
          ↓
Saving per Bottle
          ↓
Holiday Cost ÷ Saving
          ↓
Math.floor()
          ↓
Number of Bottles
```

---

## ⏱️ Time Complexity

```text
O(1)
```

Only a fixed number of arithmetic operations are performed.

---

## 💾 Space Complexity

```text
O(1)
```

Only a constant amount of memory is used.

---

## 🛠️ Technologies Used

- JavaScript
- Arithmetic Operators
- Percentage Calculation
- `Math.floor()`

---

## ✅ Final Solution

```javascript
function dutyFree(normPrice, discount, hol) {
  let result = normPrice * discount / 100;
  let saving = hol / result;

  return Math.floor(saving);
}
```