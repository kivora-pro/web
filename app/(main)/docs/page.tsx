'use client';

import Navbar from '@/src/components/Navbar';
import Link from 'next/link';

const sections = [
	{
		title: 'Getting Started',
		description:
			'Install Kivora UI and write your first component in minutes.',
		href: '/getting-started',
		icon: (
			<svg
				className='w-5 h-5'
				viewBox='0 0 24 24'
				fill='none'
				stroke='currentColor'
				strokeWidth='1.8'>
				<path
					strokeLinecap='round'
					strokeLinejoin='round'
					d='M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.966 8.966 0 00-6 2.292m0-14.25v14.25'
				/>
			</svg>
		),
	},
	{
		title: 'Components',
		description:
			'Explore every component with live examples and full API reference.',
		href: '/components',
		icon: (
			<svg
				className='w-5 h-5'
				viewBox='0 0 24 24'
				fill='none'
				stroke='currentColor'
				strokeWidth='1.8'>
				<path
					strokeLinecap='round'
					strokeLinejoin='round'
					d='M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.39 48.39 0 01-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 01-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 00-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 01-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 00.657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 005.427-.63 48.05 48.05 0 00.582-4.717.532.532 0 00-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.959.401v0a.656.656 0 00.658-.663 48.422 48.422 0 00-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 01-.61-.58v0z'
				/>
			</svg>
		),
	},
	{
		title: 'Hooks',
		description:
			'Utility hooks like useClipboard, useTheme and more to power your UI.',
		href: '/hooks',
		icon: (
			<svg
				className='w-5 h-5'
				viewBox='0 0 24 24'
				fill='none'
				stroke='currentColor'
				strokeWidth='1.8'>
				<path
					strokeLinecap='round'
					strokeLinejoin='round'
					d='M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5'
				/>
			</svg>
		),
	},
	{
		title: 'Theming',
		description:
			'Customise design tokens, dark mode and CSS variables across every framework.',
		href: '/theming',
		icon: (
			<svg
				className='w-5 h-5'
				viewBox='0 0 24 24'
				fill='none'
				stroke='currentColor'
				strokeWidth='1.8'>
				<path
					strokeLinecap='round'
					strokeLinejoin='round'
					d='M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008z'
				/>
			</svg>
		),
	},
	{
		title: 'Extensions',
		description:
			'Community extensions and integrations that plug into the Kivora ecosystem.',
		href: '/extensions',
		icon: (
			<svg
				className='w-5 h-5'
				viewBox='0 0 24 24'
				fill='none'
				stroke='currentColor'
				strokeWidth='1.8'>
				<path
					strokeLinecap='round'
					strokeLinejoin='round'
					d='M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z'
				/>
			</svg>
		),
	},
	{
		title: 'Roadmap',
		description:
			"See what's coming next — planned features, framework support and release milestones.",
		href: '/roadmap',
		icon: (
			<svg
				className='w-5 h-5'
				viewBox='0 0 24 24'
				fill='none'
				stroke='currentColor'
				strokeWidth='1.8'>
				<path
					strokeLinecap='round'
					strokeLinejoin='round'
					d='M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z'
				/>
			</svg>
		),
	},
];

export default function DocsPage() {
	return (
		<div className='min-h-screen bg-[#09090b] text-zinc-100'>
			<Navbar />

			{/* Content */}
			<main className='pt-28 pb-24 px-6 max-w-4xl mx-auto'>
				{/* Hero */}
				<div className='mb-16'>
					<div
						className='inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold tracking-widest uppercase mb-6 border border-white/10 text-zinc-400'
						style={{ background: 'rgba(255,255,255,0.04)' }}>
						Documentation
					</div>
					<h1 className='text-4xl md:text-5xl font-bold text-white mb-4 leading-tight'>
						Everything you need
						<br />
						<span
							className='bg-clip-text text-transparent'
							style={{
								backgroundImage:
									'linear-gradient(135deg, #7c3aed, #06b6d4)',
							}}>
							to build with Kivora
						</span>
					</h1>
					<p className='text-zinc-400 text-lg max-w-2xl'>
						Comprehensive guides, API references and examples for
						every component across all supported frameworks.
					</p>
				</div>

				{/* Quick search (visual only) */}
				<div className='mb-14'>
					<div
						className='flex items-center gap-3 px-4 py-3 rounded-xl border border-white/10 text-zinc-500 text-sm w-full max-w-lg'
						style={{ background: 'rgba(255,255,255,0.04)' }}>
						<svg
							className='w-4 h-4 shrink-0'
							viewBox='0 0 24 24'
							fill='none'
							stroke='currentColor'
							strokeWidth='2'>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607z'
							/>
						</svg>
						<span>Search docs…</span>
						<span
							className='ml-auto shrink-0 font-mono text-xs border border-white/10 px-1.5 py-0.5 rounded'
							style={{ background: 'rgba(255,255,255,0.06)' }}>
							⌘K
						</span>
					</div>
				</div>

				{/* Sections grid */}
				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
					{sections.map((s) => (
						<Link
							key={s.href}
							href={s.href}
							className='group flex flex-col gap-3 p-5 rounded-2xl border border-white/8 hover:border-white/20 transition-all hover:scale-[1.02]'
							style={{ background: 'rgba(255,255,255,0.03)' }}>
							<div
								className='w-9 h-9 rounded-xl flex items-center justify-center border border-white/10 text-zinc-400 group-hover:text-violet-400 group-hover:border-violet-500/30 transition-colors'
								style={{
									background: 'rgba(255,255,255,0.05)',
								}}>
								{s.icon}
							</div>
							<div>
								<p className='text-sm font-semibold text-zinc-200 group-hover:text-white transition-colors mb-1'>
									{s.title}
								</p>
								<p className='text-xs text-zinc-500 leading-relaxed'>
									{s.description}
								</p>
							</div>
							<div className='mt-auto flex items-center gap-1 text-xs text-violet-400 opacity-0 group-hover:opacity-100 transition-opacity'>
								<span>Explore</span>
								<svg
									className='w-3 h-3'
									viewBox='0 0 24 24'
									fill='none'
									stroke='currentColor'
									strokeWidth='2.5'>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										d='M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3'
									/>
								</svg>
							</div>
						</Link>
					))}
				</div>

				{/* Bottom CTA */}
				<div
					className='mt-20 rounded-2xl border border-white/8 p-8 flex flex-col md:flex-row items-start md:items-center gap-6'
					style={{
						background:
							'linear-gradient(135deg, rgba(124,58,237,0.08), rgba(6,182,212,0.08))',
					}}>
					<div className='flex-1'>
						<p className='text-sm font-semibold text-zinc-200 mb-1'>
							Missing something?
						</p>
						<p className='text-xs text-zinc-500'>
							Open an issue or start a discussion on GitHub — the
							community is always happy to help.
						</p>
					</div>
					<a
						href='https://github.com/kivora-ui/kivora'
						target='_blank'
						rel='noopener noreferrer'
						className='shrink-0 px-4 py-2 rounded-lg text-xs font-semibold text-white border border-white/10 hover:border-white/25 transition-all'
						style={{ background: 'rgba(255,255,255,0.07)' }}>
						GitHub →
					</a>
				</div>
			</main>
		</div>
	);
}
