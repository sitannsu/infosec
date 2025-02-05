// export const menuItemsData = [
// {
//     title: "Home", path: "/"
// },
//     {
//         title: "About Us",

//     },
//     {
//         title: "Services",
//         submenu: [
//             {
//                 title: "Compliance",
//                 submenu: [
//                     { title: "Global Security Compliance", path: "/globalsecurity" },
//                     { title: "Regional Security Compliance", path: "/regionalsecurity" },
//                     { title: "Privacy Compliance", path: "/privacycompliance" },
//                     { title: "Business Conituity and Disaster Recovery", path: "/businesscontinuity" },
//                 ],
//             },
//             {
//                 title: "Governance & Risk",
//                 submenu: [
//                     { title: "Security Architecture Review", path: "/governancepage" },
//                     { title: "Governance Framework Development", path: "/pcdss" },
//                     { title: "Security Policy and Strategy Development", path: "/pcpin" },
//                     { title: "Metrics and Reporting", path: "/pcdss" },



//                 ],
//             },
//             {
//                 title: "Talent Services",
//                 submenu: [
//                     { title: "Virtual/Shared CISO as a Service", path: "/pcpin" },
//                     { title: "Governance Framework Development", path: "/pcdss" },
//                 ],
//             },
//             {
//                 title: "Management",
//                 submenu: [
//                     { title: "Network Arcitecture Review (N)", path: "/pcdss" },
//                     { title: "Network Arcitecture Review (N)", path: "/pcpin" },
//                     { title: "Vulnerability Remediation Guidance", path: "/pcdss" },
//                     { title: "Attack Surface Analysis" },
//                 ],
//             },
//         ],
//     },
//     {
//         title: "Industry Support",
//         submenu: [
//             { title: "Create a Website" },
//             { title: "Contact Us" },
//         ],
//     },
//     {
//         title: "Blogs",
//         submenu: [
//             { title: "Create a Website" },
//             { title: "Contact Us" },
//         ],
//     },

// ];


// Shopping navbar--------------------------------------------------------------------------



