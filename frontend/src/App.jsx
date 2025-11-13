import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Landing from './pages/Landing';
import SearchResults from './pages/SearchResults';
import Favorites from './pages/Favorites';

function App() {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;
