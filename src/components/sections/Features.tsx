"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

// 使用设计系统的图标符号，不用 emoji
const features = [
  {
    icon: "◎",
    title: "Complete Context",
    subtitle: "AI that sees your whole workspace",
    description: "Browser tabs, local files, desktop state. NogicOS sees everything you're working with—no copy-paste needed.",
  },
  {
    icon: "→",
    title: "Direct Action",
    subtitle: "Not just chat, actual execution",
    description: "Click buttons, fill forms, create files. NogicOS doesn't just suggest—it does the work in your environment.",
  },
  {
    icon: "◇",
    title: "Local-First",
    subtitle: "Your data never leaves",
    description: "Everything runs on your machine. No cloud uploads, no data mining. Complete privacy by design.",
  },
];

export function Features() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="features" className="solution-section" ref={ref}>
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <h2>
          Built different. <span className="highlight">Works better.</span>
        </h2>
        <p className="section-description">
          Three principles that make NogicOS uniquely powerful.
        </p>
      </motion.div>

      {/* Feature Cards - 使用设计系统的 capability-card */}
      <div className="capabilities-grid" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
        {features.map((feature, i) => (
          <motion.div
            key={feature.title}
            className="capability-card"
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 + i * 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Icon - 使用设计系统规范 */}
            <span className="capability-icon">{feature.icon}</span>
            
            {/* Title */}
            <h3>{feature.title}</h3>
            
            {/* Subtitle */}
            <p style={{ 
              fontSize: "0.875rem", 
              color: "var(--text-muted)", 
              marginBottom: 12 
            }}>
              {feature.subtitle}
            </p>
            
            {/* Description */}
            <p>{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
