import React, { useState } from 'react';
import { ApartmentSearchProps } from '../../props/ApartmentSearchProps';

import style from './SearchApartment.module.css';


export const SearchApartment: React.FC<ApartmentSearchProps> = ({ onSearch }) => {
    const [status, setStatus] = useState('');
    const [minPrice, setMinPrice] = useState<number | null>(null);
    const [maxPrice, setMaxPrice] = useState<number | null>(null);
    const [showMinDropdown, setShowMinDropdown] = useState(false);
    const [showMaxDropdown, setShowMaxDropdown] = useState(false);

    const priceOptions = Array.from({ length: 46 }, (_, i) => 500 + i * 100);

    const handleSearch = () => {
        if (!status) {
            alert('Please select a status');
            return;
        }
        onSearch(status, minPrice, maxPrice);
    };

    const handleMinPriceSelect = (price: number) => {
        setMinPrice(price);
        setShowMinDropdown(false);
    };

    const handleMaxPriceSelect = (price: number) => {
        setMaxPrice(price);
        setShowMaxDropdown(false);
    };

    return (
        <section className={style.searchBlock}>
            <div className={style.searchContainer}>
                <div>
                    <span>Search by Status:</span>
                    <select onChange={(e) => setStatus(e.target.value)} value={status}>
                        <option value="">Select Status</option>
                        <option value="For Sale">For Sale</option>
                        <option value="To Rent">To Rent</option>
                    </select>
                </div>
            </div>
            <div className={style.priceContainer}>
                <input
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
                <div className={style.priceRangeBlock}>
                    <input
                        type="text"
                        value={maxPrice ? maxPrice.toString() : ''}
                        placeholder="Max Price"
                        readOnly
                        onClick={() => setShowMaxDropdown(!showMaxDropdown)} />
                    {showMaxDropdown && (
                        <div>
                            {priceOptions.map((price) => (
                                <div
                                    key={price}
                                    onClick={() => handleMaxPriceSelect(price)}
                                    style={{ cursor: 'pointer', padding: '5px' }}
                                >
                                    {price}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
            <button onClick={handleSearch} style={{ marginTop: '20px' }}>
                Search
            </button>
        </section>
    );
};

export default SearchApartment;