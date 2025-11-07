import React from 'react';
import { motion } from 'framer-motion';
import { LineChart, Gauge, Fingerprint, ShieldCheck } from 'lucide-react';

const features = [
  {
    icon: LineChart,
    title: 'Real-time risk signals',
    desc: 'Ingest behavioral, device and transaction data to compute risk scores instantly at checkout.',
    hue: 'from-sky-400/20 to-cyan-300/10',
  },
  {
    icon: Gauge,
    title: 'Granular scorecards',
    desc: 'Custom scorecards trained for retail flows help you approve more good customers with confidence.',
    hue: 'from-violet-400/20 to-fuchsia-300/10',
  },
  {
    icon: Fingerprint,
    title: 'Privacy-first by design',
    desc: 'No PII required to start. Differential privacy and on-edge inference keep data secure.',
    hue: 'from-emerald-400/20 to-teal-300/10',
  },
  {
    icon: ShieldCheck,
    title: 'Bank-grade compliance',
    desc: 'SOC2-ready controls, audit trails, and explainability for every decision.',
    hue: 'from-amber-400/20 to-orange-300/10',
  },
];

export default function Features() {
  return (
    <section id="how-it-works" className="relative w-full bg-black py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">Built for retail velocity</h2>
          <p className="mt-4 text-white/70">Derived from the best FMCG and fintech playbooks — performance, simplicity, and gorgeous UX by default.</p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc, hue }, i) => (
            <motion.div
              key={title}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ type: 'spring', stiffness: 120, delay: i * 0.05 }}
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
