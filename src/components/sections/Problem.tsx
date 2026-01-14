import { FadeIn, StaggerList } from "@/components/motion";
import { content } from "@/data/content";

export function Problem() {
  return (
    <section className="problem-section">
      <FadeIn>
        <div className="section-header">
          <p className="section-eyebrow">{content.problem.eyebrow}</p>
          <h2>{content.problem.title}</h2>
        </div>
      </FadeIn>

      <StaggerList className="problem-flow" staggerDelay={0.15}>
        {content.problem.items.map((item, i) => (
          <div key={i} className="problem-item">
            <div className="problem-step">
              <span className="step-number">{i + 1}</span>
              <span className="step-before">{item.before}</span>
            </div>
            <div className="problem-pain">
              <p>{item.pain}</p>
            </div>
            <div className="problem-result">
              <p>{item.result}</p>
            </div>
          </div>
        ))}
      </StaggerList>

      <FadeIn delay={0.4}>
        <div className="problem-quote">
          <blockquote>&quot;{content.problem.quote.text}&quot;</blockquote>
          <cite>— {content.problem.quote.author}</cite>
        </div>
      </FadeIn>
    </section>
  );
}
