import React from 'react';

export const LeadBookingsMiniSection = () => {
  return (
    <section className="fo-preview-section bg-[#05070D] px-4 py-8 text-white sm:px-8 sm:py-10 lg:px-12">
      <div className="flex min-h-[150px] w-full items-center justify-center border-y border-white/5 px-4 text-center sm:min-h-[180px] sm:px-6">
        <p className="mx-auto max-w-5xl text-[2.15rem] font-bold leading-[1.08] tracking-tight text-white sm:text-[2.8rem] md:text-[3.45rem]">
          More leads in. More bookings out.
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text italic text-transparent"> Less manual work.</span>
        </p>
      </div>
    </section>
  );
};
