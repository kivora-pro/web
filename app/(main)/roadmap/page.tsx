import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Roadmap — Kivora UI',
	description:
		'Hoja de ruta pública de Kivora UI. Mira qué hay en desarrollo, qué está planificado y qué ya se entregó.',
};

type Status = 'done' | 'in-progress' | 'planned' | 'idea';

interface RoadmapItem {
	label: string;
	status?: Status;
}

interface Quarter {
	quarter: string;
	title: string;
	description: string;
	status: Status;
	items: RoadmapItem[];
}

const ROADMAP: Quarter[] = [
	{
		quarter: 'Q1 2026',
		title: 'Núcleo estable',
		description:
			'Componentes de UI fundamentales, sistema de diseño y hooks principales listos para producción.',
		status: 'done',
		items: [
			{ label: 'Button, ActionIcon, IconButton' },
			{ label: 'Input, Textarea, Select, Checkbox, Radio, Switch' },
			{ label: 'Modal, Drawer, Popover, Tooltip' },
			{ label: 'Badge, Avatar, Skeleton, Spinner' },
			{ label: 'Tabs, Breadcrumb, Pagination, Stepper' },
			{ label: 'Table, Accordion' },
			{ label: 'Text, Title, Code' },
			{ label: '65+ hooks (estado, DOM, browser, timers…)' },
			{ label: 'Spotlight / command palette' },
			{ label: 'Modals imperativos' },
			{ label: 'Dropzone' },
			{ label: 'Carousel' },
			{ label: 'Suite de fechas (DatePicker, RangePicker, TimePicker)' },
		],
	},
	{
		quarter: 'Q2 2026',
		title: 'Ecosistema & DX',
		description:
			'Mejoras en la experiencia de desarrollo, nuevas extensiones y soporte ampliado de frameworks.',
		status: 'in-progress',
		items: [
			{ label: 'Notifications / toast system', status: 'in-progress' },
			{ label: 'ContextMenu y RightClickMenu', status: 'in-progress' },
			{ label: 'Tour / onboarding steps', status: 'planned' },
			{ label: 'Charts (wrapper Recharts)', status: 'planned' },
			{ label: 'CLI — kivora add <component>', status: 'planned' },
			{ label: 'VS Code snippets extension', status: 'planned' },
			{ label: 'Figma kit (Community)', status: 'planned' },
		],
	},
	{
		quarter: 'Q3 2026',
		title: 'Multi-framework',
		description:
			'Llevar la misma API de componentes a Solid, Svelte y Vue manteniendo los tokens de diseño compartidos.',
		status: 'planned',
		items: [
			{ label: 'Solid.js port', status: 'planned' },
			{ label: 'Svelte 5 port', status: 'planned' },
			{ label: 'Vue 3 port', status: 'planned' },
			{ label: 'Design tokens paquete independiente', status: 'planned' },
			{ label: 'Tailwind v4 preset público', status: 'planned' },
		],
	},
	{
		quarter: 'Q4 2026',
		title: 'React Native',
		description:
			'Componentes nativos iOS/Android con la misma API que la versión web, integración con Expo.',
		status: 'planned',
		items: [
			{ label: 'Core components nativos', status: 'planned' },
			{ label: 'Expo SDK 52 compatible', status: 'planned' },
			{ label: 'Navigation primitives', status: 'planned' },
			{ label: 'Haptics & animations (Reanimated 3)', status: 'planned' },
			{ label: 'Storybook Native integration', status: 'planned' },
		],
	},
	{
		quarter: '2027+',
		title: 'Ideas & Backlog',
		description:
			'Funcionalidades en evaluación según prioridad y feedback de la comunidad.',
		status: 'idea',
		items: [
			{ label: 'AI-generated component variants', status: 'idea' },
			{ label: 'E2E testing helpers', status: 'idea' },
			{ label: 'Server Components primitives', status: 'idea' },
			{ label: 'Web Components build target', status: 'idea' },
		],
	},
];

const STATUS_CONFIG: Record<
	Status,
	{ label: string; dot: string; badge: string; card: string; pill: string }
