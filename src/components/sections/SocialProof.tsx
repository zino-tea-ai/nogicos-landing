import { FadeIn, StaggerList } from "@/components/motion";
import { content } from "@/data/content";

export function SocialProof() {
  return (
    <section className="social-proof-section">
      <FadeIn>
        <div className="stats-bar">
          {content.socialProof.stats.map((stat) => (
            <div key={stat.label} className="stat-item">
              <span className="stat-value">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </FadeIn>

      <div className="testimonials-container">
        <FadeIn>
          <div className="section-header">
            <h2>{content.socialProof.testimonials.title}</h2>
          </div>
        </FadeIn>

        <StaggerList className="testimonials-grid" staggerDelay={0.1}>
          {content.socialProof.testimonials.items.map((t, i) => (
            <div key={i} className="testimonial-card">
              <p className="testimonial-quote">&quot;{t.quote}&quot;</p>
              <div className="testimonial-author">
                <div className="avatar">
                  {t.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div className="author-info">
                  <span className="author-name">{t.name}</span>
                  <span className="author-role">
                    {t.role}, {t.company}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </StaggerList>
      </div>

      <FadeIn delay={0.3}>
        <div className="privacy-section">
          <div className="privacy-badge">
            <span className="privacy-icon">{content.socialProof.privacy.icon}</span>
            <div>
              <p className="privacy-title">{content.socialProof.privacy.title}</p>
              <p className="privacy-desc">{content.socialProof.privacy.description}</p>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
