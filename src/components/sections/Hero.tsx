"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect, useRef } from "react";
import { ProductDemo } from "@/components/animations";

const painPoints = [
  "copy-pasting context to ChatGPT",
  "uploading files one by one",
  "describing what's on your screen",
  "being AI's human clipboard",
  "explaining the same thing twice",
];

export function Hero() {
  const [currentPain, setCurrentPain] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setCurrentPain((prev) => (prev + 1) % painPoints.length);
      }, 5000);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused]);

  return (
    <section className="hero">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <p className="hero-eyebrow">For knowledge workers tired of</p>
        
        <h1 
          className="hero-title"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={currentPain}
              className="pain-text"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {painPoints[currentPain]}
            </motion.span>
          </AnimatePresence>
        </h1>

        <p className="hero-subtitle">
          NogicOS is an AI that actually sees your screen, reads your files, 
          and works in your browser. <strong>No more copying. No more explaining.</strong>
        </p>

        <div className="hero-cta">
          <motion.button
            className="btn btn-primary"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" })}
          >
            Request Early Access
          </motion.button>
          <p className="hero-cta-note">
            <span className="pulse-dot" /> 
            <strong>Only 50 spots left</strong> in private beta
          </p>
        </div>

        <div className="hero-trust">
          <span>Trusted by teams at</span>
          <div className="trust-logos">
            <span>YC Founders</span>
            <span>•</span>
            <span>Stanford</span>
            <span>•</span>
            <span>Remote Teams</span>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="hero-demo"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
      >
        <ProductDemo />
        <p className="demo-caption">Browser. Files. Desktop. One AI sees it all.</p>
      </motion.div>
    </section>
  );
}
