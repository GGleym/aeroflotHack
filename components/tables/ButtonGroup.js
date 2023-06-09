import {useState} from "react";
import styles from '../../styles/ButtonStyles.module.css'
import {useEffect} from "react";


export const ButtonGroup = (props) => {
    const [clickedId, setClickedId] = useState(0)

    const handleClick = (id) => {
        setClickedId(id)
        props.setClicked(id)
    }

    return (
        <div className={styles.buttonWrapper}>
            {
                props.buttons.map((buttonLabel, id) => (
                    <button
                        key={id}
                        name={buttonLabel}
                        onClick={() => handleClick(id)}
                        className={clickedId === id  ? `${styles.nonActiveButton} ${styles.activeButton} ` : styles.nonActiveButton}
                    >
                        {buttonLabel}
                    </button>
                ))
            }
        </div>
    )
}