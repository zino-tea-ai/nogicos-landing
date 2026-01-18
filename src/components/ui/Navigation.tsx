"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { useEffect, useState } from "react";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={`nav ${scrolled ? "scrolled" : ""}`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Logo - 等角立方体，代表多维工作空间 */}
      <Link href="/" className="nav-logo">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 2L3 7V17L12 22L21 17V7L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
          <path d="M12 12L3 7" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M12 12L21 7" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M12 12V22" stroke="currentColor" strokeWidth="1.5"/>
        </svg>
        <span>NogicOS</span>
      </Link>

      {/* Navigation Links */}
      <div className="nav-links">
        <Link href="#solution" className="nav-link">Solution</Link>
        <Link href="#how-it-works" className="nav-link">How It Works</Link>
        <Link href="#use-cases" className="nav-link">Use Cases</Link>
        <Link href="#waitlist" className="nav-link">Join the waitlist</Link>
      </div>

      {/* CTA */}
      <motion.button
        className="btn btn-outline"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" })}
      >
        Join the waitlist
      </motion.button>
    </motion.nav>
  );
}
