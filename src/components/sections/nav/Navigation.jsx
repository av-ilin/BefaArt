import Styles from "./Navigation.module.css";
import NavLang from "./nav-lang/NavLang";
import NavMenu from "./nav-menu/NavMenu";

const Navigation = () => {
    return (
        <nav className={Styles["nav"]}>
            <div className="container">
                <NavLang />
                <NavMenu />
            </div>
        </nav>
    );
};

export default Navigation;
