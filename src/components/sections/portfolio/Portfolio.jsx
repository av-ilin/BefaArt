import styles from "./Portfolio.module.css";
import BefaAPI from "../../../API/BefaApi";
import Art from "./art/Art";
import Button from "../../ui/button/Button";
import { useEffect, useState } from "react";

const Portfolio = () => {
    const stepArt = 4;
    const [arts, setArts] = useState([]);
    const [artCount, setArtCount] = useState(stepArt);
    const [butText, setButText] = useState("Load more");

    useEffect(() => {
        fetchArts();
    }, []);

    async function fetchArts() {
        const data = await BefaAPI.get();
        setArts(data.arts);
    }

    function click() {
        if (artCount >= arts.length) {
            setArtCount(stepArt);
            setButText("Load more");
            return;
        }

        if (artCount + stepArt >= arts.length) setButText("Hide works");
        setArtCount((prev) => prev + stepArt);
    }

    return (
        <div className="section">
            <div className={styles.container}>
                <div className={styles.artbox}>
                    {arts.slice(0, artCount).map((art, i) => (
                        <Art art={art} key={i} />
                    ))}
                </div>
                <Button text={butText} onClick={click} />
            </div>
        </div>
    );
};

export default Portfolio;
