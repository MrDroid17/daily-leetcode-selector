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




## Puzzle 1: Event Loop Output

Explain the output of the following code snippet.

```javascript
console.log('Start');

setTimeout(() => {
  console.log('setTimeout');
}, 0);

Promise.resolve().then(() => {
  console.log('Promise 1');
}).then(() => {
  console.log('Promise 2');
});

console.log('End');
```

<details>
<summary><span style="color: #2563eb; font-weight: bold;">Answer</span></summary>

The JavaScript event loop prioritizes tasks. Synchronous code runs first, then microtasks (like Promises), and finally macrotasks (like `setTimeout`).

1. **Synchronous Code:** 'Start' and 'End' are logged immediately.
2. **Microtask Queue:** The `Promise.resolve()` schedules its `.then()` callbacks to the microtask queue. After the synchronous code finishes, the event loop processes this entire queue before moving on. So, 'Promise 1' and then 'Promise 2' are logged.
3. **Macrotask Queue:** `setTimeout` schedules its callback to the macrotask queue. It only runs after the call stack is clear AND the microtask queue is empty. So, 'setTimeout' is logged last.

**Final Output:**
```
Start
End
Promise 1
Promise 2
setTimeout
```

</details>

---

## Puzzle 2: Hoisting and Scope

Explain the output of the following code snippet.

```javascript
let x = 10;
function check() {
  console.log(x, 'myVar');
  if (false) {
    var x = 20;
  }
}
check();
```

<details>
<summary><span style="color: #2563eb; font-weight: bold;">Answer</span></summary>

The `var x = 20;` declaration inside the `check` function is **hoisted** to the top of its function scope. This means that within the `check` function, `x` is considered a local variable. However, only the declaration (`var x;`) is hoisted, not the initialization (`= 20`).

When `console.log(x)` is called, it refers to the local, hoisted `x`, which has not yet been assigned a value. Therefore, its value is `undefined`. The `if (false)` block is never executed, so the assignment `x = 20` never happens.

**Final Output:**
```
undefined 'myVar'
```

</details>

---

## Puzzle 3: Event Loop Output (Part 2)

Explain the output of the following code snippet.

```javascript
setTimeout(function timeout() {
  console.log('Timed out 1!');
}, 0);

Promise.resolve(1).then(function resolve() {
  console.log('Resolved!');
});

setTimeout(function timeout() {
  console.log('Timed out 2!');
}, 0);

console.log('Last!');
```

<details>
<summary><span style="color: #2563eb; font-weight: bold;">Answer</span></summary>


This follows the same event loop principles as Puzzle 1.

1. **Synchronous Code:** `console.log('Last!')` runs first.
2. **Microtask Queue:** The `Promise.resolve()` callback is added to the microtask queue. It runs next, logging 'Resolved!'.
3. **Macrotask Queue:** The two `setTimeout` callbacks are added to the macrotask queue in the order they were defined. They run after the microtask queue is empty, logging 'Timed out 1!' and then 'Timed out 2!'.

**Final Output:**
```
Last!
Resolved!
Timed out 1!
Timed out 2!
```

</details>

---

## Puzzle 4: 'this' Context

Explain the output of the following code snippet.

```javascript
let a = 40;
let obj = {
    a: 10,
    b: function(){ console.log(this.a) },
    c: () => { console.log(this.a) }
}

obj.b();
obj.c();
```

<details>
<summary><span style="color: #2563eb; font-weight: bold;">Answer</span></summary>


The value of `this` depends on how the function is called.

- **`obj.b()`:** `b` is a traditional function. When called as a method of an object (`obj.b()`), `this` refers to the object itself (`obj`). Therefore, `this.a` is `obj.a`, which is **10**.
- **`obj.c()`:** `c` is an arrow function. Arrow functions do not have their own `this` context; they inherit `this` from their surrounding (lexical) scope at the time they are defined. In this case, `obj` is defined in the global scope, so `this` inside the arrow function refers to the global object (`window` in a browser). Therefore, `this.a` refers to the global `let a`, which is **40**.

**Final Output:**
```
10
40
```

</details>

---

## Concept 1: Numerical Sort

How do you correctly sort the following array of numbers in ascending order?

```javascript
let arr = [1, 27, 3, 45, 2, 3];
```

<details>
<summary><span style="color: #2563eb; font-weight: bold;">Answer</span></summary>


By default, the `Array.prototype.sort()` method sorts elements by converting them into strings and comparing their UTF-16 code unit values. This leads to incorrect numerical sorting (e.g., "27" comes before "3").

To sort numbers correctly, you must provide a **compare function**. For ascending order, the function `(a, b) => a - b` works perfectly.

```javascript
let arr = [1, 27, 3, 45, 2, 3];
arr.sort((a, b) => a - b);
console.log(arr); // Output: [1, 2, 3, 3, 27, 45]
```

</details>

---

## Concept 2: Function Currying

What is function currying? Provide a simple example.

<details>
<summary><span style="color: #2563eb; font-weight: bold;">Answer</span></summary>


**Currying** is a functional programming technique that transforms a function with multiple arguments into a sequence of nested functions, each taking a single argument. This allows you to create specialized, reusable functions by "pre-loading" a function with some of its arguments.

```javascript
// Non-curried function
const add = (a, b, c) => a + b + c;

// Curried version of the same function
const curriedAdd = (a) => (b) => (c) => a + b + c;

// Create a specialized function by pre-loading the first argument
const add5 = curriedAdd(5);
console.log(add5(10)(3)); // 18

// Or call it all at once
console.log(curriedAdd(5)(10)(3)); // 18
```

</details>

---

## Concept 3: Angular - `ng-template` vs `ng-content`

Briefly explain the difference between `ng-template` and `ng-content`.

<details>
<summary><span style="color: #2563eb; font-weight: bold;">Answer</span></summary>


### 🔶 `ng-content` — *Content Projection*

---

`ng-content` is used when you want to allow a **parent component to project content** into a **child component’s template**. Think of it like a **placeholder or slot** where you can "inject" external content.

### 🔹 Use Case:

Use `ng-content` when creating **reusable wrapper components**, like cards, modals, or custom buttons, where the **content is provided by the parent component**.

### ✅ Example:

**Parent component (app.component.html):**

