"use client";

import Image from "next/image";
import { useState } from "react";

const outcomes = [
  {
    icon: "filled",
    title: "Immediately Increase Your Sales & Income",
    description:
      "Learn strategies to 'reduce your wasteful expenses and increase your sales and income immediately'",
  },
  {
    icon: "outline",
    title: "Dominate Your Local Market",
    description:
      "Discover how to 'attract buyers and sellers, differentiate yourself from your competitors, increase your average sales price, and become the dominant agent in your market!'",
  },
  {
    icon: "outline",
    title: "Build a Predictable Business, Not Just a Job",
    description:
      "Create a real estate business that offers 'predictability' and allows you to 'take time off,' freeing you from being constantly on call.",
  },
  {
    icon: "outline",
    title: "Create the Life You Desire",
    description:
      "Design 'the business and life you desire', achieving financial freedom that serves your overall happiness.",
  },
  {
    icon: "outline",
    title: "Generate a Consistent Flow of Quality Leads",
    description:
      "Implement 'strategies, principals and quality lead generation best practices that will accelerate your income and transform your life!'. Ensure a 'consistent flow, a steady stream of highly motivated leads' right to you.",
  },
];

export default function TypicalOutcomesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(0);

  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/background2.png"
          alt="Background"
          fill
          className="object-cover object-center"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[95%] px-6 lg:px-8">
        {/* Top Images */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
            <Image
              src="/images/4_images/GeorgeWBush.png"
              alt="Event image"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
            <Image
              src="/images/4_images/TonyRobbinsBrianCelts.png"
              alt="Event image"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
            <Image
              src="/images/4_images/Hardy3.png"
              alt="Event image"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
            <Image
              src="/images/4_images/Keynote.png"
              alt="Event image"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* TYPICAL OUTCOMES Heading */}
        <div className="flex items-center justify-center gap-3 mb-8">
          {/* Two overlapping circles */}
          <div className="relative flex items-center">
            <div className="w-3 h-3 bg-blue-300 rounded-full absolute left-0"></div>
            <div className="w-3 h-3 bg-[#2aa7ff] rounded-full relative left-1.5"></div>
          </div>
          <h3 className="text-[#2aa7ff] text-sm md:text-base uppercase tracking-wider font-medium">
            TYPICAL OUTCOMES
          </h3>
        </div>

        {/* Main Heading */}
        <h2 className="text-center text-white font-bold text-3xl md:text-4xl lg:text-5xl mb-8">
          <span className="font-light">Why Brian&apos;s</span> <span className="font-bold">Attract, Don&apos;t Chase</span> <span className="font-light">is so powerful</span>
        </h2>

        {/* Description */}
        <p className="text-center text-white text-base md:text-lg lg:text-xl max-w-4xl mx-auto mb-16 leading-relaxed">
          His revolutionary and proven approach: Attract, Don&apos;t Chase, is transformational. It&apos;s based on becoming &quot;the hunted, not the hunter&quot;. Real estate agents learn how to craft &quot;compelling offers and messages&quot; that make it &quot;irresistible for prospects to call you&quot;. This isn&apos;t a &quot;numbers game&quot;; it&apos;s about strategizing your messages in advance to be more efficient and profitable.
        </p>

        {/* Outcomes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 md:gap-10 lg:gap-12 mb-12 items-stretch">
          {outcomes.map((outcome, index) => (
            <div 
              key={index} 
              className="flex flex-col h-full"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(0)}
            >
              {/* Icon and Title */}
              <div className="flex items-start gap-3 mb-3 flex-shrink-0">
                <div className="h-6 flex-shrink-0 mt-1">
                  {hoveredIndex === index ? (
                    <div className="w-6 h-6 bg-[#2aa7ff] rounded-full"></div>
                  ) : (
                    <div className="w-6 h-6 border-2 border-[#2aa7ff] rounded-full"></div>
                  )}
                </div>
                <h3 className="text-white font-bold text-lg md:text-xl flex-1">
                  {outcome.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-white/90 text-sm md:text-base leading-[1.6] flex-grow">
                {outcome.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button className="rounded-full bg-white text-black px-8 py-4 text-base md:text-lg font-medium border-2 border-black hover:bg-gray-100 transition-colors">
            Get the Free &quot;Get Listings Fast&quot; Training
          </button>
        </div>
      </div>
    </section>
  );
}

