import React from "react";
import "./footer.style.css";

const Footer = () => {
    return (
        <footer>
            <p>Images courtesy of <a href="http://unsplash.com/">unsplash</a>.</p>
            <p>Why are you even reading this?! There's never anything interesting in the footer!</p>
            <ul>
                <li>
                    <a href="#">
                        <i className="fa fa-twitter-square fa-2x"></i>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i className="fa fa-facebook-square fa-2x"></i>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i className="fa fa-instagram fa-2x"></i>
                    </a>
                </li>
            </ul>
        </footer>
    )
}

export default React.memo(Footer);