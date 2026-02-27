'use client';

import Navbar from '@/src/components/Navbar';
import { buildIssueUrl } from '@/src/lib/issue';
import {
	Carousel,
	CarouselSlide,
	Code,
	DatePickerInput,
	Dropzone,
	ModalsProvider,
	Slider,
	SpotlightProvider,
	Switch,
	Toaster,
	modals,
	spotlight,
	toast,
} from '@kivora/react';
import React, { useState } from 'react';

// â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
// Types
// â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

type Status = 'stable' | 'beta' | 'coming-soon';
type ControlType = 'boolean' | 'text' | 'number' | 'select';

interface Control {
	type: ControlType;
	name: string;
	label: string;
	default: any;
	options?: string[];
	min?: number;
	max?: number;
	step?: number;
}

interface PropRow {
	name: string;
	type: string;
	default: string;
	description: string;
}

interface ExtensionDoc {
	id: string;
	name: string;
	status: Status;
	description: string;
	importLine: string;
	preview: React.ComponentType<{ values: Record<string, any> }>;
	controls: Control[];
	props: PropRow[];
	example: string;
	icon: React.ReactNode;
}

// â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
// Extension previews
// â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

function CarouselPreview({ values }: { values: Record<string, any> }) {
	const slides = [
		{ color: 'from-violet-600 to-indigo-600', label: 'Slide 1' },
		{ color: 'from-cyan-500 to-blue-600', label: 'Slide 2' },
		{ color: 'from-rose-500 to-pink-600', label: 'Slide 3' },
	];
	return (
		<div className='w-full max-w-md'>
			<Carousel
				loop={values.loop as boolean}
				withIndicators={values.withIndicators as boolean}
				withControls={values.withControls as boolean}
				autoplay={
					values.autoplay
						? { delay: 2500, pauseOnMouseEnter: true }
						: false
				}
				slidesPerView={values.slidesPerView as number}>
				{slides.map((s, i) => (
					<CarouselSlide key={i}>
						<div
							className={`h-40 w-full rounded-xl bg-linear-to-br ${s.color} flex items-center justify-center text-white font-bold text-lg`}>
							{s.label}
						</div>
					</CarouselSlide>
				))}
			</Carousel>
		</div>
	);
}

function DatesPreview({ values }: { values: Record<string, any> }) {
	const [value, setValue] = useState<Date | null>(null);
	return (
		<div className='w-72'>
			<DatePickerInput
				label='Pick a date'
				placeholder={values.placeholder as string}
				value={value}
				onChange={setValue}
				size={values.size as any}
				disabled={values.disabled as boolean}
			/>
		</div>
	);
}

function DropzonePreview({ values }: { values: Record<string, any> }) {
	const [files, setFiles] = useState<File[]>([]);
	return (
		<div className='w-full max-w-md flex flex-col gap-3'>
			<Dropzone
				onDrop={(f) => setFiles(f)}
				multiple={values.multiple as boolean}
				disabled={values.disabled as boolean}
				maxSize={(values.maxSizeMb as number) * 1024 * 1024}>
				{(status) => (
					<div
						className={[
							'flex flex-col items-center justify-center gap-2 py-8 px-6 rounded-xl border-2 border-dashed transition-colors text-center cursor-pointer select-none',
							status === 'accept'
								? 'border-emerald-500 bg-emerald-500/10 text-emerald-400'
								: status === 'reject'
									? 'border-red-500 bg-red-500/10 text-red-400'
									: 'border-white/15 text-zinc-400 hover:border-violet-500/50 hover:bg-violet-500/5',
						].join(' ')}>
						<svg
							className='w-8 h-8'
							viewBox='0 0 24 24'
							fill='none'
							stroke='currentColor'
							strokeWidth='1.5'>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5'
							/>
						</svg>
						<p className='text-sm font-medium'>
							{status === 'accept'
								? 'Drop to upload'
								: status === 'reject'
									? 'File not accepted'
									: 'Drop files here or click to browse'}
						</p>
						<p className='text-xs text-zinc-600'>
							{values.multiple ? 'Multiple files' : 'Single file'}{' '}
							Â· Max {values.maxSizeMb} MB
						</p>
					</div>
				)}
			</Dropzone>
			{files.length > 0 && (
				<div className='text-xs text-zinc-500'>
					{files.map((f) => f.name).join(', ')}
				</div>
			)}
		</div>
	);
}

