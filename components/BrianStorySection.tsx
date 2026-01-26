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

function Dots({ activeIndex }: { activeIndex: number }) {
  return (
    <div className="flex items-center gap-1.5 mb-3">
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className={[
            "h-2 w-2 rounded-full",
            i === activeIndex ? "bg-[#2aa7ff]" : "border border-[#2aa7ff]/50 bg-transparent",
          ].join(" ")}
        />
      ))}
    </div>
  );
}

export default function BrianStorySection() {
  return (
    <>
      {/* TOP: White page background + centered dark card (like screenshot) */}
      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto w-full max-w-[1600px] px-4 md:px-8 lg:px-12">
          <div className="relative overflow-hidden rounded-2xl border border-black/10 shadow-[0_24px_70px_rgba(0,0,0,0.18)]">
            {/* Background Image - covers the whole container */}
            <div className="absolute inset-0">
              <Image
                src="/images/Frame 1000007768.png"
                alt="Brian Moses speaking on stage"
                fill
                priority
                className="object-cover object-center"
              />
            </div>

            <div className="relative grid gap-12 px-8 py-12 md:px-12 md:py-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              {/* LEFT */}
              <div className="text-white">
                <h2 className="text-2xl leading-tight md:text-3xl lg:text-4xl font-semibold">
                  From $18k p.a. to ranked #2 in the world,
                  <br />
                  Brian&apos;s struggle is your shortcut.
                </h2>

                <p className="mt-6 text-white/80 text-base md:text-lg leading-relaxed max-w-[560px]">
                  Before Brian Moses became one of the world&apos;s top real estate coaches, he was on the verge of
                  quitting. Earning just $18,000 his first year and struggling for five more, he hit the same walls you
                  have. He knew the hustle, the doubt, and the burnout.
                </p>

                <p className="mt-6 font-semibold text-base md:text-lg" style={{ color: '#168EE4' }}>
                  Then, everything changed.
                </p>

                <p className="mt-4 text-white/80 text-base md:text-lg leading-relaxed max-w-[560px]">
                  He stopped chasing leads and started building a system. Guided by mentors like Tony Robbins and Craig
                  Proctor, he transformed his mindset and his business, scaling to $3M+ per year in commissions and
                  selling over 3,500 homes.
                </p>

                {/* Quote */}
                <div className="mt-8 flex items-start gap-4">
                  <svg
                    className="h-12 w-12 text-[#2aa7ff] flex-none"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>

                  <p className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-snug">
                    Don&apos;t just be the
                    <br />
                    hunter, become the hunted.
                  </p>
                </div>
              </div>

              {/* RIGHT - Empty space for layout */}
              <div className="hidden lg:block"></div>
            </div>

            {/* Corner rounding visible */}
            <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/5" />
          </div>
        </div>
      </section>

      {/* BOTTOM: Principles (white area like screenshot) */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto w-full max-w-[1600px] px-6 lg:px-12">
          <p className="text-center text-black/70 text-base md:text-lg lg:text-xl max-w-3xl mx-auto">
            He&apos;s giving you the exact playbook he built from the ground up, so you don&apos;t have to learn the hard way.
          </p>

          <p className="mt-4 text-center font-semibold text-lg md:text-xl lg:text-2xl" style={{ color: '#168EE4' }}>
            This philosophy is built on three core principles:
          </p>

          <div className="mt-12 grid gap-12 md:grid-cols-3">
            {principles.map((p, idx) => (
              <div key={idx}>
                <Dots activeIndex={idx} />
                <h3 className="text-black font-semibold text-lg md:text-xl lg:text-2xl">
                  {p.title}
                </h3>
                <p className="mt-3 text-black/60 text-sm md:text-base lg:text-lg leading-relaxed">
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
