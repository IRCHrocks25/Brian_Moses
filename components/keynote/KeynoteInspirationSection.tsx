import Image from "next/image";

const imageStrip = [
  "/images/five_images/Hardy3.png",
  "/images/five_images/Keynote-1.png",
  "/images/five_images/Keynote.png",
];

export default function KeynoteInspirationSection() {
  return (
    <section className="relative bg-[#0a0a0a] overflow-hidden">
      {/* 8-image horizontal strip - Edge to Edge */}
      <div className="relative w-full">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-[30px]">
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
      
    </section>
  );
}

