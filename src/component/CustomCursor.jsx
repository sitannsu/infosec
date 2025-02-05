import React, { useState, useEffect } from 'react';
// import './CustomCursor.css';

const CustomCursor = () => {
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });



    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const cursorElement = document.querySelector(".custom-cursor-circle");

        const mouseMoveHandler = (e) => {
            cursorElement.style.left = `${e.pageX}px`;
            cursorElement.style.top = `${e.pageY}px`;
        };

        const hoverElements = document.querySelectorAll("a, button");

        const hoverHandler = () => {
            setIsHovering(true);
        };

        const leaveHandler = () => {
            setIsHovering(false);
        };

        // Add event listeners
        document.addEventListener("mousemove", mouseMoveHandler);
        hoverElements.forEach((el) => {
            el.addEventListener("mouseenter", hoverHandler);
            el.addEventListener("mouseleave", leaveHandler);
        });

        // Cleanup event listeners on component unmount
        return () => {
            document.removeEventListener("mousemove", mouseMoveHandler);
            hoverElements.forEach((el) => {
                el.removeEventListener("mouseenter", hoverHandler);
                el.removeEventListener("mouseleave", leaveHandler);
            });
        };
    }, []);

    useEffect(() => {
        const updateCursorPosition = (e) => {
            setCursorPosition({
                x: e.clientX,
                y: e.clientY,
            });
        };

        window.addEventListener('mousemove', updateCursorPosition);

        return () => {
            window.removeEventListener('mousemove', updateCursorPosition);
        };
    }, []);





    return (
        <div
            className="custom-cursor"
            style={{
                left: `${cursorPosition.x}px`,
                top: `${cursorPosition.y}px`,
            }}
        >
            <div className={`custom-cursor-circle ${isHovering ? "hovering" : ""}`}>
                <div className="custom-cursor-dot"></div>
            </div>
            <div className="custom-cursor-dot"></div>
        </div>
    );
};

export default CustomCursor;
