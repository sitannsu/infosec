import React from 'react';
import Terrain from "../image/Terrain.jpg"
const locations = [
  {
    country: "USA",
    address: "14900 Conference Center Dr, Suite #500, Chantilly, VA 20151",
    phone: "(703) 310-6237",
    fax: "(703) 991-3241"
  },
  {
    country: "India",
    address: "313, 3rd Floor, Beta Block, Sigma Tech Park, Varthur, Bangalore - 560066",
    phone: "+91 9730163135"
  },
  {
    country: "Malaysia",
    address: "S-22-03, Kiara 163, Menara YNH, Jalan Kiara, Kuala Lumpur, Malaysia",
    phone: "+91 9066298021"
  },
  {
    country: "Malaysia",
    address: "S-22-03, Kiara 163, Menara YNH, Jalan Kiara, Kuala Lumpur, Malaysia",
    phone: "+91 9066298021"
  },
  {
    country: "Malaysia",
    address: "S-22-03, Kiara 163, Menara YNH, Jalan Kiara, Kuala Lumpur, Malaysia",
    phone: "+91 9066298021"
  },
  {
    country: "Malaysia",
    address: "S-22-03, Kiara 163, Menara YNH, Jalan Kiara, Kuala Lumpur, Malaysia",
    phone: "+91 9066298021"
  },
  {
    country: "Malaysia",
    address: "S-22-03, Kiara 163, Menara YNH, Jalan Kiara, Kuala Lumpur, Malaysia",
    phone: "+91 9066298021"
  },
  {
    country: "Malaysia",
    address: "S-22-03, Kiara 163, Menara YNH, Jalan Kiara, Kuala Lumpur, Malaysia",
    phone: "+91 9066298021"
  },
  {
    country: "Malaysia",
    address: "S-22-03, Kiara 163, Menara YNH, Jalan Kiara, Kuala Lumpur, Malaysia",
    phone: "+91 9066298021"
  },
  {
    country: "Malaysia",
    address: "S-22-03, Kiara 163, Menara YNH, Jalan Kiara, Kuala Lumpur, Malaysia",
    phone: "+91 9066298021"
  },
  {
    country: "Malaysia",
    address: "S-22-03, Kiara 163, Menara YNH, Jalan Kiara, Kuala Lumpur, Malaysia",
    phone: "+91 9066298021"
  },
  {
    country: "Malaysia",
    address: "S-22-03, Kiara 163, Menara YNH, Jalan Kiara, Kuala Lumpur, Malaysia",
    phone: "+91 9066298021"
  },
  {
    country: "Malaysia",
    address: "S-22-03, Kiara 163, Menara YNH, Jalan Kiara, Kuala Lumpur, Malaysia",
    phone: "+91 9066298021"
  },
  {
    country: "Malaysia",
    address: "S-22-03, Kiara 163, Menara YNH, Jalan Kiara, Kuala Lumpur, Malaysia",
    phone: "+91 9066298021"
  },
  {
    country: "Malaysia",
    address: "S-22-03, Kiara 163, Menara YNH, Jalan Kiara, Kuala Lumpur, Malaysia",
    phone: "+91 9066298021"
  },
  {
    country: "Malaysia",
    address: "S-22-03, Kiara 163, Menara YNH, Jalan Kiara, Kuala Lumpur, Malaysia",
    phone: "+91 9066298021"
  },


];

const Locations = () => (
 <section 
  className="relative py-10 text-white" 
  style={{
    backgroundImage:`url(${Terrain})`,
    backgroundSize: "cover",
    backgroundPosition: "center"
  }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black bg-opacity-50"></div>

  {/* Content */}
  <div className="relative z-10">
    <h2 className="text-3xl font-bold text-center mb-10">Global Locations</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4">
      {locations.map((location, index) => (
        <div key={index} className="bg-yellow-100 p-6 rounded-lg shadow-lg text-center">
          <div className="flex justify-center mb-4">
            <div className="bg-red-500 p-2 rounded-full">
              <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2C8.134 2 5 5.134 5 9c0 3.866 7 13 7 13s7-9.134 7-13c0-3.866-3.134-7-7-7z" />
              </svg>
            </div>
          </div>
          <h3 className="text-xl font-semibold mb-2">{location.country}</h3>
          <p className="text-gray-700">{location.address}</p>
          {location.phone && <p className="font-bold mt-2">{location.phone}</p>}
          {location.fax && <p className="text-gray-500">{location.fax}</p>}
        </div>
      ))}
    </div>
  </div>
</section>

);

export default Locations;
