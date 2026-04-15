"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { UnifiedMegaMenu } from "@/components/unified-mega-menu";
import { searchIndex, type SearchItem } from "@/data/products";

// ─── Locale data ─────────────────────────────────────────────────────────────

interface LocaleEntry {
  country: string
  code: string      // 2-3 char display code shown in navbar button
  lang: string      // Language label shown in the picker
  locale: "en" | "hi" | "ar"
  flag: string
}

interface RegionGroup {
  heading: string
  entries: LocaleEntry[]
}

const LOCALE_GROUPS: RegionGroup[] = [
  {
    heading: "SOUTH ASIA",
    entries: [
      { country: "India",     code: "IN",  lang: "English",   locale: "en", flag: "🇮🇳" },
      { country: "Nepal",     code: "NP",  lang: "English",   locale: "en", flag: "🇳🇵" },
      { country: "Sri Lanka", code: "LK",  lang: "English",   locale: "en", flag: "🇱🇰" },
      { country: "Bhutan",    code: "BT",  lang: "English",   locale: "en", flag: "🇧🇹" },
    ],
  },
  {
    heading: "MIDDLE EAST",
    entries: [
      { country: "Saudi Arabia", code: "SA", lang: "العربية", locale: "ar", flag: "🇸🇦" },
      { country: "UAE",          code: "AE", lang: "العربية", locale: "ar", flag: "🇦🇪" },
    ],
  },
  {
    heading: "AFRICA",
    entries: [
      { country: "Africa", code: "AF", lang: "English", locale: "en", flag: "🌍" },
    ],
  },
  {
    heading: "INTERNATIONAL",
    entries: [
      { country: "International", code: "INT", lang: "English", locale: "en", flag: "🌐" },
    ],
  },
]

// Flat map for quick lookup by code
const ALL_LOCALES = LOCALE_GROUPS.flatMap((g) => g.entries)

// ─── UI Translations ──────────────────────────────────────────────────────────

const T = {
  en: {
    products:       "Products",
    solutions:      "Solutions",
    support:        "Support",
    explore:        "Explore",
    search:         "Search",
    contactSales:   "Contact Sales",
    getQuote:       "Get a Quote",
    changeLocation: "CHANGE LOCATION",
    selectRegion:   "Select your country or region",
    quickLinks:     "Quick Links",
  },
  hi: {
    products:       "उत्पाद",
    solutions:      "समाधान",
    support:        "सहायता",
    explore:        "खोजें",
    search:         "खोजें",
    contactSales:   "बिक्री से संपर्क",
    getQuote:       "कोटेशन लें",
    changeLocation: "स्थान बदलें",
    selectRegion:   "अपना देश या क्षेत्र चुनें",
    quickLinks:     "त्वरित लिंक",
  },
  ar: {
    products:       "المنتجات",
    solutions:      "الحلول",
    support:        "الدعم",
    explore:        "استكشف",
    search:         "بحث",
    contactSales:   "تواصل مع المبيعات",
    getQuote:       "احصل على عرض سعر",
    changeLocation: "تغيير الموقع",
    selectRegion:   "اختر دولتك أو منطقتك",
    quickLinks:     "روابط سريعة",
  },
} as const

type Locale = keyof typeof T

// ─── Recommended products shown when search opens (empty state) ──────────────

const RECOMMENDED = [
  { label: "InfinityX SmartClass Series A",  href: "/products/interactive-flat-panels/series-a" },
  { label: "InfinityX SmartClass Series B",  href: "/products/interactive-flat-panels/series-b" },
  { label: "InfinityX SmartClass Series C",  href: "/products/interactive-flat-panels/series-c" },
  { label: "Ultra Slim Kiosk",               href: "/products/kiosks/ultra-slim-kiosk" },
  { label: "Interactive Flat Panels",        href: "/products/interactive-flat-panels" },
  { label: "Commercial Display Solutions",   href: "/products/commercial-display" },
];

// ─── Helpers ─────────────────────────────────────────────────────────────────

function filterSearch(query: string): SearchItem[] {
  const q = query.trim().toLowerCase();
  if (q.length < 1) return [];
  return searchIndex
    .filter(
      (item) =>
        item.name.toLowerCase().includes(q) ||
        item.subtitle.toLowerCase().includes(q)
    )
    .slice(0, 8);
}

