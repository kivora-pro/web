import Link from 'next/link';

export default function ShowcasePage() {
	const demos = [
		{
			href: '/showcase/ott',
			title: 'OTT · Streaming Platform',
			description:
				'Plataforma de streaming estilo Netflix/HBO. Catálogo con Tabs, Badge, Progress, Avatar, Button, ActionIcon y Skeleton.',
			tags: [
				'Tabs',
				'Badge',
				'Progress',
				'Avatar',
				'Skeleton',
				'ActionIcon',
			],
			accent: 'from-red-600/20 to-orange-500/10',
			border: 'border-red-500/20',
			icon: (
				<svg
					viewBox='0 0 24 24'
					className='h-8 w-8 text-red-400'
					fill='currentColor'>
					<path d='M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8 12.5v-9l6 4.5-6 4.5z' />
				</svg>
			),
		},
		{
			href: '/showcase/cms',
			title: 'CMS · Dashboard',
			description:
				'Panel de gestión de contenidos con tabla de artículos, filtros, estados, paginación y formulario de edición.',
			tags: [
				'Table',
				'Badge',
				'Select',
				'TextInput',
				'Pagination',
				'Tabs',
			],
			accent: 'from-brand/20 to-indigo-500/10',
			border: 'border-brand/20',
			icon: (
				<svg
					viewBox='0 0 24 24'
					className='h-8 w-8 text-brand'
					fill='currentColor'>
					<path d='M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z' />
				</svg>
			),
		},
		{
			href: '/showcase/kanban',
			title: 'Kanban · Gestión de tareas',
			description:
				'Tablero de equipo con columnas, sprints y actividad. Usa Stepper, Timeline, Checkbox, Badge y Progress.',
			tags: [
				'Stepper',
				'Timeline',
				'Checkbox',
				'Badge',
				'Progress',
				'Tabs',
			],
			accent: 'from-amber-500/20 to-yellow-500/10',
			border: 'border-amber-500/20',
			icon: (
				<svg
					viewBox='0 0 24 24'
					className='h-8 w-8 text-amber-400'
					fill='none'
					stroke='currentColor'
					strokeWidth={1.8}>
					<rect
						x='3'
						y='3'
						width='5'
						height='18'
						rx='1'
					/>
					<rect
						x='10'
						y='3'
						width='5'
						height='12'
						rx='1'
					/>
					<rect
						x='17'
						y='3'
						width='4'
						height='8'
						rx='1'
					/>
				</svg>
			),
		},
		{
			href: '/showcase/ecommerce',
			title: 'E-commerce · Tienda',
			description:
				'Tienda con filtros, carrito y checkout paso a paso. Usa Rating, Breadcrumbs, Stepper, Checkbox y Notification.',
			tags: [
				'Rating',
				'Breadcrumbs',
				'Stepper',
				'CheckboxGroup',
				'Notification',
				'Pagination',
			],
			accent: 'from-emerald-500/20 to-teal-500/10',
			border: 'border-emerald-500/20',
			icon: (
				<svg
					viewBox='0 0 24 24'
					className='h-8 w-8 text-emerald-400'
					fill='none'
					stroke='currentColor'
					strokeWidth={1.8}>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
					/>
				</svg>
			),
		},
	];

	return (
		<main className='flex min-h-screen flex-col items-center justify-center bg-[#07070f] px-4 pt-10'>
			<div className='w-full max-w-3xl'>
				<div className='mb-12 text-center'>
					<p className='mb-3 text-xs font-semibold uppercase tracking-widest text-zinc-500'>
						@kivora/react
					</p>
					<h1 className='mb-4 text-4xl font-bold tracking-tight text-white'>
						Showcase
					</h1>
					<p className='text-base text-zinc-400'>
						Demos reales que muestran los componentes de Kivora UI
						en productos completos.
					</p>
				</div>

				<div className='grid gap-4 sm:grid-cols-2'>
					{demos.map((demo) => (
						<Link
							key={demo.href}
							href={demo.href}
							className={`group relative overflow-hidden rounded-2xl border bg-linear-to-br ${demo.accent} ${demo.border} p-6 transition-all hover:scale-[1.01] hover:shadow-2xl`}>
							<div className='mb-4'>{demo.icon}</div>
							<h2 className='mb-2 font-semibold text-white'>
								{demo.title}
							</h2>
							<p className='mb-4 text-sm leading-relaxed text-zinc-400'>
								{demo.description}
							</p>
							<div className='flex flex-wrap gap-1.5'>
								{demo.tags.map((tag) => (
									<span
										key={tag}
										className='rounded-full border border-white/8 bg-white/4 px-2 py-0.5 font-mono text-[10px] text-zinc-500'>
										{tag}
									</span>
								))}
							</div>
							<div className='absolute right-5 top-5 text-zinc-600 transition-colors group-hover:text-zinc-400'>
								<svg
									className='h-4 w-4'
									fill='none'
									viewBox='0 0 24 24'
									stroke='currentColor'
									strokeWidth={2}>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										d='M7 17L17 7M7 7h10v10'
									/>
								</svg>
							</div>
						</Link>
					))}
				</div>
			</div>
		</main>
	);
}
