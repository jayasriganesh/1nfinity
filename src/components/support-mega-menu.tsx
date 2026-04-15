"use client";

import Link from "next/link";

interface SupportMegaMenuProps {
  onClose?: () => void;
}

export function SupportMegaMenu({ onClose }: SupportMegaMenuProps) {
  const resources = [
    { label: "Get a Quote", href: "/get-quote" },
    { label: "Contact Support", href: "/contact?subject=support" },
    { label: "Product Enquiry", href: "/contact?subject=sales" },
    { label: "Partnership", href: "/contact?subject=partner" },
  ];

  const services = [
    { label: "Installation Services", href: "/contact?subject=installation" },
    { label: "Warranty Support", href: "/contact?subject=warranty" },
    { label: "Technical Support", href: "/contact?subject=support" },
    { label: "On-Site Service", href: "/contact?subject=onsite" },
  ];

  const contact = [
    { label: "8228822849", href: "tel:8228822849" },
    { label: "9640778582", href: "tel:9640778582" },
    { label: "contact@infinityxglobal.com", href: "mailto:contact@infinityxglobal.com" },
  ];

  return (
    <div className="absolute left-0 right-0 top-full bg-white shadow-lg border-t border-[#e5e5e5]">
      <div className="mx-auto max-w-[1230px] px-[15px]">
        <div className="flex min-h-[350px] py-8">
          {/* Resources */}
          <div className="flex-1 pr-8 border-r border-[#e5e5e5]">
            <h3 className="font-heading text-[20px] text-[#333] mb-4">Enquiries</h3>
            <div className="space-y-1">
              {resources.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={onClose}
                  className="flex items-center justify-between py-2 font-sans text-[14px] text-[#333] hover:text-[#196FD2] transition-colors"
                >
                  <span>{item.label}</span>
                  <span className="text-[#999]">&gt;</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="flex-1 px-8 border-r border-[#e5e5e5]">
            <h3 className="font-heading text-[20px] text-[#333] mb-4">Services</h3>
            <div className="space-y-1">
              {services.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={onClose}
                  className="flex items-center justify-between py-2 font-sans text-[14px] text-[#333] hover:text-[#196FD2] transition-colors"
                >
                  <span>{item.label}</span>
                  <span className="text-[#999]">&gt;</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="flex-1 pl-8">
            <h3 className="font-heading text-[20px] text-[#333] mb-4">Contact Support</h3>
            <div className="space-y-1">
              {contact.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block py-2 font-sans text-[14px] text-[#333] hover:text-[#196FD2] transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
            <p className="mt-4 font-sans text-[12px] text-[#999]">
              Monday to Saturday, 09:30AM – 06:30PM IST
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
