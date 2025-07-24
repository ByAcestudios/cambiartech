'use client'
import Image from "next/image";
import { useState, useRef } from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home() {
  const [activeValue, setActiveValue] = useState('C');

  return (
    <div className="min-h-screen bg-[#0A192F] text-white">
      <Header />

      {/* Hero Section */}
      <main className="relative px-4 pt-12 pb-32 sm:px-8 sm:pt-24 overflow-hidden">
        {/* Geometric Background Shapes */}
        <div className="absolute inset-0 w-full h-full pointer-events-none">
          {/* Left purple shape */}
          <div className="absolute left-0 top-1/4 w-[300px] h-[600px] bg-purple-600/30 -rotate-45 transform -translate-x-1/2" />
          
          {/* Right teal shape */}
          <div className="absolute right-0 top-0 w-[400px] h-[400px] bg-[#60e7ff]/20 rotate-45 transform translate-x-1/3" />
          
          {/* Bottom shape */}
          <div className="absolute -bottom-20 right-1/4 w-[500px] h-[200px] bg-[#06bdfc]/20 rotate-12" />
        </div>

        {/* Content */}
        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            <span className="text-[#0cd3b6]">Transforming</span> ideas into
            <span className="block">technological reality</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto mb-12">
            We help companies navigate their digital transformation journey 
            and build innovative solutions that drive growth.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#portfolio" 
               className="px-8 py-4 bg-white text-[#03292c] rounded-full font-medium 
                        hover:bg-opacity-90 transition-all min-w-[200px]">
              Explore Our Work
            </a>
            <a href="#contact" 
               className="px-8 py-4 border-2 border-white text-white rounded-full font-medium 
                        hover:bg-white hover:text-[#03292c] transition-all min-w-[200px]">
              Contact Us
            </a>
          </div>
        </div>
      </main>

      {/* Transformation Section */}
      <section className="relative px-4 py-32 sm:px-8 overflow-hidden bg-white">
        {/* Decorative Elements - adjusted for light background */}
        <div className="absolute bottom-0 right-0 w-32 h-64 bg-[#0cd3b6] opacity-10 blur-3xl animate-pulse" />
        <div className="absolute top-20 left-0 w-32 h-64 bg-purple-600 opacity-10 blur-3xl animate-pulse delay-500" />
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-3xl sm:text-5xl font-bold leading-tight text-[#0A192F]">
                We are
                <span className="text-[#0cd3b6] block">transformation</span>
              </h2>
              
              <p className="text-xl text-gray-600">
                Just as a caterpillar transforms into a butterfly, Cambiar—Spanish for "to transform"—guides 
                companies through their technological metamorphosis.
              </p>

              <div className="space-y-4 text-gray-600">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#0cd3b6]/20 flex items-center justify-center mt-1">
                    <span className="text-[#0A192F] font-medium">1</span>
                  </div>
                  <div>
                    <h3 className="text-[#0A192F] font-semibold mb-1">Emergence</h3>
                    <p>Beginning the journey of digital transformation with clear vision and strategy</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#0cd3b6]/20 flex items-center justify-center mt-1">
                    <span className="text-[#0A192F] font-medium">2</span>
                  </div>
                  <div>
                    <h3 className="text-[#0A192F] font-semibold mb-1">Growth</h3>
                    <p>Developing and implementing innovative solutions</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#0cd3b6]/20 flex items-center justify-center mt-1">
                    <span className="text-[#0A192F] font-medium">3</span>
                  </div>
                  <div>
                    <h3 className="text-[#0A192F] font-semibold mb-1">Transformation</h3>
                    <p>Emerging as a fully transformed, technology-enabled organization</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side with butterfly transformation illustration */}
            <div className="relative h-[400px] animate-fade-in-delay">
              <div className="absolute inset-0  bg-none bg-gradient-to-br from-[#0cd3b6]/10 to-purple-600/10 rounded-2xl">
                {/* Placeholder for illustration */}
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-[#0A192F]">
                    <Image src="/cambiar trans.png" alt="Butterfly Transformation" fill />
                    {/* [Add butterfly transformation illustration here] */}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



     
      {/* Core Values Section */}
      <section className="relative px-4 py-32 sm:px-8 overflow-hidden bg-[#071527]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <h2 className="text-4xl sm:text-6xl font-bold mb-6">
              Our <span className="text-[#0cd3b6]">core values</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-20">
              We live by a set of core values designed to drive innovation and transformation
            </p>
          </div>

          {/* CAMBIAR Letters */}
          <div className="flex justify-center items-center gap-2 mb-16">
            {['C', 'A1', 'M', 'B', 'I', 'A2', 'R'].map((letter, index) => (
              <button
                key={letter}
                onClick={() => {
                  const element = document.getElementById(`value-${letter}`);
                  element?.scrollIntoView({ behavior: 'smooth', inline: 'center' });
                  setActiveValue(letter);
                }}
                className={`w-16 h-16 flex items-center justify-center text-2xl font-bold rounded-lg
                           transition-all duration-300 ${activeValue === letter ? 'bg-[#0cd3b6] text-[#0A192F]' : 'bg-[#1A2C4D] text-white'}`}
              >
                {letter.replace(/[0-9]/g, '')}
              </button>
            ))}
          </div>

          {/* Horizontal Scrolling Values */}
          <div className="relative">
            <div className="overflow-x-auto hide-scrollbar">
              <div className="flex gap-6 pb-6">
                {/* Catalyst */}
                <div id="value-C" 
                     onClick={() => setActiveValue('C')}
                     className={`flex-shrink-0 w-[400px] bg-[#1A2C4D] rounded-2xl p-8 cursor-pointer
                                transition-all duration-300 ${activeValue === 'C' ? 'opacity-100 scale-100' : 'opacity-50 scale-95'}`}>
                  <div className="w-12 h-12 bg-[#0A192F] rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-[#0cd3b6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Catalyst</h3>
                  <p className="text-gray-300">
                    We act as catalysts for change, sparking innovation and driving technological transformation.
                  </p>
                </div>

                {/* Adaptable */}
                <div id="value-A1" 
                     onClick={() => setActiveValue('A1')}
                     className={`flex-shrink-0 w-[400px] bg-[#1A2C4D] rounded-2xl p-8 cursor-pointer
                                transition-all duration-300 ${activeValue === 'A1' ? 'opacity-100 scale-100' : 'opacity-50 scale-95'}`}>
                  <div className="w-12 h-12 bg-[#0A192F] rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-[#0cd3b6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Adaptable</h3>
                  <p className="text-gray-300">
                    We embrace change and adapt quickly to evolving technological landscapes.
                  </p>
                </div>

                {/* Mindful */}
                <div id="value-M" 
                     onClick={() => setActiveValue('M')}
                     className={`flex-shrink-0 w-[400px] bg-[#1A2C4D] rounded-2xl p-8 cursor-pointer
                                transition-all duration-300 ${activeValue === 'M' ? 'opacity-100 scale-100' : 'opacity-50 scale-95'}`}>
                  <div className="w-12 h-12 bg-[#0A192F] rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-[#0cd3b6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Mindful</h3>
                  <p className="text-gray-300">
                    We approach challenges thoughtfully, considering the long-term impact of our solutions.
                  </p>
                </div>

                {/* Bold */}
                <div id="value-B" 
                     onClick={() => setActiveValue('B')}
                     className={`flex-shrink-0 w-[400px] bg-[#1A2C4D] rounded-2xl p-8 cursor-pointer
                                transition-all duration-300 ${activeValue === 'B' ? 'opacity-100 scale-100' : 'opacity-50 scale-95'}`}>
                  <div className="w-12 h-12 bg-[#0A192F] rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-[#0cd3b6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Bold</h3>
                  <p className="text-gray-300">
                    We take calculated risks and make bold decisions to drive innovation forward.
                  </p>
                </div>

                {/* Innovative */}
                <div id="value-I" 
                     onClick={() => setActiveValue('I')}
                     className={`flex-shrink-0 w-[400px] bg-[#1A2C4D] rounded-2xl p-8 cursor-pointer
                                transition-all duration-300 ${activeValue === 'I' ? 'opacity-100 scale-100' : 'opacity-50 scale-95'}`}>
                  <div className="w-12 h-12 bg-[#0A192F] rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-[#0cd3b6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Innovative</h3>
                  <p className="text-gray-300">
                    We constantly seek new ways to solve problems and create value.
                  </p>
                </div>

                {/* Accountable (second A) */}
                <div id="value-A2" 
                     onClick={() => setActiveValue('A2')}
                     className={`flex-shrink-0 w-[400px] bg-[#1A2C4D] rounded-2xl p-8 cursor-pointer
                                transition-all duration-300 ${activeValue === 'A2' ? 'opacity-100 scale-100' : 'opacity-50 scale-95'}`}>
                  <div className="w-12 h-12 bg-[#0A192F] rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-[#0cd3b6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Accountable</h3>
                  <p className="text-gray-300">
                    We take ownership of our actions and deliver on our promises.
                  </p>
                </div>

                {/* Resilient */}
                <div id="value-R" 
                     onClick={() => setActiveValue('R')}
                     className={`flex-shrink-0 w-[400px] bg-[#1A2C4D] rounded-2xl p-8 cursor-pointer
                                transition-all duration-300 ${activeValue === 'R' ? 'opacity-100 scale-100' : 'opacity-50 scale-95'}`}>
                  <div className="w-12 h-12 bg-[#0A192F] rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-[#0cd3b6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Resilient</h3>
                  <p className="text-gray-300">
                    We persist through challenges and emerge stronger from every obstacle.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



       {/* Portfolio Section */}
       <section className="relative px-4 py-32 sm:px-8 overflow-hidden bg-[#0A192F]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl font-bold mb-6 text-white">
              Our Portfolio
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Transforming ideas into impactful solutions across different sectors
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Imago Mum */}
            <div className="bg-[#FFD700] p-8 rounded-3xl transform transition-all hover:scale-105">
              <h3 className="text-[#0A192F] text-4xl font-bold mb-3">Imago Mum</h3>
              <p className="text-[#0A192F]/80 font-medium uppercase text-sm tracking-wider mb-4">Healthcare & AI</p>
              <a href="https://www.imagomum.com/" className="inline-flex items-center text-[#0A192F] hover:gap-2 transition-all duration-300">
                Learn More →
              </a>
            </div>

            {/* Cleyfi */}
            <div className="bg-[#FF69B4] p-8 rounded-3xl transform transition-all hover:scale-105">
              <h3 className="text-[#0A192F] text-4xl font-bold mb-3">Cleyfi</h3>
              <p className="text-[#0A192F]/80 font-medium uppercase text-sm tracking-wider mb-4">FinTech</p>
              <a href="https://www.cleyfi.com/" className="inline-flex items-center text-[#0A192F] hover:gap-2 transition-all duration-300">
                Learn More →
              </a>
            </div>

            {/* Go Express */}
            <div className="bg-[#FF8C00] p-8 rounded-3xl transform transition-all hover:scale-105">
              <h3 className="text-[#0A192F] text-4xl font-bold mb-3">Go Express</h3>
              <p className="text-[#0A192F]/80 font-medium uppercase text-sm tracking-wider mb-4">Swift Delivery</p>
              <a href="#" className="inline-flex items-center text-[#0A192F] hover:gap-2 transition-all duration-300">
                Learn More →
              </a>
            </div>

            {/* Cambiar Creators */}
            <div className="bg-[#00CED1] p-8 rounded-3xl transform transition-all hover:scale-105">
              <h3 className="text-[#0A192F] text-4xl font-bold mb-3">Cambiar Creators</h3>
              <p className="text-[#0A192F]/80 font-medium uppercase text-sm tracking-wider mb-4">Creator Economy</p>
              <a href="#" className="inline-flex items-center text-[#0A192F] hover:gap-2 transition-all duration-300">
                Learn More →
              </a>
            </div>
          </div>

        </div>
      </section>


      {/* Footer Section */}
      <Footer />
    </div>
  );
}
