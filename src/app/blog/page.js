import React from 'react';
import BlogClient from "@/components/blog/BlogClient";
import { getPosts, getCategories } from '@/services/blogApi';

export const metadata = {
  title: 'Blog | 60DayApp',
  description: 'Read the latest news and case studies.',
};

export default async function Blog() {
  // Fetch data dynamically on the server
  // Promise.all lets us fetch both in parallel for better performance
  const [postsData, categoriesData] = await Promise.all([
    getPosts(20), // Fetch up to 20 recent posts
    getCategories()
  ]);

  return (
    <BlogClient 
      initialBlogs={postsData?.nodes || []} 
      categories={categoriesData || []} 
    />
  );
}
