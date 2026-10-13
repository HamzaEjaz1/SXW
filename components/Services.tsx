"use client";

import { Arrow } from "@/components/Arrow";
import { Reveal } from "@/components/Reveal";
import { useLead } from "@/components/LeadProvider";

const services = [
  {
    index: "01",
    title: "Development construction",
    project: "Development construction",
    lead: true,
    copy: "We work primarily within the development construction industry, bringing carpentry and joinery onto sites across the Southwest of England.",
  },
  {
    index: "02",
    title: "Stand-alone projects",
    project: "Stand-alone project",
    lead: false,
    copy: "We also take on stand-alone carpentry projects, with the same attention to detail we bring to development work.",
  },
  {
    index: "03",
    title: "Carpentry and joinery",
    project: "Carpentry and joinery",
    lead: false,
    copy: "Craftsmanship in the carpentry and joinery sector, held to the standard the company is known for.",
  },
  {
    index: "04",
    title: "Fire door installation",
    project: "Fire door installation",
    lead: false,
    copy: "Accredited for fire door installation via BlueSky. We can certify the fire doors we install without having to include a third party.",
  },
];

export function Services() {
  const { enquire } = useLead();

  return (
    <section className="services section" id="services" aria-labelledby="services-title">
      <div className="wrap">
        <Reveal className="section-head">
          <p className="eyebrow">What we do</p>
          <h2 id="services-title">Carpentry for the site, and for the project that stands alone.</h2>
          <p>
            Development construction is the core of the business. Stand-alone carpentry, joinery, and certified fire door installation sit alongside it.
          </p>
        </Reveal>
        <div className="service-grid">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 0.06}>
              <article className={service.lead ? "service service-lead" : "service"}>
                <p className="index">{service.index}</p>
                <h3>{service.title}</h3>
                <p>{service.copy}</p>
                <button type="button" className="text-link" onClick={() => enquire(service.project)}>
                  Request a quote
                  <Arrow />
                </button>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
