"use client";

import { useState } from "react";

const learnItems = [
  {
    title: "Strategic Thinking Over Brute Force",
    description:
      'Instead of asking "self-motivated" probing questions too early and decreasing rapport, Brian teaches you to "strategize... in advance" with messages that genuinely interest prospects, such as offering access to bank foreclosures, short sales, or recent price reductions.',
  },
  {
    title: "Embrace Change, Don't Resist It",
    description:
      "Every market shift creates winners and losers. Brian shows you how to adjust your strategy, messaging, and offers in real time so you don't just survive change, you capitalize on it while others fall behind.",
  },
  {
    title: "Relax Your Ego, Add Value",
    description:
      "The fastest way to lose trust is to make it about you. Brian teaches you how to shift from proving yourself to serving your market—so clients feel understood, supported, and confident choosing you without pressure or persuasion.",
  },
  {
    title: "Learn from Proven Success",
    description:
      "Every strategy Brian teaches has been pressure-tested in competitive markets. You'll learn exactly what works, why it works, and how to apply it immediately. without wasting time on tactics that don't move the needle.",
  },
];

export default function WhatYouWillLearnSection() {
  const [expandedIndex, setExpandedIndex] = useState(0);
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column */}
          <div>
            {/* Section Heading */}
            <div className="text-[#1568F7] font-semibold text-sm md:text-base uppercase tracking-wider mb-4">
              WHAT YOU WILL LEARN
            </div>

            {/* Main Title */}
            <h2 className="text-black font-medium text-3xl md:text-4xl lg:text-5xl leading-tight mb-6">
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
            <button className="rounded-full bg-black text-white px-8 py-4 text-base md:text-lg font-medium hover:bg-black/90 transition-colors">
              Book a Free Discovery Call
            </button>
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            {learnItems.map((item, index) => {
              const isExpanded = expandedIndex === index;
              return (
                <div
                  key={index}
                  className={`p-6 rounded-lg border border-gray-200 transition-all cursor-pointer ${
                    isExpanded ? "bg-gray-100" : "bg-white hover:bg-gray-50"
                  }`}
                  onClick={() => setExpandedIndex(isExpanded ? -1 : index)}
                >
                  <div className="flex items-start gap-4">
                    {/* Blue Circle Icon */}
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#1568F7] mt-1" />

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-black font-bold text-lg md:text-xl mb-2">{item.title}</h3>
                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          isExpanded ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                        }`}
                      >
                        <p className="text-black/80 text-sm md:text-base leading-relaxed pt-2">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    {/* Arrow Icon */}
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                      <svg
                        className={`w-4 h-4 text-[#1568F7] transition-transform duration-300 ${
                          isExpanded ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

