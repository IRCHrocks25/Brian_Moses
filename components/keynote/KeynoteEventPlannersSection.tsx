import Image from "next/image";

export default function KeynoteEventPlannersSection() {
  return (
    <section className="relative bg-[#0a0a0a] py-16 md:py-24 overflow-hidden">
      <div className="mx-auto w-full px-6 lg:px-12">
        {/* Background Image Section with Rounded Corners */}
        <div className="relative min-h-[70vh] md:min-h-[80vh] rounded-lg md:rounded-3xl overflow-hidden">
          <Image
            src="/images/Frame 1000007794.png"
            alt="Brian Moses speaking"
            fill
            className="object-cover object-center"
          />
          
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/50" />

          {/* Content Overlay */}
          <div className="relative z-10 h-full mx-auto w-full px-6 lg:px-12">
            <div className="grid min-h-[70vh] md:min-h-[80vh] items-center gap-6 md:gap-10 lg:grid-cols-2 pt-16 sm:pt-20 md:pt-24 pb-8 sm:pb-10 md:pb-14">
              {/* Left Content */}
              <div className="pl-4 sm:pl-6 md:pl-12 lg:pl-16">
                <h2 className="text-white font-bold leading-[1.05] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                  Why Event Planners Choose Brian Moses
                </h2>
                
                <p className="mt-4 text-white/85 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">
                  When the Stakes Are High and the Message Must Move People
                </p>

                <div className="mt-6 sm:mt-8 space-y-4 sm:space-y-6">
                  <p className="text-white/85 text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed">
                    Not because he&apos;s checked the usual speaker boxes. Not because of titles, trophies, or numbers on a slide.
                  </p>

                  <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed">
                    They book him because Brian knows how to cut through noise, resistance, and burnout and speak to the part of people that actually drives real transformation.
                  </p>

                  <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed">
                    Whether it&apos;s a company-wide corporate event, regional conference, sales leadership summit, or intimate department huddle, Brian delivers what audiences are quietly craving:
                  </p>

                  {/* Key Points */}
                  <div className="mt-8 space-y-4 pl-6 md:pl-8">
                    <div className="flex gap-4 items-start">
                      <span className="mt-2 h-2.5 w-2.5 flex-none bg-[#AADBFF] rounded-full" />
                      <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-white">
                        <span className="font-semibold" style={{ color: "#AADBFF" }}>Clarity that leads to action</span>
                      </p>
                    </div>
                    <div className="flex gap-4 items-start">
                      <span className="mt-2 h-2.5 w-2.5 flex-none bg-[#AADBFF] rounded-full" />
                      <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-white">
                        <span className="font-semibold" style={{ color: "#AADBFF" }}>Connection that feels personal, not performative</span>
                      </p>
                    </div>
                    <div className="flex gap-4 items-start">
                      <span className="mt-2 h-2.5 w-2.5 flex-none bg-[#AADBFF] rounded-full" />
                      <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-white">
                        <span className="font-semibold" style={{ color: "#AADBFF" }}>Momentum that lasts long after the applause</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right "space" column to match screenshot composition */}
              <div className="hidden lg:block" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

