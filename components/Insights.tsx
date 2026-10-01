import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { blogs } from '@/lib/blogs';

export function Insights() {
  // The homepage shows only the 3 newest posts by date, so the section stays
  // one row instead of growing into a wall every time blogs.ts gains an entry.
  // /blogs still lists everything.
  const latest = [...blogs]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  return (
    <section className="py-10 sm:py-20 md:py-24 lg:py-32 bg-white overflow-x-clip">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-14 gap-3 sm:gap-6">
          <div className="max-w-2xl min-w-0">
            <span className="text-gold-accent font-semibold tracking-widest uppercase text-[11px] sm:text-xs mb-2 sm:mb-4 block">Knowledge</span>
            <h2 className="text-[28px] leading-[1.15] sm:text-4xl md:text-5xl font-bold text-primary-navy mb-2 sm:mb-4 tracking-tight">
              Insights from 110024
            </h2>
            <p className="text-secondary-text text-sm sm:text-lg leading-relaxed">
              Market trends, locality guides, and property updates from South Delhi&apos;s premier postcode.
            </p>
          </div>
          <Link href="/blogs" className="inline-flex items-center gap-2 text-primary-navy font-semibold text-sm sm:text-base hover:text-gold-accent transition-colors group shrink-0">
            View All Insights
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-8">
          {latest.map((blog) => (
            <Link key={blog.id} href={`/blogs/${blog.slug}`} className="group cursor-pointer block min-w-0">
              <div className="relative aspect-[16/10] overflow-hidden mb-4 sm:mb-5">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-[1.03] transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-0 left-0 bg-gold-accent px-2.5 sm:px-3 py-1 sm:py-1.5 max-w-full">
                  <span className="text-primary-navy text-[10px] sm:text-[11px] font-bold uppercase tracking-widest whitespace-nowrap">
                    {blog.category}
                  </span>
                </div>
              </div>
              <div className="text-[11px] sm:text-xs text-secondary-text uppercase tracking-wider mb-1.5 sm:mb-2">{blog.date} • {blog.readTime}</div>
              <h3 className="text-[17px] sm:text-lg font-bold text-primary-navy group-hover:text-gold-accent transition-colors leading-snug mb-1.5 sm:mb-2">
                {blog.title}
              </h3>
              <p className="text-[13px] sm:text-sm text-secondary-text leading-relaxed line-clamp-3 sm:line-clamp-2">
                {blog.excerpt}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
