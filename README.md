# 🥤 KRYSTALE

### 🔗 [**View Live Site → kryst-ale.netlify.app**](https://kryst-ale.netlify.app/)

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)]()
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)]()
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)]()
[![Status](https://img.shields.io/badge/status-Archived-red)]()
[![License](https://img.shields.io/badge/license-MIT-orange)]()
[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen)](https://kryst-ale.netlify.app/)

> **📢 Public Archive:** This project has been archived and is no longer actively maintained. It was built for academic purposes as a front-end design and development exercise.

A fully responsive, single-page marketing website for **KRYST-ALE**, a fictional "future of refreshment" beverage brand. The project focuses on modern landing-page UX patterns — glassmorphism, scroll-triggered reveal animations, and a simulated checkout flow — built with plain HTML, CSS, and JavaScript (no frameworks, no backend).

---

## 📁 Features & Structure

### 1️⃣ 🏠 Landing Page (`index.html`)
A single-page marketing site with smooth-scrolling navigation between sections:
- **Home** — Hero section with animated background blobs and a call-to-action.
- **Our Story / About** — Feature grid highlighting the product's selling points.
- **Flavors** — A product slider showcasing the drink lineup (Citrus Spark, Midnight Berry, Arctic Mint).
- **Community / Social Proof** — Social proof section for brand credibility.
- **Contact** — Footer contact section.

### 2️⃣ 🛒 Checkout Flow (`order.html`)
- Standalone checkout page with a shipping details form (name, email, address, city, zip).
- Dynamic order summary that updates the product image and name based on the flavor selected (`updateImage()` in `script.js`).
- Simulated order submission (`processOrder()`) that displays a success confirmation modal — no real payment processing or backend involved.

### 3️⃣ 🎨 Visual Design
- **Glassmorphism UI** — Frosted-glass panels (`--glass`, `--glass-border`) over a dark background.
- **Neon accent theme** — Custom CSS variables (`--primary`, `--gradient`) driving a cyan/blue neon aesthetic.
- **Scroll reveal animations** — Elements fade/slide into view as the user scrolls (`reveal()` in `script.js`).
- **Sticky, reactive navbar** — Background and styling shift dynamically on scroll.

### 4️⃣ 🖼️ Product Assets
Custom product renders bundled directly in the repo:
- `hero-bottle.png`
- `product-citrus.png`
- `product-berry.png`
- `product-mint.png`

---

## 📚 Technologies & Skills Used

### 🎨 Frontend Design
- **HTML5** — Semantic, single-page structure across `index.html` and `order.html`.
- **CSS3** — Custom properties, flexbox layouts, glassmorphism effects, and responsive design (`style.css`).
- **Google Fonts** — `Montserrat` and `Playfair Display` for typographic contrast.

### ⚙️ Vanilla JavaScript
- DOM manipulation and event listeners (no external JS libraries or frameworks).
- Scroll-based UI logic (reveal-on-scroll, sticky header).
- Form handling and simulated checkout logic (`script.js`).

### 📈 Analytics
- Google Analytics (`gtag.js`) integration for basic page tracking.

---

## ▶️ How to Run Locally

Prefer to see it running instantly? Skip straight to the **[live deployed site](https://kryst-ale.netlify.app/)** — no setup required.

To run it yourself, this is a static site with no build step or dependencies — just open it in a browser.

1. **Clone the repository:**
   ```bash
   git clone https://github.com/<your-username>/Kryst-Ale-Website.git
   cd Kryst-Ale-Website
   ```

2. **Open directly in a browser:**
   ```bash
   open index.html   # macOS
   # or just double-click index.html
   ```

3. **(Optional) Serve locally** for a closer-to-production experience:
   ```bash
   python -m http.server 8000
   ```
   Then visit `http://localhost:8000` in your browser.

---

## ⚠️ Notes

- This project is a **front-end-only prototype**. The checkout flow is simulated for demonstration purposes — no real payments, orders, or user data are processed or stored.
- Built as an academic exercise to practice responsive layout design, CSS animation, and vanilla JavaScript interactivity.

---

## 👤 Author

**Aditya Sah**
💻 GitHub | 📫 LinkedIn

---

📜 **License**: MIT — free to use, modify, and share.
