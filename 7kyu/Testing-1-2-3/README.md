# Testing 1-2-3

## 📌 Difficulty

**7kyu**

---

## 📝 Problem

Given an array of strings, return a new array where each string is preceded by its correct line number.

The numbering starts from `1`.

The required format is:

```text
n: string
```

There must be a colon and a space between the number and the string.

### Example

```javascript
["a", "b", "c"]
```

Output:

```javascript
["1: a", "2: b", "3: c"]
```

An empty array should return an empty array:

```javascript
[]
// []
```

---

## 💡 Approach

The array is traversed using a `for` loop.

The index starts from `0`, but the required numbering starts from `1`, so `i + 1` is used.

Each string is formatted using a template literal:

```javascript
`${i + 1}: ${array[i]}`
```

The formatted line is then added to the result array using `push()`.

---

## ⏱ Time Complexity

```text
O(n)
```

The function processes each element of the input array once.

---

## 💾 Space Complexity

```text
O(n)
```

A new array containing the numbered strings is created.

---

## 🛠 Technologies Used

- JavaScript

---

## ✅ Examples

```javascript
number([]);
// []

number(["a", "b", "c"]);
// ["1: a", "2: b", "3: c"]

number(["hello", "world"]);
// ["1: hello", "2: world"]
```