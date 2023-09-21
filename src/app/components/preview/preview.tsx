'use client';

import Link from "next/link";
import styles from "./preview.module.css";
import { useRouter } from "next/navigation";
const Preview = (props: any) => {
  console.log(props);
  const navigate = useRouter();
  return (
    <>
      <div className={styles.parent}>
        <div className={styles.imagearea}></div>
        <div className={styles.bottomarea}>
          <strong>
            {" "}
            <p>Modern Velvet</p>
          </strong>
          <button className={styles.btn} onClick={()=>navigate.push('/viewportfolio')}>view</button>
        </div>
      </div>
    </>
  );
};

export default Preview;
