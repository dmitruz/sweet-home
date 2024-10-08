import React from 'react';
import data from '../../apartments.json';
import { Apartment } from '../Apartment/Apartment';
import styles from './Apartments.module.css';



interface ApartmentsProps {
    selectedCategory: string;
    selectedRooms: number | null;
}

export const Apartments: React.FC<ApartmentsProps> = ({ selectedCategory, selectedRooms }) => {
    // Filter apartments based on selected category
    const filteredApartments = data.filter((apartment) => {
        const matchesCategory = selectedCategory ? apartment.category.toLowerCase() === selectedCategory.toLowerCase() : true;
        const matchesRooms = selectedRooms !== null ? apartment.rooms === selectedRooms : true;
        return matchesCategory && matchesRooms;
    });

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
