"use client";

import { FadeIn } from "@/components/motion";
import { useCasesContent } from "@/data/content";

export function UseCases() {
  const { title, cases } = useCasesContent;

  return (
    <section id="use-cases" className="solution-section use-cases-section">
      <div className="container section-stack section-layout">
        <FadeIn className="section-header" amount={0.5}>
          <h2>{title}</h2>
        </FadeIn>

        <div className="section-body">
          <div className="problem-flow use-cases-grid">
            {cases.map((useCase) => (
              <div key={useCase.title} className="problem-item use-case-card">
                <h3>{useCase.title}</h3>
                <p>{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
