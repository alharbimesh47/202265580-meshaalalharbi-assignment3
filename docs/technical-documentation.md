# Technical Documentation

## Overview
This project is a responsive portfolio website built with HTML, CSS, and JavaScript. It includes About, Projects, and Contact sections. Assignment 2 improves Assignment 1 by adding more interactive features and better user feedback.

## Technologies Used
- HTML
- CSS
- JavaScript

## Interactive Features
### Project Search
A live search input is used to filter project cards while the user types.

### Category Filter Buttons
Buttons allow the user to view all projects or only projects from a selected category.

### Show and Hide Project Details
Each project card includes a button that lets the user show or hide more information.

### Theme Toggle
The site includes a dark and light mode button. The selected mode is saved in localStorage so the preference stays after refreshing the page.

### Contact Form Feedback
When the user submits the form, a success message appears on the page instead of only using an alert.

## Error Handling and Feedback
If no projects match the selected search text or filter, the page shows a “No projects found” message. The contact form also gives clear feedback after submission.

## Responsive Design
The layout uses CSS Grid for the projects section and media queries for tablet and mobile screens. This helps the site work well across different screen sizes.

## File Description
- `index.html`: website structure and content
- `css/styles.css`: styling, transitions, layout, and dark mode styles
- `js/script.js`: greeting, theme toggle, project filtering, show and hide details, and form feedback
- `assets/images/`: project images
- `docs/`: documentation files

## Testing
The website was tested by resizing the browser window and checking all interactive features manually. Search, buttons, theme toggle, details toggle, and form submission were tested to confirm that they work correctly.
