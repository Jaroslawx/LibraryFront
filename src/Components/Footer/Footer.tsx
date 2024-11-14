import React from "react";
import {FaFacebook, FaGithub, FaInstagram, FaLinkedin} from "react-icons/fa";
import {FaXTwitter} from "react-icons/fa6";

interface Props {}

const Footer = (props: Props) => {
    return (
        <footer className="bg-gray-800 text-white py-6">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center">
                    {/* Footer Content */}
                    <div className="text-center text-sm">
                        <p>&copy; {new Date().getFullYear()} BookNest. All rights reserved.</p>
                    </div>

                    {/* Social Media Icons */}
                    <div className="flex space-x-6">
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer"
                           className="text-gray-400 hover:text-white">
                            <FaGithub className="text-2xl"/>
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                           className="text-gray-400 hover:text-white">
                            <FaXTwitter className="text-2xl"/>
                        </a>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                           className="text-gray-400 hover:text-white">
                            <FaFacebook className="text-2xl"/>
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                           className="text-gray-400 hover:text-white">
                            <FaInstagram className="text-2xl"/>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
