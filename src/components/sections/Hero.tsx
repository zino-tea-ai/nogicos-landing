"use client";

import { motion } from "motion/react";

export function Hero() {
  return (
    <section className="hero hero-centered">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* 主标题 - 大气居中 */}
        <h1 className="hero-title">
          Get work done across
          <br />
          <span className="hero-title-line">tabs, files, and apps.</span>
        </h1>

        {/* 副标题 */}
        <p className="hero-subtitle">
          The workspace AI that connects your tools and completes workflows end-to-end—locally, with full context.
        </p>

        {/* CTA 区域 */}
        <div className="hero-cta">
          <motion.button
            className="btn btn-primary btn-large"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" })}
          >
            Request Early Access
          </motion.button>
          <p className="hero-note">Free during beta · No credit card required</p>
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

      {/* Demo 预览 - 居中展示 */}
      <motion.div
        className="hero-demo hero-demo-centered"
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
              <span className="demo-url-icon">◎</span>
              <span>nogicos://workspace</span>
            </div>
          </div>
          <div className="demo-content">
            <div className="demo-message user">
              <p>"Find all competitor pricing pages and summarize them in a doc"</p>
            </div>
            <div className="demo-message ai">
              <div className="demo-actions">
                <div className="action done">
                  <span className="action-check">✓</span>
                  <span>Found 8 competitor sites</span>
                </div>
                <div className="action done">
                  <span className="action-check">✓</span>
                  <span>Extracted pricing data</span>
                </div>
                <div className="action done">
                  <span className="action-check">✓</span>
                  <span>Created comparison.md</span>
                </div>
              </div>
              <p className="demo-complete">Done in 23 seconds</p>
            </div>
          </div>
        </div>
        <p className="demo-caption">Real workflow. No copy-paste. No uploads.</p>
      </motion.div>
    </section>
  );
}
