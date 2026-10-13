"use client";

import { useState } from "react";
import { Reveal } from "@/components/Reveal";

const standards = [
  "Health & Safety",
  "Financial",
  "Insurance",
  "Corporate & Professional Standing",
  "Modern Slavery",
  "Identity",
  "Environmental",
  "Quality",
  "Corporate Social Responsibility",
  "Information Management",
  "Equality, Diversity & Inclusion",
  "Information Security",
  "Anti-Bribery & Corruption",
];

export function Accreditations() {
  const [selected, setSelected] = useState(standards[0]);

  return (
    <section className="accreditations section" id="accreditations" aria-labelledby="accred-title">
      <div className="wrap">
        <Reveal className="section-head">
          <p className="eyebrow">Accreditations</p>
          <h2 id="accred-title">Credentials that sit behind the work.</h2>
        </Reveal>

        <div className="cred-grid">
          <Reveal>
            <article className="cred-card">
              <img src="/images/chas.jpeg" alt="CHAS Accredited Contractor" width={600} height={371} />
              <div>
                <h3>CHAS Elite</h3>
                <p>SXW Carpentry Ltd holds the Elite standard from the CHAS accreditation service.</p>
              </div>
            </article>
          </Reveal>
          <Reveal delay={0.08}>
            <article className="cred-card">
              <img src="/images/bluesky.png" alt="BlueSky certified fire door installer, FDI-091" width={528} height={541} />
              <div>
                <h3>BlueSky fire doors</h3>
                <p>
                  SXW Carpentry Ltd has been accredited for fire door installation via BlueSky. This enables us to certify the fire doors we install without having to include a third party.
                </p>
              </div>
            </article>
          </Reveal>
        </div>

        <div className="standards">
          <div className="standards-intro">
            <h3>CHAS Elite standards</h3>
            <p id="standard-live" aria-live="polite">
              {selected} is part of the CHAS Elite accreditation held by SXW Carpentry Ltd.
            </p>
          </div>
          <ul className="standard-list">
            {standards.map((standard) => (
              <li key={standard}>
                <button type="button" aria-pressed={selected === standard} onClick={() => setSelected(standard)}>
                  {standard}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
