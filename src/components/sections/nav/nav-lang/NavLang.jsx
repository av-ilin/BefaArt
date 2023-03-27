import Styles from "./NavLang.module.css";

const NavLang = () => {
    return (
        <div className={Styles["nav__lang"]}>
            <p>Eng</p>
            <p>RUS</p>
            <p>DEU</p>
        </div>
    );
};

export default NavLang;
