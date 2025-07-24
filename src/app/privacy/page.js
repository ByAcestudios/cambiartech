import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-[#0A192F] text-white">
      <Header />
      <div className="min-h-screen bg-[#0A192F] text-white px-4 py-16 sm:px-8">
        <div className="max-w-3xl mx-auto bg-[#071527] rounded-2xl shadow-lg p-8 sm:p-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-8 text-[#0cd3b6]">Privacy Policy</h1>
          <p className="text-gray-400 mb-8">Effective Date: 01/07/2025</p>
          <ol className="space-y-8 list-decimal list-inside">
            <li>
              <h2 className="text-2xl font-bold mb-2">Introduction</h2>
              <p className="text-gray-300">Cley Business Consult LLC & Cambiar Technologies (“CleyFi” or “we”) respects your privacy. This policy explains how we collect, use, share, and protect your personal data when you use our services—including event planning, brand deals, creator matchmaking, monetization tools, subscription management, Cley Tokens, and more.</p>
            </li>
            <li>
              <h2 className="text-2xl font-bold mb-2">Data We Collect</h2>
              <ul className="list-disc list-inside ml-6 text-gray-300 mb-2">
                <li>Personal Identification: name, email, phone, social handles</li>
                <li>Usage Data: interaction history, transaction logs, event registrations</li>
                <li>Monetary Info: payment details for services, tokens, or events</li>
                <li>Technical Data: IP address, device/browser info, cookies</li>
                <li>Content Data: social media posts, creative work submitted</li>
              </ul>
            </li>
            <li>
              <h2 className="text-2xl font-bold mb-2">How We Collect Information</h2>
              <ul className="list-disc list-inside ml-6 text-gray-300 mb-2">
                <li>Provided directly: via signup, profiles, content submissions</li>
                <li>Automatically from your device: IP, cookies, analytics tools</li>
                <li>Third parties: social media platforms, payment processors</li>
              </ul>
            </li>
            <li>
              <h2 className="text-2xl font-bold mb-2">Why We Process Your Data</h2>
              <p className="text-gray-300 mb-2">We process your personal data to:</p>
              <ul className="list-disc list-inside ml-6 text-gray-300 mb-2">
                <li>Provide and manage our services</li>
                <li>Facilitate payments, Cley Tokens, and monetization</li>
                <li>Communicate updates, support, and marketing</li>
                <li>Improve our platform and personalize your experience</li>
                <li>Comply with legal obligations</li>
              </ul>
              <p className="text-gray-300">Our lawful bases include contract performance, consent, and legitimate interests (e.g., service improvement and fraud prevention).</p>
            </li>
            <li>
              <h2 className="text-2xl font-bold mb-2">Sharing Your Data</h2>
              <p className="text-gray-300 mb-2">We share data with:</p>
              <ul className="list-disc list-inside ml-6 text-gray-300 mb-2">
                <li>Service providers: payment processors, hosting, analytics</li>
                <li>Event partners or sponsors, only with your consent</li>
                <li>Affiliates: Cambiar Technologies and related brands</li>
                <li>Legal authorities, if legally required</li>
              </ul>
            </li>
            <li>
              <h2 className="text-2xl font-bold mb-2">Cookies & Tracking</h2>
              <p className="text-gray-300">We use cookies for functionality, analytics, and advertising. You can control your cookie preferences. We comply with global regulations like GDPR/CCPA requiring user consent.</p>
            </li>
            <li>
              <h2 className="text-2xl font-bold mb-2">Your Privacy Rights</h2>
              <ul className="list-disc list-inside ml-6 text-gray-300 mb-2">
                <li>Access & correction of your data</li>
                <li>Data portability (e.g., download a copy)</li>
                <li>Deletion of your account/data</li>
                <li>Opt-out of marketing communications</li>
                <li>Restrict or object to processing under GDPR/CCPA</li>
                <li>“Do Not Sell My Data” option for CA residents</li>
              </ul>
              <p className="text-gray-300">To exercise rights, contact: <a href="mailto:info@cambiartech.co" className="text-[#0cd3b6] underline">info@cambiartech.co</a>.</p>
            </li>
            <li>
              <h2 className="text-2xl font-bold mb-2">Data Retention</h2>
              <p className="text-gray-300">We keep your data only as long as necessary for service or compliance.</p>
            </li>
            <li>
              <h2 className="text-2xl font-bold mb-2">Data Security</h2>
              <p className="text-gray-300">We implement administrative, technical, and physical safeguards to secure your data. However, no system is 100% secure.</p>
            </li>
            <li>
              <h2 className="text-2xl font-bold mb-2">International Transfers</h2>
              <p className="text-gray-300">Data may be processed outside your home country. We apply legal safeguards (e.g., standard contractual clauses).</p>
            </li>
            <li>
              <h2 className="text-2xl font-bold mb-2">Children’s Privacy</h2>
              <p className="text-gray-300">Our services are for users 18+. We do not knowingly collect information from minors under 16. If you’re under 18, please get parental consent.</p>
            </li>
            <li>
              <h2 className="text-2xl font-bold mb-2">Changes to This Policy</h2>
              <p className="text-gray-300">We may update this policy. We will notify you of significant changes via email or our platform. Continued use means acceptance of updates.</p>
            </li>
            <li>
              <h2 className="text-2xl font-bold mb-2">Contact Us</h2>
              <p className="text-gray-300">Questions about this policy or your data rights? Email: <a href="mailto:info@cambiartech.co" className="text-[#0cd3b6] underline">info@cambiartech.co</a></p>
            </li>
          </ol>
        </div>
      </div>
      <Footer />
    </div>
  );
} 