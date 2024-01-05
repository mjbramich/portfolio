import type { NextPage } from 'next';
import Image from 'next/image';
import { Layout } from '@components/Layout';
import styles from '@css/common.module.css';
import blurDataURL from '@lib/blurDataUrl';

const Error: NextPage = () => (
	<Layout>
		<div className={styles.error_wrapper}>
			<div>
				<h1>404 — not found.</h1>
				<p className={styles.paragraph}>
					I don&apos;t know what you&apos;re looking for, but it ain&apos;t here.
				</p>
				<p className={styles.paragraph}>
					If the link is broken, I&apos;d really appreciate if you sent me an{' '}
					<a href='mailto:mjbramich6@gmail.com' target='_blank' rel='noreferrer'>
						email
					</a>{' '}
					so I could fix it.
				</p>

				<div className={styles.image}>
					<Image
						src='/photos/@mjbramich/5.jpg'
						alt='A tortoise on the sidewalk'
						draggable={false}
						priority
						fill
						placeholder='blur'
						blurDataURL={blurDataURL(198, 206, 206)}
					/>
				</div>
			</div>
		</div>
	</Layout>
);

export default Error;
