import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
import "./globals.css";

const GA_ID = "G-64JEGS6KCY";

const urbanist = Urbanist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-urbanist",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "NogicOS - Get work done across tabs, apps, and files",
  description:
    "A workspace AI that understands your working context and executes tasks directly across tabs, apps, and files.",
  keywords: [
    "AI",
    "artificial intelligence",
    "browser automation",
    "desktop AI",
    "productivity",
    "knowledge workers",
    "AI assistant",
  ],
  authors: [{ name: "NogicOS Team" }],
  openGraph: {
    title: "NogicOS - Get work done across tabs, apps, and files",
    description:
      "A workspace AI that understands your working context and executes tasks directly across tabs, apps, and files.",
    type: "website",
    locale: "en_US",
    siteName: "NogicOS",
  },
  twitter: {
    card: "summary_large_image",
    title: "NogicOS - Get work done across tabs, apps, and files",
    description:
      "A workspace AI that understands your working context and executes tasks directly across tabs, apps, and files.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={urbanist.variable}>
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>
      </head>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
