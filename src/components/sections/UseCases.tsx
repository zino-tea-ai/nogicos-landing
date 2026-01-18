"use client";

import { FadeIn } from "@/components/motion";
import { useCasesContent } from "@/data/content";

export function UseCases() {
  const { title, cases } = useCasesContent;

  return (
    <section id="use-cases" className="solution-section">
      <div className="container section-stack">
        <FadeIn className="section-header" amount={0.5}>
          <h2>{title}</h2>
        </FadeIn>

        <div className="problem-flow">
          {cases.map((useCase) => (
            <div key={useCase.title} className="problem-item">
              <h3>{useCase.title}</h3>
              <p>{useCase.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
