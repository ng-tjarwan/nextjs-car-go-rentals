/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    publicSupabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL,
    publicSupabaseAnonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  },
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
