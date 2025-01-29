import  AnimatedTestimonials  from "../ui/AnimatedTestimonials";

export default function ClubCard() {
  const testimonials = [
    {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "E-Cell",
      designation: "Product Manager at Google",
      src: "/src/assets/itsrgpv.jpg",
    },
    {
      quote:
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: "Devioc",
      designation: "CTO at InnovateSphere",
      src: "/src/assets/itsrgpv.jpg",
    },
    {
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: "Fibonacci",
      designation: "Operations Director at CloudScale",
      src: "/src/assets/itsrgpv.jpg",
    },
    {
      quote:
        "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
      name: "IEEE",
      designation: "Engineering Lead at DataPro",
      src: "/src/assets/itsrgpv.jpg",
    },
    {
      quote:
        "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
      name: "GDSC",
      designation: "VP of Technology at FutureNet",
      src: "/src/assets/itsrgpv.jpg",
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
