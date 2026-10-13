import Image from "next/image";
import { Reveal } from "@/components/Reveal";

export function About() {
  return (
    <section className="about section" id="about" aria-labelledby="about-title">
      <div className="wrap about-grid">
        <Reveal className="about-copy">
          <p className="eyebrow">About us</p>
          <h2 id="about-title">A carpentry company that still answers the phone.</h2>
          <p>
            We started SXW Carpentry Ltd in 2015, in the Southwest of England. The diary is mostly development construction. When someone needs a stand-alone carpentry project, we take that on as well.
          </p>
          <p>
            People know us for the detail. Carpentry and joinery is the trade, and we still aim for the best standard we can put our name to. If that sounds like the team you want on a site, talk to us before the programme gets tight.
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
