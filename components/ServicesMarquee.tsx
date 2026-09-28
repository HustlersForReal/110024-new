'use client';

const services = [
  '100% Verified Properties',
  '100% Cheque Deals on Demand',
  'Buyer-Centric Platform',
  'Direct Owner Deals',
  'Property Verification',
  'Title Check',
  'Customized Property Deeds',
  'Property Deed Registration',
  'Buying / Sale / Lease Assistance',
  'Real Estate Liaisoning',
  'Building Authority Assistance',
  'Land Deals',
  'Construction Services',
  'Renovation Services',
  'Relocation Services',
  'All Building Authorities Assistance',
  'Everything Related to Property',
  'Property Management',
  'NRI Property Services',
  'Old & Dilapidated Properties',
  'Property Mutation / Ownership Transfer',
  'Property Valuation Reports',
  'Luxury Property Deals',
  'Property Services Exclusively for Elite',
  'Freehold Property Conversion',
  'Property NOC',
  'Government Approvals & Clearances',
  'Disputed Property Services',
  'Dedicated Platform for Lajpat Nagar',
  'Dedicated Platform for Defence Colony',
];

export function ServicesMarquee() {
  const loop = [...services, ...services];

  return (
    <div className="w-screen max-w-[100vw] border-t border-white/20 pt-2 sm:pt-2.5 pb-2.5 sm:pb-3.5">
      <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
        <div className="animate-marquee flex w-max gap-2.5 pr-2.5 hover:[animation-play-state:paused] sm:gap-3 sm:pr-3">
          {loop.map((service, i) => (
            <div
              key={`${service}-${i}`}
              aria-hidden={i >= services.length}
              className="flex shrink-0 items-center gap-2.5 sm:gap-3 rounded-xl sm:rounded-2xl border border-white/20 bg-white/12 px-5 py-2.5 sm:px-6 sm:py-3.5 backdrop-blur-md shadow-sm"
            >
              <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-gold-accent" />
              <span className="whitespace-nowrap text-[14px] sm:text-[15px] md:text-base font-semibold text-white/90">
                {service}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
