import { useState, createContext, useContext, useEffect } from "react";

const FavoritesContext = createContext(null);

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("favorites");
    if (saved) {
      return JSON.parse(saved);
    }
    return [];
  });

  const isFavorite = (id) => {
    return favorites.some((item) => item.id === id);
  };

  const toggleFavorite = (movie) => {
    if (isFavorite(movie.id)) {
      setFavorites(favorites.filter((item) => item.id !== movie.id));
    } else {
      setFavorites([
        ...favorites,
        {
          id: movie.id,
          title: movie.title,
          poster_path: movie.poster_path,
          vote_average: movie.vote_average,
        },
      ]);
    }
  };

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  return (
    <FavoritesContext.Provider
      value={{ favorites, isFavorite, toggleFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error("useFavorites must be used within FavoritesProvider");
  }
  return context;
}
