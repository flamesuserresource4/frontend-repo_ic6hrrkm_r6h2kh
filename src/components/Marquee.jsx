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
  const speedRef = React.useRef(18);

  const startLoop = (duration) => {
    controls.start(
      { x: ['0%', '-50%'] },
      { ease: 'linear', duration, repeat: Infinity }
    );
  };

  React.useEffect(() => {
    startLoop(speedRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleEnter = () => {
    speedRef.current = 12;
    startLoop(speedRef.current);
  };

  const handleLeave = () => {
    speedRef.current = 18;
    startLoop(speedRef.current);
  };

  return (
    <section className="relative w-full bg-black py-12">
      {/* soft highlight */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_30%_at_50%_0%,rgba(255,255,255,0.08),transparent_60%)]" />
      <div className="mx-auto max-w-7xl overflow-hidden px-6">
        <div className="mb-6 text-center text-xs uppercase tracking-widest text-white/50">Trusted by leading retail teams</div>
        <div className="relative w-full select-none">
          {/* edge fades */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-black to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-black to-transparent" />
          <motion.div
            className="relative flex w-[200%] gap-12 whitespace-nowrap text-lg text-white/70"
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
            animate={controls}
            transition={{ ease: 'linear', duration: speedRef.current, repeat: Infinity }}
          >
            {[...logos, ...logos].map((name, i) => (
              <motion.div
                key={i}
                className="shrink-0 opacity-70 transition hover:opacity-100"
                whileHover={{ scale: 1.05 }}
              >
                {name}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
