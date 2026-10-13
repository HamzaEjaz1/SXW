import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { guides } from "@/lib/guides";

export function Journal() {
  return (
    <section className="journal section" id="guides" aria-labelledby="guides-title">
      <div className="wrap">
        <Reveal className="journal-head">
          <div>
            <p className="eyebrow">From the team</p>
            <h2 id="guides-title">A few things worth knowing before you pick up the phone.</h2>
          </div>
          <Link className="btn btn-secondary" href="/guides">
            All guides
          </Link>
        </Reveal>
        <div className="journal-grid">
          {guides.map((guide, index) => (
            <Reveal key={guide.slug} delay={index * 0.06}>
              <article className="journal-card">
                <p className="guide-kicker">
                  {guide.category}
                  <span aria-hidden="true"> · </span>
                  {guide.minutes} min
                </p>
                <h3>
                  <Link href={`/guides/${guide.slug}`}>{guide.title}</Link>
                </h3>
                <p>{guide.description}</p>
                <Link className="text-link" href={`/guides/${guide.slug}`}>
                  Read the guide
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
