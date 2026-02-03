import Image from "next/image";

export default function AttractDontChaseSection() {
  return (
    <section className="relative bg-white py-16 md:py-24">
      <div className="w-full mx-auto max-w-[92%] px-[3px] lg:px-[2px]">
        {/* Top Offers Section */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-6 mb-20">
          {/* Left Offer: Free Resources */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <div className="relative w-40 h-52 sm:w-48 sm:h-64 md:w-80 md:h-96 lg:w-96 lg:h-[28rem] flex-shrink-0 mx-auto md:mx-0">
              <Image
                src="/images/free_resource/3a61270e-38a9-4a9b-aef9-b7e0c275c19b 1.png"
                alt="Free Resources"
                fill
                className="object-contain"
              />
            </div>
            <div className="flex-1 flex flex-col h-full text-center md:text-left w-full">
              <div className="mb-6">
                <h3 className="font-bold text-lg sm:text-xl md:text-2xl mb-3 md:mb-2" style={{ color: '#1568F7' }}>
                  Free Resources & Downloads
                </h3>
                <p className="text-black text-sm sm:text-base md:text-lg leading-relaxed">
                  Download &apos;Swipe & Deploy Files&apos; and &apos;How To Attract, Not Chase&apos; strategies to implement immediately.
                </p>
              </div>
              <div className="mt-auto md:mt-auto">
                <button className="w-full md:w-auto rounded-full bg-white text-black px-6 py-3 text-sm md:text-base font-medium border-2 border-black hover:bg-gray-50 transition-colors">
                  Download Free Resources
                </button>
              </div>
            </div>
          </div>

          {/* Right Offer: Join Community */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <div className="relative w-40 h-52 sm:w-48 sm:h-64 md:w-80 md:h-96 lg:w-96 lg:h-[28rem] flex-shrink-0 mx-auto md:mx-0">
              <Image
                src="/images/free_resource/3a61270e-38a9-4a9b-aef9-b7e0c275c19b 1 (1).png"
                alt="Join Community"
                fill
                className="object-contain"
              />
            </div>
            <div className="flex-1 flex flex-col h-full text-center md:text-left w-full">
              <div className="mb-6">
                <h3 className="font-bold text-lg sm:text-xl md:text-2xl mb-3 md:mb-2" style={{ color: '#1568F7' }}>
                  Join Our Community
                </h3>
                <p className="text-black text-sm sm:text-base md:text-lg leading-relaxed">
                  Connect with top agents and access free training in the Real Estate Training Breakthroughs & Customized Coaching Community on Facebook.
                </p>
              </div>
              <div className="mt-auto md:mt-auto">
                <button className="w-full md:w-auto rounded-full bg-white text-black px-6 py-3 text-sm md:text-base font-medium border-2 border-black hover:bg-gray-50 transition-colors">
                  Join Our Community
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Why "Attract, Don't Chase" Wins Section */}
        <div className="text-center mb-16">
          <h2 className="text-black font-medium text-4xl md:text-5xl lg:text-6xl mb-6">
            Why the Opposite of What You&apos;ve Been Taught Works 1,000x Better!
          </h2>
          <p className="text-black text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto mb-4 leading-relaxed">
            You&apos;ve been told the path to success is cold calls, door knocking, and relentless hustle. But what if the real power move is doing less of what burns you out, and more of what brings results?
          </p>
          <p className="text-black text-lg md:text-xl lg:text-2xl font-medium">
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
              <p className="text-black text-base md:text-lg leading-relaxed">
                We help you dramatically cut costs - starting with your cost per lead and cost per sale. By leveraging proven best practices, low cost and free lead sources available to you and smarter strategies, you get a higher ROI without relying on expensive 3rd party platforms or having to pay hefty referral fees. Instead of building these 3rd party&apos;s brands, you&apos;ll optimize everything you&apos;re already doing and strengthen your own brand, positioning yourself as a dominant player in your market.
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
              <p className="text-black text-base md:text-lg leading-relaxed">
                Understand there is a huge difference between people and people who are actually thinking of buying or selling... Most Realtors are trained to prospect people. That is massively time consuming! Imagine being able to only have to talk to people who are already thinking about buying or selling... Exhausting follow up goes way down, conversion goes way up! When you are talking to the right people (buyers and sellers) you can talk to far fewer and sell a ton more homes!
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action Footer */}
        <div className="text-center max-w-5xl mx-auto">
          <p className="text-black text-lg md:text-xl lg:text-2xl mb-4 leading-relaxed">
            This isn&apos;t difficult, it&apos;s time to Stop thinking like a Realtor and create a business that is consistent, predictable and serves your life.
          </p>
          <p className="text-black font-bold text-2xl md:text-3xl lg:text-4xl mb-12">
            Ready to Make the Transformation?
          </p>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
            {/* Inner Circle Card */}
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex flex-col">
              <div className="flex-grow">
                <p className="text-black text-sm md:text-base leading-relaxed">
                  Ideal for agents producing 0-15 sales annually or income is &lt;$200,000 and they want more
                </p>
              </div>
              <div className="mt-auto pt-6">
                <button className="w-full rounded-full bg-black text-white px-6 py-4 text-base md:text-lg font-semibold hover:bg-gray-900 transition-colors">
                  Inner Circle Group Coaching
                </button>
              </div>
            </div>
            
            {/* 1-on-1 Coaching Card */}
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex flex-col">
              <div className="flex-grow">
                <p className="text-black text-sm md:text-base leading-relaxed">
                  Ideal for agents doing more than 15 deals annually and making &gt;$200,000 a year. Apply for your free business evaluation call and secure your spot today.
                </p>
              </div>
              <div className="mt-auto pt-6">
                <button className="w-full rounded-full bg-black text-white px-6 py-4 text-base md:text-lg font-semibold hover:bg-gray-900 transition-colors">
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

