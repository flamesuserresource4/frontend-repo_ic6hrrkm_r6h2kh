import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion, useScroll, useTransform } from 'framer-motion';
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
  // Subtle parallax for foreground content on scroll
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 400], [0, -30]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.9]);

  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-black">
      {/* 3D Cover */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Animated aura gradients (do not block pointer events) */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        initial={{ opacity: 0.6 }}
        animate={{ opacity: [0.6, 0.8, 0.6] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        style={{ background: 'radial-gradient(60% 40% at 50% 10%, rgba(255,255,255,0.22), transparent 60%)' }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        initial={{ scale: 1 }}
        animate={{ scale: [1, 1.03, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        style={{ background: 'radial-gradient(40% 30% at 80% 20%, rgba(59,130,246,0.15), transparent 70%)' }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        initial={{ scale: 1 }}
        animate={{ scale: [1, 0.98, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        style={{ background: 'radial-gradient(40% 30% at 20% 20%, rgba(249,115,22,0.14), transparent 70%)' }}
      />

      {/* Content */}
      <motion.div style={{ y, opacity }} className="relative mx-auto flex max-w-7xl flex-col items-center px-6 pb-28 pt-28 md:pt-40">
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

        {/* Floating info chips */}
        <div className="pointer-events-none absolute inset-0 mx-auto max-w-7xl">
          <motion.div
            className="absolute left-8 top-32 hidden rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-white/80 backdrop-blur md:block"
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: [0, -8, 0], opacity: 1 }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" /> 150ms decisions
          </motion.div>
          <motion.div
            className="absolute right-14 top-48 hidden rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-white/80 backdrop-blur md:block"
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: [0, 10, 0], opacity: 1 }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          >
            PCI-safe by design
          </motion.div>
          <motion.div
            className="absolute bottom-24 left-1/2 hidden -translate-x-1/2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-white/80 backdrop-blur md:block"
            initial={{ y: 12, opacity: 0 }}
            animate={{ y: [0, 12, 0], opacity: 1 }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          >
            Omnichannel ready
          </motion.div>
        </div>
      </motion.div>

      {/* Subtle bottom vignette */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}
