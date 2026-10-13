"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/Reveal";

const shots = [
  {
    src: "/images/carpentry-1.jpg",
    alt: "Timber roof structure under construction, with rafters and trusses in place",
    kicker: "On site",
    title: "Roof structure",
    caption: "Site carpentry. A roof structure under construction.",
    width: 1600,
    height: 1031,
    main: true,
  },
  {
    src: "/images/carpentry-3.jpg",
    alt: "Gloved hands cutting a timber beam with a handsaw",
    kicker: "Fitting",
    title: "Cutting timber",
    caption: "Cutting and fitting timber on site.",
    width: 1600,
    height: 1065,
    main: false,
  },
  {
    src: "/images/carpentry-2.jpg",
    alt: "A circular saw cutting a length of softwood on a workbench",
    kicker: "At the bench",
    title: "Joinery",
    caption: "Bench work. Cutting softwood to length.",
    width: 1600,
    height: 1436,
    main: false,
  },
];

export function Work() {
  const [active, setActive] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const reduce = useReducedMotion();
  const shot = active === null ? null : shots[active];

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (active === null) {
      if (dialog.open) dialog.close();
      return;
    }
    if (!dialog.open) dialog.showModal();
  }, [active]);

  useEffect(() => {
    if (active === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        setActive((index) => (index === null ? index : (index + 1) % shots.length));
      }
      if (event.key === "ArrowLeft") {
        setActive((index) => (index === null ? index : (index - 1 + shots.length) % shots.length));
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  return (
    <section className="work section" id="work" aria-labelledby="work-title">
      <div className="wrap">
        <Reveal className="section-head">
          <p className="eyebrow">The work</p>
          <h2 id="work-title">A look at the making of it.</h2>
          <p>These are photographs of the carpentry and joinery we do, on site and at the bench. We have not turned them into named case studies.</p>
        </Reveal>

        <Reveal>
          <div className="gallery">
            {shots.map((item, index) => (
              <button
                key={item.src}
                type="button"
                className={item.main ? "shot shot-main" : "shot"}
                aria-label={`View photograph: ${item.title}. ${item.caption}`}
                onClick={() => setActive(index)}
                onPointerMove={(event) => {
                  if (event.pointerType !== "mouse") return;
                  const rect = event.currentTarget.getBoundingClientRect();
                  event.currentTarget.style.setProperty("--x", `${event.clientX - rect.left}px`);
                  event.currentTarget.style.setProperty("--y", `${event.clientY - rect.top}px`);
                }}
              >
                <span className="shot-media">
                  <Image
                    src={item.src}
                    alt=""
                    fill
                    quality={90}
                    sizes={item.main ? "(max-width: 800px) 100vw, 58vw" : "(max-width: 800px) 100vw, 34vw"}
                    className="shot-img"
                  />
                </span>
                <span className="shot-meta">
                  <span className="shot-kicker">{item.kicker}</span>
                  <span className="shot-title">{item.title}</span>
                </span>
                <span className="view-tag" aria-hidden="true">
                  View
                </span>
              </button>
            ))}
          </div>
        </Reveal>
      </div>

      <dialog
        ref={dialogRef}
        className="lightbox"
        aria-label="Work photograph"
        onClose={() => setActive(null)}
        onClick={(event) => {
          if (event.target === dialogRef.current) setActive(null);
        }}
      >
        {shot ? (
          <>
            <div className="lightbox-bar">
              <p>
                {active! + 1} of {shots.length}
              </p>
              <button type="button" onClick={() => setActive(null)}>
                Close
              </button>
            </div>
            <AnimatePresence mode="wait">
              <motion.img
                key={shot.src}
                src={shot.src}
                alt={shot.alt}
                width={shot.width}
                height={shot.height}
                initial={reduce ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={reduce ? undefined : { opacity: 0 }}
                transition={{ duration: 0.28 }}
              />
            </AnimatePresence>
            <p className="lightbox-caption">{shot.caption}</p>
            <div className="lightbox-nav">
              <button type="button" onClick={() => setActive((index) => (index === null ? 0 : (index - 1 + shots.length) % shots.length))}>
                Previous
              </button>
              <button type="button" onClick={() => setActive((index) => (index === null ? 0 : (index + 1) % shots.length))}>
                Next
              </button>
            </div>
          </>
        ) : null}
      </dialog>
    </section>
  );
}
