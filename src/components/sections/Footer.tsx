import { content } from "@/data/content";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <span className="nav-logo">
            <span>◎</span>
            <span>NogicOS</span>
          </span>
          <div className="footer-links">
            {content.footer.links.map((link) => (
              <a key={link.label} href={link.href} className="footer-link">
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <p className="footer-copyright">{content.footer.copyright}</p>
      </div>
    </footer>
  );
}
