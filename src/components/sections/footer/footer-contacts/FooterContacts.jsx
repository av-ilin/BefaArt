import styles from "./FooterContacts.module.css";

const FooterContacts = () => {
    return (
        <div className={styles.list}>
            <p>
                Phone:{" "}
                <a href="callto:+015207940490" data-translate="phone">
                    +015207940490
                </a>
            </p>
            <p>
                Email: <a href="mailto:befaart@gmx.de">befaart@gmx.de</a>
            </p>
            <p>
                Instagram:
                <a href="https://www.instagram.com/befaart/">@befaart</a>
            </p>
        </div>
    );
};

export default FooterContacts;
