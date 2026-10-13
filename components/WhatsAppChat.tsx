"use client";

import { motion, useReducedMotion } from "framer-motion";

const href =
  "https://wa.me/447834454106?text=" +
  encodeURIComponent("Hello SXW Carpentry Ltd, I would like to ask about some work.");

export function WhatsAppChat() {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className="whatsapp-dock"
      initial={reduce ? false : { opacity: 0, y: 28 }}
      animate={reduce ? undefined : { opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.a
        className="whatsapp-chat"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with SXW Carpentry Ltd on WhatsApp"
        animate={reduce ? undefined : { y: [0, -7, 0] }}
        transition={reduce ? undefined : { duration: 2.6, repeat: Infinity, ease: "easeInOut", delay: 1.3 }}
        whileHover={reduce ? undefined : { scale: 1.05 }}
        whileTap={reduce ? undefined : { scale: 0.96 }}
      >
        <span className="whatsapp-pulse" aria-hidden="true" />
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="currentColor"
            d="M12.04 2C6.58 2 2.15 6.4 2.15 11.83c0 1.74.46 3.44 1.34 4.94L2 22l5.39-1.4a10 10 0 0 0 4.65 1.18h.01c5.46 0 9.89-4.4 9.89-9.83C21.94 6.4 17.5 2 12.04 2zm5.76 13.95c-.24.68-1.4 1.3-1.94 1.38-.5.07-1.12.1-1.81-.11-.42-.13-.95-.31-1.64-.6-2.88-1.24-4.76-4.14-4.9-4.33-.14-.19-1.16-1.54-1.16-2.94s.73-2.08 1-2.37c.24-.26.64-.38 1.02-.38.12 0 .23 0 .33.01.3.01.45.03.65.5.24.58.82 2 .89 2.15.07.14.12.31.02.5-.09.19-.14.31-.28.48-.14.16-.29.36-.42.49-.14.13-.28.28-.12.54.16.26.7 1.15 1.5 1.86 1.03.92 1.9 1.2 2.17 1.34.26.13.42.11.57-.07.16-.19.67-.78.85-1.05.18-.26.36-.22.6-.13.24.09 1.54.73 1.8.86.26.13.44.19.5.3.07.11.07.64-.17 1.32z"
          />
        </svg>
        <span className="whatsapp-label">WhatsApp</span>
      </motion.a>
    </motion.div>
  );
}
