import { useMDXComponent } from 'next-contentlayer/hooks';
import { Post } from 'contentlayer/generated';
import styles from '@css/slug.module.css';
import { Layout } from '@components/Layout';
import Footer from './Footer';
import Header from './Header';

type Props = {
	index: number;
	post: Post;
};

const BlogPost = ({ index, post }: Props) => {
	// Parse the MDX file via the useMDXComponent hook.
	const MDXContent = useMDXComponent(post.body.code);
	return (
		<Layout>
			<div className={styles.box}>
				<article className={styles.section}>
					<Header {...post} />
					<div className={styles.blog}>
						<MDXContent />
					</div>
				</article>
			</div>
			<Footer index={index} />
		</Layout>
	);
};

export default BlogPost;
