'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { ArrowRight, Camera, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { galleryImages } from '@/lib/gallery-images';

export default function GalleryClient() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const getSrc = (filename: string) => `/Gallery/${encodeURIComponent(filename)}`;

  const next = useCallback(() => { if (lightbox !== null) setLightbox((lightbox + 1) % galleryImages.length); }, [lightbox]);
  const prev = useCallback(() => { if (lightbox !== null) setLightbox((lightbox - 1 + galleryImages.length) % galleryImages.length); }, [lightbox]);

  useEffect(() => {
    if (lightbox === null) return;
    const h = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'Escape') setLightbox(null);
    };
    window.addEventListener('keydown', h);
    document.body.style.overflow = 'hidden';
    return () => { window.removeEventListener('keydown', h); document.body.style.overflow = ''; };
  }, [lightbox, next, prev]);

  return (
    <>
      <section className="bg-primary-navy text-white py-10 sm:py-14 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center gap-2 text-white/50 hover:text-white text-xs sm:text-sm font-medium mb-4 sm:mb-6 transition-colors">
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 rotate-180" /> Back to Home
          </Link>
          <span className="text-gold-accent font-semibold tracking-widest uppercase text-[11px] sm:text-xs mb-2 sm:mb-3 block">Gallery</span>
          <h1 className="text-[28px] xs:text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.05] mb-3">
            All Photos<br /><span className="text-gold-accent">Pincode 110024</span>
          </h1>
          <p className="text-light-navy/60 text-sm sm:text-base max-w-2xl leading-relaxed">
            {galleryImages.length} photos • Tap any photo to view fullscreen
          </p>
        </div>
      </section>

      <section className="py-6 sm:py-8 bg-light-navy/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3">
            {galleryImages.map((filename, idx) => (
              <button
                key={filename}
                onClick={() => setLightbox(idx)}
                className="group relative aspect-square overflow-hidden rounded-xl bg-white border border-border-color shadow-sm hover:shadow-md transition-all"
              >
                <img src={getSrc(filename)} alt={`Gallery ${idx + 1}`} loading="lazy" className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500" />
                <span className="absolute bottom-1.5 left-1.5 bg-black/70 backdrop-blur-md text-white text-[10px] font-semibold px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20">
                  <span className="w-9 h-9 rounded-full bg-white/95 flex items-center justify-center shadow-lg">
                    <Camera className="w-4 h-4 text-primary-navy" />
                  </span>
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {lightbox !== null && (
        <div className="fixed inset-0 z-[100] bg-[#0B0B0F]/95 backdrop-blur-sm flex items-center justify-center" onClick={() => setLightbox(null)}>
          <button onClick={() => setLightbox(null)} className="absolute top-4 right-4 w-9 h-9 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/15 rounded-full flex items-center justify-center text-white z-10"><X className="w-5 h-5" /></button>
          <div className="absolute top-5 left-5 hidden sm:flex items-center gap-2 text-white/70 text-xs bg-black/40 backdrop-blur-md border border-white/10 rounded-full px-3 py-1.5">
            <Camera className="w-3.5 h-3.5 text-gold-accent" /> Gallery • {lightbox + 1} / {galleryImages.length}
          </div>
          <button onClick={(e) => { e.stopPropagation(); prev(); }} className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 w-11 h-11 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/15 rounded-full flex items-center justify-center text-white"><ChevronLeft className="w-6 h-6" /></button>
          <div className="relative w-full max-w-5xl aspect-[4/3] sm:aspect-[16/10] mx-4 sm:mx-20" onClick={(e) => e.stopPropagation()}>
            <img src={getSrc(galleryImages[lightbox])} alt={`Gallery ${lightbox + 1}`} className="w-full h-full object-contain rounded-xl" />
          </div>
          <button onClick={(e) => { e.stopPropagation(); next(); }} className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 w-11 h-11 bg-white text-primary-navy hover:bg-gold-accent rounded-full flex items-center justify-center shadow-xl"><ChevronRight className="w-6 h-6" /></button>
        </div>
      )}
    </>
  );
}
