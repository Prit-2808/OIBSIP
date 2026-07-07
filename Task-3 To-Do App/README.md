# Task 3 — DayList: Daily To-Do App

## Objective
Develop a to-do web app that lets users add daily tasks, mark them complete, view Pending and Completed tasks separately, and edit/delete tasks — with timestamps for added and completed dates.

## Steps Performed
1. Structured the app with a sidebar form (Add New Task) and a main panel showing the task feed.
2. Added live stat cards — Total Tasks, Pending, Completed — updated dynamically as tasks change.
3. Implemented `localStorage` persistence so tasks remain saved across browser sessions.
4. Built filter tabs (All / Pending Tasks / Completed Tasks) to view tasks by status.
5. Added a checkbox to mark tasks complete — checkbox disables once checked to lock completed status.
6. Implemented an edit modal to update a task's title without leaving the page.
7. Added a delete button to remove tasks from any list.
8. Added creation and completion timestamps, formatted using `toLocaleDateString`/`toLocaleTimeString`.
9. Styled with a clean card-based layout, badges (Pending/Completed), and empty-state messaging.
10. Made the layout responsive for smaller screens using media queries.

## Tools & Technologies Used
- **HTML5** — structure (form, task list, modal)
- **CSS3** — Grid/Flexbox layout, badges, responsive design
- **JavaScript (Vanilla)** — DOM manipulation, event handling, array methods (`filter`, `find`, `sort`)
- **localStorage** — client-side data persistence

## Outcome
A fully functional to-do app where tasks can be added, filtered, edited, completed, and deleted — with all data persisting after refresh via localStorage. Pending and Completed tasks are clearly separated through filter tabs and color-coded badges, and every task shows an accurate creation/completion timestamp.

## How to Run
1. Download/clone this repository.
2. Open `index.html` in any modern browser.
3. No installation or build steps required — pure HTML/CSS/JS.

## Files
- `index.html` — App structure (form, task list, edit modal)
- `style.css` — Styling, layout, and responsiveness
- `script.js` — Task logic (add, edit, delete, complete, filter, persistence)

---
*Task 3 of Web Development & Designing Internship — OASIS INFOBYTE*
