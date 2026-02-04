import Image from "next/image";

export default function KeynoteHeroSection() {
  return (
    <section className="relative bg-[#0a0a0a] py-8 md:py-12">
      <div className="mx-auto w-full px-6 lg:px-12">
        {/* HERO FRAME */}
        <div className="relative overflow-hidden rounded-2xl md:rounded-3xl border border-white/10 bg-black shadow-[0_40px_140px_rgba(0,0,0,0.85)]">
          {/* BACKGROUND */}
          <div className="absolute inset-0">
            <Image
              src="/images/Frame 8.png"
              alt="Hero background"
              fill
              priority
              className="object-cover object-center"
            />

            {/* Keep overlays SIMPLE + expensive (no "layer soup") */}
            <div className="absolute inset-0 bg-black/55" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/35 to-black/70" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_1000px_600px_at_50%_50%,rgba(255,255,255,0.12),transparent_65%)]" />
          </div>

          {/* Subtle frame sheen */}
          <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

          {/* CONTENT */}
          <div className="relative z-10 px-6 sm:px-8 md:px-12 lg:px-16">
            <div className="flex min-h-[78vh] sm:min-h-[84vh] md:min-h-[92vh] items-center justify-center pt-16 sm:pt-20 md:pt-24 pb-10 sm:pb-12 md:pb-16">
              {/* CENTERED CONTENT */}
              <div className="w-full max-w-4xl mx-auto text-center">
                {/* Small, quiet eyebrow (centered) */}
                <div className="flex items-center justify-center gap-3 text-xs tracking-[0.28em] uppercase text-white/70">
                  <span>Keynote Speaker</span>
                  <span className="h-[3px] w-[3px] rounded-full bg-white/50" />
                  <span className="tracking-[0.18em] text-white/60">Brian Moses</span>
                </div>

                {/* Headline: centered and impactful */}
                <h1 className="mt-6 text-white font-semibold tracking-tight leading-[1.05] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
                  Your Past Doesn&apos;t Have to Dictate Your Future
                </h1>

                {/* Copy block: centered, clean */}
                <div className="mt-8 sm:mt-10 space-y-5 sm:space-y-6">
                  <p className="text-white/90 text-lg sm:text-xl md:text-2xl leading-relaxed font-medium">
                    Fear is just proof you&apos;re aiming at something worth having.
                  </p>

                  <p className="text-white/85 text-lg sm:text-xl md:text-2xl leading-relaxed">
                    Own the belief, strategy, and relentless drive
                    <br />
                    to achieve everything you&apos;ve ever wanted.
                  </p>

                  <p className="text-white/85 text-lg sm:text-xl md:text-2xl leading-relaxed font-bold">
                    You can have, do, be, accomplish, and achieve anything you want in life. Thousands have done it before you and you can too. Perhaps all you need is someone to believe in you and show you the path.
                  </p>

                  {/* Centered quote highlight */}
                  <div className="mt-8 sm:mt-10 mx-auto max-w-3xl">
                    <div className="relative">
                      <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
                      <div className="space-y-5 px-6">
                        <p className="text-lg sm:text-xl md:text-2xl leading-relaxed text-[#AADBFF] font-medium">
                          Brian Moses will make you feel like you can walk through a brick wall. A powerhouse of resilience and strategic brilliance, Brian has inspired audiences across stages around the globe.
                        </p>
                        <p className="text-lg sm:text-xl md:text-2xl leading-relaxed text-[#AADBFF] font-medium">
                          Whether you&apos;re facing obstacles that feel insurmountable, harboring dreams you&apos;re afraid to pursue, or seeking the blueprint to build wealth, health, happiness, and freedom Brian&apos;s keynote will leave a lasting impression that transforms into a newfound obsession for your life.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA: centered */}
                <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <button className="inline-flex items-center justify-center rounded-xl px-8 py-4 text-base sm:text-lg font-semibold text-black bg-white hover:bg-white/95 transition shadow-[0_18px_50px_rgba(0,0,0,0.35)] hover:shadow-[0_25px_70px_rgba(0,0,0,0.45)] hover:scale-105 duration-300">
                    Book Brian
                  </button>
                  <button className="inline-flex items-center justify-center rounded-xl px-8 py-4 text-base sm:text-lg font-semibold text-white border border-white/25 bg-transparent hover:bg-white/5 transition hover:border-white/35 duration-300">
                    View Speaker Kit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}