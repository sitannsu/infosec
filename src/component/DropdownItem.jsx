// import { Link } from "react-router-dom";

// const DropdownItem = ({ to, label, hoveredItem, handleMouseEnter, handleMouseLeave, subItems }) => (
//     <li
//         className="cursor-pointer hover:text-purple-500 w-[200px]"
//         onMouseEnter={() => handleMouseEnter(label)}
//         onMouseLeave={handleMouseLeave}
//     >
//         <Link to={to}>{label}</Link>
//         {hoveredItem === label && subItems && (
//             <ul className="ml-4 mt-2 space-y-2 text-gray-500 w-[200px]">
//                 {subItems.map((item, index) => (
//                     <li key={index}>{item}</li>
//                 ))}
//             </ul>
//         )}
//     </li>
// );

// export default DropdownItem;


const DropdownItem = ({ label, link, subItems, hoveredItem, handleMouseEnter, handleMouseLeave }) => (
    <li
        className="cursor-pointer hover:text-purple-500 w-[200px]"
        onMouseEnter={() => handleMouseEnter(label)}
        onMouseLeave={handleMouseLeave}
    >
        <Link to={link} className="">
            {label}
        </Link>
        {hoveredItem === label && subItems && (
            <ul className="ml-4 mt-2 space-y-2 text-gray-500 w-[200px]">
                {subItems.map((subItem, index) => (
                    <li key={index}>{subItem}</li>
                ))}
            </ul>
        )}
    </li>
);