```html
<app-card>
  <h3>Projected Title</h3>
  <p>This content comes from the parent.</p>
</app-card>
```

**Child component (card.component.html):**

```html
<div class="card">
  <ng-content></ng-content>
</div>
```

**Output:**

```html
<div class="card">
  <h3>Projected Title</h3>
  <p>This content comes from the parent.</p>
</div>
```

You can also have **multiple slots** using `select`:

```html
<ng-content select="header"></ng-content>
<ng-content select="footer"></ng-content>
```

---

### 🔶 `ng-template` — *Structural/Deferred Template*

---

`ng-template` defines a chunk of HTML that is **not rendered immediately**. It’s rendered **only when Angular tells it to**, often through structural directives like `*ngIf`, `*ngFor`, or `ngTemplateOutlet`.

### 🔹 Use Case:

Use `ng-template` when you want to **conditionally render content**, **reuse templates**, or control **rendering logic inside the component**.

### ✅ Example 1: With `*ngIf`

```html
<ng-template [ngIf]="showDetails">
  <p>This will show only if showDetails is true</p>
</ng-template>
```

### ✅ Example 2: With `ngTemplateOutlet`

**Component HTML:**

```html
<ng-container *ngTemplateOutlet="templateRef"></ng-container>

<ng-template #templateRef>
  <p>This is a reusable template block.</p>
</ng-template>
```

---

### 🧠 Key Differences Summary Table

| Feature             | `ng-content`                  | `ng-template`                        |
| ------------------- | ----------------------------- | ------------------------------------ |
| Purpose             | Content projection            | Conditional or deferred rendering    |
| Controlled by       | **Parent component**          | **Component or Angular directives**  |
| Rendering           | Always rendered               | Rendered only when told to           |
| Use Case            | Wrapper or reusable container | Conditional logic, template reuse    |
| Can loop/condition? | ❌ No                          | ✅ Yes (with `*ngIf`, `*ngFor`, etc.) |

---

### 🎯 Interview Tip:

If asked to explain the difference:

> "`ng-content` lets a parent inject content into a component like a slot, and it's always rendered. `ng-template` defines a block of HTML that’s not rendered by default — it’s like a placeholder template that Angular can render conditionally or programmatically. Both are for reusability, but in different ways."

Would you like this compiled into a markdown (`.md`) file for notes or revision?


</details>

---

## Concept 4: Angular - Calling Functions in Templates

Why is it generally bad practice to call functions directly in a template expression like `{{ myFunc() }}`?

<details>
<summary><span style="color: #2563eb; font-weight: bold;">Answer</span></summary>


Calling a function in a template expression can lead to significant performance issues because the function will be **executed on every single change detection cycle**, which can be many times per second.

This can slow down your application and cause unintended side effects. The better approach is to bind to a component property and calculate the value once in your component's TypeScript file, or use an **Angular Pipe** for values that need to be transformed, as pipes are optimized to only re-run when their inputs change.

</details>

---

# PriceWaterhouseCoopers (PWC) - First Round - 11-07-2025
*Technical Interview Questions*

## PWC Q1: Object Keys and Type Coercion

What will be the output of the following code? Explain why.

```javascript
let a = {};
let b = { key: "b" };
let c = { key: "c" }; 
a[b] = 123; 
a[c] = 456; 
console.log(a[b]);
```

<details>
<summary><span style="color: #2563eb; font-weight: bold;">Answer</span></summary>


The output will be **456**.

**Explanation:**
- When using an object as a key in JavaScript, it gets converted to a string using the `toString()` method.
- Both objects `b` and `c` are converted to the string `"[object Object]"`.
- So `a[b]` and `a[c]` are actually the same key: `a["[object Object]"]`.
- When we assign `a[b] = 123`, we're setting `a["[object Object]"] = 123`.
- Then `a[c] = 456` overwrites the same key with `456`.
- Therefore, `console.log(a[b])` outputs `456`.

**Final Output:**
```
456
```

</details>

---

## PWC Q2: setTimeout with var in Loop

What will be the output of the following code? Explain the behavior.

```javascript
const arr = [1, 2, 3, 4, 5];

for (var i = 0; i < arr.length; i++) {
    setTimeout(function () { 
        console.log(i); 
    }, 1000);  
}
```

<details>
<summary><span style="color: #2563eb; font-weight: bold;">Answer</span></summary>


The output will be **5 5 5 5 5** (five times).

**Explanation:**
- `var` has function scope, not block scope. All setTimeout callbacks share the same `i` variable.
- The loop completes immediately, and `i` becomes `5` (the exit condition).
- After 1 second, all 5 setTimeout callbacks execute, but they all reference the same `i` which is now `5`.
- This is a classic JavaScript closure problem with `var` in loops.

**Final Output (after 1 second):**
```
5
5
5
5
5
```

**Solutions:**
- Use `let` instead of `var` (block scope)
- Use an IIFE (Immediately Invoked Function Expression)
- Use `bind()` to pass the current value

</details>

---

## PWC Q3: setTimeout with let in Loop

What will be the output of the following code? How does it differ from the previous example?

```javascript
const arr = [1, 2, 3, 4, 5];

for (let i = 0; i < arr.length; i++) {
    setTimeout(function () { 
        console.log(i); 
    }, 1000);  
}
```

<details>
<summary><span style="color: #2563eb; font-weight: bold;">Answer</span></summary>


The output will be **0 1 2 3 4** (in that order).

**Explanation:**
- `let` has block scope, so each iteration of the loop creates a new binding for `i`.
- Each setTimeout callback captures its own copy of `i` from its respective iteration.
- This means each callback remembers the value of `i` from when it was created.
- After 1 second, all callbacks execute with their respective captured values: 0, 1, 2, 3, 4.

**Final Output (after 1 second):**
```
0
1
2
3
4
```

**Key Difference:**
The `let` keyword creates a new lexical environment for each iteration, preventing the closure issue that occurs with `var`.

</details>

---

## PWC Q4: Event Loop and Event-Driven Architecture

Explain the JavaScript Event Loop and event-driven programming concepts. How do they work together?

<details>
<summary><span style="color: #2563eb; font-weight: bold;">Answer</span></summary>


**Event Loop:**
- JavaScript is single-threaded but can handle asynchronous operations through the Event Loop
- The Event Loop continuously checks the Call Stack and Task Queues
- It moves tasks from queues to the Call Stack when the stack is empty

