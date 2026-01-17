import Link from "next/link";
import { footerContent, siteConfig } from "@/data/content";

export function Footer() {
  const { links } = footerContent;

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <Link href="/" className="nav-logo">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L3 7V17L12 22L21 17V7L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
              <path d="M12 12L3 7" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M12 12L21 7" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M12 12V22" stroke="currentColor" strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
            <span>{siteConfig.name}</span>
          </Link>
          <div className="footer-links">
            {links.social.map((link) => (
              <Link key={link.label} href={link.href} className="footer-link">
                {link.label}
              </Link>
            ))}
            {links.legal.map((link) => (
              <Link key={link.label} href={link.href} className="footer-link">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <p className="footer-copyright">
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
