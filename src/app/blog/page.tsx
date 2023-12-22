import Link from 'next/link';
import { allPosts, Post } from 'contentlayer/generated';

export const metadata = { title: 'Blog' };

function PostCard(post: Post) {
	const { slug, title, date } = post;

	return (
		<div className='mb-8'>
			<h2 className='mb-1 text-xl'>
				<Link href={slug} className='text-blue-700 hover:text-blue-900 dark:text-blue-400'>
					{title}
				</Link>
			</h2>
			<time dateTime={date} className='mb-2 block text-xs text-gray-600'>
				{date}
			</time>
			<div className='text-sm [&>*]:mb-3 [&>*:last-child]:mb-0' />
		</div>
	);
}

export default function Home() {
	const posts = allPosts.sort((a, b) => (a.date < b.date ? 1 : 1));

	return (
		<div className='mx-auto max-w-xl py-8'>
			<h1 className='mb-8 text-center text-2xl font-black'>Next.js + Contentlayer Example</h1>
			{posts.map((post, idx) => (
				<PostCard key={idx} {...post} />
			))}
		</div>
	);
}
