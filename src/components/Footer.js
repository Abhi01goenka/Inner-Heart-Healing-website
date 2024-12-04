import React from "react";
import { IconBrandInstagram, IconBrandFacebook } from "@tabler/icons-react";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-4">
            <div className="container mx-auto px-4 flex justify-between items-center">
                {/* Copyright Text */}
                <p className="text-sm">
                    © {new Date().getFullYear()} The Inner Heart Healing Centre - All Rights Reserved.
                </p>

                {/* Social Media Icons */}
                <div className="flex space-x-4">
                    <a
                        href="https://www.instagram.com/theinnerhearthealingcentre/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-pink-500"
                    >
                        <IconBrandInstagram size={24} />
                    </a>
                    <a
                        href="https://www.facebook.com/theInnerHeartHealing/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-500"
                    >
                        <IconBrandFacebook size={24} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
