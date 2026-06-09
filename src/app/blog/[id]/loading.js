/**
 * Blog Post — Loading Skeleton
 * Shown automatically while blog/[id]/page.js is fetching the post from WordPress.
 */

const Pulse = ({ className }) => (
  <div className={`bg-gray-200/80 rounded-full animate-pulse ${className}`} />
);

export default function BlogPostLoading() {
  return (
    <div className="w-full relative pb-[40px] pt-[100px] sm:pt-[120px] lg:pt-[135px] bg-transparent overflow-hidden">

      {/* Progress bar placeholder */}
      <div className="fixed top-0 left-0 right-0 h-[6px] bg-gradient-to-r from-orange-100 to-orange-200 animate-pulse" />

      <div className="section-outer relative z-10">
        <div className="w-full section-inner mx-auto bg-white rounded-[32px] p-[32px] sm:p-[48px] md:p-[80px] shadow-[0_8px_32px_rgba(0,0,0,0.04)]">

          {/* Title — 3 lines */}
          <div className="flex flex-col gap-4 mb-[40px]">
            <Pulse className="h-10 sm:h-12 w-full !rounded-[12px]" />
            <Pulse className="h-10 sm:h-12 w-[88%] !rounded-[12px]" />
            <Pulse className="h-10 sm:h-12 w-[65%] !rounded-[12px]" />
          </div>

          {/* Featured image */}
          <div className="w-full h-[240px] sm:h-[360px] md:h-[480px] bg-gray-200/80 rounded-xl mb-[56px] animate-pulse" />

          {/* Article body — alternating line lengths */}
          <div className="flex flex-col gap-4">
            {[100, 96, 88, 100, 74, 92, 100, 83, 60].map((w, i) => (
              <Pulse key={i} className="h-4" style={{ width: `${w}%` }} />
            ))}

            {/* Sub-heading */}
            <div className="mt-6 mb-2">
              <Pulse className="h-7 w-[220px] !rounded-[8px]" />
            </div>

            {[100, 93, 80, 100, 72, 95, 100, 68].map((w, i) => (
              <Pulse key={`b-${i}`} className="h-4" style={{ width: `${w}%` }} />
            ))}

            {/* Another sub-heading */}
            <div className="mt-6 mb-2">
              <Pulse className="h-7 w-[180px] !rounded-[8px]" />
            </div>

            {[100, 88, 95, 100, 78].map((w, i) => (
              <Pulse key={`c-${i}`} className="h-4" style={{ width: `${w}%` }} />
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
