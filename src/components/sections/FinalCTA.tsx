import { FadeIn } from "@/components/motion";
import { WaitlistForm } from "@/components/ui/WaitlistForm";
import { content } from "@/data/content";

export function FinalCTA() {
  return (
    <section id="waitlist" className="final-cta-section">
      <FadeIn>
        <div className="cta-content">
          <div className="cta-scarcity">
            <span className="scarcity-dot" />
            <span>
              <strong>{content.finalCTA.scarcity.count}</strong>{" "}
              {content.finalCTA.scarcity.text}
            </span>
          </div>

          <h2>{content.finalCTA.title}</h2>
          <p className="cta-description">{content.finalCTA.description}</p>

          <WaitlistForm
            placeholder={content.finalCTA.form.placeholder}
            buttonText={content.finalCTA.form.button}
          />

          <div className="cta-benefits">
            {content.finalCTA.benefits.map((b) => (
              <span key={b.text} className="benefit">
                <span>{b.icon}</span>
                <span>{b.text}</span>
              </span>
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
