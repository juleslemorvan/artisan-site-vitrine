"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "Services", href: "/#services" },
  { label: "Réalisations", href: "/#realisations" },
  { label: "À propos", href: "/#apropos" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/#contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(9,9,9,0.95)" : "rgba(9,9,9,0.65)",
        backdropFilter: "blur(8px)",
        borderBottom: scrolled ? "1px solid #2A2A2A" : "none",
        boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,0.5)" : "none",
      }}
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <Image
              src="/images/logo.png"
              alt="Renard Rénovation"
              width={40}
              height={30}
              className="object-contain"
            />
            <div className="leading-tight">
              <span
                className="block text-white font-bold text-base"
                style={{ fontFamily: "var(--font-sora)" }}
              >
                Renard Rénovation
              </span>
              <span className="block text-[10px] text-gray-400 tracking-widest uppercase">
                Lyon
              </span>
            </div>
          </Link>

          {/* Nav desktop */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-gray-300 hover:text-accent transition-colors duration-150 font-medium"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA desktop */}
          <a
            href="tel:0647238591"
            className="hidden md:flex items-center gap-2 bg-accent text-white px-5 py-2.5 rounded-sm text-sm font-bold hover:bg-accent-hover transition-all duration-200 hover:scale-105"
          >
            <Phone size={15} color="white" />
            06 47 23 85 91
          </a>

          {/* Burger mobile */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-white transition-colors"
            aria-label="Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      {isOpen && (
        <div className="md:hidden bg-[#090909]/98 backdrop-blur-md border-t border-[#2A2A2A]">
          <nav className="container mx-auto px-4 py-6 flex flex-col gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-accent transition-colors font-medium text-lg"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:0647238591"
              className="flex items-center gap-2 bg-accent text-black px-5 py-3 rounded-sm font-bold text-sm mt-2 justify-center"
            >
              <Phone size={15} />
              06 47 23 85 91
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
