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

                {/* Headline */}
                <h1 className="mt-6 text-white font-semibold tracking-tight leading-[1.05] text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                  Your Past Doesn&apos;t Have to Dictate Your Future
                </h1>

                {/* Copy block */}
                <div className="mt-7 sm:mt-9 space-y-4 sm:space-y-5">
                  <p className="text-white/90 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.08] font-semibold">
                    Fear is just proof you&apos;re aiming at something worth having.
                  </p>

                  <p className="text-white/85 text-lg sm:text-xl md:text-2xl leading-[1.55]">
                    Own the belief, strategy, and relentless drive to achieve everything you&apos;ve ever wanted.
                  </p>

                  <p className="text-white/85 text-lg sm:text-xl md:text-2xl leading-[1.55] font-bold">
                    You can have, do, be, accomplish, and achieve anything you want in life. Thousands have done it
                    before you and you can too. Perhaps all you need is someone to believe in you and show you the
                    path.
                  </p>
                </div>

                {/* CTA: moved up + attached to copy */}
                <div className="mt-7 sm:mt-8 md:mt-10 flex flex-col sm:flex-row items-start gap-4">
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

          {/* Optional: add a little bottom breathing room on tiny screens */}
          <div className="h-6 sm:h-0" />
        </div>
      </div>
    </section>
  )
}
