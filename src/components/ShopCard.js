import React from "react";
import Button from "../utils/Button"

const ShopCard = ({ id, title, price, image, product, addToCart }) => {
    // const product = { id, title, price, image, category }

    const handleAdd = () => {
        addToCart(product);
    }

    return(
        <div className="card-wrapper">
            <div className="img-container">
                <img src={image} alt={title}/> 
            </div>
            <div className="info-wrapper">
                <div className="details">
                    <div className="product-title">{title}</div>
                    <div>${price.toFixed(2)}</div>
                </div>

                <Button className="buy-Btn" onClick={handleAdd} content="Add to Cart"/>
            </div>
        </div>
    )
}

export default ShopCard;