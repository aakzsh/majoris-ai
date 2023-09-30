import Preview from "../components/preview/preview";
import styles from "./results.module.css";

export default function ResultsPage() {
    const items = ["COMING SOON","Red Velvet","COMING SOON"]
  return (
    <>
      <div className={styles.resultbody}>
        {" "}
        <p className={styles.resultstitle}>
          {
            "FOLLOWING ARE SOME AMAZING DESIGNS WE'VE TAILORED FOR YOUR AMAZING PORTFOLIO"
          }
        </p>
        <div className={styles.previewgrid}>
          {items.map((item) => (
            <Preview name="check" key="item" title={item}/>
          ))}
        </div>
      </div>{" "}
    </>
  );
}
