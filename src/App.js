import React from "react";
import Router from "./components/Router";
import Navigation from "./components/sections/nav/Navigation";
import Footer from "./components/sections/footer/Footer";

function App() {
    return (
        <div className="App">
            <Navigation />
            <Router />
            <Footer />
        </div>
    );
}

export default App;
