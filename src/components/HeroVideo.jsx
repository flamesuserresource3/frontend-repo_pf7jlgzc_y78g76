import React from 'react';

const HeroVideo = () => {
  return (
    <section className="relative w-full h-[80vh] min-h-[520px] overflow-hidden bg-amber-50">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="https://cdn.coverr.co/videos/coverr-a-child-playing-with-wooden-blocks-5435/1080p.mp4"
        autoPlay
        muted
        loop
        playsInline
        poster="https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1600&auto=format&fit=crop"
      />
      {/* Soft fade edges using radial + linear gradient overlays */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute inset-0 bg-gradient-to-b from-amber-50/40 via-transparent to-amber-50"></div>
        <div className="absolute inset-0 [mask-image:radial-gradient(120%_75%_at_50%_25%,black,transparent)]"></div>
      </div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <span className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur px-4 py-2 text-amber-800 shadow-sm ring-1 ring-amber-200">
          <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          Handcrafted play, naturally
        </span>
        <h1 className="mt-6 text-4xl md:text-6xl font-semibold tracking-tight text-stone-800">
          Warm toys for growing imaginations
        </h1>
        <p className="mt-4 max-w-2xl text-stone-600 text-lg">
          Sustainably made hardwood pieces that invite curiosity, calm, and connection.
        </p>
      </div>
    </section>
  );
};

export default HeroVideo;
