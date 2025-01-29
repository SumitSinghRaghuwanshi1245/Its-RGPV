import HeroVideoDialog from "./ui/HeroVideo";

export function HeroVideo() {
  return (
    <div className="relative">
      <HeroVideoDialog
        className="block dark:hidden"
        animationStyle="from-center"
        videoSrc="https://youtu.be/NPeZoeNYnus?si=rQBP__m2Zh99jo_W"
        thumbnailSrc="/src/assets/rgpvbanner.jpg"
        thumbnailAlt="Hero Video"
      />
      <HeroVideoDialog
        className="hidden dark:block"
        animationStyle="from-center"
        videoSrc="https://youtu.be/NPeZoeNYnus?si=rQBP__m2Zh99jo_W"
        thumbnailSrc="/src/assets/rgpvbanner.jpg"
        thumbnailAlt="Hero Video"
      />
    </div>
  );
}
