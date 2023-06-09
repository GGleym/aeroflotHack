import styles from '../styles/Header.module.css'
import Link from 'next/link'


export const Header = (props) => {

    return (
        <div className={styles.header}>
            <Link href={'/'} className={styles.headerLink}>Forward-IT</Link>
        </div>
    )
}