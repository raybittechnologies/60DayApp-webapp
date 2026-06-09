"use client";
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, SearchX, User, Calendar } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function BlogGrid({ filteredBlogs, onClearFilters }) {
  const router = useRouter();
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
              initial={{ opacity: 0, y: 40, scale: 0.96, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -8, scale: 1.02 }}
              exit={{ opacity: 0, scale: 0.96, filter: "blur(5px)" }}
              transition={{ duration: 1, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white/70 backdrop-blur-lg rounded-[16px] shadow-[0_8px_32px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_40px_rgba(240,90,40,0.12)] transition-all duration-300 group cursor-pointer flex flex-col w-full max-w-[389px] h-full mx-auto border border-white/60"
              onClick={() => router.push(`/blog/${blog.id}`)}
            >
              {/* Image Container */}
              <div className="w-full h-[200px] sm:h-[230px] relative shrink-0">
                {/* Image Mask */}
                <div className="w-full h-full overflow-hidden rounded-t-[16px] relative">
                  <Image
                    src={blog.imageUrl}
                    alt={blog.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
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
                <h3 className="font-Poppins font-semibold text-[20px] leading-[1.3] text-[#000000] mb-[12px] group-hover:text-brand-orange transition-colors">
                  {blog.title}
                </h3>

                <p 
                  className="font-Inter font-normal text-[18px] text-[#1A1A1A] leading-[1.6] mb-[24px]"
                  style={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}
                >
                  {blog.excerpt}
                </p>

                <div className="flex items-center gap-[16px] mt-auto pt-[16px] border-t-2 border-[#F05A28]/30">
                  <div className="flex items-center gap-[8px] text-[#1A1A1A] font-semibold text-[17px]">
                    <User className="w-[18px] h-[18px] text-[#F05A28]" strokeWidth={2} />
                    <span>{blog.author.name}</span>
                  </div>
                  
                  <div className="flex items-center gap-[8px] text-[#6B7280] font-medium text-[17px]">
                    <Calendar className="w-[18px] h-[18px] text-[#F05A28]" strokeWidth={2} />
                    <span>{blog.author.date}</span>
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
              suppressHydrationWarning
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
