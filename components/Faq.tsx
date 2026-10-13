import { Reveal } from "@/components/Reveal";

const questions = [
  {
    q: "Where are you based?",
    a: "Devizes, Wiltshire. We work across the Southwest of England.",
  },
  {
    q: "What kind of work do you take on?",
    a: "Primarily development construction. We also take on stand-alone carpentry projects, carpentry and joinery, and fire door installation.",
  },
  {
    q: "Which accreditations do you hold?",
    a: "The CHAS Elite standard, and BlueSky accreditation for fire door installation. Under that accreditation we can certify the fire doors we install without a third party.",
  },
  {
    q: "Which NHBC awards have you received?",
    a: "In 2023: Pride in Job, Seal of Excellence, and Quality. In 2024: Quality.",
  },
  {
    q: "How should I get in touch?",
    a: "Call 07834 454106 or email sxwcarpentry@outlook.com. You can also send an enquiry from this page.",
  },
];

export function Faq() {
  return (
    <section className="faq section" id="faq" aria-labelledby="faq-title">
      <div className="wrap faq-grid">
        <Reveal>
          <p className="eyebrow">Questions</p>
          <h2 id="faq-title">The questions people ask first.</h2>
        </Reveal>
        <Reveal className="faq-list" delay={0.08}>
          {questions.map((item) => (
            <details key={item.q}>
              <summary>{item.q}</summary>
              <p>
                {item.q === "How should I get in touch?" ? (
                  <>
                    Call <a href="tel:+447834454106">07834 454106</a> or email{" "}
                    <a href="mailto:sxwcarpentry@outlook.com">sxwcarpentry@outlook.com</a>. You can also send an enquiry from this page.
                  </>
                ) : (
                  item.a
                )}
              </p>
            </details>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
