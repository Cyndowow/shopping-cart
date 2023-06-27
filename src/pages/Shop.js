import React, {useEffect, useState} from "react";
import uniqid from "uniqid";
import ShopCard from "../components/ShopCard"



const Shop = ({ addToCart }) => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        loadProducts();
    },[])
    

    const loadProducts = async () => {
        setProducts(filterProducts(await fetchProducts()))
        console.log(products)
    }

    const fetchProducts = async () => {
        const response = await fetch("https://fakestoreapi.com/products");
        let data = await response.json();
        return data;
    }

    const filterProducts = (products) => {
        return products.filter(
          (product) => 
            product.category === `jewelery` ||
            product.category === `electronics`
          )
    }

    const handleAdd = (product) => {
        addToCart(product)
    }

    const productCards = products.map((product) => (
        <ShopCard 
            key={uniqid()}
            id={product.id}
            title={product.title}
            price={product.price}
            image={product.image}
            product={product}
            addToCart={handleAdd}
        />
    ));

    return(
        <div className="product-wrapper">
            {productCards}
        </div>
    )

}

export default Shop;