import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@css/globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	metadataBase: new URL('https://mjbramich.dev'),
	title: { default: 'Matthew Bramich', template: '%s — Matthew Bramich' },
	creator: 'Matthew Bramich',
	publisher: 'Matthew Bramich',
	description: 'Building tools and polished user interactions.',
	keywords: ['Matthew Bramich', 'mjbramich', 'mjbramich developer'],
	authors: [{ name: 'Matthew Bramich', url: 'https://mjbramich.dev' }],
	openGraph: {
		title: 'Matthew Bramich',
		description: 'Building tools and polished user interactions.',
		url: 'https://mjbramich.dev',
		siteName: 'Matthew Bramich',
		images: [
			{ url: '/og.png', width: 1200, height: 630 },
			{
				url: '/og-alt.png',
				width: 1200,
				height: 630,
				alt: 'A black background with the text "Matthew Bramich" in the center'
			}
		],
		locale: 'en-AU',
		type: 'website'
	},
	robots: {
		index: true,
		follow: true,
		nocache: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1
		}
	},
	icons: {
		icon: '/favicon/favicon.png',
		shortcut: '/favicon/shortcut.png',
		apple: [{ url: '/favicon/apple-touch-icon.png' }],
		other: {
			rel: 'apple-touch-icon-precomposed',
			url: '/favicon/apple-touch-icon-precomposed.png'
		}
	},

	twitter: {
		card: 'summary_large_image',
		title: 'Matthew Bramich',
		description: 'Building tools and polished user interactions.',
		siteId: 'mjbramich',
		creator: '@mjbramich',
		creatorId: 'mjbramich',
		images: {
			url: '/og.png',
			alt: 'A light background with "Matthew Bramich" written across the center'
		}
	}
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<Nav />
				{children}
				<Footer />
			</body>
		</html>
	);
}
