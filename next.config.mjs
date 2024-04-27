/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	async headers() {
		return [
			{
				// Sets security headers for all routes
				source: '/(.*)',
				headers: [
					{
						key: 'X-Frame-Options',
						value: 'DENY',
						//You can use SAMEORIGIN as a value also.
					}
				],
			},
		];
	},
}

export default nextConfig;
