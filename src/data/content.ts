// ================================
// NogicOS Landing Page Content
// 所有文案集中管理
// 核心叙事：Complete Context + Direct Action + Local-First
// ================================

export const siteConfig = {
  name: "NogicOS",
  tagline: "Get work done across tabs, apps, and files.",
  description:
    "A workspace AI that understands your working context and executes tasks directly.",
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
  title: "The Solution",
  description: "",
  capabilities: [
    {
      icon: "◎",
      title: "Complete Browser Context",
      description: "Work directly with live webpages.",
      example: "Pull key details from these pages and write a brief.",
    },
    {
      icon: "▢",
      title: "Private File Access",
      description: "Read and write local files. No uploads.",
      example: "Summarize the PDFs in this folder.",
    },
    {
      icon: "◇",
      title: "Desktop Context",
      description: "Use what is on screen across apps and windows.",
      example: "Explain what is happening in this window.",
    },
    {
      icon: "→",
      title: "Direct Execution",
      description: "Take actions end to end inside your workspace.",
      example: "Complete this form using the details from my document.",
    },
  ],
} as const;

export const howItWorksContent = {
  title: "How It Works",
  steps: [
    {
      title: "Step 1. Observe",
      description: "The system reads what is open across your tabs, files, and applications.",
    },
    {
      title: "Step 2. Plan",
      description: "It determines the required steps based on the current working context.",
    },
    {
      title: "Step 3. Stay connected",
      description:
        "It remains attached to the workflow so state, progress, and follow-up actions stay connected.",
    },
    {
      title: "Step 4. Execute",
      description:
        "Actions are performed across the browser, local files, and desktop apps until completion.",
    },
  ],
} as const;

export const useCasesContent = {
  title: "Use Cases",
  cases: [
    {
      title: "Research Briefs",
      description: "Turn scattered sources into a clean competitive brief.",
    },
    {
      title: "Reports and Summaries",
      description: "Produce structured writeups from the work you already have open.",
    },
    {
      title: "Document Updates",
      description: "Create, edit, and organize files as part of one task.",
    },
    {
      title: "Operational Tasks",
      description: "Complete forms, submissions, and follow ups inside your workflow.",
    },
  ],
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
  title: "Bring AI into your workflow.",
  description:
    "Join the waitlist and see it work inside your real workspace.",
  footnotes: ["Runs locally.", "No uploads."],
  form: {
    placeholder: "Enter your email",
    button: "Join the waitlist",
    loading: "Submitting...",
    success: "You're on the list!",
    error: "Something went wrong. Please try again.",
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
