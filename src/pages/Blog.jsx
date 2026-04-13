import React, { useEffect, useState } from 'react';
import BlogHero from '../components/Blog/BlogHero';
import BlogGrid from '../components/Blog/BlogGrid';
import { MOCK_BLOGS, CATEGORIES } from '../components/Blog/BlogData';

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const featuredBlog = MOCK_BLOGS.find(blog => blog.featured);

  const filteredBlogs = MOCK_BLOGS.filter(blog => !blog.featured).filter(blog => {
    const matchesCategory = activeCategory === 'All' || blog.category === activeCategory;
    const matchesSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="w-full relative pb-0 sm:pb-[40px] pt-[100px] md:pt-[155px] font-body bg-transparent">
      <div className="section-outer">
        <div className="flex flex-col w-full gap-[64px]">
          <BlogHero
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
            categories={CATEGORIES}
            featuredBlog={featuredBlog}
          />

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
