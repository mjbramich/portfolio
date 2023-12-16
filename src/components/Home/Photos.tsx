'use client';

import Image from 'next/image';
import { FC } from 'react';
import styles from '@css/home.module.css';
import blurDataURL from '@lib/blurDataUrl';

const images = [
	{
		alt: 'Two rusty red bridges lined evenly on top of a large river',
		color: blurDataURL(131, 140, 155)
	},
	{
		alt: 'A wall and a pillar with intricate designs and carvings',
		color: blurDataURL(154, 207, 229)
	},
	{
		alt: 'A very large tower with a skydeck',
		color: blurDataURL(18, 112, 159)
	},
	{
		alt: 'A creek flowing through a forest on a sunny autumn day',
		color: blurDataURL(112, 126, 137)
	}
];

const Photos: FC = () => (
	<div className={styles.gallery}>
		{images.map((image, index) => (
			<Image
				src={`/photos/@mjbramich/${index + 1}.jpg`}
				key={index}
				width={265}
				height={325}
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
