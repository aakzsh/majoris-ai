'use client';

import Link from "next/link";
import styles from "./preview.module.css";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Portfolio from "../portfolio/portfolio";
const Preview = (props: any) => {
  console.log(props);
  const navigate = useRouter();
  return (
    <>
      <div className={styles.parent}>
        <div className={styles.imagearea}>
            <Image src="/preview.png" alt="preview" width="100" height="100" style={{"height": "100%", "width": "100vw", "borderRadius": "1rem"}}/>
        </div>
        <div className={styles.bottomarea}>
          <strong>
            {" "} 
            <p>{props.title}</p>
          </strong>
          <button className={styles.btn} onClick={()=>navigate.push('/viewportfolio')}>view</button>
        </div>
      </div>
    </>
  );
};

export default Preview;
