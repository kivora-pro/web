'use client';

import {
	Avatar,
	Badge,
	Button,
	Card,
	PasswordInput,
	Progress,
	Switch,
	TextInput,
	toast,
	useClipboard,
} from '@kivora/react';
import {
	startTransition,
	useCallback,
	useEffect,
	useRef,
	useState,
	type ReactElement,
} from 'react';
import { useLocale, type Translation } from './i18n';

// ─────────────────────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────────────────────

interface SlideProps {
	isActive: boolean;
	t: Translation;
}

// ─────────────────────────────────────────────────────────────────────────────
// useIsMobile hook
// ─────────────────────────────────────────────────────────────────────────────

function useIsMobile(breakpoint = 768) {
	// null = not yet determined (SSR / before first effect)
	const [isMobile, setIsMobile] = useState<boolean | null>(null);

	useEffect(() => {
		const mq = window.matchMedia(`(max-width: ${breakpoint - 1}px)`);
		startTransition(() => setIsMobile(mq.matches));
		const handler = (e: MediaQueryListEvent) =>
			startTransition(() => setIsMobile(e.matches));
		mq.addEventListener('change', handler);
		return () => mq.removeEventListener('change', handler);
	}, [breakpoint]);

	return isMobile;
}

// ─────────────────────────────────────────────────────────────────────────────
// useSlider hook
// ─────────────────────────────────────────────────────────────────────────────

function useSlider(total: number, enabled: boolean) {
	const [current, setCurrent] = useState(0);
	const locked = useRef(false);
	const currentRef = useRef(0);
	const touchStartY = useRef<number | null>(null);

	const go = useCallback(
		(index: number) => {
			if (index < 0 || index >= total || locked.current) return;
			locked.current = true;
			currentRef.current = index;
			setCurrent(index);
			setTimeout(() => {
				locked.current = false;
			}, 900);
		},
		[total],
	);

	useEffect(() => {
		if (!enabled) return;

		const onWheel = (e: WheelEvent) => {
			e.preventDefault();
			if (Math.abs(e.deltaY) < 5) return;
			if (e.deltaY > 0) go(currentRef.current + 1);
			else go(currentRef.current - 1);
		};

		const onKey = (e: KeyboardEvent) => {
			if (['ArrowDown', 'ArrowRight'].includes(e.key))
				go(currentRef.current + 1);
			if (['ArrowUp', 'ArrowLeft'].includes(e.key))
				go(currentRef.current - 1);
		};

		const onTouchStart = (e: TouchEvent) => {
			touchStartY.current = e.touches[0].clientY;
		};

		const onTouchEnd = (e: TouchEvent) => {
			if (touchStartY.current === null) return;
			const delta = touchStartY.current - e.changedTouches[0].clientY;
			if (Math.abs(delta) < 50) return;
			if (delta > 0) go(currentRef.current + 1);
			else go(currentRef.current - 1);
			touchStartY.current = null;
		};

		window.addEventListener('wheel', onWheel, { passive: false });
		window.addEventListener('keydown', onKey);
		window.addEventListener('touchstart', onTouchStart, { passive: true });
		window.addEventListener('touchend', onTouchEnd, { passive: true });

		return () => {
			window.removeEventListener('wheel', onWheel);
			window.removeEventListener('keydown', onKey);
			window.removeEventListener('touchstart', onTouchStart);
			window.removeEventListener('touchend', onTouchEnd);
		};
	}, [go, enabled]);

	return { current, go };
}

// ─────────────────────────────────────────────────────────────────────────────
// Slide 1 · Hero — subcomponents
// ─────────────────────────────────────────────────────────────────────────────

// ─────────────────────────────────────────────────────────────────────────────
// Hero · Bento demo grid
// ─────────────────────────────────────────────────────────────────────────────

