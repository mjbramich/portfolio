import { FiArrowUpRight } from 'react-icons/fi';
import styles from '@css/work.module.css';
import Image from 'next/image';

type Props = {
	project: string;
	desc: string;
	img: string;
	link: string;
};

const Card = ({ project, desc, img, link }: Props) => (
	<div className={styles.container}>
		<div className={styles.info}>
			<Image src={img} alt={project} className={styles.img} width={48} height={48} />
			<div>
				<h3>{project}</h3>
				<p>{desc}</p>
			</div>
		</div>
		<div className={styles.links}>
			<a href={link} target='_blank' rel='noreferrer' aria-label='GitHub Link'>
				<FiArrowUpRight size={24} />
			</a>
		</div>
	</div>
);

export default Card;
