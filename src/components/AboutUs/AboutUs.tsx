// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import Footer from "../Footer/Footer";
// import styles from './AboutUs.module.css';

// export const AboutUs: React.FC = () => {
//     const [formData, setFormData] = useState({ name: '', email: '', message: '' });
//     const navigate = useNavigate();

//     const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = async (e: React.FormEvent) => {
//         e.preventDefault();

//         try {
//             const response = await axios.post('http://localhost:3001/contact', formData, {
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//             });

//             if (response.status === 200) {
//                 alert('Message sent successfully!');
//                 setFormData({ name: '', email: '', message: '' });
//             } else {
//                 alert('Failed to send message.');
//             }
//         } catch (error) {
//             console.error('Error:', error);
//             alert('An error occurred while sending the message.');
//         }
//     };
//     return (
//         <div>
//             <div className={styles.about__us}>
//                 <button className={styles.go_back_btn} onClick={() => navigate(-1)}>
//                     Go Back
//                 </button>
//                 <p className={styles.about__us__text}>
//                     Welcome to Sweet Home, a trusted real estate agency based in Edinburgh. We specialize in providing high-quality services for both rental and sale apartments, helping clients find their perfect home or investment. Whether you're looking to rent a cozy apartment or purchase your dream property, our expert team is here to guide you every step of the way.
//                 </p>
//                 <p className={styles.about__us__text}>
//                     <span>Address: 123 Main Street, Edinburgh, EH1 1AA</span>
//                     <span>Phone: +44 131 123 4567</span>
//                 </p>
//             </div>
//             <div className={styles.about__hero}></div>

//             <form className={styles.contact_form} onSubmit={handleSubmit}>
//                 <h2 className={styles.contactUs}>Contact Us</h2>
//                 <input
//                     type="text"
//                     name="name"
//                     placeholder="Your Name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     required
//                 />
//                 <input
//                     type="email"
//                     name="email"
//                     placeholder="Your Email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     required
//                 />
//                 <textarea className={styles.message}
//                     name="message"
//                     placeholder="Your Message"
//                     value={formData.message}
//                     onChange={handleChange}
//                     required
//                 ></textarea>
//                 <button type="submit">Send</button>
//             </form>
//             <Footer />
//         </div >
//     )
// }
// export default AboutUs;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import styles from './AboutUs.module.css';

export const AboutUs: React.FC = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Save form data to local storage
        const savedMessages = JSON.parse(localStorage.getItem('contactMessages') || '[]');
        savedMessages.push(formData);
        localStorage.setItem('contactMessages', JSON.stringify(savedMessages));

        alert('Thank You. We\'ve received your message!');
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <div>
            <div className={styles.about__us}>
                <button className={styles.go_back_btn} onClick={() => navigate(-1)}>
                    Go Back
                </button>
                <p className={styles.about__us__text}>
                    Welcome to Sweet Home, a trusted real estate agency based in Edinburgh. We specialize in providing high-quality services for both rental and sale apartments, helping clients find their perfect home or investment. Whether you're looking to rent a cozy apartment or purchase your dream property, our expert team is here to guide you every step of the way.
                </p>
                <p className={styles.about__us__text}>
                    <span>Address: 123 Main Street, Edinburgh, EH1 1AA</span>
                    <span>Phone: +44 131 123 4567</span>
                </p>
            </div>
            <div className={styles.about__hero}></div>

            <form className={styles.contact_form} onSubmit={handleSubmit}>
                <h2 className={styles.contactUs}>Contact Us</h2>
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <textarea className={styles.message}
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                ></textarea>
                <button type="submit">Send</button>
            </form>
            <Footer />
        </div>
    )
}
export default AboutUs;