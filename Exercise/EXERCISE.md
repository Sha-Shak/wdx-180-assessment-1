# Weekly Assessment 1 - Exercises

This file contains practical tasks to reinforce your understanding of HTML, CSS, JavaScript, and basic algorithm concepts. Please complete each task in a separate file and document your solutions properly.

---

## CSS Task

### Create a Responsive Navigation Bar

**Objective:**  
Design and implement a responsive navigation bar using HTML and CSS.

**Instructions:**

1. Create an HTML file (`navbar.html`).
2. Use a `<nav>` tag to build a navigation bar with the following links: Home, About, Services, Contact.
3. Style the navigation bar using CSS:
   - Use a horizontal layout for desktop screens.
   - For screens smaller than 600px, stack the links vertically.
4. Add hover effects for each link (e.g., change the background color).
5. Make the navigation bar fixed at the top of the page.

---

## HTML + CSS + JavaScript Task

### Display Greeting Based on Time

**Objective:**  
Create a web page that displays a personalized greeting based on the time of day.

**Instructions:**

1. Create an HTML file (`greeting.html`) with the following elements:
   - A `<h1>` element for the greeting message.
2. Use CSS to style the page:
   - Center the text on the page.
   - Use a background color that changes slightly based on the time of day (e.g., light yellow for morning, light blue for afternoon, and dark blue for evening).
3. Use JavaScript to implement the following functionality:
   - Dynamically update the greeting message (e.g., "Good Morning", "Good Afternoon", or "Good Evening") based on the current time.
   - Update the background color accordingly.

Example Output:

- If the user opens the page at 10:00 AM, the greeting should read:  
  Good Morning

---

## Algorithm Task

### Sorting Strings by Length

**Objective:**  
Write a JavaScript function to sort an array of strings by their lengths in ascending order.

**Instructions:**

1. Create a JavaScript file (`sorting.js`).
2. Write a function `sortStringsByLength(strings)` that takes an array of strings as input.
3. Use a sorting algorithm to arrange the strings by their length.
4. Test your function with the following array:

````javascript
const testStrings = ["apple", "banana", "kiwi", "strawberry", "grape"];
console.log(sortStringsByLength(testStrings));  
````
Expected output:

``` ["kiwi", "grape", "apple", "banana", "strawberry"] ```
````
