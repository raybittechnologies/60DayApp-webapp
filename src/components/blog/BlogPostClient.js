"use client";
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Image from 'next/image';
import DOMPurify from 'isomorphic-dompurify';

export default function BlogPostClient({ post }) {
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);
  
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!post) {
      return (
          <div className="w-full relative pb-[40px] pt-[100px] sm:pt-[120px] lg:pt-[135px] font-body bg-transparent min-h-screen flex items-center justify-center">
             <h1 className="text-2xl font-bold text-gray-400">Post not found.</h1>
          </div>
      );
  }

  const title = post.title || 'Blog Post';
  const displayImage = post.featuredImage?.node?.sourceUrl || '';
  // Sanitize WordPress HTML to prevent XSS — removes scripts/event handlers,
  // preserves all safe tags (h2, p, img, a, ul, ol, blockquote, etc.)
  const safeContent = DOMPurify.sanitize(post.content || '', {
    USE_PROFILES: { html: true },
  });

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-[6px] md:h-[8px] bg-gradient-to-r from-[#FF8055] to-[#F05A28] origin-[0%] z-[100] shadow-[0_0_15px_rgba(240,90,40,0.5)]"
        style={{ scaleX }}
      />
      <div className="w-full relative pb-[40px] pt-[100px] sm:pt-[120px] lg:pt-[135px] font-body bg-transparent overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-[5%] left-[-10%] w-[40vw] h-[40vw] bg-[#FF8055] opacity-10 blur-[150px] mix-blend-multiply pointer-events-none rounded-full" />
        <div className="absolute bottom-[20%] right-[-10%] w-[40vw] h-[40vw] bg-[#F05A28] opacity-5 blur-[150px] mix-blend-multiply pointer-events-none rounded-full" />
        
        <div className="section-outer relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="w-full section-inner mx-auto bg-white rounded-[32px] p-[32px] sm:p-[48px] md:p-[80px] shadow-[0_8px_32px_rgba(0,0,0,0.04)] border-b border-gray-200"
        >

          <motion.h1
            initial={{ opacity: 0, y: -20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading font-bold text-[36px] sm:text-[44px] md:text-[52px] leading-[1.2] text-[#1A1A1A] mb-[40px]"
          >
            {title}
          </motion.h1>

          {displayImage && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                transition={{ duration: 1.2, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="w-full mb-[56px] rounded-xl overflow-hidden shadow-sm relative h-[280px] sm:h-[400px] md:h-[520px]"
              >
                <Image
                  src={displayImage}
                  alt={title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1100px"
                  className="object-cover"
                  priority
                />
              </motion.div>
          )}

          {/* WordPress HTML Content — sanitized with DOMPurify */}
          <motion.div
            initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-[16px] sm:text-[18px] text-[#404040] leading-[1.8] flex flex-col gap-[24px] wp-content"
            dangerouslySetInnerHTML={{ __html: safeContent }}
          />

        </motion.div>
      </div>

      {/* Floating Sticky Back Button - Resides securely in the right gutter */}
      <motion.button
        suppressHydrationWarning
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => router.push('/blog')}
        className="fixed bottom-6 right-6 lg:bottom-10 lg:right-10 z-50 flex items-center h-[56px] bg-white text-[#F05A28] border border-[#F05A28]/20 shadow-[0_8px_32px_rgba(240,90,40,0.15)] hover:bg-[#F05A28] hover:text-white transition-colors duration-300 rounded-full cursor-pointer"
      >
        <span className="w-[56px] h-[56px] flex items-center justify-center shrink-0">
          <ArrowLeft className="w-6 h-6" />
        </span>
        <motion.span
          initial={false}
          animate={{
            width: isHovered ? 'auto' : 0,
            opacity: isHovered ? 1 : 0,
            paddingRight: isHovered ? 24 : 0
          }}
          className="overflow-hidden whitespace-nowrap font-heading font-semibold tracking-wide text-[16px]"
        >
          Blogs
        </motion.span>
      </motion.button>
      
      </div>
    </>
  );
}
