# Training JS #4: Basic Data Types — Array

## 📌 Difficulty

**8kyu**

---

## 📝 Problem

This kata introduces the basics of JavaScript arrays.

The task is to complete five functions that receive an array as a parameter:

1. `getLength(arr)` — return the length of the array.
2. `getFirst(arr)` — return the first element.
3. `getLast(arr)` — return the last element.
4. `pushElement(arr)` — add an element to the array and return the array.
5. `popElement(arr)` — remove the last element from the array and return the array.

---

## 💡 Approach

### 1. Get Array Length

Use the `.length` property:

```javascript
arr.length
```

### 2. Get First Element

Array indexes start from `0`, so:

```javascript
arr[0]
```

### 3. Get Last Element

The last index is always:

```javascript
arr.length - 1
```

Therefore:

```javascript
arr[arr.length - 1]
```

### 4. Add an Element

The `push()` method adds an element to the end of an array:

```javascript
arr.push(6);
```

### 5. Remove the Last Element

The `pop()` method removes the last element:

```javascript
arr.pop();
```

---

## ⏱ Time Complexity

- `getLength()` → **O(1)**
- `getFirst()` → **O(1)**
- `getLast()` → **O(1)**
- `pushElement()` → **O(1)** amortized
- `popElement()` → **O(1)**

---

## 💾 Space Complexity

**O(1)** additional space is used.

The functions do not create another array.

---

## 🛠 Technologies Used

- JavaScript

---

## ✅ Examples

```javascript
getLength([1, 2, 3, 4, 5]);
// 5

getFirst([1, 2, 3, 4, 5]);
// 1

getLast([1, 2, 3, 4, 5]);
// 5

pushElement([1, 2, 3, 4, 5]);
// [1, 2, 3, 4, 5, 6]

popElement([1, 2, 3, 4, 5]);
// [1, 2, 3, 4]
```