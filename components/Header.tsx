"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Arrow } from "@/components/Arrow";

const links = [
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "work", label: "Work" },
  { id: "accreditations", label: "Accreditations" },
  { id: "contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [stuck, setStuck] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [current, setCurrent] = useState("");
  const toggleRef = useRef<HTMLButtonElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 28, restDelta: 0.001 });

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 1079px)");
    const apply = () => setMobile(media.matches);
    apply();
    media.addEventListener("change", apply);
    return () => media.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("nav-open", open);
    return () => document.body.classList.remove("nav-open");
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const first = navRef.current?.querySelector<HTMLElement>("a");
    first?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    if (!open || !mobile) return;
    const root = navRef.current;
    if (!root) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key !== "Tab") return;
      const items = [toggleRef.current, ...root.querySelectorAll<HTMLElement>("a, button")].filter(
        (item): item is HTMLElement => Boolean(item),
      );
      const first = items[0];
      const last = items[items.length - 1];
      if (!first || !last) return;
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, mobile]);

  useEffect(() => {
    const sections = links
      .map((link) => document.getElementById(link.id))
      .filter((section): section is HTMLElement => Boolean(section));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setCurrent(visible.target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0.15, 0.4] },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!mobile) setOpen(false);
  }, [mobile]);

  return (
    <header className={stuck ? "site-header is-stuck" : "site-header"}>
      <div className="wrap header-inner">
        <a className="brand" href="/#top">
          <img src="/images/logo.png" alt="" width={377} height={271} className="brand-mark" />
          <span className="brand-text">
            <span className="brand-name">SXW Carpentry Ltd</span>
            <span className="brand-sub">Contractors</span>
          </span>
        </a>

        <div className="header-actions">
          <a className="btn btn-primary header-quote" href="/#contact">
            <span className="quote-long">Get a quote</span>
            <span className="quote-short">Quote</span>
            <Arrow />
          </a>
          <button
            ref={toggleRef}
            className="nav-toggle"
            type="button"
            aria-expanded={open}
            aria-controls="site-nav"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="nav-toggle-bars" aria-hidden="true" />
            <span className="nav-toggle-label">{open ? "Close" : "Menu"}</span>
          </button>
        </div>

        <nav
          ref={navRef}
          id="site-nav"
          className={open ? "site-nav is-open" : "site-nav"}
          aria-label="Primary"
          inert={mobile && !open ? true : undefined}
          aria-hidden={mobile && !open ? true : undefined}
        >
          <ul>
            {links.map((link) => (
              <li key={link.id}>
                <a
                  href={`/#${link.id}`}
                  aria-current={current === link.id ? "true" : undefined}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a className="btn btn-primary nav-cta" href="/#contact" onClick={() => setOpen(false)}>
            Get a quote
            <Arrow />
          </a>
        </nav>
      </div>
      {open ? (
        <button className="nav-overlay" type="button" aria-label="Close menu" onClick={() => setOpen(false)} />
      ) : null}
      <motion.div className="progress" style={{ scaleX }} />
    </header>
  );
}
