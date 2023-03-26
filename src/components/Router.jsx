import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./sections/home/Home";
import Navigation from "./sections/nav/Navigation";
import Footer from "./sections/footer/Footer";

const Router = () => {
    return (
        <BrowserRouter>
            <Navigation />
            <Routes>
                <Route element={<Home />} path="/" />
                <Route element={<div>Not Found</div>} path="*" />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
};

export default Router;
