"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect, useRef } from "react";
import { content } from "@/data/content";

export function Hero() {
  const [currentPain, setCurrentPain] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [demoPhase, setDemoPhase] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Pain text rotation
  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setCurrentPain((prev) => (prev + 1) % content.hero.painPoints.length);
      }, 5000);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused]);

  // Demo animation
  useEffect(() => {
    const timer = setInterval(() => {
      setDemoPhase((p) => (p < 4 ? p + 1 : 0));
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  const handleCTAClick = () => {
    document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <p className="hero-eyebrow">{content.hero.eyebrow}</p>

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
              {content.hero.painPoints[currentPain]}
            </motion.span>
          </AnimatePresence>
        </h1>

        <p className="hero-subtitle">
          {content.hero.subtitle.split("**").map((part, i) =>
            i % 2 === 1 ? <strong key={i}>{part}</strong> : part
          )}
        </p>

        <div className="hero-stats">
          <div className="stat">
            <span className="stat-number">{content.hero.stats.before.value}</span>
            <span className="stat-label">{content.hero.stats.before.label}</span>
          </div>
          <div className="stat-arrow">→</div>
          <div className="stat">
            <span className="stat-number">{content.hero.stats.after.value}</span>
            <span className="stat-label">{content.hero.stats.after.label}</span>
          </div>
        </div>

        <div className="hero-cta">
          <motion.button
            className="btn btn-primary"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleCTAClick}
          >
            {content.hero.cta.button}
          </motion.button>
          <p className="hero-cta-note">
            <span className="pulse-dot" />
            <strong>{content.hero.cta.note}</strong>
          </p>
        </div>

        <div className="hero-trust">
          <span>{content.hero.trust.label}</span>
          <div className="trust-logos">
            {content.hero.trust.items.map((item, i) => (
              <span key={item}>
                {item}
                {i < content.hero.trust.items.length - 1 && <span style={{ margin: "0 8px" }}>•</span>}
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div
        className="hero-demo"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="demo-window">
          <div className="demo-chrome">
            <div className="demo-dots">
              <span /><span /><span />
            </div>
            <div className="demo-url">
              <span className="demo-url-icon">◉</span>
              <span>nogicos.local</span>
            </div>
          </div>
          <div className="demo-content">
            <div className="demo-message user">
              <p>&quot;{content.hero.demo.userMessage}&quot;</p>
            </div>

            {demoPhase >= 1 && (
              <motion.div
                className="demo-thinking"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <span className="thinking-dot" />
                <span>NogicOS is working...</span>
              </motion.div>
            )}

            <div className="demo-actions">
              {content.hero.demo.actions.map((action, i) => (
                <motion.div
                  key={action.label}
                  className={`action ${demoPhase > i + 1 ? "done" : ""}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{
                    opacity: demoPhase >= i + 1 ? 1 : 0.3,
                    y: 0,
                  }}
                  transition={{ delay: i * 0.1 }}
                >
                  <span className="action-icon">{action.icon}</span>
                  <span>{action.label}</span>
                  {demoPhase > i + 1 && <span className="action-check">✓</span>}
                </motion.div>
              ))}
            </div>

            {demoPhase >= 4 && (
              <motion.p
                className="demo-complete"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {content.hero.demo.complete}
              </motion.p>
            )}
          </div>
        </div>
        <p className="demo-caption">{content.hero.demo.caption}</p>
      </motion.div>
    </section>
  );
}
