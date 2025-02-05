// import { useEffect, useRef, useState } from "react";
// import Dropdown from "./Dropdown";

// const MenuItems = ({ items, depthLevel }) => {
//     const [dropdown, setDropdown] = useState(false);
//     const ref = useRef();

//     useEffect(() => {
//         const handler = (event) => {
//             if (dropdown && ref.current && !ref.current.contains(event.target)) {
//                 setDropdown(false);
//             }
//         };
//         document.addEventListener("mousedown", handler);
//         document.addEventListener("touchstart", handler);
//         return () => {
//             document.removeEventListener("mousedown", handler);
//             document.removeEventListener("touchstart", handler);
//         };
//     }, [dropdown]);

//     const toggleDropdown = () => setDropdown((prev) => !prev);

//     const onMouseEnter = () => {
//         if (depthLevel === 0) {
//             setDropdown(true);
//         }
//     };

//     const onMouseLeave = () => {
//         if (depthLevel === 0) {
//             setDropdown(false);
//         }
//     };

//     return (
//         <li
//             className={`menu-items ${dropdown ? "show" : ""}`}
//             ref={ref}
//             onMouseEnter={onMouseEnter}
//             onMouseLeave={onMouseLeave}
//         >
//             {items.submenu ? (
//                 <>
//                     <button
//                         type="button"
//                         aria-haspopup="menu"
//                         aria-expanded={dropdown ? "true" : "false"}
//                         onClick={toggleDropdown}
//                     >
//                         {items.title}{" "}
//                         {depthLevel > 0 ? (
//                             <span className="arrow">&raquo;</span>
//                         ) : (
//                             <span className="arrow"></span>
//                         )}
//                     </button>
//                     <Dropdown
//                         submenus={items.submenu}
//                         dropdown={dropdown}
//                         depthLevel={depthLevel}
//                     />
//                 </>
//             ) : (
//                 <a href={items.path || `/${items.title.toLowerCase().replace(/\s+/g, "")}`}>
//                     {items.title}
//                 </a>
//             )}
//         </li>
//     );
// };

// export default MenuItems;


// import { useState, useEffect, useRef } from "react";
// import Dropdown from "./Dropdown";

// const MenuItems = ({ items, depthLevel }) => {
//     const [dropdown, setDropdown] = useState(false);
//     const [childDropdown, setChildDropdown] = useState(false); // For nested dropdowns
//     const ref = useRef();

//     useEffect(() => {
//         const handler = (event) => {
//             if (dropdown && ref.current && !ref.current.contains(event.target)) {
//                 setDropdown(false);
//             }
//         };

//         document.addEventListener("mousedown", handler);
//         document.addEventListener("touchstart", handler);

//         return () => {
//             document.removeEventListener("mousedown", handler);
//             document.removeEventListener("touchstart", handler);
//         };
//     }, [dropdown]);

//     const toggleDropdown = () => {
//         setDropdown((prev) => !prev);
//     };

//     const toggleChildDropdown = () => {
//         setChildDropdown((prev) => !prev);
//     };

//     const onMouseEnter = () => {
//         if (window.innerWidth > 768 && depthLevel === 0) {
//             setDropdown(true);
//         }
//     };

//     const onMouseLeave = () => {
//         if (window.innerWidth > 768 && depthLevel === 0) {
//             setDropdown(false);
//         }
//     };

//     return (
//         <li
//             className="menu-items"
//             ref={ref}
//             onMouseEnter={onMouseEnter}
//             onMouseLeave={onMouseLeave}
//         >
//             {items.submenu ? (
//                 <>
//                     <button
//                         type="button"
//                         aria-haspopup="menu"
//                         aria-expanded={dropdown ? "true" : "false"}
//                         onClick={toggleDropdown}
//                     >
//                         {items.title}
//                     </button>
//                     {/* Mobile Dropdown Menu */}
//                     {dropdown && (
//                         <Dropdown
//                             submenus={items.submenu}
//                             dropdown={dropdown}
//                             depthLevel={depthLevel}
//                         />
//                     )}
//                     {/* Handle Nested Submenus */}
//                     {depthLevel > 0 && childDropdown && (
//                         <Dropdown
//                             submenus={items.submenu}
//                             dropdown={childDropdown}
//                             depthLevel={depthLevel + 1} // For deeper levels
//                         />
//                     )}
//                 </>
//             ) : (
//                 <a href={items.path || `/${items.title.toLowerCase().replace(/\s+/g, "")}`}>
//                     {items.title}
//                 </a>
//             )}
//         </li>
//     );
// };

