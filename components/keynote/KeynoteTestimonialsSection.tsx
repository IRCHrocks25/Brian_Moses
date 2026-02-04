"use client";

import { useState } from "react";

const testimonials = [
  {
    quote: "Brian has had a huge impact on my business and personal growth throughout the last 15+ years. His energy is heartfelt and inspiring. You want to learn from him.",
    author: "Tracy Cousineau",
    title: "Investor, TV Host & Real Estate Brokerage Owner",
  },
  {
    quote: "I've attended seminars by Tony Robbins and Zig Ziglar. Brian Moses is up there with the best of them. His message is unforgettable, inspiring, and transformational.",
    author: "Matt Hennessy",
    title: "Branch Manager, Benchmark Mortgage",
  },
  {
    quote: "I sold 77 homes in my first year because of Brian. He's not just a coach, he's a game-changer!",
    author: "Lynn Montero",
    title: "Real Estate Professional & Coaching Client",
  },
  {
    quote: "He brings clarity, focus, and effective strategy to the forefront. His insights are pure gold.",
    author: "Frank Polsinello",
    title: "Top-Ranked Canadian Realtor, $3B+ Career Sales",
  },
  {
    quote: "One of the best, most energetic motivational speakers I've had the privilege to listen to. Want to move your company forward? Call Brian.",
    author: "Bill Monahan",
    title: "Real Estate Sales, Berkshire Hathaway Home Services",
  },
  {
    quote: "Brian is a true professional. Over the last 20 years, he has helped me overcome many challenges in the mortgage and real estate industry. A mentor, a guide, and a friend.",
    author: "Mat Piwowarski",
    title: "Sales Manager, Jack Moore Associates, Inc.",
  },
];

function TestimonialsMarquee() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div 
      className={`marquee-testimonials flex items-start gap-8 ${isPaused ? 'paused' : ''}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {[...Array(2)].flatMap((_, loop) =>
        testimonials.map((testimonial, i) => (
          <div
            key={`${loop}-${i}`}
            className="flex-shrink-0 w-[300px] sm:w-[350px] md:w-[450px] lg:w-[500px]"
          >
            <div className="relative rounded-xl overflow-hidden border border-white/10 bg-[#0a0a0a]/80 backdrop-blur-sm p-6 md:p-8 hover:border-white/20 transition-all hover:shadow-[0_20px_60px_rgba(170,219,255,0.1)] h-full">
              <div className="absolute top-4 right-4">
                <svg className="w-12 h-12 text-[#AADBFF] opacity-20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-white text-lg md:text-xl lg:text-2xl leading-relaxed mb-6 font-medium relative z-10">
                &quot;{testimonial.quote}&quot;
              </p>
              <div className="border-t border-white/10 pt-6">
                <p className="text-white font-semibold text-base md:text-lg">
                  {testimonial.author}
                </p>
                <p className="text-white/70 text-sm md:text-base mt-1">
                  {testimonial.title}
                </p>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default function KeynoteTestimonialsSection() {
  return (
    <section className="relative bg-[#0a0a0a] py-16 md:py-24 overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0f1a2e] to-[#0a0a0a]" />
      
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-12 mb-12">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4">
            What People Are Saying
          </h2>
        </div>
      </div>

      {/* Testimonials Marquee (Edge to Edge) */}
      <div className="overflow-hidden w-full -mx-6 lg:-mx-8">
        <TestimonialsMarquee />
      </div>
    </section>
  );
}

