import React from 'react';
import data from '../apartments.json';
import styles from './Apartments.module.css';


export const Apartments = () => {
    return (
        <>
            <h1>Apartment</h1>
            <div className={styles.apartmentContainer}>
                {data.map((apartment) => (
                    <div className={styles.apartmentCard} key={apartment.id}>
                        <h2>{apartment.name}</h2>
                        <p className={styles.apartmentPrice}>Price: &nbsp; {apartment.price}</p>
                        <img className={styles.apartmentImg} src={apartment.img} alt={apartment.name} />
                    </div>
                ))}
            </div>
        </>
    );
};


export default Apartments;