// export default MenuItems;



// import { useState, useEffect, useRef } from "react";
// import Dropdown from "./Dropdown";

// const MenuItems = ({ items, depthLevel = 0 }) => {
//     const [dropdown, setDropdown] = useState(false);
//     const [childDropdown, setChildDropdown] = useState(false); // For nested dropdowns
//     const ref = useRef();

//     useEffect(() => {
//         const handler = (event) => {
//             if (dropdown && ref.current && !ref.current.contains(event.target)) {
//                 setDropdown(false);
//             }
//         };

//         document.addEventListener("mousedown", handler);
//         document.addEventListener("touchstart", handler);

//         return () => {
//             document.removeEventListener("mousedown", handler);
//             document.removeEventListener("touchstart", handler);
//         };
//     }, [dropdown]);

//     const toggleDropdown = () => {
//         setDropdown((prev) => !prev);
//     };

//     const toggleChildDropdown = () => {
//         setChildDropdown((prev) => !prev);
//     };

//     const onMouseEnter = () => {
//         if (window.innerWidth > 768 && depthLevel === 0) {
//             setDropdown(true);
//         }
//     };

//     const onMouseLeave = () => {
//         if (window.innerWidth > 768 && depthLevel === 0) {
//             setDropdown(false);
//         }
//     };

//     return (
//         <li
//             className="menu-items"
//             ref={ref}
//             onMouseEnter={onMouseEnter}
//             onMouseLeave={onMouseLeave}
//         >
//             {items.submenu ? (
//                 <>
//                     <button
//                         type="button"
//                         aria-haspopup="menu"
//                         aria-expanded={dropdown ? "true" : "false"}
//                         onClick={toggleDropdown}
//                     >
//                         {items.title}
//                     </button>

//                     {/* Mobile Dropdown Menu */}
//                     {dropdown && (
//                         <Dropdown
//                             submenus={items.submenu}
//                             dropdown={dropdown}
//                             depthLevel={depthLevel}
//                         />
//                     )}

//                     {/* Nested dropdowns for submenus */}
//                     {depthLevel > 0 && childDropdown && (
//                         <Dropdown
//                             submenus={items.submenu}
//                             dropdown={childDropdown}
//                             depthLevel={depthLevel + 1} // For deeper levels
//                         />
//                     )}
//                 </>
//             ) : (
//                 <a href={items.path || `/${items.title.toLowerCase().replace(/\s+/g, "")}`}>
//                     {items.title}
//                 </a>
//             )}
//         </li>
//     );
// };

// export default MenuItems;



// import { useState, useEffect, useRef } from "react";
// import Dropdown from "./Dropdown";

// const MenuItems = ({ items, depthLevel = 0 }) => {
//     const [dropdown, setDropdown] = useState(false);
//     const [childDropdown, setChildDropdown] = useState(false); // For nested dropdowns
//     const ref = useRef();

//     useEffect(() => {
//         const handler = (event) => {
//             if (dropdown && ref.current && !ref.current.contains(event.target)) {
//                 setDropdown(false);
//             }
//         };

//         document.addEventListener("mousedown", handler);
//         document.addEventListener("touchstart", handler);

//         return () => {
//             document.removeEventListener("mousedown", handler);
//             document.removeEventListener("touchstart", handler);
//         };
//     }, [dropdown]);

//     const toggleDropdown = () => {
//         setDropdown((prev) => !prev);
//     };

//     const toggleChildDropdown = () => {
//         setChildDropdown((prev) => !prev);
//     };

//     const onMouseEnter = () => {
//         if (window.innerWidth > 768 && depthLevel === 0) {
//             setDropdown(true);
//         }
//     };

//     const onMouseLeave = () => {
//         if (window.innerWidth > 768 && depthLevel === 0) {
//             setDropdown(false);
//         }
//     };

//     return (
//         <li
//             className="menu-items"
//             ref={ref}
//             onMouseEnter={onMouseEnter}
//             onMouseLeave={onMouseLeave}
//         >
//             {items.submenu ? (
//                 <>
//                     <button
//                         type="button"
//                         aria-haspopup="menu"
//                         aria-expanded={dropdown ? "true" : "false"}
//                         onClick={toggleDropdown}
//                         className="flex items-center "
//                     >
//                         {items.title}
//                         <span
//                             className={`ml-2 transform transition-transform duration-300 ${dropdown ? "rotate-180" : ""
//                                 }`}
//                         >
//                             ▼ {/* This can be changed to an SVG or icon component */}
//                         </span>
//                     </button>

