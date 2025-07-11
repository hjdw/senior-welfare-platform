import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { FavoriteFacility, ComparisonItem } from '../types';

interface FavoriteContextType {
  favorites: FavoriteFacility[];
  comparisonItems: ComparisonItem[];
  addToFavorites: (facilityId: string, notes?: string) => void;
  removeFromFavorites: (facilityId: string) => void;
  isFavorite: (facilityId: string) => boolean;
  addToComparison: (facilityId: string) => void;
  removeFromComparison: (facilityId: string) => void;
  isInComparison: (facilityId: string) => boolean;
  clearComparison: () => void;
  updateFavoriteNotes: (facilityId: string, notes: string) => void;
}

const FavoriteContext = createContext<FavoriteContextType | undefined>(undefined);

export const FavoriteProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [favorites, setFavorites] = useState<FavoriteFacility[]>(() => {
    const saved = localStorage.getItem('favoriteFacilities');
    return saved ? JSON.parse(saved) : [];
  });

  const [comparisonItems, setComparisonItems] = useState<ComparisonItem[]>(() => {
    const saved = localStorage.getItem('comparisonItems');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('favoriteFacilities', JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    localStorage.setItem('comparisonItems', JSON.stringify(comparisonItems));
  }, [comparisonItems]);

  const addToFavorites = (facilityId: string, notes?: string) => {
    if (!isFavorite(facilityId)) {
      const newFavorite: FavoriteFacility = {
        facilityId,
        addedAt: new Date().toISOString(),
        notes,
      };
      setFavorites(prev => [...prev, newFavorite]);
    }
  };

  const removeFromFavorites = (facilityId: string) => {
    setFavorites(prev => prev.filter(fav => fav.facilityId !== facilityId));
  };

  const isFavorite = (facilityId: string): boolean => {
    return favorites.some(fav => fav.facilityId === facilityId);
  };

  const addToComparison = (facilityId: string) => {
    if (!isInComparison(facilityId) && comparisonItems.length < 4) {
      const newItem: ComparisonItem = {
        facilityId,
        addedAt: new Date().toISOString(),
      };
      setComparisonItems(prev => [...prev, newItem]);
    }
  };

  const removeFromComparison = (facilityId: string) => {
    setComparisonItems(prev => prev.filter(item => item.facilityId !== facilityId));
  };

  const isInComparison = (facilityId: string): boolean => {
    return comparisonItems.some(item => item.facilityId === facilityId);
  };

  const clearComparison = () => {
    setComparisonItems([]);
  };

  const updateFavoriteNotes = (facilityId: string, notes: string) => {
    setFavorites(prev => 
      prev.map(fav => 
        fav.facilityId === facilityId 
          ? { ...fav, notes } 
          : fav
      )
    );
  };

  const value: FavoriteContextType = {
    favorites,
    comparisonItems,
    addToFavorites,
    removeFromFavorites,
    isFavorite,
    addToComparison,
    removeFromComparison,
    isInComparison,
    clearComparison,
    updateFavoriteNotes,
  };

  return (
    <FavoriteContext.Provider value={value}>
      {children}
    </FavoriteContext.Provider>
  );
};

export const useFavorites = (): FavoriteContextType => {
  const context = useContext(FavoriteContext);
  if (context === undefined) {
    throw new Error('useFavorites must be used within a FavoriteProvider');
  }
  return context;
}; 