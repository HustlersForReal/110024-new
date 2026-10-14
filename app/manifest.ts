import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: '110024.com - The Home of Real Estate in 110024',
    short_name: '110024.com',
    description:
      'Hyperlocal real estate platform for South Delhi Pincode 110024: Lajpat Nagar, Defence Colony and nearby markets.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#14213D',
    icons: [
      { src: '/icon.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
    ],
  };
}