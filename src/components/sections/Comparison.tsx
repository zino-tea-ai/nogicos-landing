import { FadeIn } from "@/components/motion";
import { content } from "@/data/content";

export function Comparison() {
  return (
    <section className="solution-section">
      <FadeIn>
        <div className="comparison-table">
          <h3>{content.comparison.title}</h3>
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Feature</th>
                  {content.comparison.competitors.map((c) => (
                    <th
                      key={c}
                      className={c === "NogicOS" ? "highlight-col" : ""}
                    >
                      {c}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {content.comparison.features.map((row) => (
                  <tr key={row.feature}>
                    <td>{row.feature}</td>
                    {row.values.map((val, i) => (
                      <td
                        key={i}
                        className={`${
                          content.comparison.competitors[i] === "NogicOS"
                            ? "highlight-col"
                            : ""
                        } ${
                          val === "✓"
                            ? "yes"
                            : val === "✗"
                            ? "no"
                            : "partial"
                        }`}
                      >
                        {val}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
