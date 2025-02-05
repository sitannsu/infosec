// import Navbar from "./navbar";


// const Header = () => {
//     return (
//         <header>
//             <div className="nav-area z-10">
//                 <a href="/#" className="logo">Az Infosec</a>
//                 <Navbar />
//             </div>
//         </header>
//     );
// };

// export default Header;


// import Navbar from "./navbar";
// import { useState } from "react";

// const Header = () => {
//     const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

//     const toggleMobileMenu = () => {
//         setMobileMenuOpen((prev) => !prev);
//     };

//     return (
//         <header className="bg-white shadow-lg z-10">
//             <div className="flex flex-col items-start px-6 py-4 space-y-4">
//                 {/* Logo */}
//                 <a href="/#" className="logo text-2xl font-bold">
//                     Az Infosec
//                 </a>

//                 {/* Hamburger Button */}
//                 <button
//                     className="mobile-menu-button text-2xl md:hidden"
//                     onClick={toggleMobileMenu}
//                 >
//                     {isMobileMenuOpen ? "✖" : "☰"}
//                 </button>
//             </div>

//             {/* Navbar */}
//             <Navbar isMobileMenuOpen={isMobileMenuOpen} />
//         </header>
//     );
// };

// export default Header;



import Navbar from "./navbar";
import { useState } from "react";
import Infosec from "../../../public/img/Infosec.jpeg"

const Header = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen((prev) => !prev);
    };

    return (
        <header className="bg-white shadow-lg z-10">
            {/* Desktop: Flex layout for logo and navbar */}
            <div className="hidden md:flex items-center justify-between px-6 py-4">

                {/* Logo */}
                <a href="/aboutus" className="text-2xl font-bold">
                    {/* <div className="w-40 h-40 inline-flex items-center justify-center rounded-full  text-indigo-900 mb-4 p-4 ">
                        <img className="h-40 rounded w-full object-cover object-center mb-6" src={Infosec} alt="content" />

                    </div> */}


                    {/* <div className="w-40 h-20 inline-flex items-center justify-center rounded-full text-indigo-900 mb-4 p-4"> */}
                    <img className="h-20 w-full object-contain object-center mb-6" src={Infosec} alt="content" />
                    {/* </div> */}


                </a>

                {/* Navbar */}
                <Navbar />

            </div>

            {/* Mobile: Logo and hamburger menu */}
            <div className="md:hidden flex flex-col  px-6 py-4">
                {/* Logo */}
                <a href="/aboutus" className="text-2xl font-bold flex items-center mt-2">
                    AZ Infosec
                </a>

                {/* Hamburger Button */}
                <button
                    className="text-2xl mt-2 flex items-start"
                    onClick={toggleMobileMenu}
                >
                    {isMobileMenuOpen ? "✖" : "☰"}
                </button>

            </div>


            {/* Mobile Navbar */}
            {isMobileMenuOpen && (
                <div className="md:hidden">
                    <Navbar />
                </div>
            )}
        </header>
    );
};

export default Header;


