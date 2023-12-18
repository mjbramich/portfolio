import { Layout } from '@components/Layout';
import projects from '@/components/Projects/data';
import Card from '@/components/Projects/Card';
import type { NextPage } from 'next';

const Page: NextPage = () => (
	<Layout>
		{projects.map((project) => (
			<Card key={project.title} {...project} />
		))}
	</Layout>
);

export default Page;
