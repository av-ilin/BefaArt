import styles from "./ArtDesc.module.css";

const ArtDesc = ({ art, setArtState }) => {
    function onCancel() {
        setArtState(0);
    }

    return (
        <div className={styles.wrap}>
            <div className={styles.box}>
                <p className={styles.attr}>
                    {`${art.width}#${art.height} ${art.paint}`}
                </p>
                <p className={styles.description}>{art.description}</p>
            </div>
            <div className={styles.close} onClick={onCancel}>
                &#x2715;
            </div>
        </div>
    );
};

export default ArtDesc;
