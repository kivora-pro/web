'use client';

import {
	ActionIcon,
	Avatar,
	Badge,
	Breadcrumbs,
	Burger,
	Button,
	Checkbox,
	Divider,
	Drawer,
	Indicator,
	Menu,
	MenuDivider,
	MenuDropdown,
	MenuItem,
	MenuLabel,
	MenuTarget,
	Modal,
	ModalBody,
	NavLink,
	Notification,
	Pagination,
	RingProgress,
	ScrollArea,
	Select,
	Skeleton,
	Table,
	Tabs,
	TabsList,
	TabsPanel,
	TabsTab,
	TagsInput,
	Tbody,
	Td,
	Textarea,
	TextInput,
	Th,
	Thead,
	Timeline,
	TimelineItem,
	Tooltip,
	Tr,
} from '@kivora/react';
import Image from 'next/image';
import { useState } from 'react';

// -- Types & Data -------------------------------------------------------------------

type Status = 'published' | 'draft' | 'review' | 'archived';

interface Article {
	id: number;
	title: string;
	author: string;
	initials: string;
	category: string;
	status: Status;
	views: number;
	date: string;
	tags: string[];
	excerpt: string;
}

interface ArticleForm {
	title: string;
	category: string | null;
	status: Status;
	excerpt: string;
	tags: string[];
}

const ARTICLES: Article[] = [
	{
		id: 1,
		title: 'Introducción al diseño atómico en 2026',
		author: 'Ana Ruiz',
		initials: 'AR',
		category: 'Diseño',
		status: 'published',
		views: 12430,
		date: '28 feb 2026',
		tags: ['diseño', 'atómico', 'componentes'],
		excerpt:
			'Cómo aplicar los principios del diseño atómico en proyectos modernos de UI.',
	},
	{
		id: 2,
		title: 'Guía completa de Tailwind v4',
		author: 'Carlos Méndez',
		initials: 'CM',
		category: 'Frontend',
		status: 'published',
		views: 9870,
		date: '27 feb 2026',
		tags: ['tailwind', 'css', 'frontend'],
		excerpt:
			'Todo lo que necesitas saber sobre las novedades de Tailwind CSS v4.',
	},
	{
		id: 3,
		title: 'Edge computing: el futuro del backend',
		author: 'Sofía Torres',
		initials: 'ST',
		category: 'Backend',
		status: 'review',
		views: 0,
		date: '28 feb 2026',
		tags: ['edge', 'backend', 'cloudflare'],
		excerpt:
			'Una exploración de cómo el edge computing redefine la arquitectura backend.',
	},
	{
		id: 4,
		title: 'Accesibilidad en componentes React',
		author: 'Miguel Ángel',
		initials: 'MA',
		category: 'React',
		status: 'draft',
		views: 0,
		date: '26 feb 2026',
		tags: ['accesibilidad', 'react', 'aria'],
		excerpt:
			'Guía práctica para hacer componentes React accesibles desde el principio.',
	},
	{
		id: 5,
		title: 'De REST a GraphQL: un camino pragmático',
		author: 'Lucía Vargas',
		initials: 'LV',
		category: 'Backend',
		status: 'published',
		views: 7210,
		date: '25 feb 2026',
		tags: ['graphql', 'rest', 'api'],
		excerpt:
			'Migración incremental de APIs REST a GraphQL con casos de uso reales.',
	},
	{
		id: 6,
		title: 'Animaciones fluidas con Motion 11',
		author: 'Javier Castro',
		initials: 'JC',
		category: 'Frontend',
		status: 'draft',
		views: 0,
		date: '24 feb 2026',
		tags: ['animaciones', 'motion', 'frontend'],
		excerpt:
			'Crea animaciones declarativas y performantes con la nueva API de Motion 11.',
	},
	{
		id: 7,
		title: 'Monorepos con Turborepo y pnpm',
		author: 'Elena Prado',
		initials: 'EP',
		category: 'DevOps',
		status: 'archived',
		views: 3200,
		date: '20 feb 2026',
		tags: ['monorepo', 'turborepo', 'devops'],
		excerpt:
			'Estrategias para gestionar múltiples paquetes con Turborepo y pnpm workspaces.',
	},
];

const STATUS_MAP: Record<Status, { label: string; color: string }> = {
	published: { label: 'Publicado', color: 'green' },
	draft: { label: 'Borrador', color: 'gray' },
	review: { label: 'Revisión', color: 'yellow' },
	archived: { label: 'Archivado', color: 'red' },
};

const STATS = [
	{
		label: 'Artículos',
		value: '142',
		delta: '+12 este mes',
		progress: 71,
		color: 'brand',
	},
	{
		label: 'Visitas hoy',
		value: '8,420',
		delta: '+5% vs ayer',
		progress: 84,
		color: 'green',
	},
	{
		label: 'Borradores',
		value: '23',
		delta: '3 en revisión',
		progress: 46,
		color: 'yellow',
	},
	{
		label: 'Usuarios',
		value: '38',
		delta: '+2 nuevos',
		progress: 95,
		color: 'blue',
	},
];

