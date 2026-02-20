'use client';

import { useState } from 'react';

/* Pre-calculated so there are no SSR/hydration mismatches */
const EMBERS = [
  { id: 0,  left: '4%',  bottom: '0%',  size: 3, duration: '7s',  delay: '0s',    drift: '-18px' },
  { id: 1,  left: '11%', bottom: '0%',  size: 2, duration: '5.5s', delay: '1.3s', drift: '22px'  },
  { id: 2,  left: '18%', bottom: '0%',  size: 4, duration: '9s',   delay: '0.4s', drift: '-14px' },
  { id: 3,  left: '25%', bottom: '0%',  size: 2, duration: '6s',   delay: '2.2s', drift: '28px'  },
  { id: 4,  left: '33%', bottom: '0%',  size: 3, duration: '8s',   delay: '0.9s', drift: '-22px' },
  { id: 5,  left: '40%', bottom: '0%',  size: 2, duration: '5s',   delay: '3.6s', drift: '16px'  },
  { id: 6,  left: '48%', bottom: '0%',  size: 5, duration: '10s',  delay: '1.8s', drift: '-28px' },
  { id: 7,  left: '55%', bottom: '0%',  size: 2, duration: '6.5s', delay: '0.2s', drift: '12px'  },
  { id: 8,  left: '62%', bottom: '0%',  size: 3, duration: '7.5s', delay: '4.1s', drift: '-16px' },
  { id: 9,  left: '70%', bottom: '0%',  size: 2, duration: '5.5s', delay: '2.0s', drift: '24px'  },
  { id: 10, left: '78%', bottom: '0%',  size: 4, duration: '8.5s', delay: '0.7s', drift: '-10px' },
  { id: 11, left: '86%', bottom: '0%',  size: 2, duration: '6s',   delay: '3.0s', drift: '18px'  },
  { id: 12, left: '93%', bottom: '0%',  size: 3, duration: '9.5s', delay: '1.5s', drift: '-24px' },
  { id: 13, left: '8%',  bottom: '15%', size: 2, duration: '5s',   delay: '3.3s', drift: '10px'  },
  { id: 14, left: '30%', bottom: '10%', size: 2, duration: '6s',   delay: '0.6s', drift: '-12px' },
  { id: 15, left: '52%', bottom: '8%',  size: 3, duration: '7s',   delay: '2.7s', drift: '20px'  },
  { id: 16, left: '74%', bottom: '12%', size: 2, duration: '5.5s', delay: '1.1s', drift: '-16px' },
  { id: 17, left: '90%', bottom: '5%',  size: 3, duration: '8s',   delay: '4.5s', drift: '14px'  },
];

const PILLARS = [
  {
    symbol: 'Ⅰ',
    title: 'The Pact',
    desc: "Every agreement sealed here is binding. We don't make promises lightly — and neither should you.",
  },
  {
    symbol: 'Ⅱ',
    title: 'The Forge',
    desc: 'Built from the ground up, in the fire. Whatever emerges will be worth the heat and the waiting.',
  },
  {
    symbol: 'Ⅲ',
    title: 'The Road',
    desc: 'The way down is long, but the destination is unlike anything above. Your journey starts here.',
  },
];

