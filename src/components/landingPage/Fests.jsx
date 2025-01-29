import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import { LampContainer } from "../ui/Lamp";

const Fests = () => {
  return (
    <>
    {/* // <div className="bg-neutral-800">
    //   <div className="flex items-center justify-center h-48">
    //     <span className="font-semibold uppercase text-neutral-500">
    //       Scroll down
    //     </span>
    //   </div> */}


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
        <h1 className="">Fests</h1>    
        {/* mb-52   similarly */}
        
      </motion.h1>

    
      
    </LampContainer>



    
      <HorizontalScrollCarousel />
      {/* // <div className="flex items-center justify-center h-48">
        <span className="font-semibold uppercase text-neutral-500">
          Scroll up
        </span>
      </div>
    </div> */}
    </>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] ">
      <div className="sticky top-0 flex items-center h-screen overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 z-10 grid place-content-center">
        <p className="p-8 text-6xl font-black text-white uppercase bg-gradient-to-br from-white/20 to-white/0 backdrop-blur-lg">
          {card.title}
        </p>
      </div>
    </div>
  );
};

export default Fests;

const cards = [
  {
    url: "/src/assets/itsrgpv.jpg",
    title: "Pravaah",
    id: 1,
  },
  {
    url: "/src/assets/itsrgpv.jpg",
    title: "Pravaah",
    id: 2,
  },
  {
    url: "/src/assets/itsrgpv.jpg",
    title: "Pravaah ",
    id: 3,
  },
  {
    url: "/src/assets/itsrgpv.jpg",
    title: "Pravaah",
    id: 4,
  },
  {
    url: "/src/assets/itsrgpv.jpg",
    title: "Pravaah",
    id: 5,
  },
  {
    url: "/src/assets/itsrgpv.jpg",
    title: "Pravaah",
    id: 6,
  },
  {
    url: "/src/assets/itsrgpv.jpg",
    title: "Pravaah",
    id: 7,
  },
];