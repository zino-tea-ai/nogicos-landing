"use client";

import { motion } from "motion/react";
import { useState, useEffect } from "react";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCTAClick = () => {
    document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      className={`nav ${scrolled ? "scrolled" : ""}`}
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <a href="/" className="nav-logo">
        <span>◎</span>
        <span>NogicOS</span>
      </a>

      <div className="nav-links">
        <a href="#features" className="nav-link">Features</a>
        <a href="#how-it-works" className="nav-link">How it works</a>
        <a href="#pricing" className="nav-link">Pricing</a>
      </div>

      <motion.button
        className="btn btn-primary"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={handleCTAClick}
      >
        Get Early Access
      </motion.button>
    </motion.nav>
  );
}
