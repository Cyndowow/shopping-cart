import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return(
        <div className="home">
            <div className="home-img">
            <img src="https://images.pexels.com/photos/210644/pexels-photo-210644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Woman in White Button Up Top and Holding Black Android Smartphone" />
                <p>Img src: https://www.pexels.com/photo/woman-in-white-button-up-top-and-holding-black-android-smartphone-210644 </p>
            </div>
            <div className="home-info">
                <Link to="/shop"><button type="button">Shop now</button></Link>
            </div>
        </div>
    )
}

export default Home;
