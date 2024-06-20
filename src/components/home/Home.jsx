import React from 'react';
import "./home.css"; 
import Me from "../../assets/avatar-1.svg"
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';
const Home = () => {

    return(

        <section className="home container">
            <div className="intro">
                <img src={Me} alt="" className="home__img" />
                <h1 className="home__name">Carlos Flores</h1>
                <span className="home__education">I'm an IT major with a UX minor.</span>
                
                <HeaderSocials />
            
                <a href="#contact" className="btn"> Lets Chat!</a>

                <ScrollDown />
            </div>
        </section>
    );
};

export default Home;