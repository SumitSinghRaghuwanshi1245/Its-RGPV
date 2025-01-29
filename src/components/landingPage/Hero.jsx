import { Spotlight } from "../ui/Spotlight";
import { FaLongArrowAltRight } from "react-icons/fa";
import Particles from "../ui/Particles";

const Hero = () => {
  return (
   
    <div className="relative min-h-screen overflow-hidden">
       <Particles
    className="absolute inset-0 z-50"
    quantity={1000}
    ease={10}
    
    refresh
  />
       <Spotlight 
          className="left-0 opacity-100 -top-40 md:left-60 md:-top-20 md:opacity-100" 
          fill="violet" 
        />
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 bg-no-repeat bg-cover opacity-50"
        style={{ 
          backgroundImage: `url(${import.meta.env.BASE_URL}src/assets/rocket_bg.webp)`,
          backgroundPosition: 'center' 
        }}
      />
      
      {/* Content Container - Updated with more top padding */}
      <div className="container flex flex-col items-center pt-32 md:pt-40 lg:flex-row">
        {/* Text Content */}
        <div className="z-10 w-full text-left lg:w-1/2">
          <h1 className="text-4xl font-bold text-center text-transparent bg-opacity-50 sm:text-6xl md:text-6xl lg:text-7xl bg-clip-text bg-gradient-to-b from-violet-900 to-violet-100">
            it&apos;s RGPV
            <br />
            <span className="text-transparent bg-gradient-to-r from-purple-500 via-violet-700 to-indigo-400 bg-clip-text">
              We Got You.
            </span>
          </h1>
          <p className="max-w-lg px-4 mx-auto mt-4 text-sm font-normal text-center sm:text-base text-neutral-300 sm:px-6 md:px-0 md:mt-6 lg:mt-8">
            Explore a vibrant hub where UIT and SOIT RGPV&apos;s clubs, societies, events, and startups come together. Discover a place that connects every aspect of campus life, making your journey at the university even more enriching. Welcome to the heart of UIT and SOIT RGPV, where connections are made, and experiences are crafted.
          </p>
          <div className="flex justify-center mt-8">
            <button className="relative inline-flex items-center justify-center px-6 sm:px-8 py-2.5 sm:py-3 
                    overflow-hidden font-medium transition-all rounded-lg group
                    bg-gradient-to-r from-violet-600 via-violet-700 to-violet-800 
                    hover:from-violet-950 hover:via-violet-800 hover:to-violet-600
                    active:from-violet-800 active:via-violet-900 active:to-violet-950
                    text-sm sm:text-base">
              <span className="relative flex items-center gap-2 text-white">
                <span className="whitespace-nowrap">Official Site</span>
                <FaLongArrowAltRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </button>
          </div>
        </div>
        
        {/* Rocket Animation */}
        <div className="relative w-full lg:w-1/2">
          <img 
            src={`${import.meta.env.BASE_URL}src/assets/rocket.png`}
            alt="Rocket"
            className="w-[300px] md:w-[400px] lg:w-[400px] mx-auto rocket-animation scroll-animate"
            style={{ transform: 'rotate(15deg)' }}
          />
        </div>
      </div>
    </div>
  );
};

// Updated animation styles
const style = document.createElement('style');
style.textContent = `
  @keyframes rocketLoop {
    0% {
      transform: translate(-40vw, 70vh) rotate(15deg);
      opacity: 0;
    }
    5% {
      opacity: 1;
      transform: translate(-35vw, 60vh) rotate(15deg);
    }
    95% {
      opacity: 1;
      transform: translate(100vw, -100vh) rotate(15deg);
    }
    100% {
      transform: translate(120vw, -120vh) rotate(15deg);
      opacity: 0;
    }
  }

  .rocket-animation {
    animation: rocketLoop 6s infinite linear;
    will-change: transform;
    transform-origin: center center;
    position: relative;
    z-index: 40;
  }

  /* Responsive adjustments */
  @media (max-width: 1024px) {
    @keyframes rocketLoop {
      0% {
        transform: translate(-35vw, 60vh) rotate(15deg) scale(0.9);
        opacity: 0;
      }
      5% {
        opacity: 1;
        transform: translate(-30vw, 50vh) rotate(15deg) scale(0.9);
      }
      95% {
        opacity: 1;
        transform: translate(90vw, -90vh) rotate(15deg) scale(0.9);
      }
      100% {
        transform: translate(100vw, -100vh) rotate(15deg) scale(0.9);
        opacity: 0;
      }
    }
  }

  @media (max-width: 768px) {
    @keyframes rocketLoop {
      0% {
        transform: translate(-30vw, 50vh) rotate(15deg) scale(0.7);
        opacity: 0;
      }
      5% {
        opacity: 1;
        transform: translate(-25vw, 40vh) rotate(15deg) scale(0.7);
      }
      95% {
        opacity: 1;
        transform: translate(80vw, -80vh) rotate(15deg) scale(0.7);
      }
      100% {
        transform: translate(90vw, -90vh) rotate(15deg) scale(0.7);
        opacity: 0;
      }
    }
  }

  @media (max-width: 480px) {
    @keyframes rocketLoop {
      0% {
        transform: translate(-25vw, 40vh) rotate(15deg) scale(0.5);
        opacity: 0;
      }
      5% {
        opacity: 1;
        transform: translate(-20vw, 30vh) rotate(15deg) scale(0.5);
      }
      95% {
        opacity: 1;
        transform: translate(70vw, -70vh) rotate(15deg) scale(0.5);
      }
      100% {
        transform: translate(80vw, -80vh) rotate(15deg) scale(0.5);
        opacity: 0;
      }
    }
  }

  .scroll-animate {
    opacity: 0;
    transition: opacity 0.6s;
  }

  .scroll-animate.visible {
    opacity: 1;
  }

  .text-navy-900 {
    color: #0A1930;
  }

  .bg-navy-900 {
    background-color: #0A1930;
  }

  .bg-navy-800:hover {
    background-color: #132543;
  }
`;
document.head.appendChild(style);

// Add Intersection Observer
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      entry.target.style.animationPlayState = 'running';
    } else {
      entry.target.classList.remove('visible');
      entry.target.style.animationPlayState = 'paused';
    }
  });
}, {
  threshold: 0.1
});

// Observe all elements with scroll-animate class
document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('.scroll-animate');
  elements.forEach(el => observer.observe(el));
});

export default Hero;