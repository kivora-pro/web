'use client';

import {
	ActionIcon,
	Avatar,
	Badge,
	Button,
	Menu,
	MenuDivider,
	MenuDropdown,
	MenuItem,
	MenuLabel,
	MenuTarget,
	Modal,
	ModalBody,
	Progress,
	ScrollArea,
	Skeleton,
	Tabs,
	TabsList,
	TabsPanel,
	TabsTab,
} from '@kivora/react';
import { useEffect, useState } from 'react';

// ── Data ──────────────────────────────────────────────────────────────────────

const HERO = {
	title: 'Abismo Eterno',
	tagline: 'Temporada 3 — Disponible ahora',
	description:
		'Cuando una señal desconocida emerge desde las profundidades del océano, un equipo de científicos debe descender más allá de los límites conocidos para descubrir una verdad que cambiará la humanidad para siempre.',
	rating: '8.9',
	year: '2025',
	duration: '1h 42min',
	genres: ['Ciencia ficción', 'Thriller', 'Drama'],
};

const TRENDING = [
	{ id: 1, title: 'Neon Requiem', genre: 'Acción', rating: '7.8', new: true },
	{
		id: 2,
		title: 'La Última Frontera',
		genre: 'Western',
		rating: '8.2',
		new: false,
	},
	{
		id: 3,
		title: 'Sombras del Norte',
		genre: 'Terror',
		rating: '7.1',
		new: true,
	},
	{
		id: 4,
		title: 'Código Rojo',
		genre: 'Thriller',
		rating: '8.5',
		new: false,
	},
	{
		id: 5,
		title: 'Horizonte Zero',
		genre: 'Sci-Fi',
		rating: '9.0',
		new: true,
	},
	{ id: 6, title: 'El Testigo', genre: 'Drama', rating: '7.6', new: false },
];

const CONTINUE = [
	{ id: 7, title: 'Abismo Eterno', episode: 'T3 E4', progress: 68 },
	{ id: 8, title: 'Mareas Oscuras', episode: 'T1 E7', progress: 32 },
	{ id: 9, title: 'Vértigo', episode: 'T2 E1', progress: 91 },
	{ id: 10, title: 'El Archivo', episode: 'T4 E2', progress: 15 },
];

const CATEGORIES = [
	{ value: 'all', label: 'Todo' },
	{ value: 'series', label: 'Series' },
	{ value: 'movies', label: 'Películas' },
	{ value: 'docs', label: 'Documentales' },
];

const VERTICAL_IMGS = [
	'/images/show-case/ott/cover/vertical/f1841c91-5419-4aba-ab2a-ffb68470576e.jpg',
	'/images/show-case/ott/cover/vertical/35d395ab-a31a-496c-96d9-995d070e2caf.jpg',
	'/images/show-case/ott/cover/vertical/62943c81-01ad-4ca9-afdc-b7d84c6c2cfb.jpg',
	'/images/show-case/ott/cover/vertical/89db3c5e-8199-4d37-a94a-925e8732a124.jpg',
	'/images/show-case/ott/cover/vertical/c547ce76-7e5e-4f89-be66-dc8e8b98db3b.jpg',
	'/images/show-case/ott/cover/vertical/dc9e988c-04dd-44d0-97f3-60aeefa5161b.jpg',
];
const HORIZONTAL_IMGS = [
	'/images/show-case/ott/cover/horizontal/unnamed.jpg',
	'/images/show-case/ott/cover/horizontal/unnamed%20(1).jpg',
	'/images/show-case/ott/cover/horizontal/unnamed%20(2).jpg',
	'/images/show-case/ott/cover/horizontal/unnamed%20(3).jpg',
];
const CAROUSEL_IMG =
	'/images/show-case/ott/carousel/ChatGPT%20Image%2028%20feb%202026%2C%2021_20_43.png';

