"use client";
import { useEffect, useState } from "react";
import styles from "./edit.module.css"
import ProceedButton from "../components/editdata/proceed_button";
import EditCode from "../components/codeeditor/editor";

const EditPage = () =>{
  const [data, setData] = useState(null)
  const [breaks, setbreaks] = useState(20);
  useEffect(()=>{
     function getData(){
      const x =  window.localStorage.getItem("data");
      return x;
    }
    const datatext = getData();
    const x = datatext.split(",").join(",\n").split("[").join("[\n").split("{").join("{\n")
    setbreaks(x.match(/[\n]/g).length + 5)
    setData(x)
  }, [])

  function getText(){
    return data;
  }
  return (
    <>
    <div className={styles.editbody}>
    <p className={styles.resultstitle}>
          {
            "EDIT THE PARSED CONTENT AS NEEDED AND PROCEED"
          }
        </p>
        {/* <EditCode /> */}
      <textarea name="data" spellCheck="false" className={styles.resumetextarea} value={data} onChange={(evt)=>setData(evt.target.value)} rows={breaks} id=""></textarea>
   <ProceedButton data={data}/>
    </div>
    </>
  )
}

export default EditPage;