export default function Home() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-hades-black text-hades-cream overflow-x-hidden">

      {/* ═══════════════════════════════════════════ HERO */}
      <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">

        {/* Deep forge-glow background */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 80% 50% at 50% 110%, #3d0c0c 0%, #1c0606 35%, #0d0302 65%, #080504 100%)',
          }}
        />

        {/* Second warm layer — feels like light from far below */}
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background:
              'radial-gradient(ellipse 60% 40% at 50% 100%, #7a1818 0%, transparent 70%)',
          }}
        />

        {/* Ember particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {EMBERS.map((e) => (
            <div
              key={e.id}
              className="ember"
              style={
                {
                  left: e.left,
                  bottom: e.bottom,
                  width: `${e.size}px`,
                  height: `${e.size}px`,
                  '--duration': e.duration,
                  '--delay': e.delay,
                  '--drift': e.drift,
                } as React.CSSProperties
              }
            />
          ))}
        </div>

        {/* Horizontal accent lines */}
        <div
          className="absolute left-0 right-0 h-px opacity-15"
          style={{
            top: 'calc(50% - 9rem)',
            background: 'linear-gradient(to right, transparent, #c9a227, transparent)',
          }}
        />
        <div
          className="absolute left-0 right-0 h-px opacity-8"
          style={{
            top: 'calc(50% + 6rem)',
            background: 'linear-gradient(to right, transparent, #c9a22780, transparent)',
          }}
        />

        {/* ── Main content ── */}
        <div className="relative z-10 text-center px-6 fade-in-up">

          {/* Overline */}
          <p
            className="font-cinzel text-[10px] md:text-xs tracking-[0.55em] text-hades-gold/65 uppercase mb-6"
            style={{ animationDelay: '0.2s' }}
          >
            ◈ &nbsp; Est. MMXXVI &nbsp; ◈
          </p>

          {/* HADES logotype */}
          <h1
            className="font-cinzel font-black leading-none tracking-[0.06em] text-flicker text-glow"
            style={{
              fontSize: 'clamp(5.5rem, 22vw, 17rem)',
              color: '#f0e6d3',
            }}
          >
            HADES
          </h1>

          {/* Decorative rule */}
          <div className="flex items-center gap-4 my-7 px-4 max-w-sm mx-auto">
            <div
              className="flex-1 h-px"
              style={{ background: 'linear-gradient(to right, transparent, #c9a22770)' }}
            />
            <span className="text-hades-gold/80 font-cinzel text-base">✦</span>
            <div
              className="flex-1 h-px"
              style={{ background: 'linear-gradient(to left, transparent, #c9a22770)' }}
            />
          </div>

          {/* Tagline */}
          <p className="font-crimson text-xl md:text-2xl italic text-hades-cream/75 tracking-wide max-w-md mx-auto leading-relaxed">
            Something is being built in the depths below.
          </p>

          {/* CTA button */}
          <div className="mt-10">
            <a
              href="#join"
              className="
                inline-block font-cinzel text-[10px] md:text-xs tracking-[0.45em] uppercase
                text-hades-gold border border-hades-gold/40 px-10 py-4
                hover:bg-hades-gold/10 hover:border-hades-gold/80
                transition-all duration-500
              "
            >
              Find Your Way Down
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-35 pointer-events-none">
          <span className="font-cinzel text-[9px] tracking-[0.5em] uppercase text-hades-gold">
            Descend
          </span>
          <div className="w-px h-12 bg-gradient-to-b from-hades-gold to-transparent" />
        </div>
      </section>

      {/* ═══════════════════════════════════════════ ABOUT */}
      <section className="relative py-32 px-6">
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 70% 50% at 50% 0%, #1a0808 0%, #080504 60%)',
          }}
        />

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <p className="font-cinzel text-[9px] tracking-[0.65em] text-hades-gold/55 uppercase mb-14">
            ◈ &nbsp; The Word from Below &nbsp; ◈
          </p>

          <h2 className="font-cinzel font-bold text-3xl md:text-[2.6rem] text-hades-cream mb-8 leading-snug">
            Every great empire begins
            <br />
            <span className="text-hades-gold">beneath the surface.</span>
          </h2>

          <p className="font-crimson text-lg md:text-xl text-hades-cream/65 leading-relaxed mb-6 max-w-2xl mx-auto">
            We are forging something the world has not yet seen — shaped by will,
            tempered in fire, and offered only to those who understand the true
            value of a well-made deal.
          </p>

          <p className="font-crimson text-lg md:text-xl text-hades-cream/65 leading-relaxed max-w-2xl mx-auto">
            The gates are not yet open. But when they swing wide, the road will
            be yours to walk — if you are ready to take it.
          </p>

          {/* Ornament */}
          <div className="flex items-center gap-5 mt-16 justify-center">
            <div
              className="h-px flex-1 max-w-24"
              style={{ background: 'linear-gradient(to right, transparent, #c9a22750)' }}
            />
            <span className="text-hades-gold/35 font-cinzel text-xs tracking-widest">
              ✦ &nbsp; ✦ &nbsp; ✦
            </span>
            <div
              className="h-px flex-1 max-w-24"
              style={{ background: 'linear-gradient(to left, transparent, #c9a22750)' }}
            />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════ PILLARS */}
      <section className="relative py-24 px-6">
        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-14 md:gap-8">
            {PILLARS.map((pillar) => (
              <div key={pillar.symbol} className="text-center group">
                {/* Roman numeral badge */}
                <div
                  className="
                    w-16 h-16 mx-auto mb-7 flex items-center justify-center
                    border border-hades-gold/25
                    group-hover:border-hades-gold/60
                    transition-all duration-500
                  "
                  style={{
                    background: 'radial-gradient(circle, #c9a22712, transparent)',
                  }}
                >
                  <span className="font-cinzel text-hades-gold text-lg">{pillar.symbol}</span>
                </div>

                <h3 className="font-cinzel font-bold text-lg text-hades-cream mb-4 tracking-wider">
                  {pillar.title}
                </h3>
                <p className="font-crimson text-base md:text-[1.05rem] text-hades-cream/58 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════ DIVIDER */}
      <div className="gold-rule" />

      {/* ═══════════════════════════════════════════ JOIN */}
      <section id="join" className="relative py-36 px-6">
        {/* Forge glow from below */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 70% 60% at 50% 110%, #1f0a0a 0%, #080504 65%)',
          }}
        />

        {/* Orange ember bloom at the bottom */}
        <div
          className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[32rem] h-40 pointer-events-none opacity-15"
          style={{ background: 'radial-gradient(ellipse, #ff6b35, transparent 70%)' }}
        />

        <div className="relative z-10 max-w-xl mx-auto text-center">
          <p className="font-cinzel text-[9px] tracking-[0.65em] text-hades-gold/55 uppercase mb-8">
            ◈ &nbsp; Sign Your Name &nbsp; ◈
          </p>

          <h2 className="font-cinzel font-bold text-3xl md:text-4xl text-hades-cream mb-4 leading-snug">
            The Deal Awaits.
          </h2>

          <p className="font-crimson text-lg italic text-hades-cream/55 mb-12 leading-relaxed">
            Leave your name below, and you will be among the first to know when
            the gates swing open.
          </p>

          {submitted ? (
            <div
              className="border border-hades-gold/35 px-8 py-10"
              style={{ background: 'radial-gradient(ellipse, #c9a22712, transparent)' }}
            >
              <p className="font-cinzel text-hades-gold tracking-widest text-sm uppercase mb-3">
                The Deal Is Made.
              </p>
              <p className="font-crimson text-hades-cream/65 italic text-lg">
                We know your name now. We will be in touch when the time comes.
              </p>
            </div>
          ) : (
            <>
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-0">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@address.com"
                  required
                  className="
                    flex-1 bg-transparent
                    border border-hades-gold/35 border-r-0
                    px-6 py-4
                    font-crimson text-base text-hades-cream
                    placeholder-hades-cream/25
                    hover:border-hades-gold/50
                    transition-colors duration-300
                    sm:border-r-0
                  "
                />
                <button
                  type="submit"
                  className="
                    font-cinzel text-[10px] tracking-[0.35em] uppercase
                    bg-hades-gold/90 text-hades-black
                    px-8 py-4
                    hover:bg-hades-gold
                    transition-colors duration-300
                    whitespace-nowrap
                    border border-hades-gold/90
                  "
                >
                  Make the Deal
                </button>
              </form>
              <p className="font-crimson text-xs text-hades-cream/28 mt-4 italic">
                No obligations. No tricks. Just a deal.
              </p>
            </>
          )}
        </div>
      </section>

      {/* ═══════════════════════════════════════════ QUOTE */}
      <section className="relative py-28 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="gold-rule mb-16 opacity-30" />

          <div className="font-cinzel text-[10px] tracking-[0.6em] text-hades-gold/40 uppercase mb-10">
            ◈
          </div>

          <blockquote className="font-crimson text-2xl md:text-3xl text-hades-cream/45 italic leading-relaxed">
            &ldquo;The road is long and the way is dark,<br />
            but every empire begins with a single spark.&rdquo;
          </blockquote>

          <div className="gold-rule mt-16 opacity-30" />
        </div>
      </section>

      {/* ═══════════════════════════════════════════ FOOTER */}
      <footer className="relative py-12 px-8 border-t border-hades-gold/10">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

          <span className="font-cinzel font-black text-hades-gold text-2xl tracking-[0.15em]">
            HADES
          </span>

          <p className="font-crimson text-xs text-hades-cream/28 tracking-widest uppercase text-center">
            &copy; MMXXVI — The Road Is Long. The Wait Is Worth It.
          </p>

          <div className="flex items-center gap-8">
            {['X / Twitter', 'LinkedIn', 'Discord'].map((s) => (
              <a
                key={s}
                href="#"
                className="font-cinzel text-[9px] tracking-widest text-hades-cream/28 hover:text-hades-gold/60 transition-colors duration-300 uppercase"
              >
                {s}
              </a>
            ))}
          </div>
        </div>
      </footer>

    </main>
  );
}
