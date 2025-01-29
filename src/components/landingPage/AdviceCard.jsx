"use client";

import { cn } from "../../lib/utils"; 
import { AnimatedList } from "../ui/AnimatedList"; 

// Notifications data
let notifications = [
  {
    name: "Placement",
    description: "placements lagvao",
    // time: "15m ago",
    icon: "👤",
    color: "#00C9A7",
  },
  {
    name: "Canteen",
    description: "canteen open karao",
    // time: "10m ago",
    icon: "👤",
    color: "#FFB800",
  },
  {
    name: "bolo bolo bhaaaraaattttt mattaaaaa kiii.....",
    description: "jai!",
    // time: "5m ago",
    icon: "👤",
    color: "#FF3D71",
  },
  {
    name: "Change karo karo",
    description: "Change Hostel warden",
    // time: "2m ago",
    icon: "👤",
    color: "#1E86FF",
  },
];

// Duplicate and flatten notifications for testing
notifications = Array.from({ length: 10 }, () => notifications).flat();

// Notification component
const Notification = ({ name, description, icon, color, time }) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4",
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        "bg-[var(--primarycolor)] [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"
      )}
    >
      <div className="flex flex-row items-center gap-3 ">
        <div
          className="flex items-center justify-center size-10 rounded-2xl"
          style={{
            backgroundColor: color,
          }}
        >
          <span className="text-lg">{icon}</span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center text-lg font-medium whitespace-pre dark:text-white">
            <span className="text-sm sm:text-lg">{name}</span>
            <span className="mx-1">·</span>
            <span className="text-xs text-gray-500">{time}</span>
          </figcaption>
          <p className="text-sm font-normal dark:text-white/60">{description}</p>
        </div>
      </div>
    </figure>
  );
};

// AdviceCard component
export default function AdviceCard({ className }) {
  return (
  

    <div className="flex justify-center flex-1 gap-5" >
    

{/* Animated slips */}
      
    <div
      className={cn(
        "relative h-[500px] w-full inline-block flex-col p-14 overflow-auto m-auto  rounded-lg  md:shadow-xl",
        className
      )}
    >
      <AnimatedList>
        {notifications.map((item, idx) => (
          <Notification {...item} key={idx} />
        ))}
      </AnimatedList>
    </div>

{/* Content */}

<div className="items-center justify-center inline-block p-14">
  <h1 className="text-3xl font-bold ">Demand and Advice of the people of RGPV </h1>
  <h2>India i the best country to live in and india population is increasing day by day and i tthink we need to control this as soon as possible afterall the nation can't be crowded and overflowed due to its people only. extensively using the resources</h2>
</div>



    </div>
  );
}
