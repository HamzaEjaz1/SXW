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
    copy: "This is the heart of the business. We bring carpentry and joinery onto development sites across the Southwest, and we stay with the detail through to handover.",
  },
  {
    index: "02",
    title: "Stand-alone projects",
    project: "Stand-alone project",
    lead: false,
    copy: "Not every job sits on a site programme. If yours stands alone, we will look at it and bring the same attention we give a development.",
  },
  {
    index: "03",
    title: "Carpentry and joinery",
    project: "Carpentry and joinery",
    lead: false,
    copy: "The trade itself. Careful carpentry and joinery, done by people who are used to being judged on the finish.",
  },
  {
    index: "04",
    title: "Fire door installation",
    project: "Fire door installation",
    lead: false,
    copy: "We are accredited through BlueSky. The fire doors we install can be certified by us, so you do not need a third party for that part of the job.",
  },
];

export function Services() {
  const { enquire } = useLead();

  return (
    <section className="services section" id="services" aria-labelledby="services-title">
      <div className="wrap">
        <Reveal className="section-head">
          <p className="eyebrow">What we do</p>
          <h2 id="services-title">The work we are actually asked to do.</h2>
          <p>
            Development packages come first. Stand-alone carpentry, joinery, and fire doors we can certify ourselves sit alongside that. If you are not sure which box you fit in, call anyway.
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
