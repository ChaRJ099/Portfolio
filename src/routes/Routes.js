import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
// import Erreur404 from "../pages/404";



function RoutesPath() {
    return(
        <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    {/* <Route path="*" element={<Erreur404 />}/> */}
                </Routes>
        </BrowserRouter>
    );
}

export default RoutesPath;