//                     {/* Mobile Dropdown Menu */}
//                     {dropdown && (
//                         <Dropdown
//                             submenus={items.submenu}
//                             dropdown={dropdown}
//                             depthLevel={depthLevel}
//                         />
//                     )}

//                     {/* Nested dropdowns for submenus */}
//                     {depthLevel > 0 && childDropdown && (
//                         <Dropdown
//                             submenus={items.submenu}
//                             dropdown={childDropdown}
//                             depthLevel={depthLevel + 1} // For deeper levels
//                         />
//                     )}
//                 </>
//             ) : (
//                 <a href={items.path || `/${items.title.toLowerCase().replace(/\s+/g, "")}`}>
//                     {items.title}
//                 </a>
//             )}
//         </li>
//     );
// };

// export default MenuItems;


import React, { useState } from "react";
import { Link } from "react-router-dom";
import { links } from "./menuItemsData";
import { ArrowDownIcon, ArrowLeftIcon } from "@heroicons/react/24/solid";

const NavLinks = () => {
    const [heading, setHeading] = useState("");
    const [subHeading, setSubHeading] = useState("");
    return (
        <>
            {links.map((link) => (
                <div>
                    <div className="px-3 text-left md:cursor-pointer group z-10">
                        <h1
                            className="py-7 flex justify-between items-center md:pr-0 pr-5 group z-10"
                            onClick={() => {
                                heading !== link.name ? setHeading(link.name) : setHeading("");
                                setSubHeading("");
                            }}
                        >
                            {link.name}
                            <span className="text-4xl md:hidden inline">
                                <ion-icon
                                    name={`${heading === link.name ? "chevron-up" : "chevron-down"
                                        }`}
                                ></ion-icon>

                            </span>
                            <span className="text-4xl font-bold md:mt-1 md:ml-2  md:block hidden group-hover:rotate-180 group-hover:-mt-2">
                                <ion-icon name="chevron-down"></ion-icon>
                            </span>
                        </h1>
                        {link.submenu && (
                            <div>
                                <div className="absolute top-20 hidden group-hover:md:block hover:md:block z-10">
                                    <div className="py-3">
                                        <div
                                            className="w-4 h-4 left-3 absolute 
                    mt-1 bg-gray-100 rotate-45"
                                        ></div>
                                    </div>

                                    <div className="bg-gray-200 shadow-lg px-6 py-2 grid gap-6 md:grid-cols-2 lg:grid-cols-2 ">
                                        {link.sublinks.map((mysublinks) => (
                                            <div key={mysublinks.Head}>
                                                <h1 className="text-xl font-lato font-bold">{mysublinks.Head}</h1>
                                                <ul>
                                                    {mysublinks.sublink.map((slink, index) => (
                                                        <li
                                                            key={index}
                                                            className="text-sm  font-bold text-gray-800 my-2.5"
                                                        >
                                                            <Link
                                                                to={slink.link}
                                                                className="hover:text-white hover:bg-purple-600"
                                                            >
                                                                {slink.name}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>

                                </div>
                            </div>
                        )}
                    </div>
                    {/* Mobile menus */}
                    <div
                        className={`
            ${heading === link.name ? "md:hidden" : "hidden"}
          `}
                    >
                        {/* sublinks */}
                        {link.sublinks.map((slinks) => (
                            <div>
                                <div>
                                    <h1
                                        onClick={() =>
                                            subHeading !== slinks.Head
                                                ? setSubHeading(slinks.Head)
                                                : setSubHeading("")
                                        }
                                        className="py-4 pl-7 font-semibold md:pr-0 pr-5 flex justify-between items-center md:pr-0 pr-5"
                                    >
                                        {slinks.Head}

                                        <span className="text-xl md:mt-1 md:ml-2 inline">
                                            <ion-icon
                                                name={`${subHeading === slinks.Head
                                                    ? "chevron-up"
                                                    : "chevron-down"
                                                    }`}
                                            ></ion-icon>
                                        </span>
                                    </h1>
                                    <div
                                        className={`${subHeading === slinks.Head ? "md:hidden" : "hidden"
                                            }`}
                                    >
                                        {slinks.sublink.map((slink) => (
                                            <li className="py-3 pl-14">
                                                <Link to={slink.link}>{slink.name}</Link>
                                            </li>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </>
    );
};

export default NavLinks;



