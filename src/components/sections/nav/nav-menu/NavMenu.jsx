import { Link } from "react-router-dom";
import Styles from "./NavMenu.module.css";

const NavMenu = () => {
    return (
        <div className={Styles["menu"]}>
            <Link className={Styles.item} to="/">
                Home
            </Link>
            <Link className={Styles.item} to="/">
                My portfolio
            </Link>
            <img src="images/logo.svg" alt="logo" />
            <Link className={Styles.item} to="/">
                About me
            </Link>
            <Link className={Styles.item} to="/">
                Contacts
            </Link>
        </div>
    );
};

export default NavMenu;
