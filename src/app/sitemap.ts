import { MetadataRoute } from 'next';
import { allPosts } from 'contentlayer/generated';

const baseURL = 'https://mjbramich.dev';

const sitemap = (): MetadataRoute.Sitemap => {
	const posts = allPosts.map((post) => ({
		url: `${baseURL}${post.slug}`,
		lastModified: post.published
	}));

	const routes = ['', '/work', '/blog'].map((route) => ({
		url: `${baseURL}${route}`,
		lastModified: new Date().toISOString().split('T')[0]
	}));

	return [...routes, ...posts];
};

export default sitemap;
