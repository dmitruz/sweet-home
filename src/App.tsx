import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Apartments } from './components/Apartments/Apartments';
import { Header } from './components/Header/Header';
import './App.css';
import { SearchApartment } from './components/SearchApartment/SearchApartment';
import { AboutUs } from './components/AboutUs/AboutUs';

const App: React.FC = () => {
  const [filterCategory, setFilterCategory] = useState<string>('');
  const [selectedRooms, setSelectedRooms] = useState<number | null>(null);
  const [priceRange, setPriceRange] = useState<{ min: number; max: number }>({
    min: 500,
    max: 3000,
  })

  const handleFilter = (category: string) => {
    setFilterCategory(category);

    if (category === 'for sale') {
      setPriceRange({ min: 100000, max: 1000000 });
    } else {
      setPriceRange({ min: 500, max: 3000 });
    }
  };


  const handleSearchFilter = (rooms: string, minPrice: number | null, maxPrice: number | null) => {
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
                <SearchApartment onSearch={handleSearchFilter}
                  priceRange={priceRange}
                />
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
