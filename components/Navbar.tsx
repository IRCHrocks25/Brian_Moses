import Image from "next/image";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-[#0a0a0a] border-b border-white/10">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div className="flex items-center justify-between py-4 md:py-6">
          {/* Logo */}
          <div className="relative">
            <Image
              src="/images/white_logo.png"
              alt="Brian Moses"
              width={150}
              height={40}
              className="h-8 md:h-10 w-auto object-contain"
              priority
            />
          </div>

          {/* Links */}
          <nav className="hidden md:flex items-center gap-8 text-base md:text-lg text-white/80">
            <a href="#home" className="hover:text-white transition-colors">
              Home
            </a>
            <a href="#services" className="hover:text-white transition-colors">
              Services
            </a>
            <a href="#about" className="hover:text-white transition-colors">
              About
            </a>
            <a href="#coaching" className="hover:text-white transition-colors">
              Coaching
            </a>
          </nav>

          {/* CTA */}
          <a
            href="#start"
            className="rounded-full bg-white px-6 py-2.5 text-base md:text-lg font-medium text-black hover:bg-white/90 transition"
          >
            Start now
          </a>
        </div>
      </div>
    </header>
  );
}

