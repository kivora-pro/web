export default function RoadmapPage() {
	const items = [
		{
			quarter: 'Q1 2026',
			title: 'Núcleo estable',
			items: [
				'Button, ActionIcon, Input, Select',
				'Modal, Drawer, Tooltip',
				'Hooks principales',
			],
			done: true,
		},
		{
			quarter: 'Q2 2026',
			title: 'Extensiones',
			items: [
				'Spotlight / command palette',
				'Notifications imperativas',
				'Dropzone y FileInput avanzado',
			],
			done: false,
		},
		{
			quarter: 'Q3 2026',
			title: 'Multi-framework',
			items: ['Solid.js port', 'Svelte 5 port', 'Vue 3 port'],
			done: false,
		},
		{
			quarter: 'Q4 2026',
			title: 'React Native',
			items: [
				'Componentes nativos iOS/Android',
				'Expo SDK 52',
				'Design tokens compartidos',
			],
			done: false,
		},
	];

	return (
		<div className='mx-auto w-full max-w-3xl pb-20'>
			<div className='mb-10'>
				<p className='mb-2 text-xs font-semibold uppercase tracking-widest text-zinc-500'>
					Planificación
				</p>
				<h1 className='mb-4 text-3xl font-bold tracking-tight text-white'>
					Roadmap
				</h1>
				<p className='text-base leading-relaxed text-zinc-400'>
					Hoja de ruta pública de Kivora UI. Sujeta a cambios según
					prioridades y feedback de la comunidad.
				</p>
			</div>

			<div className='space-y-6'>
				{items.map((q) => (
					<div
						key={q.quarter}
						className={[
							'rounded-xl border p-5',
							q.done
								? 'border-emerald-500/20 bg-emerald-500/5'
								: 'border-white/8 bg-white/2',
						].join(' ')}>
						<div className='mb-3 flex items-center gap-3'>
							<span className='rounded-full border border-white/10 px-2.5 py-0.5 text-xs font-medium text-zinc-400'>
								{q.quarter}
							</span>
							{q.done && (
								<span className='rounded-full border border-emerald-500/30 px-2.5 py-0.5 text-xs font-medium text-emerald-400'>
									✓ Completado
								</span>
							)}
							<h3 className='ml-1 text-sm font-semibold text-white'>
								{q.title}
							</h3>
						</div>
						<ul className='space-y-1.5 pl-1'>
							{q.items.map((item) => (
								<li
									key={item}
									className='flex items-start gap-2 text-sm text-zinc-400'>
									<span className='mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-600' />
									{item}
								</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</div>
	);
}