const NAV_ICON: Record<string, string> = {
	grid: 'M3 3h7v7H3zm11 0h7v7h-7zM3 14h7v7H3zm11 0h7v7h-7z',
	docs: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
	media: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z',
	users: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z',
	comments:
		'M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z',
	settings:
		'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z',
	plugins:
		'M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z',
};

const NAV_GROUPS = [
	{
		heading: 'CONTENIDO',
		items: [
			{ label: 'Panel', icon: 'grid', active: false },
			{ label: 'Artículos', icon: 'docs', active: true },
			{ label: 'Multimedia', icon: 'media', active: false },
		],
	},
	{
		heading: 'GESTIÓN',
		items: [
			{ label: 'Usuarios', icon: 'users', active: false },
			{ label: 'Comentarios', icon: 'comments', active: false },
		],
	},
	{
		heading: 'SISTEMA',
		items: [
			{ label: 'Ajustes', icon: 'settings', active: false },
			{ label: 'Integraciones', icon: 'plugins', active: false },
		],
	},
];

const ACTIVITY = [
	{
		who: 'Ana Ruiz',
		action: 'publicó',
		target: 'Introducción al diseño atómico en 2026',
		time: 'Hace 2 horas',
	},
	{
		who: 'Carlos Méndez',
		action: 'envió a revisión',
		target: 'Guía completa de Tailwind v4',
		time: 'Hace 5 horas',
	},
	{
		who: 'Admin',
		action: 'archivó',
		target: 'Monorepos con Turborepo y pnpm',
		time: 'Hace 8 horas',
	},
	{
		who: 'Sofía Torres',
		action: 'creó el borrador',
		target: 'Edge computing: el futuro del backend',
		time: 'Ayer, 22:14',
	},
	{
		who: 'Miguel Ángel',
		action: 'guardó cambios en',
		target: 'Accesibilidad en componentes React',
		time: 'Ayer, 18:07',
	},
	{
		who: 'Lucía Vargas',
		action: 'actualizó',
		target: 'De REST a GraphQL: un camino pragmático',
		time: 'Hace 3 días',
	},
];

const MEDIA_ITEMS = [
	{
		name: 'hero-diseno.jpg',
		size: '1.2 MB',
		type: 'image',
		src: '/images/show-case/ott/cover/horizontal/unnamed.jpg',
	},
	{
		name: 'banner-tailwind.jpg',
		size: '890 KB',
		type: 'image',
		src: '/images/show-case/ott/cover/horizontal/unnamed (1).jpg',
	},
	{
		name: 'thumbnail-edge.jpg',
		size: '450 KB',
		type: 'image',
		src: '/images/show-case/ott/cover/horizontal/unnamed (2).jpg',
	},
	{
		name: 'og-accesibilidad.jpg',
		size: '320 KB',
		type: 'image',
		src: '/images/show-case/ott/cover/horizontal/unnamed (3).jpg',
	},
	{
		name: 'cover-portrait-1.jpg',
		size: '670 KB',
		type: 'image',
		src: '/images/show-case/ott/cover/vertical/35d395ab-a31a-496c-96d9-995d070e2caf.jpg',
	},
	{
		name: 'cover-portrait-2.jpg',
		size: '540 KB',
		type: 'image',
		src: '/images/show-case/ott/cover/vertical/62943c81-01ad-4ca9-afdc-b7d84c6c2cfb.jpg',
	},
	{
		name: 'cover-portrait-3.jpg',
		size: '720 KB',
		type: 'image',
		src: '/images/show-case/ott/cover/vertical/89db3c5e-8199-4d37-a94a-925e8732a124.jpg',
	},
	{
		name: 'cover-portrait-4.jpg',
		size: '610 KB',
		type: 'image',
		src: '/images/show-case/ott/cover/vertical/c547ce76-7e5e-4f89-be66-dc8e8b98db3b.jpg',
	},
	{
		name: 'cover-portrait-5.jpg',
		size: '490 KB',
		type: 'image',
		src: '/images/show-case/ott/cover/vertical/dc9e988c-04dd-44d0-97f3-60aeefa5161b.jpg',
	},
	{
		name: 'cover-portrait-6.jpg',
		size: '580 KB',
		type: 'image',
		src: '/images/show-case/ott/cover/vertical/f1841c91-5419-4aba-ab2a-ffb68470576e.jpg',
	},
	{
		name: 'carousel-bg.png',
		size: '2.1 MB',
		type: 'image',
		src: '/images/show-case/ott/carousel/ChatGPT Image 28 feb 2026, 21_20_43.png',
	},
	{
		name: 'demo-prism.mp4',
		size: '8.4 MB',
		type: 'video',
		src: '/video/show-case/ott/grok-video-382b75de-8d97-4cb4-af98-00c38ff7e835.mp4',
	},
	{ name: 'logo-dark.svg', size: '12 KB', type: 'file', src: null },
	{ name: 'prism-og.png', size: '556 KB', type: 'file', src: null },
];

