# 🐱 Cat Years, Dog Years (2)

## 📌 Difficulty

**7kyu**

---

## 📝 Problem

Given the current ages of a cat and a dog in animal years, determine how many whole human years you have owned each pet.

### Rules

#### 🐱 Cat Years

- First year → 15 years
- Second year → +9 years
- Every additional year → +4 years

#### 🐶 Dog Years

- First year → 15 years
- Second year → +9 years
- Every additional year → +5 years

Return the result as:

```js
[ownedCat, ownedDog]
```

---

## 💡 Approach

- Check whether the given age is less than the first or second milestone.
- If the age is greater than or equal to 24, calculate the remaining years.
- Convert the remaining animal years into human years using the given rules.
- Return the result as an array.

---

## ⏱️ Time Complexity

```text
O(1)
```

## 💾 Space Complexity

```text
O(1)
```

---

## 📂 Solution

See **solution.js**

---

## ✅ Status

Solved ✔️