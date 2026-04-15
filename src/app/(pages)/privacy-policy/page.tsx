import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | InfinityX Global',
  description: 'InfinityX Global Privacy Policy — how we collect, use, and protect your personal information.',
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="bg-[#f5f5f5] py-20 md:py-24">
        <div className="mx-auto max-w-[1230px] px-[15px]">
          <h1 className="font-heading text-[36px] md:text-[48px] font-bold uppercase tracking-wide text-[#333] mb-4">
            Privacy Policy
          </h1>
          <p className="text-[14px] text-[#999]">Last updated: April 2026</p>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="mx-auto max-w-[1230px] px-[15px]">
          <div className="max-w-3xl prose prose-sm">
            <div className="space-y-8 text-[15px] text-[#555] leading-[1.8]">
              <div>
                <h2 className="font-heading text-[20px] font-bold text-[#333] uppercase tracking-wide mb-4">
                  1. Information We Collect
                </h2>
                <p>
                  InfinityX Global collects information you voluntarily provide through our contact and quote request forms,
                  including your name, email address, phone number, company name, and project requirements.
                  We also collect standard server log data such as IP addresses and browser information to improve
                  our website experience.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-[20px] font-bold text-[#333] uppercase tracking-wide mb-4">
                  2. How We Use Your Information
                </h2>
                <p>We use the information collected to:</p>
                <ul className="list-disc pl-6 mt-3 space-y-2">
                  <li>Respond to enquiries and provide quotations</li>
                  <li>Process and fulfil service requests</li>
                  <li>Send relevant product and service updates (with your consent)</li>
                  <li>Improve our website and service offerings</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </div>

              <div>
                <h2 className="font-heading text-[20px] font-bold text-[#333] uppercase tracking-wide mb-4">
                  3. Data Storage and Security
                </h2>
                <p>
                  Your data is stored securely and is never sold to third parties. We implement appropriate technical
                  and organisational measures to protect your personal information against unauthorised access,
                  alteration, disclosure, or destruction.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-[20px] font-bold text-[#333] uppercase tracking-wide mb-4">
                  4. Cookies
                </h2>
                <p id="cookies">
                  Our website uses cookies to improve user experience and analyse traffic patterns. You may configure
                  your browser to refuse cookies, but some features of the website may not function properly as a result.
                  We use Google Analytics (GA4) to understand how visitors interact with our website.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-[20px] font-bold text-[#333] uppercase tracking-wide mb-4">
                  5. Your Rights
                </h2>
                <p>
                  You have the right to access, correct, or delete any personal information we hold about you.
                  To exercise these rights or for any privacy-related queries, please contact us at{' '}
                  <a href="mailto:contact@infinityxglobal.com" className="text-[#196FD2] hover:underline">
                    contact@infinityxglobal.com
                  </a>.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-[20px] font-bold text-[#333] uppercase tracking-wide mb-4">
                  6. Contact
                </h2>
                <p>
                  For any questions about this Privacy Policy, please contact:<br />
                  <strong>InfinityX Global</strong><br />
                  Email: <a href="mailto:contact@infinityxglobal.com" className="text-[#196FD2] hover:underline">contact@infinityxglobal.com</a><br />
                  Phone: <a href="tel:8228822849" className="text-[#196FD2] hover:underline">8228822849</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
