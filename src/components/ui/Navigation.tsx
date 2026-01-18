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
      {/* Logo - 纯文字，N 加粗作为视觉锚点 */}
      <Link href="/" className="nav-logo text-only">
        <span className="logo-n">N</span>ogicOS
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