**Event-Driven Programming:**
- Programs respond to events (user clicks, API responses, timer completions)
- Event handlers/listeners are registered to respond to specific events
- Non-blocking execution - the main thread isn't blocked waiting for events

**How they work together:**
```javascript
// Event-driven example
document.addEventListener('click', function() {
    console.log('Click handled!');
});

// Async operations
setTimeout(() => console.log('Timer'), 0);
Promise.resolve().then(() => console.log('Promise'));

console.log('Synchronous');

// Output order:
// Synchronous
// Promise (microtask queue)
// Timer (macrotask queue)
// Click handled! (when user clicks)
```

**Key Components:**
- **Call Stack:** Executes function calls
- **Microtask Queue:** Promises, queueMicrotask
- **Macrotask Queue:** setTimeout, setInterval, DOM events
- **Web APIs:** Handle async operations (timers, HTTP requests)

</details>

---

## PWC Q5: MongoDB - Top 3 Students by Score

Write a MongoDB query to return the top 3 students who have the highest scores.

Assume a collection called `students` with documents like:
```javascript
{ name: "Alice", score: 95 }
{ name: "Bob", score: 87 }
{ name: "Charlie", score: 92 }
```

<details>
<summary><span style="color: #2563eb; font-weight: bold;">Answer</span></summary>


**MongoDB Query:**
```javascript
// Method 1: Using find() with sort() and limit()
db.students.find().sort({ score: -1 }).limit(3);

// Method 2: Using aggregation pipeline
db.students.aggregate([
    { $sort: { score: -1 } },
    { $limit: 3 }
]);

// Method 3: With projection (if you only want specific fields)
db.students.find({}, { name: 1, score: 1, _id: 0 })
           .sort({ score: -1 })
           .limit(3);

// Method 4: Using aggregation with more control
db.students.aggregate([
    { $sort: { score: -1 } },
    { $limit: 3 },
    { $project: { name: 1, score: 1, _id: 0 } }
]);
```

**Explanation:**
- `sort({ score: -1 })`: Sorts in descending order (-1 for desc, 1 for asc)
- `limit(3)`: Returns only the first 3 documents
- `find()`: Simple query method
- `aggregate()`: More powerful for complex operations

**Performance Optimization:**
- Create an index on the `score` field: `db.students.createIndex({ score: -1 })`
- Use projection to return only needed fields
- Consider compound indexes if filtering by multiple fields

</details>

---

## PWC Q6: React App Optimization Techniques

How would you optimize a React application for better performance?

<details>
<summary><span style="color: #2563eb; font-weight: bold;">Answer</span></summary>


**Component Optimization:**
- **React.memo():** Prevent unnecessary re-renders of functional components
- **useMemo():** Memoize expensive calculations
- **useCallback():** Memoize functions to prevent child re-renders
- **PureComponent/shouldComponentUpdate:** For class components

```jsx
// React.memo example
const ExpensiveComponent = React.memo(({ data }) => {
    return <div>{data.name}</div>;
});

// useMemo example
const ExpensiveCalculation = ({ items }) => {
    const total = useMemo(() => {
        return items.reduce((sum, item) => sum + item.price, 0);
    }, [items]);
    
    return <div>Total: {total}</div>;
};

// useCallback example
const Parent = ({ items }) => {
    const handleClick = useCallback((id) => {
        // Handle click logic
    }, []);
    
    return items.map(item => 
        <Child key={item.id} onClick={handleClick} />
    );
};
```

**Code Splitting & Lazy Loading:**
- React.lazy() and Suspense for component-level code splitting
- Dynamic imports for route-based splitting
- Webpack bundle analysis to identify large chunks

```jsx
// Lazy loading components
const LazyComponent = React.lazy(() => import('./LazyComponent'));

function App() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <LazyComponent />
        </Suspense>
    );
}
```

**Other Optimization Techniques:**
- **Virtual Scrolling:** For large lists (react-window, react-virtualized)
- **Image Optimization:** Lazy loading, WebP format, responsive images
- **Bundle Optimization:** Tree shaking, minification, compression
- **State Management:** Avoid unnecessary global state, normalize data
- **Debouncing:** For search inputs and API calls
- **Service Workers:** For caching and offline functionality
- **React DevTools Profiler:** Identify performance bottlenecks

</details>

---

## PWC Q7: React Fragment

What is a React Fragment and why would you use it? Provide examples.

<details>
<summary><span style="color: #2563eb; font-weight: bold;">Answer</span></summary>

A **React Fragment** is a feature in React that lets you group multiple elements without adding an extra node to the DOM.

### 🔧 Why use React Fragment?

Normally, JSX must return a single parent element. If you don't want to wrap elements with an actual DOM node like `<div>`, you can use a Fragment instead.

### ✅ Example:

```jsx
import React from 'react';

function List() {
  return (
    <React.Fragment>
      <li>Item 1</li>
      <li>Item 2</li>
    </React.Fragment>
  );
}
```

Or using the **short syntax**:

```jsx
function List() {
  return (
    <>
      <li>Item 1</li>
      <li>Item 2</li>
    </>
  );
}
```

### 💡 Benefits:

* Avoids unnecessary `<div>` wrappers.
* Keeps the DOM cleaner.
* Improves performance in large lists/layouts.

### 🎯 Real-world Use Cases:

```jsx
// Table rows without extra wrapper
function TableRows() {
  return (
    <>
      <tr><td>Row 1</td></tr>
      <tr><td>Row 2</td></tr>
    </>
  );
}

// Multiple elements in conditional rendering
function UserProfile({ user }) {
  return (
    <div>
      {user.isLoggedIn && (
        <>
          <h2>Welcome, {user.name}!</h2>
          <button>Logout</button>
        </>
      )}
    </div>
  );
}
```

</details>

---


# JS Tricky Code Snippets
*Advanced JavaScript Code Output Questions*

## Q1: JavaScript ASI (Automatic Semicolon Insertion) Trap

What is the output of the following code? Explain what happens.

```javascript
function sayHello(){
  var name = "Hi John";
  return
  {
    fullName: name
  }
}
console.log(sayHello().fullName);
```

<details>
<summary><span style="color: #2563eb; font-weight: bold;">Answer</span></summary>

