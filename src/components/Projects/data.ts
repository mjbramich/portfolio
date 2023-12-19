import { Projects } from './Card';

type Content = {
	title: string;
	content: string;
};

const skills: Content[] = [
	{
		title: 'Skills',
		content:
			"I primarily work with React and Next.js ecosystem, and I've worked extensively with several tools such as TypeScript, Jest/Enzyme, Redux, Storybook, Chakra, Tailwind/SCSS, PostgreSQL, CircleCI, and much more. The web is an endless medium of opportunities, and I have yet to scratch the surface."
	}
];

const projects: Projects[] = [
	{
		title: "Kanga's Exterior Solutions",
		img: '/photos/@mjbramich/selfie.jpg',
		desc: 'A site for a local property maintenance business to showcase their work',
		links: ['https://kangas.au', 'https://github.com/mjbramich/kangas']
	},
	{
		title: "Kanga's Exterior Solutions",
		img: '/photos/@mjbramich/selfie.jpg',
		desc: 'A site for a local property maintenance business to showcase their work',
		links: ['https://kangas.au', 'https://github.com/mjbramich/kangas']
	},
	{
		title: "Kanga's Exterior Solutions",
		img: '/photos/@mjbramich/selfie.jpg',
		desc: 'A site for a local property maintenance business to showcase their work',
		links: ['https://kangas.au', 'https://github.com/mjbramich/kangas']
	},
	{
		title: "Kanga's Exterior Solutions",
		img: '/photos/@mjbramich/selfie.jpg',
		desc: 'A site for a local property maintenance business to showcase their work',
		links: ['https://kangas.au', 'https://github.com/mjbramich/kangas']
	}
];

export { projects, skills };
