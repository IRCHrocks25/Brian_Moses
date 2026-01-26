import Image from "next/image";

const testimonials = [
  {
    quote: "Brian isn't just a coach. He's a force. He helped me go from stuck to scaling my business in a few months.",
    author: "Tracy Cousineau",
    title: "Brokerage Owner & TV Host",
    rating: 5.0,
  },
  {
    quote: "Every time I talk to Brian, I walk away with clarity, a plan, and a fire in my belly.",
    author: "Matt Hennessy",
    title: "Certified Mortgage Advisor",
    rating: 5.0,
  },
  {
    quote: "I sold 77 homes my first year working with Brian.",
    author: "Lynn Montero",
    title: "Real Estate Agent & Coaching Client",
    rating: 5.0,
  },
  {
    quote: "If you're serious about leveling up—this is the guy.",
    author: "Jared Erfle",
    title: "Broker & Relocation Specialist",
    rating: 5.0,
  },
  {
    quote: "He turned 20 years of chaos into a predictable, profitable system.",
    author: "Lynn Montero",
    title: "Top Producing Agent",
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
                className="flex-shrink-0 w-[400px] md:w-[450px] lg:w-[500px]"
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

