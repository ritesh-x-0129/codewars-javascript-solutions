# Bouncing Balls

## 📌 Difficulty

**6kyu**

---

## 📝 Problem

A ball is dropped from a height `h` and bounces to a fixed proportion of its previous height.

Given:

- `h` — initial height of the ball in meters
- `bounce` — the proportion of height retained after each bounce
- `window` — the height of the mother's window

Calculate how many times the ball passes in front of the window, including both falling and rising.

The ball is visible only when its height is **strictly greater than** the window height.

---

## ⚠️ Conditions

The experiment is valid only when:

```text
h > 0
0 < bounce < 1
window < h
```

If any condition is not satisfied, return:

```text
-1
```

---

## 💡 Approach

1. Validate the input conditions.
2. While the ball's current height is greater than the window:
   - Count the falling pass.
   - Reduce the height using the bounce factor.
   - If the new height is still greater than the window, count the rising pass.
3. Continue until the ball can no longer be seen.
4. Return the total count.

---

## ⏱ Time Complexity

```text
O(log h)
```

The ball's height decreases geometrically after every bounce.

---

## 💾 Space Complexity

```text
O(1)
```

Only a few variables are used regardless of the input size.

---

## 🛠 Technologies Used

- JavaScript

---

## ✅ Examples

```javascript
bouncingBall(3, 0.66, 1.5);
// 3

bouncingBall(3, 1, 1.5);
// -1
```

For `h = 3`, `bounce = 0.66`, and `window = 1.5`:

```text
Initial fall       → 1
First bounce       → 2
Second fall        → 3
```

So the ball is seen **3 times**.