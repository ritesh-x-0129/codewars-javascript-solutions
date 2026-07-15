# Question: Filter out the geese

## Difficulty

**8kyu**

---

## Description

Given an array of bird names, remove all geese from the list.

The geese are:

- African
- Roman Tufted
- Toulouse
- Pilgrim
- Steinbacher

Return the remaining birds while preserving their original order.

---

## Example

```javascript
gooseFilter([
  "Mallard",
  "Hook Bill",
  "African",
  "Crested",
  "Pilgrim",
  "Toulouse",
  "Blue Swedish"
]);

// ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]
```

---

## Approach

- Store all geese names in an array.
- Traverse the birds array.
- Check whether each bird is a goose.
- If not, add it to the result array.
- Return the filtered array.

---

## Time Complexity

**O(n × m)**

> `n` = number of birds  
> `m` = number of geese (5)

## Space Complexity

**O(n)**

---

## Language

JavaScript (ES6+)