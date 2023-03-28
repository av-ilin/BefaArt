import styles from "./Footer.module.css";
import FooterContacts from "./footer-contacts/FooterContacts";
import { ContactsContext } from "../../../Contexts";
import { useContext } from "react";

const Footer = () => {
    const { isContactsActive } = useContext(ContactsContext);
    return (
        <div
            className={
                isContactsActive
                    ? styles.footer + " " + styles.active
                    : styles.footer
            }
        >
            <div className={styles.container}>
                <p>My contacts</p>
                <FooterContacts />
            </div>
        </div>
    );
};

export default Footer;
