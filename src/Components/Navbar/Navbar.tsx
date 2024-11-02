import React from "react";
import "./Navbar.css";

interface Props {}

const Navbar: React.FC<Props> = () => {
    return (
        <nav className="flex justify-between items-center bg-gray-800 p-4 text-white">
            <div className="flex items-center space-x-3">
                <img
                    src="https://res.cloudinary.com/ggeztrw22/image/upload/v1730534937/Library/aferpbynnxe5o9bepwps.png"
                    alt="BookNest logo"
                    className="w-20 h-20"
                />
                <span className="text-2xl font-bold">BookNest</span>
            </div>
            <ul className="flex space-x-6">
                <li><a href="/" className="hover:text-yellow-500">Home</a></li>
                <li><a href="/books" className="hover:text-yellow-500">Books</a></li>
                <li><a href="/bookshelves" className="hover:text-yellow-500">Bookshelves</a></li>
                <li><a href="/about" className="hover:text-yellow-500">About</a></li>
            </ul>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded">
                Login
            </button>
        </nav>

    );
};

export default Navbar;
