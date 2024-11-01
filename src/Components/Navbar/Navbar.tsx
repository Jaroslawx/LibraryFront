import React from "react";
import "./Navbar.css";

interface Props {}

const Navbar: React.FC<Props> = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">BookNest</div>
            <ul className="navbar-links">
                <li><a href="/">Home</a></li>
                <li><a href="/books">Books</a></li>
                <li><a href="/bookshelves">Bookshelves</a></li>
                <li><a href="/about">About</a></li>
            </ul>
            <div className="navbar-login">
                <button>Login</button>
            </div>
        </nav>
    );
};

export default Navbar;
