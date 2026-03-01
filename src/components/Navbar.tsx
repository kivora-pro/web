import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import Link from 'next/link';
import { DocsNavLinks } from './DocsNavLinks';

export async function Navbar() {
	const t = await getTranslations('navbar');

	const DOC_LINKS = [
		{ label: t('components'), href: '/docs/components' },
		{ label: t('hooks'), href: '/docs/hooks' },
		{ label: t('extensions'), href: '/docs/extensions' },
	];

	const OTHER_LINKS = [
		{ label: t('showcase'), href: '/showcase' },
		{ label: t('roadmap'), href: '/roadmap' },
	];

	return (
		<header className='fixed top-4 left-0 right-0 z-50 flex justify-center px-4'>
			<nav className='flex items-center gap-1 rounded-full border border-white/10 bg-[#07070f]/70 px-2 py-2 shadow-lg shadow-black/30 backdrop-blur-xl'>
				{/* Logo */}
				<Link
					href='/'
					className='flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-semibold text-white outline-none transition-colors hover:bg-white/8'>
					<Image
						src='/logo.png'
						alt='Kivora UI'
						width={20}
						height={20}
						className='rounded-md'
						priority
					/>
					<span className='hidden sm:inline'>Kivora UI</span>
				</Link>

				{/* Divider */}
				<div className='mx-1 h-4 w-px bg-white/10' />

				{/* Docs section links (with active state) */}
				<DocsNavLinks links={DOC_LINKS} />

				{/* Divider */}
				<div className='mx-1 h-4 w-px bg-white/10' />

				{/* Other links */}
				{OTHER_LINKS.map((link) => (
					<Link
						key={link.href}
						href={link.href}
						className='rounded-full px-3.5 py-1.5 text-xs font-medium text-white/70 transition-colors hover:bg-white/10 hover:text-white'>
						{link.label}
					</Link>
				))}

				{/* Divider */}
				<div className='mx-1 h-4 w-px bg-white/10' />

				{/* GitHub */}
				<a
					href='https://github.com'
					target='_blank'
					rel='noopener noreferrer'
					aria-label='GitHub'
					className='flex h-8 w-8 items-center justify-center rounded-full text-zinc-500 transition-colors hover:bg-white/8 hover:text-white'>
					<svg
						viewBox='0 0 24 24'
						className='h-4 w-4'
						fill='currentColor'>
						<path d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z' />
					</svg>
				</a>

				{/* npm badge */}
				<a
					href='https://www.npmjs.com/package/@kivora/react'
					target='_blank'
					rel='noopener noreferrer'
					className='hidden items-center gap-1.5 rounded-full border border-white/10 px-3 py-1.5 text-xs font-medium text-zinc-400 transition-colors hover:border-white/20 hover:text-white sm:flex'>
					<span className='h-1.5 w-1.5 rounded-full bg-green-400' />
					npm
				</a>

				{/* CTA */}
				<Link
					href='/docs/getting-started'
					className='rounded-full px-4 py-1.5 text-xs font-semibold text-white transition-opacity hover:opacity-80'
					style={{
						background:
							'linear-gradient(135deg,#7c3aed 0%,#6366f1 100%)',
					}}>
					{t('getStarted')}
				</Link>
			</nav>
		</header>
	);
}
