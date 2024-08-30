import React from 'react';
import data from '../../apartments.json';
import { Apartment } from '../Apartment/Apartment';
import styles from './Apartments.module.css';


export const Apartments = () => {

    return (
        <>
            <h1>Apartment</h1>
            <div className={styles.apartmentContainer}>
                {data.map((apartment) => (
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
