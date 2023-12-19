import styles from '@css/work.module.css';

import Card from './Card';
import { projects } from './data';

const CardList = () => (
	<div className={styles.list}>
		{projects.map((project) => (
			<Card key={project.title} {...project} />
		))}
	</div>
);

export default CardList;
