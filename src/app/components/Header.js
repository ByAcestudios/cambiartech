import Image from "next/image";

export default function Header() {
  return (
    <nav className="flex items-center justify-between px-4 py-4 sm:px-8">
      <div className="w-32 sm:w-40">
        <Image
          src="/cambiar-logo.png"
          alt="Cambiar Logo"
          width={160}
          height={40}
          className="w-auto h-auto"
          priority
        />
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-8">
        <a href="#about" className="text-gray-300 hover:text-[#0cd3b6] transition-colors">About</a>
        <a href="#services" className="text-gray-300 hover:text-[#0cd3b6] transition-colors">Services</a>
        <a href="#portfolio" className="text-gray-300 hover:text-[#0cd3b6] transition-colors">Portfolio</a>
        <a href="#contact" 
           className="px-4 py-2 border-2 border-white text-white rounded-full 
                    transition-colors hover:bg-white hover:text-[#03292c]">
          Contact Us
        </a>
      </div>

      {/* Mobile Menu Button */}
      <button className="md:hidden text-white p-2">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </nav>
  );
} 