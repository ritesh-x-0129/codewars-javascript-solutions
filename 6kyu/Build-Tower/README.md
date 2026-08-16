# 🗼 Build Tower

## 📌 Difficulty

**6kyu**

---

## 📝 Problem

Build a tower of `nFloors` floors using `*` characters.

Each floor should contain an increasing number of stars and remain centered within the tower.

### Examples

    towerBuilder(3) →

    [
      "  *  ",
      " *** ",
      "*****"
    ]

    towerBuilder(6) →

    [
      "     *     ",
      "    ***    ",
      "   *****   ",
      "  *******  ",
      " ********* ",
      "***********"
    ]

---

## 💡 Approach

- Create an empty array to store the tower floors.
- Loop from the first floor to the last floor.
- Calculate the number of stars using `2 * i - 1`, producing `1, 3, 5, 7...`.
- Calculate the spaces using `nFloors - i`.
- Add equal spaces before and after the stars to keep each floor centered.
- Push each completed floor into the tower array.
- Return the completed tower.

---

## ⏱️ Time Complexity

    O(n²)

## 💾 Space Complexity

    O(n²)

---

## 📂 Solution

See **solution.js**

---

## ✅ Status

Solved ✔️