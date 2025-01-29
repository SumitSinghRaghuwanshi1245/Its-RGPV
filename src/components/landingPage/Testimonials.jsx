import { cn } from "../../lib/utils";
import Marquee from "../ui/Marquee";

const reviews = [
  {
    name: "Devioc",
    username: "@devioc",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "/src/assets/CE.jpg",
  },
  {
    name: "growthSquare",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "/src/assets/EX.jpg",
  },
  {
    name: "Fibonacci",
    username: "@fibonacci",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/src/assets/ME.jpg",
  },
  {
    name: "E-Cell",
    username: "@e-cell",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/src/assets/AE.jpg",
  },
  {
    name: "IEEE",
    username: "@ieee",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img:"/src/assets/CSE.jpg",
  },
  {
    name: "GDSC SoIT",
    username: "@gdsc_soit",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/src/assets/itsrgpv.jpg",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = (
    {
  img,
  name,
  username,
  body,
}
// {
//   img
//   name
//   username 
//   body
// }
) => {
  return (


    
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl p-4 ",
        // light styles
        // "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // // dark styles
        // "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
        "bg-white/5 backdrop-blur-md shadow-lg", "bg-white/10 backdrop-blur-3xl ",
        
      )}
    >


      <div className="flex flex-row items-center gap-2 ">
        <img className="rounded-full" width="52" height="52" alt="" src={img} />
        <div className="flex flex-col text-bold">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export default function Testimonials() {
  return (
    <>
    <h1 className="mt-4 text-4xl font-medium text-center text-transparent bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text md:text-7xl">
    Testimonials
  </h1>
    
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg  md:shadow-xl ">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="absolute inset-y-0 left-0 w-1/3 pointer-events-none -z-50 bg-gradient-to-r from-[var(--primarycolor)] dark:from-background"></div>
      <div className="absolute inset-y-0 right-0 w-1/3 pointer-events-none bg-gradient-to-l from-[var(--primarycolor)] dark:from-background -z-50"></div>
    </div>
    </>
  );
}
