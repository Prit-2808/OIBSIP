# Task 1 — Calculator Web App

## Objective
Build a fully functional calculator using HTML, CSS, and JavaScript that performs basic arithmetic operations (addition, subtraction, multiplication, division) through an interactive user interface.

## Steps Performed
1. Structured the calculator layout using HTML — display screen and a grid of buttons (digits, operators, and utility keys like clear, delete, and sign toggle).
2. Styled the interface using CSS Grid for button alignment, with a light/dark theme toggle for better user experience.
3. Implemented core logic in JavaScript:
   - `appendValue()` to build the expression as the user clicks buttons
   - `calculate()` to evaluate the expression and display the result
   - `clearDisplay()` and `deleteLast()` for clearing/editing input
   - `toggleSign()` to switch between positive/negative values
   - Percentage (%) handling by converting it to a division expression before evaluation
4. Added a calculation history line above the display to show the last expression used.
5. Implemented a theme toggle (🌙 / ☀️) using a button click event that switches CSS classes on the `<body>` element.
6. Tested all operations, edge cases (like invalid expressions), and both themes for consistent styling.

## Tools & Technologies Used
- **HTML5** — structure and layout
- **CSS3** (Grid, Flexbox, transitions) — styling, responsiveness, and theme switching
- **JavaScript (Vanilla)** — event handling, calculation logic, DOM manipulation
- **Google Fonts (Poppins)** — typography

## Outcome
A responsive, fully working calculator that supports all basic arithmetic operations, percentage calculation, sign toggling, and a smooth light/dark mode switch. The UI is clean and mirrors the look of modern calculator apps, with visual feedback on button press (hover/active states) and a live expression history.

## How to Run
1. Download/clone this repository.
2. Open `index.html` in any modern browser (Chrome, Edge, Firefox).
3. No installation or build steps required — pure HTML/CSS/JS.

## Files
- `index.html` — Calculator structure
- `style.css` — Styling, layout, and theme system
- `script.js` — Calculator logic and interactivity

---
*Task 1 of Web Development & Designing Internship — OASIS INFOBYTE*
