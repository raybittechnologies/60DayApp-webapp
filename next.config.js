/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ['192.168.100.8'],
  devIndicators: {
    appIsrStatus: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'wp.menuscan.io',
        pathname: '/**',
      },
      {
        // WordPress may also serve images from i0/i1/i2.wp.com CDN
        protocol: 'https',
        hostname: '*.wp.com',
        pathname: '/**',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/case-study',
        destination: '/case-study/expense-tracker',
        permanent: true,
      },
      {
        source: '/case-studies',
        destination: '/case-study/expense-tracker',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
