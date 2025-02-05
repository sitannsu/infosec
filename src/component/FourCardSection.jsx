import React from 'react';

const LocationMap = ({ title, address, mapUrl, message }) => {
  return (
    <section className="text-gray-600 body-font relative">
      <div className="absolute inset-0 bg-gray-300">
        <iframe
          width="100%"
          height="100%"
          frameBorder={0}
          marginHeight={0}
          marginWidth={0}
          title="map"
          scrolling="no"
          src={mapUrl}
          style={{
            filter: 'sepia(0.5) saturate(1.5) contrast(1.2) opacity(0.9)',
            borderRadius: '8px',
          }}
        />
      </div>
      <div className="container px-5 py-24 mx-auto flex justify-center">
        <div className="lg:w-1/3 md:w-1/2 bg-blue-900 text-white rounded-lg p-8 flex flex-col w-full mt-10 md:mt-0 relative z-10 shadow-2xl">
          <h2 className="text-white text-3xl mb-4 font-bold tracking-wide title-font text-center">
            {title}
          </h2>
          <p className="leading-relaxed text-lg mb-6 text-center text-gray-300">
            {address}
          </p>
          {message && (
            <div className="text-center mt-6">
              <p className="text-sm text-white italic">{message}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default LocationMap;
