import { Layout } from '@components/Layout';
import type { NextPage } from 'next';
import Work from '@/components/Work';

export const metadata = { title: 'Work' };

const Page: NextPage = () => (
	<Layout>
		<Work />
	</Layout>
);

export default Page;
