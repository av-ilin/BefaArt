import { Link } from "react-router-dom";
import { ContactsContext } from "../../../../js/Contexts";
import { useContext } from "react";
import Styles from "./NavMenu.module.css";

const NavMenu = ({
    isBurger = false,
    isActive = false,
    setIsActive = () => {},
}) => {
    const { setContactsState } = useContext(ContactsContext);
    let state = isBurger ? " " + Styles.burger : "";
    state += isActive ? " " + Styles.active : "";

    const click = () => {
        setIsActive((prev) => {
            let cur = !prev;
            if (cur) document.body.style.overflow = "hidden";
            else document.body.style.overflow = "";
            return cur;
        });
    };

    return (
        <div className={Styles["menu"] + state}>
            <Link className={Styles.item} onClick={click} to="/">
                Home
            </Link>
            <Link className={Styles.item} onClick={click} to="/portfolio">
                My portfolio
            </Link>
            <Link className={Styles.logo} onClick={click} to="/">
                <img src="images/logo.svg" alt="logo" />
            </Link>
            <Link className={Styles.item} onClick={click} to="/about">
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
