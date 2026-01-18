import Link from "next/link";
import { footerContent, siteConfig } from "@/data/content";

export function Footer() {
  const { links } = footerContent;

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <Link href="/" className="nav-logo">
            NogicOS
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
