import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Erro from "../pages/Erro";
import Links from "../pages/Links";


function RoutesApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/reactjs-encurtadorlink/" element={<Home />} />
                <Route path="/*" element={<Erro />} />
                <Route path="/Link" element={<Links />} />
            </Routes>
        </BrowserRouter>

    );
};

export default RoutesApp;
