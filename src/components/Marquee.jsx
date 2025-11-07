import React from 'react';
import { motion, useAnimationControls } from 'framer-motion';

const logos = [
  'Target',
  'BestBuy',
  'Nordstrom',
  'Sephora',
  'Decathlon',
  'Tesco',
  'Zara',
  'IKEA',
];

export default function Marquee() {
  const controls = useAnimationControls();

  React.useEffect(() => {
    controls.start({ x: ['0%', '-50%'] }, { ease: 'linear', duration: 18, repeat: Infinity });
  }, [controls]);

  return (
    <section className="relative w-full bg-black py-10">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_30%_at_50%_0%,rgba(255,255,255,0.08),transparent_60%)]" />
      <div className="mx-auto max-w-7xl overflow-hidden px-6">
        <div className="mb-6 text-center text-xs uppercase tracking-widest text-white/50">Trusted by leading retail teams</div>
        <div className="relative flex w-full select-none overflow-hidden text-white/70">
          <motion.div
            className="flex min-w-[200%] gap-12 whitespace-nowrap text-lg"
            animate={controls}
            transition={{ ease: 'linear', duration: 18, repeat: Infinity }}
          >
            {[...logos, ...logos].map((name, i) => (
              <div key={i} className="shrink-0 opacity-70 transition hover:opacity-100">{name}</div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
