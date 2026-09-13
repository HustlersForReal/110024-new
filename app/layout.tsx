import type {Metadata} from 'next';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: '110024.com - The Home of Real Estate in 110024',
  description: 'Hyperlocal real estate platform for South Delhi Pincode 110024. Properties, localities, services in Lajpat Nagar, Defence Colony, and more.',
  icons: {
    icon: '/icon.png',
    apple: '/icon.png',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className="antialiased bg-white text-primary-text flex flex-col min-h-screen" suppressHydrationWarning>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
