import Image from "next/image";

export default function AttractDontChaseSection() {
  return (
    <section className="relative bg-white py-16 md:py-24">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        {/* Top Offers Section */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-20">
          {/* Left Offer: Free Resources */}
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="relative w-64 h-80 md:w-80 md:h-96 lg:w-96 lg:h-[28rem] flex-shrink-0">
              <Image
                src="/images/free_resource/3a61270e-38a9-4a9b-aef9-b7e0c275c19b 1.png"
                alt="Free Resources"
                fill
                className="object-contain"
              />
            </div>
            <div className="flex-1">
              <div className="mb-6">
                <h3 className="font-bold text-xl md:text-2xl mb-2" style={{ color: '#1568F7' }}>
                  Free Resources & Downloads
                </h3>
                <p className="text-black text-base md:text-lg leading-relaxed">
                  Download &apos;Swipe & Deploy Files&apos; and &apos;How To Attract, Not Chase&apos; strategies to implement immediately.
                </p>
              </div>
              <button className="rounded-full bg-white text-black px-6 py-3 text-sm md:text-base font-medium border-2 border-black hover:bg-gray-50 transition-colors">
                Download Free Resources
              </button>
            </div>
          </div>

          {/* Right Offer: Join Community */}
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="relative w-64 h-80 md:w-80 md:h-96 lg:w-96 lg:h-[28rem] flex-shrink-0">
              <Image
                src="/images/free_resource/3a61270e-38a9-4a9b-aef9-b7e0c275c19b 1 (1).png"
                alt="Join Community"
                fill
                className="object-contain"
              />
            </div>
            <div className="flex-1">
              <div className="mb-6">
                <h3 className="font-bold text-xl md:text-2xl mb-2" style={{ color: '#1568F7' }}>
                  Join Our Community
                </h3>
                <p className="text-black text-base md:text-lg leading-relaxed">
                  Connect with top agents and access free training in the Real Estate Training Breakthroughs & Customized Coaching Community on Facebook.
                </p>
              </div>
              <button className="rounded-full bg-white text-black px-6 py-3 text-sm md:text-base font-medium border-2 border-black hover:bg-gray-50 transition-colors">
                Join Our Community
              </button>
            </div>
          </div>
        </div>

        {/* Why "Attract, Don't Chase" Wins Section */}
        <div className="text-center mb-16">
          <h2 className="text-black font-medium text-4xl md:text-5xl lg:text-6xl mb-6">
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
          <div className="relative rounded-lg p-8 md:p-10 overflow-hidden">
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-blue-100 via-blue-50 to-white"></div>
            <div className="relative z-10">
              <div className="flex items-start gap-4 mb-6">
                <div className="relative w-12 h-12 flex-shrink-0">
                  <Image
                    src="/images/plus_icon.png"
                    alt="Plus icon"
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="font-bold text-xl md:text-2xl" style={{ color: '#1568F7' }}>
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
          </div>

          {/* Right Box: Work With People Who Are Ready to Act */}
          <div className="relative rounded-lg p-8 md:p-10 overflow-hidden">
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-blue-100 via-blue-50 to-white"></div>
            <div className="relative z-10">
              <div className="flex items-start gap-4 mb-6">
                <div className="relative w-12 h-12 flex-shrink-0">
                  <Image
                    src="/images/people_icon.png"
                    alt="People icon"
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="font-bold text-xl md:text-2xl" style={{ color: '#1568F7' }}>
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
        </div>

        {/* Call to Action Footer */}
        <div className="text-center">
          <p className="text-black text-lg md:text-xl mb-4">
            This is more than data, it&apos;s your path to leverage, consistency, and peace of mind.
          </p>
          <p className="text-black font-bold text-xl md:text-2xl mb-8">
            Ready to ditch the chase?
          </p>
          <button className="rounded-full bg-black text-white px-8 py-4 text-base md:text-lg font-medium hover:bg-gray-900 transition-colors">
            Book a Free Discovery Call
          </button>
        </div>
      </div>
    </section>
  );
}

