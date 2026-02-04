export default function KeynoteWhatSetsApartSection() {
  return (
    <section className="relative bg-[#0a0a0a] py-16 md:py-24">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-12">
        {/* What Sets Brian Apart */}
        <div className="mb-16 md:mb-20">
          <h2 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-8 md:mb-12">
            What Sets Brian Apart:
          </h2>
          <p className="text-white/85 text-lg md:text-xl lg:text-2xl mb-8">
            Event organizers consistently say his edge is his ability to:
          </p>
          
          {/* Key Points */}
          <div className="space-y-6 md:space-y-8 pl-6 md:pl-8">
            <div className="flex gap-4 items-start">
              <span className="mt-2 h-2.5 w-2.5 flex-none bg-[#AADBFF] rounded-full" />
              <p className="text-white text-lg md:text-xl lg:text-2xl leading-relaxed">
                <span className="font-semibold" style={{ color: "#AADBFF" }}>Read the room in real time</span>
              </p>
            </div>
            <div className="flex gap-4 items-start">
              <span className="mt-2 h-2.5 w-2.5 flex-none bg-[#AADBFF] rounded-full" />
              <p className="text-white text-lg md:text-xl lg:text-2xl leading-relaxed">
                <span className="font-semibold" style={{ color: "#AADBFF" }}>Connect with executives, leaders, and frontline teams simultaneously</span>
              </p>
            </div>
            <div className="flex gap-4 items-start">
              <span className="mt-2 h-2.5 w-2.5 flex-none bg-[#AADBFF] rounded-full" />
              <p className="text-white text-lg md:text-xl lg:text-2xl leading-relaxed">
                <span className="font-semibold" style={{ color: "#AADBFF" }}>Leave audiences saying, &quot;That wasn&apos;t just motivating, that hit home.&quot;</span>
              </p>
            </div>
          </div>
        </div>

        {/* More Than Motivation */}
        <div className="relative rounded-lg md:rounded-3xl overflow-hidden border border-white/10 p-8 md:p-12 lg:p-16">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#0f1a2e] to-[#0a0a0a]" />
          
          <div className="relative z-10">
            <h2 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 md:mb-8">
              More Than Motivation
            </h2>
            
            <div className="space-y-6 md:space-y-8">
              <p className="text-white/85 text-lg md:text-xl lg:text-2xl leading-relaxed">
                Brian&apos;s message isn&apos;t hype. It&apos;s a wake-up call.
              </p>

              <p className="text-white text-lg md:text-xl lg:text-2xl leading-relaxed">
                He challenges audiences to reclaim agency, rewire the patterns driving their results, and stop living and leading on default. The result? People don&apos;t just feel energized, they leave thinking differently about their work, their choices, and their potential.
              </p>

              <p className="text-white/85 text-lg md:text-xl lg:text-2xl leading-relaxed">
                That&apos;s why Fortune 500 companies, industry leaders, brokerage firms, associations, and entrepreneurs bring him back again and again.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

