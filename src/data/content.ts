// ================================
// NogicOS Landing Page Content
// 所有文案集中管理
// 核心叙事：Complete Context + Direct Action + Local-First
// ================================

export const siteConfig = {
  name: "NogicOS",
  tagline: "The AI that works where you work",
  description:
    "The first AI that sees your browser, files, and desktop as one unified workspace. Complete context. Direct action. Local-first.",
  url: "https://nogicos.com",
} as const;

// Problem Section
export const problemContent = {
  eyebrow: "The Problem",
  title: "AI tools today are",
  titleHighlight: "blind",
  titleSuffix: "to your actual work",
  description:
    "Every AI interaction today follows the same frustrating pattern:",
  problems: [
    {
      before: "You open a document",
      pain: "AI can't see it",
      result: "You copy-paste the entire thing",
    },
    {
      before: "You browse a website",
      pain: "AI can't navigate it",
      result: "You screenshot and describe",
    },
    {
      before: "You work across apps",
      pain: "AI can't switch context",
      result: "You become the human clipboard",
    },
  ],
  quote: {
    text: "I spend more time explaining my screen to AI than actually getting work done.",
    cite: "— Every knowledge worker in 2025",
  },
} as const;

// Solution Section - 已移除"越用越快/学习"概念
export const solutionContent = {
  eyebrow: "The Solution",
  title: "AI that finally sees",
  titleHighlight: "your whole workspace",
  description:
    "No more copying. No more explaining. Just tell NogicOS what you need, and watch it work across your browser, files, and desktop.",
  capabilities: [
    {
      icon: "◎",
      title: "Complete Browser Context",
      description:
        "Navigate websites, click buttons, fill forms, extract data. Your AI sees what you see—no extensions needed.",
      example: '"Research competitors on LinkedIn and save their profiles"',
    },
    {
      icon: "▢",
      title: "Full File Access",
      description:
        "Docs, spreadsheets, downloads. Access everything without uploading anything. Your files stay on your machine.",
      example: '"Summarize all PDFs in my Downloads folder"',
    },
    {
      icon: "◇",
      title: "Desktop Awareness",
      description:
        "Any app, any window. Take screenshots, understand what's displayed, and help you with any application.",
      example: '"What error is showing in this Figma file?"',
    },
    {
      icon: "→",
      title: "Direct Execution",
      description:
        "Not just suggestions—real actions. Click, type, create files, send messages. Your AI works in your environment.",
      example: '"Fill out this form using my resume"',
    },
  ],
  comparison: {
    title: "How NogicOS compares",
    headers: ["Capability", "ChatGPT", "Claude", "Cursor", "NogicOS"],
    rows: [
      ["See your browser", "no", "no", "no", "yes"],
      ["Read local files", "no", "partial:Upload only", "partial:Code only", "yes:All files"],
      ["Desktop action", "no", "no", "no", "yes"],
      ["Privacy-first", "no:Cloud", "no:Cloud", "partial:Mixed", "yes:100% Local"],
    ],
  },
} as const;

// Social Proof Section - 已移除"30x faster"和 learning 相关评论
export const socialProofContent = {
  stats: [
    { value: "87%", label: "less context-switching" },
    { value: "3", label: "platforms unified" },
    { value: "100%", label: "local & private" },
  ],
  testimonials: {
    eyebrow: "Early Access Feedback",
    title: "What beta testers are saying",
    items: [
      {
        quote:
          "I used to spend 20 minutes setting up context. Now I just tell NogicOS what I need.",
        name: "Sarah K.",
        role: "Product Manager",
        company: "YC W24",
      },
      {
        quote:
          "Finally, an AI that doesn't make me feel like a human clipboard.",
        name: "Alex T.",
        role: "Content Lead",
        company: "Remote Team",
      },
      {
        quote: "The fact that it can actually DO things, not just suggest—game changer.",
        name: "Jordan M.",
        role: "Founder",
        company: "Stealth Startup",
      },
    ],
  },
  privacy: {
    icon: "◇",
    title: "Your data never leaves your machine",
    description: "NogicOS runs locally. No cloud uploads. No training on your data.",
  },
} as const;

// Final CTA Section
export const ctaContent = {
  eyebrow: "Limited Early Access",
  title: "Stop being AI's human clipboard",
  description:
    "Join the waitlist and be first to experience AI that actually sees your work.",
  benefits: [
    { icon: "✦", text: "Free during beta" },
    { icon: "◎", text: "Priority onboarding" },
    { icon: "◇", text: "Direct feedback channel" },
  ],
  form: {
    placeholder: "Enter your email",
    button: "Get Early Access",
    loading: "Submitting...",
    success: "You're on the list!",
    error: "Something went wrong. Please try again.",
  },
  waitlistCount: {
    count: 47,
    suffix: "spots remaining this week",
  },
} as const;

// Footer
export const footerContent = {
  brand: {
    description:
      "The first AI that truly sees and understands your entire digital workspace.",
  },
  waitlist: {
    label: "Join the waitlist",
    placeholder: "Your email address",
    button: "Start Now",
  },
  links: {
    social: [
      { label: "Twitter", href: "#" },
      { label: "GitHub", href: "#" },
    ],
    legal: [
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
    ],
  },
} as const;
