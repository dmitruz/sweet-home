import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Apartments } from './components/Apartments/Apartments';
import { Header } from './components/Header/Header';
import './App.css';
import { SearchApartment } from './components/SearchApartment/SearchApartment';
import { AboutUs } from './components/AboutUs/AboutUs';
//import { handleSearch } from './fetures/SearchFunctionality';

const App: React.FC = () => {
  const [filterCategory, setFilterCategory] = useState<string>('');
  const [selectedRooms, setSelectedRooms] = useState<number | null>(null);

  const handleFilter = (category: string) => {
    setFilterCategory(category);
  };

  const handleSearchFilter = (rooms: string, minPrice: number | null, maxPrice: number | null) => {
    // Convert rooms string to a number
    setSelectedRooms(rooms ? parseInt(rooms) : null);
  };



  return (
    <Router>
      <div className="App">
        <Header onFilter={handleFilter} />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <SearchApartment onSearch={handleSearchFilter} />
                <Apartments selectedCategory={filterCategory} selectedRooms={selectedRooms} />
              </>
            }
          />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
      </div>
    </Router>

  );
}

export default App;
