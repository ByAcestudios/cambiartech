import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Refund() {
  return (
    <div className="min-h-screen bg-[#0A192F] text-white">
      <Header />
      <div className="min-h-screen bg-[#0A192F] text-white px-4 py-16 sm:px-8">
        <div className="max-w-3xl mx-auto bg-[#071527] rounded-2xl shadow-lg p-8 sm:p-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-8 text-[#0cd3b6]">Refund Policy <span className="inline-block ml-2">🛡</span></h1>
          <p className="text-gray-400 mb-8">Effective Date: 01/07/2025</p>
          <ol className="space-y-8 list-decimal list-inside">
            <li>
              <h2 className="text-2xl font-bold mb-2">Overview</h2>
              <p className="text-gray-300">CleyFi (operated by Cley Business Consult LLC, a subsidiary of Cambiar Technologies) offers services including event planning, brand representation, creator matchmaking, digital content monetization, social media campaign management, content subscription support, paid events, Cley Tokens, and rewards platforms (e.g., TikTok rewards). This Refund Policy defines the terms under which customers may request refunds.</p>
            </li>
            <li>
              <h2 className="text-2xl font-bold mb-2">Eligibility & Exceptions</h2>
              <p className="text-gray-300 mb-2">Refunds are available for the following situations:</p>
              <ul className="list-disc list-inside ml-6 text-gray-300 mb-2">
                <li>Service Non-Delivery: CleyFi fails to deliver contracted services or deliverables.</li>
                <li>Payment Processing Errors: Duplicate or erroneous charges.</li>
                <li>Token Overpayment: Users purchase more Cley Tokens than intended due to platform malfunction.</li>
              </ul>
              <p className="text-gray-300 mb-2">Non-refundable items include (unless otherwise stated):</p>
              <ul className="list-disc list-inside ml-6 text-gray-300 mb-2">
                <li>Completed services & events delivered.</li>
                <li>Brand deals and matchmaking services already initiated or in progress.</li>
                <li>Digital content published or distributed.</li>
                <li>Fees for Cley Tokens already spent or redeemed.</li>
                <li>Subscription fees already consumed within the period.</li>
              </ul>
              <p className="text-gray-300">Per SaaS industry best practices, non-delivery triggers eligibility but once services begin or tokens are used, refunds are not permitted.</p>
            </li>
            <li>
              <h2 className="text-2xl font-bold mb-2">Refund Request Process</h2>
              <p className="text-gray-300 mb-2">To request a refund:</p>
              <ul className="list-disc list-inside ml-6 text-gray-300 mb-2">
                <li>Contact <a href="mailto:support@cleyfi.com" className="text-[#0cd3b6] underline">support@cleyfi.com</a> within 14 days of the transaction date.</li>
                <li>Provide:
                  <ul className="list-disc list-inside ml-6">
                    <li>Invoice or transaction ID</li>
                    <li>Date and amount</li>
                    <li>Reason for refund</li>
                    <li>Supporting evidence (e.g., proof of non-delivery, error logs)</li>
                  </ul>
                </li>
              </ul>
              <p className="text-gray-300">Our team acknowledges receipt within 5 business days and may request clarification.</p>
            </li>
            <li>
              <h2 className="text-2xl font-bold mb-2">Refund Evaluation & Timeline</h2>
              <ul className="list-disc list-inside ml-6 text-gray-300 mb-2">
                <li>Service Errors & Token Overcharges: Full refunds processed within 30 days.</li>
                <li>Change of Mind or Subscription Cancellations: Eligible for pro-rated refunds of unused time if requested within 7 days of payment.</li>
                <li>Contest or Campaign Fees: Refundable only if cancellation occurs at least 30 days before event start.</li>
              </ul>
              <p className="text-gray-300">Refunds issued back to the original payment method. Processing time may vary by provider.</p>
            </li>
            <li>
              <h2 className="text-2xl font-bold mb-2">Limitations & Disclaimers</h2>
              <ul className="list-disc list-inside ml-6 text-gray-300 mb-2">
                <li>Credits or exchange vouchers may be offered in lieu of refunds at our discretion.</li>
                <li>We reserve the right to deny refund requests deemed fraudulent or abusive.</li>
                <li>Refunds are at CleyFi’s sole discretion but will generally align with fair SaaS practices.</li>
              </ul>
            </li>
            <li>
              <h2 className="text-2xl font-bold mb-2">Changes to the Policy</h2>
              <p className="text-gray-300">CleyFi may update this policy. Updates take effect upon posting. Continued use after changes implies acceptance.</p>
            </li>
            <li>
              <h2 className="text-2xl font-bold mb-2">Contact Us</h2>
              <p className="text-gray-300">If you have any questions or want to request a refund, please email: <a href="mailto:info@cambiartech.co" className="text-[#0cd3b6] underline">info@cambiartech.co</a> or <a href="mailto:support@cleyfi.com" className="text-[#0cd3b6] underline">support@cleyfi.com</a></p>
            </li>
          </ol>
        </div>
      </div>
      <Footer />
    </div>
  );
} 