"use client";
import { motion } from "framer-motion";
import { LampContainer } from "../ui/Lamp";
import EventCard from "./EventCard";



export default function Event() {
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
        className="mt-4 text-4xl font-medium tracking-tight text-center text-transparent  bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text md:text-7xl">
        <h1 className="mb-2">Events</h1>
        
      </motion.h1>

    
      
    </LampContainer>
    <EventCard/>

    </>
  );
}
