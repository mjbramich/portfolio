'use client';

import Image from 'next/image';
import { FC } from 'react';
import styles from '@css/home.module.css';
import blurDataURL from '@lib/blurDataUrl';

const images = [
	{
		alt: 'Selfie of myself in front of the London eye',
		color: blurDataURL(131, 140, 155)
	},
	{
		alt: 'Riding a motorcycle along the scenic roads of Greece, enjoying the breathtaking landscapes.',
		color: blurDataURL(154, 207, 229)
	},
	{
		alt: 'Up front at The strokes concert in Melbourne',
		color: blurDataURL(18, 112, 159)
	},
	{
		alt: 'Enjoying a Ice cream in the middle of the city',
		color: blurDataURL(112, 126, 137)
	}
];

const Photos: FC = () => (
	<div className={styles.gallery}>
		{images.map((image, index) => (
			<Image
				src={`/photos/@mjbramich/${1 + index}.jpg`}
				key={index}
				width={1266}
				height={2400}
				alt={image.alt}
				draggable={false}
				priority
				placeholder='blur'
				blurDataURL={image.color}
				style={{ zIndex: index, marginTop: index % 2 === 0 ? -10 : 10 }}
			/>
		))}
	</div>
);

export default Photos;
