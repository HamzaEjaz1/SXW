"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { Arrow } from "@/components/Arrow";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="wrap hero-grid">
        <motion.div
          className="hero-copy"
          initial={reduce ? false : "hidden"}
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
          }}
        >
          <motion.p className="eyebrow" variants={fade}>
            Carpentry contractors in Devizes
          </motion.p>
          <motion.h1 id="hero-title" variants={fade}>
            We look after the carpentry, and we stay with the standard.
          </motion.h1>
          <motion.p className="lede" variants={fade}>
            SXW Carpentry Ltd has been based in Devizes since 2015. Most weeks we are on development sites across the Southwest. When a job stands on its own, we bring the same care to that too.
          </motion.p>
          <motion.div className="hero-actions" variants={fade}>
            <a className="btn btn-primary" href="#contact">
              Request a quote
              <Arrow />
            </a>
            <a className="btn btn-secondary" href="tel:+447834454106">
              Call 07834 454106
            </a>
          </motion.div>
          <motion.dl className="creds" variants={fade}>
            <div>
              <dt>Established</dt>
              <dd>2015</dd>
            </div>
            <div>
              <dt>NHBC 2023</dt>
              <dd>Three awards</dd>
            </div>
            <div>
              <dt>NHBC 2024</dt>
              <dd>Quality</dd>
            </div>
            <div>
              <dt>CHAS</dt>
              <dd>Elite</dd>
            </div>
          </motion.dl>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={reduce ? false : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease }}
        >
          <div className="hero-slab" aria-hidden="true" />
          <motion.figure
            className="hero-frame"
            initial={reduce ? false : { clipPath: "inset(8% 8% 8% 8%)" }}
            animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
            transition={{ duration: 1.05, delay: 0.2, ease }}
          >
            <Image
              src="/images/carpentry-1.jpg"
              alt="Timber roof structure under construction, with rafters and trusses in place"
              fill
              priority
              quality={90}
              sizes="(max-width: 960px) 100vw, 46vw"
              className="hero-img"
            />
            <figcaption>Development construction</figcaption>
          </motion.figure>
        </motion.div>
      </div>
    </section>
  );
}

const fade = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.72, ease } },
};
