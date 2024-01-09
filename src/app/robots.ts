import { MetadataRoute } from 'next';

const robots = (): MetadataRoute.Robots => ({
	rules: {
		userAgent: '*',
		allow: '/',
		disallow: '/private/'
	},
	sitemap: 'https://mjbramich.dev/sitemap.xml'
});

export default robots;
