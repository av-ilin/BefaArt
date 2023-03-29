import { Link } from "react-router-dom";
import { ContactsContext } from "../../../../Contexts";
import { useContext, useEffect } from "react";
import Styles from "./NavMenu.module.css";

const NavMenu = ({ isBurger = false, isActive = false }) => {
    const { setContactsState } = useContext(ContactsContext);
    let state = isBurger ? " " + Styles.burger : "";
    state += isActive ? " " + Styles.active : "";
    return (
        <div className={Styles["menu"] + state}>
            <Link className={Styles.item} to="/">
                Home
            </Link>
            <Link className={Styles.item} to="/portfoio">
                My portfolio
            </Link>
            <Link className={Styles.logo} to="/">
                <img src="images/logo.svg" alt="logo" />
            </Link>
            <Link className={Styles.item} to="/about">
                About me
            </Link>
            <p
                className={Styles.item}
                onClick={() => {
                    setContactsState((curState) => !curState);
                }}
            >
                Contacts
            </p>
        </div>
    );
};

export default NavMenu;
