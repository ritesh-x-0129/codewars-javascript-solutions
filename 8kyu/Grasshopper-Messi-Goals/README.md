# Grasshopper - Messi Goals

## 📌 Difficulty

**8kyu**

---

## 📝 Problem

Create variables containing Messi's goals in three competitions:

| Competition | Goals |
|---|---:|
| La Liga | 43 |
| Champions League | 10 |
| Copa del Rey | 5 |

Create a fourth variable called `totalGoals` that stores the total number of goals.

---

## 💡 Approach

Three variables are created to store the goals for each competition:

```javascript
let laLigaGoals = 43;
let championsLeagueGoals = 10;
let copaDelReyGoals = 5;
```

Then all three values are added together:

```javascript
let totalGoals = laLigaGoals + championsLeagueGoals + copaDelReyGoals;
```

The total is:

```text
43 + 10 + 5 = 58
```

---

## ⏱ Time Complexity

```text
O(1)
```

Only a fixed number of arithmetic operations are performed.

---

## 💾 Space Complexity

```text
O(1)
```

Only a fixed number of variables are used.

---

## 🛠 Technologies Used

- JavaScript
- Variables
- Arithmetic Operators

---

## ✅ Output

```text
58
```