import { defineDocumentType, makeSource } from 'contentlayer/source-files';

export const Post = defineDocumentType(() => ({
	name: 'Post',
	filePathPattern: `**/*.mdx`,
	fields: {
		title: { type: 'string', required: true },
		date: { type: 'date', required: true }
	},
	computedFields: {
		// eslint-disable-next-line no-underscore-dangle
		slug: { type: 'string', resolve: (post) => `/blog/${post._raw.flattenedPath}` }
	}
}));

export default makeSource({ contentDirPath: 'content/posts', documentTypes: [Post] });
