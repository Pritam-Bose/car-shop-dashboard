import React, { createContext, useContext, useState, useEffect } from 'react';
import { type Car } from '../data/cars';

interface FavoritesContextType {
  favorites: Car[];
  toggleFavorite: (car: Car) => void;
  isFavorite: (id: number) => boolean;
  favoritesCount: number;
}

const FavoritesContext = createContext<FavoritesContextType | null>(null);

export const FavoritesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [favorites, setFavorites] = useState<Car[]>(() => {
    const stored = localStorage.getItem('car_brand_favorites');
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem('car_brand_favorites', JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (car: Car) => {
    setFavorites(prev =>
      prev.find(f => f.id === car.id)
        ? prev.filter(f => f.id !== car.id)
        : [...prev, car]
    );
  };

  const isFavorite = (id: number) => favorites.some(f => f.id === id);

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite, isFavorite, favoritesCount: favorites.length }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const ctx = useContext(FavoritesContext);
  if (!ctx) throw new Error('useFavorites must be used within FavoritesProvider');
  return ctx;
};
