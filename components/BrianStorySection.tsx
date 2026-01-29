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
            </div>

            {/* Content layout (match proportions in screenshot) */}
            <div className="relative grid min-h-[800px] md:min-h-[900px] lg:min-h-[950px] grid-cols-1 lg:grid-cols-[1.5fr_0.5fr]">
              {/* Left text block */}
              <div className="pl-16 pr-10 py-12 md:pl-20 md:pr-14 md:py-16 lg:py-20 text-white">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight max-w-[1000px]">
                  From $18k p.a. to ranked #2 in the world,
                  <br />
                  Brian&apos;s struggle is your shortcut.
                </h2>

                <p className="mt-6 text-white/75 text-lg md:text-xl leading-relaxed max-w-[600px]">
                  Before Brian Moses became one of the world&apos;s top real estate coaches, he was on the verge of quitting.
                  Earning just $18,000 his first year and struggling for five more, he hit the same walls you have. He knew
                  the hustle, the doubt, and the burnout.
                </p>

                <p className="mt-6 font-semibold text-lg md:text-xl max-w-[600px]" style={{ color: "#168EE4" }}>
                  Then, everything changed.
                </p>

                <p className="mt-4 text-white/75 text-lg md:text-xl leading-relaxed max-w-[600px]">
                  He stopped chasing leads and started building a system. Guided by mentors like Tony Robbins and Craig Proctor,
                  he transformed his mindset and his business, scaling to $3M+ per year in commissions and selling over 3,500 homes.
                </p>

                {/* Quote */}
                <p className="mt-4 text-2xl md:text-3xl lg:text-4xl font-semibold leading-snug">
                  Don&apos;t just be the
                  <br />
                  hunter, become the hunted.
                </p>
              </div>

              {/* Right side is just image space (kept empty) */}
              <div className="hidden lg:block" />
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
