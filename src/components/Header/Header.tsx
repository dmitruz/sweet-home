
import styles from './Header.module.css';
import sweetHome from '../../images/logo.png'

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
                            To rent
                        </button>
                    </li>
                    <li className={styles.headerItem}>
                        <button
                            className={styles.headerLink}
                            onClick={() => onFilter('for sale')}
                        >
                            For sale
                        </button>
                    </li>
                    <li className={styles.headerItem}>
                        <button
                            className={styles.headerLink}>About Us</button>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;