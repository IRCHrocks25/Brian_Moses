import Image from "next/image"

export default function KeynoteHeroSection() {
  return (
    <section className="relative bg-[#0a0a0a] py-8 md:py-12">
      <div className="mx-auto w-full px-6 lg:px-12">
        {/* HERO FRAME */}
        <div className="relative overflow-hidden rounded-2xl md:rounded-3xl border border-white/10 bg-black shadow-[0_40px_140px_rgba(0,0,0,0.85)]">
          {/* BACKGROUND */}
          <div className="absolute inset-0">
            <Image
              src="/images/Frame 8 (1).png"
              alt="Hero background"
              fill
              priority
              className="object-cover object-center"
            />

            {/* Optional: subtle readability overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/10 to-black/35" />
          </div>

          {/* Subtle frame sheen */}
          <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

          {/* CONTENT */}
          <div className="relative z-10 px-6 sm:px-8 md:px-12 lg:px-16">
            {/* Use a column layout so CTA stays attached to the copy,
                not floating near the bottom */}
            <div className="min-h-[78vh] sm:min-h-[84vh] md:min-h-[92vh] flex flex-col justify-center py-14 sm:py-16 md:py-20">
              <div className="w-full max-w-6xl text-left">
                {/* Eyebrow */}
                <div className="flex items-center gap-3 text-xs tracking-[0.28em] uppercase text-white/70">
                  <span>Keynote Speaker</span>
                  <span className="h-[3px] w-[3px] rounded-full bg-white/50" />
                  <span className="tracking-[0.18em] text-white/60">Brian Moses</span>
                </div>

                {/* Copy block */}
                <div className="mt-7 sm:mt-9 space-y-5 sm:space-y-6">
                  {/* Headline */}
                  <p className="text-white/90 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.08] font-semibold">
  Your Past Doesn’t Have to Dictate Your Future.
</p>


                  {/* Body: make it scannable + “readable tension” */}
                  <div className="max-w-3xl">
                    {/* Lead-in (slightly smaller than headline, but “pulls you in”) */}
                    <p className="text-white/90 text-lg sm:text-xl md:text-2xl leading-[1.65] font-medium">
                      What if the only thing standing between you and the life you truly want…{" "}
                      <span className="text-white font-semibold">is what you&apos;ve been conditioned to believe is possible?</span>
                    </p>

                    {/* Micro-divider for rhythm */}
                    <div className="mt-5 h-px w-16 bg-white/20" />

                    {/* Bold “truth” line as a highlighted callout */}
                    <p className="mt-5 text-white text-xl sm:text-2xl md:text-3xl leading-[1.35] font-semibold tracking-tight">
                      The truth is simple:
                    </p>

                    {/* Key claim with strong rhythm + readable line length */}
                    <p className="mt-3 text-white/90 text-lg sm:text-xl md:text-2xl leading-[1.7]">
                      You can{" "}
                      <span className="text-white font-semibold">have, do, be, accomplish, and achieve</span>{" "}
                      anything you want in life.{" "}
                      <span className="text-white/95 font-semibold">Thousands have proven it</span> — and you can too.
                    </p>

                    {/* “Moment” paragraph: slightly smaller, more airy, italics for texture */}
                    <p className="mt-4 text-white/75 text-base sm:text-lg md:text-xl leading-[1.85]">
                      Change can happen in a moment — the moment your belief shifts about what&apos;s possible for you.
                      A defining moment where you become free from what&apos;s been buried beneath fear, challenge, and
                      personal past experiences.
                    </p>

                    {/* Second divider for pacing */}
                    <div className="mt-6 h-px w-24 bg-white/15" />

                    {/* Question as a subhead to “re-hook” */}
                    <p className="mt-6 text-white/95 text-xl sm:text-2xl md:text-3xl leading-[1.35] font-semibold tracking-tight">
                      How would it feel to access:
                    </p>

                    {/* “States” as a compact, high-scan list without changing layout structure */}
                    <p className="mt-3 text-white/85 text-base sm:text-lg md:text-xl leading-[1.75]">
                      <span className="text-white/95 font-semibold">Passion.</span>{" "}
                      <span className="text-white/95 font-semibold">Drive.</span>{" "}
                      <span className="text-white/95 font-semibold">Energy.</span>{" "}
                      <span className="text-white/95 font-semibold">Ambition.</span>{" "}
                      <span className="text-white/95 font-semibold">Confidence.</span>{" "}
                      <span className="text-white/95 font-semibold">Unstoppability.</span>{" "}
                      And more.
                    </p>

                    {/* Final paragraph: slightly tighter, but still readable */}
                    <p className="mt-5 text-white/80 text-base sm:text-lg md:text-xl leading-[1.85]">
                      Spend any time in his presence and he&apos;ll have you believing you can walk through a brick
                      wall. A powerhouse of resilience and strategic brilliance, Brian has inspired audiences across
                      stages around the globe. Whether you&apos;re facing obstacles that feel insurmountable, harboring
                      dreams you&apos;re afraid to pursue, or seeking the blueprint to build{" "}
                      <span className="text-white/90 font-semibold">wealth, health, happiness, and freedom</span> —
                      Brian&apos;s keynote leaves a lasting impression that transforms into a newfound obsession for
                      your life.
                    </p>
                  </div>
                </div>

                {/* CTA: moved up + attached to copy */}
                <div className="mt-7 sm:mt-8 md:mt-10 flex flex-col sm:flex-row items-start gap-4">
                  <button className="inline-flex items-center justify-center rounded-xl px-8 py-4 text-base sm:text-lg font-semibold text-black bg-white hover:bg-white/95 transition shadow-[0_18px_50px_rgba(0,0,0,0.35)] hover:shadow-[0_25px_70px_rgba(0,0,0,0.45)] hover:scale-105 duration-300">
                    Book Brian for your Next Event
                  </button>
                  <button className="inline-flex items-center justify-center rounded-xl px-8 py-4 text-base sm:text-lg font-semibold text-white border border-white/25 bg-transparent hover:bg-white/5 transition hover:border-white/35 duration-300">
                    View Video Clips
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Optional: add a little bottom breathing room on tiny screens */}
          <div className="h-6 sm:h-0" />
        </div>
      </div>
    </section>
  )
}
