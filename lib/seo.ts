import type { Metadata } from 'next';

/**
 * Central SEO configuration for 110024.com.
 *
 * Canonical host is the non-www apex. Every canonical URL, sitemap entry and
 * robots directive derives from SITE_URL, so there is a single place to change
 * if the production hostname ever moves.
 *
 * The portal also runs on EastOfKailash.com (110065). That sibling site has its
 * own copy of this logic; keep the two in sync but do not merge them.
 */
export const SITE_URL = 'https://110024.com';

export const DEFAULT_TITLE = '110024.com - The Home of Real Estate in 110024';

export const TITLE_TEMPLATE = '%s | 110024.com';

export const DEFAULT_DESCRIPTION =
  'Hyperlocal real estate platform for South Delhi Pincode 110024. Builder floors, flats, shops and land in Lajpat Nagar, Defence Colony, Amar Colony and nearby markets, with circle rates, valuation and end-to-end documentation support.';

/** Turns a site-relative path into an absolute canonical URL. */
export function absoluteUrl(path: string): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  return `${SITE_URL}${clean}`;
}

/**
 * Builds a page's Metadata block consistently: canonical, Open Graph and Twitter
 * cards all derive from the same title/description so they can never drift.
 */
export function pageMetadata({
  title,
  description,
  path,
  image,
  type = 'website',
  publishedTime,
  noindex = false,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  noindex?: boolean;
}): Metadata {
  const url = absoluteUrl(path);
  const ogImage = absoluteUrl(image ?? '/opengraph-image');

  return {
    title,
    // Applied centrally so no page can ship a description Google will truncate.
    description: truncateMeta(description),
    alternates: { canonical: url },
    robots: noindex
      ? { index: false, follow: true }
      : { index: true, follow: true, 'max-image-preview': 'large' },
    openGraph: {
      type,
      url,
      siteName: '110024.com',
      title,
      description: truncateMeta(description),
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
      ...(publishedTime ? { publishedTime } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: truncateMeta(description),
      images: [ogImage],
    },
  };
}

/**
 * Trims a string to a meta-description budget without cutting mid-word.
 * Google truncates around 155-160 characters, so anything past that is never
 * shown in the SERP. Area pages concatenate a tagline plus body copy, which is
 * why they need this rather than a blind slice.
 */
export function truncateMeta(text: string, max = 155): string {
  const clean = text.replace(/\s+/g, ' ').trim();
  if (clean.length <= max) return clean;

  const cut = clean.slice(0, max);
  const lastSpace = cut.lastIndexOf(' ');
  const trimmed = cut.slice(0, lastSpace > 40 ? lastSpace : max);

  return `${trimmed.replace(/[,;:.\s]+$/, '')}...`;
}

/**
 * Keyword set drawn from the actual site content: the localities that have a
 * real /area page, the property and service vocabulary the forms and pages
 * actually use, and the informational terms the blogs already target.
 * Kept deliberately short to avoid stuffing.
 */
export const KEYWORDS = [
  'property in 110024',
  'Lajpat Nagar property',
  'Defence Colony property',
  'builder floor in Lajpat Nagar',
  'flat for sale in Lajpat Nagar',
  'property for rent in Lajpat Nagar',
  'Amar Colony property',
  'Dayanand Colony property',
  'Vikram Vihar property',
  'National Park property',
  'Central Market Lajpat Nagar',
  'circle rate 110024',
  'stamp duty and registration Delhi',
  'property mutation Delhi',
  'property valuation Lajpat Nagar',
  'property verification South Delhi',
  'real estate liaisoning Delhi',
  'NRI property services Delhi',
  'commercial property Lajpat Nagar',
  'shop for rent in Lajpat Nagar',
];