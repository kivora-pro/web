'use client';

import Navbar from '@/src/components/Navbar';
import { useState } from 'react';

// ─────────────────────────────────────────────────────────────────────────────
// Data
// ─────────────────────────────────────────────────────────────────────────────

type Status = 'stable' | 'beta' | 'coming-soon';

interface ExtensionDoc {
	id: string;
	name: string;
	packageSuffix: string;
	status: Status;
	description: string;
	features: string[];
	example: string;
	icon: React.ReactNode;
}

const EXTENSIONS: ExtensionDoc[] = [
	{
		id: 'carousel',
		name: 'Carousel',
		packageSuffix: 'carousel',
		status: 'stable',
		description:
			'A fully accessible, keyboard-navigable image and content carousel. Supports auto-play, custom indicators, slide transitions and touch/drag gestures out of the box.',
		features: [
			'Auto-play with configurable interval',
			'Keyboard and touch/drag navigation',
			'Custom indicators and controls',
			'Slide, fade and zoom transitions',
			'Infinite looping',
			'Accessible aria-labels',
		],
		example: `import { Carousel, CarouselSlide } from '@kivora/react/carousel';

<Carousel withIndicators height={320} loop autoPlay interval={4000}>
  {slides.map((src, i) => (
    <CarouselSlide key={i}>
      <img src={src} alt={\`Slide \${i + 1}\`} />
    </CarouselSlide>
  ))}
</Carousel>`,
		icon: (
			<svg
				className='w-5 h-5'
				viewBox='0 0 24 24'
				fill='none'
				stroke='currentColor'
				strokeWidth='1.8'>
				<path
					strokeLinecap='round'
					strokeLinejoin='round'
					d='M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z'
				/>
			</svg>
		),
	},
	{
		id: 'charts',
		name: 'Charts',
		packageSuffix: 'charts',
		status: 'beta',
		description:
			'Composable chart components built on top of Recharts. Area, Bar, Line, Pie and Radar charts that are automatically themed using your Kivora design tokens.',
		features: [
			'AreaChart, BarChart, LineChart',
			'PieChart and DonutChart',
			'RadarChart',
			'Automatic Kivora theming',
			'Responsive by default',
			'Accessible tooltips',
		],
		example: `import { AreaChart } from '@kivora/react/charts';

const data = [
  { month: 'Jan', users: 120 },
  { month: 'Feb', users: 240 },
  { month: 'Mar', users: 180 },
];

<AreaChart
  data={data}
  dataKey="users"
  xAxisKey="month"
  height={280}
  curveType="monotone"
  withGradient
/>`,
		icon: (
			<svg
				className='w-5 h-5'
				viewBox='0 0 24 24'
				fill='none'
				stroke='currentColor'
				strokeWidth='1.8'>
				<path
					strokeLinecap='round'
					strokeLinejoin='round'
					d='M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z'
				/>
			</svg>
		),
	},
	{
		id: 'dates',
		name: 'Dates',
		packageSuffix: 'dates',
		status: 'stable',
		description:
			'A comprehensive date and time picker suite — DatePicker, TimePicker, DateTimePicker, DateRangePicker and Calendar, all built with Day.js and full locale support.',
		features: [
			'DatePicker, TimePicker, DateTimePicker',
			'DateRangePicker with range highlighting',
			'Standalone Calendar component',
			'Day.js-based (lightweight, tree-shakeable)',
			'Locale and first-day-of-week support',
			'Min/max date constraints',
		],
		example: `import { DatePicker, DateRangePicker } from '@kivora/react/dates';
import dayjs from 'dayjs';

// Single date
<DatePicker
  label="Appointment date"
  placeholder="Pick a date"
  minDate={dayjs().toDate()}
/>

// Date range
<DateRangePicker
  label="Booking period"
  placeholder="From – To"
/>`,
		icon: (
			<svg
				className='w-5 h-5'
				viewBox='0 0 24 24'
				fill='none'
				stroke='currentColor'
				strokeWidth='1.8'>
				<path
					strokeLinecap='round'
					strokeLinejoin='round'
					d='M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5'
				/>
			</svg>
		),
	},
	{
		id: 'dropzone',
		name: 'Dropzone',
		packageSuffix: 'dropzone',
		status: 'stable',
		description:
			'A drag-and-drop file upload zone. Accepts MIME type filtering, file size limits, multiple/single file modes and exposes idle/accept/reject visual states.',
		features: [
			'Drag-and-drop and click-to-browse',
			'MIME type and extension filtering',
			'Max file size validation',
			'Single and multiple file modes',
			'Idle / accept / reject visual states',
			'Programmatic open() API',
		],
		example: `import { Dropzone, IMAGE_MIME_TYPE } from '@kivora/react/dropzone';

<Dropzone
  onDrop={(files) => console.log(files)}
  onReject={(rejected) => console.log(rejected)}
  accept={IMAGE_MIME_TYPE}
  maxSize={5 * 1024 ** 2}
  multiple={false}>
  <p>Drop image here or click to browse</p>
  <p>Max 5 MB • PNG, JPG, WEBP, SVG</p>
</Dropzone>`,
		icon: (
			<svg
				className='w-5 h-5'
				viewBox='0 0 24 24'
				fill='none'
				stroke='currentColor'
				strokeWidth='1.8'>
				<path
					strokeLinecap='round'
					strokeLinejoin='round'
					d='M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5'
				/>
			</svg>
		),
	},
	{
		id: 'modals',
		name: 'Modals',
		packageSuffix: 'modals',
		status: 'stable',
		description:
			'An imperative modal manager that lets you open and close modals from anywhere without managing open state yourself. Uses a context-based stack for nested modals.',
		features: [
			'Imperative openModal / closeModal API',
			'Modal stack for nested modals',
			'Built-in confirm and context modals',
			'Customisable size, title and padding',
			'Focus trap and scroll lock',
			'Works with useModals hook',
		],
		example: `import { ModalsProvider, openModal, openConfirmModal } from '@kivora/react/modals';

// Wrap your app
<ModalsProvider>
  <App />
</ModalsProvider>

// Open a custom modal from anywhere
openModal({
  title: 'Edit profile',
  children: <EditProfileForm />,
});

// Open a confirm dialog
openConfirmModal({
  title: 'Delete item?',
  children: 'This action cannot be undone.',
  onConfirm: () => deleteItem(id),
});`,
		icon: (
			<svg
				className='w-5 h-5'
				viewBox='0 0 24 24'
				fill='none'
				stroke='currentColor'
				strokeWidth='1.8'>
				<path
					strokeLinecap='round'
					strokeLinejoin='round'
					d='M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H6.911a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661z'
				/>
			</svg>
		),
	},
	{
		id: 'notifications',
		name: 'Notifications',
		packageSuffix: 'notifications',
		status: 'stable',
		description:
			'A notification system with a global queue. Show, update and hide notifications imperatively from anywhere in your app. Supports custom icons, loading states and auto-close.',
		features: [
			'show / update / hide API',
			'Global notification queue',
			'Auto-close with configurable timeout',
			'Loading and success/error state transitions',
			'Custom icon and color support',
			'Position control (top/bottom, left/right/center)',
		],
		example: `import { notifications } from '@kivora/react/notifications';

// Show a basic notification
notifications.show({
  title: 'File saved',
  message: 'Your changes have been saved.',
  color: 'green',
  autoClose: 3000,
});

// Show a loading notification, then update it
const id = notifications.show({
  loading: true,
  title: 'Uploading…',
  message: 'Please wait.',
  autoClose: false,
});

notifications.update({
  id,
  color: 'teal',
  title: 'Done!',
  message: 'Upload complete.',
  loading: false,
  autoClose: 2000,
});`,
		icon: (
			<svg
				className='w-5 h-5'
				viewBox='0 0 24 24'
				fill='none'
				stroke='currentColor'
				strokeWidth='1.8'>
				<path
					strokeLinecap='round'
					strokeLinejoin='round'
					d='M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0'
				/>
			</svg>
		),
	},
	{
		id: 'spotlight',
		name: 'Spotlight',
		packageSuffix: 'spotlight',
		status: 'beta',
		description:
			'A command palette / spotlight search overlay. Triggered by a configurable shortcut (default ⌘K), it renders a searchable list of actions with optional grouping and keyboard navigation.',
		features: [
			'Configurable trigger shortcut (default ⌘K)',
			'Fuzzy search over any action list',
			'Action groups and separators',
			'Custom action renderers',
			'Keyboard navigation',
			'Extensible with custom search logic',
		],
		example: `import { SpotlightProvider, openSpotlight } from '@kivora/react/spotlight';

const actions = [
  { title: 'Home', onTrigger: () => router.push('/') },
  { title: 'Components', onTrigger: () => router.push('/components') },
  { title: 'Toggle dark mode', onTrigger: () => toggleColorScheme() },
];

// Wrap your app
<SpotlightProvider
  actions={actions}
  searchPlaceholder="Search or jump to…"
  shortcut="mod+k">
  <App />
</SpotlightProvider>

// Open programmatically anywhere
<button onClick={openSpotlight}>Open spotlight</button>`,
		icon: (
			<svg
				className='w-5 h-5'
				viewBox='0 0 24 24'
				fill='none'
				stroke='currentColor'
				strokeWidth='1.8'>
				<path
					strokeLinecap='round'
					strokeLinejoin='round'
					d='m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607z'
				/>
			</svg>
		),
	},
];

