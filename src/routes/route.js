import { HashRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Erro from "../pages/Erro";
import Links from "../pages/Links";


function RoutesApp() {
    return (
        <HashRouter>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="*" element={<Erro />} />
                <Route exact path="/Link" element={<Links />} />
            </Routes>
        </HashRouter>

    );
};

export default RoutesApp;