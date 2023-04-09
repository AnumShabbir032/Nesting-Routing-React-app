import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    
} from "react-router-dom";

import Home from "../screens/Home.jsx"
// import FullMenu from "../screen/FullMenu";
import About from "../screens/About.jsx";
import Family from "../screens/Family.jsx";
import OurApp from "../screens/OurApp.jsx";
import RightToKnow from "../screens/RightToKnow.jsx";
import Trending from "../screens/Trending.jsx";
import PageNotFound from "../screens/PageNotFound.jsx"

export default function RouterApp(){
    return (
        <Router>
            <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="fullmenu/*" element={<FullMenu />} /> */}
            <Route path="about" element={<About />} />
            <Route path="family" element={<Family />} />
            <Route path="ourapp" element={<OurApp />} />
            <Route path="righttoknow" element={<RightToKnow />} />
            <Route path="trending" element={<Trending />} />
            <Route path="*" element={<PageNotFound />} />

            </Routes>
        </Router>
    );
}
