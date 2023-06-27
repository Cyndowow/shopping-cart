import React from "react";
import { Link } from "react-router-dom";
//TODO: functions, routing

const Header = ({ cartItemsQty }) => {
    return(
        <header>
            <Link to="/">
                <h1 className="title">Don't buy Shop</h1>
            </Link>
            <nav className="nav">
                <Link to="/">Home</Link> 
                <Link to="/shop">Shop</Link>
                <div className="button-container">
                    <Link to="/cart" className="cart-btn">Cart</Link>
                    <span className="cart-num"> [{cartItemsQty}]</span>
                </div>
            </nav>
        </header>
    )
}

export default Header;