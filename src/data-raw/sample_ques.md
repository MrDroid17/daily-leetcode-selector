# Interview Questions
  - [Technical Interview Prep - Akansha's Interview Experience](#technical-interview-prep---akanshas-interview-experience)
  - [PriceWaterhouseCoopers (PWC) - First Round - 11-07-2025](#pricewaterhousecoopers-pwc---first-round---11-07-2025)

# Technical Interview Prep - Akansha's Interview Experience

A compilation of common JavaScript and Angular interview questions.

## Task 1: Flatten a Nested Object

Write a function to flatten a nested object. The keys in the flattened object should be dot-separated strings representing the path to the value.

**Input:**
```javascript
{ a: 1, b: { c: 2, d: { e: 3 } } }
```

**Output:**
```javascript
{ "a": 1, "b.c": 2, "b.d.e": 3 }
```

<details>
<summary><span style="color: #2563eb; font-weight: bold;">Answer</span></summary>

This can be solved using a recursive function that keeps track of the current path. When a non-object value is found, the path and value are added to the result.

```javascript
function flattenObject(obj, parentKey = '', result = {}) {
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const newKey = parentKey ? `${parentKey}.${key}` : key;
      if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
        flattenObject(obj[key], newKey, result);
      } else {
        result[newKey] = obj[key];
      }
    }
  }
  return result;
}

const nestedObj = { a: 1, b: { c: 2, d: { e: 3 } } };
console.log(flattenObject(nestedObj));
```

</details>

---

## Task 2: Find the First Recurring Character

Given an array, find the first character that appears more than once.

**Input:**
```javascript
[2, 5, 1, 2, 3, 5, 1]
```

**Output:**
```javascript
2
```

<details>
<summary><span style="color: #2563eb; font-weight: bold;">Answer</span></summary>

The most efficient way to solve this is by using a `Set` to keep track of the numbers we've seen. We iterate through the array, and for each element, we check if it's already in our set. The first one we find is our answer. This approach has a time complexity of O(n).

```javascript
function findFirstRecurring(arr) {
  const seen = new Set();
  for (let i = 0; i < arr.length; i++) {
    if (seen.has(arr[i])) {
      return arr[i];
    }
    seen.add(arr[i]);
  }
  return undefined; // No recurring character found
}

const inputArray = [2, 5, 1, 2, 3, 5, 1];
console.log(findFirstRecurring(inputArray)); // Output: 2
```

</details>

---

## Task 3: String Compression

Implement a basic string compression method using the counts of repeated characters.

**Input:**
```javascript
"aabcccccaaa"
```

**Output:**
```javascript
"a2b1c5a3"
```

<details>
<summary><span style="color: #2563eb; font-weight: bold;">Answer</span></summary>

Iterate through the string, keeping a count of consecutive characters. When the character changes or the string ends, append the character and its count to the result string.

```javascript
function compressString(str) {
  if (!str) return "";
  
  let compressed = '';
  let count = 1;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count++;
    } else {
      compressed += str[i] + count;
      count = 1;
    }
  }
  return compressed;
}

console.log(compressString("aabcccccaaa")); // Output: "a2b1c5a3"
```

</details>

---

## Task 4: Find the First Non-Repeated Character

Write a function that takes a string and returns the first character that is not repeated anywhere in the string.

**Example:**
```javascript
"swiss" // ➝ "w"
```

<details>
<summary><span style="color: #2563eb; font-weight: bold;">Answer</span></summary>

First, create a frequency map of all characters in the string. Then, iterate through the string a second time and return the first character that has a count of 1 in your map.

```javascript
function firstNonRepeatedCharacter(s) {
  const charCount = {};
  
  for (const char of s) {
    charCount[char] = (charCount[char] || 0) + 1;
  }
  
  for (const char of s) {
    if (charCount[char] === 1) {
      return char;
    }
  }
  
  return null;
}

console.log(firstNonRepeatedCharacter("swiss")); // "w"
```

</details>

---

## Task 5: Valid Parentheses

Given a string `s` containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

**Example:**
```javascript
Input: s = "([])" // Output: true
Input: s = "(]"   // Output: false
```

<details>
<summary><span style="color: #2563eb; font-weight: bold;">Answer</span></summary>

This is a classic use case for a stack data structure. Iterate through the string: if you see an opening bracket, push it onto the stack. If you see a closing bracket, check if the stack is empty or if its top element is the corresponding opening bracket. If it is, pop the stack. If not, the string is invalid. At the end, the string is valid only if the stack is empty.

```javascript
function isValidParentheses(s) {
    const stack = [];
    const map = {
        "(": ")",
        "[": "]",
        "{": "}",
    };

    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        if (map[char]) {
            stack.push(char);
        } else {
            let lastOpen = stack.pop();
            if (char !== map[lastOpen]) {
                return false;
            }
        }
    }
    return stack.length === 0;
};

console.log(isValidParentheses("()[]{}")); // true
console.log(isValidParentheses("([)]"));   // false
```

</details>

---
## Task 6: Second Largest no

Given a `arr` of exam scores from a class of students, find the second-highest score without arranging the scores in ascending or descending order.

**Example:**
```javascript
Input: arr = [85, 92, 78, 95, 88]// Output: 92
Input: arr = [2,5,12,8,15]// Output: 12
```

<details>
<summary><span style="color: #2563eb; font-weight: bold;">Answer</span></summary>

The most efficient way to find the second-largest number without sorting is to iterate through the array just once. You'll need   `two variables` : one to track the `largest number` and another to track the `second largest`.

```javascript
function findSecondLargest(arr) {
  if (arr.length < 2) {
    return "Array should have at least two numbers.";
  }

  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    const currentNumber = arr[i];

    if (currentNumber > largest) {
      secondLargest = largest;
      largest = currentNumber;
    } else if (currentNumber > secondLargest && currentNumber !== largest) {
      secondLargest = currentNumber;
    }
  }

  return secondLargest;
}

const numbers = [10, 5, 20, 8, 15];
const result = findSecondLargest(numbers);
console.log(result); // Output: 15
```

</details>

---

