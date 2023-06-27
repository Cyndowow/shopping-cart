import React, {useState} from "react";
import Header from "./components/Header"
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./components/Cart"
import {Route, Routes} from "react-router-dom"


const Main = () => {

    const [cartItems, setCartItems] = useState([]);
    
    const addCartItem = (newItem) => {
        const alreadyInCart = cartItems.map((cItem) => cItem.id).includes(newItem.id)
        if(alreadyInCart) {
            changeQty(newItem.id, 1);
        } else {
            setCartItems([...cartItems, newItem])
        }
    }

    const deleteCartItem = (id) => {
        setCartItems(cartItems.filter((item) => item.id !== id))
    }

    const changeQty = (id, delta) => {
        setCartItems(
            cartItems.map(
                (item) => (item.id === id ? {...item, quantity: item.quantity + delta} : item)
            )
        )
    }

    const cartItemQty = cartItems.reduce((acc, cur) => acc + cur.quantity, 0)

    return(
        <div className="main">
            <Header cartItemsQty={cartItemQty} />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/shop" element={<Shop addToCart={addCartItem}/>} />
                <Route path="/cart" element={<Cart items={cartItems} deleteCartItem={deleteCartItem} changeQty={changeQty}/>} />
            </Routes>

        </div>        
    )
}

export default Main;