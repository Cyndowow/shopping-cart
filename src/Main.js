import React from "react";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./components/Cart"
import {Route, Routes} from "react-router-dom"


const Main = () => {
    return(
        <div className="main">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>

        </div>        
    )
}

export default Main;