import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Marquee from './components/Marquee';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      {/* Simple top bar */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded bg-gradient-to-br from-orange-400 to-sky-500" />
            <span className="text-sm font-semibold tracking-tight">Axiom Score</span>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-white/70 md:flex">
            <a href="#how-it-works" className="hover:text-white">How it works</a>
            <a href="#get-started" className="hover:text-white">Get started</a>
          </nav>
          <a href="#get-started" className="rounded-full bg-white px-4 py-2 text-xs font-medium text-black">Launch pilot</a>
        </div>
      </header>

      <main className="flex w-full flex-col">
        <Hero />
        <Marquee />
        <Features />
        <CTA />
      </main>

      <footer className="border-t border-white/10 bg-black/60 py-10 text-center text-white/50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-sm">© {new Date().getFullYear()} Axiom Score. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}

export default App;
