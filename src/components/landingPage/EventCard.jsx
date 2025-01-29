import { useRef } from 'react';
import { useInView } from 'framer-motion';
// import { HoverEffect } from '../ui/CardHoverEffect';

const EventCard = () => {
  const cardData = [
    {
      title: "Technical Workshop",
      description: "Join us for an intensive hands-on workshop on the latest technologies and development practices.",
      image: "/src/assets/itsrgpv.jpg",
      date: "March 15, 2024",
      location: "Main Auditorium",
    },
    {
      title: "Cultural Fest",
      description: "Experience the vibrant culture and talent showcase at our annual cultural festival.",
      image: "/src/assets/itsrgpv.jpg",
      date: "April 1-3, 2024",
      location: "Campus Ground",
    },
    {
      title: "Hackathon 2024",
      description: "48-hour coding challenge to solve real-world problems with innovative solutions.",
      image: "/src/assets/itsrgpv.jpg",
      date: "May 20-22, 2024",
      location: "IT Complex",
    },
    {
      title: "Sports Tournament",
      description: "Annual inter-college sports competition featuring multiple sporting events.",
      image: "/src/assets/itsrgpv.jpg",
      date: "June 5, 2024",
      location: "Sports Complex",
    },
    {
      title: "Alumni Meet",
      description: "Connect with your alumni network and share experiences with current students.",
      image: "/src/assets/itsrgpv.jpg",
      date: "July 10, 2024",
      location: "Convention Center",
    },
    {
      title: "Research Symposium",
      description: "Platform for researchers to present their work and collaborate with peers.",
      image: "/src/assets/itsrgpv.jpg",
      date: "August 15, 2024",
      location: "Research Block",
    },
  ];

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
<>
    <div className="max-w-5xl px-8 mx-auto"> 
      {/* <HoverEffect items={cardData} /> */}
     </div>
    
    <div 
      ref={sectionRef}
      className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8 "
    >
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {cardData.map((card, index) => (
          <div
            key={index}
            className={`transform transition-all duration-700 ${
              isInView 
                ? `opacity-100 ${index % 2 === 0 ? 'translate-x-0' : '-translate-x-0'}` 
                : `opacity-0 ${index % 2 === 0 ? 'translate-x-full' : '-translate-x-full'}`
            }`}
            style={{ transitionDelay: `${index * 150}ms` }}
          >
            <div className="relative flex flex-row h-64 overflow-hidden transition-all duration-500 glassmorphism-dropdown backdrop-blur-sm rounded-xl group hover:shadow-2xl">
              {/* Image Container - Reduced size */}
              <div className="relative w-2/5 overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="object-cover w-full h-full transition-transform duration-500 scale-105 group-hover:scale-125"
                />
                <div className="absolute inset-0 transition-colors duration-500 bg-black/20 group-hover:bg-black/30" />
              </div>

              {/* Content Container */}
              <div className="relative flex flex-col flex-grow w-3/5 p-6">
                <div className="flex-grow">
                  <h3 className="mb-2 text-xl font-bold text-white/90">
                    {card.title}
                  </h3>
                  <p className="mb-4 text-sm text-gray-400">
                    {card.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-2 py-1 text-xs text-gray-300 bg-gray-800 rounded-full">
                      {card.date}
                    </span>
                    <span className="px-2 py-1 text-xs text-gray-300 bg-gray-800 rounded-full">
                      {card.location}
                    </span>
                  </div>
                </div>
                
                {/* Button Container */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  <a
                    href="#"
                    className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-white transition-all duration-300 rounded-lg bg-violet-600 hover:bg-violet-700 group/button"
                  >
                    Register Now
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center px-3 py-1.5 text-sm font-medium transition-all duration-300 rounded-lg text-violet-400 hover:text-violet-300 bg-violet-900/40 hover:bg-violet-900/60"
                  >
                    Learn More
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-gray-300 transition-all duration-300 rounded-lg bg-gray-800 hover:bg-gray-700 group/share"
                  >
                    Share
                    <svg 
                      className="w-4 h-4 ml-1.5 transition-transform duration-300 group-hover/share:rotate-12"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default EventCard;
