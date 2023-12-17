'use client';

import { FC, useEffect, useState } from 'react';
import styles from '@css/common.module.css';
import useWindowSize, { Size } from '@lib/hooks/useWindowSize';

const Footer: FC = () => {
	const size: Size = useWindowSize();

	const [time, setTime] = useState<Date>(new Date());
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
		setInterval(() => setTime(new Date()), 1000);
	}, []);

	if (!mounted) return null;

	return (
		<footer className={styles.footer}>
			<hr className={styles.hr} />
			<div className={styles.container}>
				<p className={styles.date}>
					<a
						href='https://www.google.com/maps/place/Melbourne+VIC/@-37.9725665,145.0531353,9z/data=!3m1!4b1!4m6!3m5!1s0x6ad646b5d2ba4df7:0x4045675218ccd90!8m2!3d-37.8136276!4d144.9630576!16zL20vMGNoZ3pt?entry=ttu'
						target='_blank'
						rel='noreferrer'
						className={styles.location}
					>
						{typeof size.width !== 'undefined' && size.width > 767 ? 'Melbourne, VIC' : 'MEL'}
					</a>
					<span className={styles.separator}>•</span>
					{typeof size.width !== 'undefined' && size.width > 767
						? time.toLocaleString('en-AU', {
								hour: 'numeric',
								minute: 'numeric',
								second: 'numeric',
								day: 'numeric',
								month: 'short',
								timeZone: 'Australia/Melbourne'
							})
						: time.toLocaleString('en-AU', {
								hour: 'numeric',
								minute: 'numeric',
								day: 'numeric',
								month: 'numeric',
								timeZone: 'Australia/Melbourne'
							})}
				</p>
				<p className={styles.date}>
					© {new Date().getFullYear()} Matthew Bramich. All rights reserved.
				</p>
			</div>
		</footer>
	);
};

export default Footer;
