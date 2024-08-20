
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
                        <a href="/" className={styles.headerLink}>To rent</a>
                    </li>
                    <li className={styles.headerItem}>
                        <a href="/" className={styles.headerLink}>For sale</a>
                    </li>
                    <li className={styles.headerItem}>
                        <a href="/" className={styles.headerLink}>About Us</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;