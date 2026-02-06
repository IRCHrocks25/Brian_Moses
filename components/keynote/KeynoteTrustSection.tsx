import Image from "next/image";

export default function KeynoteTrustSection() {
  return (
    <section className="relative py-16 md:py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a1f3a] to-[#0a0a0a]"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-transparent to-[#0a0a0a]"></div>
      <div className="relative z-10">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
          {/* Main Heading */}
          <h2 className="text-center text-white font-light tracking-wide text-base md:text-lg lg:text-xl xl:text-2xl mb-4">
            Here&apos;s Why Agents Trust Brian&apos;s System
          </h2>
          <p className="text-center text-white font-light tracking-wide text-lg md:text-xl lg:text-2xl xl:text-3xl max-w-5xl mx-auto leading-relaxed">
            Brian Has Inspired More Than 20,000 Real Estate Agents & Industry Professionals Across North America
          </p>

          {/* Achievements Grid (Keep first 2, optionally add 3rd) */}
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              "Named one of the 125 Most Influential People in Real Estate (Success Magazine)",
              "Ranked #2 Worldwide in a major real estate franchise, 7 years in the Top 10",
              "Brian Moses coaches and trains North America's most successful agents. These agents average over $1 Million Dollars in Annual Income and you can too.",
            ].map((t, i) => (
              <div key={i} className="flex gap-3">
                <span className="mt-2 h-2.5 w-2.5 flex-none bg-[#AADBFF]" />
                <p className="text-white/85 text-sm md:text-base leading-snug">{t}</p>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="my-12 h-px w-full bg-white/15" />

          {/* Media Logos - Keep existing logos visible, ready to replace with new company logos when available */}
          <div className="flex flex-nowrap justify-center items-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 w-full overflow-x-auto">
            {/* Existing logos - keep these until new logos are added:
                New company logos to add: Reel Geeks, Commissions Inc, Prime Seller Leads, 
                Listings to Leads, Sierra Interactive, Y-Lopo, Tiger Leads
            */}
            <Image
              src="/images/logos/Frame 1000003716.png"
              alt="Partner logo"
              width={140}
              height={64}
              className="h-12 sm:h-14 md:h-16 w-auto flex-shrink-0 object-contain opacity-80 hover:opacity-100 transition-opacity"
            />
            <Image
              src="/images/logos/Frame 1000003717.png"
              alt="Partner logo"
              width={140}
              height={64}
              className="h-12 sm:h-14 md:h-16 w-auto flex-shrink-0 object-contain opacity-80 hover:opacity-100 transition-opacity"
            />
            <Image
              src="/images/logos/Frame 1000003718.png"
              alt="Partner logo"
              width={140}
              height={64}
              className="h-12 sm:h-14 md:h-16 w-auto flex-shrink-0 object-contain opacity-80 hover:opacity-100 transition-opacity"
            />
            <Image
              src="/images/logos/Frame 1000003719.png"
              alt="Partner logo"
              width={140}
              height={64}
              className="h-12 sm:h-14 md:h-16 w-auto flex-shrink-0 object-contain opacity-80 hover:opacity-100 transition-opacity"
            />
            <Image
              src="/images/logos/Frame 1000003720.png"
              alt="Partner logo"
              width={140}
              height={64}
              className="h-12 sm:h-14 md:h-16 w-auto flex-shrink-0 object-contain opacity-80 hover:opacity-100 transition-opacity"
            />
            <Image
              src="/images/logos/Frame 1000003721.png"
              alt="Partner logo"
              width={140}
              height={64}
              className="h-12 sm:h-14 md:h-16 w-auto flex-shrink-0 object-contain opacity-80 hover:opacity-100 transition-opacity"
            />
          </div>

          {/* Trusted By Heading */}
          <h3 className="mt-12 text-center uppercase text-white font-light tracking-wide text-base md:text-lg lg:text-xl">
            TRUSTED BY THE BEST
          </h3>
        </div>

        {/* Trusted By Logos - Marquee (Edge to Edge) - All existing logos displayed */}
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
                  // Note: When ready to add new real estate brand logos, add the image files to /public/images/trusted_by/:
                  // exp.png, compass.png, home-smart.png, lpt-realty.png, real-brokerage.png, 
                  // howard-hannah.png, lamacchia-real-estate.png, miranda-real-estate-group.png
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
      </div>
    </section>
  );
}

