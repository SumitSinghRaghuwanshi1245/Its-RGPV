import React from 'react';
import { Github, Twitter, Linkedin, Instagram } from 'lucide-react';
import { LampContainer } from "../ui/Lamp";
import { motion } from "framer-motion";
const TestimonialCard = ({ image, name, role, description, insta, github, X , linkedin }) => {
  return (
    <div className="flex-shrink-0 w-[400px] h-[200px] glassmorphism-dropdown rounded-lg shadow-xl border border-indigo-800 overflow-hidden mx-4 flex">
      {/* Image Section */}
      <div className="w-2/5">
        <img 
          src={image} 
          alt={name} 
          className="object-cover w-full h-full"
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col justify-between w-3/5 p-4">
        <div>
          <h3 className="text-lg font-bold text-white-900">{name}</h3>
          <p className="mb-2 text-sm text-white-600">{role}</p>
          <p className="text-sm text-white-700 line-clamp-3">{description}</p>
        </div>

        {/* Social Links */}
        <div className="flex justify-end gap-3">
          <a href={insta} className="transition-colors text-white-600 hover:text-gray-500 hover:rotate-12">
            <Instagram size={18} />
          </a>
          <a href={github} className="transition-colors text-white-600 hover:text-gray-500 hover:rotate-12">
            <Github size={18} />
          </a>
          <a href={X} className="transition-colors text-white-600 hover:text-gray-500 hover:rotate-12">
            <Twitter size={18} />
          </a>
          <a href={linkedin} className="transition-colors text-white-600 hover:text-gray-500 hover:rotate-12">
            <Linkedin size={18} />
          </a>
        </div>
      </div>
    </div>
  );
};

const AboutTeam = () => {
  const testimonials = [


    {
      image: "/src/assets/itsrgpv.jpg",
      name: "Vedansh Jain",
      role: "Developer",
      description: "Exceptional problem-solving skills and a great collaborative spirit. They consistently deliver beyond expectations.",
      insta: "https://www.instagram.com/sumitt.singh_/",
      github: "https://github.com/sumitt-singh",
      X: "https://twitter.com/sumitt_singh",
      linkedin: "https://www.linkedin.com/in/sumitt-singh/"
    },
    {
      image: "/src/assets/itsrgpv.jpg",
      name: "Shreyash Jain",
      role: "Developer",
      description: "Exceptional problem-solving skills and a great collaborative spirit. They consistently deliver beyond expectations.",
      insta: "https://www.instagram.com/sumitt.singh_/",
      github: "https://github.com/sumitt-singh",
      X: "https://twitter.com/sumitt_singh",
      linkedin: "https://www.linkedin.com/in/sumitt-singh/"
    },
    {
        image: "/src/assets/itsrgpv.jpg",
      name: "Sumit Singh Raghuwanshi",
      role: "Developer",
      description: "Working with this team has been an incredible experience. Their attention to detail and commitment to excellence is unmatched.",
      insta: "https://www.instagram.com/sumitt.singh_/",
      github: "https://github.com/sumitt-singh",
      X: "https://twitter.com/sumitt_singh",
      linkedin: "https://www.linkedin.com/in/sumitt-singh/"
    },
    {
        image: "/src/assets/itsrgpv.jpg",
      name: "Nitin Chakrawarti",
      role: "Developer",
      description: "The level of creativity and innovation they bring to each project is truly inspiring. Couldn't be happier with the results.",
      insta: "https://www.instagram.com/sumitt.singh_/",
      github: "https://github.com/sumitt-singh",
      X: "https://twitter.com/sumitt_singh",
      linkedin: "https://www.linkedin.com/in/sumitt-singh/"
    },
    {
        image: "/src/assets/itsrgpv.jpg",
      name: "Praful Sahu",
      role: "Developer",
      description: "Their strategic approach and deep understanding of our needs made all the difference in our project's success.",
      insta: "https://www.instagram.com/sumitt.singh_/",
      github: "https://github.com/sumitt-singh",
      X: "https://twitter.com/sumitt_singh",
      linkedin: "https://www.linkedin.com/in/sumitt-singh/"
    },
    
  ];

  // 3 times the testimonials array for smooth infinite scroll
  const doubledTestimonials = [...testimonials, ...testimonials,...testimonials];

  return (
    <>
    <LampContainer>
    <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="text-4xl font-medium tracking-tight text-center text-transparent bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text md:text-7xl"> 
         {/*py-10 mt-4  hataya hai resolve this  */}
        <h1 className="">Developers Team</h1>    
        {/* mb-52   similarly */}
        
      </motion.h1>
    </LampContainer>
    <div className="w-full overflow-hidden">
      <div className="relative">
        {/* First Row */}
        <div className="flex animate-scroll">
          {doubledTestimonials.map((testimonial, index) => (
            <TestimonialCard key={`row1-${index}`} {...testimonial } />
          ))}
        </div>
      </div>
    </div>
  
    <LampContainer className='rotate-180 ' ></LampContainer>
    </>
  );
};

// Add required styles with <style> tag for the animation
const style = document.createElement('style');
style.textContent = `
  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }

  .animate-scroll {
    animation: scroll 30s linear infinite;
  }

  .animate-scroll:hover {
    animation-play-state: paused;
  }
`;
document.head.appendChild(style);

export default AboutTeam;