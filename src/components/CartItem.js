import React from "react";
import Button from "../utils/Button";


const CartItemCard = ({ id, title, price, image, quantity, changeQty, deleteCartItem }) => {
    const cartItem = { id, title, price, image, quantity };

    const handleDelete = () => deleteCartItem(id);
    

    const sumPrice = () => {
        return (cartItem.price * cartItem.quantity).toFixed(2);
    }

    const decrementQuant = () => changeQty(id, -1)

    const incrementQuant = () => changeQty(id, 1)

    return(
        <div className="cart-item-wrapper">
            <div className="cart-img-container">
                <img src={image} alt={title} />
            </div>
            <div className="cart-info-wrapper">
                <div className="cart-card-title">{title}</div>
                <div>${sumPrice()}</div>
                <div className="amount-changer">
                    <Button className={"amount-plus"} onClick={incrementQuant} content="+"/>
                    <div>{cartItem.quantity}</div>
                    <Button className={"amount-minus"} onClick={decrementQuant} content="-"/>
                </div>
                <Button className={"cart-delete-item"} onClick={handleDelete} content="Delete" />
            </div>
        </div>
    )
}

export default CartItemCard;