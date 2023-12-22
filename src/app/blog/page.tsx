// import Link from 'next/link';
// import { allPosts, Post } from 'contentlayer/generated';
import Blog from '@/components/Blog';
import { BlogLayout } from '@/components/Layout';

export const metadata = { title: 'Blog' };

// function PostCard(post: Post) {
// 	const { slug, title, published } = post;

// 	return (
// 		<div className='mb-8'>
// 			<h2 className='mb-1 text-xl'>
// 				<Link href={slug} className='text-blue-700 hover:text-blue-900 dark:text-blue-400'>
// 					{title}
// 				</Link>
// 			</h2>
// 			<time dateTime={published} className='mb-2 block text-xs text-gray-600'>
// 				{published}
// 			</time>
// 			<div className='text-sm [&>*]:mb-3 [&>*:last-child]:mb-0' />
// 		</div>
// 	);
// }

export default function Home() {
	return (
		<BlogLayout>
			<Blog />
		</BlogLayout>
	);
}