> = {
	done: {
		label: 'Completado',
		dot: 'bg-emerald-400',
		badge: 'border-emerald-500/30 text-emerald-400',
		card: 'border-emerald-500/15 bg-emerald-500/5',
		pill: 'bg-emerald-400/10 text-emerald-400',
	},
	'in-progress': {
		label: 'En progreso',
		dot: 'bg-brand animate-pulse',
		badge: 'border-brand/40 text-brand',
		card: 'border-brand/15 bg-brand/5',
		pill: 'bg-brand/10 text-brand',
	},
	planned: {
		label: 'Planificado',
		dot: 'bg-zinc-500',
		badge: 'border-white/10 text-zinc-400',
		card: 'border-white/8 bg-white/2',
		pill: 'bg-white/5 text-zinc-500',
	},
	idea: {
		label: 'Idea',
		dot: 'bg-zinc-700',
		badge: 'border-white/6 text-zinc-600',
		card: 'border-white/5 bg-white/1',
		pill: 'bg-white/3 text-zinc-600',
	},
};

function ItemDot({ status }: { status: Status }) {
	const cfg = STATUS_CONFIG[status];
	return (
		<span
			className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${cfg.dot}`}
		/>
	);
}

export default function RoadmapPage() {
	const done = ROADMAP.filter((q) => q.status === 'done').length;
	const total = ROADMAP.filter((q) => q.status !== 'idea').length;

	return (
		<div className='min-h-screen bg-[#07070f]'>
			{/* Hero */}
			<div className='mx-auto max-w-3xl px-6 pb-16 pt-32'>
				<p className='mb-3 text-xs font-semibold uppercase tracking-widest text-zinc-500'>
					Hoja de ruta pública
				</p>
				<h1 className='mb-5 text-4xl font-bold tracking-tight text-white'>
					Roadmap
				</h1>
				<p className='max-w-xl text-base leading-relaxed text-zinc-400'>
					Planificación abierta de Kivora UI. Sujeta a cambios según
					prioridades y feedback de la comunidad. ¿Tienes una
					sugerencia?{' '}
					<a
						href='https://github.com/kivora-pro/module/issues'
						target='_blank'
						rel='noopener noreferrer'
						className='text-white underline underline-offset-2 hover:text-zinc-200'>
						Abre un issue
					</a>
					.
				</p>

				{/* Progress bar */}
				<div className='mt-8'>
					<div className='mb-2 flex items-center justify-between text-xs text-zinc-500'>
						<span>
							{done} de {total} fases completadas
						</span>
						<span>{Math.round((done / total) * 100)}%</span>
					</div>
					<div className='h-1.5 w-full overflow-hidden rounded-full bg-white/6'>
						<div
							className='h-full rounded-full bg-linear-to-r from-emerald-500 to-emerald-400 transition-all'
							style={{ width: `${(done / total) * 100}%` }}
						/>
					</div>
				</div>

				{/* Legend */}
				<div className='mt-6 flex flex-wrap gap-4'>
					{(
						Object.entries(STATUS_CONFIG) as [
							Status,
							(typeof STATUS_CONFIG)[Status],
						][]
					).map(([key, cfg]) => (
						<div
							key={key}
							className='flex items-center gap-1.5'>
							<span
								className={`h-1.5 w-1.5 rounded-full ${cfg.dot}`}
							/>
							<span className='text-xs text-zinc-500'>
								{cfg.label}
							</span>
						</div>
					))}
				</div>
			</div>

			{/* Timeline */}
			<div className='mx-auto max-w-3xl space-y-4 px-6 pb-32'>
				{ROADMAP.map((q) => {
					const cfg = STATUS_CONFIG[q.status];
					return (
						<div
							key={q.quarter}
							className={`rounded-2xl border p-6 ${cfg.card}`}>
							{/* Header */}
							<div className='mb-4 flex flex-wrap items-start gap-3'>
								<div className='flex flex-1 flex-col gap-1'>
									<div className='flex flex-wrap items-center gap-2'>
										<span
											className={`rounded-full border px-2.5 py-0.5 text-xs font-medium ${cfg.badge}`}>
											{q.quarter}
										</span>
										<span
											className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${cfg.pill}`}>
											{cfg.label}
										</span>
									</div>
									<h2 className='text-base font-semibold text-white'>
										{q.title}
									</h2>
									<p className='text-xs leading-relaxed text-zinc-500'>
										{q.description}
									</p>
								</div>
							</div>

							{/* Items */}
							<ul className='grid gap-1.5 sm:grid-cols-2'>
								{q.items.map((item) => {
									const itemStatus = item.status ?? q.status;

									return (
										<li
											key={item.label}
											className='flex items-start gap-2 text-sm text-zinc-400'>
											<ItemDot status={itemStatus} />
											<span
												className={
													itemStatus === 'done'
														? 'line-through text-zinc-600'
														: ''
												}>
												{item.label}
											</span>
										</li>
									);
								})}
							</ul>
						</div>
					);
				})}
			</div>
		</div>
	);
}
