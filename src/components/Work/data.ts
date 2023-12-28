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
		title: "Kanga's Exterior Solutions",
		imgSrc: {
			sml: '/photos/projects/kangasSmallMockup.png',
			lrg: '/photos/projects/kangasMockup.png'
		},
		desc: 'A site for a local property maintenance business to showcase their work and do some other stufs',
		links: {
			source: 'https://kangas.au',
			github: 'https://github.com/mjbramich/kangas'
		},
		color: blurDataURL(131, 140, 155)
	},
	{
		title: 'Playmaker Vintage (Coming Soon)',
		imgSrc: {
			sml: '/photos/projects/playmakerVintage.png',
			lrg: '/photos/projects/playmakerVintage.png'
		},
		desc: 'A ecommerce allowing the owner to showcase their collection of vintage clothes',
		links: {
			source: 'https://kangas.au',
			github: 'https://github.com/mjbramich/kangas'
		},
		color: blurDataURL(154, 207, 229)
	},
	{
		title: 'Kandoo',
		imgSrc: {
			sml: '/photos/projects/kandooSmallMockup.png',
			lrg: '/photos/projects/kandooMockup.png'
		},
		desc: 'A site for a local property maintenance business to showcase their work',
		links: {
			source: 'https://kangas.au',
			github: 'https://github.com/mjbramich/kangas'
		},
		color: blurDataURL(18, 112, 159)
	},
	{
		title: "Kanga's ",
		imgSrc: {
			sml: '/photos/projects/kangasSmallMockup.png',
			lrg: '/photos/projects/kangasMockup.png'
		},
		desc: 'A site for a local property maintenance business to showcase their work',
		links: {
			source: 'https://kangas.au',
			github: 'https://github.com/mjbramich/kangas'
		},
		color: blurDataURL(18, 112, 159)
	}
];

export { projects, skills };
