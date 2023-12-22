import { defineDocumentType, makeSource } from 'contentlayer/source-files';

export const Post = defineDocumentType(() => ({
	name: 'Post',
	filePathPattern: `**/*.mdx`,
	contentType: 'mdx',
	fields: {
		title: { type: 'string', required: true },
		description: { type: 'string', required: true },
		published: { type: 'string', required: true }
	},
	computedFields: {
		// example slug: /blog/post1
		// eslint-disable-next-line no-underscore-dangle
		slug: { type: 'string', resolve: (post) => `/blog/${post._raw.flattenedPath}` }
	}
}));

export default makeSource({ contentDirPath: 'content/posts', documentTypes: [Post] });
