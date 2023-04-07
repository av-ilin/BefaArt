import styles from "./Art.module.css";
import ArtName from "../art-name/ArtName";
import ArtDesc from "../art-desc/ArtDesc";
import { useState, useEffect, useRef } from "react";

const Art = ({ art, id }) => {
    // states: 0 - art, 1 - art name, 2 - art info
    const [artState, setArtState] = useState(0);

    const [artTrans, setArtTrans] = useState(id % 2 === 0 ? "150%" : "-150%");
    const [artOpacity, setArtOpacity] = useState(0);

    const artRef = useRef(null);

    useEffect(() => {
        setTimeout(() => {
            setArtTrans("0");
            setArtOpacity("1");
        }, 30 + id * 100);

        if (id === 0)
            artRef.current.scrollIntoView({
                behavior: "smooth",
            });
    }, [id]);

    const onMouseEnter = () => {
        if (artState === 0) setArtState(1);
    };

    const onMouseLeave = () => {
        if (artState === 1) setArtState(0);
    };

    return (
        <div
            className={styles.art}
            ref={artRef}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            style={{
                backgroundImage: `url(${art.img})`,
                transform: `translateX(${artTrans})`,
                opacity: `${artOpacity}`,
            }}
        >
            {artState === 1 && (
                <ArtName name={art.name} setArtState={setArtState} />
            )}
            {artState === 2 && <ArtDesc art={art} setArtState={setArtState} />}
        </div>
    );
};

export default Art;