const USERS = [
	{ name: 'Ana Ruiz', email: 'ana.ruiz', role: 'Admin', online: true },
	{
		name: 'Carlos Méndez',
		email: 'carlos.mendez',
		role: 'Editor',
		online: true,
	},
	{
		name: 'Sofía Torres',
		email: 'sofia.torres',
		role: 'Editor',
		online: false,
	},
	{
		name: 'Miguel Ángel',
		email: 'miguel.angel',
		role: 'Redactor',
		online: false,
	},
	{
		name: 'Lucía Vargas',
		email: 'lucia.vargas',
		role: 'Editor',
		online: true,
	},
	{
		name: 'Javier Castro',
		email: 'javier.castro',
		role: 'Redactor',
		online: false,
	},
	{
		name: 'Elena Prado',
		email: 'elena.prado',
		role: 'Editor',
		online: false,
	},
];

const EMPTY_FORM: ArticleForm = {
	title: '',
	category: null,
	status: 'draft',
	excerpt: '',
	tags: [],
};

// -- Sub-components -----------------------------------------------------------------

function SidebarNav() {
	return (
		<div className='flex h-full flex-col'>
			<ScrollArea
				style={{ flex: 1 }}
				className='px-2 py-3'>
				{NAV_GROUPS.map((group, gi) => (
					<div key={group.heading}>
						{gi > 0 && <Divider className='my-2' />}
						<p className='mb-1 px-2 text-[10px] font-semibold tracking-widest text-zinc-600'>
							{group.heading}
						</p>
						{group.items.map((item) => (
							<NavLink
								key={item.label}
								label={item.label}
								active={item.active}
								leftSection={
									<svg
										className='h-3.5 w-3.5 shrink-0'
										fill='none'
										viewBox='0 0 24 24'
										stroke='currentColor'
										strokeWidth={1.8}>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											d={NAV_ICON[item.icon]}
										/>
									</svg>
								}
							/>
						))}
					</div>
				))}
			</ScrollArea>

			{/* Footer user */}
			<div className='border-t border-white/8 p-3'>
				<div className='flex items-center gap-2.5 rounded-lg px-2 py-2'>
					<Indicator
						dot
						color='green'
						position='bottom-end'
						withBorder>
						<Avatar
							size='sm'
							alt='Admin'>
							Ad
						</Avatar>
					</Indicator>
					<div className='min-w-0 flex-1'>
						<p className='truncate text-xs font-medium text-white'>
							Admin
						</p>
						<p className='truncate text-[10px] text-zinc-500'>
							admin@prism.io
						</p>
					</div>
					<Tooltip
						label='Cerrar sesión'
						position='top'
						withArrow>
						<ActionIcon
							variant='subtle'
							size='xs'
							aria-label='Cerrar sesión'>
							<svg
								className='h-3.5 w-3.5'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'
								strokeWidth={2}>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1'
								/>
							</svg>
						</ActionIcon>
					</Tooltip>
				</div>
			</div>
		</div>
	);
}

// -- Component ----------------------------------------------------------------------

