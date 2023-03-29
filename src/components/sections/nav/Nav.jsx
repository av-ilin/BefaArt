import Styles from "./Nav.module.css";
import NavMenu from "./nav-menu/NavMenu";
import { useState } from "react";
import NavBurger from "./nav-burger/NavBurger";
import NavLang from "./nav-lang/NavLang";

const Navigation = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    window.addEventListener("resize", () => {
        setWindowWidth(window.innerWidth);
    });

    return (
        <nav className={Styles["nav"]}>
            <div className="container">
                <NavLang />
                {windowWidth > 768 ? <NavMenu /> : <NavBurger />}
            </div>
        </nav>
    );
};

export default Navigation;
