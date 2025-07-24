import Image from "next/image";
import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Terms() {
  return (
    <div className="min-h-screen bg-[#0A192F] text-white">
      <Header />
      <div className="min-h-screen bg-[#0A192F] text-white px-4 py-16 sm:px-8">
        <div className="max-w-3xl mx-auto bg-[#071527] rounded-2xl shadow-lg p-8 sm:p-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-8 text-[#0cd3b6]">Terms and Conditions</h1>
          <p className="text-gray-400 mb-8">Effective Date: 01/07/2025</p>
          <ol className="space-y-8 list-decimal list-inside">
            <li>
              <h2 className="text-2xl font-bold mb-2">Introduction</h2>
              <p className="text-gray-300">Welcome to CleyFi (operated by Cley Business Consult LLC, a subsidiary of Cambiar Technologies, including projects such as Swift Logistics & Imago). By using our services—whether website, app, event planning, brand-connect, or consulting—you agree to these Terms. If you disagree, please do not use our services.</p>
            </li>
            <li>
              <h2 className="text-2xl font-bold mb-2">Services</h2>
              <p className="text-gray-300">CleyFi supports creatives and digital professionals with event planning, brand partnerships, representation, and monetization strategy across the digital economy.</p>
            </li>
            <li>
              <h2 className="text-2xl font-bold mb-2">Agency Membership & Proceeds</h2>
              <p className="text-gray-300 mb-2 font-semibold">Membership Structure</p>
              <p className="text-gray-300 mb-2">By using our services—whether through CleyFi website, mobile app, or agency engagement—you acknowledge that you are a Member of Cley Business Consult LLC (doing business as CleyFi), a subsidiary of Cambiar Technologies.</p>
              <p className="text-gray-300 mb-2 font-semibold">Payment Flow & Funds Management</p>
              <p className="text-gray-300 mb-2">As a Member, all proceeds, fees, tokens, sponsorships, event revenue, or subscription income are paid directly to and owned by Cley Business Consult LLC. We manage these funds on behalf of Members.</p>
              <p className="text-gray-300 mb-2 font-semibold">Distribution of Earnings</p>
              <p className="text-gray-300 mb-2">Cley Business Consult LLC will distribute net proceeds to Members in accordance with a mutually agreed Membership Agreement, which governs token redemptions, event payouts, and brand partnership compensation.</p>
              <p className="text-gray-300 mb-2 font-semibold">Agency Authority</p>
              <p className="text-gray-300">Members authorize CleyFi to negotiate contracts, collect revenue, manage funds, and disburse earnings under the terms of the Membership Agreement—this authorization is binding and irrevocable for each transaction.</p>
            </li>
            <li>
              <h2 className="text-2xl font-bold mb-2">Eligibility</h2>
              <p className="text-gray-300">You must be 18+, have legal authority to enter binding contracts, and comply with applicable laws.</p>
            </li>
            <li>
              <h2 className="text-2xl font-bold mb-2">User Accounts</h2>
              <p className="text-gray-300">Users may register for an account. Keep login details secure. You're responsible for any activity under your account.</p>
            </li>
            <li>
              <h2 className="text-2xl font-bold mb-2">Acceptable Use</h2>
              <p className="text-gray-300">You agree not to:</p>
              <ul className="list-disc list-inside ml-6 text-gray-300">
                <li>Impersonate others or submit false info</li>
                <li>Use the service for illegal or harmful activities</li>
                <li>Distribute malware, spam, or infringing content</li>
              </ul>
            </li>
            <li>
              <h2 className="text-2xl font-bold mb-2">Intellectual Property</h2>
              <p className="text-gray-300">All CleyFi content—including branding, materials, and processes—are owned by Cley Business Consult LLC or its licensors. You may not reuse, republish, or reproduce without consent.</p>
            </li>
            <li>
              <h2 className="text-2xl font-bold mb-2">Fees & Payments</h2>
              <p className="text-gray-300">Fees, if any, will be disclosed upfront. Payment terms, refunds, and invoicing will be governed by separate agreements.</p>
            </li>
            <li>
              <h2 className="text-2xl font-bold mb-2">Termination</h2>
              <p className="text-gray-300">We may suspend or terminate your access at our discretion for violations. You may stop using the service anytime. Termination doesn’t extinguish your obligations under these Terms.</p>
            </li>
            <li>
              <h2 className="text-2xl font-bold mb-2">Limitation of Liability</h2>
              <p className="text-gray-300">To the extent permitted by law, CleyFi and its affiliates, officers, and employees are not liable for indirect, incidental, or consequential damages in connection with services.</p>
            </li>
            <li>
              <h2 className="text-2xl font-bold mb-2">Dispute Resolution & Governing Law</h2>
              <p className="text-gray-300">These terms are governed by Georgia law. Any disputes will be resolved in courts within Fulton County. Users waive rights to class actions and agree to individual litigation.</p>
            </li>
            <li>
              <h2 className="text-2xl font-bold mb-2">Updates to Terms</h2>
              <p className="text-gray-300">We reserve the right to update these terms. We will notify you; continued use means acceptance of the new Terms.</p>
            </li>
            <li>
              <h2 className="text-2xl font-bold mb-2">Contact Us</h2>
              <p className="text-gray-300">Questions? Reach us at: <a href="mailto:info@cambairtech.co" className="text-[#0cd3b6] underline">info@cambairtech.co</a></p>
            </li>
          </ol>
        </div>
      </div>
      <Footer />
    </div>
  );
} 