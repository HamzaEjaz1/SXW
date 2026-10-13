import { Reveal } from "@/components/Reveal";

export function Quote() {
  return (
    <section className="quote" aria-label="Company line">
      <div className="wrap">
        <Reveal>
          <blockquote>
            <p>Taking small steps forward each day, leads to success.</p>
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
}
