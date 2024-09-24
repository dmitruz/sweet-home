import React, { useState, useEffect, useRef } from 'react';
import { ApartmentSearchProps } from '../../props/ApartmentSearchProps';

import style from './SearchApartment.module.css';


export const SearchApartment: React.FC<ApartmentSearchProps> = ({ onSearch }) => {
    const [status, setStatus] = useState('');
    const [minPrice, setMinPrice] = useState<number | null>(null);
    const [maxPrice, setMaxPrice] = useState<number | null>(null);
    const [showMinDropdown, setShowMinDropdown] = useState(false);
    const [showMaxDropdown, setShowMaxDropdown] = useState(false);

    const minDropdownRef = useRef<HTMLDivElement>(null);
    const maxDropdownRef = useRef<HTMLDivElement>(null);

    const priceOptions = Array.from({ length: 24 }, (_, i) => 500 + i * 100);

    const handleSearch = () => {
        if (!status) {
            alert('Please select a status');
            return;
        }

        // Trigger the search callback
        onSearch(status, minPrice, maxPrice);

        // Clear the selection after the search
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

    // Function to close the dropdowns when clicking outside
    const handleClickOutside = (event: MouseEvent) => {
        if (minDropdownRef.current && !minDropdownRef.current.contains(event.target as Node)) {
            setShowMinDropdown(false);
        }
        if (maxDropdownRef.current && !maxDropdownRef.current.contains(event.target as Node)) {
            setShowMaxDropdown(false);
        }
    };

    // Add event listener to detect clicks outside of the dropdowns
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);


    return (
        <section className={style.searchBlock}>
            <div className={style.searchContainer}>
                <div>
                    <span className={style.searchStatus}>Search by Status:</span>
                </div>
                <select onChange={(e) => setStatus(e.target.value)} value={status}>
                    <option value="">Select Status</option>
                    <option value="For Sale">For Sale</option>
                    <option value="To Rent">To Rent</option>
                </select>

            </div>
            <div className={style.priceContainer}>
                <input className={style.priceInput}
                    type="text"
                    value={minPrice ? minPrice.toString() : ''}
                    placeholder="Min Price"
                    readOnly
                    onClick={() => setShowMinDropdown(!showMinDropdown)} />
                {showMinDropdown && (
                    <div className={style.priceOptions}>
                        {priceOptions.map((price) => (
                            <div
                                key={price}
                                onClick={() => handleMinPriceSelect(price)}

                            >
                                {price}
                            </div>
                        ))}
                    </div>
                )}
                {/* </div> */}
                <div className={style.priceContainer}>
                    <input className={style.priceInput}
                        type="text"
                        value={maxPrice ? maxPrice.toString() : ''}
                        placeholder="Max Price"
                        readOnly
                        onClick={() => setShowMaxDropdown(!showMaxDropdown)} />
                    {showMaxDropdown && (
                        <div className={style.priceOptions}>
                            {priceOptions.map((price) => (
                                <div
                                    key={price}
                                    onClick={() => handleMaxPriceSelect(price)}
                                >
                                    {price}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
            <button className={style.searchBtn} onClick={handleSearch}>
                Search
            </button>
        </section>
    );
};

export default SearchApartment;