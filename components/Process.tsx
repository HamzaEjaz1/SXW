"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "@/components/Reveal";
import { useLead } from "@/components/LeadProvider";

const steps = [
  {
    no: "01",
    title: "Say hello",
    copy: "Call or email the team in Devizes. Tell us if it is a development package or a job that stands on its own.",
  },
  {
    no: "02",
    title: "Walk through the job",
    copy: "We talk about the carpentry and joinery, and about fire doors if they are part of what you need.",
  },
  {
    no: "03",
    title: "Do the work",
    copy: "We are known for the detail. That is the standard we take onto the site, not a line we add at the end.",
  },
  {
    no: "04",
    title: "Leave it properly",
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
          <h2 id="process-title">How it usually goes, once you call.</h2>
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
