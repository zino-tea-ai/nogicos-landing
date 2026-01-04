// ================================
// NogicOS Landing Page Content
// 所有文案集中管理，方便修改和国际化
// ================================

export const siteConfig = {
  name: "NogicOS",
  tagline: "The AI that works where you work",
  description:
    "Browser. Files. Desktop. One AI, complete context. NogicOS is the first AI that works across your browser, files, and desktop as one unified workspace.",
  url: "https://nogicos.com",
} as const;

// Hero Section
export const heroContent = {
  eyebrow: "For knowledge workers tired of",
  painPoints: [
    "copy-pasting context to ChatGPT",
    "uploading files one by one",
    "describing what's on your screen",
    "being AI's human clipboard",
    "explaining the same thing twice",
  ],
  subtitle:
    "NogicOS is an AI that actually sees your screen, reads your files, and works in your browser.",
  emphasis: "No more copying. No more explaining.",
  stats: {
    before: { value: "30s", label: "First task" },
    after: { value: "<1s", label: "Same task later" },
  },
  cta: {
    primary: "Request Early Access",
    note: "Only 50 spots left",
    subNote: "in private beta",
  },
  trust: {
    label: "Trusted by teams at",
    logos: ["YC Founders", "Stanford", "Remote Teams"],
  },
} as const;

// Problem Section
export const problemContent = {
  eyebrow: "The Problem",
  title: "Today's AI tools are",
  titleHighlight: "blind",
  titleSuffix: "to where you actually work",
  description:
    "You're not bad at using AI. AI is bad at seeing your work. Every tool makes you the middleman—copying, pasting, explaining, waiting.",
  problems: [
    {
      before: "You open ChatGPT",
      pain: "Then spend 5 minutes copying text, uploading files, and explaining what you're looking at",
      result: "By the time you get a response, you forgot what you asked",
    },
    {
      before: "You try Claude for documents",
      pain: "Upload files one by one. Wait. Describe the context. Wait. Clarify again",
      result: "A simple task takes 15 minutes of back-and-forth",
    },
    {
      before: "You use Cursor for code",
      pain: "But when you need to reference browser docs or design files? Switch apps, copy, paste, repeat",
      result: "Your workflow is constantly interrupted",
    },
  ],
  quote: {
    text: "I spend more time explaining context to AI than actually getting work done.",
    cite: "— Every knowledge worker, probably",
  },
} as const;

// Solution Section
export const solutionContent = {
  eyebrow: "The Solution",
  title: "AI that finally sees",
  titleHighlight: "your whole workspace",
  description:
    "No more copying. No more explaining. Just tell NogicOS what you need, and watch it work across your browser, files, and desktop.",
  capabilities: [
    {
      icon: "◎",
      title: "See your browser",
      description:
        "NogicOS navigates websites, clicks buttons, fills forms, and extracts data. No extensions needed.",
      example: '"Research competitors on LinkedIn and save their profiles"',
    },
    {
      icon: "▢",
      title: "Read your files",
      description:
        "Access documents, spreadsheets, and local data without uploading anything. Your files stay on your machine.",
      example: '"Summarize all PDFs in my Downloads folder"',
    },
    {
      icon: "◇",
      title: "Understand your screen",
      description:
        "Take screenshots, understand what's displayed, and help you with any application you're using.",
      example: '"What error is showing in this Figma file?"',
    },
    {
      icon: "→",
      title: "Get faster over time",
      description:
        "First task: 30 seconds. Same task again? 1 second. NogicOS learns your workflows and speeds up.",
      example: "Your repeated tasks become instant",
    },
  ],
  comparison: {
    title: "How NogicOS compares",
    headers: ["Capability", "ChatGPT", "Claude", "Cursor", "NogicOS"],
    rows: [
      ["See your browser", "no", "no", "no", "yes"],
      ["Read local files", "no", "partial:Upload only", "partial:Code only", "yes"],
      ["Take actions", "no", "no", "partial:Code only", "yes"],
      ["Learn & speed up", "no", "no", "no", "yes"],
      ["Privacy-first", "no:Cloud", "no:Cloud", "partial:Mixed", "yes:Local"],
    ],
  },
} as const;

// Social Proof Section
export const socialProofContent = {
  stats: [
    { value: "87%", label: "less context-switching" },
    { value: "30x", label: "faster repeated tasks" },
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
          "The learning feature is insane. Tasks that took minutes now happen in seconds.",
        name: "Mike R.",
        role: "Founder",
        company: "Stealth Startup",
      },
      {
        quote: "Finally, an AI that doesn't make me feel like a human clipboard.",
        name: "Alex T.",
        role: "Content Lead",
        company: "Remote Team",
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

