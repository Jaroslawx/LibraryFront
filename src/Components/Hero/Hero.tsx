import React from "react";
import {Link} from "react-router-dom";

interface Props {}

const Hero = (props: Props) => {
    return (
        <div className="bg-cover bg-center h-screen text-white flex flex-col justify-center items-center" style={{ backgroundImage: 'url("")' }}>
            <h1 className="text-5xl font-bold mb-4">Welcome to BookNest</h1>
            <p className="text-lg mb-8 text-center max-w-lg">
                Discover, explore, and manage your favorite books all in one place. BookNest is your personal library in the cloud.
            </p>
            <div className="flex space-x-4">
                <Link to='/search' className="bg-yellow-500 hover:bg-yellow-600 text-white py-3 px-6 rounded-lg text-lg transform hover:scale-105 transition duration-200">
                    Browse Books
                </Link>
                <a href="/signup" className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg text-lg transform hover:scale-105 transition duration-200">
                    Get Started
                </a>
            </div>
        </div>
    );
};

export default Hero; 