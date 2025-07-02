# minimal.css

**Write some CSS, not all. A clean start for your HTML.**

## 📦 Introduction

**minimal.css** makes your HTML look clean out of the box - no setup, no fuss.  
It's easy to override, so you can focus on layout and building real things, not styling every little element.

🌐 Live Demo: [https://minimalcss.vercel.app](https://minimalcss.vercel.app)

## ✨ Features

- Looks good by default
- Light & dark mode built-in
- Clean forms, tables, buttons
- Responsive on all screens
- No extra libraries needed

## 🤔 Why I Made This

Big CSS frameworks felt too much for small or quick projects.

I was tired of resetting styles, fixing form inputs, and tweaking buttons every time.

Most times, I just needed clean, usable defaults - not a full design system.

**minimal.css** gives a solid starting point so I can focus on layout and logic, not the nitty-gritty of styling.

It helps you skip the boring parts and build faster with less fuss.

## 🚀 How to Use

Just drop this line into the `<head>` of your HTML and you're good to go:

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/gh/the-ajay-panigrahi/minimalcss@v1.0.2/minimal.css"
/>
```

## 🌗 How to Add Dark Mode

Just drop this script **before** `</body>` in your HTML:

```html
<script src="https://cdn.jsdelivr.net/gh/the-ajay-panigrahi/minimalcss@v1.0.2/theme-toggle.js"></script>
```

Add this button anywhere in your HTML:

```html
<button class="theme-toggle">Dark Theme</button>
```

That’s it — it works instantly!

🌓 The script automatically remembers the user’s theme using localStorage, and switches between dark and light.

---

⭐ Found this project helpful? Show your support by starring the repository - it means a lot!
