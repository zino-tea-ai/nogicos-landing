// ================================
// Centralized Content Management
// ================================

export const content = {
  // Hero Section
  hero: {
    eyebrow: "For knowledge workers tired of",
    painPoints: [
      "copy-pasting context to ChatGPT",
      "uploading files one by one",
      "describing what's on your screen",
      "being AI's human clipboard",
      "explaining the same thing twice",
    ],
    subtitle:
      "NogicOS is an AI that actually sees your screen, reads your files, and works in your browser. **No more copying. No more explaining.**",
    stats: {
      before: { value: "30s", label: "First task" },
      after: { value: "<1s", label: "Same task later" },
    },
    cta: {
      button: "Request Early Access",
      note: "Only 50 spots left in private beta",
    },
    trust: {
      label: "Trusted by teams at",
      items: ["YC Founders", "Stanford", "Remote Teams"],
    },
    demo: {
      userMessage: "Fill out this vendor form with our company info",
      actions: [
        { icon: "◎", label: "Reading browser content..." },
        { icon: "▢", label: "Found company_info.md" },
        { icon: "◇", label: "Auto-filling 12 fields..." },
      ],
      complete: "Done in 28 seconds ✓",
      caption: "Real NogicOS interaction",
    },
  },

  // Problem Section
  problem: {
    eyebrow: "The Problem",
    title: "AI tools today make you do the work",
    items: [
      {
        before: "You see a form",
        pain: "Copy form fields → paste to ChatGPT → copy response → paste back → repeat for each field",
        result: "5 minutes of manual copy-paste",
      },
      {
        before: "You need context",
        pain: "Switch tabs → find file → select content → copy → switch back → paste → explain what it is",
        result: "Context scattered across apps",
      },
      {
        before: "You use a tool",
        pain: "App needs access → OAuth flow → limited permissions → can't see your actual screen",
        result: "Half-solution at best",
      },
    ],
    quote: {
      text: "I spend more time feeding context to AI than actually getting work done.",
      author: "Every knowledge worker, 2025",
    },
  },

  // Solution Section
  solution: {
    eyebrow: "The Solution",
    title: "One AI that sees everything you see",
    description:
      "NogicOS runs locally and has native access to your browser, files, and desktop. No extensions, no uploads, no explaining.",
    capabilities: [
      {
        icon: "◎",
        title: "Browser",
        description:
          "Sees and controls any web page. Fills forms, extracts data, navigates flows.",
        example: "Fill this application with my resume",
      },
      {
        icon: "▢",
        title: "Files",
        description:
          "Reads your local files directly. No uploading, no size limits, instant access.",
        example: "Find the contract from last month",
      },
      {
        icon: "◇",
        title: "Desktop",
        description:
          "Interacts with any application. Screenshots, clicks, keyboard input.",
        example: "Export this report as PDF",
      },
      {
        icon: "⚡",
        title: "Memory",
        description:
          "Learns from every interaction. Gets faster and more accurate over time.",
        example: "Do this like last time",
      },
    ],
  },

  // Comparison Section
  comparison: {
    title: "How NogicOS compares",
    competitors: ["ChatGPT", "Claude", "Copilot", "NogicOS"],
    features: [
      { feature: "Sees your browser", values: ["✗", "✗", "Limited", "✓"] },
      { feature: "Reads local files", values: ["Upload", "Upload", "✗", "✓"] },
      { feature: "Controls desktop", values: ["✗", "✗", "✗", "✓"] },
      { feature: "Works offline", values: ["✗", "✗", "✗", "✓"] },
      { feature: "Learns from you", values: ["✗", "✗", "✗", "✓"] },
      { feature: "Complete context", values: ["✗", "✗", "✗", "✓"] },
    ],
  },

  // Social Proof Section
  socialProof: {
    stats: [
      { value: "87%", label: "Time saved on repetitive tasks" },
      { value: "<1s", label: "Average response time" },
      { value: "100%", label: "Local & private" },
    ],
    testimonials: {
      title: "What early users say",
      items: [
        {
          quote:
            "I filled out a 47-field vendor application in 30 seconds. This is the AI assistant I've been waiting for.",
          name: "Sarah Chen",
          role: "Operations Lead",
          company: "Series A Startup",
        },
        {
          quote:
            "Finally, an AI that doesn't make me explain my entire workflow every time. It just knows.",
          name: "Marcus Williams",
          role: "Product Manager",
          company: "Remote-first Company",
        },
        {
          quote:
            "The fact that it runs locally and I don't have to upload sensitive docs is huge for compliance.",
          name: "Jennifer Park",
          role: "Legal Counsel",
          company: "Enterprise SaaS",
        },
      ],
    },
    privacy: {
      icon: "🔒",
      title: "100% Local & Private",
      description:
        "Your data never leaves your machine. NogicOS runs entirely on your device with no cloud processing.",
    },
  },

  // Final CTA Section
  finalCTA: {
    scarcity: {
      count: "Only 50 spots",
      text: "left in private beta",
    },
    title: "Stop being AI's secretary",
    description:
      "Join the waitlist for early access. Be among the first to experience AI that actually works where you work.",
    form: {
      placeholder: "your@email.com",
      button: "Get Early Access",
    },
    benefits: [
      { icon: "✓", text: "Free during beta" },
      { icon: "✓", text: "Priority support" },
      { icon: "✓", text: "Shape the product" },
    ],
  },

  // Footer
  footer: {
    links: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
      { label: "Contact", href: "mailto:hello@nogicos.com" },
    ],
    copyright: "© 2025 NogicOS. All rights reserved.",
  },
};