**Output:** This code will throw a **TypeError**.

**Error:** `Uncaught TypeError: Cannot read property 'fullName' of undefined`

**Explanation: Automatic Semicolon Insertion (ASI)**

The reason for the error is a feature in JavaScript called **Automatic Semicolon Insertion (ASI)**.

When the JavaScript parser sees a `return` statement on a line by itself, it automatically inserts a semicolon right after it, like this:

```javascript
function sayHello(){
  var name = "Hi John";
  return; // ← Semicolon automatically inserted here!
  {
    fullName: name
  }
}
```

**What actually happens:**
1. The function returns `undefined` (due to the semicolon after `return`)
2. The object `{ fullName: name }` becomes unreachable dead code
3. `sayHello()` returns `undefined`
4. Trying to access `undefined.fullName` throws a TypeError

**How to fix it:**
```javascript
// Option 1: Put the opening brace on the same line
function sayHello(){
  var name = "Hi John";
  return {
    fullName: name
  }
}

// Option 2: Use parentheses (less common)
function sayHello(){
  var name = "Hi John";
  return (
  {
    fullName: name
  }
  )
}
```

**Key Takeaway:** Always put the opening brace `{` on the same line as the `return` statement to avoid ASI issues.

**Other ASI Gotchas:**
```javascript
// This also gets a semicolon inserted:
var a = 1
var b = 2
// Becomes: var a = 1; var b = 2;

// But this doesn't (due to the operator):
var c = 1
+ 2
// Stays as: var c = 1 + 2;
```

</details>

---

## Q2: Variable Hoisting in IIFE

What is the output of the following code? Explain the behavior.

```javascript
var salary = "1000$";

(function () {
  console.log("Original salary was " + salary);
  
  var salary = "5000$";
  
  console.log("My New Salary " + salary);
})();
```

<details>
<summary><span style="color: #2563eb; font-weight: bold;">Answer</span></summary>

**Output:**
```
Original salary was undefined
My New Salary 5000$
```

**Explanation: Variable Hoisting**

This is a classic example of **variable hoisting** in JavaScript. Here's what actually happens:

1. **Hoisting Behavior:** The `var salary` declaration inside the IIFE is hoisted to the top of the function scope
2. **Shadowing:** The local `salary` variable shadows the global `salary` variable
3. **Initialization:** Only the declaration is hoisted, not the initialization

**What the code actually looks like after hoisting:**
```javascript
var salary = "1000$";

(function () {
  var salary; // Hoisted declaration (undefined)
  
  console.log("Original salary was " + salary); // undefined
  
  salary = "5000$"; // Assignment happens here
  
  console.log("My New Salary " + salary); // "5000$"
})();
```

**Step-by-step execution:**
1. Global `salary` is set to `"1000$"`
2. IIFE starts executing
3. Local `salary` is hoisted and initialized to `undefined`
4. First `console.log` prints `undefined` (not the global value)
5. Local `salary` is assigned `"5000$"`
6. Second `console.log` prints `"5000$"`

**Key Concepts:**
- **Hoisting:** `var` declarations are moved to the top of their scope
- **Variable Shadowing:** Local variables hide global variables with the same name
- **Temporal Dead Zone:** The variable exists but is `undefined` until assignment

**How to avoid this confusion:**
```javascript
// Use let/const (block-scoped, no hoisting)
let salary = "1000$";

(function () {
  console.log("Original salary was " + salary); // "1000$"
  
  let newSalary = "5000$"; // Different variable name
  
  console.log("My New Salary " + newSalary); // "5000$"
})();
```

**Interview Tip:** This question tests understanding of JavaScript's hoisting mechanism and function scope behavior.

</details>

---

## Q3: Array Sort Without Compare Function

What is the output of the following code? Explain why.

```javascript
var arrayNumb = [2, 8, 15, 16, 23, 42];
arrayNumb.sort();
console.log(arrayNumb);
```

<details>
<summary><span style="color: #2563eb; font-weight: bold;">Answer</span></summary>

**Output:**
```
[15, 16, 2, 23, 42, 8]
```

**Explanation: String Comparison in Default Sort**

The default `sort()` method in JavaScript **converts elements to strings** and then compares them lexicographically (alphabetically), not numerically.

**How the sorting actually works:**
```javascript
// Numbers are converted to strings first:
"2", "8", "15", "16", "23", "42"

// Then sorted alphabetically:
"15" comes before "16" ✓
"16" comes before "2" ✓ (because "1" < "2")
"2" comes before "23" ✓ (because "2" = "2", then "" < "3")
"23" comes before "42" ✓
"42" comes before "8" ✓ (because "4" < "8")
"8" comes last
```

**String comparison rules:**
- `"15"` < `"2"` because `"1"` < `"2"` (character-by-character comparison)
- `"8"` > `"42"` because `"8"` > `"4"`

**How to fix it for numerical sorting:**
```javascript
// Ascending order
var arrayNumb = [2, 8, 15, 16, 23, 42];
arrayNumb.sort((a, b) => a - b);
console.log(arrayNumb); // [2, 8, 15, 16, 23, 42]

// Descending order
arrayNumb.sort((a, b) => b - a);
console.log(arrayNumb); // [42, 23, 16, 15, 8, 2]
```

**Key Takeaway:** Always use a compare function with `sort()` when dealing with numbers to avoid unexpected string-based sorting behavior.

**Interview Tip:** This is a classic JavaScript gotcha that catches many developers who assume `sort()` works numerically by default.

</details>

---

## Q4: Array splice() Method Behavior

What is the output of the following code? Explain how `splice()` works.

```javascript
(function(){
	var list = ['foo','bar','john'];
	console.log(list.splice(1));
	console.log(list.splice(1,2));
	console.log(list);
})();
```

<details>
<summary><span style="color: #2563eb; font-weight: bold;">Answer</span></summary>

**Output:**
```
['bar', 'john']
[]
['foo']
```

**Explanation: Array splice() Method**

The `splice()` method **modifies the original array** by removing/adding elements and **returns an array of removed elements**.

**Step-by-step execution:**

**Initial state:**
```javascript
list = ['foo', 'bar', 'john']
```

