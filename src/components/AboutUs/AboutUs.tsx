import React from "react";
import { useNavigate } from "react-router-dom";
import styles from './AboutUs.module.css';

export const AboutUs: React.FC = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div className={styles.about__us}>
                <button className={styles.go_back_btn} onClick={() => navigate(-1)}>
                    Go Back
                </button>
                <p className={styles.about__us__text}>
                    Welcome to Sweet Home, a trusted real estate agency based in Edinburgh. We specialize in providing high-quality services for both rental and sale apartments, helping clients find their perfect home or investment. Whether you're looking to rent a cozy apartment or purchase your dream property, our expert team is here to guide you every step of the way.
                </p>
            </div>
            <div className={styles.about__hero}></div>
        </div>
    )
}
export default AboutUs;