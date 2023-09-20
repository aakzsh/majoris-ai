import Image from 'next/image'
// import Menu from '/menu.svg'
import styles from './header.module.css'
export default function Header(){
    return (
        <>
        <div className={styles.header}>
        <Image src='/menu.svg' alt="Menu Button" className={styles.image} width={100} height={100} />
        <p className={styles.text}>MAJORIS.AI</p>
        </div>
        </>
    )
}