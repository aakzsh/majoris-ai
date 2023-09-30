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
          try {
            JSON.parse(props.data.replace("\n", ""));

            window.localStorage.setItem("data", props.data.replace("\n", ""));
            router.push("/results")
          } catch (e) {
            alert("JSON not formatted properly! Start again" + e)
          }
         
           
        }}
      >
        {"proceed"}
      </button>
    </>
  );
}
