/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
const isVercel = process.env.VERCEL === "1";
// Only use basePath for GitHub Pages, not for Vercel
const basePath = isProd && !isVercel ? "/Crypgo" : "";

const nextConfig = {
  basePath: basePath,
  assetPrefix: basePath ? `${basePath}/` : "",
  ...(isVercel ? {} : { output: "export" }), // Only use static export for GitHub Pages
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;

 