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
                    Brian Moses is entirely self-made. Abandoned by his biological father at age three. Raised in inner-city projects and government housing. Living on welfare. By twenty-eight, he stood at the edge of depression and suicide, buried in IRS debt, with wages levied and bank accounts seized.
                  </p>

                  <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                    He had every reason to quit. Instead, he flipped the narrative.
                  </p>

                  {/* Benefit Statement - Premium Glassmorphism */}
                  <div className="mt-8 p-8 md:p-10 lg:p-12 rounded-2xl border border-[#AADBFF]/40 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.5),0_0_0_1px_rgba(170,219,255,0.2),inset_0_1px_0_rgba(255,255,255,0.1)] relative overflow-hidden">
                    {/* Frosty gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#AADBFF]/15 via-[#AADBFF]/10 to-transparent" />
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(170,219,255,0.2),transparent_60%)]" />
                    
                    {/* Subtle inner glow */}
                    <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />
                    
                    {/* Content */}
                    <div className="relative z-10 space-y-6">
                      <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl leading-tight font-bold text-white">
                        You lack resources. You have a million reasons to quit, or give up.
                      </p>
                      <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl leading-tight font-bold" style={{ color: "#AADBFF" }}>
                        OR You can Reframe the Narrative - Change Your Story, Change Your Life!
                      </p>
                    </div>
                  </div>

                  <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                    Today, Brian is a multi-millionaire, accomplished businessman, devoted husband, and father. Named by Success Magazine as one of the 125 Most Influential People in the Real Estate Industry, he embodies the values, grit, determination, and perseverance that define the human spirit at its finest.
                  </p>

                  <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                    But his resilience didn&apos;t stop at finances. When Brian and his wife wanted to celebrate their turnaround by starting a family, a Harvard physician diagnosed them both as infertile. After ten fertility attempts, three heartbreaking miscarriages, and nearly $200,000 in uncovered medical expenses on the verge of giving up they tried one more time. Their son was born.
                  </p>

                  <p
                    className="text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight font-bold italic"
                    style={{ color: "#AADBFF" }}
                  >
                    &quot;Perhaps you are closer than you think. You can never quit. You can never give up.&quot;
                  </p>

                  <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                    Brian turned his mess into his message inspiring his signature keynote, &quot;Never Say Can&apos;t,&quot; which you will be able to apply to your own personal situation. A message of grit and perseverance that now fuels audiences in boardrooms, conferences, and arenas worldwide.
                  </p>
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

