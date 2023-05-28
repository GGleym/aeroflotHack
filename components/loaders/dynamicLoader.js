import {BeatLoader} from "react-spinners";
import styles from '/styles/forms/Charts.module.css'

export const DynamicLoader = () => {
    return (
        <div className={styles.dynamicLoader}>
            <BeatLoader color={'#002596'} />
        </div>
    )
}