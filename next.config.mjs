/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
		return [
			{
				source: "/tags",
				destination: "/tags/1",
				permanent: true,
			}
		];
	},
  compiler: {
    styledComponents: true,
  },
  experimental: {
		typedRoutes: true,
	},
};

export default nextConfig;
