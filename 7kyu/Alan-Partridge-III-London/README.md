# 🚆 Alan Partridge III - London

## 📌 Difficulty

**7kyu**

---

## 📝 Problem

Given a list of train stations, check whether all four stations mentioned by Alan Partridge are present.

The required stations are:

- `Rejection`
- `Disappointment`
- `Backstabbing Central`
- `Shattered Dreams Parkway`

If all four stations are present, return:

`"Smell my cheese you mother!"`

If any required station is missing, return:

`"No, seriously, run. You will miss it."`

### Examples

    alan([
      "Rejection",
      "Disappointment",
      "Backstabbing Central",
      "Shattered Dreams Parkway"
    ])
    → "Smell my cheese you mother!"

---

## 💡 Approach

- Store all required stations in an array.
- Loop through the required stations.
- Use `includes()` to check whether each station exists in the given list.
- If any station is missing, immediately return the failure message.
- If the loop finishes without finding a missing station, return the success message.

---

## ⚠️ Edge Cases

- If even one required station is missing, return the failure message.
- The order of stations in the input array does not matter.
- Additional stations in the input array do not affect the result.
- All four required stations must be present for a successful result.

---

## ⏱️ Time Complexity

    O(n)

The required station list has a fixed size, so checking all stations is effectively linear with respect to the input array size.

## 💾 Space Complexity

    O(1)

The required station list contains a fixed number of elements.

---

## 📂 Solution

See **solution.js**

---

## ✅ Status

Solved ✔️