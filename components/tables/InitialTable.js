import styles from '../../styles/forms/Form.module.css'
import Link from 'next/link'
//таблица с ссылками на определенные направления
export const InitialTable = () => {
    return (
        <div className={styles.initialTable}>
            <h1 className={styles.formTitle}>Пользовательский путь</h1>
            <p className={styles.formDescription}>Выберите свой пользовательский путь, и программа рассчитает данные</p>
            <div className={styles.linksBox}>
                <Link href={'/dynamicTable'} className={styles.linkTable}>Динамика</Link>
                <Link href={'/seasonTable'} className={styles.linkTable}>Сезонность</Link>
                <Link href={'/predictTable'} className={styles.linkTable}>Прогноз</Link>
            </div>
        </div>
    )
}