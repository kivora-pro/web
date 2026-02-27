'use client';

import Navbar from '@/src/components/Navbar';

type PhaseStatus = 'done' | 'in-progress' | 'planned';

const PHASE_CLASS: Record<PhaseStatus, string> = {
	done: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/25',
	'in-progress': 'bg-violet-500/10 text-violet-400 border-violet-500/25',
	planned: 'bg-zinc-500/10 text-zinc-500 border-zinc-600/30',
};
const PHASE_LABEL: Record<PhaseStatus, string> = {
	done: 'Done',
	'in-progress': 'In progress',
	planned: 'Planned',
};

interface RoadmapItem {
	title: string;
	description: string;
	status: PhaseStatus;
}

const PHASES: { phase: string; period: string; items: RoadmapItem[] }[] = [
	{
		phase: 'v1.0 — Foundation',
		period: 'Current',
		items: [
			{
				title: '@kivora/react',
				description:
					'Full component suite for React 18 & 19 with accessible primitives.',
				status: 'done',
			},
			{
				title: 'Design tokens',
				description:
					'CSS custom-property theme system with dark-mode support out of the box.',
				status: 'done',
			},
			{
				title: 'Core hooks',
				description:
					'useClipboard, useTheme, useMediaQuery and more utility hooks.',
				status: 'done',
			},
			{
				title: 'Toaster system',
				description:
					'toast() API with loading, success, error and promise helpers.',
				status: 'done',
			},
			{
				title: 'Docs site',
				description:
					'Documentation portal with live previews and API tables.',
				status: 'in-progress',
			},
			{
				title: 'Component storybook',
				description:
					'Interactive playground for every component variant.',
				status: 'in-progress',
			},
		],
	},
	{
		phase: 'v1.1 — Ecosystem',
		period: 'Q3 2026',
		items: [
			{
				title: '@kivora/react-native',
				description:
					'Port of the full component suite to React Native with native primitives.',
				status: 'in-progress',
			},
			{
				title: '@kivora/solid',
				description:
					'SolidJS adapter sharing the same design tokens and API surface.',
				status: 'in-progress',
			},
			{
				title: '@kivora/svelte',
				description:
					'Svelte 4 & 5 component library with runes support.',
				status: 'in-progress',
			},
			{
				title: '@kivora/vite-plugin',
				description:
					'Vite plugin for automatic CSS injection and tree-shaking.',
				status: 'in-progress',
			},
			{
				title: 'CLI scaffold',
				description:
					'`create-kivora-app` to bootstrap a new project in seconds.',
				status: 'planned',
			},
		],
	},
	{
		phase: 'v1.2 — Advanced',
		period: 'Q4 2026',
		items: [
			{
				title: 'Advanced Data Table',
				description:
					'Virtualized table with sorting, filtering, column resizing and row selection.',
				status: 'planned',
			},
			{
				title: 'Date Picker',
				description:
					'Fully accessible date and date-range picker with i18n support.',
				status: 'planned',
			},
			{
				title: 'Rich Text Editor',
				description:
					'Prose editor built on ProseMirror with a clean toolbar API.',
				status: 'planned',
			},
			{
				title: 'Motion system',
				description:
					'First-class animation tokens integrating with Framer Motion / Motion One.',
				status: 'planned',
			},
			{
				title: 'Figma Kit',
				description:
					'Component library for Figma that stays in sync with the code.',
				status: 'planned',
			},
		],
	},
];

