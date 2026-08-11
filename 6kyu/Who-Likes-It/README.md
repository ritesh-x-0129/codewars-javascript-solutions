# Who Likes It?

## 📌 Difficulty

**6kyu**

---

## 📝 Problem

Given an array containing the names of people who like an item, return the correct display text based on the number of people.

### Examples

```text
[] → "no one likes this"

["Peter"] → "Peter likes this"

["Jacob", "Alex"] → "Jacob and Alex like this"

["Max", "John", "Mark"] → "Max, John and Mark like this"

["Alex", "Jacob", "Mark", "Max"]
→ "Alex, Jacob and 2 others like this"
```

---

## 💡 Approach

The output depends on the number of names in the array.

```text
0 names → no one likes this
1 name  → name likes this
2 names → name and name like this
3 names → name, name and name like this
4+      → name, name and X others like this
```

For 4 or more names, the number of other people is calculated using:

```javascript
names.length - 2
```

The first two names are displayed, while the remaining names are represented by the `"others"` count.

---

## ⏱ Time Complexity

```text
O(1)
```

Only the array length and a maximum of three array elements are accessed.

---

## 💾 Space Complexity

```text
O(1)
```

Only a single additional variable is used.

---

## 🛠 Technologies Used

- JavaScript
- Arrays
- Conditional Statements
- Template Literals

---

## ✅ Example

```javascript
likes(["Alex", "Jacob", "Mark", "Max"]);

// "Alex, Jacob and 2 others like this"
```