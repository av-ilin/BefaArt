import styles from "./Art.module.css";
import ArtName from "../art-name/ArtName";
import ArtDesc from "../art-desc/ArtDesc";
import Loader from "../../../ui/loader/Loader";
import ImgAPI from "../../../../api/ImgApi";
import { useState, useEffect, useRef } from "react";

const Art = ({ art, id }) => {
    // states: 0 - art, 1 - art name, 2 - art info
    const [artState, setArtState] = useState(0);
    const [artImg, setArtImg] = useState(undefined);
    const artRef = useRef(null);

    useEffect(() => {
        if (id === 0)
            artRef.current.scrollIntoView({
                behavior: "smooth",
                block: "center",
            });
    }, [id]);

    useEffect(() => {
        fetchImg();
    }, []);

    async function fetchImg() {
        const img = await ImgAPI.get(art.img);
        setArtImg(img);
    }

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
            style={
                artImg
                    ? {
                          backgroundImage: `url(${artImg})`,
                      }
                    : {
                          border: "1px solid red",
                      }
            }
        >
            {!artImg && <Loader />}
            {artState === 1 && (
                <ArtName name={art.name} setArtState={setArtState} />
            )}
            {artState === 2 && <ArtDesc art={art} setArtState={setArtState} />}
        </div>
    );
};

export default Art;
