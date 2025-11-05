import React from 'react';
import HeroVideo from './components/HeroVideo';
import SignupBanner from './components/SignupBanner';
import HandwrittenComingSoon from './components/HandwrittenComingSoon';
import { ImaginationSection, CraftSection, DevelopmentSection } from './components/Sections';

const App = () => {
  return (
    <div className="min-h-screen bg-amber-50">
      {/* Hero with soft fade edges */}
      <HeroVideo />

      {/* Email input and Coming Soon handwriting vibe */}
      <SignupBanner />
      <HandwrittenComingSoon />

      {/* Content sections */}
      <ImaginationSection />
      <CraftSection />
      <DevelopmentSection />

      {/* Footer */}
      <footer className="bg-white text-center py-10 border-t border-amber-200">
        <p className="text-stone-500 text-sm">© {new Date().getFullYear()} Warm Toys Co. Made with care.</p>
      </footer>
    </div>
  );
};

export default App;
