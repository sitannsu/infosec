
import React from "react";
import { Link } from "react-router-dom";

const ButtonNav = () => {
    return (
        <button className="bg-white  hover:bg-[#0FFCBE] px-4 py-2 rounded-lg md:px-6 md:py-2">
            <Link to="/contactus" className="text-blue-900 hover:text-black  text-sm font-bold md:text-base">
                Let's Talk
            </Link>
        </button>
    );
};

export default ButtonNav;
