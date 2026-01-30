import Image from "next/image";

const testimonials = [
  {
    quote: "Brian, Great call with our team yesterday! You were right -- everyone was engaged. Guillermo told me that the call yesterday was the best hour of real estate training that he has ever received! He is a 15 year veteran in the business and was with KW for the last 9 years (who is known for their agent training) -- plus he holds nothing back, so I know that he meant it sincerely. Thanks again for a great call!",
    author: "Jared & Victoria Erfle",
    title: "Palmdale CA",
    rating: 5.0,
  },
  {
    quote: "I am so excited! Had a coaching call with Brian Moses and implemented 1 strategy to attract sellers.... 12 leads in 24 hours and 8 appointments booked!",
    author: "Andy Richardson",
    title: "Wilmington, DE",
    rating: 5.0,
  },
  {
    quote: "I've had many coaches and not one of them has ever come close to making such an impact in my business and my life like Brian has! I thank you from the bottom of my heart!",
    author: "Jeremy Mellick",
    title: "Seattle, WA",
    rating: 5.0,
  },
  {
    quote: "Brian Moses is The Master and so genuine! One of the people you meet in life and later look back at that moment as the turning point!",
    author: "Jay Kinder",
    title: "Laughton, OK",
    rating: 5.0,
  },
  {
    quote: "Brian Has been an invaluable source of experience and wisdom to our industry. He's helped thousands change the trajectory of their careers. Sharing your process is truly a gift to current and future real estate professionals. Thank you!",
    author: "Amy Stoehr",
    title: "CEO Star Power",
    rating: 5.0,
  },
  {
    quote: "I met Brian in the early 90's and have been impressed with his accomplishments and rise to the top! We've hired him multiple times to share his insights with our team and love how he provides a different and refreshing perspective on all things!",
    author: "Lillian Montalto",
    title: "Featured on Lottery Dream Home",
    rating: 5.0,
  },
  {
    quote: "Brian Moses was a huge inspiration to me when I started in real estate. He's one of the best when it comes to crafting super influential presentations, handling objections and why we worked and collaborated together for the last 15 years!",
    author: "Anthony Lamacchia",
    title: "Offices in MA, NH, CT, ME, RI & FL - Over 2 Billion in Annual Sales Volume",
    rating: 5.0,
  },
  {
    quote: "Brian has worked with our company for a long time, I've personally worked with Brian 1 on 1, I've seen him speak multiple times over the last 15 years, he's worked with our team, worked with a lot of our clients, he's terrific, one of the best real estate coaches in the entire Industry!",
    author: "Shant Banosian",
    title: "President RATE Mortgage",
    rating: 5.0,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="relative bg-white py-16 md:py-24">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8 mb-12">
        {/* Main Heading */}
        <h2 className="text-center text-black font-normal text-2xl md:text-3xl lg:text-4xl mb-4">
          These real estate agents didn&apos;t just hire Brian, they transformed their businesses and lives.
        </h2>
      </div>

      {/* Testimonials Marquee (Edge to Edge) */}
      <div className="overflow-hidden w-full -mx-6 lg:-mx-8">
        <div className="marquee flex items-start gap-8">
          {[...Array(2)].flatMap((_, loop) =>
            testimonials.map((testimonial, i) => (
              <div
                key={`${loop}-${i}`}
                className="flex-shrink-0 w-[300px] sm:w-[350px] md:w-[450px] lg:w-[500px]"
              >
                <div className="bg-white p-6 md:p-8 rounded-lg border border-gray-200 h-full">
                  {/* Quote */}
                  <p className="text-black font-bold text-base md:text-lg mb-4 leading-relaxed">
                    &quot;{testimonial.quote}&quot;
                  </p>

                  {/* Divider */}
                  <div className="h-px bg-gray-300 mb-4"></div>

                  {/* Author Info */}
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-black font-bold text-sm md:text-base">
                        {testimonial.author}
                      </p>
                      <p className="text-black text-sm md:text-base">
                        {testimonial.title}
                      </p>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-2">
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className="w-4 h-4 text-[#2aa7ff]"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="text-[#2aa7ff] font-semibold text-sm md:text-base">
                        {testimonial.rating}
                      </span>
                    </div>
                  </div>

                  {/* Quotation Mark Icon */}
                  <div className="mt-4 flex justify-end">
                    <svg
                      className="w-12 h-12 text-[#AADBFF] opacity-50"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* CTA Button */}
      <div className="mt-12 text-center">
        <button className="rounded-full bg-black text-white px-8 py-4 text-base md:text-lg font-medium hover:bg-gray-900 transition-colors">
          Start Your Success Story
        </button>
      </div>
    </section>
  );
}

