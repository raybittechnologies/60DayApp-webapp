import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, SearchX } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function BlogGrid({ filteredBlogs, onClearFilters }) {
  const navigate = useNavigate();
  return (
    <div className="section-inner mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-heading font-bold text-[48px] sm:text-[40px] text-[#1A1A1A] mb-[40px] font-Poppins"
      >
        Our <span className="text-brand-orange">Blogs</span>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px] sm:gap-[32px]">
        <AnimatePresence>
          {filteredBlogs.map((blog, index) => (
            <motion.div
              key={blog.id}
              layout
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -8 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
              className="bg-white rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_40px_rgba(240,90,40,0.12)] transition-all duration-300 group cursor-pointer flex flex-col h-full border border-gray-100/50"
              onClick={() => navigate(`/blog/${blog.id}`)}
            >
              {/* Image Container */}
              <div className="w-full h-[200px] sm:h-[230px] relative shrink-0">
                {/* Image Mask */}
                <div className="w-full h-full overflow-hidden rounded-t-[16px]">
                  <img
                    src={blog.imageUrl}
                    alt={blog.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                  />
                </div>

                {/* Top Right Arrow */}
                <div
                  className="absolute top-0 right-0 w-[44px] h-[44px] rounded-tr-[16px] rounded-bl-[16px] flex items-center justify-center shadow-md transition-colors z-20 group-hover:bg-[#CC431B]"
                  style={{ background: 'linear-gradient(135deg, #FF8055 0%, #F05A28 100%)' }}
                >
                  <ArrowUpRight className="text-white w-[22px] h-[22px]" strokeWidth={2.5} />
                </div>

                {/* Category Pill */}
                <div className="absolute -bottom-[14px] left-[20px] z-10">
                  <span className="inline-block px-[22px] py-[8px] bg-[#CC431B] text-white rounded-full text-[20px] font-semibold tracking-wide shadow-sm whitespace-nowrap">
                    {blog.category}
                  </span>
                </div>
              </div>

              {/* Content Container */}
              <div className="px-[20px] pb-[32px] pt-[32px] flex flex-col flex-grow">
                <h3 className="font-heading font-semibold text-[20px] leading-[1.3] text-[#000000] mb-[12px] group-hover:text-brand-orange transition-colors">
                  {blog.title}
                </h3>

                <p className="text-[18px] text-[#1A1A1A] leading-[1.6] mb-[24px] flex-grow line-clamp-3">
                  {blog.excerpt}
                </p>

                <div className="flex items-center gap-[12px] mt-auto">
                  <img
                    src={blog.author.avatar}
                    alt={blog.author.name}
                    className="w-[48px] h-[48px] rounded-full object-cover shadow-sm border-[2px] border-[#F05A28]"
                  />
                  <div className="text-[18px] font-medium text-[#6B7280]">
                    <span className="text-[#1A1A1A] font-semibold">{blog.author.name}</span>
                    <span className="mx-[4px]">{"\u2013"}</span>
                    <span className="">{blog.author.date}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {filteredBlogs.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="col-span-full flex flex-col items-center justify-center py-[120px] px-[24px] w-full bg-gradient-to-b from-[#FAFAFA]/80 to-white rounded-[32px] border border-gray-100 shadow-[inset_0_2px_40px_rgba(0,0,0,0.02)]"
          >
            {/* Elegant Icon Container */}
            <div className="relative w-[88px] h-[88px] flex items-center justify-center rounded-[24px] bg-[#FFF5F2] mb-[32px] shadow-sm">
              <SearchX className="w-[36px] h-[36px] text-[#F05A28]" strokeWidth={1.5} />

              {/* Decorative Notification Dot */}
              <div className="absolute top-[18px] right-[18px] w-[12px] h-[12px] bg-[#C43E1C] rounded-full border-[2.5px] border-[#FFF5F2]" />
            </div>

            <h3 className="font-heading font-bold text-[28px] sm:text-[32px] text-[#1A1A1A] tracking-tight mb-[24px]">
              No Matches Found
            </h3>

            <button
              onClick={onClearFilters}
              className="px-[28px] py-[14px] bg-[#F05A28] text-white rounded-full font-medium tracking-wide shadow-[0_8px_16px_rgba(240,90,40,0.2)] hover:shadow-[0_4px_8px_rgba(240,90,40,0.15)] hover:bg-[#CC431B] transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              Clear Filters
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
