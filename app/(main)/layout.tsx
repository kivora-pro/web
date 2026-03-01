import { Navbar } from '@/components/Navbar';
import { Toaster } from '@kivora/react';
import '@kivora/react/styles.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Kivora UI — Multi-framework Component Library',
	description:
		'One component library for React, React Native, Solid, Svelte and Vite. Identical APIs, perfect accessibility, zero compromise.',
};

export default function MainLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<Navbar />
			{children}
			<Toaster
				richColors
				position='bottom-right'
			/>
		</>
	);
}
