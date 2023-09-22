import Image from "next/image";
import styles from "./loading.module.css";
import { useEffect, useState } from "react";
const LoadingPage = () => {
  const list = ["SORTING DESIGNS", "PARSING CONTENT", "BEAUTIFYING PORTFOLIO"];
  const listsrc = ["/filenew.svg", "/monitor.svg"]

  const [index, setIndex] = useState(0);
  const [imgindex, setImgindex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      if (index == 2) {
        setIndex(0);
      } else {
        setIndex(index + 1);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [index]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (imgindex == 1) {
        setImgindex(0);
      } else {
        setImgindex(imgindex + 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [imgindex]);

  return (
    <>
      <div className={styles.loadbody}>
        <div className={styles.moveandfade}>
            <Image src={listsrc[imgindex]} alt="file" width={150} height={150}/>
        </div>
      <p className={styles.text}>
        {list[index]}
      </p>
      </div>
    </>
  );
};

export default LoadingPage;
