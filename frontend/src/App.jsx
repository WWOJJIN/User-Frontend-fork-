import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Landing from './pages/Landing';
import SearchResults from './pages/SearchResults';
import Favorites from './pages/Favorites';
import HotelDetail from './pages/HotelDetail';
import Booking from './pages/Booking';
import BookingConfirmation from './pages/BookingConfirmation';

function App() {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/hotel/:id" element={<HotelDetail />} />
        <Route path="/hotel/:id/booking/:roomId" element={<Booking />} />
        <Route path="/booking-confirmation" element={<BookingConfirmation />} />
      </Routes>
    </div>
  );
}

export default App;
