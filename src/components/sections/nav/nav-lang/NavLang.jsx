import Styles from "./NavLang.module.css";
import React, { useState } from "react";

const NavLang = () => {
    const [isActive, setActive] = useState(false);

    return (
        <div
            className={isActive ? Styles.box + " " + Styles.active : Styles.box}
        >
            <div className={Styles.list}>
                <p>Eng</p>
                <p>RUS</p>
                <p>DEU</p>
            </div>
            <div
                className={Styles.switcher}
                onClick={() => {
                    setActive(!isActive);
                }}
            >
                &#x2335;
            </div>
        </div>
    );
};

export default NavLang;
