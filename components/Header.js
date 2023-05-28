import styles from '../styles/Header.module.css'
import Link from 'next/link'
import { AiOutlineSearch, AiOutlineQuestionCircle } from 'react-icons/ai'
import { TbSpeakerphone } from 'react-icons/tb'
import { BsPerson } from 'react-icons/bs'


export const Header = () => {
    return (
        <div className={styles.header}>
            <Link href={'/'} className={styles.headerLink}>Forward-IT</Link>
        </div>
    )
}