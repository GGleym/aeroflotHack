import styles from '../styles/Header.module.css'
import Link from 'next/link'
import { AiOutlineSearch, AiOutlineQuestionCircle } from 'react-icons/ai'
import { TbSpeakerphone } from 'react-icons/tb'
import { BsPerson } from 'react-icons/bs'


export const Header = () => {
    return (
        <div className={styles.header}>
            <Link href={'/'} className={styles.headerLink}>Aeroflot Hack</Link>
            <div className={styles.rightHeader}>
                <Link href={'#'} className={styles.headerLink}><AiOutlineSearch /></Link>
                <Link href={'#'} className={styles.headerLink}><TbSpeakerphone/></Link>
                <Link href={'#'} className={styles.headerLink}><AiOutlineQuestionCircle/></Link>
                <Link href={'#'} className={styles.headerLink}><BsPerson/></Link>

            </div>
        </div>
    )
}