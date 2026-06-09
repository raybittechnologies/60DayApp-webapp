/**
 * Blog List — Loading Skeleton
 * Shown automatically by Next.js while blog/page.js is fetching data.
 * Mirrors the exact layout of the real page so there's no layout shift.
 */

const Pulse = ({ className }) => (
  <div className={`bg-gray-200/80 rounded-full animate-pulse ${className}`} />
);

const CardSkeleton = () => (
  <div className="bg-white/70 rounded-[16px] border border-white/60 overflow-hidden">
    {/* Image */}
    <div className="w-full h-[220px] bg-gray-200/80 animate-pulse" />
    {/* Content */}
    <div className="px-[20px] pb-[28px] pt-[28px] flex flex-col gap-3">
      <Pulse className="h-5 w-full" />
      <Pulse className="h-5 w-[80%]" />
      <div className="mt-1 flex flex-col gap-2">
        <Pulse className="h-3.5 w-full" />
        <Pulse className="h-3.5 w-[90%]" />
        <Pulse className="h-3.5 w-[65%]" />
      </div>
      {/* Author / Date */}
      <div className="flex gap-4 mt-3 pt-4 border-t-2 border-orange-100">
        <Pulse className="h-4 w-[110px]" />
        <Pulse className="h-4 w-[90px]" />
      </div>
    </div>
  </div>
);

export default function BlogLoading() {
  return (
    <div className="w-full relative pb-[40px] sm:pb-[60px] lg:pb-[80px] pt-[100px] sm:pt-[120px] lg:pt-[135px] bg-transparent">
      <div className="section-outer">
        <div className="flex flex-col w-full gap-[64px]">

          {/* ── Hero Skeleton ── */}
          <div className="w-full section-inner mx-auto max-w-[1280px] bg-white rounded-[32px] p-[24px] sm:p-[32px] md:p-[40px] border-b border-gray-100">
            <div className="flex flex-col md:flex-row justify-between items-start w-full gap-[32px] md:gap-[20px]">

              {/* Left — heading + search + pills */}
              <div className="flex flex-col gap-[24px] w-full md:w-[55%]">
                {/* Heading */}
                <div className="flex flex-col gap-3">
                  <Pulse className="h-10 w-[70%]" />
                  <Pulse className="h-10 w-[50%]" />
                  <Pulse className="h-4 w-full mt-1" />
                  <Pulse className="h-4 w-[80%]" />
                </div>
                {/* Search bar */}
                <Pulse className="h-[44px] w-full max-w-[380px] !rounded-[10px]" />
                {/* Category pills */}
                <div className="flex flex-wrap gap-2">
                  {[72, 56, 90, 68, 80, 62].map((w, i) => (
                    <div
                      key={i}
                      className="h-[32px] bg-gray-200/80 rounded-full animate-pulse"
                      style={{ width: w }}
                    />
                  ))}
                </div>
              </div>

              {/* Right — featured card skeleton */}
              <div className="w-full md:w-[40%] lg:w-[380px] xl:w-[458px] shrink-0 mx-auto md:mr-0 rounded-[16px] overflow-hidden bg-gray-50 border border-gray-100">
                <div className="w-full h-[160px] lg:h-[200px] bg-gray-200/80 animate-pulse" />
                <div className="px-[16px] pb-[20px] pt-[24px] flex flex-col gap-3">
                  <Pulse className="h-5 w-full" />
                  <Pulse className="h-5 w-[75%]" />
                  <Pulse className="h-3.5 w-full" />
                  <Pulse className="h-3.5 w-[85%]" />
                  <div className="flex gap-4 mt-2 pt-3 border-t border-orange-100">
                    <Pulse className="h-3.5 w-[90px]" />
                    <Pulse className="h-3.5 w-[75px]" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── Grid Skeleton ── */}
          <div className="section-outer">
            <div className="section-inner mx-auto">
              {/* "Our Blogs" heading skeleton */}
              <Pulse className="h-10 w-[180px] mb-[40px] !rounded-[12px]" />
              {/* 6 card grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px] sm:gap-[32px]">
                {Array.from({ length: 6 }).map((_, i) => (
                  <CardSkeleton key={i} />
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
