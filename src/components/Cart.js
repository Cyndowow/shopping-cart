import React from "react";
import uniqid from "uniqid";
import CartItemCard from "./CartItem";
import Button from "../utils/Button";



const Cart = ({ items, deleteCartItem, changeQty }) => {
    
    const updateQuantity = async (productId, quantity) => {
        const currentCart = cart;

        if(currentCart.quantity === 0) {
            setCart(currentCart.filter((item) => item.id) !== productId)
        } else {
            const product = currentCart.find((item) => item.id === productId);
            product.quantity = quantity;
            currentCart.map((item) => (item.id === productId ? product : null));
            setCart(currentCart)
        }
    }
    
    const sumTotal = items.map((item) => item.price * item.quantity).reduce((a, c) => a + c, 0).toFixed(2)
    

    const CartItems = items.map((cartItem) => (
        <CartItemCard 
            key={uniqid()}
            id={cartItem.id}
            title={cartItem.title}
            price={cartItem.price}
            image={cartItem.image}
            quantity={cartItem.quantity}
            changeQty={changeQty}
            deleteCartItem={deleteCartItem}
        />
    ))

    return(
        <>
        <div className="cart-wrapper">
            <div className="cart-title">Your shopping cart!</div>
            {items.length > 0 ? (
                <div className="cart-card-container">
                    <div className="cart-products">{CartItems}</div>
                    <div className="cart-total">Total: ${sumTotal}</div>
                    <Button 
                        content="Checkout"
                        className="cart-checkout-btn"
                    />
                </div>
                ) : (
                    <div className="empty-cart">
                        <h2 className="empty-cart-text">Your cart is empty</h2>
                    </div>    
                    )
                }
        </div>
        </>
    )
}



export default Cart;
