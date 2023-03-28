import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./sections/home/Home";
import Navigation from "./sections/nav/Nav";
import Footer from "./sections/footer/Footer";
import About from "./sections/about/About";

const Router = () => {
    return (
        <BrowserRouter>
            <Navigation />
            <Routes>
                <Route element={<Home />} path="/" />
                <Route element={<About />} path="/about" />
                <Route
                    element={
                        <div
                            style={{
                                position: "absolute",
                                left: "50%",
                                top: "50%",
                            }}
                        >
                            In progress
                        </div>
                    }
                    path="/portfoio"
                />
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