// ─────────────────────────────────────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────────────────────────────────────

const STATUS_STYLES: Record<Status, string> = {
	stable: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
	beta: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
	'coming-soon': 'bg-zinc-500/10 text-zinc-400 border-zinc-500/20',
};

const STATUS_LABELS: Record<Status, string> = {
	stable: 'Stable',
	beta: 'Beta',
	'coming-soon': 'Coming soon',
};

function StatusBadge({ status }: { status: Status }) {
	return (
		<span
			className={`inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-semibold border ${STATUS_STYLES[status]}`}>
			{STATUS_LABELS[status]}
		</span>
	);
}

// ─────────────────────────────────────────────────────────────────────────────
// Page
// ─────────────────────────────────────────────────────────────────────────────

export default function ExtensionsPage() {
	const [activeId, setActiveId] = useState<string>(EXTENSIONS[0].id);
	const [copiedId, setCopiedId] = useState<string | null>(null);

	const active = EXTENSIONS.find((e) => e.id === activeId)!;

	function copyCode(id: string, code: string) {
		navigator.clipboard.writeText(code);
		setCopiedId(id);
		setTimeout(() => setCopiedId(null), 2000);
	}

	return (
		<div className='min-h-screen bg-[#09090b] text-zinc-100'>
			<Navbar />

			{/* Two-column layout */}
			<div className='flex flex-1 pt-14 min-h-screen'>
				{/* Sidebar */}
				<aside
					className='hidden md:flex flex-col w-52 shrink-0 border-r border-white/6 overflow-y-auto py-6 fixed top-14 bottom-0'
					style={{ background: 'rgba(255,255,255,0.015)' }}>
					<p className='px-4 mb-4 text-[10px] font-semibold uppercase tracking-widest text-zinc-600'>
						Extensions
					</p>
					{EXTENSIONS.map((ext) => (
						<button
							key={ext.id}
							onClick={() => setActiveId(ext.id)}
							className={`flex items-center gap-2.5 px-4 py-2 text-sm text-left w-full transition-colors ${
								activeId === ext.id
									? 'text-violet-400 bg-violet-500/10'
									: 'text-zinc-400 hover:text-zinc-200 hover:bg-white/5'
							}`}>
							<span
								className={
									activeId === ext.id
										? 'text-violet-400'
										: 'text-zinc-600'
								}>
								{ext.icon}
							</span>
							<span>{ext.name}</span>
							<span className='ml-auto'>
								<StatusBadge status={ext.status} />
							</span>
						</button>
					))}
				</aside>

				{/* Main */}
				<main className='flex-1 md:ml-52 pb-24'>
					{/* Hero */}
					<div className='px-6 md:px-10 pt-12 pb-8 border-b border-white/6'>
						<div
							className='inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold tracking-widest uppercase mb-5 border border-white/10 text-zinc-400'
							style={{ background: 'rgba(255,255,255,0.04)' }}>
							Extensions
						</div>
						<h1 className='text-3xl md:text-4xl font-bold text-white mb-3 leading-tight'>
							Powerful add-ons
							<br />
							<span
								className='bg-clip-text text-transparent'
								style={{
									backgroundImage:
										'linear-gradient(135deg, #7c3aed, #06b6d4)',
								}}>
								for every use-case
							</span>
						</h1>
						<p className='text-zinc-400 text-base max-w-2xl'>
							Extensions are optional packages that live outside
							the core bundle. Install only what you need — each
							one is tree-shakeable and independently versioned.
						</p>
					</div>

					{/* Mobile extension list */}
					<div className='md:hidden px-6 pt-6 flex flex-wrap gap-2'>
						{EXTENSIONS.map((ext) => (
							<button
								key={ext.id}
								onClick={() => setActiveId(ext.id)}
								className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs border transition-colors ${
									activeId === ext.id
										? 'border-violet-500/40 bg-violet-500/10 text-violet-300'
										: 'border-white/10 text-zinc-400 hover:text-zinc-200 hover:border-white/20'
								}`}>
								{ext.name}
							</button>
						))}
					</div>

					{/* Extension detail */}
					<div className='px-6 md:px-10 pt-8 space-y-8'>
						{/* Header */}
						<div>
							<div className='flex items-center gap-3 mb-3'>
								<div
									className='w-10 h-10 rounded-xl flex items-center justify-center border border-white/10 text-violet-400'
									style={{
										background: 'rgba(124,58,237,0.1)',
									}}>
									{active.icon}
								</div>
								<div>
									<div className='flex items-center gap-2'>
										<h2 className='text-xl font-bold text-white'>
											{active.name}
										</h2>
										<StatusBadge status={active.status} />
									</div>
									<code className='text-xs text-zinc-500 font-mono'>
										@kivora/react/{active.packageSuffix}
									</code>
								</div>
							</div>
							<p className='text-sm text-zinc-400 leading-relaxed max-w-2xl'>
								{active.description}
							</p>
						</div>

						{/* Install */}
						<div>
							<p className='text-[10px] font-semibold uppercase tracking-widest text-zinc-600 mb-2'>
								Install
							</p>
							<div
								className='flex items-center justify-between px-4 py-3 rounded-xl border border-white/8'
								style={{
									background: 'rgba(255,255,255,0.025)',
								}}>
								<code className='text-sm text-cyan-300 font-mono'>
									npm install @kivora/react
								</code>
								<button
									onClick={() =>
										copyCode(
											`install-${active.id}`,
											`npm install @kivora/react`,
										)
									}
									className='flex items-center gap-1 text-[10px] text-zinc-500 hover:text-zinc-300 transition-colors ml-4'>
									{copiedId === `install-${active.id}` ? (
										<>
											<svg
												className='w-3 h-3'
												viewBox='0 0 24 24'
												fill='none'
												stroke='currentColor'
												strokeWidth='2.5'>
												<path
													strokeLinecap='round'
													strokeLinejoin='round'
													d='M4.5 12.75l6 6 9-13.5'
												/>
											</svg>
											Copied
										</>
									) : (
										<>
											<svg
												className='w-3 h-3'
												viewBox='0 0 24 24'
												fill='none'
												stroke='currentColor'
												strokeWidth='2'>
												<path
													strokeLinecap='round'
													strokeLinejoin='round'
													d='M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184'
												/>
											</svg>
											Copy
										</>
									)}
								</button>
							</div>
						</div>

						{/* Features */}
						<div>
							<p className='text-[10px] font-semibold uppercase tracking-widest text-zinc-600 mb-3'>
								Features
							</p>
							<ul className='grid grid-cols-1 sm:grid-cols-2 gap-2'>
								{active.features.map((f) => (
									<li
										key={f}
										className='flex items-start gap-2 text-sm text-zinc-400'>
										<svg
											className='w-4 h-4 text-emerald-400 shrink-0 mt-0.5'
											viewBox='0 0 24 24'
											fill='none'
											stroke='currentColor'
											strokeWidth='2.5'>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												d='M4.5 12.75l6 6 9-13.5'
											/>
										</svg>
										{f}
									</li>
								))}
							</ul>
						</div>

						{/* Example */}
						<div>
							<div className='flex items-center justify-between mb-2'>
								<p className='text-[10px] font-semibold uppercase tracking-widest text-zinc-600'>
									Example
								</p>
								<button
									onClick={() =>
										copyCode(
											`example-${active.id}`,
											active.example,
										)
									}
									className='flex items-center gap-1.5 text-[10px] text-zinc-500 hover:text-zinc-300 transition-colors'>
									{copiedId === `example-${active.id}` ? (
										<>
											<svg
												className='w-3 h-3'
												viewBox='0 0 24 24'
												fill='none'
												stroke='currentColor'
												strokeWidth='2.5'>
												<path
													strokeLinecap='round'
													strokeLinejoin='round'
													d='M4.5 12.75l6 6 9-13.5'
												/>
											</svg>
											Copied
										</>
									) : (
										<>
											<svg
												className='w-3 h-3'
												viewBox='0 0 24 24'
												fill='none'
												stroke='currentColor'
												strokeWidth='2'>
												<path
													strokeLinecap='round'
													strokeLinejoin='round'
													d='M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184'
												/>
											</svg>
											Copy
										</>
									)}
								</button>
							</div>
							<div
								className='rounded-xl border border-white/8 overflow-hidden'
								style={{
									background: 'rgba(255,255,255,0.025)',
								}}>
								<pre className='text-xs text-zinc-300 font-mono px-4 py-4 overflow-x-auto leading-relaxed'>
									{active.example}
								</pre>
							</div>
						</div>

						{/* Other extensions grid */}
						<div>
							<p className='text-[10px] font-semibold uppercase tracking-widest text-zinc-600 mb-3'>
								Other extensions
							</p>
							<div className='grid grid-cols-2 md:grid-cols-3 gap-3'>
								{EXTENSIONS.filter(
									(e) => e.id !== active.id,
								).map((ext) => (
									<button
										key={ext.id}
										onClick={() => setActiveId(ext.id)}
										className='group flex flex-col gap-2 p-4 rounded-xl border border-white/8 hover:border-white/20 transition-all text-left'
										style={{
											background:
												'rgba(255,255,255,0.02)',
										}}>
										<div className='flex items-center justify-between'>
											<span className='text-zinc-500 group-hover:text-violet-400 transition-colors'>
												{ext.icon}
											</span>
											<StatusBadge status={ext.status} />
										</div>
										<p className='text-sm font-semibold text-zinc-300 group-hover:text-white transition-colors'>
											{ext.name}
										</p>
									</button>
								))}
							</div>
						</div>
					</div>
				</main>
			</div>
		</div>
	);
}
