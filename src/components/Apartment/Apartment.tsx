import React, { useState } from 'react';
import styles from './Apartment.module.css';
import { ApartmentProps } from '../../props/ApartmentProps';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import railwayArrows from '../../images/BritishRailSymbol.jpg';

interface ArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

const SampleNextArrow: React.FC<ArrowProps> = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${styles.customSlickArrow} ${styles.customSlickNext}`}
      style={{ ...style }}
      onClick={onClick}
    />
  );
}

const SamplePrevArrow: React.FC<ArrowProps> = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${styles.customSlickArrow} ${styles.customSlickPrev}`}
      style={{ ...style }}
      onClick={onClick}
    />
  );
}
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />
};


export const Apartment: React.FC<ApartmentProps> = ({ img, category, price, name, address, description, more, iframe, distance }) => {
  const [showMore, setShowmore] = useState(false);

  const handleShowMoreClick = () => {
    setShowmore(!showMore);
  }

  const googleMapsUrl = `https://www.google.com/maps/embed?pb=&q=${encodeURIComponent(address)}`;

  return (
    <div className={styles.apartmentCard}>
      <Slider {...settings}>
        {img.map((image, index) => (
          <div key={index}>
            <img className={styles.apartmentImg} src={image} alt={`${name} ${index + 1} `} />
          </div>
        ))}
      </Slider>
      {/* <img className={styles.apartmentImg} src={img} alt={name} /> */}
      <p>{category}</p>
      <span className={styles.apartmentPrice}>£</span> &nbsp; {price}
      <h2 className={styles.apartmentName}>{name}</h2>
      <h2 className={styles.apartmentAddress}>{address}</h2>
      <p className={styles.apartmentDescription}> &nbsp; {description}</p>
      <button onClick={handleShowMoreClick} className={styles.apartmentDescriptionBtn}>
        {showMore ? 'Less details' : 'More details'}
      </button>
      {showMore && <div className={styles.apartmentMore}>{more}
        <div className={styles.locationContainer}>
          <img className={styles.arrow} src={railwayArrows} width="25px" alt="Railway Arrows" />
          &nbsp; Edinburgh Waverley
          &nbsp; <p className={styles.distance}>{distance}</p>
        </div>
        <iframe
          src={iframe}
          title='Map' // Add a unique title
          width="400"
          height="200"
          style={{
            border: '0',
            marginTop: '10px',
          }} // Style prop as an object
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>}
    </div>
  )
}
