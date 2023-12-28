'use client';

import { FC, useState } from 'react';
import styles from '@css/home.module.css';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronRight } from 'react-icons/fi';
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

const variants = {
	enter: (direction: number) => ({
		x: direction > 0 ? 1000 : -1000,
		opacity: 0
	}),
	center: {
		zIndex: 1,
		x: 0,
		opacity: 1
	},
	exit: (direction: number) => ({
		zIndex: 0,
		x: direction < 0 ? 1000 : -1000,
		opacity: 0
	})
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => Math.abs(offset) * velocity;

const Gallery: FC = () => {
	const [[page, direction], setPage] = useState([0, 0]);

	// Ensure page stays within the valid range
	const imageIndex = ((page % images.length) + images.length) % images.length;
	const paginate = (newDirection: number) => setPage([page + newDirection, newDirection]);

	return (
		<div className={styles.slides}>
			<AnimatePresence initial={false} custom={direction}>
				<motion.img
					key={page}
					src={`/photos/@mjbramich/${imageIndex + 1}.jpg`}
					alt={images[imageIndex].alt}
					custom={direction}
					variants={variants}
					initial='enter'
					animate='center'
					exit='exit'
					transition={{
						x: { type: 'spring', stiffness: 300, damping: 30 },
						opacity: { duration: 0.2 }
					}}
					drag='x'
					dragConstraints={{ left: 0, right: 0 }}
					dragElastic={1}
					onDragEnd={(e, { offset, velocity }) => {
						const swipe = swipePower(offset.x, velocity.x);
						if (swipe < -swipeConfidenceThreshold) paginate(1);
						else if (swipe > swipeConfidenceThreshold) paginate(-1);
					}}
					loading='eager'
				/>
			</AnimatePresence>
			<button className={styles.next} onClick={() => paginate(1)} aria-label='Next' type='button'>
				<FiChevronRight />
			</button>
			<button className={styles.prev} onClick={() => paginate(-1)} aria-label='Back' type='button'>
				<FiChevronRight />
			</button>
		</div>
	);
};

export default Gallery;
