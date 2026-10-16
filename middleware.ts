import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/**
 * CORS for the property-search and MCD proxy routes.
 *
 * The sibling portal EastOfKailash.com builds with `output: 'export'` (fully
 * static hosting), so it cannot run these API routes itself. Its copies of the
 * PropertySearch and MCD tools call this portal's routes cross-origin instead.
 * Matcher below scopes this middleware to those API paths only; nothing else
 * on this portal is affected.
 */

const ALLOWED_ORIGINS = new Set([
  'https://eastofkailash.com',
  'https://www.eastofkailash.com',
]);

function isAllowed(origin: string): boolean {
  if (ALLOWED_ORIGINS.has(origin)) return true;
  // Local dev on either portal (any localhost port).
  return /^http:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/.test(origin);
}

function corsHeaders(req: NextRequest): Record<string, string> {
  const origin = req.headers.get('origin') ?? '';
  return {
    // Browsers ignore this header on same-origin requests, so defaulting to
    // the sibling portal when no Origin is present is harmless.
    'Access-Control-Allow-Origin': isAllowed(origin) ? origin : 'https://eastofkailash.com',
    Vary: 'Origin',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Max-Age': '86400',
  };
}

export function middleware(req: NextRequest) {
  if (req.method === 'OPTIONS') {
    return new NextResponse(null, { status: 204, headers: corsHeaders(req) });
  }
  const res = NextResponse.next();
  const headers = corsHeaders(req);
  for (const [key, value] of Object.entries(headers)) {
    res.headers.set(key, value);
  }
  return res;
}

export const config = {
  matcher: ['/api/property/:path*', '/api/mcd/:path*'],
};
