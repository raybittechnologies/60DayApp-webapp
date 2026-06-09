import React from 'react';
import { getPostSEOBySlug } from '@/services/blogApi';
import BlogPostClient from '@/components/blog/BlogPostClient';

// Next.js dynamic metadata generation for SEO
export async function generateMetadata({ params }) {
  const { id } = await params;
  const post = await getPostSEOBySlug(id);

  if (!post || !post.seo) {
    return {
      title: 'Blog Post Not Found | 60DayApp',
    };
  }

  // Map WordPress Yoast/RankMath SEO data to Next.js metadata format
  return {
    title: post.seo.title || post.title,
    description: post.seo.metaDesc || post.excerpt?.replace(/<[^>]*>?/gm, '') || '',
    alternates: {
        canonical: post.seo.canonical || undefined
    },
    openGraph: {
      title: post.seo.title || post.title,
      description: post.seo.metaDesc,
      images: post.seo.opengraphImage?.sourceUrl ? [post.seo.opengraphImage.sourceUrl] : [],
    }
  };
}

// Server Component for fetching the dynamic post data
export default async function BlogPostRoute({ params }) {
  const { id } = await params;
  const post = await getPostSEOBySlug(id);

  return <BlogPostClient post={post} />;
}
