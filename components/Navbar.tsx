import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-[#0a0a0a] border-b border-white/10">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div className="flex items-center justify-between py-2 md:py-3">
          {/* Logo */}
          <Link href="/" className="relative block">
            <Image
              src="/images/white_logo.png"
              alt="Brian Moses"
              width={75}
              height={20}
              className="h-4 md:h-5 w-auto object-contain"
              priority
            />
          </Link>

          {/* Links */}
          <nav className="hidden md:flex items-center gap-4 text-sm md:text-base text-white/80">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <a href="/#services" className="hover:text-white transition-colors">
              Services
            </a>
            <a href="/#about" className="hover:text-white transition-colors">
              About
            </a>
            <a href="/#coaching" className="hover:text-white transition-colors">
              Coaching
            </a>
            <Link href="/keynote" className="hover:text-white transition-colors">
              Speaker
            </Link>
          </nav>

          {/* CTA */}
          <a
            href="/#start"
            className="rounded-full bg-white px-3 py-1.5 text-sm md:text-base font-medium text-black hover:bg-white/90 transition"
          >
            Start now
          </a>
        </div>
      </div>
    </header>
  );
}

