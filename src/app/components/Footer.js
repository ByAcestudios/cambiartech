import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#071527] text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <Image
              src="/cambiar-logo.png"
              alt="Cambiar Logo"
              width={140}
              height={35}
              className="w-auto h-auto"
            />
            <p className="text-gray-400">
              Revolutionizing the future of technology through innovative solutions and transformative change.
            </p>
          </div>

          {/* Locations */}
          <div>
            <h3 className="text-lg font-bold mb-4">Our Locations</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-[#0cd3b6]">Lagos, Nigeria</h4>
                <p className="text-gray-400 mt-1">Innovation Hub</p>
                {/* <p className="text-gray-400">Cafeone, University of Lagos</p> */}
                <p className="text-gray-400">14 Kekereowo St, Mushin, Lagos 102215, Lagos, Nigeria</p>
              </div>
              <div>
                <h4 className="font-medium text-[#0cd3b6]">Delaware, United States</h4>
                <p className="text-gray-400 mt-1">Corporate Office</p>
                <p className="text-gray-400">8 The Green, Suite B</p>
                <p className="text-gray-400">Dover, Delaware</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="text-gray-400 hover:text-[#0cd3b6] transition-colors">About Us</Link></li>
              <li><Link href="/#portfolio" className="text-gray-400 hover:text-[#0cd3b6] transition-colors">Portfolio</Link></li>
              <li><Link href="/#core-values" className="text-gray-400 hover:text-[#0cd3b6] transition-colors">Core Values</Link></li>
              <li><Link href="/" className="text-gray-400 hover:text-[#0cd3b6] transition-colors">Careers</Link></li>
              <li><Link href="/#contact" className="text-gray-400 hover:text-[#0cd3b6] transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Legal</h3>
            <ul className="space-y-3">
              <li><Link href="/terms" className="text-gray-400 hover:text-[#0cd3b6] transition-colors">Terms &amp; Conditions</Link></li>
              <li><Link href="/refund" className="text-gray-400 hover:text-[#0cd3b6] transition-colors">Refund Policy</Link></li>
              <li><Link href="/privacy" className="text-gray-400 hover:text-[#0cd3b6] transition-colors">Privacy Policy</Link></li>
              <li><Link href="/faq" className="text-gray-400 hover:text-[#0cd3b6] transition-colors">FAQs</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Get in Touch</h3>
            <div className="space-y-3">
              <a href="mailto:hello@cambiar.tech" 
                 className="flex items-center gap-2 text-gray-400 hover:text-[#0cd3b6] transition-colors">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                hello@cambiartech.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Cambiar Technologies LLC. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-gray-400 hover:text-[#0cd3b6] transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-gray-400 hover:text-[#0cd3b6] transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
} 