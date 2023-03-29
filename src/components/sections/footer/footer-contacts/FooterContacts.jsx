import styles from "./FooterContacts.module.css";

const FooterContacts = () => {
    return (
        <div className={styles.list}>
            <a href="tel:+015207940490">Phone: +015207940490</a>
            <a href="mailto:befaart@gmx.de">Email: befaart@gmx.de</a>
            <a href="https://www.instagram.com/befaart/">Instagram: @befaart</a>
        </div>
    );
};

export default FooterContacts;
