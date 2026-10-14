import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import GalleryClient from './client';

export const metadata: Metadata = pageMetadata({
  title: 'Gallery',
  description:
    'Browse photos of Pincode 110024: Lajpat Nagar, Defence Colony, Central Market, 3Cs Mall, Krishna Market and the residential colonies across the pincode.',
  path: '/gallery',
});

export default function GalleryPage() {
  return <GalleryClient />;
}
