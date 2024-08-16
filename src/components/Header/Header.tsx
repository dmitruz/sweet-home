import styles from './Header.module.css';

export const Header = () => {
    return (
        <header className={styles.header}>
            Logo
            <nav className={styles.nav}>
                <ul className={styles.headerList}>
                    <li className={styles.headerItem}>
                        <a href="/" className={styles.headerLink}>To rent</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}