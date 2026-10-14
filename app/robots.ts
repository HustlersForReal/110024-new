import type { MetadataRoute } from 'next';
import { absoluteUrl, SITE_URL } from '@/lib/seo';

/**
 * Native App Router robots. Every public page is indexable, so nothing is
 * disallowed. The forms post to Firestore from the client and have no server
 * routes, and there is no admin or API surface to hide.
 *
 * Note on query strings: the area and referral links carry ?area= and ?ref=
 * parameters. Those are deliberately NOT disallowed. Disallow does not stop
 * indexing anyway, it only stops crawling, so blocking them would hide real
 * pages from discovery. Duplicate-URL control is handled by the per-page
 * canonical tags in lib/seo.ts instead.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: '*', allow: '/' }],
    sitemap: absoluteUrl('/sitemap.xml'),
    host: SITE_URL,
  };
}