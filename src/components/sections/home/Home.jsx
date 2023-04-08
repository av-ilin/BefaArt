import styles from "./Home.module.css";
import { useState, useEffect } from "react";

const Home = () => {
    const [anim, setAnim] = useState(false);

    useEffect(() => {
        setTimeout(() => setAnim(true));
    }, []);

    return (
        <div className={styles.home + " " + "section"}>
            <div
                className={
                    styles.container +
                    (anim ? " " + styles.active_container : "")
                }
            >
                <div className={styles.hello}>
                    <h6>Hello, i am</h6>
                    <h1>BefaArt.</h1>
                </div>
                <img src="images/home-art01.webp" alt="art" />
                <img src="images/home-art02.webp" alt="art" />
                <img src="images/home-art03.webp" alt="art" />
            </div>
        </div>
    );
};

export default Home;
