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
		'Crafting seamless digital experiences with expertise in React and Next.js on the frontend and Node on the backend. Proficient in TypeScript, Redux, Tailwind/SCSS, SQL, and MongoDB. I ensure quality through comprehensive testing with tools like Jest and Cypress.'
};

const projects: Projects[] = [
	{
		title: "Kanga's Exterior Solutions",
		imgSrc: {
			sml: '/photos/projects/test1.png',
			lrg: '/photos/projects/kangasmockup.png'
		},
		desc: 'A site for a local property maintenance business to showcase their work and do some other stufs',
		links: {
			source: 'https://kangas.au',
			github: 'https://github.com/mjbramich/kangas'
		}
	},
	{
		title: "Kanga's Exterior Solutions",
		imgSrc: {
			sml: '/photos/projects/test1.png',
			lrg: '/photos/projects/kangasmockup.png'
		},
		desc: 'A site for a local property maintenance business to showcase their work',
		links: {
			source: 'https://kangas.au',
			github: 'https://github.com/mjbramich/kangas'
		}
	},
	{
		title: "Kanga's Exterior Solutions",
		imgSrc: {
			sml: '/photos/projects/test1.png',
			lrg: '/photos/projects/kangasmockup.png'
		},
		desc: 'A site for a local property maintenance business to showcase their work',
		links: {
			source: 'https://kangas.au',
			github: 'https://github.com/mjbramich/kangas'
		}
	},
	{
		title: "Kanga's ",
		imgSrc: {
			sml: '/photos/projects/test1.png',
			lrg: '/photos/projects/kangasmockup.png'
		},
		desc: 'A site for a local property maintenance business to showcase their work',
		links: {
			source: 'https://kangas.au',
			github: 'https://github.com/mjbramich/kangas'
		}
	}
];

export { projects, skills };
