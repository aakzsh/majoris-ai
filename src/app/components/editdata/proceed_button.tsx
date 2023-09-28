'use client';
import { useRouter } from "next/navigation";
import styles from "./proceed_button.module.css";

export default function ProceedButton(props: {data: string}) {
  const router = useRouter();
  return (
    <>
      <button
        className={styles.startbtn}
        onClick={() => {
            window.localStorage.setItem("data", props.data);
            router.push("/results")
        }}
      >
        {"proceed"}
      </button>
    </>
  );
}
