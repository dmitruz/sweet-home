import React, { useState } from 'react';
import { Apartments } from './components/Apartments/Apartments';
import { Header } from './components/Header/Header';
import './App.css';
import { SearchApartment } from './components/SearchApartment/SearchApartment';
import { handleSearch } from './fetures/SearchFunctionality';

const App: React.FC = () => {
  const [filterCategory, setFilterCategory] = useState<string>('');

  const handleFilter = (category: string) => {
    setFilterCategory(prevCategory => (prevCategory === category ? '' : category));
  };



  return (
    <div className="App">
      <Header onFilter={handleFilter} />
      <SearchApartment onSearch={handleSearch} />
      <Apartments selectedCategory={filterCategory} />
    </div>
  );
}

export default App;
