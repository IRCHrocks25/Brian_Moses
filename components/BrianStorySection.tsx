import Image from "next/image";

const principles = [
  {
    title: "Strategic Action, Not a Numbers Game",
    description:
      'He rejects outdated advice like "just talk to more people." Instead, he’ll show you how to craft offers so compelling that high-quality prospects call you, allowing you to build a business that works even when you take time off.',
  },
  {
    title: "Life Beyond the Hustle",
    description:
      "Brian believes your business should fund your life, not consume it. He helps you install the systems and mindset to achieve true freedom, giving you back time for what matters most: your family, your health, and your passions.",
  },
  {
    title: 'A "Never Say Can\'t" Mindset',
    description:
      "Brian's greatest win wasn't in business. After 10 failed IVF attempts and being told fatherhood was impossible, he and his wife refused to give up. Today, they are proud parents, a story now being developed into a major motion picture.",
  },
];

function Dots({ active }: { active: number }) {
  return (
    <div className="flex items-center gap-1.5 mb-3">
      {[1, 2, 3].map((i) => (
        <span
          key={i}
          className={[
            "h-2.5 w-2.5 rounded-full",
            i <= active ? "bg-[#1568F7]" : "border border-[#1568F7] bg-transparent",
          ].join(" ")}
        />
      ))}
    </div>
  );
}

export default function BrianStorySection() {
  return (
    <>
      {/* TOP: White page + centered dark card with full-bleed background image */}
      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto w-full px-12 lg:px-24">
          <div className="relative overflow-hidden rounded-2xl border border-black/10 shadow-[0_20px_60px_rgba(0,0,0,0.18)]">
            {/* Background image */}
            <div className="absolute inset-0">
              <Image
                src="/images/Frame 1000007768.png"
                alt="Brian Moses speaking on stage"
                fill
                priority
                className="object-cover object-center"
              />
              {/* Darken left side for readable text, like reference */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-transparent" />
              {/* Slight overall vignette */}
              <div className="absolute inset-0 bg-black/10" />
            </div>

            {/* Content layout (match proportions in screenshot) */}
            <div className="relative grid min-h-[500px] md:min-h-[600px] lg:min-h-[650px] grid-cols-1 lg:grid-cols-[1.15fr_0.85fr]">
              {/* Left text block */}
              <div className="px-10 py-12 md:px-14 md:py-16 lg:py-20 text-white">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight">
                  From $18k p.a. to ranked #2 in the world,
                  <br />
                  Brian&apos;s struggle is your shortcut.
                </h2>

                <p className="mt-6 text-white/75 text-base md:text-lg leading-relaxed max-w-[500px]">
                  Before Brian Moses became one of the world&apos;s top real estate coaches, he was on the verge of quitting.
                  Earning just $18,000 his first year and struggling for five more, he hit the same walls you have. He knew
                  the hustle, the doubt, and the burnout.
                </p>

                <p className="mt-6 font-semibold text-base md:text-lg" style={{ color: "#168EE4" }}>
                  Then, everything changed.
                </p>

                <p className="mt-4 text-white/75 text-base md:text-lg leading-relaxed max-w-[500px]">
                  He stopped chasing leads and started building a system. Guided by mentors like Tony Robbins and Craig Proctor,
                  he transformed his mindset and his business, scaling to $3M+ per year in commissions and selling over 3,500 homes.
                </p>

                {/* Quote */}
                <div className="mt-8 flex items-start gap-5">
                  <svg
                    className="h-12 w-12 md:h-14 md:w-14 text-[#1568F7] flex-none"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>

                  <p className="text-xl md:text-2xl lg:text-3xl font-semibold leading-snug">
                    Don&apos;t just be the
                    <br />
                    hunter, become the hunted.
                  </p>
                </div>
              </div>

              {/* Right side is just image space (kept empty) */}
              <div className="hidden lg:block" />
            </div>

            {/* Bottom watermark (stroke text like screenshot) */}
            <div className="pointer-events-none absolute left-0 right-0 bottom-4 md:bottom-6 px-8 md:px-12">
              <div className="relative">
                <div className="wm text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-[0.10em] uppercase">
                  BRIAN&nbsp;MOSES
                </div>
                <div className="wm absolute left-[54%] top-0 -translate-x-1/2 opacity-35 text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-[0.10em] uppercase">
                  BRIAN&nbsp;MOSES
                </div>
              </div>
            </div>

            {/* Subtle inner ring */}
            <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/5" />
          </div>
        </div>
      </section>

      {/* BOTTOM: Principles (match screenshot layout + sizing) */}
      <section className="bg-white pb-20 md:pb-24">
        <div className="mx-auto w-full px-24 lg:px-48">
          <p className="text-center text-black/60 text-base md:text-lg max-w-4xl mx-auto">
            He&apos;s giving you the exact playbook he built from the ground up, so you don&apos;t have to learn the hard way.
          </p>

          <p className="mt-4 text-center text-lg md:text-xl font-semibold" style={{ color: '#1568F7' }}>
            This philosophy is built on three core principles:
          </p>

          <div className="mt-12 grid gap-12 md:grid-cols-3">
            {principles.map((p, idx) => (
              <div key={idx}>
                {/* Dots patterns like screenshot */}
                <Dots active={idx + 1} />

                <h3 className="text-black font-semibold text-base md:text-lg border-b border-[#1568F7] pb-2">
                  {p.title}
                </h3>

                <p className="mt-4 text-black/60 text-sm md:text-base leading-relaxed">
                  {p.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <button className="rounded-full bg-black text-white px-8 py-4 text-base md:text-lg font-medium hover:bg-black/90 transition">
              Download the Free Training
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
