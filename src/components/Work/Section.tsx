import styles from '@css/work.module.css';
import { FiArrowRight } from 'react-icons/fi';

type Extend = {
	title: string;
	href: string;
};

type SectionProps = {
	title: string;
	children: React.ReactNode;
	extend: Extend;
};
const Section = ({ title, children, extend }: SectionProps) => (
	<section className={styles.section}>
		<h2 className={styles.title}>{title}</h2>

		<div className={styles.content}>
			{children}
			{extend && (
				<a className={styles.extend} href={extend.href} rel='noreferrer'>
					{extend.title}
					<FiArrowRight />
				</a>
			)}
		</div>
	</section>
);

export default Section;
