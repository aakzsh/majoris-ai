import { useRouter } from "next/navigation";
import Image from "next/image";
import Footer from "../footer/footer";
import Header from "../header/header";
import styles from "./landing.module.css";
import StartButton from "./start_button";
export default function LandingPage() {
  return (
    <>
      <Header />
      <div className={styles.landingbody}>
        <p className={styles.titletext}>
          CREATE<span className={styles.grad}>&nbsp;AMAZING&nbsp;</span>
          PORTFOLIO WEBSITES FROM RESUME
        </p>
        <p className={styles.subtitle}>The smoothest flow ever</p>
        <div className={styles.string}>
              <div className={styles.steps}>
                <p className={styles.stepindex}>1</p>
                <p className={styles.steptitle}>upload</p>
              </div>
              <div className={styles.steps}>
                <p className={styles.stepindex}>2</p>
                <p className={styles.steptitle}>select</p>
              </div>
              <div className={styles.steps}>
                <p className={styles.stepindex}>3</p>
                <p className={styles.steptitle}>go</p>
              </div>
        </div>
        {/* <Image src="/stringillus.svg" alt="string illustration" width={600} height={20}/> */}
        <StartButton />
      </div>
      <div className={styles.landingsubbody}>
        <div>
          <p>
            BUNCH OF <span className={styles.span1}>&nbsp;STYLES</span>.
          </p>
          <p>
            BUNCH OF <span className={styles.span2}>&nbsp;PALETTES</span>.
          </p>
          <p>
            AND A LOT OF <span className={styles.span3}>&nbsp;MAGIC</span>!
          </p>
        </div>
        <div className={styles.slider}>
          <div className={styles.slidersmall}>1</div>
          <div className={styles.sliderlarge}>2</div>
          <div className={styles.slidersmall}>3</div>
        </div>
      </div>
      <div className={styles.browse}>
        <div className={styles.titlesub}>
          <p className={styles.gradtitle}>BROWSE</p>
          <p className={styles.subtitle}>from multiple magic designs</p>
        </div>
        <div className={styles.browsediv}>
          <div className={styles.browsebig}></div>
          <div className={styles.browsesmall}></div>
          <div className={styles.browsesmall}></div>
        </div>
      </div>
      <div className={styles.customize}>
        <div className={styles.titlesub}>
          <p className={styles.gradtitle}>CUSTOMIZE</p>
          <p className={styles.subtitle}>the way you need it to be</p>
        </div>

        <div className={styles.animationdiv}></div>
      </div>
      <div className={styles.deploy}>
        <div className={styles.titlesub}>
          <p className={styles.gradtitle}>DEPLOY</p>
          <p className={styles.subtitle}>in click of a button!</p>
        </div>
        <div className={styles.animationdiv}></div>
      </div>
      <Footer />
    </>
  );
}
