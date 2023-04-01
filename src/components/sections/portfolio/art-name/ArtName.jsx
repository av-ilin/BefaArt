import styles from "./ArtName.module.css";

const ArtName = ({ name, setArtState }) => {
    function onInfo() {
        setArtState(2);
    }

    return (
        <div className={styles.wrap}>
            <p>{name}</p>
            <div className={styles.info} onClick={onInfo}>
                &#9432;
            </div>
        </div>
    );
};

export default ArtName;
