import RSS from 'rss';
import { allPosts } from 'contentlayer/generated';

// eslint-disable-next-line import/prefer-default-export
export async function GET() {
	const feed = new RSS({
		title: 'Matthew Bramich',
		description: "Matthew Bramich's Blog",
		generator: 'RSS for Node and Next.js',
		feed_url: 'https://mjbramich.dev/feed.xml',
		site_url: 'https://mjbramich.dev/',
		managingEditor: 'Matthew Bramich',
		webMaster: 'Matthew Bramich',
		copyright: `Copyright ${new Date().getFullYear().toString()}, Matthew Bramich`,
		language: 'en-AU',
		pubDate: new Date().toUTCString(),
		ttl: 60
	});

	if (allPosts) {
		allPosts.map((post) =>
			feed.item({
				title: post.title,
				description: post.description,
				url: `https://mjbramich.dev${post.slug}`,
				author: 'Matthew Bramich',
				date: post.published
			})
		);
	}

	return new Response(feed.xml(), {
		headers: {
			'Content-Type': 'application/xml; chartset=utf-8'
		}
	});
}
