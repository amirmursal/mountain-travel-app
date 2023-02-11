import React from "react";
import './header.style.css';

const Header = () => {
    return (
        <header>
            <h2>
                <a href='#'>Mountain Travel</a>
            </h2>
            <nav>
                <li><a href='#'>Tour</a></li>
                <li><a href='#'>About</a></li>
                <li><a href='#'>Contact</a></li>
            </nav>
        </header>
    )
}
export default React.memo(Header);