function ModalsPreview({ values }: { values: Record<string, any> }) {
	return (
		<button
			onClick={() =>
				modals.open({
					title: values.title as string,
					size: values.size as any,
					children: (
						<div className='flex flex-col gap-4'>
							<p className='text-sm text-zinc-400'>
								This modal was opened imperatively using{' '}
								<code className='bg-white/8 rounded px-1 py-0.5 text-violet-300 font-mono text-xs'>
									modals.open()
								</code>
								. No state management required.
							</p>
							<button
								onClick={() => modals.closeAll()}
								className='self-end px-4 py-2 rounded-lg bg-violet-600 hover:bg-violet-500 text-white text-sm font-medium transition-colors'>
								Close
							</button>
						</div>
					),
				})
			}
			className='px-5 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-sm font-semibold transition-colors'>
			Open modal
		</button>
	);
}

function NotificationsPreview({ values }: { values: Record<string, any> }) {
	const colorMap: Record<string, string> = {
		violet: 'bg-violet-600 hover:bg-violet-500',
		emerald: 'bg-emerald-600 hover:bg-emerald-500',
		red: 'bg-red-600 hover:bg-red-500',
		amber: 'bg-amber-600 hover:bg-amber-500',
		cyan: 'bg-cyan-600 hover:bg-cyan-500',
	};
	const cls = colorMap[values.color as string] ?? colorMap.violet;
	return (
		<button
			onClick={() =>
				toast(values.title as string, {
					description: values.message as string,
					duration: values.autoClose as number,
				})
			}
			className={`px-5 py-2.5 rounded-xl text-white text-sm font-semibold transition-colors ${cls}`}>
			Show notification
		</button>
	);
}

function SpotlightPreview({ values }: { values: Record<string, any> }) {
	return (
		<button
			onClick={() => spotlight.open()}
			className='px-5 py-2.5 rounded-xl bg-white/8 hover:bg-white/12 border border-white/10 text-zinc-300 text-sm font-medium transition-colors flex items-center gap-2'>
			<svg
				className='w-4 h-4 text-zinc-500'
				viewBox='0 0 24 24'
				fill='none'
				stroke='currentColor'
				strokeWidth='2'>
				<path
					strokeLinecap='round'
					strokeLinejoin='round'
					d='m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607z'
				/>
			</svg>
			{values.buttonLabel as string}
			<kbd className='ml-1 px-1.5 py-0.5 rounded text-[10px] font-mono bg-white/5 border border-white/10 text-zinc-500'>
				âŒ˜K
			</kbd>
		</button>
	);
}

// â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
// Extensions data
// â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

