import { ArrowRight, ArrowUpRight } from 'lucide-react';

const serviceGroups = [
  {
    category: 'Transactions',
    items: ['Buy Property', 'Sell Property', 'Rent Property', 'Property Valuation'],
  },
  {
    category: 'Documentation',
    items: ['Property Documentation', 'Sale Deed / Gift Deed / Will', 'Mutation Assistance', 'NOC Assistance'],
  },
  {
    category: 'Advisory',
    items: ['Liaisoning', 'NRI Property Assistance', 'Loan / Tax Assistance', 'Relocation Assistance', 'Renovation Assistance'],
  },
];

export function PropertyServices() {
  return (
    <section className="py-14 sm:py-20 md:py-24 lg:py-32 bg-primary-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-16">
          <div className="lg:col-span-4">
            <span className="text-gold-accent font-semibold tracking-widest uppercase text-[11px] sm:text-xs mb-3 sm:mb-4 block">Services</span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 tracking-tight">
              Property Services
            </h2>
            <p className="text-light-navy/60 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
              Comprehensive real estate services tailored for the 110024 market. From transactions to documentation, our hyperlocal expertise ensures a seamless experience.
            </p>
            <button className="inline-flex items-center gap-2 bg-transparent border-2 border-gold-accent text-gold-accent hover:bg-gold-accent hover:text-primary-navy px-6 sm:px-8 py-3 sm:py-3.5 text-sm font-semibold uppercase tracking-wider transition-all duration-300">
              View All Services
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
              {serviceGroups.map((group) => (
                <div key={group.category}>
                  <h3 className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-light-navy/40 mb-3 sm:mb-4 pb-2 border-b border-white/10">
                    {group.category}
                  </h3>
                  <div className="space-y-0">
                    {group.items.map((service, idx) => (
                      <div key={idx} className="flex items-center justify-between py-2.5 border-b border-white/5 last:border-b-0 cursor-pointer hover:bg-white/5 transition-colors px-2 -mx-2 group">
                        <span className="text-light-navy text-sm font-medium leading-snug">{service}</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-white/20 group-hover:text-gold-accent transition-colors shrink-0" />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
