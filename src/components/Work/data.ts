import blurDataURL from '@lib/blurDataUrl';

import { Projects } from './Card';

type Content = {
	title: string;
	content: string;
};

// const about: Content[] = [
// 	{
// 		title: 'About',
// 		content: 'hello'
// 	}
// ];

const skills: Content = {
	title: 'Skills',
	content:
		'Crafting seamless digital experiences with expertise in React on the frontend and Node on the backend. Proficient in TypeScript, Redux, Tailwind/SCSS, SQL, and MongoDB. I ensure quality through comprehensive testing with tools like Jest and Cypress. '
};

const projects: Projects[] = [
	{
		title: 'Playmaker Vintage (Coming Soon)',
		imgSrc: {
			sml: '/photos/projects/playmakerVintage.png',
			lrg: '/photos/projects/playmakerVintage.png'
		},
		desc: 'An upcoming ecommerce store, built with Next.js  and featuring seamless Stripe integration. This ensures a secure and efficient transaction process for users, adding a layer of convenience to their shopping experience. ',
		links: {
			// source: 'https://kangas.au',
			github: 'https://github.com/mjbramich'
		},
		color: blurDataURL(154, 207, 229)
	},
	{
		title: 'Gutter Gladiators',
		imgSrc: {
			sml: '/photos/projects/gutterGladiatorsMockupSmall.png',
			lrg: '/photos/projects/gutterGladiatorsMockup.png'
		},
		desc: 'Created a modern website for a gutter cleaning business, showcasing their expertise and reliability. Built with Astro for fast performance and smooth user experience. ',
		links: {
			source: 'https://guttergladiators.com.au',
			github: 'https://github.com/mjbramich/gutter-gladiators'
		},
		color: blurDataURL(255, 118, 0)
	},
	{
		title: "Kanga's Exterior Solutions",
		imgSrc: {
			sml: '/photos/projects/kangasSmallMockup.png',
			lrg: '/photos/projects/kangasMockup.png'
		},
		desc: 'Designed and developed a website for a local property maintenance business, providing an effective platform to showcase their portfolio of work.',
		links: {
			source: 'https://kangas.au',
			github: 'https://github.com/mjbramich/kangas'
		},
		color: blurDataURL(131, 140, 155)
	},
	{
		title: 'Kandoo',
		imgSrc: {
			sml: '/photos/projects/kandooSmallMockup.png',
			lrg: '/photos/projects/kandooMockup.png'
		},
		desc: 'A fullstack web app for project organization that allows seamless collabortaion between teams, with a focus on enhancing productivity, kandoo ensures that every team member can better focus on the task at hand.',
		links: {
			source: 'https://kandoo.onrender.com/',
			github: 'https://github.com/mjbramich/kandoo'
		},
		color: blurDataURL(18, 112, 159)
	}
];

export { projects, skills };