**1. First splice: `list.splice(1)`**
- Syntax: `array.splice(start, deleteCount)`
- `splice(1)` means: start at index 1, delete all remaining elements
- Removes: `['bar', 'john']` (from index 1 to end)
- Returns: `['bar', 'john']`
- Array becomes: `['foo']`

**2. Second splice: `list.splice(1,2)`**
- `splice(1, 2)` means: start at index 1, delete 2 elements
- But array now only has 1 element: `['foo']`
- Index 1 doesn't exist, so nothing is removed
- Returns: `[]` (empty array)
- Array remains: `['foo']`

**3. Final console.log(list)**
- Prints the current state: `['foo']`

**Key Points about splice():**
```javascript
// splice(start, deleteCount, item1, item2, ...)
// - start: index to start changing the array
// - deleteCount: number of elements to remove
// - item1, item2...: elements to add (optional)

var arr = [1, 2, 3, 4, 5];
arr.splice(2, 1, 'a', 'b'); // Remove 1 element at index 2, add 'a' and 'b'
// arr becomes [1, 2, 'a', 'b', 4, 5]
```

**splice() vs slice():**
- **splice()**: Modifies original array, returns removed elements
- **slice()**: Doesn't modify original, returns a new array copy

**Interview Tip:** Remember that `splice()` mutates the original array, which is why subsequent operations work on the modified array.

</details>

---

## Q5: Object Equality Comparison

What is the output of the following code? Explain the difference between `==` and `===` for objects.

```javascript
(function() {
	var objA = {
		foo: 'foo',
		bar: 'bar'
	};
	var objB = {
		foo: 'foo',
		bar: 'bar'
	};
	console.log(objA == objB);
	console.log(objA === objB);
}());
```

<details>
<summary><span style="color: #2563eb; font-weight: bold;">Answer</span></summary>

**Output:**
```
false
false
```

**Explanation: Object Reference Comparison**

Both `==` and `===` return `false` because **objects are compared by reference, not by value** in JavaScript.

**Why both comparisons are false:**

1. **Different Objects:** `objA` and `objB` are two separate objects in memory
2. **Reference Comparison:** Both `==` and `===` compare object references (memory addresses)
3. **Same Content ≠ Same Reference:** Even though they have identical properties and values, they are different objects

**Memory Representation:**
```javascript
// Memory addresses (conceptual)
objA -> Memory Location #001: { foo: 'foo', bar: 'bar' }
objB -> Memory Location #002: { foo: 'foo', bar: 'bar' }

// Comparison checks if #001 === #002 (which is false)
```

**When object comparison would be true:**
```javascript
var objA = { foo: 'foo', bar: 'bar' };
var objB = objA; // objB points to the same object as objA

console.log(objA == objB);  // true
console.log(objA === objB); // true
```

**How to compare object contents:**
```javascript
// Method 1: JSON stringify (simple objects only)
console.log(JSON.stringify(objA) === JSON.stringify(objB)); // true

// Method 2: Manual property comparison
function isEqual(obj1, obj2) {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    
    if (keys1.length !== keys2.length) return false;
    
    for (let key of keys1) {
        if (obj1[key] !== obj2[key]) return false;
    }
    return true;
}

// Method 3: Using Lodash library
// _.isEqual(objA, objB) // true
```

**Key Differences for Objects:**
- **`==` (loose equality):** For objects, same as `===` (no type coercion for objects)
- **`===` (strict equality):** Compares references directly

**Primitive vs Object Comparison:**
```javascript
// Primitives - compared by value
var a = 5, b = 5;
console.log(a === b); // true

// Objects - compared by reference
var objA = {}, objB = {};
console.log(objA === objB); // false
```

**Interview Tip:** This question tests understanding of reference vs value comparison, which is fundamental in JavaScript object handling.

</details>

---

## Q6: Promises vs Async/Await - Syntax and Use Cases

Explain the difference between Promises and async/await. When would you use each? What is the `typeof` a Promise?

<details>
<summary><span style="color: #2563eb; font-weight: bold;">Answer</span></summary>

**typeof Promise Output:**
```javascript
const promise = new Promise(resolve => resolve('hello'));
console.log(typeof promise); // "object"

// All promises are objects
console.log(promise instanceof Promise); // true
console.log(promise instanceof Object); // true
```

---

### 🔶 **Promises** - Traditional Approach

**Syntax:** Uses `.then()`, `.catch()`, and `.finally()` chaining

```javascript
// Creating a Promise
function fetchUserData(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (id > 0) {
                resolve({ id, name: `User ${id}`, email: `user${id}@example.com` });
            } else {
                reject(new Error('Invalid user ID'));
            }
        }, 1000);
    });
}

// Using Promises with .then()
fetchUserData(1)
    .then(user => {
        console.log('User fetched:', user);
        return fetchUserDetails(user.id); // Return another promise
    })
    .then(details => {
        console.log('User details:', details);
        return updateUserProfile(details);
    })
    .then(result => {
        console.log('Profile updated:', result);
    })
    .catch(error => {
        console.error('Error:', error.message);
    })
    .finally(() => {
        console.log('Operation completed');
    });
```

---

### 🔶 **Async/Await** - Modern Approach

**Syntax:** Uses `async` functions with `await` keyword

```javascript
// Same functionality using async/await
async function handleUser(id) {
    try {
        const user = await fetchUserData(id);
        console.log('User fetched:', user);
        
        const details = await fetchUserDetails(user.id);
        console.log('User details:', details);
        
        const result = await updateUserProfile(details);
        console.log('Profile updated:', result);
        
    } catch (error) {
        console.error('Error:', error.message);
    } finally {
        console.log('Operation completed');
    }
}

// Calling async function
handleUser(1);
```

---

### 🔶 **Key Differences Comparison**

| Feature             | **Promises (.then)**                            | **Async/Await**                  |
| ------------------- | ----------------------------------------------- | -------------------------------- |
| **Syntax**          | Functional, chaining                            | Imperative, linear               |
| **Readability**     | Can become nested/complex                       | More readable, like sync code    |
| **Error Handling**  | `.catch()` at end of chain                      | `try/catch` blocks               |
| **Debugging**       | Harder to debug chains                          | Easier to debug with breakpoints |
| **Performance**     | Same (async/await uses promises under the hood) | Same                             |
| **Browser Support** | ES6+ (older support)                            | ES2017+ (newer)                  |

---

