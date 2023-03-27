import styles from "./Footer.module.css";
import FooterContacts from "./footer-contacts/FooterContacts";

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.container}>
                <p>My contacts</p>
                <FooterContacts />
            </div>
        </div>
    );
};

export default Footer;
