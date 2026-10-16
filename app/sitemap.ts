import type { MetadataRoute } from 'next';
import { areaProfiles } from '@/lib/data';
import { blogs } from '@/lib/blogs';
import { absoluteUrl } from '@/lib/seo';

/**
 * Native Next.js App Router sitemap. No hand-maintained XML, no hardcoded URL
 * list: routes below are the top-level pages, and the two dynamic collections
 * are derived from the same data the pages themselves render from, so a new
 * locality or blog post is picked up automatically.
 *
 * Nothing is marked noindex, so no exclusion is needed here. If a page ever is,
 * filter it out of this function rather than letting it into the sitemap.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: absoluteUrl('/'), lastModified: now, changeFrequency: 'daily', priority: 1 },
    { url: absoluteUrl('/about'), lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    {
      url: absoluteUrl('/origin-and-story'),
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.4,
    },
    {
      url: absoluteUrl('/circle-rates'),
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: absoluteUrl('/property-search'),
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: absoluteUrl('/mcd-booked'),
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: absoluteUrl('/exclusive-deals'),
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    { url: absoluteUrl('/gallery'), lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: absoluteUrl('/blogs'), lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
    {
      url: absoluteUrl('/list-your-property'),
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: absoluteUrl('/submit-your-requirement'),
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
  ];

  const areaRoutes: MetadataRoute.Sitemap = areaProfiles.map((area) => ({
    url: absoluteUrl(`/area/${area.slug}`),
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  const blogRoutes: MetadataRoute.Sitemap = blogs.map((blog) => ({
    url: absoluteUrl(`/blogs/${blog.slug}`),
    lastModified: new Date(blog.date),
    changeFrequency: 'yearly',
    priority: 0.6,
  }));

  return [...staticRoutes, ...areaRoutes, ...blogRoutes];
}