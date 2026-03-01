import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Kivora UI — Multi-framework Component Library',
	description:
		'One component library for React, React Native, Solid, Svelte and Vite. Identical APIs, perfect accessibility, zero compromise.',
};

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const locale = await getLocale();
	const messages = await getMessages();

	return (
		<html
			lang={locale}
			className={`${geistSans.variable} ${geistMono.variable}`}>
			<body className='antialiased'>
				<NextIntlClientProvider
					locale={locale}
					messages={messages}>
					{children}
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
