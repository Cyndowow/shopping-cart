import React from "react";
import { Link } from "react-router-dom";

//TODO: find usable picture without copyright

const Home = () => {
    return(
        <div className="home">
            <div className="home-img">
            <img src="https://cdn.shopify.com/s/files/1/0590/6730/2066/files/illustrator.jpg?v=1678271032" alt="Image of futuristic keyboard" />
            </div>
            <div className="home-info">
                <p>Please check out the actual creators at </p>
                <Link to="/shop"><button type="button">Shop now</button></Link>
            </div>
        </div>
    )
}

export default Home;