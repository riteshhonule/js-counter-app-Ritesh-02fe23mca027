# Advanced Counter Application

A stylish, browser-based counter application built with vanilla HTML, CSS, and JavaScript. This project demonstrates core front-end concepts like DOM manipulation, event handling, and state management without relying on any frameworks.

The user interface features a modern, dark, glassmorphic design that is both responsive and visually appealing.

## Screenshots

Here are a couple of screenshots showcasing the application's design and functionality:

### Main View
![Main Counter View](screenshots/counter.png)
*(Replace `URL_TO_YOUR_IMAGE_1` with the actual URL or relative path to your first image, e.g., `./screenshots/main-view.png`)*

### Custom Controls Detail
![Custom Controls Detail](screenshots/counter2.png)
*(Replace `URL_TO_YOUR_IMAGE_2` with the actual URL or relative path to your second image, e.g., `./screenshots/custom-controls.png`)*

---

## Features

- **Standard Controls:**
  - Increment the count by one (`+ 1`).
  - Decrement the count by one (`- 1`).
  - Reset the count to zero (`Reset`).
- **Custom Value Controls:**
  - Increment the count by a user-defined value.
  - Decrement the count by a user-defined value.
- **State Guard:** The counter value will **never** go below zero.
- **Interactive UI:**
  - The displayed count updates instantly on button clicks.
  - Buttons have hover and active states for better user feedback.
  - A responsive design that works on various screen sizes.

---

## Tech Stack

- **HTML5:** Structured with semantic elements for better accessibility and SEO.
- **CSS3:** Styled using modern features like Flexbox, custom properties, and gradients. The UI implements a "glassmorphism" effect using `backdrop-filter`.
- **JavaScript (ES6+):** All logic is handled with vanilla JavaScript, focusing on clean DOM manipulation and event listeners.

---

## Getting Started

This project requires no build tools, package managers, or special setup.

### Prerequisites

All you need is a modern web browser (like Chrome, Firefox, Safari, or Edge).

### Installation & Usage

1.  **Download the project file:**
    - Save the code as a single `index.html` file.
    
2.  **Open the application:**
    - Simply open the `index.html` file in your web browser. On most systems, you can just double-click the file.

---

## Design Philosophy

The design is based on the **Glassmorphism** trend, which creates a frosted-glass effect. This is achieved in the `<style>` block using:
- A vibrant, gradient background on the `<body>`.
- A semi-transparent `background` on the main container using `rgba` values.
- The `backdrop-filter: blur(12px);` property to blur the content behind the container.
- A subtle `border` with transparency to catch the light and define the edges.
