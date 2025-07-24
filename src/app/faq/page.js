import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function FAQ() {
  return (
    <div className="min-h-screen bg-[#0A192F] text-white">
      <Header />
      <div className="min-h-screen bg-[#0A192F] text-white px-4 py-16 sm:px-8">
        <div className="max-w-3xl mx-auto bg-[#071527] rounded-2xl shadow-lg p-8 sm:p-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-8 text-[#0cd3b6]">Frequently Asked Questions (FAQs)</h1>
          <ol className="space-y-8 list-decimal list-inside">
            <li>
              <h2 className="text-2xl font-bold mb-2">What is CleyFi and who is it for?</h2>
              <p className="text-gray-300">CleyFi (operated by Cley Business Consult LLC, a subsidiary of Cambiar Technologies, alongside Swift Logistics & Imago) represents and advises creatives and digital‑economy professionals. We help plan events, broker brand partnerships, manage monetization, and support creative careers through digital content strategy, token systems, event execution, and more.</p>
            </li>
            <li>
              <h2 className="text-2xl font-bold mb-2">How do creators work with CleyFi?</h2>
              <p className="text-gray-300">Creators officially become members of the CleyFi agency. All proceeds from services—whether brand deals, events, token earnings, or subscription revenue—go through Cley Business Consult LLC (our agency). As an agency, CleyFi handles client payments, contract execution, event management, and distribution of tokens and rewards on behalf of creators.</p>
            </li>
            <li>
              <h2 className="text-2xl font-bold mb-2">How does CleyFi help creators monetize their work?</h2>
              <ul className="list-disc list-inside ml-6 text-gray-300 mb-2">
                <li>Brand Partnerships & Sponsorships: Negotiated and executed under your membership agreement.</li>
                <li>Event Planning & Ticketing: Managed from planning to payment.</li>
                <li>Digital Rewards & Tokens: Creators earn Cley Tokens, TikTok rewards, and platform revenue—held and administered by CleyFi.</li>
                <li>Subscription Management: We handle setup, billing, and payout.</li>
                <li>Performance Analytics: Campaign performance and ROI are tracked and analyzed for you.</li>
              </ul>
            </li>
            <li>
              <h2 className="text-2xl font-bold mb-2">What are Cley Tokens?</h2>
              <p className="text-gray-300">Cley Tokens are a digital reward currency for members: You earn tokens through engagement, brand deals, and event activity. Tokens can be redeemed for agency services, event access, or converted to cash payouts. CleyFi securely manages your token balance and transactions.</p>
            </li>
            <li>
              <h2 className="text-2xl font-bold mb-2">How does payment and revenue distribution work?</h2>
              <p className="text-gray-300">Creators sign a Membership Agreement outlining earnings structure and token system. CleyFi receives all funds—event fees, sponsorships, tokens, subscription income—and distributes them per the agreement. Payments are made via direct deposit or check as specified in your account settings.</p>
            </li>
            <li>
              <h2 className="text-2xl font-bold mb-2">What if an event or service is canceled?</h2>
              <p className="text-gray-300">Refer to our Refund Policy: Full refunds are issued if CleyFi cancels events/services before they begin. Once we’ve started processing or tokens have been used, refunds may be pro-rated or fully non-refundable. Refund requests must be submitted within 7–14 days of the transaction at <a href="mailto:support@cleyfi.com" className="text-[#0cd3b6] underline">support@cleyfi.com</a>.</p>
            </li>
            <li>
              <h2 className="text-2xl font-bold mb-2">How do brand collaborations work?</h2>
              <p className="text-gray-300">Once a deal is confirmed, we finalize a contract under your membership terms. Funds pass through CleyFi’s agency account. Payment can be in cash, tokens, or a mix, all managed transparently. We handle content approvals, delivery, and disbursement based on agreed milestones.</p>
            </li>
            <li>
              <h2 className="text-2xl font-bold mb-2">Will CleyFi own my content?</h2>
              <p className="text-gray-300">Creators retain full ownership of their content unless you choose to license or assign rights in a specific deal. Our Membership Agreement clearly specifies content ownership, licensing terms, and usage rights.</p>
            </li>
            <li>
              <h2 className="text-2xl font-bold mb-2">Can I stop being a member and get my own account setup?</h2>
              <p className="text-gray-300">Yes—see "How do I stop using CleyFi?" below. Once you transition, funds from new events or tokens are routed to your personal account.</p>
            </li>
            <li>
              <h2 className="text-2xl font-bold mb-2">How do I update my personal or payment info?</h2>
              <p className="text-gray-300">Go to your CleyFi dashboard → Profile to update email, payment details, and token settings. All changes require email verification for security.</p>
            </li>
            <li>
              <h2 className="text-2xl font-bold mb-2">How can I request a refund for tokens or payments?</h2>
              <p className="text-gray-300">Email <a href="mailto:support@cleyfi.com" className="text-[#0cd3b6] underline">support@cleyfi.com</a> within 14 days of transaction, including your membership ID, transaction amount, and reason. See our Refund Policy for full guidelines.</p>
            </li>
            <li>
              <h2 className="text-2xl font-bold mb-2">Can I use CleyFi if I'm outside the U.S.?</h2>
              <p className="text-gray-300">Yes! We operate globally with regional support: Token purchases/payments may vary slightly. Brand deals/events may require localized agreements.</p>
            </li>
            <li>
              <h2 className="text-2xl font-bold mb-2">How do I contact support?</h2>
              <p className="text-gray-300">Email: <a href="mailto:info@cambiartech.co" className="text-[#0cd3b6] underline">info@cambiartech.co</a> or <a href="mailto:support@cleyfi.com" className="text-[#0cd3b6] underline">support@cleyfi.com</a><br/>Dashboard chat support<br/>Response time: within 2 business days</p>
            </li>
            <li>
              <h2 className="text-2xl font-bold mb-2">Do you integrate with social platforms?</h2>
              <p className="text-gray-300">Yes—we support TikTok, YouTube, Instagram, Patreon and other platforms for rewards tracking and monetization. Integration requires your explicit permission.</p>
            </li>
            <li>
              <h2 className="text-2xl font-bold mb-2">How do I cancel my membership?</h2>
              <p className="text-gray-300">From your dashboard, select “Cancel Membership”. Download your data or request deletion via <a href="mailto:info@cambiartech.co" className="text-[#0cd3b6] underline">info@cambiartech.co</a>. Eligible for prorated refund per the Refund Policy. Future token and event revenue will go directly to you outside the agency structure.</p>
            </li>
          </ol>
        </div>
      </div>
      <Footer />
    </div>
  );
} 