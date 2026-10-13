"use client";

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

export function Contact() {
  const { project, setProject } = useLead();
  const [state, formAction, pending] = useActionState(sendEnquiry, initialEnquiryState);

  useEffect(() => {
    if (state.status !== "error" || !state.errors) return;
    const order = ["name", "email", "phone", "message"] as const;
    const field = order.find((key) => state.errors?.[key]);
    if (field) document.getElementById(field)?.focus();
  }, [state]);

  return (
    <section className="contact section" id="contact" aria-labelledby="contact-title">
      <div className="wrap contact-grid">
        <Reveal className="contact-copy">
          <p className="eyebrow eyebrow-light">Get in touch</p>
          <h2 id="contact-title">Tell us about the work.</h2>
          <p>
            Development package or a stand-alone carpentry project. Call, email, or send a note and it goes to the team at SXW Carpentry Ltd.
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
          </ul>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="contact-form">
            {state.status === "success" ? (
              <div className="form-success">
                <h3>Enquiry sent</h3>
                <p>{state.message}</p>
                <a className="btn btn-primary" href="tel:+447834454106">
                  Call 07834 454106
                </a>
              </div>
            ) : (
              <form action={formAction} aria-busy={pending}>
                {state.status === "error" ? (
                  <p className="form-banner" role="alert">
                    {state.message}
                  </p>
                ) : null}

                <div className="hp" aria-hidden="true">
                  <label htmlFor="company_website">Website</label>
                  <input id="company_website" name="company_website" type="text" tabIndex={-1} autoComplete="off" />
                </div>

                <div className="form-row">
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
                </div>

                <div className="form-row">
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
                </div>

                <fieldset className="field">
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
                          {selected ? <span className="chip-bg" /> : null}
                          <span>{item}</span>
                        </button>
                      );
                    })}
                  </div>
                  <input type="hidden" name="project" value={project} />
                  {state.errors?.project ? <p className="field-error">{state.errors.project}</p> : null}
                </fieldset>

                <div className="field">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    minLength={10}
                    aria-invalid={state.errors?.message ? true : undefined}
                    aria-describedby={state.errors?.message ? "message-error" : undefined}
                  />
                  {state.errors?.message ? (
                    <p className="field-error" id="message-error">
                      {state.errors.message}
                    </p>
                  ) : null}
                </div>

                <button className="btn btn-primary" type="submit" disabled={pending}>
                  {pending ? "Sending…" : "Send enquiry"}
                  {pending ? null : <Arrow />}
                </button>

                {state.mailto ? (
                  <a className="btn btn-secondary form-fallback" href={state.mailto}>
                    Open email app
                  </a>
                ) : null}

                <p className="form-note" role="status">
                  Your details are used only to reply to this enquiry. They are emailed to sxwcarpentry@outlook.com.
                </p>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
