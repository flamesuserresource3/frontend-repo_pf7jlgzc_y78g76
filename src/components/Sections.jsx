import React from 'react';
import { Leaf, Hammer, Sparkles } from 'lucide-react';

const SectionWrapper = ({ children, className = '' }) => (
  <section className={`w-full py-16 ${className}`}>
    <div className="max-w-6xl mx-auto px-6">{children}</div>
  </section>
);

export const ImaginationSection = () => (
  <SectionWrapper className="bg-amber-50">
    <div className="grid md:grid-cols-2 gap-10 items-center">
      <div>
        <h2 className="text-3xl md:text-4xl font-semibold text-stone-800">For children and their grown‑ups</h2>
        <p className="mt-4 text-stone-600 leading-relaxed">
          Play is a conversation. Our pieces invite storytelling, collaboration, and the kind of open‑ended exploration that brings families closer.
        </p>
      </div>
      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-sm ring-1 ring-amber-200">
        <img
          src="https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1600&auto=format&fit=crop"
          alt="Child and parent playing together"
          className="w-full h-full object-cover"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-amber-100/30 to-transparent" />
      </div>
    </div>
  </SectionWrapper>
);

export const CraftSection = () => (
  <SectionWrapper className="bg-white">
    <div className="grid md:grid-cols-2 gap-10 items-center">
      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-sm ring-1 ring-amber-200">
        <img
          src="https://images.unsplash.com/photo-1610533626435-5b1a0f94cb83?q=80&w=1600&auto=format&fit=crop"
          alt="Hardwood texture close-up"
          className="w-full h-full object-cover"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-amber-100/40 to-transparent" />
      </div>
      <div>
        <h2 className="text-3xl md:text-4xl font-semibold text-stone-800">Hardwood & craftsmanship</h2>
        <p className="mt-4 text-stone-600 leading-relaxed">
          Responsibly sourced woods, natural finishes, and a commitment to heirloom quality. Every curve is sanded by hand.
        </p>
        <div className="mt-6 grid grid-cols-3 gap-4">
          <Feature icon={Leaf} label="Eco‑friendly" />
          <Feature icon={Hammer} label="Durable" />
          <Feature icon={Sparkles} label="Non‑toxic" />
        </div>
      </div>
    </div>
  </SectionWrapper>
);

export const DevelopmentSection = () => (
  <SectionWrapper className="bg-amber-50">
    <div className="grid md:grid-cols-2 gap-10 items-center">
      <div>
        <h2 className="text-3xl md:text-4xl font-semibold text-stone-800">Designed for development</h2>
        <p className="mt-4 text-stone-600 leading-relaxed">
          Purposeful forms that support fine motor skills, sensory regulation, and creative problem‑solving — without screens.
        </p>
      </div>
      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-sm ring-1 ring-amber-200">
        <img
          src="https://images.unsplash.com/photo-1472162072942-cd5147eb3902?q=80&w=1600&auto=format&fit=crop"
          alt="Child interacting with toys"
          className="w-full h-full object-cover"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-tl from-amber-100/40 to-transparent" />
      </div>
    </div>
  </SectionWrapper>
);

const Feature = ({ icon: Icon, label }) => (
  <div className="flex flex-col items-center justify-center gap-2 rounded-xl bg-amber-50 px-4 py-6 text-center ring-1 ring-amber-200">
    <Icon className="h-6 w-6 text-amber-700" />
    <span className="text-sm font-medium text-stone-700">{label}</span>
  </div>
);

export default SectionWrapper;
