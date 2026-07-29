# Two Fighters, One Winner

## 📖 Problem

Create a function that returns the name of the winner in a fight between two fighters.

Each fighter attacks in turns, starting with the given first attacker. A fighter loses when their health becomes less than or equal to `0`.

### Example

```javascript
declareWinner(
  new Fighter("Lew", 10, 2),
  new Fighter("Harry", 5, 4),
  "Lew"
);
// "Lew"
```

---

## 💡 Approach

- Check which fighter attacks first.
- Repeatedly reduce the opponent's health by the attacker's damage.
- After each attack, check if the opponent's health is less than or equal to `0`.
- If a fighter dies, return the winner's name.
- Otherwise, continue alternating attacks until one fighter wins.

---

## ⏱️ Complexity

- **Time Complexity:** `O(n)`
- **Space Complexity:** `O(1)`

> `n` is the number of attack rounds until one fighter's health reaches `0`.