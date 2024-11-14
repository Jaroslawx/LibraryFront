import React from "react";
import "./Navbar.css";
import {Link} from "react-router-dom";

interface Props {}

const Navbar: React.FC<Props> = () => {
    return (
        <nav className="flex justify-between items-center bg-gray-800 p-4 text-white">
            <Link to="/" className="flex items-center space-x-3">
                <img
                    src="https://res.cloudinary.com/ggeztrw22/image/upload/v1730534937/Library/aferpbynnxe5o9bepwps.png"
                    alt="BookNest logo"
                    className="w-20 h-20"
                />
                <span className="text-2xl font-bold">BookNest</span>
            </Link>
            <ul className="flex space-x-6">
                <li><Link to="/search" className="hover:text-yellow-500">Search</Link></li>
                <li><a href="/bookshelf" className="hover:text-yellow-500">Bookshelf</a></li>
            </ul>
            <div className="flex space-x-4">
                <button
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transform hover:scale-105 transition duration-200">
                    Sign In
                </button>
                <button
                    className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transform hover:scale-105 transition duration-200">
                    Sign Up
                </button>
            </div>
        </nav>

    );
};

export default Navbar;
