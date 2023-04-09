import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./sections/home/Home";
import Navigation from "./sections/nav/Nav";
import Footer from "./sections/footer/Footer";
import About from "./sections/about/About";
import Portfolio from "./sections/portfolio/Portfolio";

const Router = () => {
    const basename = "/projects/BefaArt/";
    return (
        <BrowserRouter basename={basename}>
            <Navigation />
            <Routes>
                <Route element={<Home />} exact path="/" />
                <Route element={<About />} path="/about" />
                <Route element={<Portfolio />} path="/portfolio" />
                <Route
                    element={
                        <div
                            style={{
                                position: "absolute",
                                left: "50%",
                                top: "50%",
                            }}
                        >
                            Not Found
                        </div>
                    }
                    path="*"
                />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
};

export default Router;
