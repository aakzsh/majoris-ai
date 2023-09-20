import styles from './footer.module.css'

export default function Footer(){
    return (
        <>
            <div className={styles.footerbody}>
                <p className={styles.footertitle}>MAJORIS.AI</p>
                <p className={styles.footersubtitle}>by aakash | copyright 2023</p>
            </div>
        </>
    )
}