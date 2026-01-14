"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import "./ProductDemo.css";

// 真实的 NogicOS API 调用展示
const apiCalls = [
  { cmd: "playwright_snapshot()", result: "Found 12 interactive elements" },
  { cmd: 'playwright_click(selector="#email")', result: "Element clicked" },
  { cmd: 'playwright_fill(value="user@...")', result: "Text entered" },
  { cmd: "read_file(path='./data/report.md')", result: "2.4KB loaded" },
  { cmd: "window_screenshot(hwnd=0x12A8F)", result: "Screenshot captured" },
  { cmd: "window_click(x=432, y=280)", result: "PostMessage sent" },
];

// 窗口容器组件 - 玻璃拟态
function GlassWindow({
  title,
  icon,
  active,
  children,
  className = "",
}: {
  title: string;
  icon: string;
  active: boolean;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={`glass-window ${active ? "active" : ""} ${className}`}
      animate={{
        scale: active ? 1.02 : 1,
        boxShadow: active
          ? "0 0 40px rgba(255,255,255,0.05), 0 20px 40px rgba(0,0,0,0.4)"
          : "0 10px 30px rgba(0,0,0,0.3)",
      }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
    >
      <div className="window-chrome">
        <div className="window-controls">
          <span className="control close" />
          <span className="control minimize" />
          <span className="control maximize" />
        </div>
        <div className="window-title">
          <span className="window-icon">{icon}</span>
          <span>{title}</span>
        </div>
      </div>
      <div className="window-content">{children}</div>
      {active && <div className="window-glow" />}
    </motion.div>
  );
}

// Browser 窗口内容
function BrowserContent({ phase }: { phase: number }) {
  return (
    <div className="browser-demo">
      <div className="browser-url-bar">
        <span className="url-icon">◉</span>
        <span className="url-text">https://app.example.com/dashboard</span>
      </div>
      <div className="browser-page">
        <div className="form-demo">
          <div className={`form-field ${phase >= 1 ? "scanning" : ""}`}>
            <label>Email</label>
            <div className={`input-box ${phase >= 2 ? "focused" : ""} ${phase >= 3 ? "filled" : ""}`}>
              {phase >= 3 && (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="typed-text"
                >
                  user@company.com
                </motion.span>
              )}
              {phase === 2 && <span className="cursor-blink">|</span>}
            </div>
            {phase >= 1 && phase < 3 && (
              <motion.div
                className="element-highlight"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              />
            )}
          </div>
          <div className={`form-field ${phase >= 4 ? "scanning" : ""}`}>
            <label>Password</label>
            <div className="input-box">
              {phase >= 5 && <span className="typed-text">••••••••••</span>}
            </div>
          </div>
          <motion.button
            className={`submit-btn ${phase >= 6 ? "clicking" : ""}`}
            animate={phase >= 6 ? { scale: [1, 0.95, 1] } : {}}
          >
            Sign In
          </motion.button>
        </div>
      </div>
    </div>
  );
}

// Files 窗口内容
function FilesContent({ phase }: { phase: number }) {
  const files = [
    { name: "README.md", type: "file", icon: "📄" },
    { name: "src/", type: "folder", icon: "📁", expanded: phase >= 2 },
    { name: "package.json", type: "file", icon: "📄" },
  ];

  const srcFiles = [
    { name: "index.ts", icon: "📄" },
    { name: "utils.ts", icon: "📄", highlight: phase >= 3 },
    { name: "types.ts", icon: "📄" },
  ];

  return (
    <div className="files-demo">
      <div className="file-tree">
        {files.map((file, i) => (
          <div key={i}>
            <div className={`file-item ${file.type}`}>
              <span className="file-icon">{file.icon}</span>
              <span className="file-name">{file.name}</span>
            </div>
            {file.type === "folder" && file.expanded && (
              <motion.div
                className="folder-contents"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {srcFiles.map((sf, j) => (
                  <div
                    key={j}
                    className={`file-item nested ${sf.highlight ? "highlight" : ""}`}
                  >
                    <span className="file-icon">{sf.icon}</span>
                    <span className="file-name">{sf.name}</span>
                    {sf.highlight && <span className="file-badge">reading</span>}
                  </div>
                ))}
              </motion.div>
            )}
          </div>
        ))}
      </div>
      {phase >= 4 && (
        <motion.div
          className="file-preview"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="preview-header">utils.ts</div>
          <div className="preview-code">
            <div className="code-line">
              <span className="line-number">1</span>
              <span className="code-keyword">export</span>{" "}
              <span className="code-keyword">function</span>{" "}
              <span className="code-function">formatDate</span>() {"{"}
            </div>
            <div className="code-line">
              <span className="line-number">2</span>
              {"  "}
              <span className="code-keyword">return</span>{" "}
              <span className="code-string">&quot;2025-01-14&quot;</span>;
            </div>
            <div className="code-line">
              <span className="line-number">3</span>
              {"}"}
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}

// Desktop 窗口内容
function DesktopContent({ phase }: { phase: number }) {
  return (
    <div className="desktop-demo">
      <div className="desktop-window-sim">
        <div className="sim-chrome">
          <span className="sim-title">External App - hwnd: 0x12A8F</span>
        </div>
        <div className="sim-content">
          <div className="sim-toolbar">
            <span>File</span>
            <span>Edit</span>
            <span>View</span>
          </div>
          <div className="sim-body">
            <motion.button
              className={`sim-button ${phase >= 2 ? "targeted" : ""}`}
              animate={phase >= 3 ? { scale: [1, 0.95, 1] } : {}}
            >
              Export Data
              {phase >= 2 && (
                <motion.div
                  className="coord-label"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  (432, 280)
                </motion.div>
              )}
            </motion.button>
          </div>
        </div>
      </div>
      {phase >= 4 && (
        <motion.div
          className="screenshot-capture"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <div className="capture-flash" />
          <div className="capture-preview">
            <span className="capture-icon">📷</span>
            <span>Screenshot saved</span>
          </div>
        </motion.div>
      )}
    </div>
  );
}

// 主组件
export function ProductDemo() {
  const [activeWindow, setActiveWindow] = useState(0);
  const [phase, setPhase] = useState(0);
  const [currentLog, setCurrentLog] = useState(0);

  // 动画循环
  useEffect(() => {
    const phaseTimer = setInterval(() => {
      setPhase((p) => {
        if (p >= 6) {
          setActiveWindow((w) => (w + 1) % 3);
          return 0;
        }
        return p + 1;
      });
    }, 1200);

    return () => clearInterval(phaseTimer);
  }, []);

  // 日志滚动
  useEffect(() => {
    const logTimer = setInterval(() => {
      setCurrentLog((l) => (l + 1) % apiCalls.length);
    }, 2000);
    return () => clearInterval(logTimer);
  }, []);

  return (
    <div className="product-demo-container">
      <div className="noise-overlay" />

      <div className="demo-viewport">
        <div className="windows-stack">
          <GlassWindow
            title="Browser"
            icon="◎"
            active={activeWindow === 0}
            className="window-browser"
          >
            <BrowserContent phase={activeWindow === 0 ? phase : 0} />
          </GlassWindow>

          <GlassWindow
            title="Files"
            icon="▢"
            active={activeWindow === 1}
            className="window-files"
          >
            <FilesContent phase={activeWindow === 1 ? phase : 0} />
          </GlassWindow>

          <GlassWindow
            title="Desktop"
            icon="◇"
            active={activeWindow === 2}
            className="window-desktop"
          >
            <DesktopContent phase={activeWindow === 2 ? phase : 0} />
          </GlassWindow>
        </div>

        <div className="action-log">
          <div className="log-header">
            <span className="log-icon">›</span>
            <span>NogicOS Console</span>
          </div>
          <div className="log-content">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentLog}
                className="log-entry"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <span className="log-cmd">{apiCalls[currentLog].cmd}</span>
                <span className="log-result">→ {apiCalls[currentLog].result}</span>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      <div className="capability-indicators">
        {["Browser", "Files", "Desktop"].map((cap, i) => (
          <button
            key={cap}
            className={`cap-indicator ${activeWindow === i ? "active" : ""}`}
            onClick={() => {
              setActiveWindow(i);
              setPhase(0);
            }}
          >
            <span className="cap-dot" />
            <span className="cap-name">{cap}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
