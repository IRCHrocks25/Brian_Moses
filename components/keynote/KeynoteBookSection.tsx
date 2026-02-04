import Image from "next/image";

export default function KeynoteBookSection() {
  return (
    <section className="relative bg-[#0a0a0a] py-16 md:py-24 overflow-hidden">
      <div className="mx-auto w-full px-6 lg:px-12">
        {/* Background Image Section with Rounded Corners */}
        <div className="relative min-h-[80vh] md:min-h-[90vh] rounded-lg md:rounded-3xl overflow-hidden">
          <Image
            src="/images/Frame 8.png"
            alt="Book Brian Moses"
            fill
            className="object-cover object-center"
          />
          
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/60" />
          
          {/* Gradient overlay for premium feel */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a]/80 via-[#1568F7]/20 to-[#0a0a0a]/80" />

          {/* Content Overlay */}
          <div className="relative z-10 h-full mx-auto w-full px-6 lg:px-12">
            <div className="grid min-h-[80vh] md:min-h-[90vh] items-center gap-6 md:gap-10 lg:grid-cols-2 pt-16 sm:pt-20 md:pt-24 pb-8 sm:pb-10 md:pb-14">
              {/* Left Content */}
              <div className="pl-4 sm:pl-6 md:pl-12 lg:pl-16">
                <h2 className="text-white font-bold leading-[1.05] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-6">
                  Book Brian Moses
                </h2>
                
                {/* Divider Line */}
                <div className="w-24 h-1 bg-[#AADBFF] mb-8 md:mb-12" />

                {/* Quotes */}
                <div className="space-y-6 md:space-y-8 mb-8 md:mb-12">
                  <p className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-relaxed font-semibold italic" style={{ color: "#AADBFF" }}>
                    &quot;The people who win aren&apos;t lucky. They&apos;re relentless.&quot;
                  </p>
                  
                  <p className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-relaxed font-semibold italic" style={{ color: "#AADBFF" }}>
                    &quot;Success isn&apos;t about doing more. It&apos;s about doing what matters with relentless intent.&quot;
                  </p>
                </div>

                {/* Key Messages */}
                <div className="space-y-4 md:space-y-6 mb-8 md:mb-12">
                  <h3 className="text-white font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                    Bring the Fire. Deliver the Framework.
                  </h3>
                  <h3 className="text-white font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                    Ignite Growth, Mindset, and Momentum.
                  </h3>
                </div>

                <p className="text-white/90 text-lg md:text-xl lg:text-2xl leading-relaxed mb-8 md:mb-12">
                  When your event demands more than motivation when it needs a mindset shift, a breakthrough moment, and a speaker who walks the talk Brian delivers.
                </p>
              </div>

              {/* Right Content - CTA */}
              <div className="pl-4 sm:pl-6 md:pl-12 lg:pl-16 flex flex-col justify-center">
                <div className="relative rounded-2xl overflow-hidden border-2 p-8 md:p-12" style={{ borderColor: "#AADBFF", backgroundColor: "rgba(170, 219, 255, 0.1)", backdropFilter: "blur(10px)" }}>
                  <h3 className="text-white font-bold text-2xl sm:text-3xl md:text-4xl mb-6 text-center">
                    Ready to Ignite Your Audience?
                  </h3>
                  
                  <div className="text-center space-y-6">
                    <div>
                      <p className="text-white/80 text-base md:text-lg mb-2">Email:</p>
                      <a 
                        href="mailto:Brian@BrianMoses.com" 
                        className="text-[#AADBFF] text-xl md:text-2xl lg:text-3xl font-bold hover:text-[#7FC5FF] transition-colors underline decoration-2 underline-offset-4"
                      >
                        Brian@BrianMoses.com
                      </a>
                    </div>
                    
                    <div className="pt-6 border-t border-white/20">
                      <p className="text-white/90 text-base md:text-lg lg:text-xl leading-relaxed">
                        Start the transformation that lasts long after the applause.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

