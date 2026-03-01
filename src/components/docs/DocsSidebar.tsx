'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useMemo, useState } from 'react';
import { docsNav } from './nav';

// ─── Mobile Hamburger + Overlay ───────────────────────────────────────────────

export function DocsSidebar() {
	const [open, setOpen] = useState(false);
	const [query, setQuery] = useState('');
	const pathname = usePathname();

	const section = pathname.startsWith('/docs/components')
		? 'components'
		: pathname.startsWith('/docs/hooks')
			? 'hooks'
			: pathname.startsWith('/docs/extensions')
				? 'extensions'
				: pathname.startsWith('/docs/getting-started') ||
					  pathname === '/docs'
					? 'getting-started'
					: 'other';

	const visibleGroups = docsNav.filter((group) => {
		const firstHref = group.items[0]?.href ?? '';
		if (section === 'getting-started')
			return firstHref.startsWith('/docs/getting-started');
		if (section === 'components')
			return firstHref.startsWith('/docs/components');
		if (section === 'hooks') return firstHref.startsWith('/docs/hooks');
		if (section === 'extensions')
			return firstHref.startsWith('/docs/extensions');
		return true;
	});

	const filteredGroups = useMemo(() => {
		if (!query.trim()) return visibleGroups;
		const q = query.toLowerCase();
		return visibleGroups
			.map((group) => ({
				...group,
				items: group.items.filter(
					(item) =>
						item.label_es.toLowerCase().includes(q) ||
						item.label_en.toLowerCase().includes(q),
				),
			}))
			.filter((group) => group.items.length > 0);
	}, [visibleGroups, query]);

	const showSearch = section !== 'getting-started';

	const placeholder =
		section === 'hooks'
			? 'Buscar hook…'
			: section === 'extensions'
				? 'Buscar extensión…'
				: 'Buscar componente…';

	return (
		<>
			{/* ── Mobile toggle ── */}
			<button
				onClick={() => setOpen(true)}
				className='fixed left-4 top-4 z-40 flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-[#07070f]/80 text-zinc-400 backdrop-blur-sm transition-colors hover:text-white lg:hidden'>
				<svg
					className='h-4 w-4'
					fill='none'
					viewBox='0 0 24 24'
					stroke='currentColor'
					strokeWidth={2}>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						d='M4 6h16M4 12h16M4 18h16'
					/>
				</svg>
			</button>

			{/* ── Mobile backdrop ── */}
			{open && (
				<div
					className='fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden'
					onClick={() => setOpen(false)}
				/>
			)}

			{/* ── Sidebar panel ── */}
			<aside
				className={[
					'fixed left-0 top-0 z-50 flex h-full w-64 flex-col border-r border-white/8 bg-[#07070f] transition-transform duration-300',
					'lg:relative lg:z-auto lg:flex lg:h-full lg:translate-x-0 lg:overflow-y-auto',
					open
						? 'translate-x-0'
						: '-translate-x-full lg:translate-x-0',
				].join(' ')}>
				{/* Logo header */}
				<div className='flex items-center gap-2.5 border-b border-white/8 px-5 py-4'>
					<Link
						href='/'
						className='flex items-center gap-2 text-sm font-semibold text-white'>
						<Image
							src='/logo.png'
							alt='Kivora UI'
							width={22}
							height={22}
							className='rounded-md'
							priority
						/>
						<span>Kivora UI</span>
					</Link>
					<span className='ml-auto rounded-full border border-white/10 px-2 py-0.5 text-xs text-zinc-500'>
						docs
					</span>
					{/* Mobile close */}
					<button
						onClick={() => setOpen(false)}
						className='ml-1 flex h-7 w-7 items-center justify-center rounded-lg text-zinc-500 hover:text-white lg:hidden'>
						<svg
							className='h-4 w-4'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'
							strokeWidth={2}>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M6 18L18 6M6 6l12 12'
							/>
						</svg>
					</button>
				</div>

				{/* ── Search ── */}
				{showSearch && (
					<div className='sticky top-0 z-10 border-b border-white/8 bg-[#07070f] px-3 py-2.5'>
						<div className='relative'>
							<svg
								className='pointer-events-none absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-zinc-600'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'
								strokeWidth={2}>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0Z'
								/>
							</svg>
							<input
								type='text'
								value={query}
								onChange={(e) => setQuery(e.target.value)}
								placeholder={placeholder}
								className='w-full rounded-lg border border-white/8 bg-white/4 py-1.5 pl-8 pr-3 text-xs text-white outline-none placeholder:text-zinc-600 focus:border-brand/40 focus:bg-white/6'
							/>
							{query && (
								<button
									onClick={() => setQuery('')}
									className='absolute right-2.5 top-1/2 -translate-y-1/2 text-zinc-600 hover:text-zinc-400'>
									<svg
										className='h-3 w-3'
										fill='none'
										viewBox='0 0 24 24'
										stroke='currentColor'
										strokeWidth={2.5}>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											d='M6 18L18 6M6 6l12 12'
										/>
									</svg>
								</button>
							)}
						</div>
					</div>
				)}

				{/* Nav */}
				<nav className='flex-1 overflow-y-auto px-3 py-4 scrollbar-thin'>
					<div className='space-y-5'>
						{filteredGroups.length === 0 ? (
							<p className='px-2 py-4 text-center text-xs text-zinc-600'>
								Sin resultados para &ldquo;{query}&rdquo;
							</p>
						) : (
							filteredGroups.map((group) => (
								<div key={group.label_es}>
									<p className='mb-1.5 px-2 text-[10px] font-semibold uppercase tracking-widest text-zinc-600'>
										{group.label_es}
									</p>
									<ul className='space-y-0.5'>
										{group.items.map((item) => {
											const active =
												pathname === item.href ||
												pathname.startsWith(
													item.href + '/',
												);
											return (
												<li key={item.href}>
													<Link
														href={item.href}
														onClick={() =>
															setOpen(false)
														}
														className={[
															'flex items-center rounded-lg px-3 py-1.5 text-sm transition-colors',
															active
																? 'bg-brand/10 font-medium text-brand'
																: 'text-zinc-400 hover:bg-white/5 hover:text-white',
														].join(' ')}>
														{active && (
															<span className='mr-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand' />
														)}
														{item.label_es}
													</Link>
												</li>
											);
										})}
									</ul>
								</div>
							))
						)}
					</div>
				</nav>

				{/* Footer */}
				<div className='border-t border-white/8 px-4 py-3'>
					<a
						href='https://www.npmjs.com/package/@kivora/react'
						target='_blank'
						rel='noopener noreferrer'
						className='flex items-center gap-2 rounded-lg px-2 py-2 text-xs text-zinc-500 transition-colors hover:text-zinc-300'>
						<span className='h-1.5 w-1.5 rounded-full bg-green-400' />
						@kivora/react
					</a>
				</div>
			</aside>
		</>
	);
}
