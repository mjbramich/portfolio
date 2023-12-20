import { FiArrowUpRight, FiGithub } from 'react-icons/fi';
import styles from '@css/work.module.css';
import Image from 'next/image';

type Link = {
	source: string;
	github: string;
};

export type Projects = {
	title: string;
	desc: string;
	imgSrc: {
		sml: string;
		lrg: string;
	};
	links: Link;
};

const Card = ({ title, desc, imgSrc, links }: Projects) => (
	<div className={styles.container}>
		<div className={styles.info}>
			<div className={styles.heading}>
				<h3>{title}</h3>
				<div className={styles.links}>
					<a href={links.source} target='_blank' rel='noreferrer' aria-label='Source Link'>
						<FiArrowUpRight size={24} />
					</a>
					<a href={links.github} target='_blank' rel='noreferrer' aria-label='Source Link'>
						<FiGithub size={24} />
					</a>
				</div>
			</div>
			<p>{desc}</p>
		</div>
		<picture>
			<source srcSet={imgSrc.sml} media='(max-width: 767px)' />
			<Image src={imgSrc.lrg} alt={title} className={styles.img} width={562} height={300} />
		</picture>
	</div>
);

export default Card;
