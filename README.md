# DREAMHOME FINDER 🏠  
Where Your Next Home Is Just One “Knock Knock” Away! 🚪 + 🔍 = ❤️

🌟 WELCOME TO THE DREAMHOME UNIVERSE! 🌟  
Hello, future homeowner! You’ve just landed on the most immersive, splash-screen-first property search experience on the web. DreamHome Finder blends cinematic flair with no-nonsense filters to help you discover your perfect abode in seconds.

🔑 WHAT IS DREAMHOME FINDER? 🔑  
A JS, HTML & CSS web app that greets you with a full-screen video intro and invites you in with a playful “Knock Knock 🚪” button. Once inside, you can:

- 🔎 Search by **Location**, **Price Range** and **Bedrooms**  
- 📄 View listings loaded dynamically from a JSON data file  
- 📊 Navigate results via **pagination**, 10 homes at a time  
- 📸 Click any card to open a **modal** with full details & images  
- 📱 Enjoy a fully **responsive** layout—from mobile to widescreen  

🏠 THE PROBLEM DREAMHOME SOLVES 🏠  
Ever felt overwhelmed by endless property sites, pop-ups, and hidden filters? DreamHome Finder cuts through the noise:

- 🚫 No heavy frameworks—lightning-fast load times  
- 🚫 No cluttered interface—simple, focused search UI  
- 🚫 No extra visits—get all the info you need in one modal  

✨ CORE FEATURES ✨  
1. 🎥 **Splash Intro**  
   - Full-screen, auto-play background video (`Video/doors.mp4`)  
   - “Knock Knock 🚪” button to proceed (works on desktop & mobile)  

2. 🔍 **Powerful Filters**  
   - Location (free-text, case-insensitive)  
   - Price Range (min/max in ₹)  
   - Bedrooms (1+, 2+, 3+)  

3. 🏡 **Dynamic Listings**  
   - Loads from `listings.json`—easily swap in your own data  
   - **Pagination**: 10 cards per page, Prev/Next + numbered pages  
   - **Interactive Cards**: hover animations & click-to-open modal  

4. 📦 **Detail Modal**  
   - High-res image, title, location, address, bedroom count & price  
   - Close via “×” button or outside click  

5. 📱 **Responsive Design**  
   - Mobile (up to 600px), tablets (601–900px), laptops (901–1200px), desktops (1201px+)  
   - Fluid grid, adaptive fonts, touch-friendly buttons  

6. ⚙️ **Vanilla JS Core**  
   - No external libraries—pure ES6 modules, DOM APIs & fetch  
   - Easy to pluck into any static-site setup or integrate with a backend  

💼 WHO IS THIS FOR? 💼  
- **Homebuyers & Renters:** A quick, distraction-free property overview  
- **Developers & Learners:** A clean codebase demonstrating modern JS patterns  
- **UI/UX Enthusiasts:** Inspiration for splash screens, modals & filter UIs  

🚀 TECH STACK 🚀  
- **HTML5** & **Semantic Markup**  
- **CSS3** with Flexbox, Grid & Media Queries  
- **JavaScript (ES6+)** for dynamic filtering, pagination & modal logic  
- **JSON** data source (`listings.json`)  
- **Assets** managed in `Video/` and `Images/`

🛠️ PROJECT STRUCTURE 🛠️  
```bash
dreamhome-finder/
│
├── Video/             ← Splash video  
│   └── doors.mp4  
│
├── Images/            ← Bedroom & listing images  
│   ├── single.jpg  
│   ├── double.jpg  
│   └── triple.jpg  
│
├── listings.json      ← Sample property data  
├── index.html         ← Entry point (HTML markup + splash)  
├── style.css          ← Global & responsive styles  
├── script.js          ← App logic: fetch, filter, paginate, modal  
└── README.md          ← This overview  

