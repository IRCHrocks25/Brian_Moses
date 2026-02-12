import Image from "next/image";

export default function KeynoteTransformationSection() {
  return (
    <section className="relative bg-[#0a0a0a] py-16 md:py-24 overflow-hidden">
      <div className="mx-auto w-full px-6 lg:px-12">
        {/* Background Image Section with Rounded Corners */}
        <div className="relative min-h-[80vh] md:min-h-[90vh] rounded-lg md:rounded-3xl overflow-hidden">
          <Image
            src="/images/Frame 1000007768.png"
            alt="Brian Moses transformation story"
            fill
            className="object-cover object-center"
          />
          
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Content Overlay */}
          <div className="relative z-10 h-full mx-auto w-full px-6 lg:px-12">
            <div className="grid min-h-[80vh] md:min-h-[90vh] items-center gap-6 md:gap-10 lg:grid-cols-2 pt-16 sm:pt-20 md:pt-24 pb-8 sm:pb-10 md:pb-14">
              
              {/* Left Content */}
              <div className="pl-4 sm:pl-6 md:pl-12 lg:pl-16">
                
                <h2 className="text-white font-bold leading-[1.05] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                  A Story of Radical Transformation
                </h2>
                
                <p className="mt-4 text-white/85 text-lg sm:text-xl md:text-2xl font-semibold">
                  From Rock Bottom to Remarkable
                </p>

                <div className="mt-6 sm:mt-8 space-y-4 sm:space-y-6">
                  
                  <p className="text-white/85 text-sm sm:text-base md:text-lg leading-relaxed">
                    Abandoned by his biological father at three years old. Raised by a poverty-stricken German immigrant mother who barely spoke English. Welfare. Inner-city housing projects. Every statistic predicted struggle.
                  </p>

                  <p className="text-white/85 text-sm sm:text-base md:text-lg leading-relaxed">
                    By twenty-eight, Brian was buried in IRS debt. His wages levied. His bank accounts seized. Depression closing in. Thoughts of suicide growing louder.  
                    He stood at a crossroads: <strong>Give up — or figure it out.</strong>
                  </p>

                  {/* Benefit Statement - Premium Glassmorphism */}
                  <div className="mt-8 p-8 md:p-10 lg:p-12 rounded-2xl border border-[#AADBFF]/40 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.5),0_0_0_1px_rgba(170,219,255,0.2),inset_0_1px_0_rgba(255,255,255,0.1)] relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#AADBFF]/15 via-[#AADBFF]/10 to-transparent" />
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(170,219,255,0.2),transparent_60%)]" />
                    <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />
                    
                    <div className="relative z-10 space-y-6">
                      <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl leading-tight font-bold text-white">
                        You may lack resources.  
                        You may have a million reasons to quit.
                      </p>
                      <p
                        className="text-lg sm:text-xl md:text-2xl lg:text-3xl leading-tight font-bold"
                        style={{ color: "#AADBFF" }}
                      >
                        Or you can reframe the narrative.  
                        Change your story. Change your life.
                      </p>
                    </div>
                  </div>

                  <p className="text-white/85 text-sm sm:text-base md:text-lg leading-relaxed">
                    Brian chose to rewrite his story. Today, he is a multi-millionaire entrepreneur, accomplished businessman, devoted husband, and father. Recognized by Success Magazine as one of the 125 Most Influential People in the Real Estate Industry, he represents grit, discipline, and the power of strategic belief.
                  </p>

                  <p className="text-white/85 text-sm sm:text-base md:text-lg leading-relaxed">
                    But his resilience wasn’t tested only financially. When Brian and his wife decided to start a family, a Harvard physician told them they were infertile. Ten fertility treatments. Three miscarriages. Nearly $200,000 in uncovered medical costs. On the verge of giving up — they tried once more.
                  </p>

                  <p className="text-white/85 text-sm sm:text-base md:text-lg leading-relaxed">
                    Their son was born.
                  </p>

                  <p
                    className="text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight font-bold italic"
                    style={{ color: "#AADBFF" }}
                  >
                    &quot;Perhaps you are closer than you think.  
                    You can never quit.  
                    You can never give up.&quot;
                  </p>

                  <p className="text-white/85 text-sm sm:text-base md:text-lg leading-relaxed">
                    Brian turned his mess into his message. His signature keynote, &quot;Never Say Can&apos;t,&quot; is more than inspiration — it is a blueprint for resilience, belief, and execution. A message that now moves audiences in boardrooms, conferences, and arenas around the world.
                  </p>

                </div>
              </div>

              {/* Right spacer column (kept for composition balance) */}
              <div className="hidden lg:block" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
