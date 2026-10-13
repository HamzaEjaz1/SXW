"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useActionState, useEffect } from "react";
import { initialEnquiryState, sendEnquiry } from "@/app/actions";
import { Arrow } from "@/components/Arrow";
import { Reveal } from "@/components/Reveal";
import { useLead } from "@/components/LeadProvider";

const projects = [
  "Development construction",
  "Stand-alone project",
  "Carpentry and joinery",
  "Fire door installation",
];

const ease = [0.22, 1, 0.36, 1] as const;
const whatsappHref =
  "https://wa.me/447834454106?text=" +
  encodeURIComponent("Hello SXW Carpentry Ltd, I would like to ask about some work.");

export function Contact() {
  const { project, setProject } = useLead();
  const [state, formAction, pending] = useActionState(sendEnquiry, initialEnquiryState);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (state.status !== "error" || !state.errors) return;
    const order = ["name", "email", "phone", "message"] as const;
    const field = order.find((key) => state.errors?.[key]);
    if (field) document.getElementById(field)?.focus();
  }, [state]);

  const fieldMotion = {
    hidden: reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
  };

  return (
    <section className="contact section" id="contact" aria-labelledby="contact-title">
      <div className="wrap contact-grid">
        <Reveal className="contact-copy">
          <p className="eyebrow eyebrow-light">Get in touch</p>
          <h2 id="contact-title">Tell us what you need. We will take it from there.</h2>
          <p>
            A development package, a stand-alone carpentry job, or a question about fire doors. Call if it is quicker. Or send a note and it lands with the team in Devizes.
          </p>
          <ul className="contact-points">
            <li>
              <a href="tel:+447834454106">
                <span>Call us</span>
                <strong>07834 454106</strong>
              </a>
            </li>
            <li>
              <a href="mailto:sxwcarpentry@outlook.com">
                <span>Email us</span>
                <strong>sxwcarpentry@outlook.com</strong>
              </a>
            </li>
            <li>
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
                <span>WhatsApp</span>
                <strong>Quick chat</strong>
              </a>
            </li>
          </ul>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="contact-form">
            <AnimatePresence mode="wait">
              {state.status === "success" ? (
                <motion.div
                  key="sent"
                  className="form-success"
                  initial={reduce ? false : { opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduce ? undefined : { opacity: 0, y: -8 }}
                  transition={{ duration: 0.45, ease }}
                >
                  <h3>Enquiry sent</h3>
                  <p>{state.message}</p>
                  <a className="btn btn-primary" href="tel:+447834454106">
                    Call 07834 454106
                  </a>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  action={formAction}
                  aria-busy={pending}
                  initial={reduce ? "show" : "hidden"}
                  whileInView="show"
                  viewport={{ once: true, amount: 0.25 }}
                  variants={{
                    hidden: {},
                    show: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
                  }}
                >
                  <AnimatePresence>
                    {state.status === "error" ? (
                      <motion.p
                        className="form-banner"
                        role="alert"
                        initial={reduce ? false : { opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                      >
                        {state.message}
                      </motion.p>
                    ) : null}
                  </AnimatePresence>

                  <div className="hp" aria-hidden="true">
                    <label htmlFor="company_website">Website</label>
                    <input id="company_website" name="company_website" type="text" tabIndex={-1} autoComplete="off" />
                  </div>

                  <motion.div className="form-row" variants={fieldMotion}>
                    <div className="field">
                      <label htmlFor="name">Name</label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        required
                        minLength={2}
                        aria-invalid={state.errors?.name ? true : undefined}
                        aria-describedby={state.errors?.name ? "name-error" : undefined}
                      />
                      {state.errors?.name ? (
                        <p className="field-error" id="name-error">
                          {state.errors.name}
                        </p>
                      ) : null}
                    </div>
                    <div className="field">
                      <label htmlFor="company">
                        Company <span>(optional)</span>
                      </label>
                      <input id="company" name="company" type="text" autoComplete="organization" />
                    </div>
                  </motion.div>

                  <motion.div className="form-row" variants={fieldMotion}>
                    <div className="field">
                      <label htmlFor="email">Email</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        inputMode="email"
                        required
                        aria-invalid={state.errors?.email ? true : undefined}
                        aria-describedby={state.errors?.email ? "email-error" : undefined}
                      />
                      {state.errors?.email ? (
                        <p className="field-error" id="email-error">
                          {state.errors.email}
                        </p>
                      ) : null}
                    </div>
                    <div className="field">
                      <label htmlFor="phone">Phone</label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        inputMode="tel"
                        required
                        aria-invalid={state.errors?.phone ? true : undefined}
                        aria-describedby={state.errors?.phone ? "phone-error" : undefined}
                      />
                      {state.errors?.phone ? (
                        <p className="field-error" id="phone-error">
                          {state.errors.phone}
                        </p>
                      ) : null}
                    </div>
                  </motion.div>

                  <motion.fieldset className="field" variants={fieldMotion}>
                    <legend id="project-label">Project</legend>
                    <div className="chips" role="radiogroup" aria-labelledby="project-label">
                      {projects.map((item) => {
                        const selected = project === item;
                        return (
                          <button
                            key={item}
                            type="button"
                            role="radio"
                            className={selected ? "chip is-on" : "chip"}
                            aria-checked={selected}
                            onClick={() => setProject(item)}
                          >
                            {selected ? (
                              <motion.span
                                layoutId="project-chip"
                                className="chip-bg"
                                transition={{ type: "spring", stiffness: 420, damping: 34 }}
                              />
                            ) : null}
                            <span>{item}</span>
                          </button>
                        );
                      })}
                    </div>
                    <input type="hidden" name="project" value={project} />
                    {state.errors?.project ? <p className="field-error">{state.errors.project}</p> : null}
                  </motion.fieldset>

                  <motion.div className="field" variants={fieldMotion}>
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      minLength={10}
                      placeholder="The site, the carpentry you need, and when you are hoping to start."
                      aria-invalid={state.errors?.message ? true : undefined}
                      aria-describedby={state.errors?.message ? "message-error" : undefined}
                    />
                    {state.errors?.message ? (
                      <p className="field-error" id="message-error">
                        {state.errors.message}
                      </p>
                    ) : null}
                  </motion.div>

                  <motion.div className="form-actions" variants={fieldMotion}>
                    <motion.button
                      className="btn btn-primary"
                      type="submit"
                      disabled={pending}
                      whileTap={reduce || pending ? undefined : { scale: 0.98 }}
                    >
                      {pending ? <span className="spin" aria-hidden="true" /> : null}
                      {pending ? "Sending…" : "Send enquiry"}
                      {pending ? null : <Arrow />}
                    </motion.button>

                    {state.mailto ? (
                      <a className="btn btn-secondary form-fallback" href={state.mailto}>
                        Open email app
                      </a>
                    ) : null}
                  </motion.div>

                  <motion.p className="form-note" role="status" variants={fieldMotion}>
                    Your details are used only to reply to this enquiry. They are emailed to sxwcarpentry@outlook.com.
                  </motion.p>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
