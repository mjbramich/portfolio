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
		<Section title={skills.title} extend={{ title: 'View resume', href: '/skills' }}>
			<p>{skills.content}</p>
		</Section>

		<Section title='Recent Work' extend={{ title: 'All works', href: '/projects' }}>
			<CardList />
		</Section>
	</div>
);

export default About;
