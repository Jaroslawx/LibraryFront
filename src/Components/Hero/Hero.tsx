import React from "react";
import {Link} from "react-router-dom";
import {FaBook, FaRocket} from "react-icons/fa";

interface Props {}

const Hero = (props: Props) => {
    return (
        <div
            className="bg-cover bg-center h-screen text-white flex flex-col justify-center items-center relative"
            style={{ backgroundImage: 'url("")' }}
        >
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <h1 className="text-5xl font-bold mb-4 animate__animated animate__fadeIn">Welcome to BookNest</h1>
            <p className="text-lg mb-8 text-center max-w-lg animate__animated animate__fadeIn animate__delay-1s">
                Discover, explore, and manage your favorite books all in one place. BookNest is your personal library in the cloud.
            </p>
            <div className="flex space-x-4 animate__animated animate__fadeIn animate__delay-2s">
                <Link
                    to='/search'
                    className="bg-yellow-500 hover:bg-yellow-600 text-white py-3 px-6 rounded-lg text-lg flex items-center space-x-2 transform hover:scale-105 transition duration-200"
                >
                    <FaBook className="text-xl" />
                    <span>Browse Books</span>
                </Link>
                <a
                    href="/signup"
                    className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg text-lg flex items-center space-x-2 transform hover:scale-105 transition duration-200"
                >
                    <FaRocket className="text-xl" />
                    <span>Get Started</span>
                </a>
            </div>
        </div>
    );
};

export default Hero; 