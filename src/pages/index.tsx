import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import React from "react";
import Home from "./Home";
import Products from "./Products";
import About from "./About";
import ContactPage from "./Contact";
import ProductA from "./ProductA";
import ProductB from "./ProductB";
import ProductC from "./ProductC";
import ThanksPage from "./ThanksPage";


function index() {
    return(
        <div className="index">
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Products" element={<Products />} />
                    <Route path="/About" element={<About />} />
                    <Route path="/Contact" element={<ContactPage />} />
                    <Route path="/ThanksPage" element={<ThanksPage />} />
                    <Route path="/ProductA" element={<ProductA />} />
                    <Route path="/ProductB" element={<ProductB />} />
                    <Route path="/ProductC" element={<ProductC />} />
                </Routes>
            </Router>
        </div>
    )
}

export default index;