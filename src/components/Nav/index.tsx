'use client';

import { FC } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from '@css/common.module.css';

type Items = { [index: string]: Item };

type Item = {
	name: string;
	x: number;
	w: string;
};

const items: Items = {
	'/': { name: 'Home', x: 0, w: '77.95px' },
	'/projects': { name: 'Projects', x: 77.95, w: '93.78px' },
	'/blog': { name: 'Blog', x: 171.73, w: '69.31px' }
};

const Nav: FC = () => {
	let pathname = usePathname() || '/';
	if (pathname.includes('/blog/')) pathname = '/blog';
	else if (pathname === '/404' || pathname === '/_not-found') pathname = '/';

	return (
		<nav className={styles.nav}>
			<div className={styles.blur} />
			<div className={styles.box}>
				{Object.entries(items).map(([path, { name, w }]) => (
					<Link key={path} href={path} className={styles.link}>
						{name}
						{items[pathname].name === name && (
							<motion.div
								className={styles.bar}
								layoutId='bar'
								aria-hidden
								transition={{ type: 'spring', stiffness: 700, damping: 30 }}
								style={{ width: w }}
							/>
						)}
					</Link>
				))}
			</div>
		</nav>
	);
};

export default Nav;
