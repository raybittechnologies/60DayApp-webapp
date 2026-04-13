import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import { MOCK_BLOGS } from '../components/Blog/BlogData';
import BlogPostImg from '../assets/images/BlogPost.jpg';


const BLOG_CONTENT = {
  intro: [
    "In 2026, UI/UX design is no longer just about making things look good\u2014it's about creating meaningful, intuitive, and personalized digital experiences. As technology evolves, user expectations continue to rise. Designers must adapt to new trends, tools, and behaviors to stay relevant.",
    "Here are 10 essential UI/UX design principles that will define great digital experiences in 2026:"
  ],
  points: [
    {
      title: "1. User-Centric Design First",
      desc: "Everything starts with the user. Understanding user needs, behaviors, and pain points is critical. Conduct research, create personas, and continuously gather feedback to ensure your design solves real problems."
    },
    {
      title: "2. Simplicity Over Complexity",
      desc: "Minimalism continues to dominate. Clean layouts, fewer distractions, and clear messaging help users focus on what matters. Avoid unnecessary elements that clutter the interface."
    },
    {
      title: "3. Personalization is Key",
      desc: "Users expect experiences tailored to them. From customized dashboards to AI-driven recommendations, personalization enhances engagement and satisfaction."
    },
    {
      title: "4. Accessibility for All",
      desc: "Design must be inclusive. Ensure your products are usable by people of all abilities by following accessibility standards\u2014like proper contrast, readable fonts, and keyboard navigation."
    },
    {
      title: "5. Mobile-First & Multi-Device Experience",
      desc: "With users switching between devices, designs must be responsive and seamless across smartphones, tablets, and desktops. Mobile first is no longer optional\u2014it's essential."
    },
    {
      title: "6. Microinteractions Matter",
      desc: "Small animations and feedback (like button clicks, loading indicators, or hover effects) improve usability and make the experience feel alive and responsive."
    },
    {
      title: "7. Fast Load Time & Performance",
      desc: "Speed is everything. Users expect instant responses. Optimize images, reduce unnecessary scripts, and prioritize performance to prevent drop-offs."
    }
  ],
  conclusion: [
    "UI/UX design in 2026 goes far beyond aesthetics\u2014it is about crafting meaningful, seamless, and human-centered experiences that truly resonate with users. As digital products become more integrated into everyday life, users expect interfaces that not only function flawlessly but also feel intuitive, responsive, and tailored to their needs.",
    "By applying these principles\u2014ranging from user-centric thinking and simplicity to personalization and emotional design\u2014designers can create products that stand out in a highly competitive landscape. It's no longer enough for a product to simply work; it must engage, delight, and build trust with its users at every interaction.",
    "Moreover, the future of UI/UX lies in continuous learning and adaptation. Leveraging user feedback, analyzing data, and staying aligned with emerging technologies will help designers refine their work and stay ahead of trends. The most successful designs will be those that evolve alongside user expectations.",
    "Ultimately, great design is invisible\u2014it feels natural, effortless, and impactful. When done right, it not only solves problems but also creates memorable experiences that users return to again and again."
  ]
};

export default function BlogPostDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const blog = MOCK_BLOGS.find(b => b.id === parseInt(id));
  const title = blog?.title || 'Blog Post Title';
  const displayIntro = blog?.excerpt ? [blog.excerpt] : BLOG_CONTENT.intro;
  const displayImage = blog?.imageUrl || BlogPostImg;

  return (
    <div className="w-full relative pb-[40px] pt-[100px] md:pt-[155px] font-body bg-transparent">
      <div className="section-outer">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="w-full section-inner mx-auto bg-white rounded-[32px] p-[32px] sm:p-[48px] md:p-[80px] shadow-[0_8px_32px_rgba(0,0,0,0.04)] border-b border-gray-200"
        >

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading font-bold text-[36px] sm:text-[44px] md:text-[52px] leading-[1.2] text-[#1A1A1A] mb-[40px]"
          >
            {title}
          </motion.h1>

          <div className="flex flex-col gap-[24px] mb-[40px]">
            {displayIntro.map((para, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="text-[16px] sm:text-[18px] text-[#404040] leading-[1.7]"
              >
                {para}
              </motion.p>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="w-full mb-[56px] rounded-xl overflow-hidden shadow-sm"
          >
            <img
              src={displayImage}
              alt={title}
              className="w-full h-auto max-h-[600px] object-cover"
            />
          </motion.div>

          {/* Points */}
          <div className="flex flex-col gap-[0px] mb-[48px]">
            {BLOG_CONTENT.points.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                className="border-b border-gray-100 py-[40px] first:pt-0"
              >
                <h3 className="font-heading font-bold text-[20px] sm:text-[22px] text-[#1A1A1A] mb-[16px]">
                  {point.title}
                </h3>
                <p className="text-[16px] sm:text-[17px] text-[#404040] leading-[1.7]">
                  {point.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Conclusion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="pt-[16px]"
          >
            <h3 className="font-heading font-bold text-[20px] sm:text-[24px] text-[#1A1A1A] mb-[20px]">
              Conclusion
            </h3>
            <div className="flex flex-col gap-[24px]">
              {BLOG_CONTENT.conclusion.map((para, index) => (
                <p
                  key={index}
                  className="text-[16px] sm:text-[17px] text-[#404040] leading-[1.7]"
                >
                  {para}
                </p>
              ))}
            </div>
          </motion.div>

        </motion.div>
      </div>

      {/* Floating Sticky Back Button - Resides securely in the right gutter */}
      <motion.button
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => navigate('/blog')}
        className="fixed bottom-6 right-6 lg:bottom-10 lg:right-10 z-50 flex items-center h-[56px] bg-white text-[#F05A28] border border-[#F05A28]/20 shadow-[0_8px_32px_rgba(240,90,40,0.15)] hover:bg-[#F05A28] hover:text-white transition-colors duration-300 rounded-full"
      >
        <div className="w-[56px] h-[56px] flex items-center justify-center shrink-0">
          <ArrowLeft className="w-6 h-6" />
        </div>
        <motion.div
          initial={false}
          animate={{
            width: isHovered ? 'auto' : 0,
            opacity: isHovered ? 1 : 0,
            paddingRight: isHovered ? 24 : 0
          }}
          className="overflow-hidden whitespace-nowrap font-heading font-semibold tracking-wide text-[16px]"
        >
          Blogs
        </motion.div>
      </motion.button>

    </div>
  );
}
