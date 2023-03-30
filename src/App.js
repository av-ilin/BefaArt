import React from "react";
import Router from "./components/Router";
import { ContactsContext } from "./js/Contexts";

function App() {
    const [isContactsActive, setContactsState] = React.useState(false);
    const value = { isContactsActive, setContactsState };
    return (
        <ContactsContext.Provider value={value}>
            <Router />
        </ContactsContext.Provider>
    );
}

export default App;
