
"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Search, ArrowUpRight, User, Calendar } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function BlogHero({
  searchQuery,
  setSearchQuery,
  activeCategory,
  setActiveCategory,
  categories,
  featuredBlog
}) {
  const router = useRouter();
  return (
    <div className="w-full section-inner mx-auto max-w-[1280px] bg-white rounded-[32px] p-[24px] sm:p-[32px] md:p-[40px] lg:p-[40px] xl:p-[48px] border-b border-gray-200 overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between items-start w-full gap-[32px] md:gap-[20px] lg:gap-[32px] xl:gap-[60px]">

        {/* Left Content */}
        <div className="flex flex-col items-start text-left justify-center w-full md:w-[55%] lg:max-w-[500px] xl:max-w-[657px] gap-[24px] md:gap-[16px] lg:gap-[32px] xl:gap-[40px] order-2 md:order-1">

          {/* Header & Text */}
          <div className="flex flex-col gap-[16px] md:gap-[14px] lg:gap-[16px]">
            <motion.h1
              initial={{ opacity: 0, x: -30, filter: "blur(8px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="font-heading font-bold text-[24px] sm:text-[36px] md:text-[32px] lg:text-[48px] xl:text-[64px] leading-[1.15] tracking-tight text-[#1A1A1A]"
            >
              Insights, Ideas & <br className="hidden sm:block" />
              <span className="text-[#F05A28]">Stories</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, x: -20, filter: "blur(8px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              transition={{ duration: 1.2, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="text-[16px] sm:text-[16px] md:text-[14px] lg:text-[18px] xl:text-[24px] text-[#2B2E34] font-medium leading-[1.5] max-w-[380px] md:max-w-[400px] lg:max-w-[480px]"
            >
              Tips, guides, and stories curated to help you succeed in your design and freelance journey.
            </motion.p>
          </div>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full relative max-w-[380px] md:max-w-[500px]"
          >
            <Search className="absolute left-[16px] md:left-[16px] top-1/2 -translate-y-1/2 text-gray-400 w-[16px] h-[16px] md:w-[18px] md:h-[18px]" />
            <input
              type="text"
              placeholder="Search for articles....."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              suppressHydrationWarning
              className="w-full h-[44px] md:h-[42px] pl-[48px] md:pl-[48px] pr-[16px] md:pr-[16px] rounded-[10px] md:rounded-[10px] border border-[#FF8055]/40 bg-white focus:outline-none focus:border-[#F05A28] focus:ring-1 focus:ring-[#F05A28] transition-all font-body text-[14px] md:text-[14px] placeholder-gray-400"
            />
          </motion.div>

          {/* Categories */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-row overflow-x-auto md:flex-wrap items-center gap-[8px] md:gap-[8px] pb-[4px] w-full [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                suppressHydrationWarning
                className={`whitespace-nowrap shrink-0 px-[14px] md:px-[14px] py-[6px] md:py-[6px] rounded-full text-[12px] md:text-[12px] lg:text-[14px] xl:text-[18px] font-[400] transition-all duration-300 border ${activeCategory === cat
                  ? 'bg-[#CC431B] text-white border-[#CC431B]'
                  : 'bg-white text-[#404040] border-[#FF8055] hover:bg-[#FF8055]/10'
                  }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Right Content - Featured Blog Image Card */}
        {featuredBlog && (
          <motion.div
            initial={{ opacity: 0, x: 30, scale: 0.95, filter: "blur(10px)" }}
            animate={{ opacity: 1, x: 0, scale: 1, filter: "blur(0px)" }}
            whileHover={{ y: -8, scale: 1.015 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            onClick={() => router.push(`/blog/${featuredBlog.id}`)}
            className="flex flex-col group cursor-pointer shrink-0 rounded-[16px] bg-white/40 w-full md:w-[40%] lg:w-[380px] xl:w-[458px] mx-auto md:mr-0 lg:mx-0 order-1 md:order-2 overflow-hidden self-start"
            style={{
              backdropFilter: 'blur(20px)',
              boxShadow: '-2px 4px 10px 0px #9191910D, -7px 17px 18px 0px #9191910A, -15px 37px 24px 0px #91919108, -27px 66px 29px 0px #91919103, -42px 103px 31px 0px #91919100, 0px 4px 4px 0px #FFFFFF40 inset, 0px -5px 4px 0px #FFFFFF40 inset'
            }}
          >
            {/* Image Box */}
            <div className="w-full h-[140px] md:h-[120px] lg:h-[180px] xl:h-[220px] relative shrink-0">
              <div className="w-full h-full overflow-hidden rounded-t-[16px] relative">
                <Image
                  src={featuredBlog.imageUrl}
                  alt={featuredBlog.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 460px"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                  priority
                />
              </div>

              {/* Top Right Arrow */}
              <div
                className="absolute top-0 right-0 w-[40px] md:w-[44px] h-[40px] md:h-[44px] rounded-tr-[16px] rounded-bl-[20px] flex items-center justify-center shadow-md transition-colors z-20 group-hover:bg-[#CC431B]"
                style={{ background: 'linear-gradient(135deg, #FF8055 0%, #F05A28 100%)' }}
              >
                <ArrowUpRight className="text-white w-[18px] h-[18px] md:w-[20px] md:h-[20px]" strokeWidth={2.5} />
              </div>

              {/* Bottom Left Pills */}
              <div className="absolute -bottom-[15px] left-[14px] flex items-center gap-[6px] md:gap-[8px] lg:gap-[10px] z-20">
                <span className="h-[22px] md:h-[26px] lg:h-[30px] px-[8px] md:px-[12px] lg:px-[16px] py-[2px] md:py-[3px] lg:py-[4px] flex items-center justify-center bg-[#CC431B] rounded-full text-white text-[9px] md:text-[12px] lg:text-[16px] xl:text-[18px] font-medium tracking-wide shadow-sm whitespace-nowrap">
                  {featuredBlog.category}
                </span>
                <span className="h-[22px] md:h-[26px] lg:h-[30px] px-[8px] md:px-[12px] lg:px-[16px] py-[2px] md:py-[3px] lg:py-[4px] flex items-center justify-center bg-[#FF8055] rounded-full text-white text-[9px] md:text-[12px] lg:text-[16px] xl:text-[18px] font-medium tracking-wide shadow-sm whitespace-nowrap">
                  Latest
                </span>
              </div>
            </div>

            {/* Post Details */}
            <div className="px-[12px] md:px-[10px] lg:px-[16px] xl:px-[24px] pb-[12px] md:pb-[10px] lg:pb-[20px] xl:pb-[28px] pt-[18px] md:pt-[14px] lg:pt-[24px] xl:pt-[32px] flex flex-col gap-[4px] md:gap-[4px] lg:gap-[8px] xl:gap-[12px]">
              <h2 className="font-heading font-bold text-[14px] md:text-[12px] lg:text-[20px] xl:text-[28px] leading-[1.2] text-[#000000] group-hover:text-[#F05A28] transition-colors">
                {featuredBlog.title}
              </h2>

              <p 
                className="text-[11px] md:text-[9px] lg:text-[14px] xl:text-[18px] text-[#1A1A1A] leading-[1.3]"
                style={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}
              >
                {featuredBlog.excerpt}
              </p>

              <div className="flex flex-wrap items-center gap-[12px] lg:gap-[16px] mt-[2px] pt-[12px] border-t border-[#FF8055]/10">
                <div className="flex items-center gap-[4px] lg:gap-[6px] text-[10px] md:text-[10px] lg:text-[12px] xl:text-[14px] font-semibold text-[#1A1A1A]">
                    <User className="w-[12px] lg:w-[14px] xl:w-[16px] h-[12px] lg:h-[14px] xl:h-[16px] text-[#F05A28]" strokeWidth={2.5} />
                    <span>{featuredBlog.author.name}</span>
                </div>
                
                <div className="flex items-center gap-[4px] lg:gap-[6px] text-[10px] md:text-[10px] lg:text-[12px] xl:text-[14px] font-medium text-[#6B7280]">
                    <Calendar className="w-[12px] lg:w-[14px] xl:w-[16px] h-[12px] lg:h-[14px] xl:h-[16px] text-[#F05A28]" strokeWidth={2.5} />
                    <span>{featuredBlog.author.date}</span>
                </div>
              </div>
            </div>

          </motion.div>
        )}

      </div>
    </div>
  );
}