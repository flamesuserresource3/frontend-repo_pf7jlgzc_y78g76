import React, { useState } from 'react';

const SignupBanner = () => {
  const [email, setEmail] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    // For this concept demo, we'll just clear the field.
    setEmail('');
    alert('Thanks! We\'ll keep you posted.');
  };

  return (
    <section className="w-full bg-gradient-to-b from-amber-50 to-amber-100/60 py-10">
      <div className="max-w-3xl mx-auto text-center px-6">
        <p className="text-stone-700 text-lg">Be first to know when we launch</p>
        <form onSubmit={onSubmit} className="mt-5 flex flex-col sm:flex-row items-center gap-3">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full rounded-full bg-white/80 backdrop-blur px-5 py-3 text-stone-800 placeholder-stone-400 ring-1 ring-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-400 shadow-sm"
          />
          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-full bg-amber-600 text-white px-6 py-3 font-medium shadow-sm hover:bg-amber-700 transition-colors w-full sm:w-auto"
          >
            Notify Me
          </button>
        </form>
      </div>
    </section>
  );
};

export default SignupBanner;
