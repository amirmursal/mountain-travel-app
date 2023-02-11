import React from "react";
import "./hero.style.css";

const Hero = () => {
    return (
        <section className="hero">
            <div className="background-image"></div>
            <div className="hero-content-area">
                <h1>Mountain Travel</h1>
                <h3>Unmissable Adventures Tours Around The World</h3>
                <a href="#" className="btn">Contact Us Now</a>
            </div>

        </section>
    )
}

export default React.memo(Hero);