"use client";

import styles from './viewportfolio.module.css'
import ReactDOMServer from "react-dom/server";
const ViewPortfolioPage = () => {
    function triggerDownload(stringContent = '', filename = 'download.blob') {
        const blob = new Blob([stringContent], { type: 'text/plain' })
        const url = URL.createObjectURL(blob)
        const a = document.createElement('a')
    
        a.href = url
        a.download = filename
        a.click()
        URL.revokeObjectURL(url)
      }
    
      function generate() {
        const myHTML = ReactDOMServer.renderToString(<Portfolio />);
    
        const filePath = 'portfolio.html';
    
        console.log(myHTML)
        triggerDownload(myHTML, filePath)
        // fileSaver.save(myHTML, filePath);      
      }
    
    return (
        <div className={styles.headerbar}>
            <strong><p className={styles.headertitle}>MAJORIS AI</p></strong>
            <div className={styles.headerbtnparent}>
                <button className={styles.headerbtn} onClick={()=>generate()}>get source code</button>
                <button className={styles.headerbtn}>deploy on Majoris</button>
            </div>
        </div>
    )
}

export default ViewPortfolioPage;

const Portfolio = (props: any) =>{
    
    const sentences = ["I'm a Software Developer", "I've graduated from USC", "I like painting", "I've certification in Data Science issues by edX"]
    return (
        <>
            <body style={{height: "100vh", margin: "0rem", padding: "0rem", maxWidth: "100vw"}}>
            <div style={{backgroundColor: "rgb(0, 0, 0)", fontFamily: "sans-serif", minHeight: "100vh", width: "100vw", maxWidth: "100%", color: "white", display: "flex", alignItems: "center", flexDirection: "column", justifyContent: "center", padding: "2rem"}}>
                <div>
                    <p style={{fontSize: "1rem"}}>Hey There..</p>
                    <p style={{fontSize: "3rem", fontWeight: 700}}>{"I'm John Doe"}</p>

                    <div>
                        {
                            sentences.map((element) => {
                                return <div  key={element} style={{height: "5rem", marginTop: "3rem", marginBottom: "3rem", width: "70vw", display: "flex", alignItems: "center", justifyContent: "flex-start", backgroundColor: "rgb(255, 50, 50)"}}>
                                    <h1 style={{marginLeft: "2rem"}}>{element}</h1>
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
            </body>
        </>
    )
}