### 🔶 **When to Use Each**

**Use Promises (.then) when:**
- **Simple operations** with minimal chaining
- **Parallel operations** with `Promise.all()`, `Promise.race()`
- **Library/framework compatibility** requires promise chains
- **Functional programming style** is preferred

```javascript
// Good for simple operations
fetchData()
    .then(data => processData(data))
    .then(result => console.log(result));

// Excellent for parallel operations
Promise.all([
    fetchUser(1),
    fetchUser(2),
    fetchUser(3)
]).then(users => {
    console.log('All users:', users);
});
```

**Use Async/Await when:**
- **Complex sequential operations** with multiple steps
- **Better error handling** with try/catch is needed
- **Cleaner, more readable code** is important
- **Debugging** complex async flows

```javascript
// Better for complex sequential operations
async function setupUserDashboard(userId) {
    try {
        const user = await fetchUser(userId);
        const permissions = await fetchPermissions(user.role);
        const preferences = await fetchPreferences(userId);
        const dashboardData = await buildDashboard(user, permissions, preferences);
        
        return dashboardData;
    } catch (error) {
        console.error('Dashboard setup failed:', error);
        throw error;
    }
}
```

---

### 🔶 **Advanced Examples**

**Parallel vs Sequential Execution:**

```javascript
// Sequential (slower) - waits for each one
async function sequential() {
    const user1 = await fetchUser(1); // Wait 1 second
    const user2 = await fetchUser(2); // Wait another 1 second
    const user3 = await fetchUser(3); // Wait another 1 second
    // Total: ~3 seconds
    return [user1, user2, user3];
}

// Parallel (faster) - all run simultaneously
async function parallel() {
    const [user1, user2, user3] = await Promise.all([
        fetchUser(1),
        fetchUser(2),
        fetchUser(3)
    ]);
    // Total: ~1 second (all run together)
    return [user1, user2, user3];
}
```

**Error Handling Comparison:**

```javascript
// Promise chain error handling
fetchUser(1)
    .then(user => fetchProfile(user.id))
    .then(profile => updateProfile(profile))
    .catch(error => {
        if (error.code === 'USER_NOT_FOUND') {
            console.log('User not found');
        } else if (error.code === 'PROFILE_ERROR') {
            console.log('Profile error');
        }
    });

// Async/await with granular error handling
async function handleUserProfile(id) {
    try {
        const user = await fetchUser(id);
        
        try {
            const profile = await fetchProfile(user.id);
            await updateProfile(profile);
        } catch (profileError) {
            console.log('Profile operation failed:', profileError);
            // Handle profile errors specifically
        }
        
    } catch (userError) {
        console.log('User fetch failed:', userError);
        // Handle user errors specifically
    }
}
```

---

### 🎯 **Key Takeaways:**

1. **typeof Promise is "object"** - Promises are objects with methods
2. **Async/await is syntactic sugar** over Promises (same performance)
3. **Use async/await for complex, sequential operations**
4. **Use Promises for simple chains and parallel operations**
5. **Both can be mixed** - async functions return Promises
6. **Error handling is cleaner** with async/await using try/catch

**Interview Tip:** Remember that async/await doesn't replace Promises entirely - they work together. Async functions always return Promises, and you can use `.then()` on async function calls.

</details>

---

## Q7: Function with State and Methods - Closure Pattern

Complete the following function so that it maintains internal state and has increment/decrement methods:

```javascript
function test(){
    let a = 20;

    return 
}

test.increment(); // 21
test.decrement(); // 20
test.increment(); // 21
test.increment(); // 22
```

<details>
<summary><span style="color: #2563eb; font-weight: bold;">Answer</span></summary>

**Complete Solution:**

```javascript
function test() {
    let a = 20;
    
    return {
        increment: function() {
            a++;
            console.log(a);
            return a;
        },
        decrement: function() {
            a--;
            console.log(a);
            return a;
        },
        getValue: function() {
            return a;
        }
    };
}

// Usage
const counter = test();
counter.increment(); // 21
counter.decrement(); // 20
counter.increment(); // 21
counter.increment(); // 22

console.log(counter.getValue()); // 22
```

**Alternative Solution - Function Factory Pattern:**

```javascript
function test() {
    let a = 20;
    
    function increment() {
        a++;
        console.log(a);
        return a;
    }
    
    function decrement() {
        a--;
        console.log(a);
        return a;
    }
    
    function getValue() {
        return a;
    }
    
    // Return object with methods
    return {
        increment,
        decrement,
        getValue
    };
}

// Each call to test() creates a new independent counter
const counter1 = test();
const counter2 = test();

counter1.increment(); // 21
counter2.increment(); // 21 (independent state)
counter1.increment(); // 22
counter2.decrement(); // 20
```

**Advanced Solution - Single Instance with Static Methods:**

```javascript
function test() {
    if (test.instance) {
        return test.instance;
    }
    
    let a = 20;
    
    const instance = {
        increment: function() {
            a++;
            console.log(a);
            return a;
        },
        decrement: function() {
            a--;
            console.log(a);
            return a;
        },
        getValue: function() {
            return a;
        }
    };
    
    test.instance = instance;
    return instance;
}

// Usage - singleton pattern
const counter1 = test();
const counter2 = test(); // Same instance

counter1.increment(); // 21
counter2.increment(); // 22 (same state)
```

**Using ES6 Class Pattern:**

```javascript
function test() {
    class Counter {
        constructor() {
            this.a = 20;
        }
        
        increment() {
            this.a++;
            console.log(this.a);
            return this.a;
        }
        
        decrement() {
            this.a--;
            console.log(this.a);
            return this.a;
        }
        
        getValue() {
            return this.a;
        }
    }
    
    return new Counter();
}

// Usage
const counter = test();
counter.increment(); // 21
counter.decrement(); // 20
```

**Module Pattern with IIFE:**

```javascript
const test = (function() {
    let a = 20;
    
    return {
        increment: function() {
            a++;
            console.log(a);
            return a;
        },
        decrement: function() {
            a--;
            console.log(a);
            return a;
        },
        getValue: function() {
            return a;
        }
    };
})();

// Usage - single instance
test.increment(); // 21
test.decrement(); // 20
test.increment(); // 21
```

**Key Concepts Demonstrated:**

