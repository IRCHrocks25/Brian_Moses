import Image from "next/image";

const programs = [
  {
    program: "PROGRAM1",
    title: "Inner Circle Group Coaching",
    desc: "Weekly breakthroughs. Tactical training. A tribe of producers who don't play small.",
    bullet: "Ideal for agents ready to scale fast in a powerful community.",
    image: "/work_with_brian/Frame 1000007719.png",
  },
  {
    program: "PROGRAM2",
    title: "1-on-1 Coaching with Brian",
    desc: "Private access. Custom blueprints. Fast-track your goals.",
    bullet: "For the agent or team leader who wants full acceleration.",
    image: "/work_with_brian/Frame 1000007719 (1).png",
  },
  {
    program: "",
    title: "Keynote Speaking for Real Estate\n& Corporate Events",
    desc: "Motivational. Tactical. Unforgettable.",
    bullet: "For companies, brokerages, or conferences ready to spark lasting change.",
    image: "/work_with_brian/Ekran Resmi 2025-09-30 12.51.10 1.png",
  },
];

export default function WorkWithBrianSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background (edge-to-edge) */}
      <div className="absolute inset-0 bg-[#000614]" />
      <div 
        className="absolute inset-0" 
        style={{ background: 'linear-gradient(to bottom, #1568F7 0%, #000614 100%)' }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#000614] via-transparent to-[#000614]" />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-24">
        {/* Heading */}
        <h2 className="text-center text-white font-light text-2xl md:text-3xl lg:text-4xl leading-tight max-w-5xl mx-auto">
          Work with Brian to learn the exact playbook that took him from $18K/year to $3M+/year with over 3,500 homes sold.
        </h2>

        {/* Cards */}
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {programs.map((p, idx) => (
            <div
              key={idx}
              className="relative rounded-xl overflow-hidden border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur-sm"
            >
              {/* Card gradient background */}
              <div className="absolute inset-0 bg-[#000614]" />
              <div 
                className="absolute inset-0" 
                style={{ background: 'linear-gradient(to bottom, #1568F7 0%, #000614 100%)' }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#000614] via-transparent to-[#000614]" />
              {/* Image */}
              <div className="relative z-10 h-44 md:h-48">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="object-cover object-center"
                  priority={idx === 0}
                />
                {/* top image dark overlay for readability */}
                <div className="absolute inset-0 bg-black/25" />
              </div>

              {/* Content */}
              <div className="relative z-10 px-6 py-6 md:px-7">
                {/* Program label */}
                {p.program ? (
                  <div className="text-[11px] tracking-[0.22em] uppercase text-white/55">
                    {p.program}
                  </div>
                ) : (
                  <div className="h-[16px]" />
                )}

                {/* Title */}
                <h3 className="mt-2 text-white font-semibold text-lg md:text-xl leading-snug whitespace-pre-line">
                  {p.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-white/72 text-sm md:text-[15px] leading-relaxed">
                  {p.desc}
                </p>

                {/* Bullet */}
                <div className="mt-5 flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#9bd7ff] flex-none" />
                  <p className="text-white/70 text-sm leading-relaxed">{p.bullet}</p>
                </div>

                {/* Button */}
                <div className="mt-7">
                  <button className="inline-flex items-center justify-center rounded-full border border-white/35 px-5 py-2.5 text-sm text-white/90 hover:text-white hover:border-white/60 transition">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Optional bottom fade like reference */}
        <div className="pointer-events-none absolute left-0 right-0 bottom-0 h-16 bg-gradient-to-t from-black/40 to-transparent" />
      </div>
    </section>
  );
}
