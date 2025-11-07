import React from 'react';
import { motion } from 'framer-motion';
import { LineChart, Gauge, Fingerprint, ShieldCheck } from 'lucide-react';

const features = [
  {
    icon: LineChart,
    title: 'Real-time risk at checkout',
    desc: 'Score every basket in under 150ms to keep queues moving. Works with terminals and web POS.',
    hue: 'from-amber-400/20 to-orange-300/10',
  },
  {
    icon: Gauge,
    title: 'Store-level scorecards',
    desc: 'Tune approvals by location, seasonality, and SKU to maximize conversion and minimize loss.',
    hue: 'from-sky-400/20 to-cyan-300/10',
  },
  {
    icon: Fingerprint,
    title: 'Frictionless identity',
    desc: 'Behavioral + device signals reduce false declines without asking shoppers for extra steps.',
    hue: 'from-emerald-400/20 to-teal-300/10',
  },
  {
    icon: ShieldCheck,
    title: 'Returns & abuse controls',
    desc: 'Stop refund fraud and wardrobing with policy-aware risk rules and explainable decisions.',
    hue: 'from-violet-400/20 to-fuchsia-300/10',
  },
];

export default function Features() {
  return (
    <section id="how-it-works" className="relative w-full bg-black py-28 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">Engineered for retail stores</h2>
          <p className="mt-4 text-white/70">Point-of-sale speed, omnichannel coverage, and simple integration for your existing stack.</p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc, hue }, i) => (
            <motion.div
              key={title}
              initial={{ y: 24, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ type: 'spring', stiffness: 110, delay: i * 0.06 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur"
            >
              <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${hue}`} />
              <div className="relative">
                <div className="mb-4 inline-flex rounded-xl bg-white/10 p-3">
                  <Icon className="text-white" />
                </div>
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-white/70">{desc}</p>
              </div>
              {/* hover lift */}
              <motion.div
                aria-hidden
                className="pointer-events-none absolute -bottom-12 left-1/2 h-24 w-24 -translate-x-1/2 rounded-full bg-white/10 blur-2xl"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1, scale: 1.2 }}
                transition={{ type: 'spring', stiffness: 120 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
