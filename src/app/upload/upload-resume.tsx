"use client";
import { useContext, useRef, useState } from "react";
import styles from "./upload-resume.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Loading from "../components/loading/page";
import { NextFetchEvent } from "next/server";
import axios from "axios";
export default function UploadResumeDiv() {
  const router = useRouter();
  const [isLoading, setLoading] = useState(false);
  const hiddenFileInput = useRef(null);

  const handleChange = async  (event: any) => {
    const file = event.target.files[0];
    console.log(file);
    setLoading(true);
    const formData = new FormData();
    formData.append("name", "aakash")
    formData.append("file", file);
    const body = {
      "name": "aakash",
      "file": file
    }
    console.log(formData.entries());



    const response = await axios.post("http://localhost:8080/upload", formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    if (response.status === 200) {
      console.log(response.data)
      const formData2 = new FormData()
      // formData.append("textdata", response.data)
      const response2 = await axios.post("http://localhost:8080/resumejson", JSON.stringify({"textdata": response.data}), {
        headers:{
          "Content-Type": "application/json"
        }
      })
      if(response2.status === 200){
        console.log(response2.data)
        window.localStorage.setItem("data", JSON.stringify(response2.data.res));
        router.push('/edit')
        
      }
      else{
        alert("error")
      }
    } else {
      alert("error")
      // File upload failed.
    }
    setLoading(false);
  };

  const handleClick = () => {
    // Trigger a click event on the hidden file input element.
    document.getElementById("fileupload")?.click();
  };

  return (
    <>
      {!isLoading ? (
        <div className={styles.uploadresumebody}>
          <input
            type="file"
            id="fileupload"
            onChange={handleChange}
            style={{ display: "none" }}
            accept=".pdf"
            multiple={false}
          />
          <div className={styles.uploadDiv}>
            <div className={styles.uploadDivChild}>
              <Image
                src="/documentwhite.svg"
                alt="File Icon"
                className={styles.image}
                width={100}
                height={100}
              />
              <button className={styles.clickbtn} onClick={handleClick}>
                click to upload file
              </button>
            </div>
          </div>
          <div className={styles.uploadright}>
            <Image
              src="/filenew.svg"
              alt="File Icon"
              className={styles.image}
              width={200}
              height={200}
            />
            <p className={styles.uploadtitle}>UPLOAD YOUR RESUME</p>
            <p className={styles.uploadsubtitle}>{"(.pdf format accepted)"}</p>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}
