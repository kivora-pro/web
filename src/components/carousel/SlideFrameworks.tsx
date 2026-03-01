'use client';

import { useTranslations } from 'next-intl';

const frameworks = [
	{
		name: 'React',
		pkg: '@kivora/react',
		color: '#61dafb',
		bg: 'rgba(97,218,251,0.07)',
		border: 'rgba(97,218,251,0.18)',
		icon: (
			<svg
				viewBox='0 0 24 24'
				className='h-9 w-9'
				fill='#61dafb'>
				<circle
					cx='12'
					cy='12'
					r='2.05'
				/>
				<g
					stroke='#61dafb'
					strokeWidth='1.2'
					fill='none'>
					<ellipse
						rx='10'
						ry='4'
						cx='12'
						cy='12'
					/>
					<ellipse
						rx='10'
						ry='4'
						cx='12'
						cy='12'
						transform='rotate(60 12 12)'
					/>
					<ellipse
						rx='10'
						ry='4'
						cx='12'
						cy='12'
						transform='rotate(120 12 12)'
					/>
				</g>
			</svg>
		),
		status: 'available' as const,
	},
	{
		name: 'React Native',
		pkg: '@kivora/react-native',
		color: '#61dafb',
		bg: 'rgba(97,218,251,0.05)',
		border: 'rgba(97,218,251,0.12)',
		icon: (
			<svg
				viewBox='0 0 24 24'
				className='h-9 w-9'
				fill='none'>
				<rect
					x='5'
					y='2'
					width='14'
					height='20'
					rx='3'
					stroke='#61dafb'
					strokeWidth='1.4'
				/>
				<circle
					cx='12'
					cy='18'
					r='1'
					fill='#61dafb'
				/>
			</svg>
		),
		status: 'inDevelopment' as const,
	},
	{
		name: 'Solid',
		pkg: '@kivora/solid',
		color: '#4f80d4',
		bg: 'rgba(79,128,212,0.07)',
		border: 'rgba(79,128,212,0.18)',
		icon: (
			<svg
				viewBox='0 0 24 24'
				className='h-9 w-9'
				fill='none'>
				<path
					d='M4 6l8-3 8 3-8 3-8-3z'
					fill='#4f80d4'
				/>
				<path
					d='M4 12l8-3 8 3-8 3-8-3z'
					fill='#4f80d4'
					opacity='.7'
				/>
				<path
					d='M4 18l8-3 8 3-8 3-8-3z'
					fill='#4f80d4'
					opacity='.4'
				/>
			</svg>
		),
		status: 'inDevelopment' as const,
	},
	{
		name: 'Svelte',
		pkg: '@kivora/svelte',
		color: '#ff7b5c',
		bg: 'rgba(255,62,0,0.07)',
		border: 'rgba(255,62,0,0.16)',
		icon: (
			<svg
				viewBox='0 0 24 24'
				className='h-9 w-9'
				fill='none'>
				<path
					d='M20.5 5.5C18.5 2 14.2 1 11 3L5 7c-3.2 2-4.1 6.3-2 9.3.7 1 1.6 1.8 2.7 2.3L5 20l3.5-1c1 .3 2 .4 3 .2l6-4c3.2-2 4.1-6.3 2-9.3z'
					stroke='#ff7b5c'
					strokeWidth='1.3'
				/>
			</svg>
		),
		status: 'inDevelopment' as const,
	},
	{
		name: 'Vite',
		pkg: '@kivora/vite',
		color: '#a78bfa',
		bg: 'rgba(167,139,250,0.07)',
		border: 'rgba(167,139,250,0.18)',
		icon: (
			<svg
				viewBox='0 0 24 24'
				className='h-9 w-9'
				fill='none'>
				<path
					d='M21 3L12 21 9 14 3 11 21 3z'
					stroke='#a78bfa'
					strokeWidth='1.4'
					strokeLinejoin='round'
				/>
			</svg>
		),
		status: 'inDevelopment' as const,
	},
];

export function SlideFrameworks() {
	const t = useTranslations('frameworks');
	return (
		<div className='relative h-full w-full overflow-hidden'>
			<div className='relative z-10 flex h-full w-full items-center justify-center px-8 lg:px-24'>
				<div className='w-full max-w-5xl'>
					{/* Header */}
					<div className='text-center'>
						<span className='inline-flex items-center gap-1.5 rounded-full border border-violet-500/20 bg-violet-500/8 px-3 py-1 text-xs font-semibold tracking-widest text-violet-400 uppercase'>
							<span className='h-1.5 w-1.5 rounded-full bg-violet-400' />
							{t('label')}
						</span>
						<h2 className='mt-5 text-4xl font-black leading-tight tracking-tight text-white lg:text-6xl xl:text-7xl'>
							{t('title')}{' '}
							<span
								className='bg-clip-text text-transparent'
								style={{
									backgroundImage:
										'linear-gradient(120deg,#c4b5fd 0%,#7c3aed 40%,#818cf8 100%)',
								}}>
								{t('titleHighlight')}
							</span>
						</h2>
						<p className='mt-4 text-base text-zinc-400 lg:text-lg'>
							{t('description')}
						</p>
					</div>

					{/* Framework cards */}
					<div className='mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5'>
						{frameworks.map((fw) => (
							<div
								key={fw.name}
								className='group flex flex-col items-center gap-3 rounded-2xl border p-5 text-center backdrop-blur-xl transition-all duration-300 hover:scale-[1.04]'
								style={{
									background: 'rgba(7,7,26,0.75)',
									borderColor: fw.border,
									boxShadow: `0 0 0 0 ${fw.color}`,
								}}>
								{fw.icon}
								<span className='text-sm font-bold text-white'>
									{fw.name}
								</span>
								<span className='font-mono text-[10px] text-zinc-600'>
									{fw.pkg}
								</span>
								<span
									className='rounded-full px-2.5 py-0.5 text-[11px] font-semibold'
									style={{
										color:
											fw.status === 'available'
												? '#86efac'
												: '#fbbf24',
										background:
											fw.status === 'available'
												? 'rgba(134,239,172,0.10)'
												: 'rgba(251,191,36,0.10)',
									}}>
									{t(fw.status)}
								</span>
							</div>
						))}
					</div>

					{/* Stats bar */}
					<div className='mt-8 grid grid-cols-3 divide-x divide-white/8 rounded-2xl border border-white/10 bg-[#07071a]/75 backdrop-blur-xl'>
						{[
							{ value: '+95', label: t('statComponents') },
							{ value: '+68', label: t('statHooks') },
							{ value: '100%', label: t('statTs') },
						].map((s) => (
							<div
								key={s.label}
								className='py-6 text-center'>
								<p className='text-3xl font-black text-white lg:text-4xl'>
									{s.value}
								</p>
								<p className='mt-1 text-xs text-zinc-500 lg:text-sm'>
									{s.label}
								</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
