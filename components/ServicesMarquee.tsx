'use client';

const services = [
  'Buy/Sell/Rent At Minimum Commission',
  'Property Title Due Diligence',
  'Property Mutation Certificate',
  'Property Valuation Reports',
  'Property Freehold Conversion',
  'Property Deed Drafting',
  'Property Deed Registration',
  'Property Liaisoning',
  'Property NOC',
  'DDA',
  'L&DO',
  'MCD',
  'Property Tax Assessment',
  'Sub-Registrar Office',
  'Property Disputes',
  'Disputed Property Disposal',
  'Old & Dilapidated Property Services',
  'Lajpat Nagar Exclusive Properties',
  'Defence Colony Exclusive Properties',
  'Exclusive Luxury Property Services',
  'Property Verification',
  'Sale Deed',
  'Gift Deed',
  'Will Deed',
  'Relinquishment Deed',
  'Release Deed',
  'Rectification Deed',
  'Exchange Deed',
  'Partition Deed',
  'Trust Deed',
  'Adoption Deed',
  'Collaboration Deed',
  'Mortgage Deed',
  'Surrender Deed',
  'Quit Claim Deed',
  'Grant Deed',
  'Warranty Deed',
  'Special Warranty Deed',
  'Fiduciary Deed',
  'Court Order Deed',
  'Conveyance Deed',
  'General Power Of Attorney',
  'Special Power Of Attorney',
  'Agreement To Sell',
  'Builder Buyer Agreement',
  'Rent/Lease Agreement',
  'Joint Development Agreement',
  'Surviving Member Certificate',
  'Structural Stability Certificate',
  'Encumbrance Certificate',
  'Regularisation',
  'Red Stamp Removal',
  'De-Sealing',
  'Property Tax Assessment',
  'Substitution Of Property',
  'Parent Deed Handling',
  'Conversion Charges',
  'Loan Liaisoning',
  'Residential Liaisoning',
  'Commercial Liaisoning',
  'Institutional Liaisoning',
  'BSES / TPDDL',
  'Delhi Jal Board (DJB)',
  'Land Liaisoning',
  'Architectural Design & Layout Plan',
  'New Building Plan',
  'Addition / Alteration',
  'Completion Certificate',
  'Occupancy Certificate',
  'Regularization Certificate',
  'De-Sealing',
  'Buyer Services',
  'Seller Services',
  'Landlord Services',
  'Tenant Services',
  'Builder/Developer Services',
  'Institutional Services',
  'NRI Services',
  'End-To-End Property Services',
  'Notary Services',
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
