import { Link } from "react-router-dom";
import { ContactsContext } from "../../../../Contexts";
import { useContext } from "react";
import Styles from "./NavMenu.module.css";

const NavMenu = () => {
    const { setContactsState } = useContext(ContactsContext);

    return (
        <div className={Styles["menu"]}>
            <Link className={Styles.item} to="/">
                Home
            </Link>
            <Link className={Styles.item} to="/portfoio">
                My portfolio
            </Link>
            <img src="images/logo.svg" alt="logo" />
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
