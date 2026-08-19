# ⚽ Regular Ball Super Ball

## 📌 Difficulty

**8kyu**

---

## 📝 Problem

Create a `Ball` class/function that accepts one argument for the ball type when instantiated.

If no argument is provided, the ball type should default to `"regular"`.

### Examples

    const ball1 = new Ball();
    const ball2 = new Ball("super");

    ball1.ballType → "regular"
    ball2.ballType → "super"

---

## 💡 Approach

- Create a `Ball` constructor function.
- Accept `ballType` as an argument.
- Assign the provided value to the object's `ballType` property.
- If no value is provided, use `"regular"` as the default ball type.

---

## ⚠️ Edge Cases

- No argument → `"regular"`
- `"super"` → `"super"`
- Any provided ball type is stored as given.

---

## ⏱️ Time Complexity

    O(1)

## 💾 Space Complexity

    O(1)

---

## 📂 Solution

See **solution.js**

---

## ✅ Status

Solved ✔️