# Remove Anchor from URL

## 📖 Problem

Complete the function so that it returns the URL with everything after the anchor (`#`) removed.

### Example

```javascript
removeUrlAnchor("www.codewars.com#about");
// "www.codewars.com"

removeUrlAnchor("www.codewars.com?page=1");
// "www.codewars.com?page=1"
```

---

## 💡 Approach

- Check if the URL contains `#`.
- If it doesn't, return the original URL.
- Otherwise, find the position of `#`.
- Return the substring from the beginning of the URL up to (but not including) the `#`.

---

## ⏱️ Complexity

- **Time Complexity:** `O(n)`
- **Space Complexity:** `O(n)`