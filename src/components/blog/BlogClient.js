"use client";
import React, { useEffect, useState } from 'react';
import BlogHero from "@/components/blog/BlogHero";
import BlogGrid from "@/components/blog/BlogGrid";
import DesignerAvatar from '@/assets/images/Designer.jpg';
import DefaultBlogImg from '@/assets/images/BlogImg.jpg';

/**
 * Strips HTML tags AND decodes HTML entities from a WordPress excerpt.
 * e.g. "Holtermann&#8217;s" → "Holtermann's"
 *      "Introduction The..." stays as-is but trimmed cleanly.
 */
function cleanExcerpt(raw) {
  if (!raw) return '';
  // 1. Remove all HTML tags
  let text = raw.replace(/<[^>]*>?/gm, '');
  // 2. Decode common named & numeric HTML entities
  text = text
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .replace(/&#8217;/g, '\u2019')   // right single quotation mark '
    .replace(/&#8216;/g, '\u2018')   // left single quotation mark '
    .replace(/&#8220;/g, '\u201C')   // left double quotation mark "
    .replace(/&#8221;/g, '\u201D')   // right double quotation mark "
    .replace(/&#8211;/g, '\u2013')   // en dash –
    .replace(/&#8212;/g, '\u2014')   // em dash —
    .replace(/&#8230;/g, '\u2026')   // ellipsis …
    // Catch any remaining numeric entities like &#NNNN;
    .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(Number(code)));
  // 3. Trim and collapse extra whitespace
  return text.replace(/\s+/g, ' ').trim();
}

export default function BlogClient({ initialBlogs, categories }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Assuming the first post in the nodes list is the "featured" one
  const featuredBlog = initialBlogs.length > 0 ? initialBlogs[0] : null;

  // Filter out the featured blog and map the WP items to match your UI structure
  const filteredBlogs = initialBlogs
    .filter((blog, index) => {
      // Map category format from WordPress
      const blogCategory = blog.categories?.nodes[0]?.name || 'Uncategorized';
      
      let matchesCategory = false;
      if (activeCategory === 'All') matchesCategory = true;
      else if (activeCategory === 'Recent Posts') matchesCategory = index < 3; // Show top 3 recent blogs
      else matchesCategory = blogCategory === activeCategory;
      
      const matchesSearch = 
        blog.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        (blog.excerpt && blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    })
    .map(blog => ({
      id: blog.slug, // using slug for URL routing instead of id
      title: blog.title,
      // Strip HTML tags from excerpt if needed
      excerpt: cleanExcerpt(blog.excerpt),
      category: blog.categories?.nodes[0]?.name || 'Uncategorized',
      imageUrl: blog.featuredImage?.node?.sourceUrl || DefaultBlogImg.src,
      author: {
        name: blog.author?.node?.name || 'Admin',
        date: new Date(blog.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
        avatar: blog.author?.node?.avatar?.url || DesignerAvatar.src
      }
    }));

  // Map featured blog format
  const mappedFeaturedBlog = featuredBlog ? {
    id: featuredBlog.slug,
    title: featuredBlog.title,
    excerpt: cleanExcerpt(featuredBlog.excerpt),
    category: featuredBlog.categories?.nodes[0]?.name || 'Uncategorized',
    imageUrl: featuredBlog.featuredImage?.node?.sourceUrl || DefaultBlogImg.src,
    author: {
        name: featuredBlog.author?.node?.name || 'Admin',
        date: new Date(featuredBlog.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
        avatar: featuredBlog.author?.node?.avatar?.url || DesignerAvatar.src
    }
  } : null;

  const categoryNames = ['All', 'Recent Posts', ...categories.map(c => c.name)];

  return (
    <div className="w-full relative pb-[40px] sm:pb-[60px] lg:pb-[80px] pt-[100px] sm:pt-[120px] lg:pt-[135px] font-body bg-transparent">
      <div className="section-outer">
        <div className="flex flex-col w-full gap-[64px]">
          {mappedFeaturedBlog && (
              <BlogHero
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
                categories={categoryNames}
                featuredBlog={mappedFeaturedBlog}
              />
          )}

          <BlogGrid
            filteredBlogs={filteredBlogs}
            onClearFilters={() => {
              setSearchQuery('');
              setActiveCategory('All');
            }}
          />
        </div>
      </div>
    </div>
  );
}
