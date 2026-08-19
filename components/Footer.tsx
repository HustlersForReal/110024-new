import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-primary-navy text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 sm:pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 mb-12 sm:mb-14">
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <span className="text-2xl sm:text-3xl font-bold tracking-tight">
                110024<span className="text-gold-accent">.com</span>
              </span>
            </Link>
            <p className="text-light-navy/50 text-lg italic">
              &quot;Lajpat Ki Laaj – Defence Ka Taj&quot;
            </p>
            <p className="text-xs sm:text-sm text-light-navy/40 leading-relaxed max-w-xs mt-4">
              Your hyperlocal real-estate marketplace for South Delhi. Everything you need to discover, understand, and transact property in 110024.
            </p>
          </div>
          
          <div>
            <h4 className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-white/40 mb-5 sm:mb-6">Quick Links</h4>
            <ul className="space-y-2.5">
              {['Home', 'Properties', 'Explore 110024', 'Services', 'Blogs', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-light-navy/50 hover:text-gold-accent transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-white/40 mb-5 sm:mb-6">Contact Us</h4>
            <ul className="space-y-2.5 text-light-navy/50 text-sm">
              <li>+91 9100 110024</li>
              <li>mail@110024.com</li>
              <li className="pt-2">
                Lajpat Nagar & Defence Colony,<br/>
                South Delhi, 110024
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
          <p className="text-[11px] sm:text-xs text-light-navy/30 uppercase tracking-wider">
            &copy; {new Date().getFullYear()} 110024.com. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-[11px] sm:text-xs text-light-navy/30 uppercase tracking-wider">
            <Link href="#" className="hover:text-gold-accent transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-gold-accent transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
