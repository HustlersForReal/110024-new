'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * GA4 via the official Google tag (gtag.js).
 *
 * The Measurement ID is hardcoded. That is correct here and not a secret leak:
 * a GA4 Measurement ID is published in client-side JavaScript by design, so it
 * is readable on every page regardless of whether it comes from an env var.
 *
 * To swap IDs, change the constant below and redeploy.
 *
 * useSearchParams is deliberately not used. Query strings such as ?area= and
 * ?ref= would either trigger duplicate page views or force the whole layout into
 * client-side rendering, and neither is wanted for analytics.
 */
const MEASUREMENT_ID = 'G-WTX22HCSCX';

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function GoogleAnalytics() {
  const pathname = usePathname();

  // Inject the tag once per document load.
  useEffect(() => {
    if (!MEASUREMENT_ID) return;

    window.dataLayer = window.dataLayer || [];
    function gtag(...args: unknown[]) {
      window.dataLayer?.push(args);
    }
    window.gtag = window.gtag || gtag;

    if (!document.getElementById('ga4-tag')) {
      gtag('js', new Date());
      gtag('config', MEASUREMENT_ID, { send_page_view: false });

      const script = document.createElement('script');
      script.id = 'ga4-tag';
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`;
      document.head.appendChild(script);
    }
  }, []);

  // App Router does not reload the document on client-side navigation, so the
  // automatic page_view never fires for those routes. Send one explicitly per
  // pathname change instead. Only the path is sent, never the query string.
  useEffect(() => {
    if (!MEASUREMENT_ID || !window.gtag) return;
    window.gtag('event', 'page_view', {
      page_path: pathname,
      page_location: `${window.location.origin}${pathname}`,
      page_title: document.title,
    });
  }, [pathname]);

  return null;
}