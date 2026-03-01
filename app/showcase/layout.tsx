import { Toaster } from '@kivora/react';
import '@kivora/react/styles.css';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
	title: 'Showcase — Kivora UI',
	description:
		'Ejemplos reales construidos con @kivora/react: plataforma OTT y panel CMS.',
};

export default function ShowcaseLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			{/* Slim top bar */}
			<div className='fixed left-0 right-0 top-0 z-50 flex h-10 items-center border-b border-white/8 bg-[#07070f]/90 px-4 backdrop-blur-md'>
				<Link
					href='/showcase'
					className='flex items-center gap-2 text-xs font-medium text-zinc-500 transition-colors hover:text-zinc-300'>
					<svg
						className='h-3.5 w-3.5'
						fill='none'
						viewBox='0 0 24 24'
						stroke='currentColor'
						strokeWidth={2}>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M15 19l-7-7 7-7'
						/>
					</svg>
					Showcase
				</Link>

				<div className='mx-3 h-3.5 w-px bg-white/10' />

				<nav className='flex items-center gap-0.5'>
					{[
						{ label: 'OTT · Streaming', href: '/showcase/ott' },
						{ label: 'CMS · Dashboard', href: '/showcase/cms' },
						{ label: 'Kanban · Tasks', href: '/showcase/kanban' },
						{
							label: 'E-commerce · Tienda',
							href: '/showcase/ecommerce',
						},
					].map((item) => (
						<Link
							key={item.href}
							href={item.href}
							className='rounded-md px-3 py-1 text-xs text-zinc-500 transition-colors hover:bg-white/6 hover:text-zinc-200'>
							{item.label}
						</Link>
					))}
				</nav>

				<div className='ml-auto flex items-center gap-2'>
					<span className='rounded-full border border-white/8 px-2 py-0.5 text-[10px] text-zinc-600'>
						powered by{' '}
						<span className='font-mono text-zinc-400'>
							@kivora/react
						</span>
					</span>
					<Link
						href='/'
						className='rounded-md px-2.5 py-1 text-xs text-zinc-600 transition-colors hover:text-zinc-400'>
						← Inicio
					</Link>
				</div>
			</div>

			{children}

			<Toaster
				richColors
				position='bottom-right'
			/>
		</>
	);
}
