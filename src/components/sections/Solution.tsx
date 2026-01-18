import { solutionContent } from "@/data/content";
import { FadeIn, StaggerList } from "@/components/motion";

export function Solution() {
  const { eyebrow, title, description, capabilities } = solutionContent;

  return (
    <section id="solution" className="solution-section">
      <div className="container section-stack section-layout">
        <FadeIn className="section-header" amount={0.5}>
          <p className="section-eyebrow">{eyebrow}</p>
          <h2>{title}</h2>
          {description ? <p className="section-description">{description}</p> : null}
        </FadeIn>

        <div className="section-body">
          <StaggerList
            className="capabilities-grid"
            itemClassName="capability-card-wrap"
            staggerDelay={0.1}
          >
            {capabilities.map((cap, i) => (
              <div key={i} className="capability-card">
                <span className="capability-icon">{cap.icon}</span>
                <h3>{cap.title}</h3>
                <p>{cap.description}</p>
                <div className="capability-example">
                  <code>{cap.example}</code>
                </div>
              </div>
            ))}
          </StaggerList>
        </div>

        {/* Comparison table removed for standard homepage structure */}
      </div>
    </section>
  );
}