function CardPlaceholder({ title, img }: { title: string; img: string }) {
	return (
		<div className='relative flex aspect-[2/3] w-full items-end overflow-hidden rounded-xl'>
			<img
				src={img}
				alt={title}
				className='absolute inset-0 h-full w-full object-cover'
			/>
			<div className='absolute inset-0 bg-linear-to-t from-black/70 to-transparent' />
			<span className='relative line-clamp-2 p-3 text-xs font-semibold leading-tight text-white/90'>
				{title}
			</span>
		</div>
	);
}

// ── Component ─────────────────────────────────────────────────────────────────

const VIDEO_SRC =
	'/video/show-case/ott/grok-video-382b75de-8d97-4cb4-af98-00c38ff7e835.mp4';

const INFO = {
	title: 'Abismo Eterno',
	tag: 'T3 · 2025 · +16 · 8 episodios',
	description:
		'Cuando una señal desconocida emerge desde las profundidades del océano, un equipo de científicos debe descender más allá de los límites conocidos para descubrir una verdad que cambiará la humanidad para siempre. Una producción de alto impacto que combina ciencia, misterio y emoción en cada capítulo.',
	director: { name: 'Helena Voss', role: 'Directora' },
	writer: { name: 'Marcos Delacroix', role: 'Guionista' },
	producer: 'Abyssal Films · Nōvex Studios · Canal Uno',
	cast: [
		{ name: 'Isaac Navarrro', role: 'Dr. Elián Costa', initials: 'IN' },
		{ name: 'Vera Molina', role: 'Comandante Asha', initials: 'VM' },
		{ name: 'Dario Chen', role: 'Ing. Shen Park', initials: 'DC' },
		{ name: 'Sofía Alende', role: 'Dra. Nina Osei', initials: 'SA' },
		{ name: 'Rúben Holt', role: 'Oficial Kade', initials: 'RH' },
		{ name: 'Camila Ferro', role: 'Pilar Torres', initials: 'CF' },
	],
	genres: ['Ciencia ficción', 'Thriller', 'Drama'],
	specs: [
		{ label: 'Idioma', value: 'Español · Inglés · Francés' },
		{ label: 'Audio', value: 'Dolby Atmos · 5.1 Surround' },
		{ label: 'Vídeo', value: '4K Ultra HD · HDR10+' },
		{ label: 'País', value: 'España · Canadá' },
	],
	awards: [
		'Mejor serie — Fénix TV 2025',
		'Premio al mejor guion — SeriesFest Madrid',
	],
};

