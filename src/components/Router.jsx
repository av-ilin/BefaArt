import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../components/sections/home/Home";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Home />} path="/" />
                <Route element={<div>Not Found</div>} path="*" />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
