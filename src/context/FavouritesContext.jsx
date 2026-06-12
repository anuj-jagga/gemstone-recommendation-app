import { createContext, useContext, useState, useEffect } from 'react';

const FavouritesContext = createContext(null);

export function FavouritesProvider({ children }) {
  const [favourites, setFavourites] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('gem-favourites') || '[]');
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('gem-favourites', JSON.stringify(favourites));
  }, [favourites]);

  function toggle(gemId) {
    setFavourites(prev =>
      prev.includes(gemId) ? prev.filter(id => id !== gemId) : [...prev, gemId]
    );
  }

  function isFav(gemId) {
    return favourites.includes(gemId);
  }

  return (
    <FavouritesContext.Provider value={{ favourites, toggle, isFav }}>
      {children}
    </FavouritesContext.Provider>
  );
}

export function useFavourites() {
  return useContext(FavouritesContext);
}
