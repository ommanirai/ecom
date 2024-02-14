import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Component/Pages/Home.component";
import Navbar from "./Component/Common/Navbar.component";
import Footer from "./Component/Common/Footer.component";
import Count from "./Component/Pages/Count.component";
import Product from "./Component/Pages/Product.component";
import { Cart } from "./Component/Pages/Cart.component";

export const MyRoute = (props) => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" Component={Home} />
                {/* <Route path="/count" Component={<Count />} /> */}
                <Route path="/product" Component={Product} />
                <Route path="/cart" Component={Cart} />
            </Routes>
            <Footer />
        </Router>
    )
}