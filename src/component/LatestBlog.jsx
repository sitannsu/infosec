import React from 'react';

function LatestBlog({ blogs }) {
  return (
    <div className="py-12 bg-white">
      <h2 className="text-3xl font-bold text-center mb-8">Latest From Blogs</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8">
        {blogs.map((blog, index) => (
          <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
            <img src={blog.image} alt={blog.title} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
              <p className="text-gray-700 text-sm mb-4">{blog.description}</p>
              <a href={blog.link} className="text-red-600 font-bold hover:underline">Read More</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LatestBlog;
