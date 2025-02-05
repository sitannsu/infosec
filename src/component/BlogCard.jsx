import React from "react";
import team1 from "../../public/img/security1.jpg"

const BlogCard = ({ title, description, author, date, tags, image }) => {
    return (
        <div className="flex gap-6 bg-gray-800 p-4 rounded-lg shadow-lg">
            <img
                src={team1}
                alt={title}
                className="w-48 h-48 object-cover rounded-lg"
            />
            <div className="flex-1">
                <div className="flex flex-wrap gap-2 mb-2">
                    {tags.map((tag, index) => (
                        <span
                            key={index}
                            className="bg-blue-700 text-white text-xs px-2 py-1 rounded-full"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
                <h2 className="text-xl font-bold text-white mb-2">{title}</h2>
                <p className="text-gray-400 text-sm mb-4">{description}</p>
                <div className="flex items-center justify-between text-gray-500">
                    <div className="flex items-center">
                        <img
                            // src={`https://via.placeholder.com/30`}
                            src={team1}
                            alt={author}
                            className="w-8 h-8 rounded-full mr-2"
                        />
                        <span>{author}</span>
                    </div>
                    <span>{date}</span>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;