// ─── Icons (inline to avoid extra imports) ────────────────────────────────────

const SearchIcon = ({ size = 18 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

const CloseIcon = ({ size = 18 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);


// ─── Search result row (MAXHUB style — plain text) ───────────────────────────

interface ResultRowProps {
  label: string;
  href: string;
  active?: boolean;
  onSelect: () => void;
}

function ResultRow({ label, active, onSelect }: ResultRowProps) {
  return (
    <li>
      <button
        type="button"
        onMouseDown={(e) => { e.preventDefault(); onSelect(); }}
        className={cn(
          "w-full text-left py-2.5 font-sans text-[16px] transition-colors",
          active ? "text-[#196FD2]" : "text-[#111] hover:text-[#196FD2]"
        )}
      >
        {label}
      </button>
    </li>
  );
}

// ─── Navbar ───────────────────────────────────────────────────────────────────

export function Navbar() {
  const router = useRouter();

  // ── Desktop state ──────────────────────────────────────────
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);
  const [activeMegaMenu, setActiveMegaMenu] = useState<
    "products" | "solutions" | "support" | "explore" | null
  >(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState<SearchItem[]>([]);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [isLocaleOpen, setIsLocaleOpen] = useState(false);
  const [locale, setLocale] = useState<Locale>("en");
  const [regionCode, setRegionCode] = useState<string>("IN");

  // ── Mobile search state ────────────────────────────────────
  const [mobileQuery, setMobileQuery] = useState("");
  const [mobileSuggestions, setMobileSuggestions] = useState<SearchItem[]>([]);
  const [mobileActiveIndex, setMobileActiveIndex] = useState(-1);

  // ── Refs ───────────────────────────────────────────────────
  const megaMenuTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const mobileSearchRef = useRef<HTMLInputElement>(null);

  // ── Body scroll lock ───────────────────────────────────────
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [isMobileMenuOpen]);

  // ── Auto-focus desktop search input ───────────────────────
  useEffect(() => {
    if (isSearchOpen) {
      const t = setTimeout(() => searchInputRef.current?.focus(), 80);
      return () => clearTimeout(t);
    } else {
      // Clear state when closed
      setSuggestions([]);
      setActiveIndex(-1);
    }
  }, [isSearchOpen]);

  // ── Restore locale from localStorage on mount ─────────────
  useEffect(() => {
    const savedCode   = localStorage.getItem("ix-region");
    const savedLocale = localStorage.getItem("ix-locale") as Locale | null;
    if (savedCode) setRegionCode(savedCode);
    if (savedLocale && T[savedLocale]) {
      setLocale(savedLocale);
      document.documentElement.lang = savedLocale;
      document.documentElement.dir  = savedLocale === "ar" ? "rtl" : "ltr";
    }
  }, []);

  // ── Lock body scroll when locale overlay is open ───────────
  useEffect(() => {
    if (isLocaleOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
  }, [isLocaleOpen, isMobileMenuOpen]);

  const handleLocaleSelect = (entry: LocaleEntry) => {
    setLocale(entry.locale);
    setRegionCode(entry.code);
    localStorage.setItem("ix-region", entry.code);
    localStorage.setItem("ix-locale", entry.locale);
    document.documentElement.lang = entry.locale;
    document.documentElement.dir  = entry.locale === "ar" ? "rtl" : "ltr";
    setIsLocaleOpen(false);
  };

  // ── Helpers ────────────────────────────────────────────────
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
    setOpenAccordion(null);
  };

  const toggleAccordion = (label: string) => {
    setOpenAccordion(openAccordion === label ? null : label);
  };

  const navigateTo = useCallback((href: string) => {
    router.push(href);
  }, [router]);

  // ── Desktop search ─────────────────────────────────────────
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setSearchQuery(val);
    setActiveIndex(-1);
    setSuggestions(filterSearch(val));
  };

  const handleSearchKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((prev) => Math.min(prev + 1, suggestions.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((prev) => Math.max(prev - 1, -1));
    } else if (e.key === "Escape") {
      setIsSearchOpen(false);
    }
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (activeIndex >= 0 && suggestions[activeIndex]) {
      closeDesktopSearch();
      navigateTo(suggestions[activeIndex].href);
      return;
    }
    const q = searchQuery.trim();
    if (q) {
      closeDesktopSearch();
      navigateTo(`/products?q=${encodeURIComponent(q)}`);
    }
  };

  const closeDesktopSearch = () => {
    setIsSearchOpen(false);
    setSearchQuery("");
    setSuggestions([]);
    setActiveIndex(-1);
  };

  const handleDesktopSuggestionSelect = (item: SearchItem) => {
    closeDesktopSearch();
    navigateTo(item.href);
  };

  // ── Mobile search ──────────────────────────────────────────
  const handleMobileSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setMobileQuery(val);
    setMobileActiveIndex(-1);
    setMobileSuggestions(filterSearch(val));
  };

  const handleMobileSearchKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setMobileActiveIndex((prev) => Math.min(prev + 1, mobileSuggestions.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setMobileActiveIndex((prev) => Math.max(prev - 1, -1));
    } else if (e.key === "Enter") {
      if (mobileActiveIndex >= 0 && mobileSuggestions[mobileActiveIndex]) {
        handleMobileSuggestionSelect(mobileSuggestions[mobileActiveIndex]);
      } else if (mobileQuery.trim()) {
        handleLinkClick();
        setMobileQuery("");
        setMobileSuggestions([]);
        navigateTo(`/products?q=${encodeURIComponent(mobileQuery.trim())}`);
      }
    }
  };

  const handleMobileSuggestionSelect = (item: SearchItem) => {
    handleLinkClick();
    setMobileQuery("");
    setMobileSuggestions([]);
    setMobileActiveIndex(-1);
    navigateTo(item.href);
  };

  // ── Mega menu ──────────────────────────────────────────────
  const handleMegaMenuEnter = (
    section: "products" | "solutions" | "support" | "explore"
  ) => {
    if (megaMenuTimeoutRef.current) clearTimeout(megaMenuTimeoutRef.current);
    megaMenuTimeoutRef.current = setTimeout(() => setActiveMegaMenu(section), 150);
  };

  const handleMegaMenuLeave = () => {
    if (megaMenuTimeoutRef.current) clearTimeout(megaMenuTimeoutRef.current);
    megaMenuTimeoutRef.current = setTimeout(() => setActiveMegaMenu(null), 200);
  };

  const closeMegaMenu = () => {
    setActiveMegaMenu(null);
    if (megaMenuTimeoutRef.current) clearTimeout(megaMenuTimeoutRef.current);
  };

  // ── Translations shorthand ─────────────────────────────────
  const t = T[locale];

  // ── Data ───────────────────────────────────────────────────
  const navLinks = [t.products, t.solutions, t.support, t.explore];
  const navLinkKeys = ["products", "solutions", "support", "explore"] as const;

  const mobileNavItems = [
    {
      label: "Products",
      dropdown: [
        { label: "Interactive Flat Panels",    href: "/products/interactive-flat-panels" },
        { label: "Commercial Display",         href: "/products/commercial-display" },
        { label: "LED Display",                href: "/products/led-display" },
        { label: "Accessories",                href: "/products/accessories" },
        { label: "• Stylus",                   href: "/products/accessories" },
        { label: "• Stands",                   href: "/products/accessories" },
        { label: "• Boards",                   href: "/products/accessories" },
        { label: "Unified Communication",      href: "/products/unified-communication" },
        { label: "• CCTV",                     href: "/products/cctv" },
        { label: "Software (CAST CMS)",        href: "/products/software" },
        { label: "View All Products",          href: "/products" },
      ],
    },
    {
      label: "Solutions",
      dropdown: [
        { label: "Enterprise", href: "/solutions/enterprise" },
        { label: "Education", href: "/solutions/education" },
        { label: "View All Solutions", href: "/solutions" },
      ],
    },
    {
      label: "Support",
      dropdown: [
        { label: "Contact Support", href: "/contact?subject=support" },
        { label: "Get a Quote", href: "/get-quote" },
      ],
    },
    {
      label: "Explore",
      dropdown: [
        { label: "About Us", href: "/about" },
        { label: "News & Events", href: "/blog" },
        { label: "Privacy Policy", href: "/privacy-policy" },
      ],
    },
    { label: "Contact Us", href: "/contact" },
  ];

  // ── Render ─────────────────────────────────────────────────
  return (
    <header className="fixed top-0 left-0 w-full h-[80px] bg-black z-50">

      {/* ── Search Overlay — MAXHUB style (full-screen white) ─ */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-[200] bg-white overflow-y-auto">
          {/* Close button */}
          <button
            type="button"
            onClick={closeDesktopSearch}
            aria-label="Close search"
            className="absolute top-6 right-8 text-[#999] hover:text-[#333] transition-colors"
          >
            <CloseIcon size={22} />
          </button>

          {/* Centred content */}
          <div className="mx-auto max-w-[900px] px-8 pt-[100px] pb-20">

            {/* Search input — underline only */}
            <form onSubmit={handleSearchSubmit} role="search">
              <div className="flex items-center gap-4 border-b border-[#ccc] pb-3">
                <span className="flex-shrink-0 text-[#999]"><SearchIcon size={22} /></span>
                <input
                  ref={searchInputRef}
                  type="text"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  onKeyDown={handleSearchKeyDown}
                  placeholder="Search"
                  autoComplete="off"
                  aria-label="Search"
                  className="flex-1 bg-transparent font-sans text-[22px] text-[#111] placeholder:text-[#bbb] outline-none"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => { setSearchQuery(""); setSuggestions([]); setActiveIndex(-1); searchInputRef.current?.focus(); }}
                    className="flex-shrink-0 text-[#bbb] hover:text-[#555] transition-colors"
                    aria-label="Clear"
                  >
                    <CloseIcon size={18} />
                  </button>
                )}
              </div>
            </form>

            {/* Results while typing */}
            {searchQuery.trim().length >= 1 && (
              <div className="mt-8">
                {suggestions.length > 0 ? (
                  <ul>
                    {suggestions.map((item, i) => (
                      <ResultRow
                        key={item.href}
                        label={item.name}
                        href={item.href}
                        active={i === activeIndex}
                        onSelect={() => handleDesktopSuggestionSelect(item)}
                      />
                    ))}
                  </ul>
                ) : (
                  <p className="font-sans text-[15px] text-[#999]">
                    No results for &ldquo;{searchQuery}&rdquo;
                  </p>
                )}
              </div>
            )}

            {/* Empty state — Quick Links */}
            {searchQuery.trim().length === 0 && (
              <div className="mt-10">
                <p className="font-sans text-[15px] text-[#333] mb-4">Quick Links</p>
                <ul>
                  {RECOMMENDED.map((item) => (
                    <ResultRow
                      key={item.href}
                      label={item.label}
                      href={item.href}
                      onSelect={() => { closeDesktopSearch(); navigateTo(item.href); }}
                    />
                  ))}
                </ul>
              </div>
            )}

          </div>
        </div>
      )}

      <div className="mx-auto flex h-full max-w-[1440px] items-center justify-between px-[30px]">
        {/* Logo */}
        <Link href="/" className="font-heading text-[18px] tracking-[3px] text-white uppercase">
          InfinityX
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-[30px]">
          {navLinkKeys.map((key, i) => (
            <div
              key={key}
              onMouseEnter={() => handleMegaMenuEnter(key)}
              onMouseLeave={handleMegaMenuLeave}
              className="relative"
            >
              <button className="font-sans text-[14px] text-white outline-none hover:text-white/80 transition-colors">
                {navLinks[i]}
              </button>
            </div>
          ))}
        </nav>

        {/* Right Side */}
        <div className="hidden lg:flex items-center gap-[20px]">
          {/* Search */}
          <button
            type="button"
            onClick={() => setIsSearchOpen(true)}
            className="flex items-center gap-[6px] font-sans text-[14px] text-white hover:text-white/80 transition-colors"
            aria-label="Open search"
          >
            <SearchIcon size={16} />
            <span>{t.search}</span>
          </button>

          {/* Locale / Region trigger — opens full-screen overlay */}
          <button
            type="button"
            onClick={() => setIsLocaleOpen(true)}
            className="flex items-center gap-[6px] font-sans text-[14px] text-white hover:text-white/80 transition-colors"
            aria-label="Change location"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <line x1="2" y1="12" x2="22" y2="12" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
            <span>{regionCode}</span>
          </button>

          {/* Contact Sales */}
          <div className="inline-block rounded-[5px] bg-[#196FD2]">
            <Link
              href="/contact"
              className="inline-block px-[30px] pt-[18px] pb-[14px] font-sans text-[14px] text-white hover:bg-[#1560b8] transition-colors rounded-[5px]"
            >
              {t.contactSales} &gt;
            </Link>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 text-white"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <CloseIcon size={24} />
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </div>

      {/* ── Desktop Mega Menu ──────────────────────────────── */}
      {activeMegaMenu && (
        <div
          onMouseEnter={() => handleMegaMenuEnter(activeMegaMenu)}
          onMouseLeave={handleMegaMenuLeave}
          className="hidden lg:block"
        >
          <UnifiedMegaMenu section={activeMegaMenu} onClose={closeMegaMenu} />
        </div>
      )}

      {/* ── Mobile Full-Screen Menu ────────────────────────── */}
      <div
        className={cn(
          "fixed inset-0 bg-white transform transition-transform duration-500 ease-in-out lg:hidden",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
        style={{ top: "80px" }}
      >
        <div className="h-full flex flex-col">
          {/* Mobile Search */}
          <div className="px-6 pt-5 pb-4 border-b border-[#f0f0f0]">

            {/* Underline input */}
            <div className="flex items-center gap-3 border-b border-[#ccc] pb-2">
              <span className="text-[#999] flex-shrink-0"><SearchIcon size={16} /></span>
              <input
                ref={mobileSearchRef}
                type="text"
                value={mobileQuery}
                onChange={handleMobileSearchChange}
                onKeyDown={handleMobileSearchKeyDown}
                placeholder="Search"
                autoComplete="off"
                aria-label="Search"
                className="flex-1 bg-transparent font-sans text-[16px] text-[#111] placeholder:text-[#bbb] outline-none"
              />
              {mobileQuery && (
                <button
                  type="button"
                  onClick={() => { setMobileQuery(""); setMobileSuggestions([]); setMobileActiveIndex(-1); mobileSearchRef.current?.focus(); }}
                  className="flex-shrink-0 text-[#bbb] hover:text-[#555]"
                  aria-label="Clear"
                >
                  <CloseIcon size={14} />
                </button>
              )}
            </div>

            {/* Results while typing */}
            {mobileQuery.trim().length >= 1 && (
              <div className="mt-4">
                {mobileSuggestions.length > 0 ? (
                  <ul>
                    {mobileSuggestions.map((item, i) => (
                      <ResultRow
                        key={item.href}
                        label={item.name}
                        href={item.href}
                        active={i === mobileActiveIndex}
                        onSelect={() => handleMobileSuggestionSelect(item)}
                      />
                    ))}
                  </ul>
                ) : (
                  <p className="font-sans text-[13px] text-[#999]">
                    No results for &ldquo;{mobileQuery}&rdquo;
                  </p>
                )}
              </div>
            )}

            {/* Empty state — quick links */}
            {mobileQuery.trim().length === 0 && (
              <div className="mt-5">
                <p className="font-sans text-[13px] text-[#333] mb-3">Quick Links</p>
                <ul>
                  {RECOMMENDED.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={handleLinkClick}
                        className="block py-2 font-sans text-[14px] text-[#111] hover:text-[#196FD2] transition-colors"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

          </div>

          {/* Accordion Nav */}
          <div className="flex-1 overflow-y-auto px-6 py-6">
            <div className="space-y-2">
              {mobileNavItems.map((item) => (
                <div key={item.label} className="border-b border-[#e5e5e5]/50 last:border-0">
                  {"dropdown" in item && item.dropdown ? (
                    <>
                      <button
                        onClick={() => toggleAccordion(item.label)}
                        className="w-full flex items-center justify-between py-4 text-left group"
                      >
                        <span className="text-lg font-heading text-[#333] group-hover:text-[#196FD2] transition-colors">
                          {item.label}
                        </span>
                        <svg
                          width="18" height="18" viewBox="0 0 24 24" fill="none"
                          stroke="#999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                          className={cn("transition-transform duration-300", openAccordion === item.label && "rotate-90")}
                        >
                          <polyline points="9 18 15 12 9 6" />
                        </svg>
                      </button>
                      <div className={cn(
                        "overflow-hidden transition-all duration-300 ease-in-out",
                        openAccordion === item.label ? "max-h-[400px] opacity-100 mb-4" : "max-h-0 opacity-0"
                      )}>
                        <div className="pl-4 space-y-3">
                          {item.dropdown.map((sub) => (
                            <Link
                              key={sub.label}
                              href={sub.href}
                              onClick={handleLinkClick}
                              className="block py-2 font-sans text-[14px] text-[#333] hover:text-[#196FD2] transition-colors"
                            >
                              {sub.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : "href" in item ? (
                    <Link
                      href={item.href}
                      onClick={handleLinkClick}
                      className="block py-4 text-lg font-heading text-[#333] hover:text-[#196FD2] transition-colors"
                    >
                      {item.label}
                    </Link>
                  ) : null}
                </div>
              ))}
            </div>
          </div>

          {/* Bottom — Locale trigger + CTA */}
          <div className="border-t border-[#e5e5e5] bg-[#f5f5f5]/50 px-6 py-4 space-y-3">
            <button
              type="button"
              onClick={() => { setIsMobileMenuOpen(false); setIsLocaleOpen(true); }}
              className="w-full flex items-center gap-2 font-sans text-[13px] text-[#555] hover:text-[#196FD2] transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
              <span>
                {ALL_LOCALES.find((e) => e.code === regionCode)?.flag}{" "}
                {ALL_LOCALES.find((e) => e.code === regionCode)?.country ?? regionCode}
                {" · "}
                {ALL_LOCALES.find((e) => e.code === regionCode)?.lang ?? "English"}
              </span>
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                className="ml-auto text-[#999]">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>

            <div className="inline-block w-full rounded-[5px] bg-[#196FD2] text-center">
              <Link
                href="/contact"
                onClick={handleLinkClick}
                className="block px-[30px] pt-[18px] pb-[14px] font-sans text-[14px] text-white"
              >
                {t.contactSales} &gt;
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ── Change Location Overlay (MAXHUB style) ──────────── */}
      {isLocaleOpen && (
        <div className="fixed inset-0 z-[300] bg-white overflow-y-auto">
          {/* Close */}
          <button
            type="button"
            onClick={() => setIsLocaleOpen(false)}
            aria-label="Close"
            className="absolute top-6 right-8 text-[#999] hover:text-[#333] transition-colors"
          >
            <CloseIcon size={22} />
          </button>

          {/* Content */}
          <div className="mx-auto max-w-[1100px] px-8 pt-[80px] pb-20">
            {/* Heading */}
            <h1 className="text-center font-heading text-[28px] md:text-[36px] uppercase tracking-[2px] text-[#111] mb-2">
              {t.changeLocation}
            </h1>
            <p className="text-center font-sans text-[14px] text-[#999] mb-12">
              {t.selectRegion}
            </p>

            {/* Region groups grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-10">
              {LOCALE_GROUPS.map((group) => (
                <div key={group.heading}>
                  <h3 className="font-sans text-[11px] font-bold tracking-[2px] uppercase text-[#111] mb-4 pb-2 border-b border-[#e8e8e8]">
                    {group.heading}
                  </h3>
                  <ul className="space-y-3">
                    {group.entries.map((entry) => {
                      const isActive = entry.code === regionCode;
                      return (
                        <li key={entry.code}>
                          <button
                            type="button"
                            onClick={() => handleLocaleSelect(entry)}
                            className={cn(
                              "text-left font-sans text-[14px] leading-snug transition-colors",
                              isActive
                                ? "text-[#196FD2] font-semibold"
                                : "text-[#333] hover:text-[#196FD2]"
                            )}
                          >
                            <span>{entry.flag} {entry.country}</span>
                            <span className="text-[#bbb] mx-1.5">|</span>
                            <span className={isActive ? "text-[#196FD2]" : "text-[#999]"}>
                              {entry.lang}
                            </span>
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
