
import styles from './Header.module.css';
import sweetHome from '../../images/logo.png'

export const Header = () => {
    return (
        <header className={styles.header}>
            <img className={styles.logo} alt="logo-image" src={sweetHome} />
            <h2 className={styles.siteName}>Sweet Home</h2>
            <nav className={styles.nav}>
                <ul className={styles.headerList}>
                    <li className={styles.headerItem}>
                        <button
                            className={styles.headerLink}>
                            To rent
                        </button>
                    </li>
                    <li className={styles.headerItem}>
                        <button

                            className={styles.headerLink}>
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