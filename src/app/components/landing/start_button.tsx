'use client';
import { useRouter } from "next/navigation";
import styles from "./landing.module.css";

export default function StartButton() {
  const router = useRouter();
  return (
    <>
      <button
        className={styles.startbtn}
        onClick={() => router.push("/upload")}
      >
        {"let's start"}
      </button>
    </>
  );
}
