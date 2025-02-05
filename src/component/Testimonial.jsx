import Slider from "react-slick"
import FeedbackCard from "./FeedbackCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import people1 from "../../public/img/team-1.jpg"
import people2 from "../../public/img/team-2.jpg"
import people3 from "../../public/img/team-3.jpg"
import people4 from "../../public/img/team-4.png"
const TestimonialsSection = () => {
  const [expandedCards, setExpandedCards] = useState({});

  const toggleExpansion = (cardId) => {
    setExpandedCards(prevState => ({
      ...prevState,
      [cardId]: !prevState[cardId]
    }));
  };
  const feedback = [
    {
      id: "feedback-1",
      content:
        "I just wanted to let you know how much we appreciate your work. You put a lot of effort into what you do, and it shows in your great results. Thank you so much for your dedicated performance! ",
      name: "AbsolutData an Infogain Company",
      // title: "Founder & Leader",
      // img: people1
    },
    {
      id: "feedback-2",
      content:
        "We’ve joined hands on several projects, and AZ Infosec is one of the best organisations I had as a partner for Audits. I highly recommend their expertise to any person looking for Lead Implementing and Auditing Projects. They are the most profound people I have met, and their ability to tackle any problem is remarkable and with a warm smile.",
      name: "Unicorp Technology LLC",
      // title: "Founder & Leader",
      // img: people2
    },
    {
      id: "feedback-3",
      content:
        "We are so happy to get our ISO 27001 Certification on time and with all the policies, procedures and controls in place. The way the team engaged all the relevant stakeholders and ensured everyone's role in the security management system is really great. It really helped us to set up the team's responsibilities for the security. ",
      name: "Provar",
      // title: "Founder & Leader",
      // img: people3
    },
    {
      id: "feedback-4",
      content:
        "We received the hard copy of the ISO 27001 certificate. We take this moment to thank the team for the excellent professional services rendered. Thanks for guiding us through, connecting us with the certification body and helping STGI earn the certificate. Appreciation to @Vishal for the excellent support. His professional yet friendly consulting approach, attention to detail, and prompt delivery made a significant impact. His timely feedback gave us confidence. Thanks, Vishal. ",
      name: "STGi International",
      // title: "Founder & Leader",
      // img: people4
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section
      id="clients"
      className="sm:py-16  py-6 flex justify-center items-center flex-col relative"
    >
      <div className="w-full flex justify-center items-center sm:mb-16 mb-6">
        <h2 className="text-gray-900 text-2xl sm:text-3xl md:text-4xl lg:text-4xl mb-4 sm:mb-6 md:mb-8 leading-tight flex items-center justify-center  font-heisman font-bold">
          What People are Saying About Us
        </h2>
      </div>

      <div className="w-full relative z-1 overflow-hidden">
        <Slider {...settings}>
          {feedback.map((card) => (
            <FeedbackCard
              key={card.id}
              {...card}
              isExpanded={expandedCards[card.id]}
              onClick={() => toggleExpansion(card.id)}
            />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TestimonialsSection;