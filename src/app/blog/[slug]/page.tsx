import BlogPost from '@/components/BlogPost';
import { allPosts } from 'contentlayer/generated';
import { notFound } from 'next/navigation';

// Generates all pages at build time
export const generateStaticParams = async () => allPosts.map((post) => ({ slug: post.slug }));

// Generates metadata for a post based on the given slug.
export const generateMetadata = ({ params }: { params: { slug: string } }) => {
	// Posts from contentlayer
	const post = allPosts.find((p) => p.slug.substring(6) === params.slug);
	if (!post) throw new Error(`Post not found for slug: ${params.slug}`);

	const { title, description } = post;

	return { title, description };
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
