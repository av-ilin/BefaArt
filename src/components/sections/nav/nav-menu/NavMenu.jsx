import { Link } from "react-router-dom";
import Styles from "./NavMenu.module.css";

console.log(Styles);

const NavMenu = () => {
    return (
        <div className={Styles["nav__menu"]}>
            <Link className={Styles["nav__menu-item"]} to="/">
                Home
            </Link>
            <Link className={Styles["nav__menu-item"]} to="/">
                My portfolio
            </Link>
            <img src="images/logo.svg" alt="logo" />
            <Link className={Styles["nav__menu-item"]} to="/">
                About me
            </Link>
            <Link className={Styles["nav__menu-item"]} to="/">
                Contacts
            </Link>
        </div>
    );
};

export default NavMenu;
