import { allPosts } from 'contentlayer/generated';
import { notFound } from 'next/navigation';

// Generates all pages at build time
export const generateStaticParams = async () => allPosts.map((post) => ({ slug: post.slug }));

// Generates metadata for a post based on the given slug.
export const generateMetadata = ({ params }: { params: { slug: string } }) => {
	// Posts from contentlayer
	const post = allPosts.find((p) => p.slug.substring(6) === params.slug);
	if (!post) throw new Error(`Post not found for slug: ${params.slug}`);
	return { title: post.title };
};

const PostLayout = ({ params }: { params: { slug: string } }) => {
	// Posts from contentlayer
	// Extract the substring after the last '/' to get the slug

	const post = allPosts.find((p) => p.slug.substring(6) === params.slug);
	if (!post) notFound();

	return (
		<article className='mx-auto max-w-xl py-8'>
			<div className='mb-8 text-center'>
				<time dateTime={post.date} className='mb-1 text-xs text-gray-600'>
					{post.date}
				</time>
				<h1 className='text-3xl font-bold'>{post.title}</h1>
			</div>
			<div className='[&>*]:mb-3 [&>*:last-child]:mb-0' />
		</article>
	);
};

export default PostLayout;
