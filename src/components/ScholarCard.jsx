import Ripple from "./ui/Ripple";

export function RippleDemo() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <p className="z-10 text-5xl font-medium tracking-tighter text-center text-white whitespace-pre-wrap">
        Click me
      </p>
      <Ripple />
    </div>
  );
}
