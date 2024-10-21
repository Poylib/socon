/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "socon-image.s3.ap-northeast-2.amazonaws.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: `${process.env.CLOUDFRONT_URL}`,
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
