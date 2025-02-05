import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTops = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0); // Reset scroll to top whenever the route changes
    }, [pathname]);

    return null; // This component doesn't render anything
};

export default ScrollToTops;