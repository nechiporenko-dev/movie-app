# 🎬 CineBase — Movie Discovery App
CineBase is a modern movie discovery application powered by the TMDB API. Browse popular and top-rated titles, filter by genre, search for films, explore detailed pages with cast and trailers, and build a personal favorites list that persists in the browser.

## 🔗 Live Demo
https://movie-app-nechip.vercel.app/

## 🌟 Key Features
* **Movie Browsing:**
  * Home sections: Popular, Top Rated, Now Playing, Upcoming (horizontal scroll).
  * Genre page with filter chips (Action, Drama, Horror, and more).
* **Search:**
  * Debounced search requests to the TMDB API.
  * Results grid with loading and empty states.
* **Movie Details:**
  * Poster, rating, runtime, genres, director, tagline, and overview.
  * Embedded YouTube trailer, cast list, and recommendations.
* **Favorites:**
  * Add or remove movies from cards and the details page.
  * Dedicated Favorites page.
  * **localStorage integration:** favorites stay after refresh and browser restart.
* **UI & UX:**
  * Dark theme with violet accents.
  * Responsive layout (mobile-first, Tailwind CSS).
  * Client-side routing with React Router (SPA-friendly deploy on Vercel).

## 🛠️ Tech Stack

* **Frontend:** React (Vite), React Router, Tailwind CSS.
* **State:** Context API for favorites (`isFavorite`, `toggleFavorite`).
* **Data:** TMDB REST API (fetch, AbortController on details / home requests).
* **Persistence:** `localStorage` for the favorites list.
* **Deploy:** Vercel (SPA rewrites for client-side routes).

