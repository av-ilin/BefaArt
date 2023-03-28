import styles from "./About.module.css";

console.log(styles);

const About = () => {
    return (
        <div className={styles.about + " section"}>
            <div className={styles.box}>
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
