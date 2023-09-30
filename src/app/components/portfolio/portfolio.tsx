import styles from "./portfolio.module.css"
const Portfolio = (props: any) =>{
    
    const sentences = ["I'm a Software Developer", "I've graduated from USC", "I like painting", "I've certification in Data Science issues by edX"]
    return (
        <>
            <div style={{backgroundColor: "rgb(0, 0, 0)", minHeight: "100vh", width: "100vw", maxWidth: "100%", color: "white", display: "flex", alignItems: "center", flexDirection: "column", justifyContent: "center", padding: "2rem"}}>
                <div>
                    <h6 style={{fontSize: "1rem"}}>Hey There..</h6>
                    <h1 style={{fontSize: "3rem", fontWeight: 700}}>{"I'm John Doe"}</h1>

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
        </>
    )
}

export default Portfolio