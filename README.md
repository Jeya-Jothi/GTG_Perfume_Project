# GTG Perfume – Product Landing Page

A modern, fully responsive product landing page built from a Figma design using **HTML, CSS, and Vanilla JavaScript**.  
This project focuses on pixel-perfect UI implementation, smooth interactions, and clean frontend architecture without using any frameworks.

---

## Project Overview

This project was developed as a frontend UI assignment to convert a provided Figma design into a real, functional webpage.  
The objective was to closely match the design while implementing required interactions, animations, and responsiveness across all screen sizes.

The website represents a premium perfume brand and includes a hero section, interactive product gallery, subscription plans, animated metrics, a comparison table, and a newsletter footer.

---

## Technologies Used

- **HTML5** – Semantic, accessible markup
- **CSS3** – Flexbox, Grid, media queries, transitions, animations
- **JavaScript (Vanilla)** – DOM manipulation, scroll handling, animations
- **No external libraries or frameworks**

---

## Features

### Header & Navigation

- Fixed header with transparent background over hero section
- Header background changes to glass-white effect on scroll
- Responsive navigation with hamburger menu for mobile devices

### Hero Section

- Full-width background image
- Overlay content with CTA
- Fully responsive typography

### Product Gallery

- Image slider with:
  - Left and right navigation arrows
  - Dot indicators
  - Thumbnail selection
- Active image synchronization
- Consistent image scaling

### Subscription Plans

- Single and Double subscription options
- Smooth expand / collapse animations
- Radio-based selection logic
- Sticky product info panel on desktop
- Dynamic CTA behavior

### Metrics Section

- Animated percentage counters
- Numbers count up from `0` when section enters viewport

### Comparison Section

- Semantic **HTML table**
- Data structured using JavaScript objects
- Highlighted GTG column with dotted borders
- Brand-specific icon styling
- Horizontal scroll support on small screens

### Footer & Newsletter

- Responsive footer layout
- Social media links with hover animations
- Newsletter subscription form
- Custom modal popup:
  - Centered popup
  - Background blur
  - Scroll disabled when open
  - Close icon and keyboard support

---

## Responsiveness

The entire project is fully responsive and tested on:

- Desktop
- Tablet
- Mobile (down to **320px width**)

Implemented using:

- CSS Grid & Flexbox
- Media queries
- Overflow handling for complex sections

---

## How to Run the Project

### Using VS Code Live Server

1. Open the project folder in VS Code
2. Right-click `index.html`
3. Select **Open with Live Server**
