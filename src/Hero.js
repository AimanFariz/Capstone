import React from "react";
import {Link} from 'react-router-dom';
import bannerImg from '../src/assets/restauranfood.jpg';
const Hero = () =>{
    return(
        <header className="header">
            <section>
                <div className="banner">
                    <h2>Little Lemon</h2>
                    <h3>Tulsa</h3>
                    <p>We are a family-owned restaurant. We serve good food. Come check us out lol</p>
                    <Link to="/booking"><button aria-label="On Click">Reserve Table</button></Link>
                </div>

                <div className="banner-img">
                    <img src={bannerImg}></img>
                </div>
            </section>
        </header>
    );
};

export default Hero;