const EXTENSIONS: ExtensionDoc[] = [
	{
		id: 'carousel',
		name: 'Carousel',
		status: 'stable',
		importLine: "import { Carousel, CarouselSlide } from '@kivora/react';",
		description:
			'A fully accessible, keyboard-navigable carousel built on Swiper. Supports auto-play, indicators, controls, loop and drag gestures.',
		preview: CarouselPreview,
		controls: [
			{ type: 'boolean', name: 'loop', label: 'loop', default: false },
			{
				type: 'boolean',
				name: 'withIndicators',
				label: 'withIndicators',
				default: true,
			},
			{
				type: 'boolean',
				name: 'withControls',
				label: 'withControls',
				default: true,
			},
			{
				type: 'boolean',
				name: 'autoplay',
				label: 'autoplay',
				default: false,
			},
			{
				type: 'number',
				name: 'slidesPerView',
				label: 'slidesPerView',
				default: 1,
				min: 1,
				max: 3,
				step: 1,
			},
		],
		props: [
			{
				name: 'children',
				type: 'ReactNode',
				default: 'â€”',
				description: 'Use <CarouselSlide> for each item.',
			},
			{
				name: 'slidesPerView',
				type: 'number | "auto"',
				default: '1',
				description: 'Number of visible slides at once.',
			},
			{
				name: 'slideGap',
				type: 'number',
				default: '16',
				description: 'Gap between slides in px.',
			},
			{
				name: 'orientation',
				type: '"horizontal" | "vertical"',
				default: '"horizontal"',
				description: 'Carousel direction.',
			},
			{
				name: 'loop',
				type: 'boolean',
				default: 'false',
				description: 'Enable infinite looping.',
			},
			{
				name: 'withControls',
				type: 'boolean',
				default: 'true',
				description: 'Show prev/next arrow buttons.',
			},
			{
				name: 'withIndicators',
				type: 'boolean',
				default: 'false',
				description: 'Show pagination dots.',
			},
			{
				name: 'autoplay',
				type: 'boolean | { delay, pauseOnMouseEnter? }',
				default: 'false',
				description: 'Enable autoplay.',
			},
			{
				name: 'dragFree',
				type: 'boolean',
				default: 'false',
				description: 'Free drag without snapping.',
			},
			{
				name: 'onSlideChange',
				type: '(index: number) => void',
				default: 'â€”',
				description: 'Callback on slide change.',
			},
		],
		example: `import { Carousel, CarouselSlide } from '@kivora/react';

<Carousel withIndicators loop autoplay={{ delay: 3000 }}>
  <CarouselSlide>
    <img src="/slide-1.jpg" alt="Slide 1" />
  </CarouselSlide>
  <CarouselSlide>
    <img src="/slide-2.jpg" alt="Slide 2" />
  </CarouselSlide>
</Carousel>`,
		icon: (
			<svg
				className='w-5 h-5'
				viewBox='0 0 24 24'
				fill='none'
				stroke='currentColor'
				strokeWidth='1.8'>
				<rect
					x='2'
					y='7'
					width='20'
					height='10'
					rx='2'
				/>
				<path
					strokeLinecap='round'
					d='M8 12h8M15 9l3 3-3 3M9 9l-3 3 3 3'
				/>
			</svg>
		),
	},
	{
		id: 'dates',
		name: 'Dates',
		status: 'stable',
		importLine:
			"import { DatePickerInput, DateRangePickerInput, MonthPickerInput } from '@kivora/react';",
		description:
			'Date and time picker suite â€” DatePickerInput, DateRangePickerInput, MonthPickerInput and InlineCalendar, built with react-day-picker and date-fns.',
		preview: DatesPreview,
		controls: [
			{
				type: 'text',
				name: 'placeholder',
				label: 'placeholder',
				default: 'Pick a date',
			},
			{
				type: 'select',
				name: 'size',
				label: 'size',
				default: 'md',
				options: ['xs', 'sm', 'md', 'lg', 'xl'],
			},
			{
				type: 'boolean',
				name: 'disabled',
				label: 'disabled',
				default: false,
			},
		],
		props: [
			{
				name: 'value',
				type: 'Date | null',
				default: 'â€”',
				description: 'Controlled selected date.',
			},
			{
				name: 'onChange',
				type: '(date: Date | null) => void',
				default: 'â€”',
				description: 'Called when a date is picked.',
			},
			{
				name: 'label',
				type: 'ReactNode',
				default: 'â€”',
				description: 'Field label.',
			},
			{
				name: 'placeholder',
				type: 'string',
				default: 'â€”',
				description: 'Placeholder text.',
			},
			{
				name: 'size',
				type: '"xs" | "sm" | "md" | "lg" | "xl"',
				default: '"md"',
				description: 'Input size.',
			},
			{
				name: 'disabled',
				type: 'boolean',
				default: 'false',
				description: 'Prevents interaction.',
			},
			{
				name: 'minDate',
				type: 'Date',
				default: 'â€”',
				description: 'Earliest selectable date.',
			},
			{
				name: 'maxDate',
				type: 'Date',
				default: 'â€”',
				description: 'Latest selectable date.',
			},
			{
				name: 'clearable',
				type: 'boolean',
				default: 'false',
				description: 'Show a clear button.',
			},
			{
				name: 'captionLayout',
				type: '"label" | "dropdown" | "dropdown-months" | "dropdown-years"',
				default: '"label"',
				description: 'Calendar header layout.',
			},
		],
		example: `import { DatePickerInput, DateRangePickerInput } from '@kivora/react';

const [date, setDate] = useState<Date | null>(null);

<DatePickerInput
  label="Appointment"
  placeholder="Pick a date"
  value={date}
  onChange={setDate}
/>

// Date range
const [range, setRange] = useState({ from: null, to: null });
<DateRangePickerInput
  label="Booking period"
  value={range}
  onChange={setRange}
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
		status: 'stable',
		importLine: "import { Dropzone } from '@kivora/react';",
		description:
			'A drag-and-drop file upload zone. Accepts MIME type filtering, file size limits, multiple/single file modes and idle/accept/reject visual states.',
		preview: DropzonePreview,
		controls: [
			{
				type: 'boolean',
				name: 'multiple',
				label: 'multiple',
				default: true,
			},
			{
				type: 'boolean',
				name: 'disabled',
				label: 'disabled',
				default: false,
			},
			{
				type: 'number',
				name: 'maxSizeMb',
				label: 'maxSizeMb',
				default: 5,
				min: 1,
				max: 50,
				step: 1,
			},
		],
		props: [
			{
				name: 'onDrop',
				type: '(files: File[]) => void',
				default: 'â€”',
				description: 'Called with accepted files.',
			},
			{
				name: 'onDropAccepted',
				type: '(files: File[]) => void',
				default: 'â€”',
				description: 'Called only with accepted files.',
			},
			{
				name: 'onDropRejected',
				type: '(rejections: FileRejection[]) => void',
				default: 'â€”',
				description: 'Called with rejected files and reasons.',
			},
			{
				name: 'accept',
				type: 'Record<string, string[]> | string[]',
				default: 'â€”',
				description: 'Accepted MIME types or extensions.',
			},
			{
				name: 'multiple',
				type: 'boolean',
				default: 'true',
				description: 'Allow multiple file selection.',
			},
			{
				name: 'maxSize',
				type: 'number',
				default: 'Infinity',
				description: 'Max file size in bytes.',
			},
			{
				name: 'maxFiles',
				type: 'number',
				default: 'Infinity',
				description: 'Max number of files.',
			},
			{
				name: 'disabled',
				type: 'boolean',
				default: 'false',
				description: 'Disables the dropzone.',
			},
			{
				name: 'loading',
				type: 'boolean',
				default: 'false',
				description: 'Shows a loading state.',
			},
			{
				name: 'openRef',
				type: 'RefObject<() => void>',
				default: 'â€”',
				description: 'Ref to programmatically open the file dialog.',
			},
			{
				name: 'children',
				type: 'ReactNode | ((status: DropzoneStatus) => ReactNode)',
				default: 'â€”',
				description: 'Content. Receives idle/accept/reject status.',
			},
		],
		example: `import { Dropzone } from '@kivora/react';

<Dropzone
  onDrop={(files) => console.log(files)}
  onDropRejected={(rej) => console.warn(rej)}
  accept={{ 'image/*': [] }}
  maxSize={5 * 1024 ** 2}
  multiple={false}>
  {(status) => (
    <div>
      {status === 'accept' ? 'Drop it!' : 'Drop image here'}
    </div>
  )}
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
		status: 'stable',
		importLine: "import { ModalsProvider, modals } from '@kivora/react';",
		description:
			'An imperative modal manager. Open, close and stack modals from anywhere without managing open state. Wrap your app with ModalsProvider once.',
		preview: ModalsPreview,
		controls: [
			{
				type: 'text',
				name: 'title',
				label: 'title',
				default: 'Edit profile',
			},
			{
				type: 'select',
				name: 'size',
				label: 'size',
				default: 'md',
				options: ['xs', 'sm', 'md', 'lg', 'xl', 'full'],
			},
		],
		props: [
			{
				name: 'modals.open(options)',
				type: 'function â†’ id',
				default: 'â€”',
				description: 'Open a custom modal. Returns the modal id.',
			},
			{
				name: 'modals.openConfirm(options)',
				type: 'function â†’ id',
				default: 'â€”',
				description: 'Open a confirm dialog with onConfirm/onCancel.',
			},
			{
				name: 'modals.close(id)',
				type: 'function',
				default: 'â€”',
				description: 'Close a specific modal by id.',
			},
			{
				name: 'modals.closeAll()',
				type: 'function',
				default: 'â€”',
				description: 'Close all open modals.',
			},
			{
				name: 'options.title',
				type: 'ReactNode',
				default: 'â€”',
				description: 'Modal title.',
			},
			{
				name: 'options.children',
				type: 'ReactNode',
				default: 'â€”',
				description: 'Modal body content.',
			},
			{
				name: 'options.size',
				type: '"xs" | "sm" | "md" | "lg" | "xl" | "full"',
				default: '"md"',
				description: 'Modal width.',
			},
			{
				name: 'options.centered',
				type: 'boolean',
				default: 'false',
				description: 'Center the modal vertically.',
			},
			{
				name: 'options.closeOnClickOutside',
				type: 'boolean',
				default: 'true',
				description: 'Close on backdrop click.',
			},
		],
		example: `// 1. Wrap your app (once in layout.tsx)
import { ModalsProvider } from '@kivora/react';
<ModalsProvider><App /></ModalsProvider>

// 2. Open from anywhere
import { modals } from '@kivora/react';

modals.open({
  title: 'Edit profile',
  children: <EditProfileForm />,
});

// Confirm dialog
modals.openConfirm({
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
		status: 'stable',
		importLine: "import { Toaster, toast } from '@kivora/react';",
		description:
			'Imperative notification system with a global queue. Show, update and hide notifications from anywhere. Supports auto-close, loading states and custom colors.',
		preview: NotificationsPreview,
		controls: [
			{
				type: 'text',
				name: 'title',
				label: 'title',
				default: 'File saved',
			},
			{
				type: 'text',
				name: 'message',
				label: 'message',
				default: 'Your changes have been saved.',
			},
			{
				type: 'select',
				name: 'color',
				label: 'color',
				default: 'violet',
				options: ['violet', 'emerald', 'red', 'amber', 'cyan'],
			},
			{
				type: 'number',
				name: 'autoClose',
				label: 'autoClose (ms)',
				default: 3000,
				min: 1000,
				max: 10000,
				step: 500,
			},
		],
		props: [
			{
				name: 'toast(title, options?)',
				type: 'function â†’ id',
				default: 'â€”',
				description: 'Show a new notification. Returns the id.',
			},
			{
				name: 'toast.success / .error / .warning',
				type: 'function',
				default: 'â€”',
				description: 'Update an existing notification by id.',
			},
			{
				name: 'toast.dismiss(id?)',
				type: 'function',
				default: 'â€”',
				description: 'Hide a specific notification.',
			},
			{
				name: 'data.title',
				type: 'ReactNode',
				default: 'â€”',
				description: 'Notification title.',
			},
			{
				name: 'data.message',
				type: 'ReactNode',
				default: 'â€”',
				description: 'Notification body text.',
			},
			{
				name: 'data.color',
				type: 'string',
				default: 'â€”',
				description: 'Accent color.',
			},
			{
				name: 'data.autoClose',
				type: 'number | false',
				default: '4000',
				description: 'Auto-close delay in ms, or false to keep open.',
			},
			{
				name: 'data.loading',
				type: 'boolean',
				default: 'false',
				description: 'Show a loading spinner.',
			},
			{
				name: 'data.icon',
				type: 'ReactNode',
				default: 'â€”',
				description: 'Custom icon.',
			},
			{
				name: 'Toaster position',
				type: '"top-left" | "top-right" | "bottom-left" | "bottom-right" | "top-center" | "bottom-center"',
				default: '"bottom-right"',
				description: 'Position of the toast stack.',
			},
		],
		example: `// 1. Add Toaster once in layout.tsx
import { Toaster } from '@kivora/react';
<Toaster position="bottom-right" />

// 2. Call toast from anywhere
import { toast } from '@kivora/react';

toast('File saved', {
  description: 'Your changes have been saved.',
  duration: 3000,
});

// Loading â†’ success pattern
const id = toast.loading('Uploadingâ€¦', autoClose: false });
toast.success('Done!', { id });`,
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
		status: 'beta',
		importLine:
			"import { SpotlightProvider, spotlight } from '@kivora/react';",
		description:
			'A command palette / spotlight overlay triggered by âŒ˜K. Renders a searchable list of actions with keyboard navigation, grouping and custom renderers.',
		preview: SpotlightPreview,
		controls: [
			{
				type: 'text',
				name: 'buttonLabel',
				label: 'button label',
				default: 'Open spotlight',
			},
		],
		props: [
			{
				name: 'actions',
				type: 'SpotlightAction[]',
				default: 'â€”',
				description: 'Array of action objects to display.',
			},
			{
				name: 'action.title',
				type: 'string',
				default: 'â€”',
				description: 'Action label shown in the list.',
			},
			{
				name: 'action.description',
				type: 'string',
				default: 'â€”',
				description: 'Optional description below the title.',
			},
			{
				name: 'action.onTrigger',
				type: '() => void',
				default: 'â€”',
				description: 'Called when the action is selected.',
			},
			{
				name: 'action.icon',
				type: 'ReactNode',
				default: 'â€”',
				description: 'Icon displayed next to the action.',
			},
			{
				name: 'searchProps',
				type: 'object',
				default: 'â€”',
				description: 'Props forwarded to the search input.',
			},
			{
				name: 'limit',
				type: 'number',
				default: '10',
				description: 'Max actions to display at once.',
			},
			{
				name: 'nothingFound',
				type: 'string',
				default: '"Nothing found"',
				description: 'Message when no results match.',
			},
			{
				name: 'spotlight.open()',
				type: 'function',
				default: 'â€”',
				description: 'Programmatically open the spotlight.',
			},
			{
				name: 'spotlight.close()',
				type: 'function',
				default: 'â€”',
				description: 'Programmatically close the spotlight.',
			},
		],
		example: `// 1. Wrap your app with the provider
import { SpotlightProvider } from '@kivora/react';

const actions = [
  { title: 'Home', onTrigger: () => router.push('/') },
  { title: 'Components', onTrigger: () => router.push('/components') },
  { title: 'Toggle dark mode', onTrigger: toggleScheme },
];

<SpotlightProvider actions={actions} searchProps={{ placeholder: 'Searchâ€¦' }}>
  <App />
</SpotlightProvider>

// 2. Open from anywhere
import { spotlight } from '@kivora/react';
spotlight.open();`,
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

// â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
// Helpers
// â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

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

function CopyIcon() {
	return (
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
	);
}

function CheckIcon() {
	return (
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
	);
}

// â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
// Inner content (needs providers in parent)
// â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

function ExtensionsContent() {
	const [activeId, setActiveId] = useState<string>(EXTENSIONS[0].id);
	const [copiedId, setCopiedId] = useState<string | null>(null);
	const [controlValues, setControlValues] = useState<
		Record<string, Record<string, any>>
	>(() =>
		Object.fromEntries(
			EXTENSIONS.map((ext) => [
				ext.id,
				Object.fromEntries(
					ext.controls.map((c) => [c.name, c.default]),
				),
			]),
		),
	);

	const active = EXTENSIONS.find((e) => e.id === activeId)!;
	const values = controlValues[active.id] ?? {};

	function setControl(name: string, value: any) {
		setControlValues((prev) => ({
			...prev,
			[active.id]: { ...prev[active.id], [name]: value },
		}));
	}

	function resetControls() {
		setControlValues((prev) => ({
			...prev,
			[active.id]: Object.fromEntries(
				active.controls.map((c) => [c.name, c.default]),
			),
		}));
	}

	function copyText(key: string, text: string) {
		navigator.clipboard.writeText(text);
		setCopiedId(key);
		setTimeout(() => setCopiedId(null), 2000);
	}

	const PreviewComp = active.preview;

	return (
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
			<main
				className='flex-1 md:ml-52 pb-24 overflow-y-auto'
				style={{ height: 'calc(100dvh - 3.5rem)' }}>
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
						Extensions are included in{' '}
						<code className='text-violet-300 font-mono text-sm'>
							@kivora/react
						</code>
						. Install once, import only what you need.
					</p>
				</div>

				{/* Mobile tabs */}
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
				<div className='px-6 md:px-10 pt-8 max-w-3xl space-y-8'>
					{/* Header */}
					<div>
						<div className='flex items-center gap-3 mb-2'>
							<div
								className='w-10 h-10 rounded-xl flex items-center justify-center border border-white/10 text-violet-400'
								style={{ background: 'rgba(124,58,237,0.1)' }}>
								{active.icon}
							</div>
							<div className='flex items-center gap-2'>
								<h2 className='text-xl font-bold text-white'>
									{active.name}
								</h2>
								<StatusBadge status={active.status} />
							</div>
						</div>
						<p className='text-sm text-zinc-400 leading-relaxed max-w-2xl'>
							{active.description}
						</p>
					</div>

					{/* Import */}
					<div>
						<h3 className='text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-2'>
							Import
						</h3>
						<div
							className='flex items-center justify-between px-4 py-3 rounded-xl border border-white/8'
							style={{ background: 'rgba(255,255,255,0.025)' }}>
							<code className='text-sm text-cyan-300 font-mono truncate'>
								{active.importLine}
							</code>
							<button
								onClick={() =>
									copyText(
										`import-${active.id}`,
										active.importLine,
									)
								}
								className='ml-4 flex items-center gap-1 text-[10px] text-zinc-500 hover:text-zinc-300 transition-colors shrink-0'>
								{copiedId === `import-${active.id}` ? (
									<>
										<CheckIcon /> Copied
									</>
								) : (
									<>
										<CopyIcon /> Copy
									</>
								)}
							</button>
						</div>
					</div>

					{/* Preview */}
					<div>
						<h3 className='text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-3'>
							Preview
						</h3>
						<div
							className='rounded-2xl border border-white/8 p-8 flex items-center justify-center min-h-48'
							style={{
								background: 'rgba(255,255,255,0.02)',
								backgroundImage:
									'radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)',
								backgroundSize: '20px 20px',
							}}>
							<PreviewComp values={values} />
						</div>
					</div>

					{/* Controls */}
					{active.controls.length > 0 && (
						<div>
							<div className='flex items-center justify-between mb-3'>
								<h3 className='text-xs font-semibold uppercase tracking-widest text-zinc-500'>
									Controls
								</h3>
								<button
									onClick={resetControls}
									className='text-xs text-zinc-600 hover:text-zinc-400 transition-colors'>
									Reset
								</button>
							</div>
							<div className='rounded-xl border border-white/8 overflow-hidden divide-y divide-white/6'>
								{active.controls.map((control) => (
									<div
										key={control.name}
										className='flex items-center gap-4 px-4 py-2.5'
										style={{
											background:
												'rgba(255,255,255,0.015)',
										}}>
										<span className='text-xs font-mono text-violet-300/80 w-28 shrink-0'>
											{control.label}
										</span>
										<span className='text-[10px] text-zinc-600 w-14 shrink-0'>
											{control.type}
										</span>
										{control.type === 'boolean' && (
											<Switch
												checked={
													values[
														control.name
													] as boolean
												}
												onChange={(
													e: React.ChangeEvent<HTMLInputElement>,
												) =>
													setControl(
														control.name,
														e.target.checked,
													)
												}
												size='sm'
											/>
										)}
										{control.type === 'text' && (
											<input
												type='text'
												value={
													(values[
														control.name
													] as string) ?? ''
												}
												onChange={(e) =>
													setControl(
														control.name,
														e.target.value,
													)
												}
												className='flex-1 min-w-0 bg-white/5 border border-white/8 rounded px-2.5 py-1 text-xs text-zinc-300 focus:outline-none focus:ring-1 focus:ring-violet-600/50 transition-colors'
											/>
										)}
										{control.type === 'number' && (
											<div className='flex items-center gap-3 flex-1'>
												<Slider
													min={control.min ?? 0}
													max={control.max ?? 100}
													step={control.step ?? 1}
													value={
														(values[
															control.name
														] as number) ??
														control.default
													}
													onChange={(val: number) =>
														setControl(
															control.name,
															val,
														)
													}
													color='violet'
													size='xs'
												/>
												<span className='text-xs font-mono text-zinc-400 w-10 text-right'>
													{(values[
														control.name
													] as number) ??
														control.default}
												</span>
											</div>
										)}
										{control.type === 'select' && (
											<div className='flex flex-wrap gap-1.5'>
												{control.options!.map((opt) => (
													<button
														key={opt}
														onClick={() =>
															setControl(
																control.name,
																opt,
															)
														}
														className={[
															'px-2 py-0.5 rounded text-xs font-mono border transition-colors',
															values[
																control.name
															] === opt
																? 'border-violet-500/60 bg-violet-500/15 text-violet-300'
																: 'border-white/8 text-zinc-500 hover:text-zinc-300 hover:border-white/20',
														].join(' ')}>
														{opt}
													</button>
												))}
											</div>
										)}
									</div>
								))}
							</div>
						</div>
					)}

					{/* Props */}
					<div>
						<h3 className='text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-3'>
							Props
						</h3>
						<div className='rounded-xl border border-white/8 overflow-hidden'>
							<table className='w-full text-xs'>
								<thead>
									<tr
										style={{
											background:
												'rgba(255,255,255,0.03)',
										}}>
										<th className='text-left px-4 py-2.5 font-semibold text-zinc-500 w-44'>
											Name
										</th>
										<th className='text-left px-4 py-2.5 font-semibold text-zinc-500 w-40'>
											Type
										</th>
										<th className='text-left px-4 py-2.5 font-semibold text-zinc-500 w-20'>
											Default
										</th>
										<th className='text-left px-4 py-2.5 font-semibold text-zinc-500'>
											Description
										</th>
									</tr>
								</thead>
								<tbody className='divide-y divide-white/4'>
									{active.props.map((p) => (
										<tr
											key={p.name}
											style={{
												background:
													'rgba(255,255,255,0.01)',
											}}>
											<td className='px-4 py-2.5 font-mono text-violet-300/80'>
												{p.name}
											</td>
											<td className='px-4 py-2.5 font-mono text-cyan-400/70'>
												{p.type}
											</td>
											<td className='px-4 py-2.5 font-mono text-zinc-500'>
												{p.default || 'â€”'}
											</td>
											<td className='px-4 py-2.5 text-zinc-400'>
												{p.description}
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</div>

					{/* Example */}
					<div>
						<h3 className='text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-3'>
							Example
						</h3>
						<Code
							block
							showLineNumbers
							copyable
							language='tsx'>
							{active.example}
						</Code>
					</div>

					{/* Other extensions */}
					<div>
						<p className='text-[10px] font-semibold uppercase tracking-widest text-zinc-600 mb-3'>
							Other extensions
						</p>
						<div className='grid grid-cols-2 md:grid-cols-3 gap-3'>
							{EXTENSIONS.filter((e) => e.id !== active.id).map(
								(ext) => (
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
								),
							)}
						</div>
					</div>
				</div>
			{/* Issues */}
			<div className='px-6 pb-6 mt-6'>
				<div
					className='rounded-2xl border border-white/8 p-8 flex flex-col md:flex-row items-start md:items-center gap-6'
					style={{ background: 'linear-gradient(135deg, rgba(124,58,237,0.08), rgba(6,182,212,0.08))' }}>
					<div className='flex-1'>
						<p className='text-sm font-semibold text-zinc-200 mb-1'>¿Encontraste un bug o tienes una sugerencia?</p>
						<p className='text-xs text-zinc-500'>Abre una issue en GitHub — el equipo siempre está dispuesto a ayudar.</p>
					</div>
					<a
						href={buildIssueUrl('Extensions')}
						target='_blank'
						rel='noopener noreferrer'
						className='shrink-0 px-4 py-2 rounded-lg text-xs font-semibold text-white border border-white/10 hover:border-white/25 transition-all'
						style={{ background: 'rgba(255,255,255,0.07)' }}>Open an issue →
					</a>
				</div>
			</div>
			</main>
		</div>
	);
}

// â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
// Page â€” wraps content with required providers
// â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

export default function ExtensionsPage() {
	const spotlightActions = [
		{
			id: 'home',
			label: 'Home',
			description: 'Go to the home page',
			onClick: () => {},
		},
		{
			id: 'components',
			label: 'Components',
			description: 'Browse UI components',
			onClick: () => {},
		},
		{
			id: 'extensions',
			label: 'Extensions',
			description: 'Browse extensions',
			onClick: () => {},
		},
		{
			id: 'getting-started',
			label: 'Getting started',
			description: 'Quick start guide',
			onClick: () => {},
		},
		{
			id: 'theming',
			label: 'Theming',
			description: 'Customize the design system',
			onClick: () => {},
		},
	];

	return (
		<ModalsProvider>
			<Toaster position='bottom-right' />
			<SpotlightProvider
				actions={spotlightActions}
				searchProps={{
					placeholder: 'Search pages and actionsâ€¦',
				}}>
				<div className='min-h-screen bg-[#09090b] text-zinc-100'>
					<Navbar />
					<ExtensionsContent />
				</div>
			</SpotlightProvider>
		</ModalsProvider>
	);
}
