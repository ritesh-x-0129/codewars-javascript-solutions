# Reversing Words in a String

## 📌 Difficulty

**8kyu**

## 🏷️ Category

- Fundamentals
- Strings

---

## 📝 Problem Description

Write a function that reverses the order of words in a given string.

The words in the input string are separated by a single space.

The function should return a new string where the words appear in reverse order.

### Examples

```text
"Hello World" → "World Hello"

"Hi There." → "There. Hi"
```

For example:

```text
"Everyone should learn Coding"
```

should become:

```text
"Coding learn should Everyone"
```

The input may contain trailing spaces, so unnecessary whitespace should not affect the result.

---

## 💡 Approach

The solution uses three JavaScript methods:

```javascript
split()
reverse()
join()
```

These methods are chained together to solve the problem in three simple steps.

### Step 1: Convert the string into an array

```javascript
string.split(" ")
```

For example:

```javascript
"Hello World"
```

becomes:

```javascript
["Hello", "World"]
```

---

### Step 2: Reverse the array

```javascript
["Hello", "World"].reverse()
```

becomes:

```javascript
["World", "Hello"]
```

The `reverse()` method changes the order of the elements in the array.

---

### Step 3: Convert the array back into a string

```javascript
["World", "Hello"].join(" ")
```

becomes:

```text
"World Hello"
```

The `" "` passed to `join()` makes sure there is one space between the words.

---

## 🔑 Main Logic

The complete solution can be reduced to:

```javascript
string.split(" ").reverse().join(" ")
```

The flow is:

```text
String
   ↓
split(" ")
   ↓
Array of words
   ↓
reverse()
   ↓
Reversed array
   ↓
join(" ")
   ↓
Reversed string
```

---

## 🧠 JavaScript Concepts Used

### `split()`

`split()` converts a string into an array based on a separator.

```javascript
"Hello World".split(" ")
```

Output:

```javascript
["Hello", "World"]
```

### `reverse()`

`reverse()` reverses the order of elements in an array.

```javascript
["Hello", "World"].reverse()
```

Output:

```javascript
["World", "Hello"]
```

### `join()`

`join()` combines array elements into a string.

```javascript
["World", "Hello"].join(" ")
```

Output:

```text
"World Hello"
```

---

## 🧪 Examples

```javascript
reverse("Hello World");
// "World Hello"

reverse("Hi There.");
// "There. Hi"

reverse("Everyone should learn Coding");
// "Coding learn should Everyone"
```

---

## ⏱️ Time Complexity

```text
O(n)
```

The string needs to be processed to create the array, reverse the words, and create the final string.

---

## 💾 Space Complexity

```text
O(n)
```

An array containing the words and the resulting string require additional memory.

---

## 🛠️ Technologies Used

- JavaScript
- Strings
- Arrays
- `split()`
- `reverse()`
- `join()`
- Method Chaining

---

## ✅ Final Solution

```javascript
function reverse(string) {
  let rev = string.split(" ").reverse().join(" ");
  return rev;
}
```