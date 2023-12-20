'use client';

import styles from '@css/work.module.css';
import Section from './Section';
import CardList from './CardList';

const About = () => (
	<div className={styles.box}>
		<h1>My work</h1>

		<Section title='About' extend={{ title: 'See More', href: '/about' }}>
			{' '}
		</Section>
		<Section title='Skills' extend={{ title: 'See More', href: '/skills' }}>
			<p>This is a overview of my skills</p>
		</Section>

		<Section title='Recent Work' extend={{ title: 'See More', href: '/projects' }}>
			<CardList />
		</Section>
	</div>
);

export default About;
