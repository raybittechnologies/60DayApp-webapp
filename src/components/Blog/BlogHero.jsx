import React from 'react';
import { motion } from 'framer-motion';
import { Search, ArrowUpRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function BlogHero({
  searchQuery,
  setSearchQuery,
  activeCategory,
  setActiveCategory,
  categories,
  featuredBlog
}) {
  const navigate = useNavigate();
  return (
    <div className="w-full section-inner mx-auto max-w-[1280px] min-h-[auto] lg:min-h-[624px] bg-white rounded-[32px] p-[24px] sm:p-[40px] lg:p-[48px] border-b border-gray-200">
      <div className="flex flex-col lg:flex-row justify-between items-center w-full h-full gap-[48px] lg:gap-[60px]">

        {/* Left Content */}
        <div className="flex flex-col items-start text-left shrink-0 justify-center w-full lg:w-[50%] lg:max-w-[657px] gap-[24px] lg:gap-[40px] order-2 lg:order-1">
          {/* Header & Text */}
          <div className="flex flex-col gap-[16px]">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-heading font-bold text-[36px] sm:text-[64px] leading-[1.15] tracking-tight text-[#1A1A1A]"
            >
              Insights, Ideas & <br className="hidden sm:block" />
              <span className="text-[#F05A28]">Stories</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[28px] text-[#2B2E34] font-medium leading-[1.6] max-w-[480px]"
            >
              Tips, guides, and stories curated to help you succeed in your design and freelance journey.
            </motion.p>
          </div>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full relative"
          >
            <Search className="absolute left-[20px] top-1/2 -translate-y-1/2 text-gray-400 w-[20px] h-[20px]" />
            <input
              type="text"
              placeholder="Search for articles....."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full max-w-[500px] h-[54px] pl-[54px] pr-[20px] rounded-[12px] border border-[#FF8055]/40 bg-white focus:outline-none focus:border-[#F05A28] focus:ring-1 focus:ring-[#F05A28] transition-all font-body text-[15px] placeholder-gray-400"
            />
          </motion.div>

          {/* Categories */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-row overflow-x-auto lg:flex-wrap items-center gap-[12px] pb-[8px] w-full [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`whitespace-nowrap shrink-0 px-[24px] py-[10px] rounded-full text-[18px] font-[400] transition-all duration-300 border ${activeCategory === cat
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
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            onClick={() => navigate(`/blog/${featuredBlog.id}`)}
            className="flex flex-col group cursor-pointer shrink-0 rounded-[16px] bg-white/40 w-full md:w-[458px] lg:h-fit mx-auto lg:mx-0 order-1 lg:order-2 pb-4"
            style={{
              backdropFilter: 'blur(20px)',
              boxShadow: '-2px 4px 10px 0px #9191910D, -7px 17px 18px 0px #9191910A, -15px 37px 24px 0px #91919108, -27px 66px 29px 0px #91919103, -42px 103px 31px 0px #91919100, 0px 4px 4px 0px #FFFFFF40 inset, 0px -5px 4px 0px #FFFFFF40 inset'
            }}
          >
            {/* Image Box */}
            <div className="w-full h-[250px] relative shrink-0">
              {/* Image Mask prevents bleeding on hover */}
              <div className="w-full h-full overflow-hidden rounded-t-[16px]">
                <img
                  src={featuredBlog.imageUrl}
                  alt={featuredBlog.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                />
              </div>

              {/* Top Right Arrow */}
              <div
                className="absolute top-0 right-0 w-[56px] h-[56px] rounded-tr-[16px] rounded-bl-[20px] flex items-center justify-center shadow-md transition-colors z-20 group-hover:bg-[#CC431B]"
                style={{ background: 'linear-gradient(135deg, #FF8055 0%, #F05A28 100%)' }}
              >
                <ArrowUpRight className="text-white w-[28px] h-[28px]" strokeWidth={2.5} />
              </div>

              {/* Bottom Left Pills */}
              <div className="absolute -bottom-[14px] left-[24px] flex items-center gap-[8px] z-20">
                <span className="px-[20px] py-[6px] bg-[#CC431B] rounded-full text-white text-[18px] font-medium tracking-wide shadow-sm whitespace-nowrap">
                  {featuredBlog.category}
                </span>
                <span className="px-[20px] py-[6px] bg-[#FF8055] rounded-full text-white text-[18px] font-medium tracking-wide shadow-sm whitespace-nowrap">
                  Latest
                </span>
              </div>
            </div>

            {/* Post Details */}
            <div className="px-[24px] pb-[32px] pt-[32px] flex flex-col">
              <h2 className="font-heading font-bold text-[28px] leading-[1.3] text-[#000000] mb-[12px] group-hover:text-[#F05A28] transition-colors">
                {featuredBlog.title}
              </h2>

              <p className="text-[18px] text-[#1A1A1A] leading-[1.6] mb-[24px] line-clamp-3">
                {featuredBlog.excerpt}
              </p>

              <div className="flex items-center gap-[12px] mt-[12px]">
                <img
                  src={featuredBlog.author.avatar}
                  alt={featuredBlog.author.name}
                  className="w-[48px] h-[48px] rounded-full object-cover shadow-sm border-[2px] border-[#F05A28]"
                />
                <div className="text-[18px] font-medium text-[#6B7280]">
                  <span className="text-[#1A1A1A] font-semibold">{featuredBlog.author.name}</span>
                  <span className="mx-[4px]">{"\u2013"}</span>
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
