"use client";
import { useRef, useState } from "react";
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

  const handleChange = (event: any) => {
    const file = event.target.files[0];
    // console.log(file);
    setLoading(true);

    const formData = new FormData();
    formData.append("file", file);

    const axiosRequest = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "multipart/form-data",
      },
      data: formData,
    };

    axios
      .post("/api/fetchtext", axiosRequest)
      .then((response) => response)
      .then((data) => console.log(data)).then((_)=>setLoading(false));
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
