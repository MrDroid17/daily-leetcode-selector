# HTML and CSS Interview Questions & Answers

- [HTML and CSS Interview Questions \& Answers](#html-and-css-interview-questions--answers)
- [HTML](#html)
  - [Basic Concepts](#basic-concepts)
    - [1. Are HTML Tags and Elements the Same Thing?](#1-are-html-tags-and-elements-the-same-thing)
    - [2. What are Tags and Attributes in HTML?](#2-what-are-tags-and-attributes-in-html)
    - [3. What are Void Elements in HTML?](#3-what-are-void-elements-in-html)
    - [4. What is the Advantage of Collapsing White Space?](#4-what-is-the-advantage-of-collapsing-white-space)
    - [5. What are HTML Entities?](#5-what-are-html-entities)
    - [6. What are Different Types of Lists in HTML?](#6-what-are-different-types-of-lists-in-html)
  - [Attributes and Structure](#attributes-and-structure)
    - [7. What is the ‘class’ Attribute in HTML?](#7-what-is-the-class-attribute-in-html)
    - [8. Difference Between ‘id’ and ‘class’?](#8-difference-between-id-and-class)
    - [9. Define Multipart Form Data?](#9-define-multipart-form-data)
    - [10. Describe HTML Layout Structure](#10-describe-html-layout-structure)
    - [11. How to Optimize Website Asset Loading?](#11-how-to-optimize-website-asset-loading)
    - [12. Formatting Tags](#12-formatting-tags)
  - [Doctypes, Metadata, and Structure](#doctypes-metadata-and-structure)
    - [13. Kinds of Doctypes](#13-kinds-of-doctypes)
    - [14. Difference: `<strong>`, `<b>`, `<em>`, `<i>`](#14-difference-strong-b-em-i)
    - [15. `<head>` vs `<body>`](#15-head-vs-body)
    - [16. Can We Display a Webpage Inside Another?](#16-can-we-display-a-webpage-inside-another)
    - [17. Cell Padding vs Cell Spacing in Tables](#17-cell-padding-vs-cell-spacing-in-tables)
    - [18. How do you club rows or columns in a table?](#18-how-do-you-club-rows-or-columns-in-a-table)
    - [19. Can We Change an Inline Element to a Block Element?](#19-can-we-change-an-inline-element-to-a-block-element)
  - [CSS in HTML](#css-in-html)
    - [20. What are the ways to apply CSS styles to an HTML element?](#20-what-are-the-ways-to-apply-css-styles-to-an-html-element)
    - [21. `display: none` vs `visibility: hidden`](#21-display-none-vs-visibility-hidden)
  - [HTML \& JavaScript](#html--javascript)
    - [22. `<link>` vs `<a>`](#22-link-vs-a)
    - [23. How do you include JavaScript code in HTML?](#23-how-do-you-include-javascript-code-in-html)
    - [24. When is it best to use scripts in `<head>` vs `<body>`?](#24-when-is-it-best-to-use-scripts-in-head-vs-body)
  - [Forms and Events](#forms-and-events)
    - [25. How do you create an HTML Form?](#25-how-do-you-create-an-html-form)
    - [26. How do you handle events in HTML?](#26-how-do-you-handle-events-in-html)
  - [HTML5 Features](#html5-features)
    - [27. What are the advantages of HTML5?](#27-what-are-the-advantages-of-html5)
    - [28. How do you include Audio and Video?](#28-how-do-you-include-audio-and-video)
    - [29. Inline vs Block Elements](#29-inline-vs-block-elements)
    - [30. `<figure>` vs `<img>`](#30-figure-vs-img)
    - [31. How do you specify metadata?](#31-how-do-you-specify-metadata)
    - [32. `<datalist>` vs `<select>`](#32-datalist-vs-select)
    - [33. What is an Image Map?](#33-what-is-an-image-map)
    - [34. What are Semantic Elements?](#34-what-are-semantic-elements)
    - [35. How do you show tabular data?](#35-how-do-you-show-tabular-data)
    - [36. `<meter>` vs `<progress>`](#36-meter-vs-progress)
    - [37. HTML5 Drag and Drop](#37-html5-drag-and-drop)
    - [38. SVG vs Canvas](#38-svg-vs-canvas)
  - [Storage, APIs, and Web Components](#storage-apis-and-web-components)
    - [39. What is Web Storage? (`localStorage` vs `sessionStorage`)](#39-what-is-web-storage-localstorage-vs-sessionstorage)
    - [40. What is Microdata?](#40-what-is-microdata)
    - [41. What is the `<output>` tag?](#41-what-is-the-output-tag)
    - [42. What are Server-Sent Events?](#42-what-are-server-sent-events)
    - [43. What are Web Workers?](#43-what-are-web-workers)
    - [44. What is the Geolocation API?](#44-what-is-the-geolocation-api)
    - [45. What are Web Components?](#45-what-are-web-components)
- [CSS](#css)
  - [CSS Fundamentals](#css-fundamentals)
    - [46. What is CSS and the Box Model?](#46-what-is-css-and-the-box-model)
    - [47. What are the advantages of CSS?](#47-what-are-the-advantages-of-css)
    - [48. What are the limitations of CSS?](#48-what-are-the-limitations-of-css)
    - [49. How do you include CSS in a webpage?](#49-how-do-you-include-css-in-a-webpage)
  - [Selectors](#selectors)
    - [50. What are the types of CSS Selectors?](#50-what-are-the-types-of-css-selectors)
  - [Preprocessors \& Resets](#preprocessors--resets)
    - [51. What is a CSS Preprocessor?](#51-what-is-a-css-preprocessor)
    - [52. What are Viewport Units (`vw` \& `vh`)?](#52-what-are-viewport-units-vw--vh)
    - [53. Reset vs Normalize CSS](#53-reset-vs-normalize-css)
  - [Block, Inline, and Box Sizing](#block-inline-and-box-sizing)
    - [54. How do you test a webpage in different browsers?](#54-how-do-you-test-a-webpage-in-different-browsers)
    - [55. What is a Pseudo-class vs a Pseudo-element?](#55-what-is-a-pseudo-class-vs-a-pseudo-element)
    - [56. What are the different CSS Units?](#56-what-are-the-different-css-units)
    - [57. Does margin-top or margin-bottom affect inline elements?](#57-does-margin-top-or-margin-bottom-affect-inline-elements)
  - [Advanced CSS Concepts](#advanced-css-concepts)
    - [58. What is the CSS `position` Property?](#58-what-is-the-css-position-property)
    - [59. What is a Stacking Context and how does `z-index` work?](#59-what-is-a-stacking-context-and-how-does-z-index-work)
    - [60. What is DOM Reflow?](#60-what-is-dom-reflow)
    - [61. What are the `box-sizing` properties?](#61-what-are-the-box-sizing-properties)
    - [62. How do you center a `<div>` inside another `<div>`?](#62-how-do-you-center-a-div-inside-another-div)
    - [63. What are CSS Media Properties (Media Queries)?](#63-what-are-css-media-properties-media-queries)
      - [Media Types](#media-types)
      - [Common Media Features](#common-media-features)
      - [Logical Operators](#logical-operators)
      - [Example: Responsive Breakpoints](#example-responsive-breakpoints)
    - [64. How do you hide elements with CSS?](#64-how-do-you-hide-elements-with-css)
    - [65. What does `:root` select?](#65-what-does-root-select)
    - [66. What is Accessibility (a11y)?](#66-what-is-accessibility-a11y)
    - [67. How do you restore the default value of a CSS property?](#67-how-do-you-restore-the-default-value-of-a-css-property)
    - [68. CSS Grid vs. Flexbox](#68-css-grid-vs-flexbox)
    - [69. How does `calc()` work?](#69-how-does-calc-work)
    - [70. What are CSS Custom Properties (Variables)?](#70-what-are-css-custom-properties-variables)
    - [71. CSS Variables vs. Preprocessor Variables](#71-css-variables-vs-preprocessor-variables)
    - [72. What does `* { box-sizing: border-box; }` do?](#72-what-does---box-sizing-border-box--do)
    - [73. What does `!important` mean?](#73-what-does-important-mean)
    - [74. What is CSS Specificity?](#74-what-is-css-specificity)
    - [75. What is Progressive Rendering?](#75-what-is-progressive-rendering)
    - [76. `transform: translate()` vs. Absolute Positioning](#76-transform-translate-vs-absolute-positioning)
    - [77. Does one stylesheet block another from downloading?](#77-does-one-stylesheet-block-another-from-downloading)
    - [78. What is Feature Detection in CSS?](#78-what-is-feature-detection-in-css)
  - [CSS Best Practices](#css-best-practices)

***

# HTML

## Basic Concepts

### 1. Are HTML Tags and Elements the Same Thing?
No. **HTML elements** are defined by a starting tag, may contain some content, and a closing tag.
Example:
```html
<h1>Heading 1</h1>
```
Here, `<h1>Heading 1</h1>` is an element, `<h1>` is a starting tag, and `</h1>` is a closing tag.

### 2. What are Tags and Attributes in HTML?
**Tags** define how content is formatted.
**Attributes** describe additional properties for these tags.
```html
<p align="center">Interview questions</p>
```
Here, `align` is an attribute.

### 3. What are Void Elements in HTML?
Void elements (also known as empty elements) do not have closing tags because they don't contain content.
Examples:
```html
<br>
<img src="image.jpg" alt="description">
<hr>
<input type="text">
```

### 4. What is the Advantage of Collapsing White Space?
Browsers collapse multiple whitespace characters (spaces, newlines, tabs) into a single space character. This allows developers to indent and format their HTML code for better readability without affecting the final rendered output.

Example:
```html
<p>
  This text has
  multiple spaces and newlines,
  but it will render as a single line.
</p>
```
**Output:**
This text has multiple spaces and newlines, but it will render as a single line.

### 5. What are HTML Entities?
Reserved characters in HTML must be replaced with character entities to be displayed correctly.
| Character | Entity Name | Entity Number |
| :-------- | :---------- | :------------ |
| `<`       | `&lt;`      | `&#60;`       |
| `>`       | `&gt;`      | `&#62;`       |
| `&`       | `&amp;`     | `&#38;`       |
| `"`       | `&quot;`    | `&#34;`       |
| `'`       | `&apos;`    | `&#39;`       |
| (space)   | `&nbsp;`    | `&#160;`      |

**Example:**
```html
<!-- To display "<h1>" as text -->
<p>&lt;h1&gt; is a tag.</p>

<!-- To display "Ben & Jerry's" -->
<p>Ben &amp; Jerry's</p>
```

### 6. What are Different Types of Lists in HTML?
- **Ordered List (`<ol>`)**: A numbered list.
- **Unordered List (`<ul>`)**: A bulleted list.
- **Definition List (`<dl>`)**: A list of terms (`<dt>`) and their definitions (`<dd>`).

**Example:**
```html
<!-- Ordered List -->
<ol>
  <li>First item</li>
  <li>Second item</li>
</ol>

<!-- Unordered List -->
<ul>
  <li>Bullet point 1</li>
  <li>Bullet point 2</li>
</ul>

<!-- Definition List -->
<dl>
  <dt>HTML</dt>
  <dd>HyperText Markup Language</dd>
  <dt>CSS</dt>
  <dd>Cascading Style Sheets</dd>
</dl>
```

***

## Attributes and Structure

### 7. What is the ‘class’ Attribute in HTML?
The `class` attribute specifies one or more class names for an element, which are used to target elements with CSS for styling or with JavaScript for manipulation.
```html
<p class="highlight important">This paragraph is highlighted and important.</p>
```

### 8. Difference Between ‘id’ and ‘class’?
- **`class`**: Can be used on multiple elements. It's primarily for applying CSS styles to a group of elements.
- **`id`**: Must be unique within the entire HTML page. It's used to target a single, specific element for CSS styling or JavaScript manipulation (e.g., `document.getElementById()`).

**Example:**
```html
<!-- 'id' is unique -->
<div id="main-header">
  <h1>Welcome</h1>
</div>

<!-- 'class' can be reused -->
<p class="highlight-text">This is an important paragraph.</p>
<span class="highlight-text">This is an important note.</span>
```

### 9. Define Multipart Form Data?
It's a value for the `enctype` attribute of a `<form>` element. `multipart/form-data` is required when a form includes file uploads (`<input type="file">`). It ensures that the form data is sent in multiple parts, with the file data included as a binary attachment.
```html
<form action="/upload" method="post" enctype="multipart/form-data">
  <input type="file" name="myFile">
  <input type="submit" value="Upload">
</form>
```

### 10. Describe HTML Layout Structure
Modern HTML5 provides semantic elements to define the different parts of a web page, which improves accessibility and SEO.

- `<header>`: Introductory content for the page (e.g., logo, site title, main navigation).
- `<nav>`: Contains major navigation links.
- `<main>`: Represents the dominant content of the `<body>`. There should only be one `<main>` element.
- `<article>`: Self-contained content that could be distributed independently (e.g., a blog post, a news story).
- `<section>`: A thematic grouping of content, typically with a heading.
- `<aside>`: Sidebar content that is related to the main content (e.g., related links, ads).
- `<footer>`: Closing content for the page or a section (e.g., copyright, contact info).

**Example:**
```html
<body>
  <header>
    <h1>My Website</h1>
    <nav>
      <a href="/">Home</a>
      <a href="/about">About</a>
    </nav>
  </header>
  
  <main>
    <article>
      <h2>Article Title</h2>
      <section>
        <h3>Introduction</h3>
        <p>This is the main content of the article.</p>
      </section>
    </article>
    
    <aside>
      <h3>Related Links</h3>
      <ul>
        <li><a href="#">Link 1</a></li>
      </ul>
    </aside>
  </main>
  
  <footer>
    <p>&copy; 2023 My Website</p>
  </footer>
</body>
```

### 11. How to Optimize Website Asset Loading?
Optimizing asset loading improves performance, reduces load times, and enhances user experience.
- **CDN Hosting:** Use a Content Delivery Network to serve static assets from servers closer to the user.
- **File Compression:** Use server-side compression like Gzip or Brotli.
- **Minification:** Remove unnecessary characters (whitespace, comments) from CSS and JS files.
- **Concatenation:** Combine multiple CSS or JS files into a single file to reduce HTTP requests (less critical with HTTP/2).
- **Lazy Loading:** Defer loading of off-screen images and videos (`loading="lazy"`).
- **Use `defer` and `async` for scripts:** Load JavaScript without blocking page rendering.

**Examples:**
```html
<!-- Lazy load an image -->
<img src="image.jpg" loading="lazy" alt="...">

<!-- Defer script execution -->
<script src="script.js" defer></script>

<!-- Load script asynchronously -->
<script src="script.js" async></script>
```

### 12. Formatting Tags
| Tag        | Effect                     | Description                                          |
| :--------- | :------------------------- | :--------------------------------------------------- |
| `<b>`      | Bold                       | Purely visual.                                       |
| `<strong>` | Strong importance (bold)   | Semantic meaning.                                    |
| `<i>`      | Italic                     | Purely visual.                                       |
| `<em>`     | Semantic emphasis (italic) | Semantic meaning.                                    |
| `<mark>`   | Highlight                  | Represents text marked or highlighted for reference. |
| `<small>`  | Smaller text               | Represents side comments or small print.             |
| `<del>`    | Strikethrough              | Represents deleted text.                             |
| `<ins>`    | Inserted text              | Represents inserted text.                            |
| `<sub>`    | Subscript                  | Renders text as a subscript.                         |
| `<sup>`    | Superscript                | Renders text as a superscript.                       |

**Example:**
```html
<p>This is <b>bold</b> and this is <strong>strong</strong>.</p>
<p>This is <mark>highlighted</mark>.</p>
<p>H<sub>2</sub>O and E=MC<sup>2</sup>.</p>
```

***

## Doctypes, Metadata, and Structure

### 13. Kinds of Doctypes
Before HTML5, doctypes were used to specify the HTML version.
- **Strict Doctype**: For clean markup, disallowing deprecated elements.
- **Transitional Doctype**: More flexible, allowing some deprecated elements.
- **Frameset Doctype**: For pages with frames.

**Note:** In HTML5, the doctype is much simpler and is only required to enable standard rendering mode: `<!DOCTYPE html>`.

### 14. Difference: `<strong>`, `<b>`, `<em>`, `<i>`
- `<b>` (Bold) and `<i>` (Italic) are purely **visual** tags. They tell the browser to style the text without implying any extra importance.
- `<strong>` and `<em>` (Emphasis) are **semantic** tags. They indicate that the enclosed text has strong importance or stress emphasis. Screen readers may use a different tone of voice for these elements.

### 15. `<head>` vs `<body>`
- `<head>`: Contains metadata about the HTML document, such as the title, character set, styles, and scripts. This information is **not displayed** on the page itself.
- `<body>`: Contains all the visible content of the web page, such as headings, paragraphs, images, and links.

### 16. Can We Display a Webpage Inside Another?
Yes, using an `<iframe>` (Inline Frame). It embeds another HTML document within the current one.
```html
<iframe src="https://www.example.com" width="600" height="400"></iframe>
```

### 17. Cell Padding vs Cell Spacing in Tables
- **Cell Spacing**: The space **between** adjacent table cells.
- **Cell Padding**: The space **between** the content of a cell and its border.
**Note:** These attributes are deprecated in HTML5. CSS `border-spacing` and `padding` should be used instead.

**CSS Example:**
```css
table {
  border-collapse: separate; /* separate is needed for border-spacing */
  border-spacing: 10px; /* Equivalent to cellspacing */
}

td {
  padding: 15px; /* Equivalent to cellpadding */
}
```

### 18. How do you club rows or columns in a table?
Use the `rowspan` and `colspan` attributes on `<td>` or `<th>` elements.
- `colspan="2"`: Makes a cell span two columns.
- `rowspan="3"`: Makes a cell span three rows.
```html
<table border="1">
  <tr>
    <th colspan="2">Name</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>John</td>
    <td>Doe</td>
    <td>30</td>
  </tr>
</table>
```

### 19. Can We Change an Inline Element to a Block Element?
Yes, using the CSS `display` property.
```css
/* Make a normally inline <a> tag behave like a block */
a {
  display: block;
  background-color: lightblue;
  padding: 10px;
}
```

***

## CSS in HTML

### 20. What are the ways to apply CSS styles to an HTML element?
- **Inline CSS**: Using the `style` attribute directly on an element. (Highest specificity).
  ```html
  <p style="color:red;">This text is red.</p>
  ```
- **Internal CSS**: Placing CSS rules within a `<style>` tag in the `<head>` section.
  ```html
  <head>
    <style>
      p { color: blue; }
    </style>
  </head>
  <body>
    <p>This text is blue.</p>
  </body>
  ```
- **External CSS**: Linking to an external `.css` file using the `<link>` tag. (Most common and recommended).
  ```html
  <!-- index.html -->
  <head>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <p>This text is green.</p>
  </body>
  ```
  ```css
  /* style.css */
  p { color: green; }
  ```

### 21. `display: none` vs `visibility: hidden`
- `display: none`: The element is completely removed from the document flow. It is hidden and **takes up no space**.
- `visibility: hidden`: The element is hidden, but it **still occupies its space** in the layout. The page appears as if the element is there, but it is not visible.

**Example:**
```html
<p>First paragraph.</p>
<p style="display: none;">This paragraph is not displayed and takes no space.</p>
<p style="visibility: hidden;">This paragraph is hidden but still takes up space.</p>
<p>Last paragraph.</p>
```

***

## HTML & JavaScript

### 22. `<link>` vs `<a>`
- `<a>` (Anchor): Creates a hyperlink that the user can click to navigate to another document or URL.
- `<link>`: Defines a relationship between the current document and an external resource. It is most commonly used to link to external stylesheets and is not clickable.

### 23. How do you include JavaScript code in HTML?
Using the `<script>` tag. It can be placed in the `<head>` or `<body>`.
```html
<!-- External Script -->
<script src="app.js" defer></script>

<!-- Inline Script -->
<script>
  console.log("Hello from inline script!");
</script>
```
### 24. When is it best to use scripts in `<head>` vs `<body>`?

- **Scripts in `<head>`**:  
  Place scripts in the `<head>` if they must run before any page content loads (e.g., feature detection, polyfills). However, scripts in the `<head>` without `defer` or `async` will block HTML parsing and delay rendering.

  ```html
  <!-- Blocks rendering until script loads and executes -->
  <head>
    <script src="critical.js"></script>
  </head>
  ```

  To avoid blocking, use `defer` or `async`:

  ```html
  <!-- Loads script in parallel, executes after HTML parsing -->
  <head>
    <script src="main.js" defer></script>
  </head>
  ```

- **Scripts at the end of `<body>`**:  
  This is the most common and recommended approach for most scripts. The HTML content loads first, then the script runs, improving perceived performance.

  ```html
  <body>
    <!-- Page content -->
    <script src="app.js"></script>
  </body>
  ```

**Summary:**  
- Use `<head>` with `defer` for non-blocking scripts that can run after parsing.
- Place scripts at the end of `<body>` if they depend on DOM elements being present.
- Avoid blocking the page render with scripts in `<head>` without `defer` or `async`.


***

## Forms and Events

### 25. How do you create an HTML Form?
Using the `<form>` element, which contains form controls like `<input>`, `<textarea>`, and `<button>`.
```html
<form action="/submit_data.php" method="post">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" required>
  <input type="submit" value="Submit">
</form>
```

### 26. How do you handle events in HTML?
Using event handler attributes like `onclick`, `onmouseover`, etc.
```html
<button onclick="myFunction()">Click Me</button>

<script>
  function myFunction() {
    alert('Button was clicked!');
  }
</script>
```
**Note:** While this works, the modern and recommended approach is to use `addEventListener` in JavaScript to separate concerns.
```javascript
// In your JS file
const myButton = document.querySelector('button');
myButton.addEventListener('click', () => {
  alert('Button was clicked!');
});
```

***

## HTML5 Features

### 27. What are the advantages of HTML5?
- **Native Multimedia Support**: `<audio>` and `<video>` tags without needing plugins.
- **Improved Semantics**: New tags like `<header>`, `<footer>`, `<article>`, `<section>` make code more readable and accessible.
- **Enhanced Form Controls**: New input types like `email`, `date`, `number`, and `range`.
- **Offline Storage**: `localStorage` and `sessionStorage` for client-side storage.
- **Advanced Graphics**: `<canvas>` and `<svg>` for drawing graphics directly in the browser.
- **Connectivity**: WebSockets for real-time communication.

### 28. How do you include Audio and Video?
```html
<audio controls>
  <source src="audio.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>

<video width="320" height="240" controls>
  <source src="video.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>
```

### 29. Inline vs Block Elements
- **Inline elements** do not start on a new line and only take up as much width as necessary. Examples: `<span>`, `<a>`, `<img>`.
- **Block elements** always start on a new line and take up the full width available. Examples: `<div>`, `<p>`, `<h1>`.

### 30. `<figure>` vs `<img>`
- `<img>`: The standard tag for embedding an image.
- `<figure>`: A semantic container for a unit of content (like an image, diagram, or code snippet) that is referenced in the main text. It can contain an `<img>` and an optional `<figcaption>` for a caption.

**Example:**
```html
<figure>
  <img src="pic_trulli.jpg" alt="Trulli" style="width:100%">
  <figcaption>Fig.1 - Trulli, Puglia, Italy.</figcaption>
</figure>
```

### 31. How do you specify metadata?
Using the `<meta>` tag inside the `<head>` section.
```html
<meta charset="UTF-8">
<meta name="description" content="Free Web tutorials">
<meta name="keywords" content="HTML, CSS, JavaScript">
<meta name="author" content="John Doe">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

### 32. `<datalist>` vs `<select>`
- `<select>`: Creates a dropdown menu with a fixed set of options that the user **must** choose from.
- `<datalist>`: Provides a list of pre-defined suggestions for an `<input>` element. The user can select a suggestion or type their own value.

**Example:**
```html
<!-- Datalist -->
<label for="browser">Choose your browser from the list:</label>
<input list="browsers" id="browser" name="browser">
<datalist id="browsers">
  <option value="Edge">
  <option value="Firefox">
  <option value="Chrome">
</datalist>

<!-- Select -->
<label for="cars">Choose a car:</label>
<select id="cars" name="cars">
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
</select>
```

### 33. What is an Image Map?
An image map allows you to define clickable areas on an image. The `<map>` element contains `<area>` elements that define the coordinates and destination URLs.
```html
<img src="image.jpg" usemap="#workspace">
<map name="workspace">
  <area shape="rect" coords="34,44,270,350" href="page1.html">
  <area shape="circle" coords="300,200,50" href="page2.html">
</map>
```

### 34. What are Semantic Elements?
Semantic elements are HTML tags that clearly describe their meaning to both the browser and the developer. They improve accessibility and SEO.
Examples: `<form>`, `<table>`, `<article>`, `<header>`, `<footer>`, `<nav>`.

### 35. How do you show tabular data?
Using the `<table>` element with `<tr>` (table row), `<th>` (table header), and `<td>` (table data) tags.
```html
<table>
  <tr>
    <th>Name</th>
    <th>Role</th>
  </tr>
  <tr>
    <td>John</td>
    <td>Developer</td>
  </tr>
</table>
```

### 36. `<meter>` vs `<progress>`
- `<progress>`: Represents the completion progress of a task (e.g., a file download).
- `<meter>`: Represents a scalar measurement within a known range (a gauge), like disk usage or a test score. It is not for progress.

**Example:**
```html
<!-- Progress Bar -->
<label for="file">Downloading progress:</label>
<progress id="file" value="32" max="100"> 32% </progress>

<!-- Meter -->
<label for="disk_d">Disk usage D:</label>
<meter id="disk_d" value="0.6">60%</meter>
```

### 37. HTML5 Drag and Drop
A set of APIs that allow users to click and drag items on a webpage. It involves setting the `draggable="true"` attribute on an element and using JavaScript events like `ondragstart`, `ondragover`, and `ondrop`.

**Minimal Example:**
```html
<div id="drag-target" draggable="true">Drag Me</div>
<div id="drop-zone" style="width:200px; height:100px; border:1px solid black;">Drop Here</div>

<script>
  const dragTarget = document.getElementById('drag-target');
  const dropZone = document.getElementById('drop-zone');

  dragTarget.addEventListener('dragstart', (event) => {
    event.dataTransfer.setData('text/plain', event.target.id);
  });

  dropZone.addEventListener('dragover', (event) => {
    event.preventDefault(); // Allow drop
  });

  dropZone.addEventListener('drop', (event) => {
    event.preventDefault();
    const id = event.dataTransfer.getData('text');
    dropZone.appendChild(document.getElementById(id));
  });
</script>
```

### 38. SVG vs Canvas
| Aspect           | SVG (Scalable Vector Graphics)             | Canvas                                       |
| :--------------- | :----------------------------------------- | :------------------------------------------- |
| **Type**         | Vector-based (XML)                         | Raster-based (Pixels)                        |
| **Scalability**  | Scales to any size without losing quality. | Pixelates when scaled up.                    |
| **DOM**          | Each shape is a DOM element.               | A single DOM element.                        |
| **Modification** | Modifiable with CSS and JS.                | Modifiable only with JS.                     |
| **Use-case**     | Logos, icons, diagrams, charts.            | Games, complex graphics, image manipulation. |

***

## Storage, APIs, and Web Components

### 39. What is Web Storage? (`localStorage` vs `sessionStorage`)
Web storage allows web applications to store data locally in the user's browser.
- `localStorage`: Stores data with no expiration date. The data persists even after the browser is closed.
- `sessionStorage`: Stores data for one session only. The data is deleted when the user closes the browser tab.

**Example:**
```javascript
// Set data
localStorage.setItem('theme', 'dark');
sessionStorage.setItem('userToken', 'xyz123');

// Get data
const theme = localStorage.getItem('theme'); // 'dark'
const token = sessionStorage.getItem('userToken'); // 'xyz123'

// Remove data
localStorage.removeItem('theme');
```

### 40. What is Microdata?
A specification that allows you to nest metadata within existing content on web pages. Search engines use microdata to better understand the content and create rich snippets in search results.
```html
<div itemscope itemtype="http://schema.org/SoftwareApplication">
  <span itemprop="name">Interviewbit Games</span>
</div>
```

### 41. What is the `<output>` tag?
The `<output>` tag represents the result of a calculation or user action.
```html
<form oninput="result.value=parseInt(n1.value)+parseInt(n2.value)">
  <input type="number" name="n1" value="1"> +
  <input type="number" name="n2" value="2"><br>
  The output is: <output name="result"></output>
</form>
```

### 42. What are Server-Sent Events?
A technology that allows a web page to get automatic updates from a server. It's a one-way communication channel from the server to the client.
```javascript
const evtSource = new EventSource("/events");
evtSource.onmessage = function(event) {
  console.log(event.data);
};
```

### 43. What are Web Workers?
A Web Worker is a JavaScript script that runs in the background, independently of other scripts, without affecting the performance of the page. It's useful for long-running or CPU-intensive tasks.
```javascript
// main.js
const myWorker = new Worker("worker.js");
myWorker.postMessage([5, 3]); // Send data to the worker

myWorker.onmessage = function(e) {
  console.log('Result from worker:', e.data);
};

// worker.js
onmessage = function(e) {
  const result = e.data[0] * e.data[1];
  postMessage(result); // Send result back to main script
}
```

### 44. What is the Geolocation API?
An API used to get the geographical position of a user. For privacy reasons, the user is asked for permission to report location information.
```javascript
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(showPosition);
}

function showPosition(position) {
  console.log("Latitude: " + position.coords.latitude);
  console.log("Longitude: " + position.coords.longitude);
}
```

### 45. What are Web Components?
A suite of different technologies allowing you to create reusable custom elements — with their functionality encapsulated away from the rest of your code.
- **Custom Elements**: A set of JavaScript APIs that allow you to define custom elements and their behavior.
- **Shadow DOM**: A set of JavaScript APIs for attaching an encapsulated "shadow" DOM tree to an element, which is rendered separately from the main document DOM.
- **HTML Templates**: The `<template>` and `<slot>` elements enable you to write markup templates that are not displayed in the rendered page.

**Simple Example:**
```javascript
// Define a new custom element
class MyComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `<p>Hello, from a Web Component!</p>`;
  }
}
// Register the new element
customElements.define('my-component', MyComponent);
```
```html
<!-- Use the custom element in HTML -->
<my-component></my-component>
```

***

# CSS

## CSS Fundamentals

### 46. What is CSS and the Box Model?
**CSS** (Cascading Style Sheets) is a language for styling HTML elements.

**The Box Model** is a concept that treats every HTML element as a box with four layers:
- **Content:** The actual content of the box (text, images).
- **Padding:** The transparent space around the content, inside the border.
- **Border:** A line that goes around the padding and content.
- **Margin:** The transparent space outside the border, separating the element from other elements.

**Example:**
```css
.box {
  width: 200px;
  height: 100px;
  padding: 20px;
  border: 5px solid black;
  margin: 15px;
}
```

### 47. What are the advantages of CSS?
- **Separation of Concerns**: Separates content (HTML) from presentation (CSS).
- **Consistency**: Styles can be applied to multiple pages, ensuring a consistent look and feel.
- **Maintainability**: Styles can be updated in one place, making maintenance easier.
- **Bandwidth**: External stylesheets are cached by the browser, reducing download times on subsequent page visits.

### 48. What are the limitations of CSS?
- **Browser Compatibility:** Different browsers may interpret CSS rules differently, requiring vendor prefixes or workarounds.
- **No Parent Selector:** CSS selectors can only cascade downwards (select children or siblings), not upwards (select a parent).
- **No Logic**: CSS is a declarative language, not a programming language. It cannot perform logical operations (though this is changing with new features).

### 49. How do you include CSS in a webpage?
- **External CSS**: `<link rel="stylesheet" href="styles.css">` (Recommended)
- **Internal CSS**: `<style>` tag in the `<head>` section.
- **Inline CSS**: `style` attribute on an HTML element.

***

## Selectors

### 50. What are the types of CSS Selectors?
- **Universal**: `*`
- **Element/Type**: `h1`, `div`
- **ID**: `#container`
- **Class**: `.box`
- **Attribute**: `input[type="text"]`
- **Descendant**: `#container .box` (selects `.box` anywhere inside `#container`)
- **Child**: `#container > .box` (selects `.box` that is a direct child of `#container`)
- **Adjacent Sibling**: `h2 + p` (selects the first `<p>` immediately after an `<h2>`)
- **General Sibling**: `h2 ~ p` (selects all `<p>` elements that follow an `<h2>`)

***

## Preprocessors & Resets

### 51. What is a CSS Preprocessor?
A tool (like SASS, LESS, or Stylus) that lets you use features that don't exist in vanilla CSS, like variables, nesting, mixins, and functions. The preprocessor compiles this code into regular CSS.

**SASS Example:**
```scss
// _variables.scss
$primary-color: #333;

// styles.scss
@import 'variables';

body {
  color: $primary-color;
  
  a {
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
}
```
```html
<!-- index.html -->
<head>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <p>This text is green.</p>
</body>
```
```css
/* style.css */
p { color: green; }
```

### 52. What are Viewport Units (`vw` & `vh`)?
- `vw`: 1% of the viewport's width.
- `vh`: 1% of the viewport's height.
Useful for creating elements that scale with the browser window size.

**Example:**
```css
.full-height-section {
  height: 100vh; /* The section will be as tall as the viewport */
  width: 50vw; /* The section will be half the width of the viewport */
}
```

### 53. Reset vs Normalize CSS
- **Reset CSS**: Aims to remove all built-in browser styling. Example: `* { margin: 0; padding: 0; }`.
- **Normalize CSS**: Aims to make built-in browser styles consistent across browsers, while preserving useful defaults.

**Simple Reset Example:**
```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```

***

## Block, Inline, and Box Sizing

### 54. How do you test a webpage in different browsers?
- Use the browser's built-in developer tools (e.g., Chrome DevTools, Firefox Developer Tools).
- Use cross-browser testing services like **BrowserStack** or **Sauce Labs** to test on real devices and browsers you don't have access to.

### 55. What is a Pseudo-class vs a Pseudo-element?
- **Pseudo-class:** Selects elements that are in a specific state. Examples: `:hover`, `:active`, `:focus`, `:first-child`.
- **Pseudo-element:** Styles a specific part of an element. Examples: `::before`, `::after`, `::first-line`, `::first-letter`.

**Examples:**
```css
/* Pseudo-class: Change link color on hover */
a:hover {
  color: red;
}

/* Pseudo-element: Add content before a paragraph */
p::before {
  content: "-> ";
}
```

### 56. What are the different CSS Units?
- **Absolute Units**: `px`, `pt`, `cm`. Fixed size.
- **Relative Units**:
  - `em`: Relative to the font-size of the **parent** element.
  - `rem`: Relative to the font-size of the **root** (`<html>`) element. (Often preferred).
  - `%`: Relative to the parent element's size.
  - `vh`, `vw`: Relative to the viewport's height and width.

### 57. Does margin-top or margin-bottom affect inline elements?
No. Top and bottom margins have no effect on non-replaced `inline` elements. Horizontal margins (`margin-left`, `margin-right`) do work.

**Example:**
```html
<style>
  span {
    margin-top: 20px; /* This will have no effect */
    margin-left: 20px; /* This will work */
    background: lightblue;
  }
</style>
<span>An inline span.</span>
<span>Another inline span.</span>
```

***

## Advanced CSS Concepts

### 58. What is the CSS `position` Property?
The `position` property specifies the type of positioning method used for an element.
- `static`: Default. The element is in the normal document flow.
- `relative`: The element is offset relative to its normal position, but still occupies its original space in the flow.
  ```css
  .box { position: relative; top: -10px; }
  ```
- `absolute`: The element is removed from the flow and positioned relative to its nearest positioned ancestor.
  ```css
  .parent { position: relative; }
  .child { position: absolute; top: 0; left: 0; }
  ```
- `fixed`: The element is removed from the flow and positioned relative to the viewport. It stays in place when scrolling.
  ```css
  .header { position: fixed; top: 0; width: 100%; }
  ```
- `sticky`: A hybrid of `relative` and `fixed`. It acts as `relative` until it hits a specified offset, then becomes `fixed`.
  ```css
  .sidebar { position: sticky; top: 20px; }
  ```

### 59. What is a Stacking Context and how does `z-index` work?
A **stacking context** is a 3D conceptualization of HTML elements. A new stacking context is created by certain properties, like `position: relative/absolute` with a `z-index`, `position: fixed/sticky`, `opacity < 1`, or `transform`.
**`z-index` only works within the same stacking context.** An element with `z-index: 9999` can still appear *below* an element with `z-index: 1` if they are in different stacking contexts.

**Example:**
```css
.box-1 {
  position: relative;
  z-index: 2; /* Will appear on top */
  background: lightblue;
}
.box-2 {
  position: relative;
  z-index: 1; /* Will appear below */
  background: lightcoral;
  margin-top: -20px;
}
```

### 60. What is DOM Reflow?
A **reflow** (or layout) is the process where the browser recalculates the positions and dimensions of elements. It is a performance-intensive operation triggered by:
- Changing element size or position.
- Adding or removing elements from the DOM.
- Reading properties like `offsetHeight` or `getComputedStyle()`.

**Example of triggering a reflow:**
```javascript
const myElement = document.getElementById('my-element');
// Reading offsetHeight forces the browser to calculate layout
const height = myElement.offsetHeight; 
// Changing a style also triggers it
myElement.style.width = '100px'; 
```

### 61. What are the `box-sizing` properties?
- **`content-box`** (default): `width` and `height` apply only to the content. Total width is `width + padding + border`.
- **`border-box`**: `width` and `height` include the content, padding, and border. This makes layout math much more predictable.

**Example:**
```css
.box {
  width: 100px;
  padding: 10px;
  border: 2px solid black;
}
.content-box {
  box-sizing: content-box; /* Total width: 100 + 20 + 4 = 124px */
}
.border-box {
  box-sizing: border-box; /* Total width: 100px */
}
```

### 62. How do you center a `<div>` inside another `<div>`?
- **Flexbox**: `display: flex; justify-content: center; align-items: center;`
- **Grid**: `display: grid; place-items: center;`
- **Absolute Positioning**: `position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);`

**Flexbox Example:**
```css
.outer {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  border: 2px dashed #ccc;
}

.inner {
  width: 100px;
  height: 100px;
  background-color: lightblue;
}
```

### 63. What are CSS Media Properties (Media Queries)?

The `@media` at-rule, commonly known as **Media Queries**, is used to apply different styles for different media types or device characteristics. This is the cornerstone of **Responsive Web Design**, allowing you to create flexible layouts that adapt to various screen sizes and devices.

A media query is composed of:
1.  A **media type** (optional, defaults to `all`).
2.  Zero or more **media features** that test for specific conditions.

#### Media Types
You can target specific types of media:
-   `all`: Applies to all devices.
-   `print`: Applies when the page is being printed.
-   `screen`: Applies to devices with screens (desktops, tablets, phones).
-   `speech`: Applies to screen readers that read the page out loud.

**Example for Print:**
```css
@media print {
  body {
    font-family: serif;
    color: black;
  }
  
  a::after {
    content: " (" attr(href) ")"; /* Show URLs next to links when printing */
  }
}
```

#### Common Media Features
These are the conditions you can test for:
-   `width` (and `min-width`, `max-width`): The width of the viewport.
-   `height` (and `min-height`, `max-height`): The height of the viewport.
-   `orientation`: The orientation of the viewport (`portrait` or `landscape`).
-   `aspect-ratio`: The ratio of width to height.
-   `hover`: Checks if the user's primary input mechanism can hover over elements.

#### Logical Operators
You can combine features using logical operators:
-   `and`: Combines multiple media features. All conditions must be true.
-   `,` (comma): Acts as an `OR` operator. The styles apply if any of the media queries are true.
-   `not`: Negates a media query.

#### Example: Responsive Breakpoints

This is the most common use case, where the layout changes based on screen width.

```css
/* Default styles for mobile (Mobile-First Approach) */
.container {
  width: 100%;
  padding: 10px;
}

/* For tablets and larger screens (min-width: 768px) */
@media screen and (min-width: 768px) {
  .container {
    width: 750px;
    margin: 0 auto; /* Center the container */
  }
}

/* For desktops and larger screens (min-width: 1024px) */
@media screen and (min-width: 1024px) {
  .container {
    width: 980px;
  }
}

/* Example with orientation */
@media (orientation: landscape) {
  .sidebar {
    float: left;
    width: 25%;
  }
  .main-content {
    float: right;
    width: 75%;
  }
}
```

### 64. How do you hide elements with CSS?
- `display: none;`: Removes the element from the document flow. It takes up no space.
- `visibility: hidden;`: Hides the element, but it still occupies its space in the layout.
- `opacity: 0;`: Makes the element fully transparent. It is still interactive.

**Example:**
```css
.hide-completely {
  display: none;
}
.hide-but-occupy-space {
  visibility: hidden;
}
```
```html
<div class="hide-completely">This will not be displayed at all.</div>
<div class="hide-but-occupy-space">This will be hidden but still take up space.</div>
```

### 65. What does `:root` select?
It selects the root element of the document, which is the `<html>` element. It's most commonly used for declaring CSS Custom Properties (variables).
```css
:root {
  --primary-color: #0057ff;
}
```

### 66. What is Accessibility (a11y)?
The practice of designing websites so that people with disabilities can use them. Key techniques include using semantic HTML, providing `alt` text for images, ensuring sufficient color contrast, and enabling keyboard navigation.

### 67. How do you restore the default value of a CSS property?
Use the `initial` keyword to set a property to its default value.
```css
.my-class {
  color: initial; /* Sets color to its default, usually black */
}
```

### 68. CSS Grid vs. Flexbox
- **Flexbox**: For one-dimensional layouts (a row or a column). Best for aligning items and distributing space within a container.
- **Grid**: For two-dimensional layouts (rows and columns). Best for the overall layout of a page.

**Flexbox Example:**
```css
.container {
  display: flex;
  justify-content: space-between;
}
.item {
  flex: 1; /* Grow to fill the space */
}
```

**Grid Example:**
```css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}
.item {
  background-color: lightblue;
  padding: 20px;
}
```

### 69. How does `calc()` work?
The `calc()` function allows you to perform mathematical calculations on CSS property values. You can mix units, like `%` and `px`.
```css
.element {
  width: calc(100% - 80px);
}
```

### 70. What are CSS Custom Properties (Variables)?
Native CSS variables that can be defined and reused throughout your stylesheet. They are dynamic and can be updated with JavaScript.
```css
:root {
  --main-bg: #f0f0f0;
}
body {
  background-color: var(--main-bg);
}
```

### 71. CSS Variables vs. Preprocessor Variables
- **CSS Variables**: Live in the browser, can be updated at runtime, and are inherited.
- **Preprocessor Variables (Sass/Less)**: Exist only at compile time. They are compiled into static CSS values and cannot be changed at runtime.

### 72. What does `* { box-sizing: border-box; }` do?
This rule applies `box-sizing: border-box` to all elements, making layout calculations more intuitive. An element's `width` and `height` will now include its padding and border, not just its content.

### 73. What does `!important` mean?
The `!important` rule is used to give a specific CSS declaration the highest priority, overriding all other declarations and specificity rules. Its use is generally discouraged as it can make debugging difficult.

### 74. What is CSS Specificity?
A set of rules and weights that browsers use to determine which CSS style is applied to an element when multiple conflicting styles exist. The hierarchy is:
1.  **Inline styles** (e.g., `style="color: red;"`)
2.  **IDs** (e.g., `#my-id`)
3.  **Classes, pseudo-classes, attribute selectors** (e.g., `.my-class`, `:hover`, `[type="text"]`)
4.  **Elements and pseudo-elements** (e.g., `div`, `::before`)

**Example:**
```html
<style>
  p { color: blue; } /* Specificity: 1 */
  .my-class { color: green; } /* Specificity: 10 */
  #my-id { color: purple; } /* Specificity: 100 */
</style>
<p id="my-id" class="my-class" style="color: red;">This text will be red.</p>
<!-- Red wins because inline style has the highest specificity -->
```

### 75. What is Progressive Rendering?
The process of displaying content as it is received. Techniques to improve it include:
- **Lazy loading** for images and videos.
- Prioritizing **critical CSS** (the CSS needed for the above-the-fold content).
- Using `async` and `defer` attributes for scripts.

### 76. `transform: translate()` vs. Absolute Positioning
- `transform: translate()`: Moves an element on the screen without triggering a browser reflow. It is more performant as it is handled by the GPU.
- `position: absolute` with `top`/`left`: Triggers a reflow, which is more computationally expensive as the browser has to recalculate the layout.

**Examples:**
```css
/* More performant animation */
.move-with-transform {
  transform: translateX(50px);
}

/* Less performant animation */
.move-with-position {
  position: relative;
  left: 50px;
}
```

### 77. Does one stylesheet block another from downloading?
No. Browsers typically download external stylesheets in parallel. However, they are parsed and applied sequentially, and rendering of the page is blocked until all CSS has been downloaded and parsed.

### 78. What is Feature Detection in CSS?
Using the `@supports` at-rule to check if a browser supports a specific CSS feature before applying styles that depend on it.
```css
@supports (display: grid) {
  .container {
    display: grid;
  }
}
@supports not (display: grid) {
  .container {
    display: flex; /* Fallback for older browsers */
  }
}
```

***

## CSS Best Practices
- Use a consistent naming convention (e.g., BEM).
- Minimize the use of `!important`.
- Use CSS Custom Properties for theming and maintainability.
- Separate structure (HTML), presentation (CSS), and behavior (JS).
- Test in all modern browsers.
- Prioritize accessibility (a11y).
- Use `rem` for font sizes and `px` for borders.
- Use `box-sizing: border-box`.

