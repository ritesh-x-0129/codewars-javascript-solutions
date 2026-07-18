# Question: Transportation on Vacation

## Difficulty

**8kyu**

---

## Description

Calculate the total rental car cost based on the number of rental days.

- Each day costs **$40**.
- If the rental is **7 or more days**, subtract **$50**.
- If the rental is **3 to 6 days**, subtract **$20**.
- Otherwise, no discount is applied.

---

## Example

```javascript
rentalCarCost(1);  // 40
rentalCarCost(4);  // 140
rentalCarCost(7);  // 230
```

---

## Approach

- Calculate the total rental cost.
- Apply the appropriate discount based on the number of rental days.
- Return the final amount.

---

## Time Complexity

**O(1)**

## Space Complexity

**O(1)**

---

## Language

JavaScript (ES6+)