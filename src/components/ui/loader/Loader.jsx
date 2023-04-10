import styles from "./Loader.module.css";

const Loader = () => {
    return (
        <div className={styles.loader}>
            <div className={styles.inner}></div>
            <div className={styles.inner}></div>
            <div className={styles.inner}></div>
        </div>
    );
};

export default Loader;
