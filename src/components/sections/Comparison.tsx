"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

const competitors = [
  {
    name: "ChatGPT",
    capabilities: { browser: false, files: "Upload", apps: false },
    focus: "Chat",
  },
  {
    name: "Claude",
    capabilities: { browser: false, files: "Upload", apps: false },
    focus: "Chat",
  },
  {
    name: "Cursor",
    capabilities: { browser: false, files: "Code", apps: false },
    focus: "Code",
  },
  {
    name: "NogicOS",
    capabilities: { browser: true, files: true, apps: true },
    focus: "Everything",
    highlight: true,
  },
];

export function Comparison() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const renderStatus = (value: boolean | string) => {
    if (typeof value === "boolean") {
      return value ? (
        <span style={{ color: "var(--text-primary)", fontWeight: 600 }}>✓</span>
      ) : (
        <span style={{ color: "var(--text-muted)", opacity: 0.4 }}>✕</span>
      );
    }
    return <span style={{ color: "var(--text-muted)", fontSize: "0.75rem" }}>{value}</span>;
  };

  return (
    <section id="comparison" className="problem-section" ref={ref}>
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <h2>
          How we&apos;re <span className="highlight">different</span>
        </h2>
        <p className="section-description">
          Most AI tools are blind to where you actually work. We&apos;re not.
        </p>
      </motion.div>

      <div
        className="grid gap-6"
        style={{ gridTemplateColumns: "repeat(4, 1fr)" }}
      >
        {competitors.map((comp, i) => (
          <motion.div
            key={comp.name}
            className="problem-item"
            style={
              comp.highlight
                ? {
                    borderColor: "var(--text-primary)",
                    background: "rgba(255, 255, 255, 0.02)",
                  }
                : {}
            }
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 + i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Header */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
              <h3 style={{ margin: 0 }}>{comp.name}</h3>
              {comp.highlight && (
                <span
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    color: "var(--text-primary)",
                    background: "rgba(255, 255, 255, 0.1)",
                    padding: "4px 10px",
                    borderRadius: 100,
                  }}
                >
                  You are here
                </span>
              )}
            </div>

            {/* Capabilities */}
            <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 20 }}>
              {[
                { icon: "◎", label: "Browser", value: comp.capabilities.browser },
                { icon: "▢", label: "Files", value: comp.capabilities.files },
                { icon: "◇", label: "Apps", value: comp.capabilities.apps },
              ].map((cap) => (
                <div key={cap.label} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <span style={{ color: "var(--text-muted)", width: 20 }}>{cap.icon}</span>
                  <span style={{ flex: 1, fontSize: "0.875rem", color: "var(--text-secondary)" }}>
                    {cap.label}
                  </span>
                  {renderStatus(cap.value)}
                </div>
              ))}
            </div>

            {/* Focus */}
            <div style={{ paddingTop: 16, borderTop: "1px solid var(--border)" }}>
              <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginRight: 8 }}>
                Focus:
              </span>
              <span
                style={{
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  color: comp.highlight ? "var(--text-primary)" : "var(--text-secondary)",
                }}
              >
                {comp.focus}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