export default function OTTPage() {
	const [loading, setLoading] = useState(false);
	const [inList, setInList] = useState(false);
	const [videoOpen, setVideoOpen] = useState(false);
	const [infoOpen, setInfoOpen] = useState(false);
	const [openMenuId, setOpenMenuId] = useState<number | null>(null);

	useEffect(() => {
		if (openMenuId === null) return;
		const handler = () => setOpenMenuId(null);
		document.addEventListener('mousedown', handler);
		return () => document.removeEventListener('mousedown', handler);
	}, [openMenuId]);

	useEffect(() => {
		const locked = infoOpen || videoOpen;
		document.body.style.overflow = locked ? 'hidden' : '';
		return () => {
			document.body.style.overflow = '';
		};
	}, [infoOpen, videoOpen]);

	function simulateLoad() {
		setLoading(true);
		setTimeout(() => setLoading(false), 1800);
	}

	return (
		<div className='min-h-screen bg-[#07070f] text-white'>
			{/* ── Header ── */}
			<header className='fixed left-0 right-0 top-10 z-40 flex items-center gap-4 px-6 py-3'>
				<span className='text-xl font-black tracking-tight text-white'>
					N<span className='text-red-400'>Ō</span>VEX
				</span>

				<nav className='ml-6 hidden items-center gap-1 md:flex'>
					{[
						'Inicio',
						'Series',
						'Películas',
						'Documentales',
						'Novedades',
					].map((item, i) => (
						<button
							key={item}
							className={`rounded-lg px-3 py-1.5 text-xs transition-colors ${i === 0 ? 'text-white' : 'text-zinc-400 hover:text-white'}`}>
							{item}
						</button>
					))}
				</nav>

				<div className='ml-auto flex items-center gap-2'>
					<ActionIcon
						variant='subtle'
						size='sm'
						aria-label='Buscar'>
						<svg
							className='h-4 w-4'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'
							strokeWidth={2}>
							<circle
								cx='11'
								cy='11'
								r='8'
							/>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M21 21l-4.35-4.35'
							/>
						</svg>
					</ActionIcon>
					<ActionIcon
						variant='subtle'
						size='sm'
						aria-label='Notificaciones'>
						<svg
							className='h-4 w-4'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'
							strokeWidth={2}>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9'
							/>
						</svg>
					</ActionIcon>
					<Avatar
						size='sm'
						src={null}
						alt='Usuario'>
						U
					</Avatar>
				</div>
			</header>

			{/* ── Hero ── */}
			<section className='relative flex min-h-[92vh] flex-col justify-end px-6 pb-16 pt-32 md:px-12'>
				{/* Fondo real */}
				<img
					src={CAROUSEL_IMG}
					alt=''
					aria-hidden
					className='absolute inset-0 h-full w-full object-cover object-top opacity-50'
				/>
				<div className='absolute inset-0 bg-linear-to-b from-transparent via-[#07070f]/60 to-[#07070f]' />
				<div className='absolute inset-0 bg-linear-to-r from-[#07070f]/70 to-transparent' />

				{/* Póster lateral */}
				<div className='absolute right-8 top-1/2 hidden -translate-y-1/2 md:block lg:right-20'>
					<img
						src={VERTICAL_IMGS[0]}
						alt='Abismo Eterno'
						className='h-72 w-48 rounded-2xl object-cover shadow-2xl shadow-black/60'
					/>
				</div>

				<div className='relative max-w-xl'>
					<div className='mb-4 flex flex-wrap gap-2'>
						{HERO.genres.map((g) => (
							<Badge
								key={g}
								variant='outline'
								size='sm'>
								{g}
							</Badge>
						))}
					</div>

					<h1 className='mb-3 text-5xl font-black tracking-tight'>
						{HERO.title}
					</h1>
					<p className='mb-2 text-sm text-zinc-400'>{HERO.tagline}</p>
					<div className='mb-4 flex items-center gap-3 text-xs text-zinc-500'>
						<span className='flex items-center gap-1 text-amber-400'>
							★ {HERO.rating}
						</span>
						<span>{HERO.year}</span>
						<span>{HERO.duration}</span>
					</div>
					<p className='mb-8 max-w-sm text-sm leading-relaxed text-zinc-300'>
						{HERO.description}
					</p>

					<div className='flex flex-wrap gap-3'>
						<Button
							size='md'
							onClick={() => setVideoOpen(true)}
							leftSection={
								<svg
									className='h-4 w-4'
									viewBox='0 0 24 24'
									fill='currentColor'>
									<path d='M8 5v14l11-7z' />
								</svg>
							}>
							Reproducir
						</Button>
						<Button
							variant='outline'
							size='md'
							onClick={() => setInList(!inList)}
							leftSection={
								<svg
									className='h-4 w-4'
									fill='none'
									viewBox='0 0 24 24'
									stroke='currentColor'
									strokeWidth={2}>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										d={
											inList
												? 'M5 13l4 4L19 7'
												: 'M12 4v16m8-8H4'
										}
									/>
								</svg>
							}>
							{inList ? 'En mi lista' : 'Mi lista'}
						</Button>
						<Button
							variant='subtle'
							size='md'
							onClick={() => setInfoOpen(true)}>
							Más info
						</Button>
					</div>
				</div>
			</section>

			{/* ── Contenido ── */}
			<section className='px-6 pb-20 md:px-12'>
				<Tabs defaultValue='all'>
					<TabsList className='mb-8'>
						{CATEGORIES.map((c) => (
							<TabsTab
								key={c.value}
								value={c.value}>
								{c.label}
							</TabsTab>
						))}
					</TabsList>

					{CATEGORIES.map((c) => (
						<TabsPanel
							key={c.value}
							value={c.value}>
							{/* Continuar viendo */}
							<div className='mb-10'>
								<h2 className='mb-4 text-sm font-semibold text-zinc-300'>
									Continuar viendo
								</h2>
								<div className='grid grid-cols-2 gap-3 sm:grid-cols-4'>
									{CONTINUE.map((item, i) => (
										<div
											key={item.id}
											className='group cursor-pointer'>
											{loading ? (
												<Skeleton className='aspect-video w-full rounded-xl' />
											) : (
												<div className='relative aspect-video w-full rounded-xl'>
													{/* Imagen con overflow propio */}
													<div className='absolute inset-0 overflow-hidden rounded-xl'>
														<img
															src={
																HORIZONTAL_IMGS[
																	i %
																		HORIZONTAL_IMGS.length
																]
															}
															alt={item.title}
															className='h-full w-full object-cover transition-transform duration-300 group-hover:scale-105'
														/>
													</div>

													{/* Overlay oscuro gradiente */}
													<div className='absolute inset-0 bg-linear-to-t from-black/80 via-black/10 to-transparent' />

													{/* Botón play centrado */}
													<div className='absolute inset-0 flex items-center justify-center'>
														<ActionIcon
															variant='filled'
															size='lg'
															radius='xl'
															className='scale-90 bg-white/20 opacity-60 backdrop-blur-sm transition-all duration-200 group-hover:scale-100 group-hover:bg-white/30 group-hover:opacity-100'
															aria-label='Reproducir'>
															<svg
																className='h-5 w-5 text-white'
																viewBox='0 0 24 24'
																fill='currentColor'>
																<path d='M8 5v14l11-7z' />
															</svg>
														</ActionIcon>
													</div>

													{/* Info + menú 3 puntos */}
													<div className='absolute bottom-0 left-0 right-0 px-3 pb-2'>
														<div className='mb-1.5 flex items-end justify-between gap-1'>
															<div className='min-w-0'>
																<p className='truncate text-xs font-semibold leading-tight text-white'>
																	{item.title}
																</p>
																<p className='text-[10px] text-zinc-400'>
																	{
																		item.episode
																	}
																</p>
															</div>
															<div
																onMouseDown={(
																	e,
																) =>
																	e.stopPropagation()
																}>
																<Menu
																	position='bottom-end'
																	width={180}
																	opened={
																		openMenuId ===
																		item.id
																	}
																	onChange={(
																		o,
																	) =>
																		setOpenMenuId(
																			o
																				? item.id
																				: null,
																		)
																	}>
																	<MenuTarget>
																		<ActionIcon
																			variant='subtle'
																			size='xs'
																			className='shrink-0 text-zinc-400 opacity-0 transition-opacity group-hover:opacity-100'
																			aria-label='Más opciones'>
																			<svg
																				className='h-3.5 w-3.5'
																				viewBox='0 0 24 24'
																				fill='currentColor'>
																				<circle
																					cx='12'
																					cy='5'
																					r='1.5'
																				/>
																				<circle
																					cx='12'
																					cy='12'
																					r='1.5'
																				/>
																				<circle
																					cx='12'
																					cy='19'
																					r='1.5'
																				/>
																			</svg>
																		</ActionIcon>
																	</MenuTarget>
																	<MenuDropdown>
																		<MenuLabel>
																			Episodio
																		</MenuLabel>
																		<MenuItem
																			leftSection={
																				<svg
																					className='h-3.5 w-3.5'
																					viewBox='0 0 24 24'
																					fill='currentColor'>
																					<path d='M8 5v14l11-7z' />
																				</svg>
																			}>
																			Reproducir
																		</MenuItem>
																		<MenuItem
																			leftSection={
																				<svg
																					className='h-3.5 w-3.5'
																					fill='none'
																					viewBox='0 0 24 24'
																					stroke='currentColor'
																					strokeWidth={
																						2
																					}>
																					<path
																						strokeLinecap='round'
																						strokeLinejoin='round'
																						d='M12 4v16m8-8H4'
																					/>
																				</svg>
																			}>
																			Añadir
																			a mi
																			lista
																		</MenuItem>
																		<MenuItem
																			leftSection={
																				<svg
																					className='h-3.5 w-3.5'
																					fill='none'
																					viewBox='0 0 24 24'
																					stroke='currentColor'
																					strokeWidth={
																						2
																					}>
																					<path
																						strokeLinecap='round'
																						strokeLinejoin='round'
																						d='M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
																					/>
																				</svg>
																			}>
																			Valorar
																			episodio
																		</MenuItem>
																		<MenuDivider />
																		<MenuItem
																			leftSection={
																				<svg
																					className='h-3.5 w-3.5'
																					fill='none'
																					viewBox='0 0 24 24'
																					stroke='currentColor'
																					strokeWidth={
																						2
																					}>
																					<path
																						strokeLinecap='round'
																						strokeLinejoin='round'
																						d='M5 13l4 4L19 7'
																					/>
																				</svg>
																			}>
																			Marcar
																			como
																			visto
																		</MenuItem>
																		<MenuItem
																			color='red'
																			leftSection={
																				<svg
																					className='h-3.5 w-3.5'
																					fill='none'
																					viewBox='0 0 24 24'
																					stroke='currentColor'
																					strokeWidth={
																						2
																					}>
																					<path
																						strokeLinecap='round'
																						strokeLinejoin='round'
																						d='M6 18L18 6M6 6l12 12'
																					/>
																				</svg>
																			}>
																			Eliminar
																			de
																			continuar
																		</MenuItem>
																	</MenuDropdown>
																</Menu>
															</div>
														</div>
														<Progress
															value={
																item.progress
															}
															size='xs'
														/>
													</div>
												</div>
											)}
										</div>
									))}
								</div>
							</div>

							{/* Tendencias */}
							<div>
								<div className='mb-4 flex items-center justify-between'>
									<h2 className='text-sm font-semibold text-zinc-300'>
										Tendencias
									</h2>
									<Button
										variant='subtle'
										size='xs'
										onClick={simulateLoad}>
										{loading ? 'Cargando…' : 'Actualizar'}
									</Button>
								</div>

								<div className='grid grid-cols-6 gap-3'>
									{TRENDING.map((item, i) =>
										loading ? (
											<Skeleton
												key={item.id}
												className='aspect-[2/3] w-full rounded-xl'
											/>
										) : (
											<div
												key={item.id}
												className='group relative cursor-pointer'>
												<CardPlaceholder
													title={item.title}
													img={
														VERTICAL_IMGS[
															i %
																VERTICAL_IMGS.length
														]
													}
												/>
												{item.new && (
													<div className='absolute left-2 top-2'>
														<Badge
															size='xs'
															color='red'>
															Nuevo
														</Badge>
													</div>
												)}
												<ActionIcon
													variant='filled'
													size='xs'
													className='absolute right-2 top-2 opacity-0 transition-opacity group-hover:opacity-100'
													aria-label='Añadir a lista'>
													<svg
														className='h-3 w-3'
														fill='none'
														viewBox='0 0 24 24'
														stroke='currentColor'
														strokeWidth={2.5}>
														<path
															strokeLinecap='round'
															strokeLinejoin='round'
															d='M12 4v16m8-8H4'
														/>
													</svg>
												</ActionIcon>
												<div className='mt-2'>
													<p className='truncate text-xs font-medium text-white'>
														{item.title}
													</p>
													<div className='flex items-center justify-between'>
														<span className='text-[10px] text-zinc-500'>
															{item.genre}
														</span>
														<span className='text-[10px] text-amber-400'>
															★ {item.rating}
														</span>
													</div>
												</div>
											</div>
										),
									)}
								</div>
							</div>
						</TabsPanel>
					))}
				</Tabs>
			</section>

			{/* ── Footer ── */}
			<footer className='border-t border-white/6 bg-[#07070f] px-6 py-14 md:px-12'>
				<div className='mb-10 grid grid-cols-2 gap-8 md:grid-cols-4'>
					{/* Marca */}
					<div className='col-span-2 md:col-span-1'>
						<span className='mb-3 block text-xl font-black tracking-tight text-white'>
							N<span className='text-red-400'>Ō</span>VEX
						</span>
						<p className='mb-4 max-w-xs text-xs leading-relaxed text-zinc-500'>
							La plataforma de streaming con el mejor catálogo de
							series, películas y documentales en tu idioma.
						</p>
						<div className='flex gap-3'>
							{/* X / Twitter */}
							<a
								href='#'
								aria-label='X'
								className='flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-zinc-500 transition-colors hover:border-white/20 hover:text-white'>
								<svg
									className='h-3.5 w-3.5'
									viewBox='0 0 24 24'
									fill='currentColor'>
									<path d='M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.843L2.25 2.25H8.08l4.253 5.622 5.911-5.622Zm-1.161 17.52h1.833L7.084 4.126H5.117z' />
								</svg>
							</a>
							{/* Instagram */}
							<a
								href='#'
								aria-label='Instagram'
								className='flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-zinc-500 transition-colors hover:border-white/20 hover:text-white'>
								<svg
									className='h-3.5 w-3.5'
									viewBox='0 0 24 24'
									fill='none'
									stroke='currentColor'
									strokeWidth={1.8}>
									<rect
										x='2'
										y='2'
										width='20'
										height='20'
										rx='5'
									/>
									<circle
										cx='12'
										cy='12'
										r='4'
									/>
									<circle
										cx='17.5'
										cy='6.5'
										r='0.5'
										fill='currentColor'
										stroke='none'
									/>
								</svg>
							</a>
							{/* YouTube */}
							<a
								href='#'
								aria-label='YouTube'
								className='flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-zinc-500 transition-colors hover:border-white/20 hover:text-white'>
								<svg
									className='h-3.5 w-3.5'
									viewBox='0 0 24 24'
									fill='currentColor'>
									<path d='M23 7s-.3-1.9-1.2-2.7c-1.1-1.2-2.4-1.2-3-1.3C16.1 3 12 3 12 3s-4.1 0-6.8.1c-.6.1-1.9.1-3 1.3C1.3 5.1 1 7 1 7S.7 9.1.7 11.2v1.9C.7 15.2 1 17.3 1 17.3s.3 1.9 1.2 2.7c1.1 1.2 2.6 1.1 3.3 1.2C7.6 21.4 12 21.4 12 21.4s4.1 0 6.8-.3c.6-.1 1.9-.1 3-1.3.9-.8 1.2-2.7 1.2-2.7s.3-2.1.3-4.2v-1.9C23.3 9.1 23 7 23 7zm-13.3 8.5V8.7l8.1 3.4-8.1 3.4z' />
								</svg>
							</a>
						</div>
					</div>

					{/* Navegar */}
					<div>
						<p className='mb-3 text-xs font-semibold uppercase tracking-widest text-zinc-400'>
							Navegar
						</p>
						<ul className='space-y-2'>
							{[
								'Inicio',
								'Series',
								'Películas',
								'Documentales',
								'Novedades',
								'Mi lista',
							].map((item) => (
								<li key={item}>
									<a
										href='#'
										className='text-xs text-zinc-500 transition-colors hover:text-white'>
										{item}
									</a>
								</li>
							))}
						</ul>
					</div>

					{/* Soporte */}
					<div>
						<p className='mb-3 text-xs font-semibold uppercase tracking-widest text-zinc-400'>
							Soporte
						</p>
						<ul className='space-y-2'>
							{[
								'Centro de ayuda',
								'Compatibilidad',
								'Cancelar suscripción',
								'Contacto',
								'Privacidad',
								'Cookies',
							].map((item) => (
								<li key={item}>
									<a
										href='#'
										className='text-xs text-zinc-500 transition-colors hover:text-white'>
										{item}
									</a>
								</li>
							))}
						</ul>
					</div>

					{/* Dispositivos */}
					<div>
						<p className='mb-3 text-xs font-semibold uppercase tracking-widest text-zinc-400'>
							Disponible en
						</p>
						<div className='flex flex-col gap-2'>
							{[
								{
									label: 'App Store',
									sub: 'iPhone & iPad',
									icon: '🍎',
								},
								{
									label: 'Google Play',
									sub: 'Android',
									icon: '▶',
								},
								{
									label: 'Smart TV',
									sub: 'Samsung · LG · Sony',
									icon: '📺',
								},
							].map((d) => (
								<a
									key={d.label}
									href='#'
									className='flex items-center gap-3 rounded-lg border border-white/8 px-3 py-2 transition-colors hover:border-white/16 hover:bg-white/4'>
									<span className='text-base'>{d.icon}</span>
									<div>
										<p className='text-xs font-medium text-white'>
											{d.label}
										</p>
										<p className='text-[10px] text-zinc-600'>
											{d.sub}
										</p>
									</div>
								</a>
							))}
						</div>
					</div>
				</div>

				{/* Bottom bar */}
				<div className='flex flex-col items-center justify-between gap-3 border-t border-white/6 pt-6 text-[10px] text-zinc-600 sm:flex-row'>
					<span>
						© 2026 NŌVEX Entertainment, S.L. Todos los derechos
						reservados.
					</span>
					<div className='flex gap-4'>
						{[
							'Términos de uso',
							'Política de privacidad',
							'Aviso legal',
						].map((l) => (
							<a
								key={l}
								href='#'
								className='transition-colors hover:text-zinc-400'>
								{l}
							</a>
						))}
					</div>
				</div>
			</footer>

			{/* ── Modal de información ── */}
			<Modal
				opened={infoOpen}
				onClose={() => setInfoOpen(false)}
				size='lg'
				centered
				withCloseButton={false}>
				<ModalBody className='!p-0'>
					<ScrollArea h={580}>
						{/* Cabecera con póster */}
						<div className='relative h-48 overflow-hidden rounded-t-xl'>
							<img
								src={CAROUSEL_IMG}
								alt={INFO.title}
								className='h-full w-full object-cover object-top'
							/>
							<div className='absolute inset-0 bg-linear-to-b from-transparent to-black/80' />
							{/* Cerrar */}
							<button
								onClick={() => setInfoOpen(false)}
								className='absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-sm transition-colors hover:bg-black/80'
								aria-label='Cerrar'>
								<svg
									className='h-4 w-4'
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
							{/* Título sobre la imagen */}
							<div className='absolute bottom-4 left-5'>
								<h2 className='text-xl font-black text-white'>
									{INFO.title}
								</h2>
								<p className='text-xs text-zinc-400'>
									{INFO.tag}
								</p>
							</div>
						</div>

						{/* Cuerpo */}
						<div className='space-y-6 px-5 py-5'>
							{/* Géneros + acción rápida */}
							<div className='flex flex-wrap items-center justify-between gap-3'>
								<div className='flex flex-wrap gap-1.5'>
									{INFO.genres.map((g) => (
										<Badge
											key={g}
											variant='light'
											size='xs'>
											{g}
										</Badge>
									))}
								</div>
								<Button
									size='xs'
									onClick={() => {
										setInfoOpen(false);
										setVideoOpen(true);
									}}
									leftSection={
										<svg
											className='h-3 w-3'
											viewBox='0 0 24 24'
											fill='currentColor'>
											<path d='M8 5v14l11-7z' />
										</svg>
									}>
									Reproducir
								</Button>
							</div>

							{/* Sinopsis */}
							<div>
								<p className='mb-1.5 text-xs font-semibold uppercase tracking-widest text-zinc-500'>
									Sinopsis
								</p>
								<p className='text-sm leading-relaxed text-zinc-300'>
									{INFO.description}
								</p>
							</div>

							{/* Reparto */}
							<div>
								<p className='mb-3 text-xs font-semibold uppercase tracking-widest text-zinc-500'>
									Reparto principal
								</p>
								<div className='grid grid-cols-2 gap-3 sm:grid-cols-3'>
									{INFO.cast.map((actor) => (
										<div
											key={actor.name}
											className='flex items-center gap-2.5 rounded-lg border border-white/6 bg-white/2 px-3 py-2.5'>
											<Avatar
												size='sm'
												alt={actor.name}>
												{actor.initials}
											</Avatar>
											<div className='min-w-0'>
												<p className='truncate text-xs font-medium text-white'>
													{actor.name}
												</p>
												<p className='truncate text-[10px] text-zinc-500'>
													{actor.role}
												</p>
											</div>
										</div>
									))}
								</div>
							</div>

							{/* Equipo creativo */}
							<div className='grid grid-cols-2 gap-3'>
								<div className='rounded-lg border border-white/6 bg-white/2 px-4 py-3'>
									<p className='mb-0.5 text-[10px] uppercase tracking-widest text-zinc-600'>
										{INFO.director.role}
									</p>
									<p className='text-sm font-semibold text-white'>
										{INFO.director.name}
									</p>
								</div>
								<div className='rounded-lg border border-white/6 bg-white/2 px-4 py-3'>
									<p className='mb-0.5 text-[10px] uppercase tracking-widest text-zinc-600'>
										{INFO.writer.role}
									</p>
									<p className='text-sm font-semibold text-white'>
										{INFO.writer.name}
									</p>
								</div>
							</div>

							{/* Productora */}
							<div>
								<p className='mb-1 text-xs font-semibold uppercase tracking-widest text-zinc-500'>
									Producción
								</p>
								<p className='text-sm text-zinc-300'>
									{INFO.producer}
								</p>
							</div>

							{/* Premios */}
							<div>
								<p className='mb-2 text-xs font-semibold uppercase tracking-widest text-zinc-500'>
									Premios
								</p>
								<div className='flex flex-col gap-1.5'>
									{INFO.awards.map((a) => (
										<div
											key={a}
											className='flex items-center gap-2'>
											<span className='text-amber-400'>
												★
											</span>
											<span className='text-xs text-zinc-300'>
												{a}
											</span>
										</div>
									))}
								</div>
							</div>

							{/* Especificaciones técnicas */}
							<div>
								<p className='mb-2 text-xs font-semibold uppercase tracking-widest text-zinc-500'>
									Especificaciones
								</p>
								<div className='grid grid-cols-2 gap-x-6 gap-y-2'>
									{INFO.specs.map((s) => (
										<div key={s.label}>
											<p className='text-[10px] text-zinc-600'>
												{s.label}
											</p>
											<p className='text-xs font-medium text-zinc-300'>
												{s.value}
											</p>
										</div>
									))}
								</div>
							</div>
						</div>
					</ScrollArea>
				</ModalBody>
			</Modal>

			{/* ── Modal de reproducción ── */}
			<Modal
				opened={videoOpen}
				onClose={() => setVideoOpen(false)}
				size='xl'
				centered
				withCloseButton={false}
				classNames={{
					content: 'overflow-hidden !p-0',
					body: '!p-0 !m-0',
				}}>
				<ModalBody className='relative !p-0'>
					<video
						key={videoOpen ? 'open' : 'closed'}
						src={VIDEO_SRC}
						className='block h-full w-full'
						autoPlay
						muted
						playsInline
						controls
					/>
					{/* Botón de cierre */}
					<button
						onClick={() => setVideoOpen(false)}
						className='absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-sm transition-colors hover:bg-black/80'
						aria-label='Cerrar'>
						<svg
							className='h-4 w-4'
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
				</ModalBody>
			</Modal>
		</div>
	);
}
