import React from 'react';
import Slider from 'react-slick';
import image1 from '@/image/bgimage.jpg'
// Card Component
const Card = ({ icon, title, description }) => (
    <div className="px-4">
        <div className="bg-white rounded-lg shadow-lg p-6 h-64">
            <div className="flex items-center mb-4">
                <div className="text-red-500 text-3xl">
                    <i className={icon}></i> {/* Use the icon prop here */}
                </div>
                <h4 className="text-xl font-semibold ml-4">{title}</h4>
            </div>
            <p className="text-gray-600">{description}</p>
        </div>
    </div>
);

// Main Carousel Component
const CarouselWithText = ({ title, description, cards }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3, // Show two slides at a time
        slidesToScroll: 1,
    };

    return (
     <div 
    className="relative bg-teal-500 py-12 bg-cover bg-center"
        style={{ backgroundImage: `url(${image1})` }}>
              <h3 className="text-white text-3xl font-semibold mb-6 text-center ">WE OFFER</h3>
            <div className="  flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8">
                {/* Text Section */}
                <div className="text-center  md:w-1/2 mx-au">
                <h2 className="text-[#FFEAAB] font-bold text-[40px] leading-tight font-sans shadow-sm">{title}</h2>
                <p className="text-2xl font-bold text-[#203152] mt-4 mb-4">{description}</p>
                </div>

                {/* Slider Section */}
                <div className="md:w-1/2">
                  
                    <Slider {...settings}>
                        {cards.map((card, index) => (
                            <Card key={index} icon={card.icon} title={card.title} description={card.description} />
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default CarouselWithText;
