'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

/* ─── Slide ─────────────────────────────────────────────────────────── */

const slideVariants = {
	hidden: {},
	show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const itemVariants = {
	hidden: { opacity: 0, y: 24 },
	show: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.6,
			ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
		},
	},
};

export function SlidePresentation() {
	const t = useTranslations('presentation');
	return (
		<div className='relative h-full w-full overflow-hidden'>
			<div className='flex h-full w-full items-center justify-center'>
				<motion.div
					variants={slideVariants}
					initial='hidden'
					animate='show'
					className='relative z-10 flex flex-col justify-center items-center px-10 lg:px-16 xl:px-24 text-center'>
					{/* Logo + pills */}
					<motion.div
						variants={itemVariants}
						className='mb-7 flex flex-wrap items-center gap-3'>
						<span className='inline-flex items-center gap-1.5 rounded-full border border-violet-500/20 bg-violet-500/8 px-3 py-1 text-xs font-medium text-violet-400'>
							<span className='h-1.5 w-1.5 animate-pulse rounded-full bg-violet-400' />
							{t('badge')} · v0.1.0
						</span>
					</motion.div>

					{/* Title */}
					<motion.h1
						variants={itemVariants}
						className='text-left text-6xl font-black leading-[0.9] text-white sm:text-7xl lg:text-[5.5rem] xl:text-[7rem] 2xl:text-[8.5rem]'
						style={{
							fontFamily: "'SugoPro', sans-serif",
							letterSpacing: '0.01em',
						}}>
						Kivora
						<span
							className='bg-clip-text text-transparent ml-3'
							style={{
								backgroundImage:
									'linear-gradient(120deg,#c4b5fd 0%,#7c3aed 35%,#6366f1 70%,#818cf8 100%)',
							}}>
							UI
						</span>
					</motion.h1>

					{/* Tagline */}
					<motion.p
						variants={itemVariants}
						className='mt-6 max-w-lg text-3xl font-medium text-zinc-300 lg:text-3xl xl:text-4xl'>
						{t('tagline')}{' '}
						<span className='font-bold text-white'>
							{t('taglineHighlight')}
						</span>
					</motion.p>
					<motion.p
						variants={itemVariants}
						className='mt-3 max-w-md text-xl leading-relaxed text-zinc-500 lg:text-base'>
						{t('description')}
					</motion.p>

					{/* Install */}
					<motion.div
						variants={itemVariants}
						className='mt-8 inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-5 py-3.5 font-mono text-sm text-zinc-300 backdrop-blur-sm lg:text-base'>
						<span className='select-none text-violet-400'>$</span>
						<span>npm install @kivora/react</span>
					</motion.div>

					{/* CTAs */}
					<motion.div
						variants={itemVariants}
						className='mt-6 flex flex-wrap items-center gap-3'>
						<Link
							href='/docs/getting-started'
							className='inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-bold text-white transition-opacity hover:opacity-85'
							style={{
								background:
									'linear-gradient(135deg,#7c3aed 0%,#6366f1 100%)',
							}}>
							Empezar
							<svg
								className='h-4 w-4'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'
								strokeWidth={2.5}>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M13 7l5 5m0 0l-5 5m5-5H6'
								/>
							</svg>
						</Link>
						<Link
							href='/docs/components'
							className='inline-flex items-center gap-2 rounded-xl border border-white/15 px-6 py-3 text-sm font-semibold text-zinc-300 transition-colors hover:border-white/30 hover:text-white'>
							Ver componentes
						</Link>
					</motion.div>

					{/* Scroll hint */}
					<motion.div
						variants={itemVariants}
						className='mt-10 flex items-center gap-2 text-xs text-zinc-600'>
						<svg
							className='h-4 w-4 animate-bounce'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'
							strokeWidth={2}>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M9 5l7 7-7 7'
							/>
						</svg>
						<span>{t('scrollHint')}</span>
					</motion.div>
				</motion.div>
			</div>
		</div>
	);
}
