import React from 'react';

const FollowUs = () => {
    return (
        <div className="fixed right-4 bottom-1/4 transform -rotate-90">
            <div className="text-gray-400 hover:text-black font-semibold space-y-4">
                <div className="flex">
                    <p className="cursor-default hover:text-yellow-200">Follow Us</p><span>- </span>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-600">
                        Fb.
                    </a>
                    <a href="https://behance.net" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-600">
                        Be.
                    </a>
                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-600">
                        Yt.
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200">
                        Ig.
                    </a>
                </div>
            </div>
        </div >
    );
};

export default FollowUs;
