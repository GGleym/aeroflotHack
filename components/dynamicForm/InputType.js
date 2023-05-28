import styles from '../../styles/forms/Form.module.css'

export const InputType = (props) => {
    return (
        <>
            <div className={props.className}>
                <p className={styles.formInput}>{props.upText}</p>
            </div>
        </>
    )
}