1. **Closure:** The inner functions have access to the `a` variable even after the outer function returns
2. **Encapsulation:** The variable `a` is private and can only be accessed through the provided methods
3. **State Persistence:** The value of `a` persists between method calls
4. **Factory Pattern:** The function creates and returns objects with methods

**Interview Points:**
- Shows understanding of closures and lexical scoping
- Demonstrates knowledge of JavaScript's function scope
- Illustrates private variable patterns in JavaScript
- Can be extended to discuss module patterns and encapsulation

</details>

---

## Q8: Async Functions Without Await - Promise Timing

**Part A:** If you have an `async` function, is it necessary to use the `await` keyword when working with promises?

**Part B:** If you have 3 promises that each take 2 seconds to resolve, how much time will elapse for each approach?

```javascript
// Promise that takes 2 seconds to resolve
function delay(ms, value) {
    return new Promise(resolve => {
        setTimeout(() => resolve(value), ms);
    });
}

// Approach 1: async function WITHOUT await
async function withoutAwait() {
    console.time('withoutAwait');
    
    const promise1 = delay(2000, 'Result 1');
    const promise2 = delay(2000, 'Result 2');
    const promise3 = delay(2000, 'Result 3');
    
    console.timeEnd('withoutAwait');
    return [promise1, promise2, promise3];
}

// Approach 2: async function WITH await (sequential)
async function withAwaitSequential() {
    console.time('withAwaitSequential');
    
    const result1 = await delay(2000, 'Result 1');
    const result2 = await delay(2000, 'Result 2');
    const result3 = await delay(2000, 'Result 3');
    
    console.timeEnd('withAwaitSequential');
    return [result1, result2, result3];
}

// Approach 3: async function WITH await (parallel)
async function withAwaitParallel() {
    console.time('withAwaitParallel');
    
    const [result1, result2, result3] = await Promise.all([
        delay(2000, 'Result 1'),
        delay(2000, 'Result 2'),
        delay(2000, 'Result 3')
    ]);
    
    console.timeEnd('withAwaitParallel');
    return [result1, result2, result3];
}
```

<details>
<summary><span style="color: #2563eb; font-weight: bold;">Answer</span></summary>

### **Part A: Is `await` necessary in async functions?**

**No, `await` is NOT necessary** when working with promises in async functions. However, the behavior changes significantly:

**Without `await`:**
- Promises are created and start executing immediately
- Function returns immediately without waiting
- You get Promise objects, not resolved values

**With `await`:**
- Function waits for each promise to resolve
- You get the actual resolved values
- Execution is paused until promise completes

---

### **Part B: Timing Analysis**

**Approach 1: Without `await` - ~0ms**
```javascript
async function withoutAwait() {
    console.time('withoutAwait');
    
    // All promises start immediately but we don't wait
    const promise1 = delay(2000, 'Result 1'); // Starts immediately
    const promise2 = delay(2000, 'Result 2'); // Starts immediately  
    const promise3 = delay(2000, 'Result 3'); // Starts immediately
    
    console.timeEnd('withoutAwait'); // ~0ms - function returns immediately
    return [promise1, promise2, promise3]; // Returns array of pending promises
}

// Usage
withoutAwait().then(promises => {
    // promises is an array of Promise objects, not resolved values
    console.log(promises); // [Promise, Promise, Promise]
    
    // To get actual values, you need to await or use Promise.all
    return Promise.all(promises);
}).then(values => {
    console.log(values); // ['Result 1', 'Result 2', 'Result 3'] after ~2 seconds
});
```

**Time Elapsed: ~0 milliseconds** (function returns immediately)

---

**Approach 2: With `await` Sequential - ~6 seconds**
```javascript
async function withAwaitSequential() {
    console.time('withAwaitSequential');
    
    const result1 = await delay(2000, 'Result 1'); // Wait 2s - Total: 2s
    const result2 = await delay(2000, 'Result 2'); // Wait 2s - Total: 4s  
    const result3 = await delay(2000, 'Result 3'); // Wait 2s - Total: 6s
    
    console.timeEnd('withAwaitSequential'); // ~6000ms
    return [result1, result2, result3]; // Returns resolved values
}
```

**Time Elapsed: ~6 seconds** (2s + 2s + 2s sequential execution)

---

**Approach 3: With `await` Parallel - ~2 seconds**
```javascript
async function withAwaitParallel() {
    console.time('withAwaitParallel');
    
    // All promises start simultaneously
    const [result1, result2, result3] = await Promise.all([
        delay(2000, 'Result 1'), // All start at same time
        delay(2000, 'Result 2'), // All start at same time
        delay(2000, 'Result 3')  // All start at same time
    ]);
    
    console.timeEnd('withAwaitParallel'); // ~2000ms
    return [result1, result2, result3]; // Returns resolved values
}
```

**Time Elapsed: ~2 seconds** (all promises run in parallel)

---

### **Detailed Timing Breakdown**

| Approach                    | Time Elapsed | What You Get             | Execution Pattern                                |
| --------------------------- | ------------ | ------------------------ | ------------------------------------------------ |
| **Without await**           | ~0ms         | Array of Promise objects | All promises start, function returns immediately |
| **With await (sequential)** | ~6 seconds   | Array of resolved values | Wait for each promise one by one                 |
| **With await (parallel)**   | ~2 seconds   | Array of resolved values | All promises run simultaneously                  |

---

### **Complete Working Example with Timing**

```javascript
function delay(ms, value) {
    console.log(`Starting promise for: ${value}`);
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(`Resolved: ${value} after ${ms}ms`);
            resolve(value);
        }, ms);
    });
}

// Test all approaches
async function testAllApproaches() {
    console.log('=== Testing Without Await ===');
    const start1 = Date.now();
    const promises = await withoutAwait();
    console.log(`Function returned in: ${Date.now() - start1}ms`);
    console.log('Promises:', promises);
    
    // Wait for actual resolution
    const values1 = await Promise.all(promises);
    console.log(`Actual resolution time: ${Date.now() - start1}ms`);
    console.log('Values:', values1);
    
    console.log('\n=== Testing Sequential Await ===');
    const start2 = Date.now();
    const values2 = await withAwaitSequential();
    console.log(`Total time: ${Date.now() - start2}ms`);
    console.log('Values:', values2);
    
    console.log('\n=== Testing Parallel Await ===');
    const start3 = Date.now();
    const values3 = await withAwaitParallel();
    console.log(`Total time: ${Date.now() - start3}ms`);
    console.log('Values:', values3);
}

// Run the test
testAllApproaches();
```

