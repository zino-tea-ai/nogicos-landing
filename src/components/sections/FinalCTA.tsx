import { ctaContent } from "@/data/content";
import { FadeIn } from "@/components/motion";
import { WaitlistForm } from "@/components/ui/WaitlistForm";

export function FinalCTA() {
  const { title, description, footnotes, form } = ctaContent;

  return (
    <section id="waitlist" className="final-cta-section">
      <div className="container section-stack">
        <FadeIn className="cta-content" amount={0.5} duration={0.8}>
          <h2>{title}</h2>
          <p className="cta-description">{description}</p>

          {/* 表单 */}
          <WaitlistForm placeholder={form.placeholder} buttonText={form.button} />

          <div className="cta-benefits">
            {footnotes.map((line) => (
              <div key={line} className="benefit">
                <span>{line}</span>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
