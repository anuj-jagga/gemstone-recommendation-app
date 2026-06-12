# GemGuide – Gemstone Recommendation App

A personalised gemstone recommendation web app built with React + Vite, inspired by Vedic astrology principles.

## 🔮 Project Overview

GemGuide helps users discover the perfect gemstone aligned with their:
- **Zodiac sign** (auto-detected from date of birth)
- **Intention** (love, wealth, health, wisdom, protection, spirituality)
- **Budget** (budget-friendly to premium)

## ✨ Features

| Feature | Description |
|---|---|
| 🎯 Recommendation Wizard | 3-step guided flow to get personalised gem suggestions |
| 🔍 Explore Page | Browse all 12 gemstones with live search + filters |
| 📖 Gem Detail Page | Chakra, planet, healing, care, zodiac, price info |
| ❤️ Saved Collection | Favourite gems persist across sessions via localStorage |
| 📱 Responsive Design | Fully mobile-friendly layout |
| ♿ Accessible | Unique IDs on all interactive elements |

## 🗂️ Tech Stack

- **Framework**: React 19 + Vite
- **Routing**: React Router DOM v7
- **Styling**: Vanilla CSS (custom design system, dark luxury theme)
- **State**: React Context API + localStorage
- **Fonts**: Google Fonts (Cinzel + Inter)
- **No external UI library** used

## 🏗️ Architecture

```
src/
├── components/
│   ├── Navbar.jsx / Navbar.css      # Global nav with scroll effect
│   └── GemCard.jsx / GemCard.css    # Reusable gem card component
├── context/
│   └── FavouritesContext.jsx        # Global favourites state
├── data/
│   └── gemstones.js                 # Gem data + zodiac helpers + recommendation logic
├── pages/
│   ├── Home.jsx / Home.css          # Landing page with hero, features, zodiac marquee
│   ├── Recommend.jsx / Recommend.css # 3-step wizard
│   ├── Explore.jsx / Explore.css    # Browse + filter all gems
│   ├── GemDetail.jsx / GemDetail.css # Individual gem detail
│   └── Favourites.jsx / Favourites.css # Saved gems collection
├── App.jsx                          # Router + providers
├── main.jsx                         # React root
└── index.css                        # Global design system
```

## 🚀 Running Locally

```bash
npm install
npm run dev
```

App runs at http://localhost:5173

## 📦 Build for Production

```bash
npm run build
```

## 🧩 Gemstone Data

12 gemstones included:
Amethyst · Ruby · Emerald · Blue Sapphire · Pearl · Diamond · Citrine · Turquoise · Garnet · Moonstone · Lapis Lazuli · Jade

Each gemstone has: `zodiac[]`, `planet`, `chakra`, `element`, `hardness`, `origin`, `priceRange`, `benefits[]`, `description`, `healing`, `howToWear`, `careInstructions`, `category`, `rarity`

## 💡 Assumptions

- Gemstone data is static (no backend/API needed for this MVP)
- Recommendation logic is based on zodiac + chakra + budget matching
- Vedic astrology associations are approximate and for educational purposes only

## 🔮 Future Improvements

- Add user authentication to sync favourites across devices
- Integrate a real astrology API for advanced birth chart readings
- Add gemstone comparison feature
- E-commerce integration for purchasing recommended gems
- Multi-language support (Hindi, Sanskrit)