**Expected Console Output:**
```
=== Testing Without Await ===
Starting promise for: Result 1
Starting promise for: Result 2
Starting promise for: Result 3
withoutAwait: 0.123ms
Function returned in: 1ms
Promises: [Promise, Promise, Promise]
Resolved: Result 1 after 2000ms
Resolved: Result 2 after 2000ms  
Resolved: Result 3 after 2000ms
Actual resolution time: 2001ms
Values: ['Result 1', 'Result 2', 'Result 3']

=== Testing Sequential Await ===
Starting promise for: Result 1
Resolved: Result 1 after 2000ms
Starting promise for: Result 2
Resolved: Result 2 after 2000ms
Starting promise for: Result 3
Resolved: Result 3 after 2000ms
withAwaitSequential: 6003.456ms
Total time: 6004ms
Values: ['Result 1', 'Result 2', 'Result 3']

=== Testing Parallel Await ===
Starting promise for: Result 1
Starting promise for: Result 2
Starting promise for: Result 3
Resolved: Result 1 after 2000ms
Resolved: Result 2 after 2000ms
Resolved: Result 3 after 2000ms
withAwaitParallel: 2001.789ms
Total time: 2002ms
Values: ['Result 1', 'Result 2', 'Result 3']
```

---

### **Key Takeaways:**

1. **`await` is optional** in async functions, but changes behavior dramatically
2. **Without `await`**: Function returns immediately (~0ms) but you get Promise objects
3. **With `await` sequential**: Each promise waits for the previous (~6s total)
4. **With `await` parallel**: All promises run simultaneously (~2s total)
5. **Choose based on needs**: Use parallel when promises are independent, sequential when they depend on each other

**Interview Tip:** Understanding the timing difference between sequential and parallel execution is crucial for performance optimization in real applications.

</details>



----

## JS Coding Ques: Retrieve and Sort Numbers from a Nested Object

**Problem Statement:**
Given a deeply nested object, extract all numerical values and return them in an array sorted in descending order. The function should be able to handle any level of nesting.

**Solution:**
You can solve this by recursively traversing the object. If a value is an object, the function calls itself on that value. If the value is a number, it's added to a list. Finally, the list is sorted in descending order.

```javascript
const obj = {
  a: {
    b: {
      c: 48
    },
    d: 11
  },
  e: {
    f: 100
  },
  g: 20
};

function getNumbersAndSortDescending(data) {
  const numbers = [];

  function findNumbers(item) {
    for (const key in item) {
      if (typeof item[key] === 'object' && item[key] !== null) {
        findNumbers(item[key]);
      } else if (typeof item[key] === 'number') {
        numbers.push(item[key]);
      }
    }
  }

  findNumbers(data);
  return numbers.sort((a, b) => b - a); // Sort in descending order
}

console.log(getNumbersAndSortDescending(obj));
// Expected output: [100, 48, 20, 11]
```

-----



## JS Coding Ques: Extracting All Values of a Key 'C' from a Nested Object
**Problem Statement:**
Given a deeply nested object, find all values associated with the key 'C' and return them in an array. The code should be robust enough to handle additional levels of nesting.

**Solution:**
The most efficient way to solve this is by using a recursive function that traverses the object. The function checks if the current property is an object. If it is, it calls itself. If the property's key is 'c', its value is added to an array.

```javascript
let value = {
  a: { b: { c: 10 }, d: { f: 20, c: 15 } },
  j: { l: { c: 30 } },
  k: { z: { c: 40, x: 44 }, h: { f: 10 } }
};

function findAllCValues(obj) {
  const result = [];
  
  function findValues(currentObj) {
    if (typeof currentObj !== 'object' || currentObj === null) {
      return;
    }

    for (const key in currentObj) {
      if (key === 'c') {
        result.push(currentObj[key]);
      } else {
        findValues(currentObj[key]);
      }
    }
  }

  findValues(obj);
  return result;
}

console.log(findAllCValues(value));
// Output: [10, 15, 30, 40]
```

-----


## How to reverse a string in JS(all possible solutions)

### 1\. Using Built-in Methods

This is the most common and idiomatic approach. It’s clean and easy to read.

  * **`split('')`**: Converts the string into an array of individual characters.
  * **`reverse()`**: Reverses the order of the elements in the new array.
  * **`join('')`**: Joins the characters back together into a single string.

<!-- end list -->

```javascript
function reverseStringBuiltIn(str) {
  return str.split('').reverse().join('');
}

console.log(reverseStringBuiltIn("hello")); // Output: "olleh"
```

**Note:** This method may not work correctly for complex Unicode characters (e.g., emojis) that are composed of multiple code points.

-----

### 2\. Using a `for` Loop

This method is more performant as it avoids creating an intermediate array. It iterates through the string backward and builds a new string.

```javascript
function reverseStringLoop(str) {
  let newString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  return newString;
}

console.log(reverseStringLoop("world")); // Output: "dlrow"
```

-----

### 3\. Using the Spread Operator and `for...of`

This is a modern and robust way to handle strings, especially those containing Unicode characters. The spread operator (`...str`) correctly breaks the string into an array of characters based on their Unicode code points, not just byte-by-byte.

```javascript
function reverseStringModern(str) {
  let newString = '';
  // The spread operator correctly handles Unicode characters
  for (const char of [...str]) {
    newString = char + newString;
  }
  return newString;
}

console.log(reverseStringModern("hello 👋")); // Output: "👋 olleh"
```

-----

### 4\. Using Recursion

This method is more for demonstrating a recursive programming pattern than for practical use. It’s elegant but can be less efficient due to function call overhead.

  * The function returns the first character concatenated with the result of calling itself on the rest of the string.
  * The base case for the recursion is an empty string, which returns itself.

<!-- end list -->

```javascript
function reverseStringRecursive(str) {
  if (str === "") {
    return "";
  } else {
    return reverseStringRecursive(str.substr(1)) + str.charAt(0);
  }
}

console.log(reverseStringRecursive("javascript")); // Output: "tpircsavaj"
```
-----
