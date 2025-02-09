
import React, { useState, useEffect, useRef } from 'react';
import { ApartmentSearchProps } from '../../props/ApartmentSearchProps';
import style from './SearchApartment.module.css';

interface ExtendedApartmentSearchProps extends ApartmentSearchProps {
    priceRange: { min: number; max: number };
}

export const SearchApartment: React.FC<ExtendedApartmentSearchProps> = ({ onSearch, priceRange }) => {
    const [status, setStatus] = useState('');
    const [minPrice, setMinPrice] = useState<number | null>(null);
    const [maxPrice, setMaxPrice] = useState<number | null>(null);
    const [showMinDropdown, setShowMinDropdown] = useState(false);
    const [showMaxDropdown, setShowMaxDropdown] = useState(false);

    const minDropdownRef = useRef<HTMLDivElement>(null);
    const maxDropdownRef = useRef<HTMLDivElement>(null);

    const priceOptions = Array.from(
        { length: Math.ceil((priceRange.max - priceRange.min) / (status === 'for sale' ? 1000 : 100)) + 1 },
        (_, i) => priceRange.min + i * (status === 'for sale' ? 1000 : 100)
    );
    const handleSearch = () => {
        if (!status) {
            alert('Please select a status');
            return;
        }

        onSearch(status, minPrice, maxPrice);

        setStatus('');
        setMinPrice(null);
        setMaxPrice(null);
        setShowMinDropdown(false);
        setShowMaxDropdown(false);
    };

    const handleMinPriceSelect = (price: number) => {
        setMinPrice(price);
        setShowMinDropdown(false);
    };

    const handleMaxPriceSelect = (price: number) => {
        setMaxPrice(price);
        setShowMaxDropdown(false);
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (minDropdownRef.current && !minDropdownRef.current.contains(event.target as Node)) {
            setShowMinDropdown(false);
        }
        if (maxDropdownRef.current && !maxDropdownRef.current.contains(event.target as Node)) {
            setShowMaxDropdown(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return ( // Ensure JSX is returned
        <section className={style.searchBlock}>
            <div className={style.searchWrapper}>
                <div className={style.searchContainer}>
                    <div className={style.searchFilter}>
                        <span className={style.searchStatus}>Filters:</span>
                    </div>
                    <select
                        className={style.searchSelect}
                        onChange={(e) => setStatus(e.target.value)}
                        value={status}
                    >
                        <option value="">Select number of rooms</option>
                        <option value="1">1 bedroom</option>
                        <option value="2">2 bedrooms</option>
                        <option value="3">3 bedrooms</option>
                    </select>
                </div>
                <div className={style.priceContainer}>
                    <input
                        className={style.priceInput}
                        type="text"
                        value={minPrice ? minPrice.toString() : ''}
                        placeholder="Min Price"
                        readOnly
                        onClick={() => setShowMinDropdown(!showMinDropdown)}
                    />
                    {showMinDropdown && (
                        <div ref={minDropdownRef} className={style.priceOptions}>
                            {priceOptions.map((price) => (
                                <div key={price} onClick={() => handleMinPriceSelect(price)}>
                                    {price}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
                <div className={style.priceContainer}>
                    <input
                        className={style.priceInput}
                        type="text"
                        value={maxPrice ? maxPrice.toString() : ''}
                        placeholder="Max Price"
                        readOnly
                        onClick={() => setShowMaxDropdown(!showMaxDropdown)}
                    />
                </div>
                {showMaxDropdown && (
                    <div ref={maxDropdownRef} className={style.priceOptions}>
                        {priceOptions.map((price) => (
                            <div key={price} onClick={() => handleMaxPriceSelect(price)}>
                                {price}
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <button className={style.searchBtn} onClick={handleSearch}>
                Search
            </button>
        </section>
    );
};

export default SearchApartment;
