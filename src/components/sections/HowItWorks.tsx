"use client";

import { FadeIn } from "@/components/motion";
import { howItWorksContent } from "@/data/content";

export function HowItWorks() {
  const { title, steps } = howItWorksContent;

  return (
    <section id="how-it-works" className="problem-section">
      <div className="container section-stack">
        <FadeIn className="section-header" amount={0.5}>
          <h2>{title}</h2>
        </FadeIn>

        <div className="problem-flow">
          {steps.map((step) => (
            <div key={step.title} className="problem-item">
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
