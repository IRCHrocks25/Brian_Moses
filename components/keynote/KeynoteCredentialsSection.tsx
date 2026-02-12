import Image from "next/image";

export default function KeynoteCredentialsSection() {
  const credentials = [
    "Named one of the 125 Most Influential People in the Real Estate Industry by Success Magazine",
    "Former Senior VP & Executive Business Consultant for Anthony Robbins and Chet Holmes",
    "Trainer for Robbins Research International",
    "Consulted with industry legends including Bob Proctor, Dan Kennedy, Jay Abraham, Tony Robbins, Craig Proctor, Mike Ditka, and Marjorie Blanchard",
    "Featured on ABC, NBC, CBS, Fox, The Late Show with David Letterman, and major networks and publications",
    "Frequent keynote speaker across the United States, Canada, and Europe",
    "Represented by Eagles Talent Speakers Bureau — the agency representing Mel Robbins, Jesse Itzler, Jay Shetty, and other world-class speakers",
  ];

  const trustedByLogos = [
    "/images/trusted_by/Frame 1000007701.png",
    "/images/trusted_by/Frame 1000007702.png",
    "/images/trusted_by/Frame 1000007703.png",
    "/images/trusted_by/Frame 1000007704.png",
    "/images/trusted_by/Frame 1000007705.png",
    "/images/trusted_by/Frame 1000007706.png",
    "/images/trusted_by/Frame 1000007707.png",
    "/images/trusted_by/Frame 1000007708.png",
    "/images/trusted_by/Frame 1000007709.png",
    "/images/trusted_by/Frame 1000007710.png",
    "/images/trusted_by/Frame 1000007711.png",
    "/images/trusted_by/Frame 1000007712.png",
    "/images/trusted_by/Frame 1000007713.png",
    "/images/trusted_by/Frame 1000007714.png",
  ];

  return (
    <section className="relative bg-[#0a0a0a] py-16 md:py-24 overflow-hidden">
      {/* Airy premium atmosphere (no boxes) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(900px_520px_at_20%_25%,rgba(170,219,255,0.10),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(900px_520px_at_80%_70%,rgba(170,219,255,0.06),transparent_65%)]" />
        <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(circle_at_center,#ffffff_1px,transparent_1px)] bg-[length:34px_34px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 to-black/35" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-6 lg:px-12">
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <p className="text-xs tracking-[0.28em] uppercase text-white/55">
            Credentials & Recognition
          </p>
          <h2 className="mt-4 text-white font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            Proof, Not Hype.
          </h2>
          <p className="mt-4 text-white/70 text-base md:text-lg max-w-3xl leading-relaxed">
            A track record across major stages, major brands, and major media — with credibility your audience can feel.
          </p>

          {/* Thin, airy divider */}
          <div className="mt-8 h-px w-full bg-gradient-to-r from-transparent via-white/18 to-transparent" />
        </div>

        {/* Flow layout: left rail + flowing list (no cards) */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left: elegant “rail” summary (not a box) */}
          <div className="lg:col-span-4">
            <div className="sticky top-20">
              <div className="relative pl-5">
                {/* Vertical accent rail */}
                <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#AADBFF]/55 to-transparent" />

                <p className="text-white/85 text-base md:text-lg leading-relaxed">
                  This is the difference between <span className="text-white font-semibold">inspiring</span> and{" "}
                  <span className="text-white font-semibold">credible</span>.
                </p>

                <p className="mt-4 text-white/65 text-sm md:text-base leading-relaxed">
                  Effective speakers don’t just move a room — they bring receipts your leadership team is proud to attach to.
                </p>

                <div className="mt-6">
                  <p className="text-xs tracking-[0.26em] uppercase text-white/55">
                    Keynote footprint
                  </p>
                  <p className="mt-2 text-white/80 text-sm md:text-base">
                    United States • Canada • Europe
                  </p>
                </div>

                <div className="mt-8">
                  <p className="text-xs tracking-[0.26em] uppercase text-white/55">
                    Recognition
                  </p>
                  <p className="mt-2 text-white/80 text-sm md:text-base">
                    Success Magazine — 125 Most Influential
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: flowing credential list with separators (not boxes) */}
          <div className="lg:col-span-8">
            <div className="relative">
              {/* Soft guide line behind bullets */}
              <div className="pointer-events-none absolute left-3 top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />

              <div className="space-y-7 md:space-y-9">
                {credentials.map((item, idx) => (
                  <div key={idx} className="relative pl-10">
                    {/* Dot */}
                    <span className="absolute left-[6px] top-[0.65rem] h-2.5 w-2.5 rounded-full bg-[#AADBFF]" />

                    {/* Text */}
                    <p className="text-white text-lg md:text-xl lg:text-2xl leading-relaxed">
                      {item}
                    </p>

                    {/* Subtle divider (except last) */}
                    {idx < credentials.length - 1 && (
                      <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-white/12 to-transparent" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Trusted By — airy “logo runway” with fades (no grid boxes) */}
            <div className="mt-16 md:mt-20">
              <div className="flex items-end justify-between gap-6 flex-wrap">
                <h3 className="text-white font-bold text-2xl sm:text-3xl md:text-4xl">
                  Trusted By Leading Organizations
                </h3>
                <p className="text-white/60 text-sm md:text-base">
                  Selected partners & appearances
                </p>
              </div>

              <div className="mt-8 relative">
                {/* Edge fades */}
                <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10" />
                <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10" />

                {/* Logo strip */}
                <div className="flex items-center gap-8 md:gap-10 overflow-x-auto no-scrollbar py-4">
                  {trustedByLogos.map((src, idx) => {
                    const encodedSrc = src
                      .split("/")
                      .map((part, i) => (i === 0 ? part : encodeURIComponent(part)))
                      .join("/");
                    return (
                      <div key={idx} className="flex-shrink-0">
                        <Image
                          src={encodedSrc}
                          alt="Trusted by logo"
                          width={170}
                          height={80}
                          className="h-10 sm:h-12 md:h-14 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
                          unoptimized
                        />
                      </div>
                    );
                  })}
                </div>

                {/* Underline */}
                <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-white/14 to-transparent" />
              </div>

              <p className="mt-6 text-white/75 text-base md:text-lg lg:text-xl">
                Plus top brokerages, associations, and entrepreneurs across North America
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Optional: hide scrollbar nicely (utility) */}
      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
