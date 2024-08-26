import React from 'react';
import styles from './Apartment.module.css';
import { ApartmentProps } from '../../props/ApartmentProps';

export const Apartment: React.FC<ApartmentProps> = ({ img, price, name, address, description, more }) => {
    return (
        <div className={styles.apartmentCard}>
            <img className={styles.apartmentImg} src={img} alt={name} />
            <span className={styles.apartmentPrice}>£</span> &nbsp; {price}
            <h2 className={styles.apartmentName}>{name}</h2>
            <h2 className={styles.apartmentAddress}>{address}</h2>
            <p className={styles.apartmentDescription}> &nbsp; {description}</p>
            <p className={styles.apartmentDescription}>More info: &nbsp; {more}</p>

        </div>
    )
}