import type { Metadata } from 'next';
import GalleryClient from './client';

export const metadata: Metadata = {
  title: 'Gallery - 110024.com',
  description: 'Explore all photos of Pincode 110024 — Lajpat Nagar, Defence Colony and more. 92+ images.',
};

export default function GalleryPage() {
  return <GalleryClient />;
}
