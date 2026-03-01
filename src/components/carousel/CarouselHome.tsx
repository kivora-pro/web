'use client';

import { motion } from 'framer-motion';
import { useCallback, useEffect, useRef, useState } from 'react';
import { BentoCarousel } from './BentoCarousel';
import { SlideFrameworks } from './SlideFrameworks';
import { SlidePresentation } from './SlidePresentation';
import { SlideStepByStep } from './SlideStepByStep';
import { SlideUsability } from './SlideUsability';

const SLIDES = [
	{ id: 'presentacion', label: 'Presentación', Component: SlidePresentation },
	{ id: 'usabilidad', label: 'Usabilidad', Component: SlideUsability },
	{ id: 'frameworks', label: 'Frameworks', Component: SlideFrameworks },
	{ id: 'paso-a-paso', label: 'Paso a paso', Component: SlideStepByStep },
];

function useIsDesktop() {
	const [isDesktop, setIsDesktop] = useState(false);
	useEffect(() => {
		const mq = window.matchMedia('(min-width: 1024px)');
		setIsDesktop(mq.matches);
		const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
		mq.addEventListener('change', handler);
		return () => mq.removeEventListener('change', handler);
	}, []);
	return isDesktop;
}

export function CarouselHome() {
	const trackRef = useRef<HTMLDivElement>(null);
	const [active, setActive] = useState(0);
	const isScrolling = useRef(false);
	const isDesktop = useIsDesktop();

	const goTo = useCallback((index: number) => {
		const clamped = Math.max(0, Math.min(SLIDES.length - 1, index));
		setActive(clamped);
	}, []);

	/* Wheel → horizontal page (solo desktop) */
	useEffect(() => {
		if (!isDesktop) return;
		const el = document.documentElement;

		const onWheel = (e: WheelEvent) => {
			e.preventDefault();
			if (isScrolling.current) return;
			const delta = e.deltaY || e.deltaX;
			if (Math.abs(delta) < 5) return;
			isScrolling.current = true;
			goTo(active + (delta > 0 ? 1 : -1));
			setTimeout(() => {
				isScrolling.current = false;
			}, 700);
		};

		el.addEventListener('wheel', onWheel, { passive: false });
		return () => el.removeEventListener('wheel', onWheel);
	}, [active, goTo, isDesktop]);

	/* Arrow keys (solo desktop) */
	useEffect(() => {
		if (!isDesktop) return;
		const onKey = (e: KeyboardEvent) => {
			if (e.key === 'ArrowRight') goTo(active + 1);
			if (e.key === 'ArrowLeft') goTo(active - 1);
		};
		window.addEventListener('keydown', onKey);
		return () => window.removeEventListener('keydown', onKey);
	}, [active, goTo, isDesktop]);

	/* ── MOBILE: scroll vertical normal ── */
	if (!isDesktop) {
		return (
			<div className='relative w-full overflow-hidden'>
				{/* BentoCarousel global de fondo */}
				<motion.div
					aria-hidden='true'
					className='pointer-events-none absolute inset-0 z-0'
					initial={{ opacity: 0 }}
					animate={{ opacity: 0.18 }}
					transition={{ duration: 1.4, ease: 'easeOut' }}>
					<BentoCarousel />
				</motion.div>
				{SLIDES.map(({ id, Component }) => (
					<section
						key={id}
						id={id}
						className='relative z-10 min-h-screen w-full flex items-center justify-center pt-20 pb-16'>
						<Component />
					</section>
				))}
			</div>
		);
	}

	/* ── DESKTOP: carousel horizontal ── */
	return (
		<div className='relative h-screen w-screen overflow-hidden'>
			{/* BentoCarousel global de fondo — una sola instancia */}
			<motion.div
				aria-hidden='true'
				className='pointer-events-none absolute inset-0 z-0'
				initial={{ opacity: 0 }}
				animate={{ opacity: 0.18 }}
				transition={{ duration: 1.4, ease: 'easeOut' }}>
				<BentoCarousel />
			</motion.div>
			{/* Track */}
			<div
				ref={trackRef}
				className='flex h-full w-full'
				style={{
					transform: `translateX(-${active * 100}%)`,
					transition: 'transform 500ms cubic-bezier(0.77,0,0.18,1)',
					willChange: 'transform',
				}}>
				{SLIDES.map(({ id, Component }) => (
					<div
						key={id}
						className='shrink-0 h-full w-full pt-14'>
						<Component />
					</div>
				))}
			</div>

			{/* Dot indicators */}
			<nav
				aria-label='Secciones del carousel'
				className='fixed bottom-8 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2'>
				{SLIDES.map((s, i) => (
					<button
						key={s.id}
						onClick={() => goTo(i)}
						aria-label={`Ir a ${s.label}`}
						aria-current={i === active ? 'true' : undefined}
						style={{ outline: 'none' }}
						className='flex items-center'>
						<span
							className='block rounded-full transition-all duration-300'
							style={{
								width: i === active ? '28px' : '8px',
								height: '8px',
								background:
									i === active
										? 'linear-gradient(90deg,#7c3aed,#6366f1)'
										: 'rgba(255,255,255,0.2)',
							}}
						/>
					</button>
				))}
			</nav>

			{/* Slide counter */}
			<div className='fixed bottom-8 right-8 z-20 font-mono text-xs text-zinc-600 tabular-nums'>
				{String(active + 1).padStart(2, '0')} /{' '}
				{String(SLIDES.length).padStart(2, '0')}
			</div>
		</div>
	);
}
