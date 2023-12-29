'use client';

import styles from '@css/work.module.css';
import Section from './Section';
import CardList from './CardList';
import { skills } from './data';

const About = () => (
	<div className={styles.box}>
		{/* <Section title='About' extend={{ title: 'See More', href: '/about' }}>
			{' '}
		</Section> */}
		<h1 className={styles.intro}>
			I craft solutions that solve problems through design and development, and I love what I do —
			constantly exploring new avenues for learning and growth.
		</h1>

		<Section
			title={skills.title}
			extend={{
				title: 'View resume',
				href: 'https://drive.google.com/file/d/13p6X4aarSjfnb19103-HGqCW3WPxS5dV/view?usp=drive_link'
			}}
		>
			<p>{skills.content}</p>
		</Section>

		<Section
			title='Recent Work'
			extend={{ title: 'All works', href: 'https://github.com/mjbramich' }}
		>
			<CardList />
		</Section>
	</div>
);

export default About;
