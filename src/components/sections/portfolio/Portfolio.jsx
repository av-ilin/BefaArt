import styles from "./Portfolio.module.css";
import BefaAPI from "../../../api/BefaApi";
import Art from "./art/Art";
import Button from "../../ui/button/Button";
import { TransitionGroup, CSSTransition } from "react-transition-group";
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
            window.scrollTo({ top: 0, behavior: "smooth" });
            return;
        }

        if (artCount + stepArt >= arts.length) setButText("Hide works");
        setArtCount((prev) => prev + stepArt);
    }

    return (
        <div className="section">
            <div className={styles.container}>
                <TransitionGroup className={styles.artbox}>
                    {arts.slice(0, artCount).map((art, i) => (
                        <CSSTransition
                            key={i}
                            classNames={{
                                enter: styles["art-enter"],
                                enterActive: styles["art-enter-active"],
                                exit: styles["art-exit"],
                                exitActive: styles["art-exit-active"],
                            }}
                            timeout={{
                                enter: 30 + (i % 4) * 200,
                                exit: 700,
                            }}
                        >
                            <Art art={art} id={i % stepArt} />
                        </CSSTransition>
                    ))}
                </TransitionGroup>
                <Button text={butText} onClick={click} />
            </div>
        </div>
    );
};

export default Portfolio;
