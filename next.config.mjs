/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
        port: "",
        pathname: "",
      },
    ],
  },
};

export default nextConfig;
