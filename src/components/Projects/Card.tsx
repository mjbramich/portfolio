import { FiArrowUpRight, FiGithub } from 'react-icons/fi';
import styles from '@css/work.module.css';
import Image from 'next/image';

export type Projects = {
	title: string;
	desc: string;
	img: string;
	links: string[];
};

const Card = ({ title, desc, img, links }: Projects) => (
	<div className={styles.container}>
		<Image src={img} alt={title} className={styles.img} width={48} height={48} />
		<div className={styles.info}>
			<div className={styles.heading}>
				<h3>{title}</h3>
				<div className={styles.links}>
					<a href={links[0]} target='_blank' rel='noreferrer' aria-label='Source Link'>
						<FiArrowUpRight size={24} />
					</a>
					<a href={links[1]} target='_blank' rel='noreferrer' aria-label='Source Link'>
						<FiGithub size={24} />
					</a>
				</div>
			</div>
			<p>{desc}</p>
		</div>
	</div>
);

export default Card;
