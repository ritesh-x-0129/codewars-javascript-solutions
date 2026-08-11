# Welcome to the City

## 📌 Difficulty

**8kyu**

---

## 📝 Problem

Create a function that takes a person's:

- Name
- City
- State

and returns a welcome message.

The name is provided as an array and all name parts should be joined with a single space.

### Example

```javascript
sayHello(["John", "Smith"], "Phoenix", "Arizona");
```

Output:

```text
Hello, John Smith! Welcome to Phoenix, Arizona!
```

---

## 💡 Approach

The `join()` method is used to combine all elements of the `name` array with a space.

```javascript
let namee = name.join(" ");
```

For example:

```javascript
["John", "Smith"]
```

becomes:

```text
John Smith
```

The final message is created using a template literal.

---

## ⏱ Time Complexity

```text
O(n)
```

Where `n` is the number of name elements.

---

## 💾 Space Complexity

```text
O(n)
```

The joined name requires space proportional to the number of characters.

---

## 🛠 Technologies Used

- JavaScript
- Arrays
- Strings
- Template Literals

---

## ✅ Examples

```javascript
sayHello(["John", "Smith"], "Phoenix", "Arizona");
// "Hello, John Smith! Welcome to Phoenix, Arizona!"

sayHello(["Ritesh", "Rajput"], "Tokyo", "Japan");
// "Hello, Ritesh Rajput! Welcome to Tokyo, Japan!"
```