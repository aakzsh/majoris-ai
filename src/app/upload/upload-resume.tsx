import styles from "./upload-resume.module.css";
import Image from "next/image";
export default function UploadResumeDiv() {
  return (
    <>
      <div className={styles.uploadresumebody}>
        <div className={styles.uploadDiv}>
            <div className={styles.uploadDivChild}>
            <Image src='/documentwhite.svg' alt="File Icon" className={styles.image} width={100} height={100} />
            <button className={styles.clickbtn}>click to upload or drag file</button>
            </div>
        </div>
        <div className={styles.uploadright}>
        <Image src='/filenew.svg' alt="File Icon" className={styles.image} width={200} height={200} />
        <p className={styles.uploadtitle}>UPLOAD YOUR RESUME</p>
        <p className={styles.uploadsubtitle}>{'(.pdf format accepted)'}</p>
        </div>
      </div>
    </>
  );
}
