"use client";
// import { Image } from "react-image";
import { Carousel, Card } from "../ui/CardsCarousel";

export default function DepartmentCard() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    (<div className="w-full h-full py-20">
      <h2
        className="pl-4 mx-auto font-sans text-xl font-bold max-w-7xl md:text-5xl text-neutral-800 dark:text-neutral-200">
            
      </h2>
      <Carousel items={cards} />
    </div>)
  );
}

const DummyContent = () => {
  return (<>
    {[...new Array(3).fill(1)].map((_, index) => {
      return (
        (<div
          key={"dummy-content" + index}
          className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
          <p
            className="max-w-3xl mx-auto font-sans text-base text-neutral-600 dark:text-neutral-400 md:text-2xl">
            <span className="font-bold text-neutral-700 dark:text-neutral-200">
              The first rule of Apple club is that you boast about Apple club.
            </span>{" "}
            Keep a journal, quickly jot down a grocery list, and take amazing
            class notes. Want to convert those notes to text? No problem.
            Langotiya jeetu ka mara hua yaar is ready to capture every
            thought.
          </p>
          {/* <Image
            src="https://assets.aceternity.com/macbook.png"
            alt="Macbook mockup from Aceternity UI"
            height="500"
            width="500"
            className="object-contain w-full h-full mx-auto md:w-1/2 md:h-1/2" /> */}
        </div>)
      );
    })}
  </>);
};

const data = [
  {
    // category: "CSE Departmet",
    title: "CSE Departmet",
    src: "/src/assets/CSE.jpg",
    content: <DummyContent />,
  },
  {
    // category: "IT Departmet",
    title: "IT Departmet",
    src: "src/assets/CSE.jpg",
    content: <DummyContent />,
  },
  {
    // category: "EC Departmet",
    title: "EC Departmet",
    src: "src/assets/CSE.jpg",
    content: <DummyContent />,
  },

  {
    // category: "EX Departmet",
    title: "EX Departmet",
    src: "src/assets/CSE.jpg",
    content: <DummyContent />,
  },
  {
    // category: "ME Departmet",
    title: "ME Departmet.",
    src: "src/assets/CSE.jpg",
    content: <DummyContent />,
  },
  {
    // category: "CE Departmet",
    title: "ME Departmet",
    src: "src/assets/CSE.jpg",
    content: <DummyContent />,
  },
  {
    // category: "AU Departmet",
    title: "AU Departmet",
    src: "src/assets/CSE.jpg",
    content: <DummyContent />,
  },
  {
    // category: "PCT Departmet",
    title: "PCT Departmet",
    src: "src/assets/CSE.jpg",
    content: <DummyContent />,
  },
  {
    // category: "SoIT Departmet",
    title: "SoIT Departmet",
    src: "src/assets/CSE.jpg",
    content: <DummyContent />,
  },
];
