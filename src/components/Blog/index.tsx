'use client';

// import { format } from 'date-fns';
import styles from '@css/blog.module.css';
import { allPosts, Post } from 'contentlayer/generated';
import Link from 'next/link';
import { format } from 'date-fns';

allPosts.sort((a, b) => (a.published < b.published ? 1 : -1));

const PostComponent = ({ slug, title, published }: Post) => (
	<Link className={styles.post} href={slug}>
		<h2>{title}</h2>
		<p>{format(new Date(published), 'dd/MM/yy')}</p>
	</Link>
);

const Posts = () => (
	<div className={styles.posts}>
		{allPosts.map((post, index) => (
			<PostComponent {...post} key={index} />
		))}
	</div>
);

const Blog = () => (
	<div className={styles.container}>
		<div className={styles.writing}>
			<div>
				<h1>Blog</h1>
				<p>Learning things, and then teaching others.</p>
			</div>
		</div>
		<Posts />
	</div>
);

export default Blog;
