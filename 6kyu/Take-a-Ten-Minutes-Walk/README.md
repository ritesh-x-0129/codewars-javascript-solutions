# Take a Ten Minutes Walk

## 📌 Difficulty

**6kyu**

---

## 📝 Problem

Given an array containing directions:

- `n` → North
- `s` → South
- `e` → East
- `w` → West

Each direction represents walking one city block, and each block takes one minute.

The function must return `true` only when:

1. The walk takes exactly **10 minutes**, meaning the array contains exactly 10 directions.
2. The walk returns to the **starting point**.

Otherwise, return `false`.

### Example

```javascript
isValidWalk(['n', 's', 'n', 's', 'e', 'w', 'e', 'w', 'n', 's']);
// true
```

---

## 💡 Approach

The solution uses a coordinate system.

- `x` represents horizontal movement.
  - `e` → `x + 1`
  - `w` → `x - 1`

- `y` represents vertical movement.
  - `n` → `y + 1`
  - `s` → `y - 1`

The walk is valid only when:

```text
x === 0
y === 0
```

This means the person has returned to the starting point.

Before calculating the position, the solution checks whether the walk contains exactly 10 directions.

---

## ⏱ Time Complexity

```text
O(n)
```

The array is traversed once.

For this kata, `n` is at most 10.

---

## 💾 Space Complexity

```text
O(1)
```

Only two variables, `x` and `y`, are used to track the position.

---

## 🛠 Technologies Used

- JavaScript

---

## ✅ Examples

```javascript
isValidWalk(['n', 's', 'n', 's', 'e', 'w', 'e', 'w', 'n', 's']);
// true

isValidWalk(['n', 's']);
// false

isValidWalk(['n', 'n', 'n', 'n', 'n', 's', 's', 's', 's', 's']);
// true
```