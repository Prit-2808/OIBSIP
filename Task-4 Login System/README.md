# Task 4 — HomeDecor Authentication System

## Objective
Create a simple login authentication system that allows users to register, login, and access a secured page — built using HTML, CSS, and JavaScript.

## Steps Performed
1. Built a single-page app structure with three views: Login, Register, and a secured Dashboard.
2. Implemented `navigateTo()` to switch between views by toggling an `.active` class.
3. Used `localStorage` to store registered users (username + password) as a simple client-side database.
4. Used `sessionStorage` to track the currently logged-in user for the active browser session.
5. Added an auth guard inside `navigateTo()` — attempting to open the dashboard without logging in redirects back to login with an alert.
6. Built registration validation: required fields, password/confirm-password match check, and duplicate username check.
7. Built login validation: checks entered credentials against stored users before granting access.
8. Added a logout button that clears the session and returns to the login screen.
9. Added real-time alert notifications (success/danger) for all key actions (register, login, logout, errors).
10. Styled the UI with a custom "HomeDecor" brand theme — indigo accent color, card-based layout, smooth hover effects, and a branded secured dashboard.

## Tools & Technologies Used
- **HTML5** — structure for login, register, and dashboard views
- **CSS3** — custom properties (CSS variables), Flexbox, transitions, hover animations
- **JavaScript (Vanilla)** — form handling, localStorage/sessionStorage, view routing, auth guard logic

## Outcome
A fully working frontend authentication flow: users can register, log in with correct credentials, and access a protected dashboard that is inaccessible without logging in first. Logout clears the session correctly, and all actions provide clear visual feedback through alerts.

**Note:** This is a frontend-only demo built for learning/UI purposes. Passwords are stored in `localStorage` as plain text, which is not secure for production use. A real-world system would require a backend with password hashing (e.g., bcrypt) and server-managed sessions.

## How to Run
1. Download/clone this repository.
2. Open `index.html` in any modern browser.
3. No installation or build steps required — pure HTML/CSS/JS.

## Files
- `index.html` — Login, Register, and Dashboard views
- `style.css` — Styling, theme, and layout
- `script.js` — Authentication logic, view routing, and session handling

---
*Task 4 of Web Development & Designing Internship — OASIS INFOBYTE*
