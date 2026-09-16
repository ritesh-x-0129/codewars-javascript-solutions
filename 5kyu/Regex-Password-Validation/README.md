# Regex Password Validation

## Difficulty

**5kyu**

## Problem

Write a regular expression to validate a password.

The password must:

- Be at least 6 characters long.
- Contain at least one lowercase letter.
- Contain at least one uppercase letter.
- Contain at least one digit.
- Contain only alphanumeric characters.

## Examples

    REGEXP.test("Abc123") → true

    REGEXP.test("Password1") → true

    REGEXP.test("abc123") → false

    REGEXP.test("ABC123") → false

    REGEXP.test("Abcdef") → false

    REGEXP.test("Abc_123") → false

## Approach

- Use lookaheads to ensure the password contains a lowercase letter, uppercase letter, and digit.
- Use `[A-Za-z\d]{6,}` to allow only alphanumeric characters with a minimum length of 6.
- Use `^` and `$` to ensure the entire password follows the rules.

## Time Complexity

    O(n)

The regular expression checks the characters of the password.

## Space Complexity

    O(1)

No additional data structures are used.

## Solution

See `solution.js`

## Status

Solved ✔️