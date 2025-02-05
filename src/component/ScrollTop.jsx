// import React from 'react';

// const ScrollToTop = () => {
//     const scrollToTop = () => {
//         window.scrollTo({ top: 0, behavior: 'smooth' });
//     };

//     return (
//         <div className="fixed left-4 bottom-1/4 transform -rotate-90 cursor-pointer">
//             <span onClick={scrollToTop} className="text-gray-500 hover:text-black font-semibold">
//                 Scroll to top
//             </span>
//         </div>
//     );
// };

// export default ScrollToTop;





import React, { useEffect, useState } from 'react';

const ScrollToTop = () => {
    const [show, setShow] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const footer = document.querySelector('footer'); // Select your footer element
            const isAtTop = window.scrollY === 0; // Check if at the top of the page

            if (footer) {
                const footerTop = footer.getBoundingClientRect().top; // Get footer's top position
                const windowHeight = window.innerHeight; // Window height
                // Hide if footer is in view or if at the top of the page
                setShow(!(footerTop <= windowHeight || isAtTop));
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        show && (
            <div className="fixed left-4 bottom-1/4 transform -rotate-90 cursor-pointer">
                <span onClick={scrollToTop} className="text-gray-500 hover:text-black font-semibold">
                    Scroll to top
                </span>
            </div>
        )
    );
};

export default ScrollToTop;

