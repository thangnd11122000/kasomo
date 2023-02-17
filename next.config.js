/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  images: {
    loader: "imgix",
    path: "/",
  },
};

module.exports = nextConfig;
