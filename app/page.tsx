import Image from "next/image";
import Navbar from "@/components/Navbar";
import FreeTrainingSection from "@/components/FreeTrainingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import WorkWithBrianSection from "@/components/WorkWithBrianSection";
import AttractDontChaseSection from "@/components/AttractDontChaseSection";
import TypicalOutcomesSection from "@/components/TypicalOutcomesSection";
import BrianStorySection from "@/components/BrianStorySection";
import QuoteSection from "@/components/QuoteSection";
import WhatYouWillLearnSection from "@/components/WhatYouWillLearnSection";
import WorkLessEarnMoreSection from "@/components/WorkLessEarnMoreSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative bg-[#0a0a0a] py-8 md:py-12">
        <div className="mx-auto w-full px-6 lg:px-12">
          {/* Background Image Section with Rounded Corners */}
          <div className="relative min-h-[92vh] rounded-3xl overflow-hidden">
            <Image
              src="/images/Frame 8.png"
              alt="Hero background"
              fill
              priority
              className="object-cover object-center"
            />

            {/* Content Overlay */}
            <div className="relative z-10 h-full mx-auto w-full px-6 lg:px-12">
              <div className="grid min-h-[92vh] items-center gap-10 lg:grid-cols-2 pt-24 pb-14">
                {/* Left Content */}
                <div>
                  <h1 className="text-white font-normal leading-[1.05] text-4xl md:text-5xl lg:text-6xl xl:text-7xl whitespace-nowrap">
                    Attract, don&apos;t chase!
                  </h1>

                  <div className="mt-8 space-y-6">
                    <p className="text-white/85 text-lg md:text-xl lg:text-2xl leading-relaxed">
                      If you want to build a real estate business that generates for you revenue, time and freedom, stop chasing leads, become a market leader.
                    </p>

                    <p
                      className="text-lg md:text-xl lg:text-2xl leading-relaxed"
                      style={{ color: "#AADBFF" }}
                    >
                      Brian Moses went from $18K to $3M a year and now teaches real estate agents how to attract clients on demand to build a business that serves their life.
                    </p>
                  </div>

                  <div className="mt-10">
                    <button className="rounded-full bg-white text-black px-8 py-4 text-base md:text-lg lg:text-xl font-medium hover:bg-gray-100 transition-colors">
                      Get the Free &quot;Get Listings Fast&quot; Training
                    </button>
                  </div>
                </div>

                {/* Right "space" column to match screenshot composition */}
                <div className="hidden lg:block" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS & SOCIAL PROOF */}
      <section className="relative bg-[#0a0a0a] py-16 md:py-20">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
          {/* Main Heading */}
          <h2 className="text-center uppercase text-white font-light tracking-wide text-base md:text-lg lg:text-xl xl:text-2xl">
            BRIAN HAS INSPIRED MORE THAN 10,000 REAL ESTATE AGENTS AND INDUSTRY
            PROFESSIONALS ACROSS NORTH AMERICA
          </h2>

          {/* Achievements Grid (6 items across like reference) */}
          <div className="mt-12 grid gap-8 md:grid-cols-3 lg:grid-cols-6">
            {[
              "Named one of the 125 Most Influential People in Real Estate (Success Magazine)",
              "Ranked #2 Worldwide in a major real estate franchise, 7 years in the Top 10",
              "Creator of the 'Attract, Don't Chase' model transforming how agents scale fast",
              "Featured on Real Estate Rockstars, Super Agents Live, RISMedia, National Panels & TV Interviews",
              "Built a 400+ agent revenue share team at eXp Realty by mentoring through results—not theory",
              "Booked by AT&T, Motorola, Ford & more to ignite team performance",
            ].map((t, i) => (
              <div key={i} className="flex gap-3">
                <span className="mt-2 h-2.5 w-2.5 flex-none bg-[#AADBFF]" />
                <p className="text-white/85 text-base md:text-lg leading-relaxed">{t}</p>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="my-12 h-px w-full bg-white/15" />

          {/* Media Logos */}
          <div className="flex justify-center items-center gap-6 md:gap-8 lg:gap-10 xl:gap-12 w-full">
            <Image
              src="/images/logos/Frame 1000003716.png"
              alt="Partner logo"
              width={140}
              height={64}
              className="h-14 md:h-16 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
            />
            <Image
              src="/images/logos/Frame 1000003717.png"
              alt="Partner logo"
              width={140}
              height={64}
              className="h-14 md:h-16 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
            />
            <Image
              src="/images/logos/Frame 1000003718.png"
              alt="Partner logo"
              width={140}
              height={64}
              className="h-14 md:h-16 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
            />
            <Image
              src="/images/logos/Frame 1000003719.png"
              alt="Partner logo"
              width={140}
              height={64}
              className="h-14 md:h-16 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
            />
            <Image
              src="/images/logos/Frame 1000003720.png"
              alt="Partner logo"
              width={140}
              height={64}
              className="h-14 md:h-16 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
            />
            <Image
              src="/images/logos/Frame 1000003721.png"
              alt="Partner logo"
              width={140}
              height={64}
              className="h-14 md:h-16 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
            />
          </div>

          {/* Trusted By Heading */}
          <h3 className="mt-12 text-center uppercase text-white font-bold tracking-wide text-base md:text-lg lg:text-xl">
            TRUSTED BY THE BEST
          </h3>
        </div>

        {/* Trusted By Logos - Marquee (Edge to Edge) */}
        <div className="mt-8 overflow-hidden w-full -mx-6 lg:-mx-8">
          <div className="marquee flex items-center gap-14">
              {[...Array(2)].flatMap((_, loop) =>
                [
                  "/images/trusted_by/Frame 1000007701.png",
                  "/images/trusted_by/Frame 1000007702.png",
                  "/images/trusted_by/Frame 1000007703.png",
                  "/images/trusted_by/Frame 1000007704.png",
                  "/images/trusted_by/Frame 1000007705.png",
                  "/images/trusted_by/Frame 1000007706.png",
                  "/images/trusted_by/Frame 1000007707.png",
                  "/images/trusted_by/Frame 1000007708.png",
                  "/images/trusted_by/Frame 1000007709.png",
                  "/images/trusted_by/Frame 1000007710.png",
                  "/images/trusted_by/Frame 1000007711.png",
                  "/images/trusted_by/Frame 1000007712.png",
                  "/images/trusted_by/Frame 1000007713.png",
                  "/images/trusted_by/Frame 1000007714.png",
                ].map((src) => (
                  <Image
                    key={`${loop}-${src}`}
                    src={src}
                    alt="Trusted by logo"
                    width={140}
                    height={64}
                    className="h-12 md:h-14 w-auto object-contain opacity-80"
                  />
                ))
              )}
          </div>
        </div>
      </section>

      {/* Free Training Section */}
      <FreeTrainingSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Work with Brian Section */}
      <WorkWithBrianSection />

      {/* Attract Don't Chase Section */}
      <AttractDontChaseSection />

      {/* Typical Outcomes Section */}
      <TypicalOutcomesSection />

      {/* Brian Story Section */}
      <BrianStorySection />

      {/* Quote Section */}
      <QuoteSection />

      {/* What You Will Learn Section */}
      <WhatYouWillLearnSection />

      {/* Work Less Earn More Section */}
      <WorkLessEarnMoreSection />

      {/* Footer */}
      <Footer />
    </>
  );
}
