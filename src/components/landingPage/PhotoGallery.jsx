import  FocusCards  from "../ui/FocusCards";
import { LampContainer } from "../ui/Lamp";
import { motion } from "framer-motion";


export default function PhotoGallery() {
  const cards = [
    {
      title: "Pravaah",
      src: "/src/assets/CE.jpg",
    },
    {
      title: "Induction",
      src: "/src/assets/CE.jpg",
    },
    {
      title: "Mahasangram",
      src: "/src/assets/CE.jpg",
    },
    {
      title: "Shanknaad",
      src: "/src/assets/CE.jpg",
    },
    {
      title: "Rangotsav",
      src: "/src/assets/CE.jpg",
    },
    {
      title: "Vijaypath",
      src: "/src/assets/CE.jpg",
    },
  ];

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
        <h1 className="">PhotoGallery</h1>
        
      </motion.h1>

    
      
    </LampContainer>
  <FocusCards cards={cards} />
  </>
  );
}
