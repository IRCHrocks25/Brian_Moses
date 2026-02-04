export default function KeynoteCredentialsSection() {
  const credentials = [
    "Named one of the 125 Most Influential People in the Real Estate Industry by Success Magazine",
    "Former Senior VP Executive Business Consultant for Anthony Robbins & Chet Holmes",
    "Trainer for Robbins Research International",
    "Consulted with industry legends including Bob Proctor, Dan Kennedy, Jay Abraham, Tony Robbins, Craig Proctor, Mike Ditka, and Marjorie Blanchard",
    "Featured on ABC, NBC, CBS, Fox, Late Show with David Letterman, and major networks and publications",
    "Frequent keynote speaker across the United States, Canada, and Europe",
    "Represented by Eagles Talent Speakers Bureau - the agency representing Mel Robbins, Jesse Itzler, Jay Shetty, and other world-class speakers",
  ];

  const trustedBy = ["AT&T", "Motorola", "Ford", "Berkshire Hathaway", "eXp Realty"];

  return (
    <section className="relative bg-[#0a0a0a] py-16 md:py-24">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <h2 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4">
            Credentials & Recognition
          </h2>
        </div>

        {/* Main Layout */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* LEFT: At a Glance Card */}
          <div className="lg:col-span-4">
            <div className="sticky top-20">
              <div className="rounded-xl border border-white/10 bg-[#1a1a1a] p-6 md:p-8">
                <p className="text-xs tracking-[0.3em] uppercase text-white/60 text-center mb-6">
                  AT A GLANCE
                </p>

                <div className="space-y-5">
                  <div className="flex items-center justify-between pb-4 border-b border-white/10">
                    <span className="text-white/70 text-sm md:text-base">Industry recognition</span>
                    <span className="text-white text-3xl md:text-4xl font-bold">
                      125
                    </span>
                  </div>

                  <div className="flex items-center justify-between pb-4 border-b border-white/10">
                    <span className="text-white/70 text-sm md:text-base">Media reach</span>
                    <span className="text-white text-3xl md:text-4xl font-bold">
                      Major
                    </span>
                  </div>

                  <div className="flex items-center justify-between pb-4">
                    <span className="text-white/70 text-sm md:text-base">Keynote footprint</span>
                    <span className="text-white text-xl md:text-2xl font-bold">
                      US • CA • EU
                    </span>
                  </div>
                </div>

                <p className="mt-6 pt-6 border-t border-white/10 text-white/60 text-sm leading-relaxed text-center">
                  This is the difference between &quot;inspiring&quot;
                  <br />
                  and &quot;effective.&quot; Effective shows receipts.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT: Credentials List */}
          <div className="lg:col-span-8">
            <div className="space-y-6 md:space-y-8">
              {credentials.map((item, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <span className="mt-2 h-2.5 w-2.5 flex-none bg-[#AADBFF] rounded-full" />
                  <p className="text-white text-lg md:text-xl lg:text-2xl leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            {/* Trusted By Section */}
            <div className="mt-16 md:mt-20 pt-12 border-t border-white/20">
              <h3 className="text-white font-bold text-2xl sm:text-3xl md:text-4xl mb-8">
                Trusted By Leading Organizations
              </h3>
              <div className="flex flex-wrap items-center gap-4 md:gap-6">
                {trustedBy.map((name, idx) => (
                  <span key={name} className="text-white/85 text-base md:text-lg lg:text-xl font-medium">
                    {name}
                    {idx < trustedBy.length - 1 && <span className="text-white/40 mx-2">•</span>}
                  </span>
                ))}
              </div>
              <p className="mt-6 text-white/75 text-base md:text-lg lg:text-xl">
                Plus top brokerages, associations, and entrepreneurs across North America
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}