"use client";

import { useState } from "react";
import Link from "next/link";

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="relative z-[11] bg-[#1a1a1a] text-white">
      {/* Top Section */}
      <div className="border-b border-white/10">
        <div className="mx-auto max-w-[1230px] px-[15px] py-[60px]">
          <h2 className="font-heading text-[24px] md:text-[32px] leading-[36px] md:leading-[48px] uppercase mb-[20px] md:mb-[40px]">
            GET CONNECTED WITH US
          </h2>
          <div className="flex flex-col md:flex-row gap-8 md:gap-[60px]">
            {/* Company */}
            <div>
              <h3 className="text-[14px] font-heading mb-[20px] uppercase tracking-widest text-white/50">
                Company
              </h3>
              <ul className="space-y-[12px] text-[14px] text-white/70">
                <li>
                  <Link href="/about" className="hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/about#awards" className="hover:text-white transition-colors">
                    Certifications
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/privacy-policy" className="hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>

            {/* Products */}
            <div>
              <h3 className="text-[14px] font-heading mb-[20px] uppercase tracking-widest text-white/50">
                Products
              </h3>
              <ul className="space-y-[12px] text-[14px] text-white/70">
                <li>
                  <Link href="/products/interactive-flat-panels" className="hover:text-white transition-colors">
                    Interactive Flat Panels
                  </Link>
                </li>
                <li>
                  <Link href="/products/kiosks" className="hover:text-white transition-colors">
                    Kiosks &amp; Signage
                  </Link>
                </li>
                <li>
                  <Link href="/products/cctv" className="hover:text-white transition-colors">
                    CCTV &amp; Security
                  </Link>
                </li>
                <li>
                  <Link href="/products" className="hover:text-white transition-colors">
                    All Products
                  </Link>
                </li>
              </ul>
            </div>

            {/* Solutions */}
            <div>
              <h3 className="text-[14px] font-heading mb-[20px] uppercase tracking-widest text-white/50">
                Solutions
              </h3>
              <ul className="space-y-[12px] text-[14px] text-white/70">
                <li>
                  <Link href="/solutions/enterprise" className="hover:text-white transition-colors">
                    Enterprise
                  </Link>
                </li>
                <li>
                  <Link href="/solutions/education" className="hover:text-white transition-colors">
                    Education
                  </Link>
                </li>
                <li>
                  <Link href="/get-quote" className="hover:text-white transition-colors">
                    Get a Quote
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-white transition-colors">
                    News &amp; Events
                  </Link>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div className="md:ml-auto md:max-w-[320px] w-full">
              <h3 className="text-[14px] font-heading mb-[20px] uppercase tracking-widest text-white/50">
                Stay Updated
              </h3>
              {subscribed ? (
                <div className="py-4">
                  <p className="font-heading text-[16px] text-white mb-1">Thank you!</p>
                  <p className="text-[13px] text-white/60">
                    You&apos;re subscribed to our updates.
                  </p>
                </div>
              ) : (
                <>
                  <form onSubmit={handleSubscribe} className="flex">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your email address"
                      required
                      className="flex-1 bg-transparent border border-white/30 px-[16px] py-[12px] text-[14px] text-white placeholder:text-white/40 outline-none focus:border-[#196FD2] transition-colors"
                    />
                    <button
                      type="submit"
                      className="bg-[#196FD2] px-[24px] py-[12px] text-[14px] text-white hover:bg-[#1560b8] transition-colors"
                    >
                      SUBMIT
                    </button>
                  </form>
                  <p className="text-[12px] text-white/40 mt-[12px] leading-[18px]">
                    Product updates and industry insights from InfinityX Global.
                    Unsubscribe at any time.
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Contact Info */}
      <div className="mx-auto max-w-[1230px] px-[15px] py-[40px]">
        <div className="flex flex-col md:flex-row gap-8 md:gap-[60px] text-[14px] text-white/60 leading-[24px]">
          <div className="flex-1">
            <h4 className="text-white font-heading text-[13px] mb-[10px] uppercase tracking-widest">
              Address
            </h4>
            <p>InfinityX Global</p>
            <p>Hyderabad, Telangana, India</p>
          </div>
          <div className="flex-1">
            <h4 className="text-white font-heading text-[13px] mb-[10px] uppercase tracking-widest">
              Customer Support
            </h4>
            <p>
              <a href="tel:8228822849" className="hover:text-white transition-colors">
                8228822849
              </a>
            </p>
            <p>
              <a href="tel:9640778582" className="hover:text-white transition-colors">
                9640778582
              </a>
            </p>
            <p>
              <a href="mailto:contact@infinityxglobal.com" className="hover:text-white transition-colors">
                contact@infinityxglobal.com
              </a>
            </p>
            <p>Monday – Saturday, 09:30AM – 06:30PM</p>
          </div>
          <div className="flex-1">
            <h4 className="text-white font-heading text-[13px] mb-[10px] uppercase tracking-widest">
              About Us
            </h4>
            <p>Founded 2014</p>
            <p>4000+ Installations</p>
            <p>MSME · ISO · GeM Certified</p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-[1230px] px-[15px] py-[20px] flex flex-col md:flex-row items-center justify-between gap-2 text-[12px] text-white/40">
          <div className="flex items-center gap-[8px]">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span>|</span>
            <Link href="/privacy-policy#cookies" className="hover:text-white transition-colors">
              Cookie Policy
            </Link>
          </div>
          <p>
            &copy;{new Date().getFullYear()} InfinityX Global. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