function BentoDemoGrid() {
	type ToggleKey = 'notif' | 'dark' | 'sync' | 'wifi';
	const [toggles, setToggles] = useState<Record<ToggleKey, boolean>>({
		notif: true,
		dark: true,
		sync: false,
		wifi: true,
	});

	const toggle = (k: ToggleKey) =>
		setToggles((prev) => ({ ...prev, [k]: !prev[k] }));

	const cell =
		'rounded-2xl border border-white/8 p-4 flex flex-col gap-3 overflow-hidden';
	const dimBg = { background: 'rgba(255,255,255,0.025)' };
	const lbl =
		'text-[9px] uppercase tracking-widest text-zinc-600 font-medium';

	const TOGGLE_LABELS: Record<ToggleKey, string> = {
		notif: 'Notifications',
		dark: 'Dark mode',
		sync: 'Auto-sync',
		wifi: 'Wi-Fi',
	};

	return (
		<div className='grid grid-cols-3 grid-rows-3 gap-2.5 w-full h-full'>
			{/* ── Buttons (col-span-2) ──────────────────────────── */}
			<div
				className={`col-span-2 ${cell}`}
				style={dimBg}>
				<p className={lbl}>Button</p>
				<div className='flex flex-wrap gap-2 items-center'>
					<Button
						variant='solid'
						size='sm'>
						Primary
					</Button>
					<Button
						variant='outline'
						size='sm'>
						Outline
					</Button>
					<Button
						variant='ghost'
						size='sm'>
						Ghost
					</Button>
					<Button
						variant='subtle'
						size='sm'>
						Subtle
					</Button>
				</div>
				<div className='flex gap-2 items-center flex-wrap'>
					<Button
						size='xs'
						variant='subtle'>
						xs
					</Button>
					<Button
						size='sm'
						variant='subtle'>
						sm
					</Button>
					<Button
						size='md'
						variant='subtle'>
						md
					</Button>
					<Button
						size='lg'
						variant='subtle'>
						lg
					</Button>
					<Button
						size='sm'
						loading
						variant='solid'>
						Loading
					</Button>
				</div>
			</div>

			{/* ── Switch (col-span-1) ──────────────────────────── */}
			<div
				className={cell}
				style={dimBg}>
				<p className={lbl}>Switch</p>
				<div className='flex flex-col gap-2.5'>
					{(Object.entries(toggles) as [ToggleKey, boolean][]).map(
						([k, v]) => (
							<Switch
								key={k}
								label={TOGGLE_LABELS[k]}
								checked={v}
								onChange={() => toggle(k)}
								size='sm'
							/>
						),
					)}
				</div>
			</div>

			{/* ── Card (col-span-1) ───────────────────────────── */}
			<div
				className={cell}
				style={dimBg}>
				<p className={lbl}>Card</p>
				<Card
					withBorder
					padding='0.625rem'
					radius='lg'
					component='div'>
					<div className='flex items-center gap-2 mb-2'>
						<Avatar
							size='sm'
							variant='filled'>
							KV
						</Avatar>
						<div>
							<div className='text-xs font-semibold'>
								Kivora Team
							</div>
							<div className='text-[10px] text-muted'>
								2 min ago
							</div>
						</div>
					</div>
					<p className='text-xs text-muted leading-normal'>
						New push — 3 variants added to{' '}
						<span className='text-brand'>Button</span>.
					</p>
					<div className='flex gap-1.5 mt-2'>
						<Badge
							variant='light'
							size='xs'>
							v2.4.0
						</Badge>
						<Badge
							variant='light'
							size='xs'>
							stable
						</Badge>
					</div>
				</Card>
			</div>

			{/* ── Input (col-span-1) ──────────────────────────── */}
			<div
				className={cell}
				style={dimBg}>
				<p className={lbl}>Input</p>
				<div className='flex flex-col gap-2'>
					<TextInput
						label='Email'
						placeholder='you@example.com'
						size='sm'
						variant='filled'
						readOnly
					/>
					<PasswordInput
						label='Password'
						defaultValue='supersecret'
						size='sm'
					/>
				</div>
			</div>

			{/* ── Badges + Progress (col-span-1) ──────────────── */}
			<div
				className={cell}
				style={dimBg}>
				<p className={lbl}>Badge</p>
				<div className='flex flex-wrap gap-1.5'>
					<Badge
						variant='filled'
						size='xs'>
						New
					</Badge>
					<Badge
						variant='light'
						size='xs'>
						Beta
					</Badge>
					<Badge
						variant='outline'
						size='xs'>
						Stable
					</Badge>
					<Badge
						variant='dot'
						size='xs'>
						Live
					</Badge>
					<Badge
						variant='transparent'
						size='xs'>
						v2.4
					</Badge>
				</div>
				<div className='mt-auto flex flex-col gap-2'>
					{(
						[
							{ l: 'Coverage', v: 94, c: '#10b981' },
							{ l: 'Bundle', v: 67, c: '#7c3aed' },
						] as const
					).map((bar) => (
						<div key={bar.l}>
							<div className='flex justify-between text-[10px] text-muted mb-1'>
								<span>{bar.l}</span>
								<span>{bar.v}%</span>
							</div>
							<Progress
								value={bar.v}
								size='xs'
								color={bar.c}
							/>
						</div>
					))}
				</div>
			</div>

			{/* ── Toast (col-span-2) ───────────────────────────── */}
			<div
				className={`col-span-2 ${cell}`}
				style={dimBg}>
				<p className={lbl}>Toast</p>
				<p className='text-[11px] text-muted'>
					Click to fire real notifications
				</p>
				<div className='flex gap-2 mt-1 flex-wrap'>
					<Button
						size='sm'
						variant='subtle'
						onClick={() =>
							toast.success('Deployed successfully', {
								description: 'Your changes are live',
							})
						}>
						✓ Success
					</Button>
					<Button
						size='sm'
						variant='subtle'
						onClick={() =>
							toast.error('Build failed', {
								description: 'Check the error log',
							})
						}>
						✕ Error
					</Button>
					<Button
						size='sm'
						variant='ghost'
						onClick={() => {
							const id = toast.loading('Deploying…', {
								description: 'This may take a moment',
							});
							setTimeout(() => toast.dismiss(id), 3000);
						}}>
						⟳ Loading
					</Button>
				</div>
			</div>

			{/* ── Stats (col-span-1) ──────────────────────────── */}
			<div
				className={cell}
				style={dimBg}>
				<p className={lbl}>Stats</p>
				<div className='flex flex-col gap-2.5 flex-1 justify-center'>
					{(
						[
							{ v: '128+', l: 'Components', c: '#7c3aed' },
							{ v: '5', l: 'Frameworks', c: '#06b6d4' },
							{ v: '100%', l: 'TypeScript', c: '#10b981' },
						] as const
					).map((s) => (
						<div
							key={s.l}
							className='flex items-center gap-2'>
							<div
								className='w-0.5 h-6 rounded-full shrink-0'
								style={{ background: s.c }}
							/>
							<div>
								<div className='text-sm font-bold text-white leading-none'>
									{s.v}
								</div>
								<div className='text-[10px] text-zinc-600'>
									{s.l}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

// ─────────────────────────────────────────────────────────────────────────────
// Slide 1 · Hero
// ─────────────────────────────────────────────────────────────────────────────

const FRAMEWORKS_BADGES = ['React', 'React Native', 'Solid', 'Svelte', 'Vite'];

function HeroSlide({ isActive, t }: SlideProps) {
	return (
		<section className='relative w-screen h-screen flex items-center overflow-hidden px-8 md:px-16 lg:px-24'>
			{/* ambient glows */}
			<div className='pointer-events-none absolute inset-0 -z-10'>
				<div
					className='absolute -top-32 -left-32 w-175 h-175 rounded-full opacity-20'
					style={{
						background:
							'radial-gradient(circle, #7c3aed 0%, transparent 65%)',
					}}
				/>
				<div
					className='absolute bottom-0 -right-64 w-150 h-150 rounded-full opacity-15'
					style={{
						background:
							'radial-gradient(circle, #06b6d4 0%, transparent 65%)',
					}}
				/>
				{/* grid */}
				<div
					className='absolute inset-0 opacity-[0.04]'
					style={{
						backgroundImage:
							'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)',
						backgroundSize: '60px 60px',
					}}
				/>
			</div>

			<div
				className={`w-full grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-16 items-center transition-all duration-1000 ease-out ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
				{/* ── Left column ── */}
				<div className='flex flex-col gap-6'>
					<div
						className='inline-flex items-center gap-2 w-fit px-3 py-1.5 rounded-full border border-violet-500/30 text-xs text-violet-400'
						style={{ background: 'rgba(124,58,237,0.08)' }}>
						<span className='w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse' />
						{t.hero.badge}
					</div>

					<h1 className='text-5xl md:text-6xl xl:text-7xl font-bold leading-[1.04] tracking-tight text-white'>
						{t.hero.h1Line1}
						<br />
						<span
							className='bg-clip-text text-transparent'
							style={{
								backgroundImage:
									'linear-gradient(130deg, #a78bfa 0%, #06b6d4 100%)',
							}}>
							{t.hero.h1Line2}
						</span>
					</h1>

					<p className='text-lg text-zinc-400 max-w-md leading-relaxed'>
						{t.hero.desc}
					</p>

					<div className='flex flex-wrap gap-3'>
						<button
							className='px-6 py-3 rounded-xl text-sm font-semibold text-white transition-all duration-200 hover:scale-[1.03] active:scale-95'
							style={{
								background:
									'linear-gradient(135deg, #7c3aed, #06b6d4)',
								boxShadow: '0 0 36px rgba(124,58,237,0.35)',
							}}>
							{t.hero.ctaPrimary}
						</button>
						<button
							className='px-6 py-3 rounded-xl text-sm font-semibold text-zinc-300 border border-white/10 transition-all duration-200 hover:border-white/25 hover:text-white'
							style={{ background: 'rgba(255,255,255,0.04)' }}>
							{t.hero.ctaSecondary}
						</button>
					</div>

					{/* framework badges */}
					<div className='flex flex-wrap gap-2 pt-1'>
						{FRAMEWORKS_BADGES.map((fw) => (
							<span
								key={fw}
								className='px-3 py-1 rounded-full text-xs border border-white/10 text-zinc-400'
								style={{
									background: 'rgba(255,255,255,0.035)',
								}}>
								{fw}
							</span>
						))}
					</div>
				</div>

				{/* ── Right column: bento demo ── */}
				<div className='hidden lg:block h-125 xl:h-135'>
					<BentoDemoGrid />
				</div>
			</div>
		</section>
	);
}

// ─────────────────────────────────────────────────────────────────────────────
// Slide 2 · Use Cases
// ─────────────────────────────────────────────────────────────────────────────

const USE_CASES = [
	{
		icon: '▶',
		title: 'OTT & Streaming',
		desc: 'Media players, content grids, paywall flows — pixel-perfect from 4K TV to mobile.',
		tags: ['Video Player', 'Content Grid', 'Paywall', 'Trailer Modal'],
		color: '#ef4444',
	},
	{
		icon: '✦',
		title: 'CMS & Editorial',
		desc: 'Rich-text editors, media managers, and publishing workflows built for content teams.',
		tags: ['Rich Text', 'Media Library', 'Scheduling', 'Preview'],
		color: '#f59e0b',
	},
	{
		icon: '◈',
		title: 'E-Commerce',
		desc: 'Product listings, shopping carts, checkout and review systems optimised to convert.',
		tags: ['Product Card', 'Cart Drawer', 'Checkout', 'Reviews'],
		color: '#10b981',
	},
	{
		icon: '◉',
		title: 'Analytics Dashboard',
		desc: 'Data tables, chart wrappers, KPI cards and filter panels for data-dense enterprise apps.',
		tags: ['Data Table', 'KPI Cards', 'Filters', 'Date Picker'],
		color: '#7c3aed',
	},
	{
		icon: '⊡',
		title: 'Mobile-First Apps',
		desc: 'The same API on React Native: bottom tabs, drawers, lists and gestures that feel native.',
		tags: ['Bottom Nav', 'Gesture List', 'Action Sheet', 'Drawer'],
		color: '#06b6d4',
	},
	{
		icon: '⬡',
		title: 'Enterprise SaaS',
		desc: 'Complex forms, permission-aware components and audit logs for large organisations.',
		tags: ['RBAC UI', 'Multi-step Form', 'Audit Log', 'Settings'],
		color: '#8b5cf6',
	},
];

function UseCasesSlide({ isActive, t }: SlideProps) {
	return (
		<section className='relative w-screen h-screen flex flex-col justify-center overflow-hidden px-8 md:px-16 lg:px-24 py-20'>
			<div className='pointer-events-none absolute inset-0 -z-10'>
				<div
					className='absolute top-0 right-0 w-125 h-125 rounded-full opacity-10'
					style={{
						background:
							'radial-gradient(circle, #7c3aed 0%, transparent 70%)',
					}}
				/>
				<div
					className='absolute -bottom-32 -left-32 w-100 h-100 rounded-full opacity-10'
					style={{
						background:
							'radial-gradient(circle, #06b6d4 0%, transparent 70%)',
					}}
				/>
			</div>

			<div
				className={`mb-8 transition-all duration-1000 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
				<div className='mb-2 text-xs uppercase tracking-widest text-violet-400'>
					{t.useCases.label}
				</div>
				<h2 className='text-4xl md:text-5xl font-bold text-white mb-2'>
					{t.useCases.title}
				</h2>
				<p className='text-zinc-400 text-lg max-w-xl'>
					{t.useCases.subtitle}
				</p>
			</div>

			<div
				className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 transition-all duration-1000 delay-150 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
				{USE_CASES.map((uc, i) => (
					<div
						key={uc.title}
						className='group p-5 rounded-2xl border border-white/7 hover:border-white/15 transition-all duration-300 cursor-default'
						style={{
							background: 'rgba(255,255,255,0.025)',
							transitionDelay: `${i * 55}ms`,
						}}>
						<div className='flex items-center gap-3 mb-3'>
							<div
								className='w-9 h-9 rounded-xl flex items-center justify-center text-base font-bold shrink-0 transition-transform duration-300 group-hover:scale-110'
								style={{
									background: `${uc.color}18`,
									color: uc.color,
								}}>
								{uc.icon}
							</div>
							<h3 className='font-semibold text-zinc-200 text-sm leading-snug'>
								{t.useCases.items[i].title}
							</h3>
						</div>
						<p className='text-xs text-zinc-500 leading-5 mb-3'>
							{t.useCases.items[i].desc}
						</p>
						<div className='flex flex-wrap gap-1.5'>
							{uc.tags.map((tag) => (
								<span
									key={tag}
									className='px-2 py-0.5 rounded-full text-[10px] text-zinc-600 border border-white/7'>
									{tag}
								</span>
							))}
						</div>
					</div>
				))}
			</div>
		</section>
	);
}

// ─────────────────────────────────────────────────────────────────────────────
// Slide 3 · Ecosystem
// ─────────────────────────────────────────────────────────────────────────────

function IconReact({ className }: { className?: string }) {
	return (
		<svg
			viewBox='0 0 24 24'
			fill='currentColor'
			className={className}
			aria-hidden='true'>
			<path d='M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.143.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.29zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.132.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.36-.034-.47 0-.92.014-1.36.034.44-.572.895-1.096 1.36-1.564zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.656 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.71-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.15-1.315.283-2.015.386.24-.375.48-.762.705-1.158.225-.39.435-.782.634-1.176zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.36.034.47 0 .92-.014 1.36-.034-.44.572-.895 1.095-1.36 1.565-.455-.47-.91-.993-1.36-1.565z' />
		</svg>
	);
}

function IconSolid({ className }: { className?: string }) {
	return (
		<svg
			viewBox='0 0 24 24'
			fill='currentColor'
			className={className}
			aria-hidden='true'>
			<path d='M4.677 0C2.083 0 0 2.09 0 4.666c0 1.29.522 2.457 1.365 3.307l10.239 10.02c.215.21.215.554 0 .764l-3.496 3.42C7.69 22.578 8.53 24 9.75 24h9.573C21.917 24 24 21.91 24 19.334c0-1.29-.522-2.456-1.365-3.306L12.397 6.007a.543.543 0 0 1 0-.763l3.496-3.42C15.81 1.422 14.97 0 13.75 0H4.677Z' />
		</svg>
	);
}

function IconSvelte({ className }: { className?: string }) {
	return (
		<svg
			viewBox='0 0 24 24'
			fill='currentColor'
			className={className}
			aria-hidden='true'>
			<path d='M10.354 21.125a4.44 4.44 0 0 1-4.765-1.767 4.109 4.109 0 0 1-.703-3.107 3.898 3.898 0 0 1 .134-.522l.105-.321.287.21a7.21 7.21 0 0 0 2.186 1.092l.208.063-.02.208a1.253 1.253 0 0 0 .226.83 1.337 1.337 0 0 0 1.435.533 1.231 1.231 0 0 0 .344-.15l5.56-3.532a1.148 1.148 0 0 0 .52-.768 1.224 1.224 0 0 0-.208-.931 1.337 1.337 0 0 0-1.435-.533 1.23 1.23 0 0 0-.344.15l-2.122 1.348a4.066 4.066 0 0 1-1.138.493 4.44 4.44 0 0 1-4.765-1.766 4.108 4.108 0 0 1-.702-3.108 3.857 3.857 0 0 1 1.742-2.56l5.56-3.532a4.066 4.066 0 0 1 1.137-.492 4.44 4.44 0 0 1 4.765 1.766 4.108 4.108 0 0 1 .703 3.108 3.994 3.994 0 0 1-.134.522l-.105.32-.287-.208a7.205 7.205 0 0 0-2.186-1.093l-.208-.063.02-.208a1.253 1.253 0 0 0-.226-.83 1.337 1.337 0 0 0-1.435-.532 1.228 1.228 0 0 0-.344.149l-5.56 3.532a1.148 1.148 0 0 0-.52.769 1.224 1.224 0 0 0 .208.93 1.337 1.337 0 0 0 1.435.533 1.234 1.234 0 0 0 .344-.15l2.122-1.348a4.07 4.07 0 0 1 1.138-.492 4.44 4.44 0 0 1 4.765 1.766 4.109 4.109 0 0 1 .703 3.108 3.857 3.857 0 0 1-1.742 2.56l-5.56 3.532a4.07 4.07 0 0 1-1.138.492z' />
		</svg>
	);
}

function IconVite({ className }: { className?: string }) {
	return (
		<svg
			viewBox='0 0 24 24'
			fill='currentColor'
			className={className}
			aria-hidden='true'>
			<path d='M21.498 0L13.037 14.779l-1.078-6.5L21.498 0Zm-9.52 5.292L.502 0l9.46 14.779L11.978 5.292ZM13.037 14.779 11.96 8.278l1.04 6.46.038.04Zm-1.077-6.5 1.038 6.46-1.038-6.46Zm-.038.04 1.077 6.5-1.077-6.5Zm-1.002 6.46L9.962 8.278l1.958 6.5Zm1.04-6.46-1.04 6.46 1.04-6.46Zm-.038.04-1.002 6.42 1.002-6.42Z' />
			<path d='m11.978 5.292.962 2.986L11.978 5.292ZM0.502 0l11.476 5.292L.502 0ZM13.037 14.779 24 0 13.037 14.779ZM11.96 8.278l1.077 6.501L11.96 8.278ZM11.962 8.278 0.502 0l11.46 8.278ZM21.498 0 13.037 14.779 21.498 0Z' />
		</svg>
	);
}

const FRAMEWORK_ICONS: Record<
	string,
	(props: { className?: string }) => ReactElement
> = {
	React: IconReact,
	'React Native': IconReact,
	Solid: IconSolid,
	Svelte: IconSvelte,
	Vite: IconVite,
};

const FRAMEWORKS_DETAIL = [
	{
		name: 'React',
		version: '18 / 19',
		tagline: 'The OG. Hooks, Suspense and RSC.',
		pkg: '@kivora/react',
		color: '#61dafb',
		icon: '⚛',
		status: 'stable' as const,
		npmUrl: 'https://www.npmjs.com/package/@kivora/react',
		features: [
			'Server Components ready',
			'Suspense streaming',
			'Concurrent transitions',
			'DevTools integration',
		],
	},
	{
		name: 'React Native',
		version: '0.73+',
		tagline: 'Native feel, web-like workflow.',
		pkg: '@kivora/react-native',
		color: '#7dd3fc',
		icon: '⊡',
		status: 'in-development' as const,
		npmUrl: null,
		features: [
			'Animated.Value wrappers',
			'Expo compatible',
			'Platform-adaptive styles',
			'Accessibility labels auto-applied',
		],
	},
	{
		name: 'Solid',
		version: '1.8+',
		tagline: 'Fine-grained reactivity. Zero VDOM.',
		pkg: '@kivora/solid',
		color: '#4f86c6',
		icon: '◆',
		status: 'in-development' as const,
		npmUrl: null,
		features: [
			'Signal-aware props',
			'createEffect integration',
			'Minimal re-renders',
			'SSR with SolidStart',
		],
	},
	{
		name: 'Svelte',
		version: '4 / 5',
		tagline: 'Compiled. Tiny bundles. Pure magic.',
		pkg: '@kivora/svelte',
		color: '#ff6432',
		icon: '△',
		status: 'in-development' as const,
		npmUrl: null,
		features: [
			'Svelte stores',
			'Slot composition',
			'No runtime overhead',
			'Svelte 5 Runes ready',
		],
	},
	{
		name: 'Vite',
		version: '5+',
		tagline: 'Framework-agnostic. Dev-first.',
		pkg: '@kivora/vite-plugin',
		color: '#9d7ff4',
		icon: '⚡',
		status: 'in-development' as const,
		npmUrl: null,
		features: [
			'Auto-import plugin',
			'Design token HMR',
			'Bundle analyser',
			'Works with any framework',
		],
	},
] as const;

function EcosystemSlide({ isActive, t }: SlideProps) {
	const [active, setActive] = useState(0);
	const { copy, copied } = useClipboard();
	const fw = {
		...FRAMEWORKS_DETAIL[active],
		tagline: t.ecosystem.frameworks[active].tagline,
		features: t.ecosystem.frameworks[active].features,
	};

	return (
		<section className='relative w-screen h-screen flex flex-col justify-center overflow-hidden px-8 md:px-16 lg:px-24 py-20'>
			<div className='pointer-events-none absolute inset-0 -z-10'>
				<div
					className='absolute bottom-0 left-1/2 -translate-x-1/2 w-150 h-90 rounded-full opacity-[0.12] transition-all duration-700'
					style={{
						background: `radial-gradient(ellipse, ${fw.color} 0%, transparent 70%)`,
					}}
				/>
			</div>

			<div
				className={`mb-6 transition-all duration-1000 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
				<div className='mb-2 text-xs uppercase tracking-widest text-violet-400'>
					{t.ecosystem.label}
				</div>
				<h2 className='text-4xl md:text-5xl font-bold text-white mb-2'>
					{t.ecosystem.title}
				</h2>
				<p className='text-zinc-400 text-lg'>{t.ecosystem.subtitle}</p>
			</div>

			{/* framework tabs */}
			<div
				className={`flex gap-2 mb-6 flex-wrap transition-all duration-1000 delay-100 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
				{FRAMEWORKS_DETAIL.map((f, i) => (
					<button
						key={f.name}
						onClick={() => setActive(i)}
						className={`relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 border ${
							active === i
								? 'text-white'
								: 'border-transparent text-zinc-500 hover:text-zinc-300 hover:border-white/10'
						}`}
						style={
							active === i
								? {
										background: `${f.color}14`,
										borderColor: `${f.color}45`,
										color: f.color,
									}
								: {}
						}>
						{(() => {
							const Icon = FRAMEWORK_ICONS[f.name];
							return Icon ? (
								<Icon className='inline w-4 h-4 mr-1 align-text-bottom' />
							) : null;
						})()}
						{f.name}
						{f.status === 'in-development' && (
							<span className='ml-1.5 text-[9px] font-semibold uppercase tracking-wide text-amber-400/80'>
								WIP
							</span>
						)}
					</button>
				))}
			</div>

			{/* detail */}
			<div
				className={`grid grid-cols-1 lg:grid-cols-2 gap-4 transition-all duration-1000 delay-200 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
				{/* info card */}
				<div
					className='p-6 rounded-2xl border border-white/8'
					style={{ background: 'rgba(255,255,255,0.025)' }}>
					<div className='flex items-center gap-3 mb-5'>
						<span
							className='w-12 h-12 flex items-center justify-center rounded-xl'
							style={{
								background: `${fw.color}14`,
								color: fw.color,
							}}>
							{(() => {
								const Icon = FRAMEWORK_ICONS[fw.name];
								return Icon ? (
									<Icon className='w-6 h-6' />
								) : null;
							})()}
						</span>
						<div className='flex-1'>
							<div className='flex items-center gap-2 flex-wrap'>
								<span className='font-bold text-white text-xl'>
									{fw.name}
								</span>
								<span className='text-sm font-normal text-zinc-500'>
									{fw.version}
								</span>
								{fw.status === 'in-development' && (
									<span className='inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wide bg-amber-400/10 text-amber-400 border border-amber-400/25'>
										<span className='w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse' />
										En desarrollo
									</span>
								)}
								{fw.status === 'stable' && fw.npmUrl && (
									<a
										href={fw.npmUrl}
										target='_blank'
										rel='noopener noreferrer'
										className='inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-red-500/10 text-red-400 border border-red-400/25 hover:bg-red-500/20 transition-colors'
										title='Ver en npm'>
										<svg
											width='12'
											height='12'
											viewBox='0 0 12 12'
											fill='currentColor'
											aria-hidden='true'>
											<path d='M0 0h12v12H0V0zm1 1v10h5V3h3v8h1V1H1z' />
										</svg>
										npm
									</a>
								)}
							</div>
							<div className='text-sm text-zinc-400 mt-0.5'>
								{fw.tagline}
							</div>
						</div>
					</div>

					<div className='mb-5'>
						<p className='text-[10px] uppercase tracking-widest text-zinc-600 mb-2'>
							{t.ecosystem.install}
						</p>
						<div
							className='flex items-center gap-2 px-3 py-2.5 rounded-lg font-mono text-sm border border-white/7'
							style={{ background: 'rgba(0,0,0,0.3)' }}>
							<span className='text-violet-400'>$</span>
							<span className='text-zinc-300 flex-1'>
								npm install {fw.pkg}
							</span>
							<button
								onClick={() => copy(`npm install ${fw.pkg}`)}
								className='ml-auto shrink-0 p-1 rounded-md text-zinc-500 hover:text-zinc-200 transition-colors'
								title='Copiar'>
								{copied ? (
									<svg
										width='14'
										height='14'
										viewBox='0 0 24 24'
										fill='none'
										stroke='#4ade80'
										strokeWidth='2.5'
										strokeLinecap='round'
										strokeLinejoin='round'>
										<path d='M20 6 9 17l-5-5' />
									</svg>
								) : (
									<svg
										width='14'
										height='14'
										viewBox='0 0 24 24'
										fill='none'
										stroke='currentColor'
										strokeWidth='2'
										strokeLinecap='round'
										strokeLinejoin='round'>
										<rect
											width='14'
											height='14'
											x='8'
											y='8'
											rx='2'
											ry='2'
										/>
										<path d='M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2' />
									</svg>
								)}
							</button>
						</div>
					</div>

					<div>
						<p className='text-[10px] uppercase tracking-widest text-zinc-600 mb-2'>
							{t.ecosystem.highlights}
						</p>
						<ul className='flex flex-col gap-2'>
							{fw.features.map((feat) => (
								<li
									key={feat}
									className='flex items-center gap-2 text-sm text-zinc-400'>
									<span
										className='w-1.5 h-1.5 rounded-full shrink-0'
										style={{ background: fw.color }}
									/>
									{feat}
								</li>
							))}
						</ul>
					</div>
				</div>

				{/* code block */}
				<div
					className='p-6 rounded-2xl border border-white/8 overflow-hidden'
					style={{ background: 'rgba(0,0,0,0.3)' }}>
					<div className='flex gap-1.5 mb-4'>
						<div className='w-2.5 h-2.5 rounded-full bg-red-500/40' />
						<div className='w-2.5 h-2.5 rounded-full bg-yellow-500/40' />
						<div className='w-2.5 h-2.5 rounded-full bg-green-500/40' />
						<span className='ml-2 text-[10px] text-zinc-600 font-mono'>
							example.tsx
						</span>
					</div>
					<pre className='font-mono text-[11px] leading-[1.7] text-zinc-300 whitespace-pre-wrap'>{`// ${fw.name} — identical API across all frameworks
import { Button, Card, Input }
  from "${fw.pkg}"

// ✓  Fully typed props
// ✓  WAI-ARIA built in
// ✓  Design token theming

function MyComponent() {
  return (
    <Card variant="elevated">
      <Input
        label="Email"
        type="email"
      />
      <Button variant="primary">
        Subscribe
      </Button>
    </Card>
  )
}`}</pre>
				</div>
			</div>
		</section>
	);
}

// ─────────────────────────────────────────────────────────────────────────────
// Slide 4 · Developer Experience
// ─────────────────────────────────────────────────────────────────────────────

const DX_FEATURES = [
	{
		icon: '◈',
		title: 'TypeScript Native',
		desc: 'Every prop, variant, and event is strictly typed. Autocomplete that actually knows your design system.',
		highlight: '0 any',
		color: '#60a5fa',
	},
	{
		icon: '◎',
		title: 'Accessibility First',
		desc: 'WAI-ARIA patterns baked in. Keyboard navigation, screen-reader support and focus management — done.',
		highlight: 'WCAG 2.1 AA',
		color: '#34d399',
	},
	{
		icon: '◇',
		title: 'Design Token Theming',
		desc: 'Swap themes at runtime. CSS variables power everything: colors, spacing, radius, shadows.',
		highlight: 'CSS variables',
		color: '#f472b6',
	},
	{
		icon: '△',
		title: 'Tree-Shakeable',
		desc: 'Import only what you use. Each component is independently bundled with zero side effects.',
		highlight: '~2 KB avg',
		color: '#fb923c',
	},
	{
		icon: '⚡',
		title: 'HMR Design Tokens',
		desc: 'Change a token file and every component updates instantly across ALL frameworks — no page reload.',
		highlight: '< 50 ms',
		color: '#a78bfa',
	},
	{
		icon: '⊛',
		title: 'Testing Utilities',
		desc: 'Pre-built helpers for React Testing Library, Playwright, Vitest and Storybook interaction tests.',
		highlight: '@kivora/testing',
		color: '#67e8f9',
	},
];

function DXSlide({ isActive, t }: SlideProps) {
	return (
		<section className='relative w-screen h-screen flex flex-col justify-center overflow-hidden px-8 md:px-16 lg:px-24 py-20'>
			<div className='pointer-events-none absolute inset-0 -z-10'>
				<div
					className='absolute inset-0 opacity-[0.06]'
					style={{
						backgroundImage:
							'radial-gradient(circle at 50% 50%, #7c3aed 0%, transparent 55%)',
					}}
				/>
			</div>

			<div
				className={`mb-8 transition-all duration-1000 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
				<div className='mb-2 text-xs uppercase tracking-widest text-cyan-400'>
					{t.dx.label}
				</div>
				<h2 className='text-4xl md:text-5xl font-bold text-white mb-2'>
					{t.dx.title}{' '}
					<span
						className='bg-clip-text text-transparent'
						style={{
							backgroundImage:
								'linear-gradient(90deg, #a78bfa 0%, #67e8f9 100%)',
						}}>
						{t.dx.titleHighlight}
					</span>
				</h2>
				<p className='text-zinc-400 text-lg max-w-xl'>
					{t.dx.subtitle}
				</p>
			</div>

			<div
				className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 transition-all duration-1000 delay-150 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
				{DX_FEATURES.map((feat, i) => (
					<div
						key={feat.highlight}
						className='group p-5 rounded-2xl border border-white/7 hover:border-white/14 transition-all duration-300'
						style={{
							background: 'rgba(255,255,255,0.025)',
							transitionDelay: `${i * 55}ms`,
						}}>
						<div className='flex items-center justify-between mb-3'>
							<span
								className='text-xl w-9 h-9 flex items-center justify-center rounded-lg'
								style={{
									background: `${feat.color}16`,
									color: feat.color,
								}}>
								{feat.icon}
							</span>
							<span
								className='text-[10px] px-2 py-0.5 rounded-full border'
								style={{
									color: feat.color,
									borderColor: `${feat.color}40`,
									background: `${feat.color}10`,
								}}>
								{feat.highlight}
							</span>
						</div>
						<h3 className='font-semibold text-zinc-200 mb-1 text-sm'>
							{t.dx.features[i].title}
						</h3>
						<p className='text-xs text-zinc-500 leading-5'>
							{t.dx.features[i].desc}
						</p>
					</div>
				))}
			</div>
		</section>
	);
}

// ─────────────────────────────────────────────────────────────────────────────
// Slide 5 · Get Started
// ─────────────────────────────────────────────────────────────────────────────

const STEPS_CMD = [
	'npm install @kivora/react',
	"import '@kivora/react/styles.css';\nimport { Button } from '@kivora/react'",
	'<Button>Hello, world ✨</Button>',
] as const;

function GetStartedSlide({ isActive, t }: SlideProps) {
	const { copy: copyInstall, copied } = useClipboard();
	const steps = t.getStarted.steps.map((s, i) => ({
		...s,
		n: String(i + 1).padStart(2, '0'),
		cmd: STEPS_CMD[i],
	}));

	return (
		<section className='relative w-screen h-screen flex flex-col justify-center items-center overflow-hidden px-8 md:px-16 lg:px-24 py-20'>
			<div className='pointer-events-none absolute inset-0 -z-10'>
				<div
					className='absolute top-1/4 -right-64 w-175 h-175 rounded-full opacity-15'
					style={{
						background:
							'radial-gradient(circle, #7c3aed 0%, transparent 60%)',
					}}
				/>
				<div
					className='absolute bottom-1/4 -left-64 w-125 h-125 rounded-full opacity-10'
					style={{
						background:
							'radial-gradient(circle, #06b6d4 0%, transparent 60%)',
					}}
				/>
				<div
					className='absolute inset-0 opacity-[0.03]'
					style={{
						backgroundImage:
							'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
						backgroundSize: '60px 60px',
					}}
				/>
			</div>

			<div
				className={`max-w-3xl w-full text-center transition-all duration-1000 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
				<div className='mb-2 text-xs uppercase tracking-widest text-violet-400'>
					{t.getStarted.label}
				</div>
				<h2 className='text-5xl md:text-6xl xl:text-7xl font-bold text-white mb-4 tracking-tight'>
					{t.getStarted.title}{' '}
					<span
						className='bg-clip-text text-transparent'
						style={{
							backgroundImage:
								'linear-gradient(130deg, #a78bfa 0%, #06b6d4 100%)',
						}}>
						{t.getStarted.titleHighlight}
					</span>
				</h2>
				<p className='text-zinc-400 text-lg mb-10 max-w-lg mx-auto leading-relaxed'>
					{t.getStarted.subtitle}
				</p>

				{/* steps */}
				<div className='flex flex-col md:flex-row gap-3 mb-8'>
					{steps.map((step) => (
						<div
							key={step.n}
							className='flex-1 p-5 rounded-2xl border border-white/8 text-left'
							style={{ background: 'rgba(255,255,255,0.025)' }}>
							<div className='text-xs font-mono text-zinc-600 mb-1'>
								{step.n}
							</div>
							<div className='font-semibold text-zinc-200 mb-2'>
								{step.title}
							</div>
							<div
								className='font-mono text-xs text-cyan-300/80 px-3 py-2 rounded-lg mb-2 whitespace-pre'
								style={{ background: 'rgba(0,0,0,0.3)' }}>
								{step.cmd}
							</div>
							<div className='text-[10px] text-zinc-600'>
								{step.note}
							</div>
						</div>
					))}
				</div>

				{/* install CTA */}
				<div className='flex flex-wrap gap-4 justify-center items-center mb-8'>
					<button
						onClick={() => copyInstall('npm install @kivora/react')}
						className='group flex items-center gap-3 px-5 py-3.5 rounded-xl font-mono text-sm text-zinc-300 border border-white/10 transition-all duration-200 hover:border-white/25'
						style={{ background: 'rgba(255,255,255,0.04)' }}>
						<span className='text-violet-400'>$</span>
						npm install @kivora/react
						<span
							className={`text-xs ml-1 transition-colors ${copied ? 'text-green-400' : 'text-zinc-600 group-hover:text-zinc-500'}`}>
							{copied
								? t.getStarted.copied
								: t.getStarted.copyHint}
						</span>
					</button>
					<button
						className='px-6 py-3.5 rounded-xl text-sm font-semibold text-white transition-all duration-200 hover:scale-[1.03] active:scale-95'
						style={{
							background:
								'linear-gradient(135deg, #7c3aed, #06b6d4)',
							boxShadow: '0 0 36px rgba(124,58,237,0.3)',
						}}>
						{t.getStarted.readDocs}
					</button>
				</div>

				{/* links */}
				<div className='flex flex-wrap gap-x-6 gap-y-2 justify-center text-sm text-zinc-600'>
					{t.getStarted.links.map((link) => (
						<a
							key={link}
							href='#'
							className='hover:text-zinc-300 transition-colors'>
							{link}
						</a>
					))}
				</div>
			</div>
		</section>
	);
}

// ─────────────────────────────────────────────────────────────────────────────
// Mobile Layout · vertical scroll
// ─────────────────────────────────────────────────────────────────────────────

interface MobileHomeProps {
	t: Translation;
	locale: string;
	setLocale: (l: 'en' | 'es') => void;
}

function MobileHome({ t, locale, setLocale }: MobileHomeProps) {
	const [ecoActive, setEcoActive] = useState(0);
	const { copy: copyInstall, copied } = useClipboard();

	const fw = {
		...FRAMEWORKS_DETAIL[ecoActive],
		tagline: t.ecosystem.frameworks[ecoActive].tagline,
		features: t.ecosystem.frameworks[ecoActive].features,
	};

	const steps = t.getStarted.steps.map((s, i) => ({
		...s,
		n: String(i + 1).padStart(2, '0'),
		cmd: STEPS_CMD[i],
	}));

	return (
		<div
			className='min-h-screen'
			style={{ background: '#07070f' }}>
			{/* noise */}
			<div
				className='pointer-events-none fixed inset-0 z-50 opacity-[0.022]'
				style={{
					backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
					backgroundRepeat: 'repeat',
				}}
			/>

			{/* ── Header ── */}
			<header
				className='sticky top-0 z-40 flex items-center justify-between px-5 py-4 border-b border-white/6'
				style={{
					background: 'rgba(7,7,15,0.85)',
					backdropFilter: 'blur(16px)',
				}}>
				<div className='flex items-center gap-2.5'>
					<div
						className='w-7 h-7 rounded-lg flex items-center justify-center text-white font-bold text-sm'
						style={{
							background:
								'linear-gradient(135deg,#7c3aed,#06b6d4)',
						}}>
						K
					</div>
					<span className='font-semibold text-white text-sm tracking-tight'>
						kivora ui
					</span>
				</div>
				<div className='flex items-center gap-2'>
					<button
						onClick={() => setLocale(locale === 'en' ? 'es' : 'en')}
						className='px-3 py-1 rounded-md text-xs font-mono border border-white/10 text-zinc-400 hover:text-zinc-200 transition-all'
						style={{ background: 'rgba(255,255,255,0.04)' }}>
						{locale === 'en' ? 'ES' : 'EN'}
					</button>
					<button
						className='px-4 py-1.5 rounded-lg text-xs text-white font-medium'
						style={{
							background:
								'linear-gradient(135deg,#7c3aed,#06b6d4)',
						}}>
						{t.nav.getStarted}
					</button>
				</div>
			</header>

			{/* ── Hero ── */}
			<section className='relative px-5 pt-14 pb-16 overflow-hidden'>
				<div className='pointer-events-none absolute inset-0 -z-10'>
					<div
						className='absolute -top-24 -left-24 w-72 h-72 rounded-full opacity-20'
						style={{
							background:
								'radial-gradient(circle,#7c3aed 0%,transparent 65%)',
						}}
					/>
					<div
						className='absolute -bottom-16 -right-24 w-64 h-64 rounded-full opacity-15'
						style={{
							background:
								'radial-gradient(circle,#06b6d4 0%,transparent 65%)',
						}}
					/>
				</div>

				<div
					className='inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-violet-500/30 text-xs text-violet-400 mb-6'
					style={{ background: 'rgba(124,58,237,0.08)' }}>
					<span className='w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse' />
					{t.hero.badge}
				</div>

				<h1 className='text-4xl font-bold leading-[1.08] tracking-tight text-white mb-5'>
					{t.hero.h1Line1}
					<br />
					<span
						className='bg-clip-text text-transparent'
						style={{
							backgroundImage:
								'linear-gradient(130deg,#a78bfa 0%,#06b6d4 100%)',
						}}>
						{t.hero.h1Line2}
					</span>
				</h1>

				<p className='text-base text-zinc-400 leading-relaxed mb-7 max-w-sm'>
					{t.hero.desc}
				</p>

				<div className='flex gap-3 mb-7 flex-wrap'>
					<button
						className='px-6 py-3 rounded-xl text-sm font-semibold text-white active:scale-95'
						style={{
							background:
								'linear-gradient(135deg,#7c3aed,#06b6d4)',
							boxShadow: '0 0 28px rgba(124,58,237,0.35)',
						}}>
						{t.hero.ctaPrimary}
					</button>
					<button
						className='px-6 py-3 rounded-xl text-sm font-semibold text-zinc-300 border border-white/10'
						style={{ background: 'rgba(255,255,255,0.04)' }}>
						{t.hero.ctaSecondary}
					</button>
				</div>

				<div className='flex flex-wrap gap-2'>
					{FRAMEWORKS_BADGES.map((fw) => (
						<span
							key={fw}
							className='px-3 py-1 rounded-full text-xs border border-white/10 text-zinc-400'
							style={{ background: 'rgba(255,255,255,0.035)' }}>
							{fw}
						</span>
					))}
				</div>
			</section>

			{/* ── Use Cases ── */}
			<section className='relative px-5 py-14 overflow-hidden'>
				<div
					className='pointer-events-none absolute top-0 right-0 w-64 h-64 rounded-full opacity-10 -z-10'
					style={{
						background:
							'radial-gradient(circle,#7c3aed 0%,transparent 70%)',
					}}
				/>

				<div className='mb-2 text-xs uppercase tracking-widest text-violet-400'>
					{t.useCases.label}
				</div>
				<h2 className='text-3xl font-bold text-white mb-2'>
					{t.useCases.title}
				</h2>
				<p className='text-zinc-400 text-sm leading-relaxed mb-8 max-w-sm'>
					{t.useCases.subtitle}
				</p>

				<div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
					{USE_CASES.map((uc, i) => (
						<div
							key={uc.title}
							className='p-4 rounded-2xl border border-white/7'
							style={{ background: 'rgba(255,255,255,0.025)' }}>
							<div className='flex items-center gap-3 mb-2.5'>
								<div
									className='w-8 h-8 rounded-xl flex items-center justify-center text-base font-bold shrink-0'
									style={{
										background: `${uc.color}18`,
										color: uc.color,
									}}>
									{uc.icon}
								</div>
								<h3 className='font-semibold text-zinc-200 text-sm leading-snug'>
									{t.useCases.items[i].title}
								</h3>
							</div>
							<p className='text-xs text-zinc-500 leading-5 mb-3'>
								{t.useCases.items[i].desc}
							</p>
							<div className='flex flex-wrap gap-1.5'>
								{uc.tags.map((tag) => (
									<span
										key={tag}
										className='px-2 py-0.5 rounded-full text-[10px] text-zinc-600 border border-white/7'>
										{tag}
									</span>
								))}
							</div>
						</div>
					))}
				</div>
			</section>

			{/* ── Ecosystem ── */}
			<section className='relative px-5 py-14 overflow-hidden'>
				<div
					className='pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-80 h-48 rounded-full opacity-[0.12] -z-10 transition-all duration-700'
					style={{
						background: `radial-gradient(ellipse,${fw.color} 0%,transparent 70%)`,
					}}
				/>

				<div className='mb-2 text-xs uppercase tracking-widest text-violet-400'>
					{t.ecosystem.label}
				</div>
				<h2 className='text-3xl font-bold text-white mb-2'>
					{t.ecosystem.title}
				</h2>
				<p className='text-zinc-400 text-sm leading-relaxed mb-7'>
					{t.ecosystem.subtitle}
				</p>

				{/* framework tabs — horizontal scroll */}
				<div
					className='flex gap-2 mb-6 overflow-x-auto pb-1 -mx-5 px-5'
					style={{ scrollbarWidth: 'none' }}>
					{FRAMEWORKS_DETAIL.map((f, i) => (
						<button
							key={f.name}
							onClick={() => setEcoActive(i)}
							className={`px-3 py-2 rounded-xl text-sm font-medium transition-all border shrink-0 ${
								ecoActive === i
									? 'text-white'
									: 'border-transparent text-zinc-500'
							}`}
							style={
								ecoActive === i
									? {
											background: `${f.color}14`,
											borderColor: `${f.color}45`,
											color: f.color,
										}
									: {}
							}>
							{(() => {
								const Icon = FRAMEWORK_ICONS[f.name];
								return Icon ? (
									<Icon className='inline w-3.5 h-3.5 mr-1 align-text-bottom' />
								) : null;
							})()}
							{f.name}
							{f.status === 'in-development' && (
								<span className='ml-1 text-[9px] font-semibold uppercase tracking-wide text-amber-400/80'>
									WIP
								</span>
							)}
						</button>
					))}
				</div>

				{/* framework card */}
				<div
					className='p-5 rounded-2xl border border-white/8 mb-4'
					style={{ background: 'rgba(255,255,255,0.025)' }}>
					<div className='flex items-center gap-3 mb-5'>
						<span
							className='w-11 h-11 flex items-center justify-center rounded-xl shrink-0'
							style={{
								background: `${fw.color}14`,
								color: fw.color,
							}}>
							{(() => {
								const Icon = FRAMEWORK_ICONS[fw.name];
								return Icon ? (
									<Icon className='w-5 h-5' />
								) : null;
							})()}
						</span>
						<div className='flex-1'>
							<div className='flex items-center gap-2 flex-wrap'>
								<span className='font-bold text-white text-lg'>
									{fw.name}
								</span>
								<span className='text-sm font-normal text-zinc-500'>
									{fw.version}
								</span>
								{fw.status === 'in-development' && (
									<span className='inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wide bg-amber-400/10 text-amber-400 border border-amber-400/25'>
										<span className='w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse' />
										En desarrollo
									</span>
								)}
								{fw.status === 'stable' && fw.npmUrl && (
									<a
										href={fw.npmUrl}
										target='_blank'
										rel='noopener noreferrer'
										className='inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-red-500/10 text-red-400 border border-red-400/25 hover:bg-red-500/20 transition-colors'
										title='Ver en npm'>
										<svg
											width='12'
											height='12'
											viewBox='0 0 12 12'
											fill='currentColor'
											aria-hidden='true'>
											<path d='M0 0h12v12H0V0zm1 1v10h5V3h3v8h1V1H1z' />
										</svg>
										npm
									</a>
								)}
							</div>
							<div className='text-sm text-zinc-400 mt-0.5'>
								{fw.tagline}
							</div>
						</div>
					</div>

					<p className='text-[10px] uppercase tracking-widest text-zinc-600 mb-2'>
						{t.ecosystem.install}
					</p>
					<div
						className='flex items-center gap-2 px-3 py-2.5 rounded-lg font-mono text-sm border border-white/7 mb-5'
						style={{ background: 'rgba(0,0,0,0.3)' }}>
						<span className='text-violet-400'>$</span>
						<span className='text-zinc-300 text-xs flex-1'>
							npm install {fw.pkg}
						</span>
						<button
							onClick={() => copyInstall(`npm install ${fw.pkg}`)}
							className='ml-auto shrink-0 p-1 rounded-md text-zinc-500 hover:text-zinc-200 transition-colors'
							title='Copiar'>
							{copied ? (
								<svg
									width='13'
									height='13'
									viewBox='0 0 24 24'
									fill='none'
									stroke='#4ade80'
									strokeWidth='2.5'
									strokeLinecap='round'
									strokeLinejoin='round'>
									<path d='M20 6 9 17l-5-5' />
								</svg>
							) : (
								<svg
									width='13'
									height='13'
									viewBox='0 0 24 24'
									fill='none'
									stroke='currentColor'
									strokeWidth='2'
									strokeLinecap='round'
									strokeLinejoin='round'>
									<rect
										width='14'
										height='14'
										x='8'
										y='8'
										rx='2'
										ry='2'
									/>
									<path d='M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2' />
								</svg>
							)}
						</button>
					</div>

					<p className='text-[10px] uppercase tracking-widest text-zinc-600 mb-2'>
						{t.ecosystem.highlights}
					</p>
					<ul className='flex flex-col gap-2'>
						{fw.features.map((feat) => (
							<li
								key={feat}
								className='flex items-center gap-2 text-sm text-zinc-400'>
								<span
									className='w-1.5 h-1.5 rounded-full shrink-0'
									style={{ background: fw.color }}
								/>
								{feat}
							</li>
						))}
					</ul>
				</div>
			</section>

			{/* ── Developer Experience ── */}
			<section className='relative px-5 py-14 overflow-hidden'>
				<div
					className='pointer-events-none absolute inset-0 opacity-[0.05] -z-10'
					style={{
						backgroundImage:
							'radial-gradient(circle at 50% 50%,#7c3aed 0%,transparent 55%)',
					}}
				/>

				<div className='mb-2 text-xs uppercase tracking-widest text-cyan-400'>
					{t.dx.label}
				</div>
				<h2 className='text-3xl font-bold text-white mb-2'>
					{t.dx.title}{' '}
					<span
						className='bg-clip-text text-transparent'
						style={{
							backgroundImage:
								'linear-gradient(90deg,#a78bfa 0%,#67e8f9 100%)',
						}}>
						{t.dx.titleHighlight}
					</span>
				</h2>
				<p className='text-zinc-400 text-sm leading-relaxed mb-8 max-w-sm'>
					{t.dx.subtitle}
				</p>

				<div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
					{DX_FEATURES.map((feat, i) => (
						<div
							key={feat.highlight}
							className='p-4 rounded-2xl border border-white/7'
							style={{ background: 'rgba(255,255,255,0.025)' }}>
							<div className='flex items-center justify-between mb-3'>
								<span
									className='text-xl w-9 h-9 flex items-center justify-center rounded-lg'
									style={{
										background: `${feat.color}16`,
										color: feat.color,
									}}>
									{feat.icon}
								</span>
								<span
									className='text-[10px] px-2 py-0.5 rounded-full border'
									style={{
										color: feat.color,
										borderColor: `${feat.color}40`,
										background: `${feat.color}10`,
									}}>
									{feat.highlight}
								</span>
							</div>
							<h3 className='font-semibold text-zinc-200 mb-1 text-sm'>
								{t.dx.features[i].title}
							</h3>
							<p className='text-xs text-zinc-500 leading-5'>
								{t.dx.features[i].desc}
							</p>
						</div>
					))}
				</div>
			</section>

			{/* ── Get Started ── */}
			<section className='relative px-5 py-14 pb-20 overflow-hidden'>
				<div
					className='pointer-events-none absolute top-0 -right-32 w-80 h-80 rounded-full opacity-15 -z-10'
					style={{
						background:
							'radial-gradient(circle,#7c3aed 0%,transparent 60%)',
					}}
				/>
				<div
					className='pointer-events-none absolute bottom-0 -left-32 w-64 h-64 rounded-full opacity-10 -z-10'
					style={{
						background:
							'radial-gradient(circle,#06b6d4 0%,transparent 60%)',
					}}
				/>

				<div className='mb-2 text-xs uppercase tracking-widest text-violet-400'>
					{t.getStarted.label}
				</div>
				<h2 className='text-4xl font-bold text-white mb-3 tracking-tight'>
					{t.getStarted.title}{' '}
					<span
						className='bg-clip-text text-transparent'
						style={{
							backgroundImage:
								'linear-gradient(130deg,#a78bfa 0%,#06b6d4 100%)',
						}}>
						{t.getStarted.titleHighlight}
					</span>
				</h2>
				<p className='text-zinc-400 text-sm leading-relaxed mb-8 max-w-sm'>
					{t.getStarted.subtitle}
				</p>

				{/* steps */}
				<div className='flex flex-col gap-3 mb-8'>
					{steps.map((step) => (
						<div
							key={step.n}
							className='p-4 rounded-2xl border border-white/8'
							style={{ background: 'rgba(255,255,255,0.025)' }}>
							<div className='text-xs font-mono text-zinc-600 mb-1'>
								{step.n}
							</div>
							<div className='font-semibold text-zinc-200 mb-2 text-sm'>
								{step.title}
							</div>
							<div
								className='font-mono text-xs text-cyan-300/80 px-3 py-2 rounded-lg mb-2 break-all whitespace-pre-wrap'
								style={{ background: 'rgba(0,0,0,0.3)' }}>
								{step.cmd}
							</div>
							<div className='text-[10px] text-zinc-600'>
								{step.note}
							</div>
						</div>
					))}
				</div>

				{/* CTA */}
				<div className='flex flex-col gap-3 mb-8'>
					<button
						onClick={() => copyInstall('npm install @kivora/react')}
						className='flex items-center justify-center gap-3 px-5 py-3.5 rounded-xl font-mono text-sm text-zinc-300 border border-white/10 w-full'
						style={{ background: 'rgba(255,255,255,0.04)' }}>
						<span className='text-violet-400'>$</span>
						<span className='text-xs truncate'>
							npm install @kivora/react
						</span>
						<span
							className={`text-xs ml-auto transition-colors ${copied ? 'text-green-400' : 'text-zinc-600'}`}>
							{copied
								? t.getStarted.copied
								: t.getStarted.copyHint}
						</span>
					</button>
					<button
						className='w-full py-3.5 rounded-xl text-sm font-semibold text-white active:scale-95'
						style={{
							background:
								'linear-gradient(135deg,#7c3aed,#06b6d4)',
							boxShadow: '0 0 28px rgba(124,58,237,0.3)',
						}}>
						{t.getStarted.readDocs}
					</button>
				</div>

				{/* links */}
				<div className='flex flex-wrap gap-x-5 gap-y-2 text-sm text-zinc-600'>
					{t.getStarted.links.map((link) => (
						<a
							key={link}
							href='#'
							className='hover:text-zinc-300 transition-colors'>
							{link}
						</a>
					))}
				</div>
			</section>
		</div>
	);
}

// ─────────────────────────────────────────────────────────────────────────────
// Main Page
// ─────────────────────────────────────────────────────────────────────────────

const TOTAL = 5;

export default function Home() {
	const { locale, setLocale, t } = useLocale();
	const isMobile = useIsMobile(768);
	const { current, go } = useSlider(TOTAL, isMobile === false);

	// Wait until we know the breakpoint — avoid flash of wrong layout
	if (isMobile === null) {
		return <div style={{ background: '#07070f', minHeight: '100vh' }} />;
	}

	if (isMobile) {
		return (
			<MobileHome
				t={t}
				locale={locale}
				setLocale={setLocale}
			/>
		);
	}

	return (
		<div
			className='fixed inset-0 overflow-hidden'
			style={{ background: '#07070f' }}>
			{/* noise grain overlay */}
			<div
				className='pointer-events-none fixed inset-0 z-50 opacity-[0.022]'
				style={{
					backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
					backgroundRepeat: 'repeat',
				}}
			/>

			{/* ── Logo + Nav ── */}
			<div className='fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 md:px-10 py-5'>
				<div className='flex items-center gap-2.5'>
					<div
						className='w-7 h-7 rounded-lg flex items-center justify-center text-white font-bold text-sm'
						style={{
							background:
								'linear-gradient(135deg, #7c3aed, #06b6d4)',
						}}>
						K
					</div>
					<span className='font-semibold text-white text-sm tracking-tight'>
						kivora ui
					</span>
				</div>
				<nav className='hidden md:flex items-center gap-5 text-sm text-zinc-500'>
					<a
						href='/docs'
						className='hover:text-zinc-300 transition-colors'>
						{t.nav.docs}
					</a>
					<a
						href='/components'
						className='hover:text-zinc-300 transition-colors'>
						{t.nav.components}
					</a>
					<a
						href='/roadmap'
						className='hover:text-zinc-300 transition-colors'>
						{t.nav.roadmap}
					</a>
					<button
						onClick={() => setLocale(locale === 'en' ? 'es' : 'en')}
						className='px-3 py-1 rounded-md text-xs font-mono border border-white/10 text-zinc-400 hover:text-zinc-200 hover:border-white/25 transition-all'
						style={{ background: 'rgba(255,255,255,0.04)' }}>
						{locale === 'en' ? 'ES' : 'EN'}
					</button>
					<button
						className='px-4 py-1.5 rounded-lg text-xs text-white font-medium transition-all hover:scale-105'
						style={{
							background:
								'linear-gradient(135deg, #7c3aed, #06b6d4)',
						}}>
						{t.nav.getStarted}
					</button>
				</nav>
			</div>

			{/* ── Navigation dots (right side) ── */}
			<div className='fixed right-5 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-3 items-end'>
				{t.slideLabels.map((label, i) => (
					<button
						key={label}
						onClick={() => go(i)}
						className='group flex items-center gap-2.5'
						aria-label={`Go to ${label}`}>
						<span
							className={`text-[11px] font-medium transition-all duration-300 ${
								current === i
									? 'text-zinc-300 opacity-100 translate-x-0'
									: 'text-zinc-600 opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0'
							}`}>
							{label}
						</span>
						<div
							className={`rounded-full transition-all duration-300 ${
								current === i
									? 'w-6 h-2 bg-violet-400'
									: 'w-2 h-2 bg-zinc-700 group-hover:bg-zinc-500'
							}`}
						/>
					</button>
				))}
			</div>

			{/* ── Slide counter (bottom left) ── */}
			<div className='fixed bottom-6 left-8 z-40 font-mono text-xs text-zinc-700 tabular-nums'>
				{String(current + 1).padStart(2, '0')}&thinsp;/&thinsp;
				{String(TOTAL).padStart(2, '0')}
			</div>

			{/* ── Scroll hint (bottom centre, slide 0 only) ── */}
			<div
				className={`fixed bottom-7 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center gap-1.5 transition-all duration-500 pointer-events-none ${
					current === 0 ? 'opacity-100' : 'opacity-0'
				}`}>
				<span className='text-[11px] text-zinc-600 tracking-widest uppercase'>
					{t.scroll}
				</span>
				<div className='w-px h-6 bg-linear-to-b from-zinc-600 to-transparent' />
			</div>

			{/* ── Slider track ── */}
			<div
				className='flex h-full'
				style={{
					width: `${TOTAL * 100}vw`,
					transform: `translateX(-${current * 100}vw)`,
					transition:
						'transform 0.85s cubic-bezier(0.77, 0, 0.18, 1)',
				}}>
				<HeroSlide
					isActive={current === 0}
					t={t}
				/>
				<UseCasesSlide
					isActive={current === 1}
					t={t}
				/>
				<EcosystemSlide
					isActive={current === 2}
					t={t}
				/>
				<DXSlide
					isActive={current === 3}
					t={t}
				/>
				<GetStartedSlide
					isActive={current === 4}
					t={t}
				/>
			</div>
		</div>
	);
}
