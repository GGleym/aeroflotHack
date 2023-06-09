import styles from '/styles/forms/Charts.module.css'

export const NoInfo = () => {
    return (
        <div className={styles.dynamicLoaderWrapper}>
            <div className={styles.dynamicLoader}>
                <h1 className={styles.showAlertText}>К сожалению, у нас нет данных для таких параметров...</h1>
                <h2 className={styles.showAlertSubText}>Попробуйте, пожалуйста, выбрать другое направление,<br/> класс бронирования, номер рейса или поменять период бронирования</h2>
            </div>
        </div>
    )
}