import styles from '../../styles/forms/Form.module.css'
import Link from 'next/link'
//таблица с ссылками на определенные направления
export const InitialTable = () => {
    return (
        <div className={styles.initialTable}>
            <div className={styles.initialTableWrapper}>
                <h1 className={styles.formTitle}>Пользовательский путь</h1>
                <p className={styles.formDescription}>Выберите свой пользовательский путь, и программа рассчитает данные</p>
                <div className={styles.linksBox}>
                    <Link href={'/predictTable'} className={styles.linkInitial}>Прогноз</Link>
                    <Link href={'/seasonTable'} className={styles.linkInitial}>Сезонность</Link>
                    <Link href={'/dynamicTable'} className={styles.linkInitial}>Динамика</Link>
                </div>
            </div>
        </div>
    )
}