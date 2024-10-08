import React from 'react';
import data from '../../apartments.json';
import { Apartment } from '../Apartment/Apartment';
import styles from './Apartments.module.css';



interface ApartmentsProps {
    selectedCategory: string;
}

export const Apartments: React.FC<ApartmentsProps> = ({ selectedCategory }) => {
    // Filter apartments based on selected category
    const filteredApartments = data.filter((apartment) =>
        selectedCategory ? apartment.category.toLowerCase() === selectedCategory.toLowerCase() : true
    );

    return (
        <>
            <div className={styles.apartmentContainer}>
                {filteredApartments.map((apartment) => (
                    <Apartment
                        key={apartment.id}
                        img={apartment.img}
                        category={apartment.category}
                        price={apartment.price}
                        name={apartment.name}
                        address={apartment.address}
                        description={apartment.description}
                        more={apartment.more}
                    />
                ))}
            </div>
        </>
    );
};


export default Apartments;
