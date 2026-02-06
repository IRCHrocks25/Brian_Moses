import Image from "next/image";

const imageStrip = [
  "/images/five_images/GeorgeWBush.png",
  "/images/five_images/Hardy3.png",
  "/images/five_images/Keynote-1.png",
  "/images/five_images/Keynote.png",
  "/images/five_images/TonyRobbinsBrianCelts.png",
];

export default function KeynoteInspirationSection() {
  return (
    <section className="relative bg-[#0a0a0a] overflow-hidden">
      {/* 8-image horizontal strip - Edge to Edge */}
      <div className="relative w-full">
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-[30px]">
          {imageStrip.map((src) => (
            <div
              key={src}
              className="relative aspect-square overflow-hidden"
            >
              <Image
                src={src}
                alt="Trusted by logo"
                fill
                className="object-cover object-center"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Text section on black background */}
      <div className="relative bg-black py-16 md:py-24">
        <div className="mx-auto w-full max-w-5xl px-6 lg:px-12">
          <div className="text-center space-y-6 md:space-y-8">
            <p className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight font-normal">
              Brian has inspired audiences
              <br />
              across stages around the globe.
            </p>
            <p className="text-white/90 text-lg sm:text-xl md:text-2xl lg:text-3xl leading-relaxed font-normal">
              Whether you&apos;re facing obstacles that feel insurmountable, harboring dreams you&apos;re afraid to
              pursue, or seeking the blueprint to build wealth, health, happiness, and freedom Brian&apos;s keynote
              will leave a lasting impression that transforms into a newfound obsession for your life.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