export default function RoadmapPage() {
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
						Roadmap
					</div>
					<h1 className='text-4xl md:text-5xl font-bold text-white mb-4 leading-tight'>
						What we&apos;re building
						<br />
						<span
							className='bg-clip-text text-transparent'
							style={{
								backgroundImage:
									'linear-gradient(135deg, #7c3aed, #06b6d4)',
							}}>
							next
						</span>
					</h1>
					<p className='text-zinc-400 text-lg max-w-2xl'>
						A living document of what&apos;s shipped, what&apos;s in
						progress and what&apos;s coming. Have an idea? Open an
						issue on GitHub.
					</p>
				</div>

				{/* Legend */}
				<div className='flex items-center gap-3 mb-14 flex-wrap'>
					{(Object.keys(PHASE_LABEL) as PhaseStatus[]).map((s) => (
						<span
							key={s}
							className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold border ${PHASE_CLASS[s]}`}>
							{s === 'done' && (
								<span className='w-1.5 h-1.5 rounded-full bg-emerald-400' />
							)}
							{s === 'in-progress' && (
								<span className='w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse' />
							)}
							{s === 'planned' && (
								<span className='w-1.5 h-1.5 rounded-full bg-zinc-600' />
							)}
							{PHASE_LABEL[s]}
						</span>
					))}
				</div>

				{/* Timeline */}
				<div className='relative'>
					{/* Vertical line */}
					<div className='absolute left-0 top-3 bottom-3 w-px bg-linear-to-b from-violet-500/40 via-white/10 to-transparent hidden md:block' />

					<div className='space-y-16'>
						{PHASES.map((phase, pi) => (
							<section
								key={phase.phase}
								className='md:pl-8'>
								{/* Phase header */}
								<div className='flex items-center gap-3 mb-8'>
									<div
										className='hidden md:flex absolute left-0 -translate-x-1/2 w-3 h-3 rounded-full border-2 border-violet-500 bg-[#09090b]'
										style={{ marginTop: '0.15rem' }}
									/>
									<div>
										<div className='flex items-center gap-3 flex-wrap'>
											<h2 className='text-lg font-bold text-white'>
												{phase.phase}
											</h2>
											<span
												className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold border ${pi === 0 ? PHASE_CLASS['in-progress'] : PHASE_CLASS['planned']}`}>
												{phase.period}
											</span>
										</div>
									</div>
								</div>

								{/* Items */}
								<div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
									{phase.items.map((item) => (
										<div
											key={item.title}
											className='group flex items-start gap-3 p-4 rounded-xl border border-white/[0.07] hover:border-white/15 transition-all'
											style={{
												background:
													'rgba(255,255,255,0.02)',
											}}>
											<div className='shrink-0 mt-0.5'>
												{item.status === 'done' && (
													<div
														className='w-5 h-5 rounded-full flex items-center justify-center'
														style={{
															background:
																'rgba(52,211,153,0.15)',
														}}>
														<svg
															className='w-3 h-3 text-emerald-400'
															viewBox='0 0 24 24'
															fill='none'
															stroke='currentColor'
															strokeWidth='3'>
															<path
																strokeLinecap='round'
																strokeLinejoin='round'
																d='m4.5 12.75 6 6 9-13.5'
															/>
														</svg>
													</div>
												)}
												{item.status ===
													'in-progress' && (
													<div
														className='w-5 h-5 rounded-full flex items-center justify-center'
														style={{
															background:
																'rgba(167,139,250,0.15)',
														}}>
														<span className='w-2 h-2 rounded-full bg-violet-400 animate-pulse' />
													</div>
												)}
												{item.status === 'planned' && (
													<div className='w-5 h-5 rounded-full flex items-center justify-center border border-white/10'>
														<span className='w-1.5 h-1.5 rounded-full bg-zinc-600' />
													</div>
												)}
											</div>
											<div className='flex-1 min-w-0'>
												<p className='text-sm font-semibold text-zinc-200 group-hover:text-white transition-colors mb-0.5'>
													{item.title}
												</p>
												<p className='text-xs text-zinc-600 leading-relaxed'>
													{item.description}
												</p>
											</div>
										</div>
									))}
								</div>
							</section>
						))}
					</div>
				</div>

				{/* CTA */}
				<div
					className='mt-20 rounded-2xl border border-white/8 p-8 flex flex-col md:flex-row items-start md:items-center gap-6'
					style={{
						background:
							'linear-gradient(135deg, rgba(124,58,237,0.08), rgba(6,182,212,0.08))',
					}}>
					<div className='flex-1'>
						<p className='text-sm font-semibold text-zinc-200 mb-1'>
							Have a suggestion?
						</p>
						<p className='text-xs text-zinc-500'>
							Request a component or feature by opening a GitHub
							issue. Every idea is reviewed by the core team.
						</p>
					</div>
					<a
						href='https://github.com/kivora-ui/kivora/issues/new'
						target='_blank'
						rel='noopener noreferrer'
						className='shrink-0 px-4 py-2 rounded-lg text-xs font-semibold text-white border border-white/10 hover:border-white/25 transition-all'
						style={{ background: 'rgba(255,255,255,0.07)' }}>
						Open an issue →
					</a>
				</div>
			</main>
		</div>
	);
}
