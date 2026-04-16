import { revalidatePath, revalidateTag } from 'next/cache';
import { NextResponse } from 'next/server';

/**
 * On-Demand Revalidation Endpoint
 * 
 * WordPress calls this endpoint via a webhook whenever a post
 * is published, updated, or deleted. This instantly clears the
 * Next.js cache for the blog pages — no polling delay.
 * 
 * WordPress Webhook URL to configure:
 *   https://yourdomain.com/api/revalidate?secret=YOUR_SECRET_TOKEN
 * 
 * Webhook Trigger Events (in WP Webhooks plugin):
 *   - post_create
 *   - post_update
 *   - post_delete
 *   - post_trashed
 */
export async function POST(request) {
  const secret = request.nextUrl.searchParams.get('secret');

  // ── Security check ──────────────────────────────────────────
  if (secret !== process.env.REVALIDATE_SECRET_TOKEN) {
    return NextResponse.json(
      { message: 'Invalid revalidation secret token.' },
      { status: 401 }
    );
  }

  try {
    // Parse the body to get the specific post slug if provided
    let body = {};
    try {
      body = await request.json();
    } catch {
      // Body may be empty — that's fine, we revalidate everything
    }

    const slug = body?.post_name || body?.slug || null;

    // ── Revalidate the main blog listing page ───────────────────
    revalidatePath('/blog');

    // ── Revalidate the specific post page if slug is provided ──
    if (slug) {
      revalidatePath(`/blog/${slug}`);
      console.log(`[Revalidate] Cleared cache for /blog/${slug}`);
    }

    // ── Revalidate the home page (if it shows recent posts) ───
    revalidatePath('/');

    console.log('[Revalidate] Cache cleared successfully for /blog');

    return NextResponse.json({
      revalidated: true,
      message: `Cache cleared for /blog${slug ? ` and /blog/${slug}` : ''}`,
      timestamp: new Date().toISOString(),
    });

  } catch (error) {
    console.error('[Revalidate] Error:', error);
    return NextResponse.json(
      { message: 'Error revalidating cache.', error: error.message },
      { status: 500 }
    );
  }
}

/**
 * GET handler — useful to manually trigger revalidation from a browser
 * e.g. visit: /api/revalidate?secret=YOUR_SECRET_TOKEN
 */
export async function GET(request) {
  const secret = request.nextUrl.searchParams.get('secret');

  if (secret !== process.env.REVALIDATE_SECRET_TOKEN) {
    return NextResponse.json(
      { message: 'Invalid revalidation secret token.' },
      { status: 401 }
    );
  }

  revalidatePath('/blog');
  revalidatePath('/');

  return NextResponse.json({
    revalidated: true,
    message: 'Cache cleared for all blog pages.',
    timestamp: new Date().toISOString(),
  });
}
