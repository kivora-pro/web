import { DocsSidebar } from '@/components/docs/DocsSidebar';
import { DocsTopBar } from '@/components/docs/DocsTopBar';
import { Toaster } from '@kivora/react';
import '@kivora/react/styles.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Kivora UI — Documentación',
	description:
		'Documentación de componentes, hooks y extensiones de Kivora UI. Una librería para React, React Native, Solid, Svelte y Vite.',
};

export default function DocsLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className='flex h-screen overflow-hidden bg-[#07070f]'>
			{/* Sidebar — scrolls independently */}
			<DocsSidebar />

			{/* Right column: topbar pinned + content scrolls */}
			<div className='flex min-w-0 flex-1 flex-col overflow-hidden'>
				<DocsTopBar />
				<main className='flex-1 overflow-y-auto px-4 py-8 md:px-8 lg:px-12'>
					{children}
				</main>
			</div>

			<Toaster
				richColors
				position='bottom-right'
			/>
		</div>
	);
}
