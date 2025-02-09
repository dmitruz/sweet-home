
import styles from './Header.module.css';
import sweetHome from '../../images/logo.png';
import { Link } from 'react-router-dom';

interface HeaderProps {
    onFilter: (category: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onFilter }) => {
    return (
        <header className={styles.header}>
            <img className={styles.logo} alt="logo-image" src={sweetHome} />
            <h2 className={styles.siteName}>Sweet Home</h2>
            <nav className={styles.nav}>
                <ul className={styles.headerList}>
                    <li className={styles.headerItem}>
                        <button
                            className={styles.headerLink}
                            onClick={() => onFilter('to rent')}
                        >
                            To Rent
                        </button>
                    </li>
                    <li className={styles.headerItem}>

                        <button
                            className={styles.headerLink}
                            onClick={() => onFilter('for sale')}
                        >
                            For Sale
                        </button>
                    </li>
                    <li className={styles.headerItem}>
                        <button className={styles.headerLink}>
                            <Link className={styles.headerLink} to="/about-us">
                                About Us
                            </Link>
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;