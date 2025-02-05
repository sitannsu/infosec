import React from 'react';

const InfoCard = ({ title, points, borderColor = 'border-red-700' }) => {
  return (
    <div className={`p-6 shadow-md border-l-4 ${borderColor} bg-white rounded-lg mb-6`}>
      <h3 className="text-xl font-bold mb-3 text-red-700">{title}</h3>
      <ul className="text-sm text-gray-800 space-y-2">
        {points.map((point, index) => (
          <li key={index}>
            <span className="font-semibold">{point.label}:</span> {point.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InfoCard;
