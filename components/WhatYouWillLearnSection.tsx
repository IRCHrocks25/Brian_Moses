const learnItems = [
  {
    title: "Strategic Thinking Over Brute Force",
    description:
      'Instead of asking "self-motivated" probing questions too early and decreasing rapport, Brian teaches you to "strategize... in advance" with messages that genuinely interest prospects, such as offering access to bank foreclosures, short sales, or recent price reductions.',
    highlighted: true,
  },
  {
    title: "Embrace Change, Don't Resist It",
    description: "",
  },
  {
    title: "Relax Your Ego, Add Value",
    description: "",
  },
  {
    title: "Learn from Proven Success",
    description: "",
  },
];

export default function WhatYouWillLearnSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column */}
          <div>
            {/* Section Heading */}
            <div className="text-[#168EE4] font-semibold text-sm md:text-base uppercase tracking-wider mb-4">
              WHAT YOU WILL LEARN
            </div>

            {/* Main Title */}
            <h2 className="text-black font-bold text-3xl md:text-4xl lg:text-5xl leading-tight mb-6">
              Acquire the Mindset and Skills for Success in Real Estate and Life
            </h2>

            {/* Descriptive Paragraph */}
            <p className="text-black text-base md:text-lg leading-relaxed mb-8">
              Brian Moses&apos; coaching is built on a powerful axis of mindset and skills that
              transcends real estate, impacting every facet of your life. He teaches that
              &quot;skills can be learned&quot;, and by adopting the right approach, you can achieve
              anything.
            </p>

            {/* CTA Button */}
            <button className="bg-black text-white px-8 py-4 rounded-lg text-base md:text-lg font-medium hover:bg-black/90 transition-colors">
              Book a Free Discovery Call
            </button>
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            {learnItems.map((item, index) => (
              <div
                key={index}
                className={`p-6 rounded-lg flex items-start gap-4 ${
                  item.highlighted ? "bg-gray-100" : "bg-white border border-gray-200"
                }`}
              >
                {/* Blue Circle Icon */}
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#168EE4] mt-1" />

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-black font-bold text-lg md:text-xl mb-2">{item.title}</h3>
                  {item.description && (
                    <p className="text-black/80 text-sm md:text-base leading-relaxed">
                      {item.description}
                    </p>
                  )}
                </div>

                {/* Arrow Icon */}
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-[#168EE4]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 17L17 7M7 7h10v10"
                    />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