export const links = [
    {
        name: "Services",
        submenu: true,
        sublinks: [
            {
                Head: "Compliance",
                sublink: [
                    { name: "Global Security Compliance", link: "/globalsecurity" },
                    { name: "Regional Security Compliance", link: "/regionalsecurity" },
                    { name: "Privacy Compliance", link: "/privacycompliance" },
                    { name: "Business Conituity and Disaster Recovery", link: "/businesscontinuity" },
                    // { name: "formal shirts", link: "/" },
                ],
            },
            {
                Head: "Compliance",
                sublink: [
                    { name: "Global Security Compliance", link: "/globalsecurity" },
                    { name: "Regional Security Compliance", link: "/regionalsecurity" },
                    { name: "Privacy Compliance", link: "/privacycompliance" },
                    { name: "Business Conituity and Disaster Recovery", link: "/regionalsecurity" },
                    // { name: "formal shirts", link: "/" },
                ],
            },
            // {
            //     Head: "Compliance",
            //     sublink: [
            //         { name: "Global Security Compliance", link: "/globalsecurity" },
            //         { name: "Regional Security Compliance", link: "/regionalsecurity" },
            //         { name: "Privacy Compliance", link: "/privacycompliance" },
            //         { name: "Business Conituity and Disaster Recovery", link: "/businesscontinuity" },
            //         // { name: "formal shirts", link: "/" },
            //     ],
            // },

            // {
            //     Head: "sleepwear",
            //     sublink: [
            //         { name: "T-shirt", link: "/" },
            //         { name: "Casual shirts", link: "/" },
            //         { name: "formal shirts", link: "/" },
            //         { name: "formal shirts", link: "/" },
            //         { name: "formal shirts", link: "/" },
            //     ],
            // },
            // {
            //     Head: "footwear",
            //     sublink: [
            //         { name: "T-shirt", link: "/" },
            //         { name: "Casual shirts", link: "/" },
            //         { name: "formal shirts", link: "/" },
            //         { name: "formal shirts", link: "/" },
            //         { name: "formal shirts", link: "/" },
            //     ],
            // },
        ],
    },
    {
        name: "Industry Support",
        submenu: true,
        sublinks: [
            {
                Head: "Compliance",
                sublink: [
                    {
                        name: "Global Security Compliance", link: "/globalsecurity",
                        submenu: [
                            { name: "PCI", link: "/" }
                        ],
                    },
                    { name: "Regional Security Compliance", link: "/regionalsecurity" },
                    { name: "Privacy Compliance", link: "/privacycompliance" },
                    { name: "Business Conituity and Disaster Recovery", link: "/businesscontinuity" },
                    // { name: "formal shirts", link: "/" },
                ],
            },
            {
                Head: "Compliance",
                sublink: [
                    { name: "Global Security Compliance", link: "/globalsecurity" },
                    { name: "Regional Security Compliance", link: "/regionalsecurity" },
                    { name: "Privacy Compliance", link: "/privacycompliance" },
                    { name: "Business Conituity and Disaster Recovery", link: "/businesscontinuity" },
                    // { name: "formal shirts", link: "/" },
                ],
            },
            // {
            //     Head: "Compliance",
            //     sublink: [
            //         { name: "Global Security Compliance", link: "/globalsecurity" },
            //         { name: "Regional Security Compliance", link: "/regionalsecurity" },
            //         { name: "Privacy Compliance", link: "/privacycompliance" },
            //         { name: "Business Conituity and Disaster Recovery", link: "/businesscontinuity" },
            //         // { name: "formal shirts", link: "/" },
            //     ],
            // },

            // {
            //     Head: "Compliance",
            //     sublink: [
            //         { name: "Global Security Compliance", link: "/globalsecurity" },
            //         { name: "Regional Security Compliance", link: "/regionalsecurity" },
            //         { name: "Privacy Compliance", link: "/privacycompliance" },
            //         { name: "Business Conituity and Disaster Recovery", link: "/businesscontinuity" },
            //         { name: "formal shirts", link: "/" },
            //     ],
            // },
            // {
            //     Head: "Compliance",
            //     sublink: [
            //         { name: "Global Security Compliance", link: "/globalsecurity" },
            //         { name: "Regional Security Compliance", link: "/regionalsecurity" },
            //         { name: "Privacy Compliance", link: "/privacycompliance" },
            //         { name: "Business Conituity and Disaster Recovery", link: "/businesscontinuity" },
            //         { name: "formal shirts", link: "/" },
            //     ],
            // },
        ],
    },
    {
        name: "Blogs",
        submenu: true,
        sublinks: [
            {
                Head: "Compliance",
                sublink: [
                    { name: "Global Security Compliance", link: "/globalsecurity" },
                    { name: "Regional Security Compliance", link: "/regionalsecurity" },
                    { name: "Privacy Compliance", link: "/privacycompliance" },
                    { name: "Business Conituity and Disaster Recovery", link: "/businesscontinuity" },
                    // { name: "formal shirts", link: "/" },
                ],
            },
            // {
            //     Head: "Compliance",
            //     sublink: [
            //         { name: "Global Security Compliance", link: "/globalsecurity" },
            //         { name: "Regional Security Compliance", link: "/regionalsecurity" },
            //         { name: "Privacy Compliance", link: "/privacycompliance" },
            //         { name: "Business Conituity and Disaster Recovery", link: "/businesscontinuity" },
            //         // { name: "formal shirts", link: "/" },
            //     ],
            // },
            // {
            //     Head: "Compliance",
            //     sublink: [
            //         { name: "Global Security Compliance", link: "/globalsecurity" },
            //         { name: "Regional Security Compliance", link: "/regionalsecurity" },
            //         { name: "Privacy Compliance", link: "/privacycompliance" },
            //         { name: "Business Conituity and Disaster Recovery", link: "/businesscontinuity" },
            //         // { name: "formal shirts", link: "/" },
            //     ],
            // },

            // {
            //     Head: "sleepwear",
            //     sublink: [
            //         { name: "T-shirt", link: "/" },
            //         { name: "Casual shirts", link: "/" },
            //         { name: "formal shirts", link: "/" },
            //         { name: "formal shirts", link: "/" },
            //         { name: "formal shirts", link: "/" },
            //     ],
            // },
            // {
            //     Head: "footwear",
            //     sublink: [
            //         { name: "T-shirt", link: "/" },
            //         { name: "Casual shirts", link: "/" },
            //         { name: "formal shirts", link: "/" },
            //         { name: "formal shirts", link: "/" },
            //         { name: "formal shirts", link: "/" },
            //     ],
            // },
        ],
    },
];