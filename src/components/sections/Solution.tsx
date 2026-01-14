import { FadeIn, StaggerList } from "@/components/motion";
import { content } from "@/data/content";

export function Solution() {
  return (
    <section className="solution-section">
      <FadeIn>
        <div className="section-header">
          <p className="section-eyebrow">{content.solution.eyebrow}</p>
          <h2>{content.solution.title}</h2>
          <p className="section-description">{content.solution.description}</p>
        </div>
      </FadeIn>

      <StaggerList className="capabilities-grid" staggerDelay={0.1}>
        {content.solution.capabilities.map((cap) => (
          <div key={cap.title} className="capability-card">
            <span className="capability-icon">{cap.icon}</span>
            <h3>{cap.title}</h3>
            <p>{cap.description}</p>
            <div className="capability-example">
              <code>{cap.example}</code>
            </div>
          </div>
        ))}
      </StaggerList>
    </section>
  );
}
