import Image from "next/image";
import { Reveal } from "@/components/Reveal";

export function About() {
  return (
    <section className="about section" id="about" aria-labelledby="about-title">
      <div className="wrap about-grid">
        <Reveal className="about-copy">
          <p className="eyebrow">About us</p>
          <h2 id="about-title">Welcome to SXW Carpentry Ltd</h2>
          <p>
            SXW Carpentry Ltd was established in 2015. We are a fast-growing company based in the Southwest of England. We work primarily within the development construction industry; however, we will also take on stand-alone carpentry projects too.
          </p>
          <p>
            We are well known for our attention to detail and craftsmanship within the carpentry and joinery sector, striving to produce the very best standards in the industry.
          </p>
        </Reveal>
        <Reveal className="about-visual" delay={0.1}>
          <div className="about-photo">
            <Image
              src="/images/carpentry-3.jpg"
              alt="Gloved hands cutting a timber beam with a handsaw"
              fill
              quality={90}
              sizes="(max-width: 960px) 100vw, 48vw"
              className="about-img"
            />
          </div>
          <aside className="award">
            <p className="award-kicker">NHBC</p>
            <p>
              SXW Carpentry Ltd is an award-winning company. In 2023 we were awarded three NHBC awards — <strong>Pride in Job, Seal of Excellence and Quality</strong> — followed by another NHBC award in 2024 for Quality.
            </p>
          </aside>
        </Reveal>
      </div>
    </section>
  );
}
