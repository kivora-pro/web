'use client';

import { useLocale } from '@/app/(main)/i18n';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NAV_LINKS = [
	{ href: '/docs', label: 'Docs' },
	{ href: '/components', label: 'Components' },
	{ href: '/hooks', label: 'Hooks' },
	{ href: '/theming', label: 'Theming' },
	{ href: '/extensions', label: 'Extensions' },
	{ href: '/roadmap', label: 'Roadmap' },
];

export default function Navbar() {
	const pathname = usePathname();
	const { locale, setLocale } = useLocale();

	return (
		<header
			className='fixed top-0 inset-x-0 z-50 flex items-center justify-between px-6 md:px-10 h-14 border-b border-white/6'
			style={{
				background: 'rgba(9,9,11,0.85)',
				backdropFilter: 'blur(12px)',
			}}>
			<Link
				href='/'
				className='flex items-center gap-2.5'>
				<div
					className='w-6 h-6 rounded-md flex items-center justify-center'
					style={{
						background: 'linear-gradient(135deg, #7c3aed, #06b6d4)',
					}}>
					<span className='text-white text-[10px] font-bold'>K</span>
				</div>
				<span className='font-semibold text-white text-sm tracking-tight'>
					kivora ui
				</span>
			</Link>
			<nav className='hidden md:flex items-center gap-5 text-sm text-zinc-500'>
				{NAV_LINKS.map((l) => (
					<Link
						key={l.href}
						href={l.href}
						className={
							pathname === l.href
								? 'text-zinc-200 font-medium transition-colors'
								: 'hover:text-zinc-300 transition-colors'
						}>
						{l.label}
					</Link>
				))}
				<div className='flex items-center gap-2 ml-2'>
					<button
						onClick={() => setLocale(locale === 'en' ? 'es' : 'en')}
						className='px-3 py-1 rounded-md text-xs font-mono border border-white/10 text-zinc-400 hover:text-zinc-200 hover:border-white/25 transition-all'
						style={{ background: 'rgba(255,255,255,0.04)' }}>
						{locale === 'en' ? 'ES' : 'EN'}
					</button>
					<Link
						href='/getting-started'
						className='px-4 py-1.5 rounded-lg text-xs text-white font-medium transition-all hover:scale-105'
						style={{
							background:
								'linear-gradient(135deg, #7c3aed, #06b6d4)',
						}}>
						Get started
					</Link>
				</div>
			</nav>
		</header>
	);
}
