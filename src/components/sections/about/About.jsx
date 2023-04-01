import styles from "./About.module.css";
import { useState, useEffect } from "react";

const About = () => {
    const [anim, setAnim] = useState(false);

    useEffect(() => {
        setTimeout(() => setAnim(true));
    }, []);

    return (
        <div className={styles.about + " section"}>
            <div className={styles.box + (anim ? " " + styles.animbox : "")}>
                <img
                    className={styles.myphoto}
                    src="images/me.png"
                    alt="my photo"
                />
                <p className={styles.aboutme}>
                    I, <span>Befa</span>, put mine artistic abstracts Works
                    before. These art pictures show the whole spectrum of my
                    inner joy, spiritual Mood, immeasurable Joy for life.
                </p>
            </div>
        </div>
    );
};

export default About;
