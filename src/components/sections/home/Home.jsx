import styles from "./Home.module.css";

const Home = () => {
    return (
        <div className={styles.home}>
            <div className={styles.container}>
                <div className={styles.hello}>
                    <h6>Hello, i am</h6>
                    <h1>BefaArt.</h1>
                </div>
                <img src="images/home/home-art01.png" alt="art" />
                <img src="images/home/home-art02.png" alt="art" />
                <img src="images/home/home-art03.png" alt="art" />
            </div>
        </div>
    );
};

export default Home;
