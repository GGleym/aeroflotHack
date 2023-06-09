'use client'
import styles from '/styles/forms/Charts.module.css'
import {isMobile} from "react-device-detect";

export const ChooseParamsAlert = (props) => {
    return (
        <div className={styles.dynamicLoaderWrapper}>
            <div className={styles.dynamicLoader}>
                <svg width="64px" height="64px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#002596" stroke="#002596" stroke-width="0.00024000000000000003"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M12 7h1v7h-1zm1.5 9.5a1 1 0 1 0-1 1 1.002 1.002 0 0 0 1-1zm9.3-4A10.3 10.3 0 1 1 12.5 2.2a10.297 10.297 0 0 1 10.3 10.3zm-1 0a9.3 9.3 0 1 0-9.3 9.3 9.31 9.31 0 0 0 9.3-9.3z"></path><path fill="none" d="M0 0h24v24H0z"></path></g></svg>
                <h3 className={styles.showAlertText}>{props.title1}</h3>
                <h3 className={styles.showAlertText}>{props.title2}</h3>
            </div>

            <div className={styles.mobileTextWrapper}>
                <h3>*Пожалуйста, поверните телефон в горизонтальное положение для наилучшего отображения графиков</h3>
            </div>

        </div>
    )
}