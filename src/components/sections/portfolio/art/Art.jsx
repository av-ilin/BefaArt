import styles from "./Art.module.css";

const Art = ({ art }) => {
    // console.log(art);
    return (
        <div className={styles.art}>
            <img src={art.img} alt="art" />
        </div>
    );
};

export default Art;
