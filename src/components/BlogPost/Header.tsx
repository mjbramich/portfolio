'use client';

import { FC, useEffect, useState } from 'react';
import styles from '@css/slug.module.css';
// import { format } from 'date-fns';
import { Post } from 'contentlayer/generated';
import { FiLink, FiBookOpen } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { format } from 'date-fns';

const Copy: FC<{ slug: string }> = ({ slug }) => {
	const [visible, setVisible] = useState(false);
	const [copied, setCopied] = useState(false);

	useEffect(() => {
		if (copied) setTimeout(() => setCopied(false), 1000);
	}, [copied]);

	const copy = () => {
		setCopied(true);
		navigator.clipboard.writeText(`https://mjbramich${slug}`);
	};

	return (
		<div className={styles.button_wrapper}>
			<AnimatePresence>
				{visible && (
					<motion.div
						className={styles.tooltip}
						initial={{ y: 10, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						exit={{ y: 10, opacity: 0 }}
					>
						<p>{copied ? 'Copied' : 'Copy URL'}</p>
					</motion.div>
				)}
			</AnimatePresence>
			<button
				aria-label='Copy Link'
				onClick={copy}
				onMouseEnter={() => setVisible(true)}
				onMouseLeave={() => setVisible(false)}
				type='button'
			>
				<FiLink />
			</button>
		</div>
	);
};

const Header = ({ title, published, slug, readingTime }: Post) => (
	<header className={styles.header}>
		<div>
			<h1 className={styles.title}>{title}</h1>
			<div className={styles.info}>
				<p>{format(new Date(published), 'dd/MM/yyyy')}</p>

				<span>·</span>
				<div className={styles.time}>
					<FiBookOpen />
					<p>{readingTime.text}</p>
				</div>
			</div>
		</div>
		<Copy slug={slug} />
	</header>
);

export default Header;
