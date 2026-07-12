# Question: Growth of a Population

## Difficulty

**7kyu**

---

## Description

Given:

- Initial population (`p0`)
- Annual percentage growth (`percent`)
- Number of people moving in or out each year (`aug`)
- Target population (`p`)

Return the number of whole years required for the population to become greater than or equal to the target population.

The population is always rounded down to the nearest integer after each year.

---

## Example

```javascript
nbYear(1000, 2, 50, 1200);      // 3
nbYear(1500, 5, 100, 5000);     // 15
nbYear(1500000, 2.5, 10000, 2000000); // 10
```

---

## Approach

- Initialize the year counter to `0`.
- Repeat until the population reaches the target.
- Update the population using:
  - Percentage growth
  - Additional inhabitants
- Round the population down using `Math.floor()`.
- Count each completed year.

---

## Time Complexity

**O(n)**

## Space Complexity

**O(1)**

---

## Language

JavaScript (ES6+)