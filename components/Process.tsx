"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "@/components/Reveal";
import { useLead } from "@/components/LeadProvider";

const steps = [
  {
    no: "01",
    title: "Make contact",
    copy: "Call or email the team in Devizes. Say whether the work is on a development or a stand-alone carpentry project.",
  },
  {
    no: "02",
    title: "Talk through the brief",
    copy: "We look at the carpentry and joinery required, including fire door installation where that is part of the package.",
  },
  {
    no: "03",
    title: "Carry out the work",
    copy: "The company is known for attention to detail in carpentry and joinery, and for aiming at the best standards in the industry.",
  },
  {
    no: "04",
    title: "Hold the standard",
    copy: "NHBC recognised the company in 2023 and 2024. Fire doors we install can be certified by us under our BlueSky accreditation.",
  },
];

export function Process() {
  const { enquire } = useLead();
  const reduce = useReducedMotion();

  return (
    <section className="process section" id="process" aria-labelledby="process-title">
      <div className="wrap">
        <Reveal className="section-head">
          <p className="eyebrow eyebrow-light">Working with us</p>
          <h2 id="process-title">A straightforward way to start.</h2>
        </Reveal>
        <div className="steps-wrap">
          <motion.span
            className="steps-line"
            aria-hidden="true"
            initial={reduce ? false : { scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "0px 0px -10% 0px" }}
            transition={{ duration: 1.05, ease: [0.22, 1, 0.36, 1] }}
          />
          <ol className="steps">
            {steps.map((step, index) => (
              <motion.li
                key={step.no}
                initial={reduce ? false : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -8% 0px" }}
                transition={{ duration: 0.65, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="step-no">{step.no}</span>
                <h3>{step.title}</h3>
                <p>{step.copy}</p>
              </motion.li>
            ))}
          </ol>
        </div>
        <div className="steps-cta">
          <button type="button" className="btn btn-light" onClick={() => enquire("Development construction")}>
            Request a quote
          </button>
        </div>
      </div>
    </section>
  );
}
