# Fix String Case

## 📌 Difficulty

**7kyu**

---

## 📝 Problem

Given a string containing uppercase and lowercase letters, convert the entire string to either:

- Lowercase
- Uppercase

The choice should require the **fewest possible character changes**.

Rules:

- If there are more uppercase letters, convert the string to uppercase.
- If there are more lowercase letters, convert the string to lowercase.
- If the number of uppercase and lowercase letters is equal, convert the string to lowercase.

### Examples

```javascript
solve("coDe");
// "code"

solve("CODe");
// "CODE"

solve("coDE");
// "code"
```

---

## 💡 Approach

First, count the number of uppercase and lowercase letters in the string.

Two counters are used:

```javascript
let upper = 0;
let lower = 0;
```

The string is traversed character by character.

If uppercase letters are greater than lowercase letters:

```javascript
return s.toUpperCase();
```

Otherwise:

```javascript
return s.toLowerCase();
```

The `else` condition also handles the case where both counts are equal, because the problem requires lowercase in that situation.

---

## ⏱ Time Complexity

```text
O(n)
```

The string is traversed once.

---

## 💾 Space Complexity

```text
O(1)
```

Only two counters are used apart from the output string.

---

## 🛠 Technologies Used

- JavaScript

---

## ✅ Examples

```javascript
solve("coDe");
// "code"

solve("CODe");
// "CODE"

solve("coDE");
// "code"

solve("Code");
// "code"
```