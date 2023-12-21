import { BlogLayout } from '@components/Layout';
// import Writing from '@components/Writing'
import type { NextPage } from 'next';

export const metadata = { title: 'Blog' };

const Page: NextPage = () => (
	<BlogLayout>
		<h1>This is my blog</h1>
	</BlogLayout>
);

export default Page;
