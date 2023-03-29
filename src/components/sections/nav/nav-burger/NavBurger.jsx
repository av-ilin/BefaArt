import styles from "./NavBurger.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import NavLang from "../nav-lang/NavLang";
import NavMenu from "../nav-menu/NavMenu";

const NavBurger = () => {
    const [isActive, setIsActive] = useState(false);

    return (
        <div className={styles.box}>
            <div className={styles.head}>
                <NavLang />

                <Link className={styles.logo} to="/">
                    <img src="images/logo.svg" alt="logo" />
                </Link>

                <div
                    className={
                        styles.burger + (isActive ? " " + styles.active : "")
                    }
                    onClick={() => {
                        setIsActive((prev) => !prev);
                    }}
                >
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>

            <NavMenu isBurger isActive={isActive} />
        </div>
    );
};

export default NavBurger;
