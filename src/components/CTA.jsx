import React from 'react';
import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section id="get-started" className="relative w-full bg-black py-28 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(40%_40%_at_50%_10%,rgba(59,130,246,0.15),transparent_60%)]" />
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ type: 'spring', stiffness: 120 }}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-10 text-center backdrop-blur"
        >
          <div className="pointer-events-none absolute inset-0 bg-[conic-gradient(from_180deg_at_50%_50%,rgba(255,255,255,0.08),transparent_40%,rgba(255,255,255,0.08))]" />
          <div className="relative">
            <h3 className="text-2xl md:text-4xl font-semibold tracking-tight">Pilot across 5–50 stores in days</h3>
            <p className="mx-auto mt-3 max-w-2xl text-white/70">
              Plug into your web and in‑store POS with a single SDK. No hardware swap. Test uplift, measure loss, and rollout confidently.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href="#"
                className="rounded-full bg-white px-5 py-3 text-sm font-medium text-black shadow/50 shadow-white/10 transition hover:shadow-white/20"
              >
                Book a store pilot
              </a>
              <a
                href="#"
                className="rounded-full bg-white/10 px-5 py-3 text-sm font-medium text-white backdrop-blur transition hover:bg-white/20"
              >
                Implementation guide
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
