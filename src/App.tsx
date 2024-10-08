import React, { useState } from 'react';
import { Apartments } from './components/Apartments/Apartments';
import { Header } from './components/Header/Header';
import './App.css';
import { SearchApartment } from './components/SearchApartment/SearchApartment';
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
    <div className="App">
      <Header onFilter={handleFilter} />
      <SearchApartment onSearch={handleSearchFilter} />
      <Apartments selectedCategory={filterCategory} selectedRooms={selectedRooms} />
    </div>
  );
}

export default App;
