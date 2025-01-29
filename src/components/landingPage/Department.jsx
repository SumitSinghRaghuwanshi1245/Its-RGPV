"use client";
import { motion } from "framer-motion";
import { LampContainer } from "../ui/Lamp";
import DepartmentCard from "./DepartmentCards";


export default function Department() {
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
        <h1 className="">Departments</h1>
          {/* mb-52   similarly */}
        
      </motion.h1>
      
    </LampContainer>

   <DepartmentCard/>
    </>
  );
}
