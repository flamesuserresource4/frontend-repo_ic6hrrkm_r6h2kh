import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { Rocket, Shield, Sparkles } from 'lucide-react';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 120 } },
};

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-black">
      {/* 3D Cover */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/IKzHtP5ThSO83edK/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlays for depth - never block pointer events */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_10%,rgba(255,255,255,0.25),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(40%_30%_at_80%_20%,rgba(59,130,246,0.15),transparent_70%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(40%_30%_at_20%_20%,rgba(249,115,22,0.15),transparent_70%)]" />

      {/* Content */}
      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 pb-28 pt-28 md:pt-40">
        <motion.div initial="hidden" animate="show" variants={container} className="text-center">
          <motion.div variants={item} className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs text-white/80 backdrop-blur">
            <Sparkles size={16} className="text-white/90" />
            <span>Built for retail stores</span>
          </motion.div>

          <motion.h1
            variants={item}
            className="mx-auto max-w-3xl text-balance font-medium tracking-tight text-white md:text-7xl text-5xl"
          >
            Instant, fair approvals at POS and online.
          </motion.h1>

          <motion.p
            variants={item}
            className="mx-auto mt-5 max-w-2xl text-pretty text-base md:text-lg text-white/80"
          >
            A retail-native credit and risk layer for in-store terminals and e‑commerce. Approve more good shoppers, stop returns abuse and fraud, and keep lines moving.
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#get-started"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-black shadow/50 shadow-white/10 transition hover:shadow-white/20"
            >
              <Rocket size={16} className="transition group-hover:translate-x-0.5" />
              Start pilot
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-3 text-sm font-medium text-white backdrop-blur transition hover:bg-white/20"
            >
              See how it fits your store
            </a>
          </motion.div>

          {/* Trust indicators */}
          <motion.div variants={item} className="mt-10 flex flex-wrap items-center justify-center gap-6 text-white/60">
            <div className="flex items-center gap-2">
              <Shield size={16} />
              <span>POS-ready SDKs</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              <span>Under 150ms decisions</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-sky-400" />
              <span>Omnichannel support</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Subtle bottom vignette */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}
