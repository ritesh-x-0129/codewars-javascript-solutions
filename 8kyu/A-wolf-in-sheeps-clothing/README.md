# 🐺 A Wolf in Sheep's Clothing

## 📌 Difficulty

**8kyu**

---

## 📝 Problem

Given a queue containing sheep and exactly one wolf, find the sheep directly in front of the wolf.

The queue is represented from the front to the back, while you are standing at the end of the array.

If the wolf is directly in front of you, return:

    "Pls go away and stop eating my sheep"

Otherwise, return the position of the sheep that is about to be eaten.

### Examples

    ["sheep", "sheep", "sheep", "wolf", "sheep"]
    → "Oi! Sheep number 1! You are about to be eaten by a wolf!"

    ["sheep", "sheep", "wolf"]
    → "Pls go away and stop eating my sheep"

---

## 💡 Approach

- Start iterating from the end of the array because you are standing at the front of the queue.
- Count the animals while moving backward through the queue.
- When the wolf is found, check its position relative to you.
- If the wolf is immediately in front of you, return the special warning message.
- Otherwise, return the sheep number directly in front of the wolf.

---

## ⏱️ Time Complexity

    O(n)

## 💾 Space Complexity

    O(1)

---

## 📂 Solution

See **solution.js**

---

## ✅ Status

Solved ✔️