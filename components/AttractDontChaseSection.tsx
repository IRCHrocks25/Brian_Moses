import Image from "next/image";

export default function AttractDontChaseSection() {
  return (
    <section className="relative bg-white py-16 md:py-24">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        {/* Top Offers Section */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-20">
          {/* Left Offer: Free Resources */}
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="relative w-48 h-64 md:w-56 md:h-72 flex-shrink-0">
              <Image
                src="/images/free_resource/3a61270e-38a9-4a9b-aef9-b7e0c275c19b 1.png"
                alt="Free Resources"
                fill
                className="object-contain"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-[#2aa7ff] font-bold text-xl md:text-2xl mb-4">
                Free Resources & Downloads
              </h3>
              <p className="text-black text-base md:text-lg mb-6 leading-relaxed">
                Download &apos;Swipe & Deploy Files&apos; and &apos;How To Attract, Not Chase&apos; strategies to implement immediately.
              </p>
              <button className="bg-white text-black px-6 py-3 rounded-lg text-sm md:text-base font-medium border-2 border-black hover:bg-gray-50 transition-colors">
                Download Free Resources
              </button>
            </div>
          </div>

          {/* Right Offer: Join Community */}
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="relative w-48 h-64 md:w-56 md:h-72 flex-shrink-0">
              <Image
                src="/images/free_resource/3a61270e-38a9-4a9b-aef9-b7e0c275c19b 1 (1).png"
                alt="Join Community"
                fill
                className="object-contain"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-[#2aa7ff] font-bold text-xl md:text-2xl mb-4">
                Join Our Community
              </h3>
              <p className="text-black text-base md:text-lg mb-6 leading-relaxed">
                Connect with top agents and access free training in the Real Estate Training Breakthroughs & Customized Coaching Community on Facebook.
              </p>
              <button className="bg-white text-black px-6 py-3 rounded-lg text-sm md:text-base font-medium border-2 border-black hover:bg-gray-50 transition-colors">
                Join Our Community
              </button>
            </div>
          </div>
        </div>

        {/* Why "Attract, Don't Chase" Wins Section */}
        <div className="text-center mb-16">
          <h2 className="text-black font-bold text-3xl md:text-4xl lg:text-5xl mb-6">
            Why &quot;Attract, Don&apos;t Chase&quot; Wins
          </h2>
          <p className="text-black text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto mb-4 leading-relaxed">
            You&apos;ve been told the path to success is cold calls, door knocking, and relentless hustle. But what if the real power move is doing less of what burns you out, and more of what brings results?
          </p>
          <p className="text-black text-base md:text-lg font-medium">
            Here&apos;s the proof:
          </p>
        </div>

        {/* Proof/Benefits Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Left Box: Spend Less, Earn More */}
          <div className="bg-[#E8F4FD] rounded-lg p-8 md:p-10">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-[#2aa7ff] rounded-full flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </div>
              <h3 className="text-[#2aa7ff] font-bold text-xl md:text-2xl">
                Spend Less, Earn More
              </h3>
            </div>
            <p className="text-black font-bold text-lg md:text-xl mb-4">
              Inbound leads cost 61% less than outbound ones.
            </p>
            <p className="text-black text-base md:text-lg leading-relaxed">
              That means more ROI and less wasted spend on branding, ads, and outreach that doesn&apos;t convert. The &quot;Attract, Don&apos;t Chase&quot; model isn&apos;t just easier, it&apos;s way more profitable.
            </p>
          </div>

          {/* Right Box: Work With People Who Are Ready to Act */}
          <div className="bg-[#E8F4FD] rounded-lg p-8 md:p-10">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-[#2aa7ff] rounded-full flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-[#2aa7ff] font-bold text-xl md:text-2xl">
                Work With People Who Are Ready to Act
              </h3>
            </div>
            <p className="text-black font-bold text-lg md:text-xl mb-4">
              Attracted leads convert 54% higher than chased leads.
            </p>
            <p className="text-black text-base md:text-lg leading-relaxed">
              They come to you pre-sold, pre-qualified, and already positioned to say yes. No more exhausting follow-up with &quot;just curious&quot; prospects. Work with clients who already see you as the expert.
            </p>
          </div>
        </div>

        {/* Call to Action Footer */}
        <div className="text-center">
          <p className="text-black text-lg md:text-xl mb-4">
            This is more than data, it&apos;s your path to leverage, consistency, and peace of mind.
          </p>
          <p className="text-black font-bold text-xl md:text-2xl mb-8">
            Ready to ditch the chase?
          </p>
          <button className="bg-black text-white px-8 py-4 rounded-lg text-base md:text-lg font-medium hover:bg-gray-900 transition-colors">
            Book a Free Discovery Call
          </button>
        </div>
      </div>
    </section>
  );
}

