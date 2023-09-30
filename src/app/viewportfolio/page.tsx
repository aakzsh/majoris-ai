import Portfolio from "../components/portfolio/portfolio";
import ViewPortfolioPage from "./viewportfolio";
import ReactDOMServer from "react-dom/server";
import styles from "./viewportfolio.module.css"
export default function ViewPortfolio(){

    return (
        <>
        <div className={styles.wholebody}>
        <ViewPortfolioPage/>
        <Portfolio/>
        </div>
        </>
    )
}