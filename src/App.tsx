import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';
import { HomePage } from './pages/HomePage';
import { SearchPage } from './pages/SearchPage';
import { FacilityDetailPage } from './pages/FacilityDetailPage';
import { ComparisonPage } from './pages/ComparisonPage';
import { FavoritesPage } from './pages/FavoritesPage';
import { AccessibilityProvider } from './contexts/AccessibilityContext';
import { FavoriteProvider } from './contexts/FavoriteContext';

function App() {
  return (
    <AccessibilityProvider>
      <FavoriteProvider>
        <div className="App">
          <Header />
          <main id="main-content">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/search" element={<SearchPage />} />
              <Route path="/facility/:id" element={<FacilityDetailPage />} />
              <Route path="/comparison" element={<ComparisonPage />} />
              <Route path="/favorites" element={<FavoritesPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </FavoriteProvider>
    </AccessibilityProvider>
  );
}

export default App; 