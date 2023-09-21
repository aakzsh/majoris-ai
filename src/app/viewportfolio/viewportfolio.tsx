import styles from './viewportfolio.module.css'
const ViewPortfolioPage = () => {
    return (
        <div className={styles.headerbar}>
            <strong><p className={styles.headertitle}>MAJORIS AI</p></strong>
            <div className={styles.headerbtnparent}>
                <button className={styles.headerbtn}>get source code</button>
                <button className={styles.headerbtn}>deploy on Majoris</button>
            </div>
        </div>
    )
}

export default ViewPortfolioPage;