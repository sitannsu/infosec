// import MenuItems from "../layout/MennuItems";

import MenuItems from "./MennuItems";

// const Dropdown = ({ submenus, dropdown, depthLevel }) => {
//     depthLevel = depthLevel + 1;
//     const dropdownClass = depthLevel > 0 ? "dropdown-submenu" : "";
//     return (
//         <ul className={`dropdown ${dropdownClass} ${dropdown ? "show" : ""}`}>
//             {submenus.map((submenu, index) => (
//                 <MenuItems items={submenu} key={index} depthLevel={depthLevel} />
//             ))}
//         </ul>
//     );
// };

// export default Dropdown;


// import MenuItems from "../layout/MennuItems";

// const Dropdown = ({ submenus, dropdown, depthLevel }) => {
//     depthLevel = depthLevel + 1;
//     const dropdownClass = depthLevel > 0 ? "dropdown-submenu" : "";

//     return (
//         <ul className={`dropdown ${dropdownClass} ${dropdown ? "show" : ""}`}>
//             {submenus.map((submenu, index) => (
//                 <MenuItems items={submenu} key={index} depthLevel={depthLevel} />
//             ))}
//         </ul>
//     );
// };

// export default Dropdown;





const Dropdown = ({ submenus, dropdown, depthLevel }) => {
    return (
        <ul
            className={`dropdown ${dropdown ? "show" : ""}`}
            style={{
                marginLeft: `${depthLevel * 0}rem`,
                // Indent nested submenus further
            }}
        >
            {submenus.map((submenu, index) => (
                <li key={index}>
                    {submenu.submenu ? (
                        <MenuItems items={submenu} depthLevel={depthLevel + 1} />
                    ) : (
                        <a href={submenu.path}>{submenu.title}</a>
                    )}
                </li>
            ))}
        </ul>
    );
};

export default Dropdown;
















// import MenuItems from "../layout/MennuItems";

// const Dropdown = ({ submenus, dropdown, depthLevel }) => {
//     // Increment depthLevel to determine submenu levels
//     const adjustedDepthLevel = depthLevel + 1;
//     const dropdownClass = adjustedDepthLevel > 1 ? "dropdown-submenu" : "dropdown";

//     return (
//         <ul className={`${dropdownClass} ${dropdown ? "show" : ""}`}>
//             {submenus.map((submenu, index) => (
//                 <MenuItems
//                     items={submenu}
//                     key={index}
//                     depthLevel={adjustedDepthLevel}
//                 />
//             ))}
//         </ul>
//     );
// };

// export default Dropdown;
