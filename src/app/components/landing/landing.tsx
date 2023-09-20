import Footer from "../footer/footer"
import Header from "../header/header"
import styles from './landing.module.css'
export default function LandingPage(){
    return (
        <>
        <Header/>
        <div className={styles.landingbody}>
            <p className={styles.titletext}>CREATE<span className={styles.grad}>&nbsp;AMAZING&nbsp;</span>PORTFOLIO WEBSITES FROM RESUME</p>
            <p className={styles.subtitle}>The smoothest flow ever</p>
            <button className={styles.startbtn}>{"let's start"}</button>
        </div>
        <div className={styles.landingsubbody}>
            <div>
            <p>BUNCH OF <span className={styles.span1}>&nbsp;STYLES</span>.</p>
            <p>BUNCH OF <span className={styles.span2}>&nbsp;PALETTES</span>.</p>
            <p>AND A LOT OF <span className={styles.span3}>&nbsp;MAGIC</span>!</p>
            </div>
            <div className={styles.slider}>
                <div className={styles.slidersmall}>1</div>
                <div className={styles.sliderlarge}>2</div>
                <div className={styles.slidersmall}>3</div>
            </div>
        </div>
        <Footer/>
        </>
    )
}