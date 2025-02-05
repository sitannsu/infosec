import React from 'react';

const FunctionalPrincipleCard = ({ icon, title, description, bgColor = 'bg-white', borderColor = 'border-red-500' }) => {
  return (
    <div>
          <div className='ml-4 mr-4'>
          <div className={`p-4 shadow-md border-t-4 bg-[#f3f3f3] ${borderColor} ${bgColor} rounded-md flex items-center`}>
      {/* Image Section */}
      <div className="w-16 h-16 flex-shrink-0 mr-4">
        <img src={icon} alt={`${title} icon`} className="w-full h-full object-contain" />
      </div>
      
      {/* Text Section */}
      <div>
        <h3 className="text-lg font-bold mb-1">{title}</h3>
        <p className="text-sm text-gray-700">{description}</p>
      </div>
    </div>
 </div>
    </div>
  
 
  );
};

export default FunctionalPrincipleCard;
