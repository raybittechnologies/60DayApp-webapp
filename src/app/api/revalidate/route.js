import { revalidatePath, revalidateTag } from 'next/cache';
import { NextResponse } from 'next/server';


export async function POST(request) {
  const secret = request.nextUrl.searchParams.get('secret');

  if (secret !== process.env.REVALIDATE_SECRET_TOKEN) {
    return NextResponse.json(
      { message: 'Invalid revalidation secret token.' },
      { status: 401 }
    );
  }

  try {
    let body = {};
    try {
      body = await request.json();
    } catch {
    }

    const slug = body?.post_name || body?.slug || null;

    revalidatePath('/blog');

    if (slug) {
      revalidatePath(`/blog/${slug}`);
      console.log(`[Revalidate] Cleared cache for /blog/${slug}`);
    }

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
