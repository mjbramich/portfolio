import BlogPost from '@/components/BlogPost';
import { allPosts } from 'contentlayer/generated';
import { metadata as defaultMetadata } from '@/app/layout';

import { notFound } from 'next/navigation';

// Generates all pages at build time
export const generateStaticParams = async () =>
	allPosts.map((post) => ({ slug: post.slug.substring(6) }));

// Generates metadata for a post based on the given slug.
export const generateMetadata = ({ params }: { params: { slug: string } }) => {
	// Posts from contentlayer
	const post = allPosts.find((p) => p.slug.substring(6) === params.slug);
	if (!post) return defaultMetadata;

	const { title, description, published: publishedTime, slug } = post;

	return {
		title,
		description,
		openGraph: {
			title,
			description,
			type: 'article',
			publishedTime,
			url: `https://mjbramich.dev${slug}`,
			image: 'https://mjbramich.dev/og.png'
		},
		twitter: {
			card: 'summary_large_image',
			title,
			description,
			image: 'https://mjbramich.dev/og.png'
		}
	};
};

const PostLayout = ({ params }: { params: { slug: string } }) => {
	// Posts from contentlayer
	// Extract the substring after the last '/' to get the slug

	const post = allPosts.find((p) => p.slug.substring(6) === params.slug);
	if (!post) notFound();

	return (
		<BlogPost index={allPosts.findIndex((p) => p.slug.substring(6) === params.slug)} post={post} />
	);
};

export default PostLayout;
