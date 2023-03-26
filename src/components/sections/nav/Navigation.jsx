import Styles from "./Navigation.module.css";
import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <nav className={Styles.nav}>
            <div className="container">
                <div className={Styles.nav__lang}>
                    <p>Eng</p>
                    <p>RUS</p>
                    <p>DEU</p>
                </div>
                <div className={Styles.nav__menu}>
                    <Link className={Styles.nav__menu_item} to="/">
                        Home
                    </Link>
                    <Link className={Styles.nav__menu_item} to="/">
                        My portfolio
                    </Link>
                    <img src="images/logo.svg" alt="logo" />
                    <Link className={Styles.nav__menu_item} to="/">
                        About me
                    </Link>
                    <Link className={Styles.nav__menu_item} to="/">
                        Contacts
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