export default function CMSPage() {
	const [query, setQuery] = useState('');
	const [statusFilter, setStatusFilter] = useState<string | null>(null);
	const [page, setPage] = useState(1);
	const [loading, setLoading] = useState(false);
	const [selected, setSelected] = useState<number[]>([]);
	const [mediaView, setMediaView] = useState<'grid' | 'list'>('grid');
	const [drawerOpened, setDrawerOpened] = useState(false);
	const [editorOpened, setEditorOpened] = useState(false);
	const [editingArticle, setEditingArticle] = useState<Article | null>(null);
	const [form, setForm] = useState<ArticleForm>(EMPTY_FORM);
	const [notification, setNotification] = useState<{
		title: string;
		message: string;
		color: string;
	} | null>(null);

	const filtered = ARTICLES.filter((a) => {
		const q = query.toLowerCase();
		const matchQuery =
			!q ||
			a.title.toLowerCase().includes(q) ||
			a.author.toLowerCase().includes(q);
		const matchStatus = !statusFilter || a.status === statusFilter;
		return matchQuery && matchStatus;
	});

	function toggleSelect(id: number) {
		setSelected((prev) =>
			prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
		);
	}

	function showNotification(title: string, message: string, color: string) {
		setNotification({ title, message, color });
		setTimeout(() => setNotification(null), 3200);
	}

	function openEditor(article?: Article) {
		if (article) {
			setEditingArticle(article);
			setForm({
				title: article.title,
				category: article.category,
				status: article.status,
				excerpt: article.excerpt,
				tags: [...article.tags],
			});
		} else {
			setEditingArticle(null);
			setForm(EMPTY_FORM);
		}
		setEditorOpened(true);
	}

	function handleSave() {
		setEditorOpened(false);
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
			showNotification(
				editingArticle ? 'Cambios guardados' : 'Artículo creado',
				editingArticle
					? `"${form.title}" se ha actualizado correctamente.`
					: `"${form.title || 'Nuevo artículo'}" se ha creado como borrador.`,
				'green',
			);
		}, 700);
	}

	function handleDelete(id: number) {
		const article = ARTICLES.find((a) => a.id === id);
		setSelected((prev) => prev.filter((x) => x !== id));
		showNotification(
			'Artículo eliminado',
			`"${article?.title}" se ha eliminado permanentemente.`,
			'red',
		);
	}

	function handleSendReview(article: Article) {
		showNotification(
			'Enviado a revisión',
			`"${article.title}" está pendiente de aprobación.`,
			'yellow',
		);
	}

	return (
		<div className='flex min-h-screen bg-[#0a0a12] pt-10'>
			{/* �"?�"? Notification toast �"?�"? */}
			{notification && (
				<div className='fixed right-4 top-14 z-60 w-72'>
					<Notification
						color={notification.color}
						title={notification.title}
						withCloseButton
						onClose={() => setNotification(null)}>
						{notification.message}
					</Notification>
				</div>
			)}

			{/* �"?�"? Mobile Drawer �"?�"? */}
			<Drawer
				opened={drawerOpened}
				onClose={() => setDrawerOpened(false)}
				title='Prism CMS'
				position='left'>
				<SidebarNav />
			</Drawer>

			{/* �"?�"? Desktop Sidebar �"?�"? */}
			<aside className='hidden w-56 shrink-0 flex-col border-r border-white/8 bg-[#07070f] lg:flex'>
				{/* Brand */}
				<div className='flex items-center gap-2.5 border-b border-white/8 px-4 py-4'>
					<div className='flex h-7 w-7 items-center justify-center rounded-lg bg-brand/20 text-sm font-bold text-brand'>
						P
					</div>
					<span className='text-sm font-bold text-white'>
						Prism CMS
					</span>
				</div>
				<div className='flex flex-1 flex-col overflow-hidden'>
					<SidebarNav />
				</div>
			</aside>

			{/* �"?�"? Main �"?�"? */}
			<div className='flex min-w-0 flex-1 flex-col'>
				{/* Topbar */}
				<div className='flex h-12 items-center justify-between border-b border-white/8 px-5'>
					<div className='flex items-center gap-3'>
						<div className='lg:hidden'>
							<Burger
								opened={drawerOpened}
								onClick={() => setDrawerOpened((o) => !o)}
								size='sm'
								aria-label='Abrir menú'
							/>
						</div>
						<Breadcrumbs separator='/'>
							<span className='text-xs text-zinc-400'>
								Prism CMS
							</span>
							<span className='text-xs text-zinc-200'>
								Artículos
							</span>
						</Breadcrumbs>
					</div>
					<Button
						size='sm'
						loading={loading}
						onClick={() => openEditor()}
						leftSection={
							!loading && (
								<svg
									className='h-3.5 w-3.5'
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
							)
						}>
						Nuevo artículo
					</Button>
				</div>

				<div className='flex-1 overflow-y-auto px-5 py-6'>
					{/* Stats */}
					<div className='mb-6 grid grid-cols-2 gap-3 lg:grid-cols-4'>
						{STATS.map((s) =>
							loading ? (
								<Skeleton
									key={s.label}
									className='h-24 w-full rounded-xl'
								/>
							) : (
								<div
									key={s.label}
									className='flex items-center gap-3 rounded-xl border border-white/8 bg-white/2 p-4'>
									<RingProgress
										size={52}
										thickness={5}
										roundCaps
										sections={[
											{
												value: s.progress,
												color: s.color,
											},
										]}
									/>
									<div className='min-w-0 flex-1'>
										<p className='text-xs text-zinc-500'>
											{s.label}
										</p>
										<p className='text-lg font-bold text-white'>
											{s.value}
										</p>
										<p className='truncate text-[10px] text-zinc-600'>
											{s.delta}
										</p>
									</div>
								</div>
							),
						)}
					</div>

					{/* Tabs */}
					<Tabs defaultValue='articles'>
						<TabsList className='mb-5'>
							<TabsTab value='articles'>
								Artículos{' '}
								<Badge
									size='xs'
									className='ml-1'>
									{ARTICLES.length}
								</Badge>
							</TabsTab>
							<TabsTab value='media'>Multimedia</TabsTab>
							<TabsTab value='users'>
								Usuarios{' '}
								<Badge
									size='xs'
									className='ml-1'
									color='green'>
									{USERS.filter((u) => u.online).length} en
									línea
								</Badge>
							</TabsTab>
							<TabsTab value='activity'>Actividad</TabsTab>
						</TabsList>

						{/* �"?�"? Articles panel �"?�"? */}
						<TabsPanel value='articles'>
							{/* Filters */}
							<div className='mb-4 flex flex-wrap items-center gap-3'>
								<TextInput
									placeholder='Buscar por título o autor�?�'
									value={query}
									onChange={(e) => setQuery(e.target.value)}
									className='flex-1'
									leftSection={
										<svg
											className='h-3.5 w-3.5'
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
									}
								/>
								<div className='w-40'>
									<Select
										placeholder='Estado'
										value={statusFilter}
										onChange={setStatusFilter}
										clearable
										data={[
											{
												value: 'published',
												label: 'Publicado',
											},
											{
												value: 'draft',
												label: 'Borrador',
											},
											{
												value: 'review',
												label: 'Revisión',
											},
											{
												value: 'archived',
												label: 'Archivado',
											},
										]}
									/>
								</div>
								{selected.length > 0 && (
									<Button
										variant='outline'
										size='sm'
										color='red'
										onClick={() => {
											selected.forEach(handleDelete);
											setSelected([]);
										}}>
										Eliminar {selected.length}
									</Button>
								)}
							</div>

							{/* Table */}
							<div className='overflow-hidden rounded-xl border border-white/8'>
								<Table>
									<Thead>
										<Tr>
											<Th className='w-8'>
												<Checkbox
													size='xs'
													indeterminate={
														selected.length > 0 &&
														selected.length <
															ARTICLES.length
													}
													checked={
														selected.length ===
														ARTICLES.length
													}
													onChange={(e) =>
														setSelected(
															e.target.checked
																? ARTICLES.map(
																		(a) =>
																			a.id,
																	)
																: [],
														)
													}
												/>
											</Th>
											<Th>Título</Th>
											<Th>Autor</Th>
											<Th>Categoría</Th>
											<Th>Estado</Th>
											<Th>Visitas</Th>
											<Th>Fecha</Th>
											<Th />
										</Tr>
									</Thead>
									<Tbody>
										{filtered.length === 0 ? (
											<Tr>
												<Td
													colSpan={8}
													className='py-10 text-center text-sm text-zinc-600'>
													Sin resultados
												</Td>
											</Tr>
										) : (
											filtered.map((article) => {
												const s =
													STATUS_MAP[article.status];
												const isSelected =
													selected.includes(
														article.id,
													);
												return (
													<Tr
														key={article.id}
														className={
															isSelected
																? 'bg-brand/5'
																: ''
														}>
														<Td>
															<Checkbox
																size='xs'
																checked={
																	isSelected
																}
																onChange={() =>
																	toggleSelect(
																		article.id,
																	)
																}
															/>
														</Td>
														<Td>
															<div>
																<span className='text-sm font-medium text-white'>
																	{
																		article.title
																	}
																</span>
																{article.tags
																	.length >
																	0 && (
																	<div className='mt-0.5 flex flex-wrap gap-1'>
																		{article.tags
																			.slice(
																				0,
																				2,
																			)
																			.map(
																				(
																					tag,
																				) => (
																					<Badge
																						key={
																							tag
																						}
																						size='xs'
																						variant='outline'
																						color='gray'>
																						{
																							tag
																						}
																					</Badge>
																				),
																			)}
																	</div>
																)}
															</div>
														</Td>
														<Td>
															<div className='flex items-center gap-2'>
																<Avatar
																	size='xs'
																	alt={
																		article.author
																	}>
																	{
																		article.initials
																	}
																</Avatar>
																<span className='text-xs text-zinc-400'>
																	{
																		article.author
																	}
																</span>
															</div>
														</Td>
														<Td>
															<span className='text-xs text-zinc-500'>
																{
																	article.category
																}
															</span>
														</Td>
														<Td>
															<Badge
																size='xs'
																color={
																	s.color as string
																}
																variant='light'>
																{s.label}
															</Badge>
														</Td>
														<Td>
															<span className='text-xs text-zinc-500'>
																{article.views >
																0
																	? article.views.toLocaleString(
																			'es',
																		)
																	: '�?"'}
															</span>
														</Td>
														<Td>
															<span className='text-xs text-zinc-500'>
																{article.date}
															</span>
														</Td>
														<Td>
															<Menu position='bottom-end'>
																<MenuTarget>
																	<Tooltip
																		label='Opciones'
																		position='top'
																		withArrow>
																		<ActionIcon
																			variant='subtle'
																			size='xs'
																			aria-label='Opciones'>
																			<svg
																				className='h-3.5 w-3.5'
																				fill='currentColor'
																				viewBox='0 0 24 24'>
																				<circle
																					cx='12'
																					cy='5'
																					r='1.2'
																				/>
																				<circle
																					cx='12'
																					cy='12'
																					r='1.2'
																				/>
																				<circle
																					cx='12'
																					cy='19'
																					r='1.2'
																				/>
																			</svg>
																		</ActionIcon>
																	</Tooltip>
																</MenuTarget>
																<MenuDropdown>
																	<MenuLabel>
																		Artículo
																	</MenuLabel>
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
																					d='M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z'
																				/>
																			</svg>
																		}
																		onClick={() =>
																			openEditor(
																				article,
																			)
																		}>
																		Editar
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
																					d='M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z'
																				/>
																			</svg>
																		}>
																		Duplicar
																	</MenuItem>
																	{article.status !==
																		'published' && (
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
																						d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
																					/>
																				</svg>
																			}
																			onClick={() =>
																				handleSendReview(
																					article,
																				)
																			}>
																			Enviar
																			a
																			revisión
																		</MenuItem>
																	)}
																	<MenuDivider />
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
																					d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
																				/>
																			</svg>
																		}
																		onClick={() =>
																			handleDelete(
																				article.id,
																			)
																		}>
																		Eliminar
																	</MenuItem>
																</MenuDropdown>
															</Menu>
														</Td>
													</Tr>
												);
											})
										)}
									</Tbody>
								</Table>
							</div>

							{/* Pagination */}
							<div className='mt-4 flex items-center justify-between'>
								<span className='text-xs text-zinc-500'>
									{filtered.length} artículos
								</span>
								<Pagination
									total={Math.ceil(filtered.length / 5)}
									value={page}
									onChange={setPage}
									size='sm'
								/>
							</div>
						</TabsPanel>

						{/* �"?�"? Media panel �"?�"? */}
						<TabsPanel value='media'>
							{/* Header */}
							<div className='mb-3 flex items-center justify-between'>
								<p className='text-sm text-zinc-400'>
									{MEDIA_ITEMS.length} archivos
								</p>
								<div className='flex items-center gap-2'>
									{/* View toggle */}
									<div className='flex overflow-hidden rounded-md border border-white/10'>
										<Tooltip
											label='Vista cuadrÃ­cula'
											position='top'
											withArrow>
											<ActionIcon
												variant='subtle'
												color={
													mediaView === 'grid'
														? 'brand'
														: 'gray'
												}
												size='sm'
												aria-label='CuadrÃ­cula'
												onClick={() =>
													setMediaView('grid')
												}>
												<svg
													className='h-3.5 w-3.5'
													fill='none'
													viewBox='0 0 24 24'
													stroke='currentColor'
													strokeWidth={2}>
													<rect
														x='3'
														y='3'
														width='7'
														height='7'
														rx='1'
													/>
													<rect
														x='14'
														y='3'
														width='7'
														height='7'
														rx='1'
													/>
													<rect
														x='3'
														y='14'
														width='7'
														height='7'
														rx='1'
													/>
													<rect
														x='14'
														y='14'
														width='7'
														height='7'
														rx='1'
													/>
												</svg>
											</ActionIcon>
										</Tooltip>
										<Tooltip
											label='Vista lista'
											position='top'
											withArrow>
											<ActionIcon
												variant='subtle'
												color={
													mediaView === 'list'
														? 'brand'
														: 'gray'
												}
												size='sm'
												aria-label='Lista'
												onClick={() =>
													setMediaView('list')
												}>
												<svg
													className='h-3.5 w-3.5'
													fill='none'
													viewBox='0 0 24 24'
													stroke='currentColor'
													strokeWidth={2}>
													<path
														strokeLinecap='round'
														strokeLinejoin='round'
														d='M4 6h16M4 10h16M4 14h16M4 18h16'
													/>
												</svg>
											</ActionIcon>
										</Tooltip>
									</div>
									<Button
										size='sm'
										variant='outline'
										leftSection={
											<svg
												className='h-3.5 w-3.5'
												fill='none'
												viewBox='0 0 24 24'
												stroke='currentColor'
												strokeWidth={2.5}>
												<path
													strokeLinecap='round'
													strokeLinejoin='round'
													d='M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12'
												/>
											</svg>
										}>
										Subir archivo
									</Button>
								</div>
							</div>

							{/* Grid view */}
							{mediaView === 'grid' && (
								<div className='grid grid-cols-5 gap-2 sm:grid-cols-7 lg:grid-cols-9 xl:grid-cols-11'>
									{MEDIA_ITEMS.map((item) => (
										<div
											key={item.name}
											className='group relative overflow-hidden rounded-md border border-white/8 bg-white/2'>
											<div className='aspect-square overflow-hidden bg-zinc-800/50 relative'>
												{item.src &&
													item.type === 'image' && (
														<Image
															fill
															src={item.src!}
															alt={item.name}
															className='object-cover'
															sizes='(max-width:640px) 80px, 60px'
														/>
													)}
												{item.src &&
													item.type === 'video' && (
														<video
															className='absolute inset-0 h-full w-full object-cover'
															muted
															playsInline>
															<source
																src={item.src}
																type='video/mp4'
															/>
														</video>
													)}
												{!item.src && (
													<div className='flex h-full w-full items-center justify-center'>
														{item.type ===
														'file' ? (
															<svg
																className='h-5 w-5 text-white/40'
																fill='none'
																viewBox='0 0 24 24'
																stroke='currentColor'
																strokeWidth={
																	1.5
																}>
																<path
																	strokeLinecap='round'
																	strokeLinejoin='round'
																	d='M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
																/>
															</svg>
														) : (
															<svg
																className='h-5 w-5 text-white/30'
																fill='none'
																viewBox='0 0 24 24'
																stroke='currentColor'
																strokeWidth={
																	1.5
																}>
																<path
																	strokeLinecap='round'
																	strokeLinejoin='round'
																	d='M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z'
																/>
															</svg>
														)}
													</div>
												)}
											</div>
											<div className='px-1 py-0.5'>
												<p
													className='truncate text-[9px] leading-tight text-zinc-400'
													title={item.name}>
													{item.name}
												</p>
												<p className='text-[9px] leading-tight text-zinc-600'>
													{item.size}
												</p>
											</div>
											{/* Hover overlay */}
											<div className='absolute inset-0 flex items-center justify-center gap-1.5 bg-black/60 opacity-0 transition-opacity group-hover:opacity-100'>
												<Tooltip
													label='Copiar URL'
													position='top'
													withArrow>
													<ActionIcon
														variant='subtle'
														size='xs'
														aria-label='Copiar URL'>
														<svg
															className='h-3 w-3'
															fill='none'
															viewBox='0 0 24 24'
															stroke='currentColor'
															strokeWidth={2}>
															<path
																strokeLinecap='round'
																strokeLinejoin='round'
																d='M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z'
															/>
														</svg>
													</ActionIcon>
												</Tooltip>
												<Tooltip
													label='Eliminar'
													position='top'
													withArrow>
													<ActionIcon
														variant='subtle'
														size='xs'
														color='red'
														aria-label='Eliminar'>
														<svg
															className='h-3 w-3'
															fill='none'
															viewBox='0 0 24 24'
															stroke='currentColor'
															strokeWidth={2}>
															<path
																strokeLinecap='round'
																strokeLinejoin='round'
																d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
															/>
														</svg>
													</ActionIcon>
												</Tooltip>
											</div>
										</div>
									))}
								</div>
							)}

							{/* List view */}
							{mediaView === 'list' && (
								<div className='overflow-hidden rounded-xl border border-white/8'>
									<Table>
										<Thead>
											<Tr>
												<Th>Nombre</Th>
												<Th>Tipo</Th>
												<Th>TamaÃ±o</Th>
												<Th />
											</Tr>
										</Thead>
										<Tbody>
											{MEDIA_ITEMS.map((item) => (
												<Tr key={item.name}>
													<Td>
														<div className='flex items-center gap-2.5'>
															<div className='flex h-7 w-7 shrink-0 overflow-hidden rounded bg-zinc-800/50 relative items-center justify-center'>
																{item.src &&
																	item.type ===
																		'image' && (
																		<Image
																			fill
																			src={
																				item.src!
																			}
																			alt={
																				item.name
																			}
																			className='object-cover'
																			sizes='28px'
																		/>
																	)}
																{item.src &&
																	item.type ===
																		'video' && (
																		<video
																			className='h-full w-full object-cover'
																			muted
																			playsInline>
																			<source
																				src={
																					item.src
																				}
																				type='video/mp4'
																			/>
																		</video>
																	)}
																{!item.src &&
																	item.type ===
																		'file' && (
																		<svg
																			className='h-3.5 w-3.5 text-white/60'
																			fill='none'
																			viewBox='0 0 24 24'
																			stroke='currentColor'
																			strokeWidth={
																				2
																			}>
																			<path
																				strokeLinecap='round'
																				strokeLinejoin='round'
																				d='M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
																			/>
																		</svg>
																	)}
															</div>
															<span className='truncate text-xs text-zinc-300'>
																{item.name}
															</span>
														</div>
													</Td>
													<Td>
														<Badge
															size='xs'
															variant='light'
															color={
																item.type ===
																'image'
																	? 'blue'
																	: item.type ===
																		  'video'
																		? 'violet'
																		: 'gray'
															}>
															{item.type ===
															'image'
																? 'Imagen'
																: item.type ===
																	  'video'
																	? 'Vídeo'
																	: 'Archivo'}
														</Badge>
													</Td>
													<Td>
														<span className='text-xs text-zinc-500'>
															{item.size}
														</span>
													</Td>
													<Td>
														<div className='flex items-center justify-end gap-1'>
															<Tooltip
																label='Copiar URL'
																position='top'
																withArrow>
																<ActionIcon
																	variant='subtle'
																	size='xs'
																	aria-label='Copiar URL'>
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
																			d='M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z'
																		/>
																	</svg>
																</ActionIcon>
															</Tooltip>
															<Tooltip
																label='Eliminar'
																position='top'
																withArrow>
																<ActionIcon
																	variant='subtle'
																	size='xs'
																	color='red'
																	aria-label='Eliminar'>
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
																			d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
																		/>
																	</svg>
																</ActionIcon>
															</Tooltip>
														</div>
													</Td>
												</Tr>
											))}
										</Tbody>
									</Table>
								</div>
							)}
						</TabsPanel>

						{/* �"?�"? Users panel �"?�"? */}
						<TabsPanel value='users'>
							<div className='mb-4 flex items-center justify-between'>
								<p className='text-sm text-zinc-400'>
									{USERS.length} miembros
								</p>
								<Button
									size='sm'
									variant='outline'
									leftSection={
										<svg
											className='h-3.5 w-3.5'
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
									}>
									Invitar
								</Button>
							</div>
							<div className='space-y-2'>
								{USERS.map((user) => (
									<div
										key={user.name}
										className='flex items-center gap-3 rounded-xl border border-white/6 bg-white/2 px-4 py-3'>
										<Indicator
											dot
											color={
												user.online ? 'green' : 'gray'
											}
											position='bottom-end'
											withBorder>
											<Avatar
												size='sm'
												alt={user.name}>
												{user.name
													.slice(0, 2)
													.toUpperCase()}
											</Avatar>
										</Indicator>
										<div className='min-w-0 flex-1'>
											<p className='text-sm font-medium text-white'>
												{user.name}
											</p>
											<p className='text-xs text-zinc-500'>
												{user.email}@prism.io
											</p>
										</div>
										<div className='flex items-center gap-2'>
											<Badge
												size='xs'
												variant='light'
												color={
													user.role === 'Admin'
														? 'red'
														: user.role === 'Editor'
															? 'brand'
															: 'gray'
												}>
												{user.role}
											</Badge>
											{user.online && (
												<span className='hidden text-[10px] text-green-500 sm:inline'>
													�?� En línea
												</span>
											)}
										</div>
									</div>
								))}
							</div>
						</TabsPanel>

						{/* �"?�"? Activity panel �"?�"? */}
						<TabsPanel value='activity'>
							<div className='mx-auto max-w-xl py-2'>
								<Timeline>
									{ACTIVITY.map((ev, i) => (
										<TimelineItem
											key={i}
											title={
												<span className='text-sm text-white'>
													<strong>{ev.who}</strong>{' '}
													<span className='text-zinc-400'>
														{ev.action}
													</span>{' '}
													<em className='not-italic font-medium text-zinc-200'>
														&ldquo;{ev.target}
														&rdquo;
													</em>
												</span>
											}
											lineVariant={
												i === ACTIVITY.length - 1
													? 'dashed'
													: 'solid'
											}>
											<p className='text-xs text-zinc-600'>
												{ev.time}
											</p>
										</TimelineItem>
									))}
								</Timeline>
							</div>
						</TabsPanel>
					</Tabs>
				</div>
			</div>

			{/* �"?�"? Article Editor Modal �"?�"? */}
			<Modal
				opened={editorOpened}
				onClose={() => setEditorOpened(false)}
				title={editingArticle ? 'Editar artículo' : 'Nuevo artículo'}
				size='lg'
				centered>
				<ModalBody>
					<div className='space-y-4'>
						<TextInput
							label='Título'
							placeholder='Escribe el título del artículo�?�'
							value={form.title}
							onChange={(e) =>
								setForm({
									...form,
									title: e.target.value,
								})
							}
							required
						/>
						<div className='grid grid-cols-2 gap-3'>
							<Select
								label='Categoría'
								placeholder='Selecciona una categoría'
								value={form.category}
								onChange={(val) =>
									setForm({ ...form, category: val })
								}
								data={[
									'Diseño',
									'Frontend',
									'Backend',
									'React',
									'DevOps',
								]}
							/>
							<Select
								label='Estado'
								value={form.status}
								onChange={(val) =>
									setForm({
										...form,
										status: val as Status,
									})
								}
								data={[
									{
										value: 'draft',
										label: 'Borrador',
									},
									{
										value: 'review',
										label: 'En revisión',
									},
									{
										value: 'published',
										label: 'Publicado',
									},
									{
										value: 'archived',
										label: 'Archivado',
									},
								]}
							/>
						</div>
						<Textarea
							label='Extracto'
							placeholder='Breve descripción del contenido�?�'
							value={form.excerpt}
							onChange={(e) =>
								setForm({
									...form,
									excerpt: e.target.value,
								})
							}
							minRows={3}
							autosize
						/>
						<TagsInput
							label='Etiquetas'
							placeholder='Escribe y presiona Enter para añadir�?�'
							value={form.tags}
							onChange={(tags) => setForm({ ...form, tags })}
							maxTags={8}
						/>
						<div className='flex justify-end gap-2 pt-2'>
							<Button
								variant='subtle'
								color='gray'
								onClick={() => setEditorOpened(false)}>
								Cancelar
							</Button>
							<Button onClick={handleSave}>
								{editingArticle
									? 'Guardar cambios'
									: 'Crear artículo'}
							</Button>
						</div>
					</div>
				</ModalBody>
			</Modal>
		</div>
	);
}
