'use client';

import Navbar from '@/src/components/Navbar';
import {
	// Data Display
	Accordion,
	AccordionControl,
	AccordionItem,
	AccordionPanel,
	// Buttons
	ActionIcon,
	// Feedback
	Alert,
	// Navigation
	Anchor,
	// Layout
	AspectRatio,
	// Inputs
	Autocomplete,
	Avatar,
	Badge,
	// Typography
	Blockquote,
	Box,
	Breadcrumbs,
	Burger,
	Button,
	Card,
	Center,
	Checkbox,
	Chip,
	ChipGroup,
	CloseButton,
	Code,
	Collapse,
	ColorInput,
	ColorPicker,
	ColorSwatch,
	Container,
	CopyButton,
	// Overlays
	Dialog,
	Divider,
	Drawer,
	FileButton,
	FileInput,
	Flex,
	Grid,
	GridCol,
	Group,
	Highlight,
	HoverCard,
	HoverCardDropdown,
	HoverCardTarget,
	Indicator,
	JsonInput,
	Kbd,
	List,
	ListItem,
	Loader,
	LoadingOverlay,
	Mark,
	Menu,
	MenuDivider,
	MenuDropdown,
	MenuItem,
	MenuLabel,
	MenuTarget,
	Modal,
	ModalBody,
	ModalFooter,
	MultiSelect,
	NavLink,
	Notification,
	NumberFormatter,
	NumberInput,
	Overlay,
	Pagination,
	Paper,
	PasswordInput,
	Pill,
	PinInput,
	Popover,
	PopoverDropdown,
	PopoverTarget,
	Progress,
	Radio,
	RadioGroup,
	Rating,
	RingProgress,
	ScrollArea,
	SegmentedControl,
	Select,
	SemiCircleProgress,
	SimpleGrid,
	Skeleton,
	Slider,
	Space,
	Spoiler,
	Stack,
	Stepper,
	StepperCompleted,
	StepperStep,
	Switch,
	Table,
	TableOfContents,
	Tabs,
	TabsList,
	TabsPanel,
	TabsTab,
	TagsInput,
	Tbody,
	Td,
	Text,
	Textarea,
	TextInput,
	Th,
	Thead,
	ThemeIcon,
	Timeline,
	TimelineItem,
	Title,
	// Toast
	toast,
	Tooltip,
	Tr,
	Transition,
	UnstyledButton,
} from '@kivora/react';
import React, { useEffect, useRef, useState } from 'react';

//
// Types
//

type Status = 'stable' | 'beta' | 'coming-soon';

interface PropRow {
	name: string;
	type: string;
	default: string;
	description: string;
}

type Control =
	| {
			type: 'select';
			name: string;
			label?: string;
			default: string;
			options: string[];
	  }
	| { type: 'boolean'; name: string; label?: string; default: boolean }
	| { type: 'text'; name: string; label?: string; default: string }
	| {
			type: 'number';
			name: string;
			label?: string;
			default: number;
			min?: number;
			max?: number;
			step?: number;
	  };

interface ComponentDoc {
	id: string;
	name: string;
	status: Status;
	description: string;
	preview: React.ComponentType;
	props: PropRow[];
	controls?: Control[];
	controlledPreview?: (values: Record<string, any>) => React.ReactNode;
}

interface Category {
	title: string;
	items: ComponentDoc[];
}

//
// Preview components  (defined at top level so hooks work correctly)
//

function ButtonPreview() {
	return (
		<div className='flex flex-wrap gap-3 items-center'>
			<Button variant='solid'>Solid</Button>
			<Button variant='outline'>Outline</Button>
			<Button variant='ghost'>Ghost</Button>
			<Button variant='subtle'>Subtle</Button>
			<Button variant='link'>Link</Button>
			<Button
				variant='solid'
				loading>
				Loading
			</Button>
			<Button
				variant='solid'
				disabled>
				Disabled
			</Button>
		</div>
	);
}

function ActionIconPreview() {
	return (
		<div className='flex flex-wrap gap-3 items-center'>
			<ActionIcon
				aria-label='Solid'
				variant='solid'>
				<svg
					className='w-4 h-4'
					fill='none'
					viewBox='0 0 24 24'
					stroke='currentColor'>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth={2}
						d='M5 13l4 4L19 7'
					/>
				</svg>
			</ActionIcon>
			<ActionIcon
				aria-label='Outline'
				variant='outline'>
				<svg
					className='w-4 h-4'
					fill='none'
					viewBox='0 0 24 24'
					stroke='currentColor'>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth={2}
						d='M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636'
					/>
				</svg>
			</ActionIcon>
			<ActionIcon
				aria-label='Ghost'
				variant='ghost'>
				<svg
					className='w-4 h-4'
					fill='none'
					viewBox='0 0 24 24'
					stroke='currentColor'>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth={2}
						d='M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z'
					/>
				</svg>
			</ActionIcon>
			<ActionIcon
				aria-label='Subtle'
				variant='subtle'>
				<svg
					className='w-4 h-4'
					fill='none'
					viewBox='0 0 24 24'
					stroke='currentColor'>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth={2}
						d='M12 6v6m0 0v6m0-6h6m-6 0H6'
					/>
				</svg>
			</ActionIcon>
			<ActionIcon
				aria-label='Loading'
				variant='solid'
				loading>
				<svg
					className='w-4 h-4'
					viewBox='0 0 24 24'
				/>
			</ActionIcon>
		</div>
	);
}

function BurgerPreview() {
	const [opened, setOpened] = useState(false);
	return (
		<div className='flex flex-col gap-6 items-center'>
			<div className='flex flex-wrap gap-6 items-end'>
				<div className='flex flex-col items-center gap-2'>
					<Burger
						opened={opened}
						size='sm'
						onClick={() => setOpened((o) => !o)}
					/>
					<span className='text-xs text-zinc-500'>sm</span>
				</div>
				<div className='flex flex-col items-center gap-2'>
					<Burger
						opened={opened}
						size='md'
						onClick={() => setOpened((o) => !o)}
					/>
					<span className='text-xs text-zinc-500'>md</span>
				</div>
				<div className='flex flex-col items-center gap-2'>
					<Burger
						opened={opened}
						size='lg'
						onClick={() => setOpened((o) => !o)}
					/>
					<span className='text-xs text-zinc-500'>lg</span>
				</div>
			</div>
			<span className='text-xs text-zinc-500'>
				{opened
					? 'Menú abierto — clic para cerrar'
					: 'Menú cerrado — clic para abrir'}
			</span>
		</div>
	);
}

function CloseButtonPreview() {
	return (
		<div className='flex flex-wrap gap-4 items-end'>
			<div className='flex flex-col items-center gap-2'>
				<CloseButton size='xs' />
				<span className='text-xs text-zinc-500'>xs</span>
			</div>
			<div className='flex flex-col items-center gap-2'>
				<CloseButton size='sm' />
				<span className='text-xs text-zinc-500'>sm</span>
			</div>
			<div className='flex flex-col items-center gap-2'>
				<CloseButton size='md' />
				<span className='text-xs text-zinc-500'>md</span>
			</div>
			<div className='flex flex-col items-center gap-2'>
				<CloseButton size='lg' />
				<span className='text-xs text-zinc-500'>lg</span>
			</div>
			<div className='flex flex-col items-center gap-2'>
				<CloseButton size='xl' />
				<span className='text-xs text-zinc-500'>xl</span>
			</div>
		</div>
	);
}

function CopyButtonPreview() {
	return (
		<div className='flex flex-wrap gap-4 items-center'>
			<CopyButton value='npm install @kivora/react'>
				{({ copied, copy }) => (
					<Button
						variant={copied ? 'solid' : 'outline'}
						onClick={copy}
						leftSection={
							<svg
								className='w-4 h-4'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									d={
										copied
											? 'M5 13l4 4L19 7'
											: 'M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z'
									}
								/>
							</svg>
						}>
						{copied ? 'Copiado!' : 'Copiar comando'}
					</Button>
				)}
			</CopyButton>
			<CopyButton
				value='https://kivora.dev'
				timeout={1500}>
				{({ copied, copy }) => (
					<ActionIcon
						aria-label='Copy URL'
						variant='outline'
						onClick={copy}>
						<svg
							className='w-4 h-4'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth={2}
								d={
									copied
										? 'M5 13l4 4L19 7'
										: 'M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1'
								}
							/>
						</svg>
					</ActionIcon>
				)}
			</CopyButton>
		</div>
	);
}

function FileButtonPreview() {
	const [fileName, setFileName] = useState<string | null>(null);
	const [fileCount, setFileCount] = useState<number>(0);
	return (
		<div className='flex flex-col gap-4'>
			<div className='flex flex-wrap gap-3 items-center'>
				<FileButton
					accept='image/*'
					onChange={(file) =>
						setFileName(file instanceof File ? file.name : null)
					}>
					{({ onClick }) => (
						<Button
							variant='outline'
							onClick={onClick}
							leftSection={
								<svg
									className='w-4 h-4'
									fill='none'
									viewBox='0 0 24 24'
									stroke='currentColor'>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z'
									/>
								</svg>
							}>
							Subir imagen
						</Button>
					)}
				</FileButton>
				<FileButton
					multiple
					onChange={(files) =>
						setFileCount(Array.isArray(files) ? files.length : 0)
					}>
					{({ onClick }) => (
						<Button
							variant='ghost'
							onClick={onClick}>
							Subir múltiples
						</Button>
					)}
				</FileButton>
			</div>
			<p className='text-xs text-zinc-500'>
				{fileName
					? `Archivo: ${fileName}`
					: fileCount > 0
						? `${fileCount} archivos seleccionados`
						: 'Ningún archivo seleccionado'}
			</p>
		</div>
	);
}

function UnstyledButtonPreview() {
	return (
		<div className='flex flex-wrap gap-4 items-center'>
			<UnstyledButton
				className='px-4 py-2 rounded-xl text-sm font-medium'
				style={{
					background: 'linear-gradient(135deg, #7c3aed, #06b6d4)',
					color: 'white',
				}}>
				Estilo personalizado
			</UnstyledButton>
			<UnstyledButton
				href='#'
				className='text-sm text-violet-400 hover:text-violet-300 underline underline-offset-2 transition-colors'>
				Como enlace
			</UnstyledButton>
			<UnstyledButton className='flex items-center gap-2 text-sm text-zinc-400 hover:text-zinc-200 transition-colors'>
				<svg
					className='w-4 h-4'
					fill='none'
					viewBox='0 0 24 24'
					stroke='currentColor'>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth={2}
						d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
					/>
				</svg>
				Con icono
			</UnstyledButton>
		</div>
	);
}

// ─── DATA DISPLAY PREVIEWS ───────────────────────────────────────────────────

function AccordionPreview() {
	return (
		<div className='w-full max-w-sm'>
			<Accordion defaultValue='item-1'>
				<AccordionItem value='item-1'>
					<AccordionControl>¿Qué es Kivora UI?</AccordionControl>
					<AccordionPanel>
						<p className='text-sm text-zinc-400'>
							Una librería de componentes multi-framework con APIs
							idénticas para React, Solid, Svelte y más.
						</p>
					</AccordionPanel>
				</AccordionItem>
				<AccordionItem value='item-2'>
					<AccordionControl>¿Es gratuita?</AccordionControl>
					<AccordionPanel>
						<p className='text-sm text-zinc-400'>
							Sí, Kivora UI es completamente open source bajo
							licencia MIT.
						</p>
					</AccordionPanel>
				</AccordionItem>
				<AccordionItem value='item-3'>
					<AccordionControl>¿Cómo instalo?</AccordionControl>
					<AccordionPanel>
						<p className='text-sm text-zinc-400'>
							Ejecuta{' '}
							<code className='text-violet-400'>
								npm install @kivora/react
							</code>{' '}
							y añade los estilos.
						</p>
					</AccordionPanel>
				</AccordionItem>
			</Accordion>
		</div>
	);
}

function TablePreview() {
	const rows = [
		{ name: 'Button', category: 'Buttons', status: 'Stable' },
		{ name: 'TextInput', category: 'Inputs', status: 'Stable' },
		{ name: 'Modal', category: 'Overlays', status: 'Stable' },
		{ name: 'Carousel', category: 'Extensions', status: 'Beta' },
	];
	return (
		<div className='w-full max-w-md'>
			<Table
				withTableBorder
				striped
				highlightOnHover>
				<Thead>
					<Tr>
						<Th>Componente</Th>
						<Th>Categoría</Th>
						<Th>Estado</Th>
					</Tr>
				</Thead>
				<Tbody>
					{rows.map((r) => (
						<Tr key={r.name}>
							<Td>{r.name}</Td>
							<Td className='text-zinc-400'>{r.category}</Td>
							<Td>
								<span
									className={`text-xs font-medium px-2 py-0.5 rounded-full ${
										r.status === 'Stable'
											? 'bg-emerald-500/10 text-emerald-400'
											: 'bg-amber-500/10 text-amber-400'
									}`}>
									{r.status}
								</span>
							</Td>
						</Tr>
					))}
				</Tbody>
			</Table>
		</div>
	);
}

function TimelinePreview() {
	return (
		<Timeline active={2}>
			<TimelineItem
				title='Instalación'
				bullet='1'>
				<p className='text-xs text-zinc-400 mt-1'>
					npm install @kivora/react
				</p>
			</TimelineItem>
			<TimelineItem
				title='Configurar estilos'
				bullet='2'>
				<p className='text-xs text-zinc-400 mt-1'>
					Importa los estilos en tu layout global.
				</p>
			</TimelineItem>
			<TimelineItem
				title='Crear componentes'
				bullet='3'>
				<p className='text-xs text-zinc-400 mt-1'>
					Importa y usa los componentes.
				</p>
			</TimelineItem>
			<TimelineItem
				title='Desplegar'
				bullet='4'>
				<p className='text-xs text-zinc-400 mt-1'>
					¡Ya está listo para producción!
				</p>
			</TimelineItem>
		</Timeline>
	);
}

function IndicatorPreview() {
	return (
		<div className='flex flex-wrap gap-8 items-center justify-center'>
			<Indicator
				label='3'
				size={18}
				position='top-end'>
				<div className='w-10 h-10 rounded-lg bg-white/10 border border-white/10' />
			</Indicator>
			<Indicator
				dot
				processing
				size={10}
				position='top-end'>
				<div className='w-10 h-10 rounded-full bg-white/10 border border-white/10' />
			</Indicator>
			<Indicator
				label='99+'
				size={20}
				position='bottom-end'
				color='#f59e0b'>
				<div className='w-10 h-10 rounded-lg bg-white/10 border border-white/10' />
			</Indicator>
			<Indicator
				disabled
				size={12}
				position='top-end'>
				<div className='w-10 h-10 rounded-lg bg-white/10 border border-white/10' />
			</Indicator>
		</div>
	);
}

function PillPreview() {
	const [pills, setPills] = useState([
		'React',
		'TypeScript',
		'Tailwind',
		'Vite',
	]);
	return (
		<div className='flex flex-col gap-4'>
			<div className='flex flex-wrap gap-2'>
				{pills.map((p) => (
					<Pill
						key={p}
						withRemoveButton
						onRemove={() =>
							setPills((ps) => ps.filter((x) => x !== p))
						}>
						{p}
					</Pill>
				))}
			</div>
			<div className='flex flex-wrap gap-2'>
				<Pill size='xs'>xs</Pill>
				<Pill size='sm'>sm</Pill>
				<Pill size='md'>md</Pill>
				<Pill size='lg'>lg</Pill>
			</div>
		</div>
	);
}

function KbdPreview() {
	return (
		<div className='flex flex-col gap-4'>
			<div className='flex flex-wrap gap-2 items-center'>
				<Kbd>Ctrl</Kbd>
				<span className='text-zinc-600 text-sm'>+</span>
				<Kbd>K</Kbd>
			</div>
			<div className='flex flex-wrap gap-2 items-center'>
				<Kbd>⌘</Kbd>
				<span className='text-zinc-600 text-sm'>+</span>
				<Kbd>Shift</Kbd>
				<span className='text-zinc-600 text-sm'>+</span>
				<Kbd>P</Kbd>
			</div>
			<div className='flex flex-wrap gap-2'>
				<Kbd size='xs'>xs</Kbd>
				<Kbd size='sm'>sm</Kbd>
				<Kbd size='md'>md</Kbd>
				<Kbd size='lg'>lg</Kbd>
			</div>
		</div>
	);
}

function ListPreview() {
	return (
		<div className='flex flex-wrap gap-8'>
			<div>
				<p className='text-xs text-zinc-500 mb-2'>unordered</p>
				<List
					withPadding
					spacing='0.25rem'>
					<ListItem>React</ListItem>
					<ListItem>TypeScript</ListItem>
					<ListItem>Tailwind CSS</ListItem>
				</List>
			</div>
			<div>
				<p className='text-xs text-zinc-500 mb-2'>ordered</p>
				<List
					type='ordered'
					withPadding
					spacing='0.25rem'>
					<ListItem>Instalar</ListItem>
					<ListItem>Configurar</ListItem>
					<ListItem>Desplegar</ListItem>
				</List>
			</div>
		</div>
	);
}

function NumberFormatterPreview() {
	return (
		<div className='flex flex-col gap-3 text-sm'>
			<div className='flex items-center gap-3'>
				<span className='text-zinc-500 w-36 text-right'>Decimal:</span>
				<span className='font-mono text-zinc-100'>
					<NumberFormatter
						value={1234567.89}
						thousandSeparator
						decimalScale={2}
						fixedDecimalScale
					/>
				</span>
			</div>
			<div className='flex items-center gap-3'>
				<span className='text-zinc-500 w-36 text-right'>Currency:</span>
				<span className='font-mono text-zinc-100'>
					<NumberFormatter
						value={9999.5}
						style='currency'
						currency='USD'
					/>
				</span>
			</div>
			<div className='flex items-center gap-3'>
				<span className='text-zinc-500 w-36 text-right'>
					Porcentaje:
				</span>
				<span className='font-mono text-zinc-100'>
					<NumberFormatter
						value={0.754}
						style='percent'
						decimalScale={1}
						fixedDecimalScale
					/>
				</span>
			</div>
			<div className='flex items-center gap-3'>
				<span className='text-zinc-500 w-36 text-right'>
					Prefijo/Sufijo:
				</span>
				<span className='font-mono text-zinc-100'>
					<NumberFormatter
						value={42}
						prefix='~'
						suffix=' km'
					/>
				</span>
			</div>
		</div>
	);
}

function RingProgressPreview() {
	return (
		<div className='flex flex-wrap gap-8 items-center justify-center'>
			<RingProgress
				sections={[{ value: 65, color: '#7c3aed' }]}
				size={100}
				thickness={8}
				label={
					<span className='text-xs font-bold text-center block text-white'>
						65%
					</span>
				}
			/>
			<RingProgress
				sections={[
					{ value: 40, color: '#7c3aed' },
					{ value: 25, color: '#06b6d4' },
					{ value: 15, color: '#f59e0b' },
				]}
				size={100}
				thickness={8}
				roundCaps
				label={
					<span className='text-[10px] text-zinc-400 block text-center'>
						multi
					</span>
				}
			/>
			<RingProgress
				sections={[{ value: 90, color: '#10b981' }]}
				size={120}
				thickness={12}
				label={
					<span className='text-sm font-bold text-white block text-center'>
						90%
					</span>
				}
			/>
		</div>
	);
}

function SemiCircleProgressPreview() {
	const [val, setVal] = useState(68);
	return (
		<div className='flex flex-col items-center gap-4'>
			<SemiCircleProgress
				value={val}
				size={180}
				thickness={14}
				color='#7c3aed'
				label={
					<span className='text-lg font-bold text-white'>{val}%</span>
				}
			/>
			<input
				type='range'
				min={0}
				max={100}
				value={val}
				onChange={(e) => setVal(Number(e.target.value))}
				className='w-40 accent-violet-500'
			/>
		</div>
	);
}

function SpoilerPreview() {
	return (
		<div className='max-w-sm w-full'>
			<Spoiler
				maxHeight={72}
				showLabel='Ver más'
				hideLabel='Ver menos'>
				<p className='text-sm text-zinc-400'>
					Kivora UI es una librería de componentes diseñada para
					adaptarse a múltiples frameworks sin comprometer la
					experiencia de desarrollo. Cada componente comparte la misma
					API entre React, Solid, Svelte y otras plataformas, lo que
					facilita la migración y el mantenimiento del código entre
					proyectos. Además incluye soporte nativo para dark mode,
					tokens de diseño personalizables y accesibilidad WCAG 2.1.
				</p>
			</Spoiler>
		</div>
	);
}

function ColorSwatchPreview() {
	const colors = [
		'#7c3aed',
		'#8b5cf6',
		'#a78bfa',
		'#06b6d4',
		'#0ea5e9',
		'#38bdf8',
		'#10b981',
		'#f59e0b',
		'#ef4444',
	];
	return (
		<div className='flex flex-col gap-4'>
			<div className='flex flex-wrap gap-2'>
				{colors.map((c) => (
					<ColorSwatch
						key={c}
						color={c}
						size={32}
						withShadow
					/>
				))}
			</div>
			<div className='flex gap-2'>
				<ColorSwatch
					color='#7c3aed'
					size={20}
				/>
				<ColorSwatch
					color='#7c3aed'
					size={28}
				/>
				<ColorSwatch
					color='#7c3aed'
					size={36}
				/>
				<ColorSwatch
					color='#7c3aed'
					size={44}
				/>
			</div>
		</div>
	);
}

// ─── FEEDBACK PREVIEWS ───────────────────────────────────────────────────────

function NotificationPreview() {
	const [visible, setVisible] = useState(true);
	return (
		<div className='flex flex-col gap-3 w-full max-w-sm'>
			{visible && (
				<Notification
					title='Archivos subidos'
					withCloseButton
					onClose={() => setVisible(false)}
					withBorder>
					3 archivos subidos correctamente al servidor.
				</Notification>
			)}
			<Notification
				title='Actualización disponible'
				withCloseButton={false}
				withBorder
				icon={
					<svg
						className='w-4 h-4 text-violet-400'
						fill='none'
						viewBox='0 0 24 24'
						stroke='currentColor'>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth={2}
							d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
						/>
					</svg>
				}>
				v2.4.0 ya está disponible.
			</Notification>
			<Notification
				loading
				title='Sincronizando...'
				withBorder
			/>
			{!visible && (
				<button
					onClick={() => setVisible(true)}
					className='text-xs text-violet-400 hover:text-violet-300 transition-colors'>
					← Restaurar primera notificación
				</button>
			)}
		</div>
	);
}

function LoadingOverlayPreview() {
	const [loading, setLoading] = useState(false);
	return (
		<div className='flex flex-col items-center gap-4'>
			<div
				className='relative w-64 h-32 rounded-xl border border-white/10 flex items-center justify-center'
				style={{ background: 'rgba(255,255,255,0.03)' }}>
				<p className='text-sm text-zinc-400'>Contenido de la sección</p>
				<LoadingOverlay
					visible={loading}
					loaderProps={{ type: 'dots', size: 'md' }}
					overlayProps={{ blur: 2, opacity: 0.6, color: '#09090b' }}
				/>
			</div>
			<button
				onClick={() => {
					setLoading(true);
					setTimeout(() => setLoading(false), 2500);
				}}
				className='px-4 py-1.5 rounded-lg text-xs font-medium border border-white/10 text-zinc-300 hover:bg-white/5 transition-colors'
				style={{ background: 'rgba(255,255,255,0.04)' }}>
				{loading ? 'Cargando…' : 'Simular carga (2.5s)'}
			</button>
		</div>
	);
}

function TextareaPreview() {
	const [value, setValue] = useState('');
	return (
		<div className='flex flex-col gap-4 max-w-xs w-full'>
			<Textarea
				label='Bio'
				placeholder='Tell us about yourself...'
				value={value}
				onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
					setValue(e.target.value)
				}
				autosize
				minRows={3}
			/>
			<Textarea
				label='Resizable'
				placeholder='Drag corner to resize'
				resize='vertical'
			/>
			<Textarea
				label='With error'
				error='This field is required'
			/>
		</div>
	);
}

function NumberInputPreview() {
	const [value, setValue] = useState<number | string>(0);
	return (
		<div className='flex flex-col gap-4 max-w-xs w-full'>
			<NumberInput
				label='Quantity'
				description='Must be between 0 and 100'
				value={value}
				onChange={setValue}
				min={0}
				max={100}
			/>
			<NumberInput
				label='Price'
				prefix='$'
				decimalScale={2}
				placeholder='0.00'
			/>
			<NumberInput
				label='No controls'
				hideControls
				placeholder='Enter number'
			/>
		</div>
	);
}

function RadioPreview() {
	const [value, setValue] = useState('react');
	return (
		<div className='flex flex-col gap-4 max-w-xs w-full'>
			<RadioGroup
				label='Favorite framework'
				value={value}
				onChange={setValue}>
				<Radio
					value='react'
					label='React'
				/>
				<Radio
					value='vue'
					label='Vue'
				/>
				<Radio
					value='svelte'
					label='Svelte'
				/>
			</RadioGroup>
			<RadioGroup
				label='Horizontal'
				defaultValue='left'>
				<div className='flex gap-4'>
					<Radio
						value='left'
						label='Left'
					/>
					<Radio
						value='center'
						label='Center'
					/>
					<Radio
						value='right'
						label='Right'
					/>
				</div>
			</RadioGroup>
		</div>
	);
}

function SliderPreview() {
	const [value, setValue] = useState(40);
	return (
		<div className='flex flex-col gap-8 w-full max-w-xs'>
			<Slider
				value={value}
				onChange={setValue}
				label={(v) => `${v}%`}
			/>
			<Slider
				defaultValue={60}
				marks={[
					{ value: 0, label: '0%' },
					{ value: 50, label: '50%' },
					{ value: 100, label: '100%' },
				]}
			/>
			<Slider
				defaultValue={25}
				disabled
			/>
		</div>
	);
}

function RatingPreview() {
	const [value, setValue] = useState(3);
	return (
		<div className='flex flex-col gap-4 items-start'>
			<Rating
				value={value}
				onChange={setValue}
			/>
			<Rating
				value={4.5}
				fractions={2}
				readOnly
			/>
			<Rating
				value={3}
				size='lg'
				count={10}
			/>
		</div>
	);
}

function ChipPreview() {
	const [selected, setSelected] = useState('react');
	return (
		<div className='flex flex-col gap-4'>
			<ChipGroup
				value={selected}
				onChange={(v) => setSelected(v as string)}>
				<div className='flex gap-2'>
					<Chip value='react'>React</Chip>
					<Chip value='vue'>Vue</Chip>
					<Chip value='svelte'>Svelte</Chip>
				</div>
			</ChipGroup>
			<div className='flex gap-2'>
				<Chip
					variant='filled'
					defaultChecked>
					Filled
				</Chip>
				<Chip variant='light'>Light</Chip>
				<Chip variant='outline'>Outline</Chip>
			</div>
		</div>
	);
}

function SegmentedControlPreview() {
	const [value, setValue] = useState('react');
	return (
		<div className='flex flex-col gap-4 items-start'>
			<SegmentedControl
				value={value}
				onChange={setValue}
				data={['React', 'Angular', 'Vue', 'Svelte']}
			/>
			<SegmentedControl
				defaultValue='md'
				data={[
					{ value: 'xs', label: 'XS' },
					{ value: 'sm', label: 'SM' },
					{ value: 'md', label: 'MD' },
					{ value: 'lg', label: 'LG' },
				]}
			/>
		</div>
	);
}

function TagsInputPreview() {
	const [value, setValue] = useState(['React', 'Tailwind']);
	return (
		<div className='flex flex-col gap-4 max-w-xs w-full'>
			<TagsInput
				label='Technologies'
				description='Press Enter or comma to add'
				value={value}
				onChange={setValue}
				placeholder='Add tag...'
			/>
			<TagsInput
				label='Limited (max 3)'
				defaultValue={['one', 'two']}
				maxTags={3}
				placeholder='Add up to 3 tags'
			/>
		</div>
	);
}

function PinInputPreview() {
	const [value, setValue] = useState('');
	return (
		<div className='flex flex-col gap-4 items-start'>
			<PinInput
				value={value}
				onChange={setValue}
				length={4}
			/>
			<PinInput
				length={6}
				type='number'
				placeholder='_'
			/>
			<PinInput
				length={4}
				mask
			/>
		</div>
	);
}

function ColorInputPreview() {
	const [value, setValue] = useState('#6366f1');
	return (
		<div className='flex flex-col gap-4 max-w-xs w-full'>
			<ColorInput
				label='Brand color'
				value={value}
				onChange={setValue}
				swatches={[
					'#6366f1',
					'#0ea5e9',
					'#10b981',
					'#f59e0b',
					'#ef4444',
				]}
			/>
			<div className='flex justify-center'>
				<ColorPicker
					value={value}
					onChange={setValue}
					swatches={[
						'#6366f1',
						'#0ea5e9',
						'#10b981',
						'#f59e0b',
						'#ef4444',
					]}
				/>
			</div>
		</div>
	);
}

function MultiSelectPreview() {
	const [value, setValue] = useState<string[]>(['react']);
	return (
		<div className='flex flex-col gap-4 max-w-xs w-full'>
			<MultiSelect
				label='Frameworks'
				data={['React', 'Vue', 'Angular', 'Svelte', 'Solid']}
				value={value}
				onChange={setValue}
				placeholder='Pick frameworks'
				searchable
				clearable
			/>
			<MultiSelect
				label='Max 2 values'
				data={['Red', 'Green', 'Blue', 'Pink']}
				defaultValue={['Red']}
				maxValues={2}
				placeholder='Pick up to 2'
			/>
		</div>
	);
}

function AutocompletePreview() {
	return (
		<div className='flex flex-col gap-4 max-w-xs w-full'>
			<Autocomplete
				label='Framework'
				placeholder='Start typing...'
				data={['React', 'Angular', 'Svelte', 'Solid', 'Vue']}
			/>
			<Autocomplete
				label='Country'
				placeholder='Type a country...'
				data={[
					'Argentina',
					'Brasil',
					'Colombia',
					'España',
					'México',
					'Perú',
				]}
			/>
		</div>
	);
}

function FileInputPreview() {
	const [file, setFile] = useState<File | null>(null);
	return (
		<div className='flex flex-col gap-4 max-w-xs w-full'>
			<FileInput
				label='Upload file'
				description='Click to browse'
				value={file}
				onChange={(f) => setFile(f as File | null)}
				placeholder='No file chosen'
			/>
			<FileInput
				label='Accept images only'
				accept='image/*'
				clearable
				placeholder='Pick an image'
			/>
		</div>
	);
}

function JsonInputPreview() {
	const [value, setValue] = useState('{\n  "name": "Kivora"\n}');
	return (
		<div className='flex flex-col gap-4 max-w-xs w-full'>
			<JsonInput
				label='Config (JSON)'
				description='Validate JSON on blur'
				value={value}
				onChange={setValue}
				formatOnBlur
				minRows={4}
			/>
			<JsonInput
				label='Invalid shows error'
				defaultValue='{ invalid }'
				validationError='Invalid JSON format'
				minRows={3}
			/>
		</div>
	);
}

function TextInputPreview() {
	const [value, setValue] = useState('');
	return (
		<div className='flex flex-col gap-4 max-w-xs w-full'>
			<TextInput
				label='Email'
				placeholder='you@example.com'
				value={value}
				onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
					setValue(e.target.value)
				}
			/>
			<TextInput
				label='With description'
				placeholder='Type something'
				description='We will never share your data.'
			/>
			<TextInput
				label='With error'
				placeholder='Type something'
				error='This field is required.'
			/>
		</div>
	);
}

function PasswordInputPreview() {
	const [value, setValue] = useState('');
	return (
		<div className='max-w-xs w-full'>
			<PasswordInput
				label='Password'
				placeholder='Enter your password'
				description='Minimum 8 characters.'
				value={value}
				onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
					setValue(e.target.value)
				}
			/>
		</div>
	);
}

function CheckboxPreview() {
	const [a, setA] = useState(false);
	const [b, setB] = useState(true);
	return (
		<div className='flex flex-col gap-4'>
			<Checkbox
				label='Accept terms and conditions'
				checked={a}
				onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
					setA(e.target.checked)
				}
			/>
			<Checkbox
				label='Checked by default'
				checked={b}
				onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
					setB(e.target.checked)
				}
			/>
			<Checkbox
				label='Indeterminate'
				indeterminate
				checked={false}
				onChange={() => {}}
			/>
			<Checkbox
				label='Disabled'
				disabled
				checked={false}
				onChange={() => {}}
			/>
		</div>
	);
}

function SwitchPreview() {
	const [a, setA] = useState(false);
	const [b, setB] = useState(true);
	return (
		<div className='flex flex-col gap-4'>
			<Switch
				label='Notifications'
				checked={a}
				onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
					setA(e.target.checked)
				}
			/>
			<Switch
				label='Dark mode (on by default)'
				checked={b}
				onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
					setB(e.target.checked)
				}
			/>
			<Switch
				label='Disabled'
				checked={false}
				onChange={() => {}}
				disabled
			/>
		</div>
	);
}

function SelectPreview() {
	const [value, setValue] = useState('');
	return (
		<div className='max-w-xs w-full'>
			<Select
				label='Framework'
				placeholder='Pick one'
				description='Select your preferred framework.'
				value={value}
				onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
					setValue(e.target.value)
				}
				data={['React', 'Svelte', 'Solid', 'Vue', 'Angular']}
			/>
		</div>
	);
}

function AvatarPreview() {
	return (
		<div className='flex flex-wrap gap-4 items-end'>
			<Avatar
				size='xs'
				variant='filled'>
				XS
			</Avatar>
			<Avatar
				size='sm'
				variant='light'>
				SM
			</Avatar>
			<Avatar
				size='md'
				variant='outline'>
				MD
			</Avatar>
			<Avatar
				size='lg'
				variant='filled'>
				LG
			</Avatar>
			<Avatar
				size='xl'
				variant='transparent'>
				XL
			</Avatar>
		</div>
	);
}

function BadgePreview() {
	return (
		<div className='flex flex-wrap gap-2'>
			<Badge variant='filled'>Filled</Badge>
			<Badge variant='light'>Light</Badge>
			<Badge variant='outline'>Outline</Badge>
			<Badge variant='dot'>Dot</Badge>
			<Badge variant='transparent'>Transparent</Badge>
		</div>
	);
}

function CardPreview() {
	return (
		<Card
			withBorder
			padding='1rem'
			radius='md'
			className='max-w-sm w-full'>
			<p className='text-sm font-semibold mb-1'>Card title</p>
			<p className='text-xs text-zinc-400 mb-4'>
				A short description of the card content goes here. Any content
				can be placed inside.
			</p>
			<Button
				variant='solid'
				fullWidth>
				Confirm
			</Button>
		</Card>
	);
}

function ProgressPreview() {
	const [value, setValue] = useState(60);
	return (
		<div className='flex flex-col gap-6 w-full max-w-sm'>
			<Progress value={value} />
			<Progress
				value={30}
				color='teal'
				size='sm'
			/>
			<Progress
				value={75}
				color='#f59e0b'
				size='lg'
				striped
			/>
			<div className='flex items-center gap-3'>
				<button
					onClick={() => setValue((v) => Math.max(0, v - 10))}
					className='px-3 py-1 rounded-lg text-xs border border-white/10 text-zinc-400 hover:text-zinc-200 transition-colors'
					style={{ background: 'rgba(255,255,255,0.05)' }}>
					10
				</button>
				<span className='text-xs text-zinc-500 tabular-nums w-14 text-center'>
					{value}%
				</span>
				<button
					onClick={() => setValue((v) => Math.min(100, v + 10))}
					className='px-3 py-1 rounded-lg text-xs border border-white/10 text-zinc-400 hover:text-zinc-200 transition-colors'
					style={{ background: 'rgba(255,255,255,0.05)' }}>
					+10
				</button>
			</div>
		</div>
	);
}

function SkeletonPreview() {
	const [visible, setVisible] = useState(true);
	return (
		<div className='flex flex-col gap-3 w-full max-w-xs'>
			<Skeleton
				height={20}
				width='70%'
				visible={visible}
			/>
			<Skeleton
				height={12}
				visible={visible}
			/>
			<Skeleton
				height={12}
				width='85%'
				visible={visible}
			/>
			<Skeleton
				height={12}
				width='60%'
				visible={visible}
			/>
			<div className='flex gap-2 items-center mt-1'>
				<Skeleton
					circle
					height={36}
					width={36}
					visible={visible}
				/>
				<div className='flex flex-col gap-1 flex-1'>
					<Skeleton
						height={10}
						visible={visible}
					/>
					<Skeleton
						height={10}
						width='50%'
						visible={visible}
					/>
				</div>
			</div>
			<button
				onClick={() => setVisible((v) => !v)}
				className='mt-2 px-3 py-1 rounded-lg text-xs border border-white/10 text-zinc-400 hover:text-zinc-200 transition-colors'
				style={{ background: 'rgba(255,255,255,0.05)' }}>
				Toggle visible
			</button>
		</div>
	);
}

function AlertPreview() {
	return (
		<div className='flex flex-col gap-3 w-full max-w-sm'>
			<Alert
				variant='light'
				title='Information'>
				Your account has been updated successfully.
			</Alert>
			<Alert
				variant='filled'
				title='Success'>
				Changes saved and published.
			</Alert>
			<Alert
				variant='outline'
				title='Warning'
				withCloseButton
				onClose={() => {}}>
				Your trial expires in 3 days.
			</Alert>
			<Alert variant='default'>
				A simple default alert without a title.
			</Alert>
		</div>
	);
}

function LoaderPreview() {
	return (
		<div className='flex flex-wrap gap-8 items-end'>
			<div className='flex flex-col items-center gap-2'>
				<Loader
					type='oval'
					size='md'
				/>
				<span className='text-xs text-zinc-500'>oval</span>
			</div>
			<div className='flex flex-col items-center gap-2'>
				<Loader
					type='bars'
					size='md'
				/>
				<span className='text-xs text-zinc-500'>bars</span>
			</div>
			<div className='flex flex-col items-center gap-2'>
				<Loader
					type='dots'
					size='md'
				/>
				<span className='text-xs text-zinc-500'>dots</span>
			</div>
		</div>
	);
}

function ToastPreview() {
	return (
		<div className='flex flex-wrap gap-3'>
			<button
				onClick={() => toast.success('Action completed successfully!')}
				className='px-3 py-1.5 rounded-lg text-xs font-medium border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/10 transition-colors'>
				Success
			</button>
			<button
				onClick={() => toast.error('Something went wrong.')}
				className='px-3 py-1.5 rounded-lg text-xs font-medium border border-red-500/30 text-red-400 hover:bg-red-500/10 transition-colors'>
				Error
			</button>
			<button
				onClick={() => toast.warning('Proceed with caution.')}
				className='px-3 py-1.5 rounded-lg text-xs font-medium border border-amber-500/30 text-amber-400 hover:bg-amber-500/10 transition-colors'>
				Warning
			</button>
			<button
				onClick={() => toast.info('Here is some information.')}
				className='px-3 py-1.5 rounded-lg text-xs font-medium border border-blue-500/30 text-blue-400 hover:bg-blue-500/10 transition-colors'>
				Info
			</button>
			<button
				onClick={() => {
					const id = toast.loading('Saving changes');
					setTimeout(() => toast.dismiss(id), 3000);
				}}
				className='px-3 py-1.5 rounded-lg text-xs font-medium border border-white/10 text-zinc-400 hover:bg-white/5 transition-colors'>
				Loading
			</button>
		</div>
	);
}

function AnchorPreview() {
	return (
		<div className='flex flex-col gap-2'>
			<Anchor
				href='#'
				underline='always'>
				Always underlined
			</Anchor>
			<Anchor
				href='#'
				underline='hover'>
				Hover underline (default)
			</Anchor>
			<Anchor
				href='#'
				underline='never'>
				Never underlined
			</Anchor>
		</div>
	);
}

function BreadcrumbsPreview() {
	return (
		<Breadcrumbs separator='/'>
			<Anchor href='#'>Home</Anchor>
			<Anchor href='#'>Components</Anchor>
			<span className='text-on-surface text-sm'>Breadcrumbs</span>
		</Breadcrumbs>
	);
}

function NavLinkPreview() {
	return (
		<div className='w-48 flex flex-col gap-0.5'>
			<NavLink
				label='Dashboard'
				active
				variant='light'
			/>
			<NavLink label='Settings' />
			<NavLink
				label='Profile'
				description='Edit your profile'
			/>
		</div>
	);
}

function PaginationPreview() {
	const [page, setPage] = useState(3);
	return (
		<Pagination
			total={10}
			value={page}
			onChange={setPage}
			withControls
		/>
	);
}

function StepperPreview() {
	const [active, setActive] = useState(1);
	return (
		<div className='w-full max-w-sm space-y-4'>
			<Stepper
				active={active}
				onStepClick={setActive}>
				<StepperStep
					label='Account'
					description='Create account'>
					<p className='text-sm text-zinc-400 mt-2'>
						Step 1: Create your account.
					</p>
				</StepperStep>
				<StepperStep
					label='Profile'
					description='Set up profile'>
					<p className='text-sm text-zinc-400 mt-2'>
						Step 2: Fill in profile details.
					</p>
				</StepperStep>
				<StepperStep
					label='Confirm'
					description='Review & confirm'>
					<p className='text-sm text-zinc-400 mt-2'>
						Step 3: Review everything.
					</p>
				</StepperStep>
				<StepperCompleted>
					<p className='text-sm text-green-400 mt-2'>
						All steps complete!
					</p>
				</StepperCompleted>
			</Stepper>
			<div className='flex gap-2'>
				<Button
					size='xs'
					variant='outline'
					onClick={() => setActive((a) => Math.max(0, a - 1))}>
					Back
				</Button>
				<Button
					size='xs'
					onClick={() => setActive((a) => Math.min(3, a + 1))}>
					Next
				</Button>
			</div>
		</div>
	);
}

function TableOfContentsPreview() {
	const [active, setActive] = useState('intro');
	return (
		<div className='w-48'>
			<TableOfContents
				active={active}
				onItemClick={(item) => setActive(item.value)}
				links={[
					{ value: 'intro', label: 'Introduction', order: 1 },
					{ value: 'setup', label: 'Setup', order: 1 },
					{ value: 'basic', label: 'Basic usage', order: 2 },
					{ value: 'advanced', label: 'Advanced', order: 2 },
					{ value: 'api', label: 'API reference', order: 1 },
				]}
			/>
		</div>
	);
}

function TabsPreview() {
	return (
		<div className='w-full max-w-sm'>
			<Tabs defaultValue='overview'>
				<TabsList>
					<TabsTab value='overview'>Overview</TabsTab>
					<TabsTab value='settings'>Settings</TabsTab>
					<TabsTab value='members'>Members</TabsTab>
				</TabsList>
				<TabsPanel value='overview'>
					<p className='text-sm text-zinc-400'>
						Overview panel content.
					</p>
				</TabsPanel>
				<TabsPanel value='settings'>
					<p className='text-sm text-zinc-400'>
						Settings panel content.
					</p>
				</TabsPanel>
				<TabsPanel value='members'>
					<p className='text-sm text-zinc-400'>
						Members panel content.
					</p>
				</TabsPanel>
			</Tabs>
		</div>
	);
}

//
// Layout previews
//

function StackPreview() {
	return (
		<Stack gap='md'>
			{['item-1', 'item-2', 'item-3'].map((id, i) => (
				<div
					key={id}
					className='px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-sm text-zinc-300'>
					Item {i + 1}
				</div>
			))}
		</Stack>
	);
}

function GroupPreview() {
	return (
		<div className='flex flex-col gap-6 w-full'>
			<Group gap='sm'>
				{['Alpha', 'Beta', 'Gamma'].map((n) => (
					<div
						key={n}
						className='px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-sm text-zinc-300'>
						{n}
					</div>
				))}
			</Group>
			<Group
				justify='space-between'
				gap='sm'>
				<span className='text-sm text-zinc-400'>Label</span>
				<Button
					variant='outline'
					size='xs'>
					Action
				</Button>
			</Group>
			<Group
				grow
				gap='sm'>
				{['One', 'Two', 'Three'].map((n) => (
					<Button
						key={n}
						variant='outline'
						size='sm'>
						{n}
					</Button>
				))}
			</Group>
		</div>
	);
}

function FlexPreview() {
	return (
		<div className='flex flex-col gap-6 w-full'>
			<Flex
				gap='sm'
				align='center'>
				<div className='w-10 h-10 rounded-lg bg-purple-500/20 border border-purple-500/40' />
				<div className='flex flex-col gap-1'>
					<div className='h-3 w-24 rounded-full bg-white/15' />
					<div className='h-2.5 w-16 rounded-full bg-white/8' />
				</div>
			</Flex>
			<Flex
				direction='column'
				gap='xs'>
				{['Row A', 'Row B', 'Row C'].map((r) => (
					<div
						key={r}
						className='px-3 py-2 rounded-md bg-white/5 text-sm text-zinc-400'>
						{r}
					</div>
				))}
			</Flex>
		</div>
	);
}

function GridPreview() {
	return (
		<Grid
			columns={12}
			gutter='0.75rem'
			className='w-full'>
			<GridCol span={12}>
				<div className='px-3 py-2 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-xs text-indigo-300 text-center'>
					span 12
				</div>
			</GridCol>
			<GridCol span={6}>
				<div className='px-3 py-2 rounded-md bg-purple-500/10 border border-purple-500/20 text-xs text-purple-300 text-center'>
					span 6
				</div>
			</GridCol>
			<GridCol span={6}>
				<div className='px-3 py-2 rounded-md bg-purple-500/10 border border-purple-500/20 text-xs text-purple-300 text-center'>
					span 6
				</div>
			</GridCol>
			<GridCol span={4}>
				<div className='px-3 py-2 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-xs text-cyan-300 text-center'>
					4
				</div>
			</GridCol>
			<GridCol span={4}>
				<div className='px-3 py-2 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-xs text-cyan-300 text-center'>
					4
				</div>
			</GridCol>
			<GridCol span={4}>
				<div className='px-3 py-2 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-xs text-cyan-300 text-center'>
					4
				</div>
			</GridCol>
		</Grid>
	);
}

function SimpleGridPreview() {
	return (
		<SimpleGrid
			cols={3}
			spacing='0.75rem'
			className='w-full'>
			{[1, 2, 3, 4, 5, 6].map((n) => (
				<div
					key={n}
					className='aspect-square rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-sm text-zinc-400'>
					{n}
				</div>
			))}
		</SimpleGrid>
	);
}

function CenterPreview() {
	return (
		<div className='flex flex-col gap-6 w-full'>
			<Center className='h-24 rounded-xl bg-white/5 border border-white/10'>
				<span className='text-sm text-zinc-300'>Centered content</span>
			</Center>
			<Center
				inline
				className='gap-2'>
				<div className='w-4 h-4 rounded-full bg-emerald-400' />
				<span className='text-sm text-zinc-300'>Inline center</span>
			</Center>
		</div>
	);
}

function ContainerPreview() {
	return (
		<div className='flex flex-col gap-3 w-full'>
			{(['xs', 'sm', 'md', 'lg'] as const).map((size) => (
				<Container
					key={size}
					size={size}
					className='py-2 rounded-md bg-white/5 border border-white/10'>
					<span className='text-xs text-zinc-400'>{`size="${size}"`}</span>
				</Container>
			))}
		</div>
	);
}

function SpacePreview() {
	return (
		<div className='flex flex-col items-start w-full'>
			<div className='px-3 py-2 rounded-md bg-white/5 border border-white/10 text-sm text-zinc-300'>
				Block A
			</div>
			<Space h={32} />
			<div className='px-3 py-2 rounded-md bg-white/5 border border-white/10 text-sm text-zinc-300'>
				Block B <Space w={24} /> (inline gap)
			</div>
			<Space h={16} />
			<div className='px-3 py-2 rounded-md bg-white/5 border border-white/10 text-sm text-zinc-300'>
				Block C
			</div>
		</div>
	);
}

function AspectRatioPreview() {
	return (
		<div className='flex flex-col gap-4 w-full'>
			<div className='w-48'>
				<AspectRatio ratio={16 / 9}>
					<div className='w-full h-full rounded-xl bg-linear-to-br from-purple-500/30 to-cyan-500/30 border border-white/10 flex items-center justify-center text-xs text-zinc-400'>
						16 / 9
					</div>
				</AspectRatio>
			</div>
			<div className='w-32'>
				<AspectRatio ratio={1}>
					<div className='w-full h-full rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-xs text-zinc-400'>
						1 / 1
					</div>
				</AspectRatio>
			</div>
		</div>
	);
}

function AppShellPreview() {
	return (
		<div className='w-full h-56 rounded-xl overflow-hidden border border-white/10 text-xs'>
			<div className='h-10 bg-white/5 border-b border-white/10 flex items-center px-3 text-zinc-400'>
				Header
			</div>
			<div className='flex h-[calc(100%-40px)]'>
				<div className='w-32 bg-white/3 border-r border-white/10 p-2 flex flex-col gap-1'>
					<div className='px-2 py-1 rounded bg-white/8 text-zinc-300'>
						Nav item
					</div>
					<div className='px-2 py-1 text-zinc-500'>Nav item</div>
					<div className='px-2 py-1 text-zinc-500'>Nav item</div>
				</div>
				<div className='flex-1 p-3 text-zinc-500'>Main content</div>
			</div>
		</div>
	);
}

//
// Miscellaneous previews
//

function BoxPreview() {
	return (
		<div className='flex flex-col gap-4 w-full'>
			<Box className='px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-sm text-zinc-300'>
				Default div
			</Box>
			<Box
				component='section'
				className='px-4 py-3 rounded-lg bg-purple-500/10 border border-purple-500/20 text-sm text-purple-300'>
				Rendered as &lt;section&gt;
			</Box>
			<Box
				component='button'
				className='px-4 py-2 rounded-lg bg-white/8 border border-white/10 text-sm text-zinc-300 cursor-pointer hover:bg-white/12 transition-colors text-left w-full'>
				Rendered as &lt;button&gt;
			</Box>
		</div>
	);
}

function PaperPreview() {
	return (
		<div className='flex flex-wrap gap-4'>
			<Paper
				p='1rem'
				shadow='sm'
				className='bg-zinc-900 text-zinc-300 text-sm min-w-[120px]'>
				shadow sm
			</Paper>
			<Paper
				p='1rem'
				shadow='lg'
				radius='xl'
				className='bg-zinc-900 text-zinc-300 text-sm min-w-[120px]'>
				shadow lg · xl
			</Paper>
			<Paper
				p='1rem'
				withBorder
				shadow='none'
				className='bg-zinc-900 text-zinc-300 text-sm min-w-[120px]'>
				withBorder
			</Paper>
		</div>
	);
}

function DividerPreview() {
	return (
		<div className='flex flex-col gap-6 w-full'>
			<Divider />
			<Divider
				label='Section'
				labelPosition='center'
			/>
			<Divider
				label='Left label'
				labelPosition='left'
				variant='dashed'
			/>
			<div className='flex items-center gap-4 h-10'>
				<span className='text-zinc-400 text-sm'>Left</span>
				<Divider orientation='vertical' />
				<span className='text-zinc-400 text-sm'>Right</span>
			</div>
		</div>
	);
}

function ScrollAreaPreview() {
	return (
		<ScrollArea
			h={160}
			className='rounded-xl border border-white/10 bg-white/3 w-full'>
			<div className='p-4 flex flex-col gap-2'>
				{Array.from({ length: 12 }, (_, i) => (
					<div
						key={i}
						className='px-3 py-2 rounded-md bg-white/5 text-sm text-zinc-400'>
						Row {i + 1} — scrollable content
					</div>
				))}
			</div>
		</ScrollArea>
	);
}

function CollapsePreview() {
	const [open, setOpen] = useState(false);
	return (
		<div className='flex flex-col gap-3 w-full'>
			<Button
				variant='outline'
				size='sm'
				onClick={() => setOpen((o) => !o)}>
				{open ? 'Collapse' : 'Expand'} section
			</Button>
			<Collapse in={open}>
				<div className='px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-zinc-300'>
					<p className='mb-2 font-medium'>Collapsible content</p>
					<p className='text-zinc-500'>
						This section animates in and out smoothly. Use it for
						accordions, toggleable sections, or expandable details.
					</p>
				</div>
			</Collapse>
		</div>
	);
}

function ThemeIconPreview() {
	return (
		<div className='flex flex-wrap gap-4 items-center'>
			{(['filled', 'light', 'outline', 'subtle', 'default'] as const).map(
				(v) => (
					<div
						key={v}
						className='flex flex-col items-center gap-1.5'>
						<ThemeIcon
							variant={v}
							size='lg'>
							<svg
								className='w-5 h-5'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									d='M13 10V3L4 14h7v7l9-11h-7z'
								/>
							</svg>
						</ThemeIcon>
						<span className='text-[10px] text-zinc-500'>{v}</span>
					</div>
				),
			)}
		</div>
	);
}

function TransitionPreview() {
	const [mounted, setMounted] = useState(false);
	return (
		<div className='flex flex-col gap-4 w-full'>
			<div className='flex gap-2'>
				<Button
					variant='outline'
					size='sm'
					onClick={() => setMounted(true)}>
					Show
				</Button>
				<Button
					variant='ghost'
					size='sm'
					onClick={() => setMounted(false)}>
					Hide
				</Button>
			</div>
			<Transition
				mounted={mounted}
				transition='fade-up'
				duration={250}>
				{(styles) => (
					<div
						style={styles}
						className='px-4 py-3 rounded-xl bg-purple-500/10 border border-purple-500/20 text-sm text-purple-300'>
						Animated with fade-up ✦
					</div>
				)}
			</Transition>
		</div>
	);
}

function AffixPreview() {
	return (
		<div className='relative w-full h-40 rounded-xl bg-white/3 border border-white/10 overflow-hidden'>
			<p className='absolute top-3 left-3 text-xs text-zinc-500'>
				Container (position: relative)
			</p>
			<div className='absolute bottom-3 right-3 z-10'>
				<Button
					size='xs'
					variant='solid'>
					↑ Scroll to top
				</Button>
			</div>
			<p className='absolute bottom-3 left-3 text-[10px] text-zinc-600'>
				Affix renders fixed to viewport via Portal
			</p>
		</div>
	);
}

//
// Typography previews
//

function TextPreview() {
	return (
		<div className='flex flex-col gap-2'>
			<Text size='xs'>Extra small text (xs)</Text>
			<Text size='sm'>Small text (sm)</Text>
			<Text size='md'>Base text (md)</Text>
			<Text size='lg'>Large text (lg)</Text>
			<Text
				size='xl'
				fw={700}>
				XL bold text
			</Text>
			<Text
				size='sm'
				c='#6366f1'>
				Custom color
			</Text>
			<Text
				size='sm'
				lineClamp={2}>
				Line-clamped text that will be cut off after two lines if it is
				long enough to exceed the limit set by the lineClamp prop.
			</Text>
		</div>
	);
}

function TitlePreview() {
	return (
		<div className='flex flex-col gap-2'>
			<Title order={1}>Heading 1</Title>
			<Title order={2}>Heading 2</Title>
			<Title order={3}>Heading 3</Title>
			<Title order={4}>Heading 4</Title>
			<Title order={5}>Heading 5</Title>
			<Title order={6}>Heading 6</Title>
		</div>
	);
}

function BlockquotePreview() {
	return (
		<div className='flex flex-col gap-4 max-w-sm'>
			<Blockquote cite='— Albert Einstein'>
				Imagination is more important than knowledge.
			</Blockquote>
			<Blockquote cite='— Marie Curie'>
				Nothing in life is to be feared, it is only to be understood.
			</Blockquote>
		</div>
	);
}

function CodePreview() {
	return (
		<div className='flex flex-col gap-4'>
			<div>
				<Text size='sm'>
					Use <Code>npm install @kivora/react</Code> to install the
					package.
				</Text>
			</div>
			<Code block>
				{`import { Button } from '@kivora/react';\n\n<Button variant="solid">Click me</Button>`}
			</Code>
		</div>
	);
}

function HighlightPreview() {
	return (
		<div className='flex flex-col gap-2'>
			<Highlight highlight='Kivora'>
				Kivora UI is a multi-framework component library.
			</Highlight>
			<Highlight
				highlight={['component', 'library']}
				highlightColor='#fef08a'>
				A component library built for developer experience.
			</Highlight>
		</div>
	);
}

function MarkPreview() {
	return (
		<Text size='md'>
			This text contains a <Mark>highlighted word</Mark> and{' '}
			<Mark color='#bbf7d0'>another one</Mark> with a custom color.
		</Text>
	);
}

//
// Overlays previews
//

function OverlayPreview() {
	const [visible, setVisible] = useState(false);
	return (
		<div className='relative w-full h-28 rounded-xl overflow-hidden border border-white/10'>
			<div className='absolute inset-0 flex items-center justify-center text-sm text-zinc-300'>
				Content behind overlay
			</div>
			{visible && (
				<Overlay
					opacity={0.7}
					onClick={() => setVisible(false)}
				/>
			)}
			<button
				className='absolute bottom-2 right-2 z-10 text-xs px-2 py-1 rounded bg-white/10 text-white'
				onClick={() => setVisible((v) => !v)}>
				{visible ? 'Hide' : 'Show'} overlay
			</button>
		</div>
	);
}

function ModalPreview() {
	const [opened, setOpened] = useState(false);
	return (
		<>
			<Button onClick={() => setOpened(true)}>Open modal</Button>
			<Modal
				opened={opened}
				onClose={() => setOpened(false)}
				title='Confirm action'
				centered>
				<ModalBody>
					<p className='text-sm text-zinc-300'>
						Are you sure you want to delete this item? This action
						cannot be undone.
					</p>
				</ModalBody>
				<ModalFooter>
					<Button
						variant='subtle'
						onClick={() => setOpened(false)}>
						Cancel
					</Button>
					<Button
						variant='solid'
						onClick={() => setOpened(false)}>
						Confirm
					</Button>
				</ModalFooter>
			</Modal>
		</>
	);
}

function DrawerPreview() {
	const [opened, setOpened] = useState(false);
	return (
		<>
			<Button onClick={() => setOpened(true)}>Open drawer</Button>
			<Drawer
				opened={opened}
				onClose={() => setOpened(false)}
				title='Navigation'
				position='right'>
				<div className='flex flex-col gap-2 p-4'>
					<NavLink
						label='Home'
						active
					/>
					<NavLink label='Components' />
					<NavLink label='Docs' />
				</div>
			</Drawer>
		</>
	);
}

function TooltipPreview() {
	return (
		<div className='flex gap-4'>
			<Tooltip
				label='Top tooltip'
				position='top'
				withArrow>
				<Button
					size='xs'
					variant='outline'>
					Top
				</Button>
			</Tooltip>
			<Tooltip
				label='Bottom tooltip'
				position='bottom'
				withArrow>
				<Button
					size='xs'
					variant='outline'>
					Bottom
				</Button>
			</Tooltip>
			<Tooltip
				label='Right tooltip'
				position='right'
				withArrow>
				<Button
					size='xs'
					variant='outline'>
					Right
				</Button>
			</Tooltip>
		</div>
	);
}

function PopoverPreview() {
	return (
		<Popover>
			<PopoverTarget>
				<Button
					variant='outline'
					size='sm'>
					Open popover
				</Button>
			</PopoverTarget>
			<PopoverDropdown>
				<div className='p-3 text-sm text-zinc-300 space-y-1'>
					<p className='font-medium text-white'>Popover heading</p>
					<p>This is popover content with extra detail.</p>
				</div>
			</PopoverDropdown>
		</Popover>
	);
}

function HoverCardPreview() {
	return (
		<HoverCard openDelay={100}>
			<HoverCardTarget>
				<Anchor
					href='#'
					underline='hover'>
					@kivora/react
				</Anchor>
			</HoverCardTarget>
			<HoverCardDropdown>
				<div className='p-3 text-sm text-zinc-300 space-y-1 w-52'>
					<p className='font-semibold text-white'>@kivora/react</p>
					<p>A multi-framework component library.</p>
					<p className='text-xs text-zinc-500'>github.com/kivora</p>
				</div>
			</HoverCardDropdown>
		</HoverCard>
	);
}

function MenuPreview() {
	return (
		<Menu>
			<MenuTarget>
				<Button
					variant='outline'
					size='sm'>
					Open menu
				</Button>
			</MenuTarget>
			<MenuDropdown>
				<MenuLabel>Actions</MenuLabel>
				<MenuItem>Edit</MenuItem>
				<MenuItem>Duplicate</MenuItem>
				<MenuDivider />
				<MenuItem>Delete</MenuItem>
			</MenuDropdown>
		</Menu>
	);
}

function DialogPreview() {
	const [opened, setOpened] = useState(false);
	return (
		<>
			<Button
				size='sm'
				onClick={() => setOpened(true)}>
				Open dialog
			</Button>
			<Dialog
				opened={opened}
				onClose={() => setOpened(false)}
				title='Quick note'
				position={{ bottom: '1rem', right: '1rem' }}>
				<p className='text-sm text-zinc-300 px-4 pb-4'>
					This is a floating dialog panel.
				</p>
			</Dialog>
		</>
	);
}

//
// Component catalogue
//

const CATEGORIES: Category[] = [
	{
		title: 'Buttons',
		items: [
			{
				id: 'button',
				name: 'Button',
				status: 'stable',
				description:
					'Trigger actions and navigation. Supports five visual variants, five sizes, loading state, left/right sections and full-width layout.',
				preview: ButtonPreview,
				controls: [
					{
						type: 'select' as const,
						name: 'variant',
						label: 'variant',
						default: 'solid',
						options: [
							'solid',
							'outline',
							'ghost',
							'subtle',
							'link',
						],
					},
					{
						type: 'select' as const,
						name: 'size',
						label: 'size',
						default: 'md',
						options: ['xs', 'sm', 'md', 'lg', 'xl'],
					},
					{
						type: 'text' as const,
						name: 'children',
						label: 'label',
						default: 'Click me',
					},
					{
						type: 'boolean' as const,
						name: 'loading',
						label: 'loading',
						default: false,
					},
					{
						type: 'boolean' as const,
						name: 'disabled',
						label: 'disabled',
						default: false,
					},
					{
						type: 'boolean' as const,
						name: 'fullWidth',
						label: 'fullWidth',
						default: false,
					},
				],
				controlledPreview: (v: Record<string, any>) => (
					<Button
						variant={v.variant as any}
						size={v.size as any}
						loading={v.loading as boolean}
						disabled={v.disabled as boolean}
						fullWidth={v.fullWidth as boolean}>
						{v.children as string}
					</Button>
				),
				props: [
					{
						name: 'variant',
						type: '"solid" | "outline" | "ghost" | "link" | "subtle"',
						default: '"solid"',
						description: 'Visual style of the button.',
					},
					{
						name: 'size',
						type: '"xs" | "sm" | "md" | "lg" | "xl"',
						default: '"md"',
						description: 'Controls padding and font size.',
					},
					{
						name: 'loading',
						type: 'boolean',
						default: 'false',
						description: 'Shows a spinner and disables the button.',
					},
					{
						name: 'disabled',
						type: 'boolean',
						default: 'false',
						description:
							'Prevents interaction and applies reduced opacity.',
					},
					{
						name: 'fullWidth',
						type: 'boolean',
						default: 'false',
						description: 'Expands to fill its container.',
					},
					{
						name: 'leftSection',
						type: 'ReactNode',
						default: '',
						description:
							'Content rendered to the left of the label.',
					},
					{
						name: 'rightSection',
						type: 'ReactNode',
						default: '',
						description:
							'Content rendered to the right of the label.',
					},
					{
						name: 'href',
						type: 'string',
						default: '',
						description: 'Renders the button as an <a> tag.',
					},
					{
						name: 'component',
						type: 'ElementType',
						default: '"button"',
						description: 'Override the root element.',
					},
				],
			},
			{
				id: 'action-icon',
				name: 'ActionIcon',
				status: 'stable',
				description:
					'A square icon-only button. Shares the same variant and size system as Button. Requires aria-label for accessibility.',
				preview: ActionIconPreview,
				controls: [
					{
						type: 'select' as const,
						name: 'variant',
						label: 'variant',
						default: 'subtle',
						options: [
							'solid',
							'outline',
							'ghost',
							'subtle',
							'link',
						],
					},
					{
						type: 'select' as const,
						name: 'size',
						label: 'size',
						default: 'md',
						options: ['xs', 'sm', 'md', 'lg', 'xl'],
					},
					{
						type: 'boolean' as const,
						name: 'loading',
						label: 'loading',
						default: false,
					},
					{
						type: 'boolean' as const,
						name: 'disabled',
						label: 'disabled',
						default: false,
					},
				],
				controlledPreview: (v: Record<string, any>) => (
					<ActionIcon
						aria-label='Settings'
						variant={v.variant as any}
						size={v.size as any}
						loading={v.loading as boolean}
						disabled={v.disabled as boolean}>
						<svg
							viewBox='0 0 20 20'
							fill='currentColor'
							className='w-4 h-4'>
							<path
								fillRule='evenodd'
								d='M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z'
								clipRule='evenodd'
							/>
						</svg>
					</ActionIcon>
				),
				props: [
					{
						name: 'aria-label',
						type: 'string',
						default: '',
						description: 'Required accessible name for the button.',
					},
					{
						name: 'variant',
						type: '"solid" | "outline" | "ghost" | "link" | "subtle"',
						default: '"subtle"',
						description: 'Visual style.',
					},
					{
						name: 'size',
						type: '"xs" | "sm" | "md" | "lg" | "xl"',
						default: '"md"',
						description: 'Controls the element size.',
					},
					{
						name: 'loading',
						type: 'boolean',
						default: 'false',
						description: 'Shows a spinner and disables the button.',
					},
					{
						name: 'disabled',
						type: 'boolean',
						default: 'false',
						description: 'Prevents interaction.',
					},
					{
						name: 'href',
						type: 'string',
						default: '',
						description: 'Renders as an <a> tag.',
					},
					{
						name: 'component',
						type: 'ElementType',
						default: '"button"',
						description: 'Override the root element.',
					},
				],
			},
			{
				id: 'burger',
				name: 'Burger',
				status: 'stable',
				description:
					'Un botón hamburguesa animado que alterna entre tres líneas y un ×. Ideal para abrir/cerrar menús de navegación móvil.',
				preview: BurgerPreview,
				controls: [
					{
						type: 'select' as const,
						name: 'size',
						label: 'size',
						default: 'md',
						options: ['sm', 'md', 'lg'],
					},
					{
						type: 'boolean' as const,
						name: 'disabled',
						label: 'disabled',
						default: false,
					},
				],
				controlledPreview: (v: Record<string, any>) => {
					const BurgerDemo = () => {
						const [opened, setOpened] = React.useState(false);
						return (
							<div className='flex flex-col items-center gap-3'>
								<Burger
									opened={opened}
									onClick={() => setOpened((o) => !o)}
									size={v.size as any}
									disabled={v.disabled as boolean}
									aria-label='Toggle menu'
								/>
								<span className='text-xs text-zinc-500'>
									{opened ? 'opened' : 'closed'}
								</span>
							</div>
						);
					};
					return <BurgerDemo />;
				},
				props: [
					{
						name: 'opened',
						type: 'boolean',
						default: '',
						description:
							'Requerido. Controla si el menú está abierto (muestra ×) o cerrado (muestra ≡).',
					},
					{
						name: 'size',
						type: '"sm" | "md" | "lg"',
						default: '"md"',
						description:
							'Tamaño del icono hamburguesa (18 / 24 / 32 px).',
					},
					{
						name: 'lineSize',
						type: 'number',
						default: 'size/8',
						description:
							'Grosor en px de las líneas. Por defecto se deriva del size.',
					},
					{
						name: 'aria-label',
						type: 'string',
						default: '"Open / Close navigation"',
						description:
							'Etiqueta accesible (se autogestiona según opened).',
					},
					{
						name: 'onClick',
						type: 'MouseEventHandler',
						default: '',
						description:
							'Handler nativo de click. Úsalo para actualizar el estado opened.',
					},
					{
						name: 'disabled',
						type: 'boolean',
						default: 'false',
						description:
							'Evita la interacción y aplica opacidad reducida.',
					},
				],
			},
			{
				id: 'close-button',
				name: 'CloseButton',
				status: 'stable',
				description:
					'Botón cuadrado con icono × preconfigurado. Usado internamente en Modal, Drawer, Alert y Notification. Acepta los mismos tamaños que Button.',
				preview: CloseButtonPreview,
				controls: [
					{
						type: 'select' as const,
						name: 'size',
						label: 'size',
						default: 'md',
						options: ['xs', 'sm', 'md', 'lg', 'xl'],
					},
					{
						type: 'boolean' as const,
						name: 'disabled',
						label: 'disabled',
						default: false,
					},
				],
				controlledPreview: (v: Record<string, any>) => (
					<CloseButton
						size={v.size as any}
						disabled={v.disabled as boolean}
						aria-label='Close'
					/>
				),
				props: [
					{
						name: 'size',
						type: '"xs" | "sm" | "md" | "lg" | "xl"',
						default: '"md"',
						description: 'Controla el tamaño del botón e icono.',
					},
					{
						name: 'aria-label',
						type: 'string',
						default: '"Close"',
						description: 'Etiqueta accesible del botón.',
					},
					{
						name: 'disabled',
						type: 'boolean',
						default: 'false',
						description: 'Evita la interacción.',
					},
					{
						name: 'onClick',
						type: 'MouseEventHandler',
						default: '',
						description: 'Handler de click nativo.',
					},
				],
			},
			{
				id: 'copy-button',
				name: 'CopyButton',
				status: 'stable',
				description:
					'Componente headless que copia texto al portapapeles. Usa render props para entregar el estado copied y la función copy a cualquier elemento hijo.',
				preview: CopyButtonPreview,
				controls: [
					{
						type: 'text' as const,
						name: 'value',
						label: 'text to copy',
						default: 'npm install @kivora/react',
					},
					{
						type: 'number' as const,
						name: 'timeout',
						label: 'timeout (ms)',
						default: 2000,
						min: 500,
						max: 5000,
						step: 500,
					},
				],
				controlledPreview: (v: Record<string, any>) => (
					<CopyButton
						value={v.value as string}
						timeout={v.timeout as number}>
						{({
							copied,
							copy,
						}: {
							copied: boolean;
							copy: () => void;
						}) => (
							<Button
								variant={copied ? 'solid' : 'outline'}
								size='sm'
								onClick={copy}>
								{copied ? '✓ Copied!' : 'Copy to clipboard'}
							</Button>
						)}
					</CopyButton>
				),
				props: [
					{
						name: 'value',
						type: 'string',
						default: '',
						description:
							'Requerido. Texto que se copiará al portapapeles.',
					},
					{
						name: 'timeout',
						type: 'number',
						default: '2000',
						description:
							'Milisegundos hasta que copied vuelve a false.',
					},
					{
						name: 'children',
						type: '(props: { copied: boolean; copy: () => void }) => ReactNode',
						default: '',
						description:
							'Render prop. Recibe copied y copy para construir la UI.',
					},
				],
			},
			{
				id: 'file-button',
				name: 'FileButton',
				status: 'stable',
				description:
					'Componente headless que abre el selector de archivos del sistema. Usa render props: entrega onClick al elemento hijo para disparar el input oculto.',
				preview: FileButtonPreview,
				controls: [
					{
						type: 'text' as const,
						name: 'accept',
						label: 'accept',
						default: 'image/*',
					},
					{
						type: 'boolean' as const,
						name: 'multiple',
						label: 'multiple',
						default: false,
					},
				],
				controlledPreview: (v: Record<string, any>) => {
					const FileButtonDemo = () => {
						const [name, setName] = React.useState<string | null>(
							null,
						);
						return (
							<div className='flex flex-col items-center gap-2'>
								<FileButton
									accept={v.accept as string}
									multiple={v.multiple as boolean}
									onChange={(files) => {
										if (!files) return;
										const f = Array.isArray(files)
											? files[0]
											: files;
										if (f) setName(f.name);
									}}>
									{({ onClick }: { onClick: () => void }) => (
										<Button
											variant='outline'
											size='sm'
											onClick={onClick}>
											{v.multiple
												? 'Select files'
												: 'Select file'}
										</Button>
									)}
								</FileButton>
								{name && (
									<span className='text-xs text-zinc-400'>
										{name}
									</span>
								)}
							</div>
						);
					};
					return <FileButtonDemo />;
				},
				props: [
					{
						name: 'onChange',
						type: '(files: File | File[] | null) => void',
						default: '',
						description:
							'Requerido. Se llama con el archivo o array de archivos seleccionados.',
					},
					{
						name: 'children',
						type: '(props: { onClick: () => void }) => ReactNode',
						default: '',
						description:
							'Render prop. Recibe onClick para conectar el trigger.',
					},
					{
						name: 'accept',
						type: 'string',
						default: '',
						description:
							'Tipos MIME aceptados, p. ej. "image/*" o ".pdf,.docx".',
					},
					{
						name: 'multiple',
						type: 'boolean',
						default: 'false',
						description: 'Permite seleccionar múltiples archivos.',
					},
					{
						name: 'capture',
						type: '"user" | "environment"',
						default: '',
						description: 'En móvil, indica qué cámara usar.',
					},
					{
						name: 'resetRef',
						type: 'Ref<() => void>',
						default: '',
						description:
							'Ref imperativa para resetear el input manualmente.',
					},
				],
			},
			{
				id: 'unstyled-button',
				name: 'UnstyledButton',
				status: 'stable',
				description:
					'Botón base sin estilos visuales. Elimina los estilos nativos del navegador manteniendo la accesibilidad. Punto de partida para crear botones completamente personalizados.',
				preview: UnstyledButtonPreview,
				controls: [
					{
						type: 'text' as const,
						name: 'children',
						label: 'label',
						default: 'Custom styled button',
					},
					{
						type: 'select' as const,
						name: 'style',
						label: 'style preset',
						default: 'gradient',
						options: ['gradient', 'outline', 'flat', 'link'],
					},
				],
				controlledPreview: (v: Record<string, any>) => {
					const styles: Record<string, string> = {
						gradient:
							'px-4 py-2 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 text-white font-medium text-sm',
						outline:
							'px-4 py-2 rounded-xl border border-white/20 text-zinc-300 hover:bg-white/5 font-medium text-sm transition-colors',
						flat: 'px-4 py-2 rounded-lg bg-white/8 text-zinc-200 font-medium text-sm hover:bg-white/12 transition-colors',
						link: 'text-violet-400 underline-offset-4 hover:underline text-sm font-medium transition-colors',
					};
					return (
						<UnstyledButton className={styles[v.style as string]}>
							{v.children as string}
						</UnstyledButton>
					);
				},
				props: [
					{
						name: 'component',
						type: 'ElementType',
						default: '"button"',
						description:
							'Sobreescribe el elemento raíz (p. ej. "a", "div").',
					},
					{
						name: 'href',
						type: 'string',
						default: '',
						description: 'Si se proporciona, renderiza como <a>.',
					},
					{
						name: 'className',
						type: 'string',
						default: '',
						description:
							'Clases CSS para aplicar tus propios estilos.',
					},
					{
						name: 'children',
						type: 'ReactNode',
						default: '',
						description: 'Contenido del botón.',
					},
				],
			},
		],
	},
	{
		title: 'Inputs',
		items: [
			{
				id: 'text-input',
				name: 'TextInput',
				status: 'stable',
				description:
					'A single-line text field with label, description, error states and five size variants.',
				preview: TextInputPreview,
				controls: [
					{
						type: 'text' as const,
						name: 'label',
						label: 'label',
						default: 'Email address',
					},
					{
						type: 'text' as const,
						name: 'placeholder',
						label: 'placeholder',
						default: 'you@example.com',
					},
					{
						type: 'select' as const,
						name: 'size',
						label: 'size',
						default: 'md',
						options: ['xs', 'sm', 'md', 'lg', 'xl'],
					},
					{
						type: 'select' as const,
						name: 'variant',
						label: 'variant',
						default: 'default',
						options: ['default', 'filled', 'unstyled'],
					},
					{
						type: 'boolean' as const,
						name: 'disabled',
						label: 'disabled',
						default: false,
					},
					{
						type: 'boolean' as const,
						name: 'withAsterisk',
						label: 'withAsterisk',
						default: false,
					},
				],
				controlledPreview: (v: Record<string, any>) => (
					<div className='w-72'>
						<TextInput
							label={v.label as string}
							placeholder={v.placeholder as string}
							size={v.size as any}
							variant={v.variant as any}
							disabled={v.disabled as boolean}
							withAsterisk={v.withAsterisk as boolean}
						/>
					</div>
				),
				props: [
					{
						name: 'label',
						type: 'ReactNode',
						default: '',
						description: 'Visible label rendered above the input.',
					},
					{
						name: 'description',
						type: 'ReactNode',
						default: '',
						description: 'Helper text shown below the label.',
					},
					{
						name: 'error',
						type: 'ReactNode',
						default: '',
						description:
							'Error message; puts the input into error state.',
					},
					{
						name: 'placeholder',
						type: 'string',
						default: '',
						description: 'Placeholder text shown when empty.',
					},
					{
						name: 'size',
						type: '"xs" | "sm" | "md" | "lg" | "xl"',
						default: '"md"',
						description: 'Controls input height and font size.',
					},
					{
						name: 'variant',
						type: '"default" | "filled" | "unstyled"',
						default: '"default"',
						description: 'Visual style of the input.',
					},
					{
						name: 'required',
						type: 'boolean',
						default: 'false',
						description: 'Marks the field as required.',
					},
					{
						name: 'withAsterisk',
						type: 'boolean',
						default: 'false',
						description: 'Shows an asterisk next to the label.',
					},
					{
						name: 'disabled',
						type: 'boolean',
						default: 'false',
						description: 'Makes the input non-interactive.',
					},
				],
			},
			{
				id: 'password-input',
				name: 'PasswordInput',
				status: 'stable',
				description:
					'A password field with a built-in show/hide visibility toggle. Supports the full TextInput prop surface.',
				preview: PasswordInputPreview,
				controls: [
					{
						type: 'text' as const,
						name: 'label',
						label: 'label',
						default: 'Password',
					},
					{
						type: 'text' as const,
						name: 'placeholder',
						label: 'placeholder',
						default: 'Enter your password',
					},
					{
						type: 'select' as const,
						name: 'size',
						label: 'size',
						default: 'md',
						options: ['xs', 'sm', 'md', 'lg', 'xl'],
					},
					{
						type: 'boolean' as const,
						name: 'disabled',
						label: 'disabled',
						default: false,
					},
				],
				controlledPreview: (v: Record<string, any>) => (
					<div className='w-72'>
						<PasswordInput
							label={v.label as string}
							placeholder={v.placeholder as string}
							size={v.size as any}
							disabled={v.disabled as boolean}
						/>
					</div>
				),
				props: [
					{
						name: 'label',
						type: 'ReactNode',
						default: '',
						description: 'Visible label rendered above the input.',
					},
					{
						name: 'description',
						type: 'ReactNode',
						default: '',
						description: 'Helper text shown below the label.',
					},
					{
						name: 'error',
						type: 'ReactNode',
						default: '',
						description:
							'Error message; puts the input into error state.',
					},
					{
						name: 'visible',
						type: 'boolean',
						default: '',
						description:
							'Controlled visibility of the password text.',
					},
					{
						name: 'defaultVisible',
						type: 'boolean',
						default: 'false',
						description: 'Initial visibility in uncontrolled mode.',
					},
					{
						name: 'onVisibilityChange',
						type: '(visible: boolean) => void',
						default: '',
						description: 'Called when the toggle is clicked.',
					},
					{
						name: 'visibilityToggleLabel',
						type: 'string',
						default: '',
						description: 'Accessible label for the toggle button.',
					},
					{
						name: 'size',
						type: '"xs" | "sm" | "md" | "lg" | "xl"',
						default: '"md"',
						description: 'Controls input height and font size.',
					},
				],
			},
			{
				id: 'checkbox',
				name: 'Checkbox',
				status: 'stable',
				description:
					'A checkbox input with label, description and error support. Supports indeterminate state and left/right label position.',
				preview: CheckboxPreview,
				controls: [
					{
						type: 'text' as const,
						name: 'label',
						label: 'label',
						default: 'Accept terms and conditions',
					},
					{
						type: 'select' as const,
						name: 'size',
						label: 'size',
						default: 'md',
						options: ['xs', 'sm', 'md', 'lg', 'xl'],
					},
					{
						type: 'select' as const,
						name: 'labelPosition',
						label: 'labelPosition',
						default: 'right',
						options: ['left', 'right'],
					},
					{
						type: 'boolean' as const,
						name: 'indeterminate',
						label: 'indeterminate',
						default: false,
					},
					{
						type: 'boolean' as const,
						name: 'disabled',
						label: 'disabled',
						default: false,
					},
				],
				controlledPreview: (v: Record<string, any>) => {
					const Demo = () => {
						const [checked, setChecked] = React.useState(false);
						return (
							<Checkbox
								label={v.label as string}
								size={v.size as any}
								labelPosition={v.labelPosition as any}
								indeterminate={v.indeterminate as boolean}
								disabled={v.disabled as boolean}
								checked={checked}
								onChange={(e) => setChecked(e.target.checked)}
							/>
						);
					};
					return <Demo />;
				},
				props: [
					{
						name: 'label',
						type: 'ReactNode',
						default: '',
						description: 'Accessible label next to the checkbox.',
					},
					{
						name: 'description',
						type: 'ReactNode',
						default: '',
						description: 'Additional helper text.',
					},
					{
						name: 'error',
						type: 'ReactNode',
						default: '',
						description: 'Error message.',
					},
					{
						name: 'checked',
						type: 'boolean',
						default: '',
						description: 'Controlled checked state.',
					},
					{
						name: 'indeterminate',
						type: 'boolean',
						default: 'false',
						description: 'Shows the indeterminate () icon.',
					},
					{
						name: 'size',
						type: '"xs" | "sm" | "md" | "lg" | "xl"',
						default: '"md"',
						description: 'Controls the checkbox size.',
					},
					{
						name: 'labelPosition',
						type: '"left" | "right"',
						default: '"right"',
						description:
							'Position of the label relative to the box.',
					},
					{
						name: 'disabled',
						type: 'boolean',
						default: 'false',
						description: 'Prevents interaction.',
					},
				],
			},
			{
				id: 'switch',
				name: 'Switch',
				status: 'stable',
				description:
					'An animated boolean toggle. Supports on/off labels, thumb icons, five sizes and left/right label position.',
				preview: SwitchPreview,
				controls: [
					{
						type: 'text' as const,
						name: 'label',
						label: 'label',
						default: 'Enable notifications',
					},
					{
						type: 'select' as const,
						name: 'size',
						label: 'size',
						default: 'md',
						options: ['xs', 'sm', 'md', 'lg', 'xl'],
					},
					{
						type: 'boolean' as const,
						name: 'disabled',
						label: 'disabled',
						default: false,
					},
				],
				controlledPreview: (v: Record<string, any>) => (
					<Switch
						label={v.label as string}
						size={v.size as any}
						disabled={v.disabled as boolean}
					/>
				),
				props: [
					{
						name: 'label',
						type: 'ReactNode',
						default: '',
						description: 'Accessible label next to the switch.',
					},
					{
						name: 'description',
						type: 'ReactNode',
						default: '',
						description: 'Helper text shown below.',
					},
					{
						name: 'error',
						type: 'ReactNode',
						default: '',
						description: 'Error message.',
					},
					{
						name: 'checked',
						type: 'boolean',
						default: '',
						description: 'Controlled on/off state.',
					},
					{
						name: 'onChange',
						type: 'ChangeEventHandler<HTMLInputElement>',
						default: '',
						description: 'Native change event callback.',
					},
					{
						name: 'size',
						type: '"xs" | "sm" | "md" | "lg" | "xl"',
						default: '"md"',
						description: 'Controls track and thumb size.',
					},
					{
						name: 'onLabel',
						type: 'ReactNode',
						default: '',
						description: 'Label shown inside the track when on.',
					},
					{
						name: 'offLabel',
						type: 'ReactNode',
						default: '',
						description: 'Label shown inside the track when off.',
					},
					{
						name: 'thumbIcon',
						type: 'ReactNode',
						default: '',
						description: 'Icon rendered inside the thumb.',
					},
					{
						name: 'labelPosition',
						type: '"left" | "right"',
						default: '"right"',
						description: 'Position of the label.',
					},
					{
						name: 'disabled',
						type: 'boolean',
						default: 'false',
						description: 'Prevents interaction.',
					},
				],
			},
			{
				id: 'select',
				name: 'Select',
				status: 'stable',
				description:
					'A native HTML select with a styled wrapper. Accepts a flat array of strings or option objects with value, label and group.',
				preview: SelectPreview,
				controls: [
					{
						type: 'text' as const,
						name: 'label',
						label: 'label',
						default: 'Framework',
					},
					{
						type: 'text' as const,
						name: 'placeholder',
						label: 'placeholder',
						default: 'Pick one',
					},
					{
						type: 'select' as const,
						name: 'size',
						label: 'size',
						default: 'md',
						options: ['xs', 'sm', 'md', 'lg', 'xl'],
					},
					{
						type: 'select' as const,
						name: 'variant',
						label: 'variant',
						default: 'default',
						options: ['default', 'filled', 'unstyled'],
					},
					{
						type: 'boolean' as const,
						name: 'disabled',
						label: 'disabled',
						default: false,
					},
				],
				controlledPreview: (v: Record<string, any>) => (
					<div className='w-72'>
						<Select
							label={v.label as string}
							placeholder={v.placeholder as string}
							size={v.size as any}
							variant={v.variant as any}
							disabled={v.disabled as boolean}
							data={['React', 'Vue', 'Svelte', 'Solid']}
						/>
					</div>
				),
				props: [
					{
						name: 'data',
						type: 'string[] | Option[]',
						default: '',
						description: 'Required. Array of options to display.',
					},
					{
						name: 'label',
						type: 'ReactNode',
						default: '',
						description: 'Visible label above the select.',
					},
					{
						name: 'description',
						type: 'ReactNode',
						default: '',
						description: 'Helper text.',
					},
					{
						name: 'error',
						type: 'ReactNode',
						default: '',
						description: 'Error message.',
					},
					{
						name: 'placeholder',
						type: 'string',
						default: '',
						description: 'Placeholder option.',
					},
					{
						name: 'size',
						type: '"xs" | "sm" | "md" | "lg" | "xl"',
						default: '"md"',
						description: 'Controls height and font size.',
					},
					{
						name: 'variant',
						type: '"default" | "filled" | "unstyled"',
						default: '"default"',
						description: 'Visual style.',
					},
					{
						name: 'required',
						type: 'boolean',
						default: 'false',
						description: 'Marks the field as required.',
					},
					{
						name: 'disabled',
						type: 'boolean',
						default: 'false',
						description: 'Prevents interaction.',
					},
				],
			},
			{
				id: 'textarea',
				name: 'Textarea',
				status: 'stable',
				description:
					'Multi-line text input with optional autosize, min/max rows, and resize control.',
				preview: TextareaPreview,
				controls: [
					{
						type: 'text' as const,
						name: 'label',
						label: 'label',
						default: 'Bio',
					},
					{
						type: 'text' as const,
						name: 'placeholder',
						label: 'placeholder',
						default: 'Tell us about yourself...',
					},
					{
						type: 'number' as const,
						name: 'minRows',
						label: 'minRows',
						default: 3,
						min: 1,
						max: 10,
						step: 1,
					},
					{
						type: 'boolean' as const,
						name: 'autosize',
						label: 'autosize',
						default: true,
					},
					{
						type: 'boolean' as const,
						name: 'disabled',
						label: 'disabled',
						default: false,
					},
				],
				controlledPreview: (v: Record<string, any>) => (
					<div className='w-72'>
						<Textarea
							label={v.label as string}
							placeholder={v.placeholder as string}
							minRows={v.minRows as number}
							autosize={v.autosize as boolean}
							disabled={v.disabled as boolean}
						/>
					</div>
				),
				props: [
					{
						name: 'label',
						type: 'React.ReactNode',
						default: '—',
						description: 'Label shown above the textarea.',
					},
					{
						name: 'autosize',
						type: 'boolean',
						default: 'false',
						description: 'Grows with content up to maxRows.',
					},
					{
						name: 'minRows',
						type: 'number',
						default: '—',
						description: 'Minimum visible rows.',
					},
					{
						name: 'maxRows',
						type: 'number',
						default: '—',
						description:
							'Maximum rows before scrolling (requires autosize).',
					},
					{
						name: 'resize',
						type: 'CSSProperties["resize"]',
						default: '—',
						description: 'CSS resize handle direction.',
					},
					{
						name: 'error',
						type: 'React.ReactNode',
						default: '—',
						description: 'Error message displayed below.',
					},
				],
			},
			{
				id: 'number-input',
				name: 'NumberInput',
				status: 'stable',
				description:
					'Numeric input with increment/decrement controls, prefix/suffix, decimal scale, and clamp behaviour.',
				preview: NumberInputPreview,
				controls: [
					{
						type: 'text' as const,
						name: 'label',
						label: 'label',
						default: 'Quantity',
					},
					{
						type: 'text' as const,
						name: 'prefix',
						label: 'prefix',
						default: '',
					},
					{
						type: 'text' as const,
						name: 'suffix',
						label: 'suffix',
						default: '',
					},
					{
						type: 'number' as const,
						name: 'min',
						label: 'min',
						default: 0,
						min: -100,
						max: 100,
						step: 1,
					},
					{
						type: 'number' as const,
						name: 'max',
						label: 'max',
						default: 100,
						min: 1,
						max: 9999,
						step: 1,
					},
					{
						type: 'boolean' as const,
						name: 'hideControls',
						label: 'hideControls',
						default: false,
					},
				],
				controlledPreview: (v: Record<string, any>) => (
					<div className='w-72'>
						<NumberInput
							label={v.label as string}
							prefix={(v.prefix as string) || undefined}
							suffix={(v.suffix as string) || undefined}
							min={v.min as number}
							max={v.max as number}
							hideControls={v.hideControls as boolean}
						/>
					</div>
				),
				props: [
					{
						name: 'value',
						type: 'number | string',
						default: '—',
						description: 'Controlled value.',
					},
					{
						name: 'min',
						type: 'number',
						default: '—',
						description: 'Minimum allowed value.',
					},
					{
						name: 'max',
						type: 'number',
						default: '—',
						description: 'Maximum allowed value.',
					},
					{
						name: 'step',
						type: 'number',
						default: '1',
						description: 'Increment step.',
					},
					{
						name: 'prefix',
						type: 'string',
						default: '—',
						description: 'Text prepended to the value.',
					},
					{
						name: 'suffix',
						type: 'string',
						default: '—',
						description: 'Text appended to the value.',
					},
					{
						name: 'hideControls',
						type: 'boolean',
						default: 'false',
						description: 'Hides the +/− buttons.',
					},
					{
						name: 'decimalScale',
						type: 'number',
						default: '—',
						description: 'Max number of decimal places.',
					},
				],
			},
			{
				id: 'radio',
				name: 'Radio / RadioGroup',
				status: 'stable',
				description:
					'Single-choice selection. Use RadioGroup to manage state across multiple Radio items.',
				preview: RadioPreview,
				props: [
					{
						name: 'value',
						type: 'string',
						default: '—',
						description: 'Value of this radio button.',
					},
					{
						name: 'label',
						type: 'React.ReactNode',
						default: '—',
						description: 'Label text.',
					},
					{
						name: 'size',
						type: '"xs" | "sm" | "md" | "lg" | "xl"',
						default: '"md"',
						description: 'Size of the radio circle.',
					},
					{
						name: 'labelPosition',
						type: '"left" | "right"',
						default: '"right"',
						description: 'Label side relative to the control.',
					},
					{
						name: 'disabled',
						type: 'boolean',
						default: 'false',
						description: 'Disables the radio button.',
					},
				],
			},
			{
				id: 'slider',
				name: 'Slider',
				status: 'stable',
				description:
					'Range selection control with optional marks, always-on label, and disabled state.',
				preview: SliderPreview,
				controls: [
					{
						type: 'number' as const,
						name: 'min',
						label: 'min',
						default: 0,
						min: -100,
						max: 0,
						step: 1,
					},
					{
						type: 'number' as const,
						name: 'max',
						label: 'max',
						default: 100,
						min: 10,
						max: 500,
						step: 10,
					},
					{
						type: 'number' as const,
						name: 'step',
						label: 'step',
						default: 1,
						min: 1,
						max: 50,
						step: 1,
					},
					{
						type: 'select' as const,
						name: 'size',
						label: 'size',
						default: 'md',
						options: ['xs', 'sm', 'md', 'lg', 'xl'],
					},
					{
						type: 'boolean' as const,
						name: 'labelAlwaysOn',
						label: 'labelAlwaysOn',
						default: false,
					},
					{
						type: 'boolean' as const,
						name: 'disabled',
						label: 'disabled',
						default: false,
					},
				],
				controlledPreview: (v: Record<string, any>) => {
					const Demo = () => {
						const [val, setVal] = React.useState(40);
						return (
							<div className='w-72'>
								<Slider
									value={val}
									onChange={setVal}
									min={v.min as number}
									max={v.max as number}
									step={v.step as number}
									size={v.size as any}
									labelAlwaysOn={v.labelAlwaysOn as boolean}
									disabled={v.disabled as boolean}
								/>
							</div>
						);
					};
					return <Demo />;
				},
				props: [
					{
						name: 'value',
						type: 'number',
						default: '—',
						description: 'Controlled value.',
					},
					{
						name: 'min',
						type: 'number',
						default: '0',
						description: 'Minimum value.',
					},
					{
						name: 'max',
						type: 'number',
						default: '100',
						description: 'Maximum value.',
					},
					{
						name: 'step',
						type: 'number',
						default: '1',
						description: 'Slider step.',
					},
					{
						name: 'marks',
						type: '{ value: number; label?: ReactNode }[]',
						default: '—',
						description: 'Values where tick marks appear.',
					},
					{
						name: 'label',
						type: 'ReactNode | (value: number) => ReactNode',
						default: '—',
						description: 'Tooltip content while dragging.',
					},
					{
						name: 'labelAlwaysOn',
						type: 'boolean',
						default: 'false',
						description: 'Always show the label tooltip.',
					},
					{
						name: 'disabled',
						type: 'boolean',
						default: 'false',
						description: 'Prevents interaction.',
					},
				],
			},
			{
				id: 'rating',
				name: 'Rating',
				status: 'stable',
				description:
					'Star (or custom symbol) rating picker with fractional support and read-only mode.',
				preview: RatingPreview,
				controls: [
					{
						type: 'number' as const,
						name: 'count',
						label: 'count',
						default: 5,
						min: 3,
						max: 10,
						step: 1,
					},
					{
						type: 'select' as const,
						name: 'size',
						label: 'size',
						default: 'md',
						options: ['xs', 'sm', 'md', 'lg', 'xl'],
					},
					{
						type: 'select' as const,
						name: 'fractions',
						label: 'fractions',
						default: '1',
						options: ['1', '2', '4'],
					},
					{
						type: 'boolean' as const,
						name: 'readOnly',
						label: 'readOnly',
						default: false,
					},
				],
				controlledPreview: (v: Record<string, any>) => {
					const Demo = () => {
						const [val, setVal] = React.useState(3);
						return (
							<Rating
								value={val}
								onChange={setVal}
								count={v.count as number}
								size={v.size as any}
								fractions={Number(v.fractions) as any}
								readOnly={v.readOnly as boolean}
							/>
						);
					};
					return <Demo />;
				},
				props: [
					{
						name: 'value',
						type: 'number',
						default: '—',
						description: 'Controlled rating value.',
					},
					{
						name: 'count',
						type: 'number',
						default: '5',
						description: 'Total number of stars.',
					},
					{
						name: 'fractions',
						type: 'number',
						default: '1',
						description:
							'Subdivisions per star (e.g. 2 = half-stars).',
					},
					{
						name: 'size',
						type: '"xs" | "sm" | "md" | "lg" | "xl" | number',
						default: '"md"',
						description: 'Star size.',
					},
					{
						name: 'readOnly',
						type: 'boolean',
						default: 'false',
						description: 'Disables interaction.',
					},
				],
			},
			{
				id: 'chip',
				name: 'Chip / ChipGroup',
				status: 'stable',
				description:
					'Toggle-style checkbox/radio that looks like a badge. Use ChipGroup for managed single or multi selection.',
				preview: ChipPreview,
				controls: [
					{
						type: 'select' as const,
						name: 'variant',
						label: 'variant',
						default: 'outline',
						options: ['outline', 'filled', 'light'],
					},
					{
						type: 'select' as const,
						name: 'size',
						label: 'size',
						default: 'md',
						options: ['xs', 'sm', 'md', 'lg', 'xl'],
					},
				],
				controlledPreview: (v: Record<string, any>) => {
					const Demo = () => {
						const [checked, setChecked] = React.useState(false);
						return (
							<Chip
								checked={checked}
								onChange={(e) => setChecked(e.target.checked)}
								variant={v.variant as any}
								size={v.size as any}>
								Awesome
							</Chip>
						);
					};
					return <Demo />;
				},
				props: [
					{
						name: 'variant',
						type: '"filled" | "light" | "outline"',
						default: '"outline"',
						description: 'Visual style.',
					},
					{
						name: 'size',
						type: '"xs" | "sm" | "md" | "lg" | "xl"',
						default: '"sm"',
						description: 'Chip size.',
					},
					{
						name: 'checked',
						type: 'boolean',
						default: '—',
						description: 'Controlled checked state.',
					},
					{
						name: 'icon',
						type: 'React.ReactNode',
						default: '<CheckIcon />',
						description: 'Icon shown when selected.',
					},
				],
			},
			{
				id: 'segmented-control',
				name: 'SegmentedControl',
				status: 'stable',
				description:
					'Pill-style tab selector where exactly one option is active at a time.',
				preview: SegmentedControlPreview,
				controls: [
					{
						type: 'select' as const,
						name: 'size',
						label: 'size',
						default: 'md',
						options: ['xs', 'sm', 'md', 'lg', 'xl'],
					},
					{
						type: 'select' as const,
						name: 'orientation',
						label: 'orientation',
						default: 'horizontal',
						options: ['horizontal', 'vertical'],
					},
					{
						type: 'boolean' as const,
						name: 'fullWidth',
						label: 'fullWidth',
						default: false,
					},
					{
						type: 'boolean' as const,
						name: 'disabled',
						label: 'disabled',
						default: false,
					},
				],
				controlledPreview: (v: Record<string, any>) => (
					<SegmentedControl
						data={['React', 'Vue', 'Svelte']}
						size={v.size as any}
						orientation={v.orientation as any}
						fullWidth={v.fullWidth as boolean}
						disabled={v.disabled as boolean}
					/>
				),
				props: [
					{
						name: 'data',
						type: '(string | { value, label, disabled? })[]',
						default: '—',
						description: 'Options to render.',
					},
					{
						name: 'value',
						type: 'string',
						default: '—',
						description: 'Controlled active value.',
					},
					{
						name: 'size',
						type: '"xs" | "sm" | "md" | "lg" | "xl"',
						default: '"sm"',
						description: 'Height and font size of the segments.',
					},
					{
						name: 'fullWidth',
						type: 'boolean',
						default: 'false',
						description: 'Stretches to full container width.',
					},
					{
						name: 'orientation',
						type: '"horizontal" | "vertical"',
						default: '"horizontal"',
						description: 'Layout direction.',
					},
				],
			},
			{
				id: 'tags-input',
				name: 'TagsInput',
				status: 'stable',
				description:
					'Free-entry tags field. Press Enter or a split char to add a tag; backspace removes the last.',
				preview: TagsInputPreview,
				controls: [
					{
						type: 'text' as const,
						name: 'label',
						label: 'label',
						default: 'Press Enter to submit a tag',
					},
					{
						type: 'text' as const,
						name: 'placeholder',
						label: 'placeholder',
						default: 'Add tag...',
					},
					{
						type: 'number' as const,
						name: 'maxTags',
						label: 'maxTags',
						default: 5,
						min: 1,
						max: 20,
						step: 1,
					},
					{
						type: 'boolean' as const,
						name: 'allowDuplicates',
						label: 'allowDuplicates',
						default: false,
					},
				],
				controlledPreview: (v: Record<string, any>) => {
					const Demo = () => {
						const [value, setValue] = React.useState<string[]>([
							'React',
						]);
						return (
							<div className='w-72'>
								<TagsInput
									label={v.label as string}
									placeholder={v.placeholder as string}
									value={value}
									onChange={setValue}
									maxTags={v.maxTags as number}
									allowDuplicates={
										v.allowDuplicates as boolean
									}
								/>
							</div>
						);
					};
					return <Demo />;
				},
				props: [
					{
						name: 'value',
						type: 'string[]',
						default: '—',
						description: 'Controlled list of tags.',
					},
					{
						name: 'maxTags',
						type: 'number',
						default: '—',
						description: 'Maximum number of tags allowed.',
					},
					{
						name: 'allowDuplicates',
						type: 'boolean',
						default: 'false',
						description: 'Allow the same tag more than once.',
					},
					{
						name: 'splitChars',
						type: 'string[]',
						default: '[","]',
						description: 'Characters that trigger tag creation.',
					},
				],
			},
			{
				id: 'pin-input',
				name: 'PinInput',
				status: 'stable',
				description:
					'One-time code / PIN entry with auto-focus-next, mask, and alphanumeric/number modes.',
				preview: PinInputPreview,
				controls: [
					{
						type: 'number' as const,
						name: 'length',
						label: 'length',
						default: 4,
						min: 3,
						max: 8,
						step: 1,
					},
					{
						type: 'select' as const,
						name: 'type',
						label: 'type',
						default: 'alphanumeric',
						options: ['alphanumeric', 'number'],
					},
					{
						type: 'boolean' as const,
						name: 'mask',
						label: 'mask',
						default: false,
					},
					{
						type: 'boolean' as const,
						name: 'disabled',
						label: 'disabled',
						default: false,
					},
				],
				controlledPreview: (v: Record<string, any>) => (
					<PinInput
						length={v.length as number}
						type={v.type as any}
						mask={v.mask as boolean}
						disabled={v.disabled as boolean}
					/>
				),
				props: [
					{
						name: 'length',
						type: 'number',
						default: '4',
						description: 'Number of input cells.',
					},
					{
						name: 'type',
						type: '"alphanumeric" | "number" | RegExp',
						default: '"alphanumeric"',
						description: 'Accepted character type.',
					},
					{
						name: 'mask',
						type: 'boolean',
						default: 'false',
						description:
							'Hides entered characters like a password.',
					},
					{
						name: 'onComplete',
						type: '(value: string) => void',
						default: '—',
						description: 'Fires when all cells are filled.',
					},
				],
			},
			{
				id: 'color-input',
				name: 'ColorInput / ColorPicker',
				status: 'stable',
				description:
					'Color picker as an inline field (ColorInput) or standalone swatch grid + picker (ColorPicker).',
				preview: ColorInputPreview,
				controls: [
					{
						type: 'select' as const,
						name: 'format',
						label: 'format',
						default: 'hex',
						options: ['hex', 'rgb', 'rgba', 'hsl', 'hsla'],
					},
					{
						type: 'boolean' as const,
						name: 'withPicker',
						label: 'withPicker',
						default: true,
					},
					{
						type: 'boolean' as const,
						name: 'disabled',
						label: 'disabled',
						default: false,
					},
				],
				controlledPreview: (v: Record<string, any>) => {
					const Demo = () => {
						const [color, setColor] = React.useState('#228be6');
						return (
							<div className='w-72'>
								<ColorInput
									value={color}
									onChange={setColor}
									format={v.format as any}
									withPicker={v.withPicker as boolean}
									disabled={v.disabled as boolean}
								/>
							</div>
						);
					};
					return <Demo />;
				},
				props: [
					{
						name: 'value',
						type: 'string',
						default: '—',
						description: 'Controlled hex/rgb/hsl color string.',
					},
					{
						name: 'swatches',
						type: 'string[]',
						default: '[]',
						description:
							'Preset color swatches shown below the picker.',
					},
					{
						name: 'format',
						type: '"hex" | "rgb" | "rgba" | "hsl" | "hsla"',
						default: '"hex"',
						description: 'Output color format.',
					},
					{
						name: 'withPicker',
						type: 'boolean',
						default: 'true',
						description: 'Show the gradient canvas picker.',
					},
				],
			},
			{
				id: 'multi-select',
				name: 'MultiSelect',
				status: 'stable',
				description:
					'Select multiple values from a dropdown. Supports search, clearable, max values, and hiding picked options.',
				preview: MultiSelectPreview,
				controls: [
					{
						type: 'text' as const,
						name: 'label',
						label: 'label',
						default: 'Favorite libraries',
					},
					{
						type: 'text' as const,
						name: 'placeholder',
						label: 'placeholder',
						default: 'Pick any',
					},
					{
						type: 'number' as const,
						name: 'maxValues',
						label: 'maxValues',
						default: 5,
						min: 1,
						max: 10,
						step: 1,
					},
					{
						type: 'boolean' as const,
						name: 'searchable',
						label: 'searchable',
						default: true,
					},
					{
						type: 'boolean' as const,
						name: 'clearable',
						label: 'clearable',
						default: true,
					},
				],
				controlledPreview: (v: Record<string, any>) => {
					const Demo = () => {
						const [value, setValue] = React.useState<string[]>([]);
						return (
							<div className='w-72'>
								<MultiSelect
									data={[
										'React',
										'Vue',
										'Svelte',
										'Angular',
										'Solid',
									]}
									value={value}
									onChange={setValue}
									label={v.label as string}
									placeholder={v.placeholder as string}
									maxValues={v.maxValues as number}
									searchable={v.searchable as boolean}
									clearable={v.clearable as boolean}
								/>
							</div>
						);
					};
					return <Demo />;
				},
				props: [
					{
						name: 'data',
						type: '(string | { value, label, disabled?, group? })[]',
						default: '—',
						description: 'Options to display.',
					},
					{
						name: 'value',
						type: 'string[]',
						default: '—',
						description: 'Controlled selected values.',
					},
					{
						name: 'maxValues',
						type: 'number',
						default: '—',
						description: 'Limit number of selectable items.',
					},
					{
						name: 'searchable',
						type: 'boolean',
						default: 'false',
						description: 'Enables filtering by typing.',
					},
					{
						name: 'clearable',
						type: 'boolean',
						default: 'false',
						description: 'Shows a clear-all button.',
					},
					{
						name: 'hidePickedOptions',
						type: 'boolean',
						default: 'false',
						description:
							'Removes selected items from the dropdown list.',
					},
				],
			},
			{
				id: 'autocomplete',
				name: 'Autocomplete',
				status: 'stable',
				description:
					'Text input with a live dropdown of suggestions filtered as the user types.',
				preview: AutocompletePreview,
				controls: [
					{
						type: 'text' as const,
						name: 'label',
						label: 'label',
						default: 'Your framework',
					},
					{
						type: 'text' as const,
						name: 'placeholder',
						label: 'placeholder',
						default: 'Start typing...',
					},
					{
						type: 'number' as const,
						name: 'limit',
						label: 'limit',
						default: 7,
						min: 1,
						max: 20,
						step: 1,
					},
					{
						type: 'boolean' as const,
						name: 'disabled',
						label: 'disabled',
						default: false,
					},
				],
				controlledPreview: (v: Record<string, any>) => (
					<div className='w-72'>
						<Autocomplete
							data={[
								'React',
								'Vue',
								'Svelte',
								'Angular',
								'Solid',
								'Qwik',
								'Astro',
							]}
							label={v.label as string}
							placeholder={v.placeholder as string}
							limit={v.limit as number}
							disabled={v.disabled as boolean}
						/>
					</div>
				),
				props: [
					{
						name: 'data',
						type: 'string[] | { value: string; label?: string }[]',
						default: '—',
						description: 'Suggestion list.',
					},
					{
						name: 'limit',
						type: 'number',
						default: '7',
						description: 'Max suggestions shown at once.',
					},
					{
						name: 'onOptionSubmit',
						type: '(value: string) => void',
						default: '—',
						description: 'Fires when a suggestion is selected.',
					},
				],
			},
			{
				id: 'file-input',
				name: 'FileInput',
				status: 'stable',
				description:
					'Stylised file picker button. Supports single/multiple files, accept filter, and clearable state.',
				preview: FileInputPreview,
				controls: [
					{
						type: 'text' as const,
						name: 'accept',
						label: 'accept',
						default: '',
					},
					{
						type: 'boolean' as const,
						name: 'multiple',
						label: 'multiple',
						default: false,
					},
					{
						type: 'boolean' as const,
						name: 'clearable',
						label: 'clearable',
						default: true,
					},
					{
						type: 'boolean' as const,
						name: 'disabled',
						label: 'disabled',
						default: false,
					},
				],
				controlledPreview: (v: Record<string, any>) => (
					<div className='w-72'>
						<FileInput
							accept={(v.accept as string) || undefined}
							multiple={v.multiple as boolean}
							clearable={v.clearable as boolean}
							disabled={v.disabled as boolean}
							placeholder='Pick file'
						/>
					</div>
				),
				props: [
					{
						name: 'value',
						type: 'File | File[] | null',
						default: '—',
						description: 'Controlled file value.',
					},
					{
						name: 'multiple',
						type: 'boolean',
						default: 'false',
						description: 'Allow picking multiple files.',
					},
					{
						name: 'accept',
						type: 'string',
						default: '—',
						description:
							'MIME types / extensions filter (e.g. "image/*").',
					},
					{
						name: 'clearable',
						type: 'boolean',
						default: 'false',
						description: 'Shows an × to clear the selection.',
					},
					{
						name: 'placeholder',
						type: 'string',
						default: '"Pick file"',
						description: 'Text shown when no file is selected.',
					},
				],
			},
			{
				id: 'json-input',
				name: 'JsonInput',
				status: 'stable',
				description:
					'Textarea that validates JSON content and optionally auto-formats on blur.',
				preview: JsonInputPreview,
				controls: [
					{
						type: 'text' as const,
						name: 'label',
						label: 'label',
						default: 'JSON data',
					},
					{
						type: 'number' as const,
						name: 'minRows',
						label: 'minRows',
						default: 4,
						min: 2,
						max: 12,
						step: 1,
					},
					{
						type: 'boolean' as const,
						name: 'formatOnBlur',
						label: 'formatOnBlur',
						default: true,
					},
				],
				controlledPreview: (v: Record<string, any>) => {
					const Demo = () => {
						const [json, setJson] =
							React.useState('{"hello": "world"}');
						return (
							<div className='w-72'>
								<JsonInput
									label={v.label as string}
									value={json}
									onChange={setJson}
									minRows={v.minRows as number}
									formatOnBlur={v.formatOnBlur as boolean}
								/>
							</div>
						);
					};
					return <Demo />;
				},
				props: [
					{
						name: 'value',
						type: 'string',
						default: '—',
						description: 'Controlled JSON string.',
					},
					{
						name: 'formatOnBlur',
						type: 'boolean',
						default: 'false',
						description:
							'Pretty-prints valid JSON when focus leaves.',
					},
					{
						name: 'validationError',
						type: 'React.ReactNode',
						default: '"Invalid JSON"',
						description: 'Error shown when JSON is malformed.',
					},
					{
						name: 'minRows',
						type: 'number',
						default: '—',
						description: 'Minimum visible rows.',
					},
				],
			},
		],
	},
	{
		title: 'Data Display',
		items: [
			{
				id: 'avatar',
				name: 'Avatar',
				status: 'stable',
				description:
					'A user thumbnail that shows an image or falls back to text initials/an icon. Supports four visual variants and five sizes.',
				preview: AvatarPreview,
				controls: [
					{
						type: 'select' as const,
						name: 'variant',
						label: 'variant',
						default: 'filled',
						options: ['filled', 'light', 'outline', 'transparent'],
					},
					{
						type: 'select' as const,
						name: 'size',
						label: 'size',
						default: 'md',
						options: ['xs', 'sm', 'md', 'lg', 'xl'],
					},
					{
						type: 'text' as const,
						name: 'initials',
						label: 'initials',
						default: 'AB',
					},
				],
				controlledPreview: (v: Record<string, any>) => (
					<div className='flex items-center gap-3'>
						<Avatar
							variant={v.variant as any}
							size={v.size as any}>
							{v.initials as string}
						</Avatar>
						<Avatar
							src='https://i.pravatar.cc/150?img=3'
							variant={v.variant as any}
							size={v.size as any}
							alt='User'
						/>
					</div>
				),
				props: [
					{
						name: 'src',
						type: 'string | null',
						default: '',
						description: 'URL of the user image.',
					},
					{
						name: 'alt',
						type: 'string',
						default: '',
						description:
							'Alt text; first character used as fallback initial.',
					},
					{
						name: 'children',
						type: 'ReactNode',
						default: '',
						description: 'Fallback content (e.g. text initials).',
					},
					{
						name: 'size',
						type: '"xs" | "sm" | "md" | "lg" | "xl" | number',
						default: '"md"',
						description: 'Controls the diameter.',
					},
					{
						name: 'radius',
						type: 'string | number',
						default: '"50%"',
						description: 'Border radius.',
					},
					{
						name: 'variant',
						type: '"filled" | "light" | "outline" | "transparent"',
						default: '"filled"',
						description: 'Visual fill style.',
					},
					{
						name: 'color',
						type: 'string',
						default: '',
						description: 'Custom color token or CSS value.',
					},
					{
						name: 'component',
						type: 'ElementType',
						default: '"div"',
						description: 'Override the root element.',
					},
					{
						name: 'imageProps',
						type: 'ImgHTMLAttributes',
						default: '',
						description:
							'Extra props spread onto the <img> element.',
					},
				],
			},
			{
				id: 'badge',
				name: 'Badge',
				status: 'stable',
				description:
					'A compact label for status communication. Five variants, five sizes, optional left/right sections and circle mode.',
				preview: BadgePreview,
				controls: [
					{
						type: 'select' as const,
						name: 'variant',
						label: 'variant',
						default: 'filled',
						options: [
							'filled',
							'light',
							'outline',
							'dot',
							'transparent',
						],
					},
					{
						type: 'select' as const,
						name: 'size',
						label: 'size',
						default: 'md',
						options: ['xs', 'sm', 'md', 'lg', 'xl'],
					},
					{
						type: 'text' as const,
						name: 'children',
						label: 'label',
						default: 'Badge',
					},
				],
				controlledPreview: (v: Record<string, any>) => (
					<Badge
						variant={v.variant as any}
						size={v.size as any}>
						{v.children as string}
					</Badge>
				),
				props: [
					{
						name: 'variant',
						type: '"filled" | "light" | "outline" | "dot" | "transparent"',
						default: '"filled"',
						description: 'Visual style variant.',
					},
					{
						name: 'size',
						type: '"xs" | "sm" | "md" | "lg" | "xl"',
						default: '"md"',
						description: 'Controls height and font size.',
					},
					{
						name: 'radius',
						type: 'string',
						default: '"2rem"',
						description:
							'Border radius (fully rounded by default).',
					},
					{
						name: 'color',
						type: 'string',
						default: '',
						description: 'Custom color token or CSS value.',
					},
					{
						name: 'fullWidth',
						type: 'boolean',
						default: 'false',
						description: 'Expands to fill its container.',
					},
					{
						name: 'circle',
						type: 'boolean',
						default: 'false',
						description:
							'Forces equal width/height (aspect-square).',
					},
					{
						name: 'leftSection',
						type: 'ReactNode',
						default: '',
						description: 'Content before the label.',
					},
					{
						name: 'rightSection',
						type: 'ReactNode',
						default: '',
						description: 'Content after the label.',
					},
				],
			},
			{
				id: 'card',
				name: 'Card',
				status: 'stable',
				description:
					'A surface container with configurable shadow, radius, border and padding. Animates in with a subtle fade-slide.',
				preview: CardPreview,
				controls: [
					{
						type: 'select' as const,
						name: 'shadow',
						label: 'shadow',
						default: 'sm',
						options: ['none', 'xs', 'sm', 'md', 'lg', 'xl'],
					},
					{
						type: 'select' as const,
						name: 'radius',
						label: 'radius',
						default: 'md',
						options: ['none', 'xs', 'sm', 'md', 'lg', 'xl'],
					},
					{
						type: 'select' as const,
						name: 'padding',
						label: 'padding',
						default: 'md',
						options: ['xs', 'sm', 'md', 'lg', 'xl'],
					},
					{
						type: 'boolean' as const,
						name: 'withBorder',
						label: 'withBorder',
						default: false,
					},
				],
				controlledPreview: (v: Record<string, any>) => (
					<Card
						shadow={v.shadow as any}
						radius={v.radius as any}
						padding={v.padding as any}
						withBorder={v.withBorder as boolean}
						style={{ width: 280 }}>
						<p className='text-sm font-semibold text-zinc-100 mb-1'>
							Card title
						</p>
						<p className='text-xs text-zinc-400'>
							This is the card body content area.
						</p>
					</Card>
				),
				props: [
					{
						name: 'shadow',
						type: '"none" | "xs" | "sm" | "md" | "lg" | "xl"',
						default: '"sm"',
						description: 'Drop shadow intensity.',
					},
					{
						name: 'radius',
						type: '"none" | "xs" | "sm" | "md" | "lg" | "xl"',
						default: '"md"',
						description: 'Border radius token.',
					},
					{
						name: 'withBorder',
						type: 'boolean',
						default: 'false',
						description: 'Adds a 1px border.',
					},
					{
						name: 'padding',
						type: 'string | number',
						default: '"1rem"',
						description:
							'Inner padding (CSS value or number in px).',
					},
					{
						name: 'component',
						type: 'ElementType',
						default: '"div"',
						description:
							'Override the root element (skips animation).',
					},
				],
			},
			{
				id: 'progress',
				name: 'Progress',
				status: 'stable',
				description:
					'A horizontal progress bar. Supports striped style, animation, multiple colour sections and an optional label.',
				preview: ProgressPreview,
				controls: [
					{
						type: 'number' as const,
						name: 'value',
						label: 'value',
						default: 60,
						min: 0,
						max: 100,
						step: 1,
					},
					{
						type: 'select' as const,
						name: 'size',
						label: 'size',
						default: 'md',
						options: ['xs', 'sm', 'md', 'lg', 'xl'],
					},
					{
						type: 'boolean' as const,
						name: 'striped',
						label: 'striped',
						default: false,
					},
					{
						type: 'boolean' as const,
						name: 'animated',
						label: 'animated',
						default: false,
					},
				],
				controlledPreview: (v: Record<string, any>) => (
					<Progress
						value={v.value as number}
						size={v.size as any}
						striped={v.striped as boolean}
						animated={v.animated as boolean}
					/>
				),
				props: [
					{
						name: 'value',
						type: 'number',
						default: '0',
						description: 'Progress percentage (0–100).',
					},
					{
						name: 'color',
						type: 'string',
						default: 'brand',
						description: 'Bar fill colour (CSS value or token).',
					},
					{
						name: 'size',
						type: '"xs" | "sm" | "md" | "lg" | "xl" | number',
						default: '"md"',
						description: 'Bar thickness in px.',
					},
					{
						name: 'radius',
						type: 'string',
						default: '"2rem"',
						description: 'Border radius.',
					},
					{
						name: 'striped',
						type: 'boolean',
						default: 'false',
						description: 'Applies a striped pattern to the bar.',
					},
					{
						name: 'animated',
						type: 'boolean',
						default: 'false',
						description: 'Adds a pulse animation.',
					},
					{
						name: 'label',
						type: 'string',
						default: '',
						description: 'Text rendered inside the filled portion.',
					},
					{
						name: 'sections',
						type: '{ value, color?, tooltip? }[]',
						default: '',
						description: 'Render multiple coloured segments.',
					},
				],
			},
			{
				id: 'skeleton',
				name: 'Skeleton',
				status: 'stable',
				description:
					'A placeholder that represents content while loading. Toggle visible to reveal underlying children.',
				preview: SkeletonPreview,
				controls: [
					{
						type: 'number' as const,
						name: 'height',
						label: 'height',
						default: 20,
						min: 8,
						max: 120,
						step: 4,
					},
					{
						type: 'number' as const,
						name: 'count',
						label: 'count',
						default: 3,
						min: 1,
						max: 8,
						step: 1,
					},
					{
						type: 'boolean' as const,
						name: 'circle',
						label: 'circle',
						default: false,
					},
					{
						type: 'boolean' as const,
						name: 'animate',
						label: 'animate',
						default: true,
					},
				],
				controlledPreview: (v: Record<string, any>) => {
					const count = v.circle ? 1 : (v.count as number);
					return (
						<div className='flex flex-col gap-2 w-64'>
							{Array.from({ length: count }).map((_, i) => (
								<Skeleton
									key={i}
									height={v.height as number}
									circle={v.circle as boolean}
									animate={v.animate as boolean}
								/>
							))}
						</div>
					);
				},
				props: [
					{
						name: 'height',
						type: 'number | string',
						default: '',
						description: 'Height of the skeleton block.',
					},
					{
						name: 'width',
						type: 'number | string',
						default: '100%',
						description: 'Width of the skeleton block.',
					},
					{
						name: 'circle',
						type: 'boolean',
						default: 'false',
						description: 'Forces a circular shape.',
					},
					{
						name: 'radius',
						type: 'number | string',
						default: '',
						description: 'Border radius override.',
					},
					{
						name: 'animate',
						type: 'boolean',
						default: 'true',
						description: 'Enables the pulse animation.',
					},
					{
						name: 'visible',
						type: 'boolean',
						default: 'true',
						description: 'When false, renders children instead.',
					},
				],
			},
			{
				id: 'accordion',
				name: 'Accordion',
				status: 'stable',
				description:
					'Componente compuesto de acordeón con animación de apertura/cierre. Soporta modo múltiple, cuatro variantes visuales y posición del chevron configurable.',
				preview: AccordionPreview,
				controls: [
					{
						type: 'select' as const,
						name: 'variant',
						label: 'variant',
						default: 'default',
						options: [
							'default',
							'contained',
							'filled',
							'separated',
						],
					},
					{
						type: 'select' as const,
						name: 'chevronPosition',
						label: 'chevronPosition',
						default: 'right',
						options: ['left', 'right'],
					},
					{
						type: 'boolean' as const,
						name: 'multiple',
						label: 'multiple',
						default: false,
					},
					{
						type: 'boolean' as const,
						name: 'disabled',
						label: 'disabled',
						default: false,
					},
				],
				controlledPreview: (v: Record<string, any>) => (
					<div className='w-80'>
						<Accordion
							variant={v.variant as any}
							chevronPosition={v.chevronPosition as any}
							multiple={v.multiple as boolean}
							defaultValue='item1'>
							<AccordionItem value='item1'>
								<AccordionControl
									disabled={v.disabled as boolean}>
									What is Kivora?
								</AccordionControl>
								<AccordionPanel>
									Kivora is a component library for React.
								</AccordionPanel>
							</AccordionItem>
							<AccordionItem value='item2'>
								<AccordionControl
									disabled={v.disabled as boolean}>
									How to install?
								</AccordionControl>
								<AccordionPanel>
									Run npm install @kivora/react in your
									project.
								</AccordionPanel>
							</AccordionItem>
							<AccordionItem value='item3'>
								<AccordionControl
									disabled={v.disabled as boolean}>
									Is it open source?
								</AccordionControl>
								<AccordionPanel>
									Yes, Kivora is open source and MIT licensed.
								</AccordionPanel>
							</AccordionItem>
						</Accordion>
					</div>
				),
				props: [
					{
						name: 'value',
						type: 'string | string[] | null',
						default: '',
						description:
							'Valor (o valores) activo en modo controlado.',
					},
					{
						name: 'defaultValue',
						type: 'string | string[] | null',
						default: '',
						description: 'Valor inicial en modo no controlado.',
					},
					{
						name: 'onChange',
						type: '(value) => void',
						default: '',
						description: 'Llamado cuando cambia el ítem abierto.',
					},
					{
						name: 'multiple',
						type: 'boolean',
						default: 'false',
						description:
							'Permite abrir varios ítems al mismo tiempo.',
					},
					{
						name: 'variant',
						type: '"default" | "contained" | "filled" | "separated"',
						default: '"default"',
						description: 'Estilo visual del acordeón.',
					},
					{
						name: 'chevronPosition',
						type: '"left" | "right"',
						default: '"right"',
						description: 'Posición del icono chevron.',
					},
					{
						name: 'chevron',
						type: 'ReactNode',
						default: '',
						description: 'Icono personalizado para el chevron.',
					},
					{
						name: 'AccordionItem value',
						type: 'string',
						default: '',
						description: 'Requerido. Identificador único del ítem.',
					},
					{
						name: 'AccordionItem disabled',
						type: 'boolean',
						default: 'false',
						description: 'Deshabilita el ítem.',
					},
					{
						name: 'AccordionControl icon',
						type: 'ReactNode',
						default: '',
						description: 'Icono a la izquierda del título.',
					},
				],
			},
			{
				id: 'table',
				name: 'Table',
				status: 'stable',
				description:
					'Tabla de datos semántica con soporte para filas rayadas (striped), resaltado al hover, bordes de columna y encabezado sticky.',
				preview: TablePreview,
				controls: [
					{
						type: 'boolean' as const,
						name: 'striped',
						label: 'striped',
						default: false,
					},
					{
						type: 'boolean' as const,
						name: 'highlightOnHover',
						label: 'highlightOnHover',
						default: false,
					},
					{
						type: 'boolean' as const,
						name: 'withTableBorder',
						label: 'withTableBorder',
						default: false,
					},
					{
						type: 'boolean' as const,
						name: 'withColumnBorders',
						label: 'withColumnBorders',
						default: false,
					},
				],
				controlledPreview: (v: Record<string, any>) => (
					<Table
						striped={v.striped as boolean}
						highlightOnHover={v.highlightOnHover as boolean}
						withTableBorder={v.withTableBorder as boolean}
						withColumnBorders={v.withColumnBorders as boolean}>
						<Thead>
							<Tr>
								<Th>Name</Th>
								<Th>Role</Th>
								<Th>Status</Th>
							</Tr>
						</Thead>
						<Tbody>
							<Tr>
								<Td>Alice</Td>
								<Td>Admin</Td>
								<Td>Active</Td>
							</Tr>
							<Tr>
								<Td>Bob</Td>
								<Td>Editor</Td>
								<Td>Inactive</Td>
							</Tr>
							<Tr>
								<Td>Carol</Td>
								<Td>Viewer</Td>
								<Td>Active</Td>
							</Tr>
						</Tbody>
					</Table>
				),
				props: [
					{
						name: 'striped',
						type: 'boolean | "odd" | "even"',
						default: 'false',
						description:
							'Aplica color de fondo alternado a las filas.',
					},
					{
						name: 'highlightOnHover',
						type: 'boolean',
						default: 'false',
						description: 'Resalta la fila al pasar el cursor.',
					},
					{
						name: 'withTableBorder',
						type: 'boolean',
						default: 'false',
						description: 'Añade borde exterior a la tabla.',
					},
					{
						name: 'withColumnBorders',
						type: 'boolean',
						default: 'false',
						description:
							'Añade separadores verticales entre columnas.',
					},
					{
						name: 'withRowBorders',
						type: 'boolean',
						default: 'true',
						description:
							'Añade separadores horizontales entre filas.',
					},
					{
						name: 'stickyHeader',
						type: 'boolean',
						default: 'false',
						description: 'Fija el encabezado al hacer scroll.',
					},
					{
						name: 'horizontalSpacing',
						type: 'number | string',
						default: '"0.5rem"',
						description: 'Padding horizontal de las celdas.',
					},
					{
						name: 'verticalSpacing',
						type: 'number | string',
						default: '"0.5rem"',
						description: 'Padding vertical de las celdas.',
					},
				],
			},
			{
				id: 'timeline',
				name: 'Timeline',
				status: 'stable',
				description:
					'Lista de eventos vertical con línea conectora y bullets. El prop active marca qué pasos están completados.',
				preview: TimelinePreview,
				controls: [
					{
						type: 'number' as const,
						name: 'active',
						label: 'active step',
						default: 1,
						min: -1,
						max: 4,
						step: 1,
					},
					{
						type: 'number' as const,
						name: 'bulletSize',
						label: 'bulletSize',
						default: 20,
						min: 12,
						max: 40,
						step: 2,
					},
					{
						type: 'select' as const,
						name: 'align',
						label: 'align',
						default: 'left',
						options: ['left', 'right'],
					},
				],
				controlledPreview: (v: Record<string, any>) => (
					<Timeline
						active={v.active as number}
						bulletSize={v.bulletSize as number}
						align={v.align as any}>
						<TimelineItem title='Create repo'>
							<p className='text-xs text-zinc-400'>
								Push your code to GitHub
							</p>
						</TimelineItem>
						<TimelineItem title='CI passes'>
							<p className='text-xs text-zinc-400'>
								All checks green
							</p>
						</TimelineItem>
						<TimelineItem title='Deploy'>
							<p className='text-xs text-zinc-400'>
								Deployed to production
							</p>
						</TimelineItem>
						<TimelineItem title='Done'>
							<p className='text-xs text-zinc-400'>
								Celebrate 🎉
							</p>
						</TimelineItem>
					</Timeline>
				),
				props: [
					{
						name: 'active',
						type: 'number',
						default: '-1',
						description:
							'Índice del último paso completado (todos los anteriores se marcan completados).',
					},
					{
						name: 'bulletSize',
						type: 'number',
						default: '20',
						description: 'Diámetro en px de los bullets.',
					},
					{
						name: 'lineWidth',
						type: 'number',
						default: '2',
						description: 'Grosor en px de la línea conectora.',
					},
					{
						name: 'color',
						type: 'string',
						default: 'rgb(99 102 241)',
						description: 'Color de los bullets y la línea activa.',
					},
					{
						name: 'align',
						type: '"left" | "right"',
						default: '"left"',
						description: 'Alineación de los ítems.',
					},
					{
						name: 'TimelineItem title',
						type: 'ReactNode',
						default: '',
						description: 'Título del paso.',
					},
					{
						name: 'TimelineItem bullet',
						type: 'ReactNode',
						default: '',
						description:
							'Contenido del bullet (icono, número, etc.).',
					},
					{
						name: 'TimelineItem lineVariant',
						type: '"solid" | "dashed" | "dotted"',
						default: '"solid"',
						description: 'Estilo de la línea conectora del ítem.',
					},
				],
			},
			{
				id: 'indicator',
				name: 'Indicator',
				status: 'stable',
				description:
					'Badge posicionado sobre un elemento hijo. Soporta modo dot, etiqueta de conteo, animación de procesamiento y 9 posiciones.',
				preview: IndicatorPreview,
				controls: [
					{
						type: 'text' as const,
						name: 'label',
						label: 'label',
						default: '5',
					},
					{
						type: 'select' as const,
						name: 'position',
						label: 'position',
						default: 'top-end',
						options: [
							'top-start',
							'top-center',
							'top-end',
							'middle-start',
							'middle-center',
							'middle-end',
							'bottom-start',
							'bottom-center',
							'bottom-end',
						],
					},
					{
						type: 'boolean' as const,
						name: 'dot',
						label: 'dot mode',
						default: false,
					},
					{
						type: 'boolean' as const,
						name: 'processing',
						label: 'processing',
						default: false,
					},
					{
						type: 'boolean' as const,
						name: 'withBorder',
						label: 'withBorder',
						default: false,
					},
				],
				controlledPreview: (v: Record<string, any>) => (
					<Indicator
						label={v.dot ? undefined : (v.label as string)}
						position={v.position as any}
						dot={v.dot as boolean}
						processing={v.processing as boolean}
						withBorder={v.withBorder as boolean}
						size={v.dot ? 10 : 18}>
						<Avatar
							size='md'
							radius='sm'>
							AB
						</Avatar>
					</Indicator>
				),
				props: [
					{
						name: 'label',
						type: 'ReactNode',
						default: '',
						description:
							'Contenido del indicador (texto o número).',
					},
					{
						name: 'count',
						type: 'number',
						default: '',
						description: 'Número a mostrar (alternativa a label).',
					},
					{
						name: 'dot',
						type: 'boolean',
						default: 'false',
						description: 'Muestra un punto sin contenido.',
					},
					{
						name: 'size',
						type: 'number',
						default: '10',
						description: 'Tamaño en px del indicador.',
					},
					{
						name: 'color',
						type: 'string',
						default: '',
						description: 'Color CSS del indicador.',
					},
					{
						name: 'position',
						type: 'IndicatorPosition',
						default: '"top-end"',
						description:
							'Posición: top/middle/bottom × start/center/end.',
					},
					{
						name: 'processing',
						type: 'boolean',
						default: 'false',
						description:
							'Añade animación pulse para indicar actividad.',
					},
					{
						name: 'disabled',
						type: 'boolean',
						default: 'false',
						description: 'Oculta el indicador.',
					},
					{
						name: 'withBorder',
						type: 'boolean',
						default: 'false',
						description: 'Añade borde blanco alrededor.',
					},
				],
			},
			{
				id: 'pill',
				name: 'Pill',
				status: 'stable',
				description:
					'Etiqueta compacta con forma de píldora. Opcionalmente incluye botón de eliminar. Base de TagsInput y MultiSelect.',
				preview: PillPreview,
				controls: [
					{
						type: 'text' as const,
						name: 'label',
						label: 'label',
						default: 'React',
					},
					{
						type: 'select' as const,
						name: 'size',
						label: 'size',
						default: 'sm',
						options: ['xs', 'sm', 'md', 'lg', 'xl'],
					},
					{
						type: 'boolean' as const,
						name: 'withRemoveButton',
						label: 'withRemoveButton',
						default: false,
					},
					{
						type: 'boolean' as const,
						name: 'disabled',
						label: 'disabled',
						default: false,
					},
				],
				controlledPreview: (v: Record<string, any>) => (
					<div className='flex gap-2'>
						<Pill
							size={v.size as any}
							withRemoveButton={v.withRemoveButton as boolean}
							disabled={v.disabled as boolean}>
							{v.label as string}
						</Pill>
						<Pill
							size={v.size as any}
							withRemoveButton={v.withRemoveButton as boolean}
							disabled={v.disabled as boolean}>
							TypeScript
						</Pill>
					</div>
				),
				props: [
					{
						name: 'size',
						type: '"xs" | "sm" | "md" | "lg" | "xl"',
						default: '"sm"',
						description:
							'Controla altura, padding y tamaño de fuente.',
					},
					{
						name: 'radius',
						type: 'string',
						default: '"2rem"',
						description:
							'Radio de borde (totalmente redondeado por defecto).',
					},
					{
						name: 'withRemoveButton',
						type: 'boolean',
						default: 'false',
						description: 'Muestra un botón × para eliminar.',
					},
					{
						name: 'onRemove',
						type: '() => void',
						default: '',
						description: 'Llamado al pulsar el botón de eliminar.',
					},
					{
						name: 'disabled',
						type: 'boolean',
						default: 'false',
						description: 'Deshabilita el botón de eliminar.',
					},
				],
			},
			{
				id: 'kbd',
				name: 'Kbd',
				status: 'stable',
				description:
					'Elemento visual para mostrar teclas del teclado o atajos de teclado. Renderiza un <kbd> semántico con estilos de tecla.',
				preview: KbdPreview,
				controls: [
					{
						type: 'text' as const,
						name: 'key1',
						label: 'key 1',
						default: '⌘',
					},
					{
						type: 'text' as const,
						name: 'key2',
						label: 'key 2',
						default: 'K',
					},
					{
						type: 'select' as const,
						name: 'size',
						label: 'size',
						default: 'sm',
						options: ['xs', 'sm', 'md', 'lg', 'xl'],
					},
				],
				controlledPreview: (v: Record<string, any>) => (
					<div className='flex items-center gap-1'>
						<Kbd size={v.size as any}>{v.key1 as string}</Kbd>
						<span className='text-xs text-zinc-500'>+</span>
						<Kbd size={v.size as any}>{v.key2 as string}</Kbd>
					</div>
				),
				props: [
					{
						name: 'size',
						type: '"xs" | "sm" | "md" | "lg" | "xl"',
						default: '"sm"',
						description: 'Controla el tamaño de fuente y padding.',
					},
					{
						name: 'children',
						type: 'ReactNode',
						default: '',
						description:
							'Nombre de la tecla o símbolo (⌘, ⇧, etc.).',
					},
				],
			},
			{
				id: 'list',
				name: 'List',
				status: 'stable',
				description:
					'Lista ordenada o desordenada con soporte para iconos personalizados por ítem, cinco tallas y espaciado configurable.',
				preview: ListPreview,
				controls: [
					{
						type: 'select' as const,
						name: 'type',
						label: 'type',
						default: 'unordered',
						options: ['unordered', 'ordered'],
					},
					{
						type: 'select' as const,
						name: 'size',
						label: 'size',
						default: 'md',
						options: ['xs', 'sm', 'md', 'lg', 'xl'],
					},
					{
						type: 'boolean' as const,
						name: 'withPadding',
						label: 'withPadding',
						default: false,
					},
				],
				controlledPreview: (v: Record<string, any>) => (
					<List
						type={v.type as any}
						size={v.size as any}
						withPadding={v.withPadding as boolean}>
						<ListItem>Install dependencies</ListItem>
						<ListItem>Configure your project</ListItem>
						<ListItem>Import components</ListItem>
						<ListItem>Build something awesome</ListItem>
					</List>
				),
				props: [
					{
						name: 'type',
						type: '"ordered" | "unordered"',
						default: '"unordered"',
						description: 'Renderiza <ol> u <ul>.',
					},
					{
						name: 'withPadding',
						type: 'boolean',
						default: 'false',
						description: 'Aplica padding-left para la sangría.',
					},
					{
						name: 'size',
						type: '"xs" | "sm" | "md" | "lg" | "xl"',
						default: '"md"',
						description: 'Tamaño de fuente de los ítems.',
					},
					{
						name: 'spacing',
						type: 'number | string',
						default: '',
						description: 'Espacio entre ítems (gap).',
					},
					{
						name: 'icon',
						type: 'ReactNode',
						default: '',
						description: 'Icono global para todos los ítems.',
					},
					{
						name: 'center',
						type: 'boolean',
						default: 'false',
						description:
							'Alinea verticalmente el icono con el texto.',
					},
					{
						name: 'ListItem icon',
						type: 'ReactNode',
						default: '',
						description:
							'Icono individual que sobreescribe el global.',
					},
				],
			},
			{
				id: 'number-formatter',
				name: 'NumberFormatter',
				status: 'stable',
				description:
					'Formatea números con separador de miles, decimales, prefijo/sufijo y soporte para moneda y porcentaje via Intl.NumberFormat.',
				preview: NumberFormatterPreview,
				controls: [
					{
						type: 'number' as const,
						name: 'value',
						label: 'value',
						default: 1234567.89,
						min: 0,
						max: 9999999,
						step: 1000,
					},
					{
						type: 'text' as const,
						name: 'prefix',
						label: 'prefix',
						default: '$',
					},
					{
						type: 'text' as const,
						name: 'suffix',
						label: 'suffix',
						default: '',
					},
					{
						type: 'number' as const,
						name: 'decimalScale',
						label: 'decimalScale',
						default: 2,
						min: 0,
						max: 6,
						step: 1,
					},
					{
						type: 'boolean' as const,
						name: 'thousandSeparator',
						label: 'thousandSeparator',
						default: true,
					},
				],
				controlledPreview: (v: Record<string, any>) => (
					<p className='text-2xl font-semibold text-zinc-100'>
						<NumberFormatter
							value={v.value as number}
							prefix={(v.prefix as string) || undefined}
							suffix={(v.suffix as string) || undefined}
							decimalScale={v.decimalScale as number}
							thousandSeparator={v.thousandSeparator as boolean}
						/>
					</p>
				),
				props: [
					{
						name: 'value',
						type: 'number',
						default: '0',
						description: 'Número a formatear.',
					},
					{
						name: 'thousandSeparator',
						type: 'string | boolean',
						default: '',
						description:
							'Separador de miles. true usa el locale del browser.',
					},
					{
						name: 'decimalScale',
						type: 'number',
						default: '',
						description: 'Número máximo de decimales.',
					},
					{
						name: 'fixedDecimalScale',
						type: 'boolean',
						default: 'false',
						description: 'Rellena con ceros hasta decimalScale.',
					},
					{
						name: 'prefix',
						type: 'string',
						default: '""',
						description: 'Cadena antepuesta al número.',
					},
					{
						name: 'suffix',
						type: 'string',
						default: '""',
						description: 'Cadena pospuesta al número.',
					},
					{
						name: 'style',
						type: '"decimal" | "currency" | "percent" | "unit"',
						default: '"decimal"',
						description: 'Modo de formateo Intl.',
					},
					{
						name: 'currency',
						type: 'string',
						default: '"USD"',
						description:
							'Código ISO 4217 (solo cuando style="currency").',
					},
					{
						name: 'locale',
						type: 'string',
						default: '',
						description:
							'Locale BCP 47 para Intl (p. ej. "es-ES").',
					},
				],
			},
			{
				id: 'ring-progress',
				name: 'RingProgress',
				status: 'stable',
				description:
					'Gráfico circular SVG de progreso. Soporta múltiples secciones de color, puntas redondeadas y un elemento label central.',
				preview: RingProgressPreview,
				controls: [
					{
						type: 'number' as const,
						name: 'value',
						label: 'progress %',
						default: 65,
						min: 0,
						max: 100,
						step: 5,
					},
					{
						type: 'number' as const,
						name: 'size',
						label: 'size',
						default: 120,
						min: 60,
						max: 240,
						step: 20,
					},
					{
						type: 'number' as const,
						name: 'thickness',
						label: 'thickness',
						default: 12,
						min: 4,
						max: 30,
						step: 2,
					},
					{
						type: 'boolean' as const,
						name: 'roundCaps',
						label: 'roundCaps',
						default: false,
					},
				],
				controlledPreview: (v: Record<string, any>) => (
					<RingProgress
						sections={[
							{
								value: v.value as number,
								color: 'rgb(124 58 237)',
							},
						]}
						size={v.size as number}
						thickness={v.thickness as number}
						roundCaps={v.roundCaps as boolean}
						label={
							<p className='text-center text-xs font-semibold text-zinc-200'>
								{v.value as number}%
							</p>
						}
					/>
				),
				props: [
					{
						name: 'sections',
						type: '{ value, color?, tooltip? }[]',
						default: '',
						description:
							'Requerido. Array de segmentos con porcentaje y color.',
					},
					{
						name: 'size',
						type: 'number',
						default: '120',
						description: 'Diámetro total del SVG en px.',
					},
					{
						name: 'thickness',
						type: 'number',
						default: '12',
						description: 'Grosor del anillo en px.',
					},
					{
						name: 'roundCaps',
						type: 'boolean',
						default: 'false',
						description:
							'Aplica strokeLinecap="round" a los segmentos.',
					},
					{
						name: 'label',
						type: 'ReactNode',
						default: '',
						description: 'Contenido centrado dentro del anillo.',
					},
					{
						name: 'rootColor',
						type: 'string',
						default: '"#e5e7eb"',
						description: 'Color del círculo de fondo.',
					},
				],
			},
			{
				id: 'semi-circle-progress',
				name: 'SemiCircleProgress',
				status: 'stable',
				description:
					'Indicador de progreso en semicírculo SVG. Ideal para mostrar métricas como velocímetros o gauges.',
				preview: SemiCircleProgressPreview,
				controls: [
					{
						type: 'number' as const,
						name: 'value',
						label: 'value %',
						default: 65,
						min: 0,
						max: 100,
						step: 5,
					},
					{
						type: 'number' as const,
						name: 'size',
						label: 'size',
						default: 200,
						min: 100,
						max: 360,
						step: 20,
					},
					{
						type: 'number' as const,
						name: 'thickness',
						label: 'thickness',
						default: 16,
						min: 4,
						max: 40,
						step: 2,
					},
					{
						type: 'select' as const,
						name: 'orientation',
						label: 'orientation',
						default: 'up',
						options: ['up', 'down'],
					},
				],
				controlledPreview: (v: Record<string, any>) => (
					<SemiCircleProgress
						value={v.value as number}
						size={v.size as number}
						thickness={v.thickness as number}
						orientation={v.orientation as any}
						label={
							<p className='text-center text-sm font-semibold text-zinc-200'>
								{v.value as number}%
							</p>
						}
					/>
				),
				props: [
					{
						name: 'value',
						type: 'number',
						default: '',
						description:
							'Requerido. Porcentaje de progreso (0-100).',
					},
					{
						name: 'size',
						type: 'number',
						default: '200',
						description: 'Ancho del SVG en px.',
					},
					{
						name: 'thickness',
						type: 'number',
						default: '16',
						description: 'Grosor del arco en px.',
					},
					{
						name: 'color',
						type: 'string',
						default: 'rgb(99 102 241)',
						description: 'Color del arco de progreso.',
					},
					{
						name: 'emptySegmentColor',
						type: 'string',
						default: '"#e5e7eb"',
						description: 'Color del arco vacío.',
					},
					{
						name: 'orientation',
						type: '"up" | "down"',
						default: '"up"',
						description: 'Dirección del semicírculo.',
					},
					{
						name: 'label',
						type: 'ReactNode',
						default: '',
						description: 'Contenido centrado debajo del arco.',
					},
				],
			},
			{
				id: 'spoiler',
				name: 'Spoiler',
				status: 'stable',
				description:
					'Recorta contenido largo a una altura máxima y expande/colapsa con un botón de texto configurable.',
				preview: SpoilerPreview,
				controls: [
					{
						type: 'number' as const,
						name: 'maxHeight',
						label: 'maxHeight (px)',
						default: 60,
						min: 20,
						max: 200,
						step: 10,
					},
					{
						type: 'text' as const,
						name: 'showLabel',
						label: 'showLabel',
						default: 'Show more',
					},
					{
						type: 'text' as const,
						name: 'hideLabel',
						label: 'hideLabel',
						default: 'Show less',
					},
				],
				controlledPreview: (v: Record<string, any>) => (
					<div className='w-80'>
						<Spoiler
							maxHeight={v.maxHeight as number}
							showLabel={v.showLabel as string}
							hideLabel={v.hideLabel as string}>
							<p className='text-sm text-zinc-300'>
								Kivora is a modern React component library built
								with accessibility and developer experience in
								mind. It provides a rich set of components
								covering inputs, data display, navigation,
								overlays, feedback and layout. Each component is
								fully typed, themeable and ready for production
								use in your Next.js or React applications.
							</p>
						</Spoiler>
					</div>
				),
				props: [
					{
						name: 'maxHeight',
						type: 'number',
						default: '',
						description:
							'Requerido. Altura máxima visible en px antes de colapsar.',
					},
					{
						name: 'showLabel',
						type: 'ReactNode',
						default: '"Show more"',
						description:
							'Texto del botón cuando el contenido está colapsado.',
					},
					{
						name: 'hideLabel',
						type: 'ReactNode',
						default: '"Show less"',
						description:
							'Texto del botón cuando el contenido está expandido.',
					},
					{
						name: 'initiallyExpanded',
						type: 'boolean',
						default: 'false',
						description:
							'Si true, el contenido comienza expandido.',
					},
					{
						name: 'transitionDuration',
						type: 'number',
						default: '',
						description: 'Duración de la animación en ms.',
					},
				],
			},
			{
				id: 'color-swatch',
				name: 'ColorSwatch',
				status: 'stable',
				description:
					'Círculo o cuadrado de color para paletas y selectores. Renderiza un div semántico con aria-label del color.',
				preview: ColorSwatchPreview,
				controls: [
					{
						type: 'text' as const,
						name: 'color',
						label: 'color',
						default: '#7c3aed',
					},
					{
						type: 'number' as const,
						name: 'size',
						label: 'size (px)',
						default: 36,
						min: 16,
						max: 80,
						step: 4,
					},
					{
						type: 'boolean' as const,
						name: 'withShadow',
						label: 'withShadow',
						default: false,
					},
				],
				controlledPreview: (v: Record<string, any>) => (
					<div className='flex gap-3 items-center'>
						<ColorSwatch
							color={v.color as string}
							size={v.size as number}
							withShadow={v.withShadow as boolean}
						/>
						<ColorSwatch
							color='#2563eb'
							size={v.size as number}
							withShadow={v.withShadow as boolean}
						/>
						<ColorSwatch
							color='#16a34a'
							size={v.size as number}
							withShadow={v.withShadow as boolean}
						/>
						<ColorSwatch
							color='#dc2626'
							size={v.size as number}
							withShadow={v.withShadow as boolean}
						/>
					</div>
				),
				props: [
					{
						name: 'color',
						type: 'string',
						default: '',
						description:
							'Requerido. Valor CSS del color (hex, rgb, hsl, etc.).',
					},
					{
						name: 'size',
						type: 'number',
						default: '25',
						description: 'Tamaño en px del swatch.',
					},
					{
						name: 'radius',
						type: 'string | number',
						default: '"50%"',
						description: 'Radio de borde (círculo por defecto).',
					},
					{
						name: 'withShadow',
						type: 'boolean',
						default: 'false',
						description:
							'Añade sombra para resaltar colores claros.',
					},
					{
						name: 'component',
						type: 'ElementType',
						default: '"div"',
						description: 'Elemento raíz personalizado.',
					},
				],
			},
		],
	},
	{
		title: 'Feedback',
		items: [
			{
				id: 'alert',
				name: 'Alert',
				status: 'stable',
				description:
					'An inline notification for status messages. Supports four visual variants, a title, an icon and a close button.',
				preview: AlertPreview,
				controls: [
					{
						type: 'select' as const,
						name: 'variant',
						label: 'variant',
						default: 'light',
						options: ['light', 'filled', 'outline', 'default'],
					},
					{
						type: 'text' as const,
						name: 'title',
						label: 'title',
						default: 'Alert title',
					},
					{
						type: 'text' as const,
						name: 'children',
						label: 'message',
						default: 'This is an informational message.',
					},
				],
				controlledPreview: (v: Record<string, any>) => (
					<Alert
						variant={v.variant as any}
						title={v.title as string}>
						{v.children as string}
					</Alert>
				),
				props: [
					{
						name: 'variant',
						type: '"light" | "filled" | "outline" | "default"',
						default: '"light"',
						description: 'Visual style.',
					},
					{
						name: 'title',
						type: 'ReactNode',
						default: '',
						description: 'Bold heading rendered inside the alert.',
					},
					{
						name: 'icon',
						type: 'ReactNode',
						default: '',
						description:
							'Icon rendered to the left of the content.',
					},
					{
						name: 'withCloseButton',
						type: 'boolean',
						default: 'false',
						description:
							'Shows a close () button in the top-right corner.',
					},
					{
						name: 'onClose',
						type: '() => void',
						default: '',
						description: 'Called when the close button is clicked.',
					},
					{
						name: 'color',
						type: 'string',
						default: '',
						description: 'Custom colour override.',
					},
					{
						name: 'radius',
						type: 'string',
						default: '',
						description: 'Border radius override.',
					},
				],
			},
			{
				id: 'loader',
				name: 'Loader',
				status: 'stable',
				description:
					'An animated loading indicator in three styles: spinning oval, bouncing bars and bouncing dots.',
				preview: LoaderPreview,
				controls: [
					{
						type: 'select' as const,
						name: 'type',
						label: 'type',
						default: 'oval',
						options: ['oval', 'bars', 'dots'],
					},
					{
						type: 'select' as const,
						name: 'size',
						label: 'size',
						default: 'md',
						options: ['xs', 'sm', 'md', 'lg', 'xl'],
					},
				],
				controlledPreview: (v: Record<string, any>) => (
					<Loader
						type={v.type as any}
						size={v.size as any}
					/>
				),
				props: [
					{
						name: 'type',
						type: '"oval" | "bars" | "dots"',
						default: '"oval"',
						description: 'Visual style of the loader.',
					},
					{
						name: 'size',
						type: '"xs" | "sm" | "md" | "lg" | "xl" | number',
						default: '"md"',
						description: 'Diameter/height in px.',
					},
					{
						name: 'color',
						type: 'string',
						default: 'brand',
						description: 'Colour of the loader.',
					},
					{
						name: 'aria-label',
						type: 'string',
						default: '"Loading"',
						description: 'Accessible label for screen readers.',
					},
				],
			},
			{
				id: 'toast',
				name: 'Toast',
				status: 'stable',
				description:
					'Imperative toast notifications powered by Sonner. Place <Toaster /> once in your layout, then call toast() from anywhere.',
				preview: ToastPreview,
				controls: [
					{
						type: 'text' as const,
						name: 'message',
						label: 'message',
						default: 'Operation completed!',
					},
					{
						type: 'select' as const,
						name: 'variant',
						label: 'variant',
						default: 'default',
						options: [
							'default',
							'success',
							'error',
							'warning',
							'info',
						],
					},
				],
				controlledPreview: (v: Record<string, any>) => {
					const Demo = () => {
						const variantColors: Record<string, string> = {
							default: 'border-white/10 text-zinc-200',
							success: 'border-emerald-500/30 text-emerald-400',
							error: 'border-red-500/30 text-red-400',
							warning: 'border-amber-500/30 text-amber-400',
							info: 'border-blue-500/30 text-blue-400',
						};
						const fireToast = () => {
							const msg = v.message as string;
							switch (v.variant) {
								case 'success':
									toast.success(msg);
									break;
								case 'error':
									toast.error(msg);
									break;
								case 'warning':
									toast.warning(msg);
									break;
								case 'info':
									toast.info(msg);
									break;
								default:
									toast(msg);
							}
						};
						const cls =
							variantColors[v.variant as string] ??
							variantColors.default;
						return (
							<button
								onClick={fireToast}
								className={`px-4 py-2 rounded-lg text-sm font-medium border transition-colors hover:bg-white/5 ${cls}`}
								style={{
									background: 'rgba(255,255,255,0.03)',
								}}>
								Fire {v.variant} toast
							</button>
						);
					};
					return <Demo />;
				},
				props: [
					{
						name: 'toast(message)',
						type: 'function',
						default: '',
						description: 'Show a default toast.',
					},
					{
						name: 'toast.success(message)',
						type: 'function',
						default: '',
						description: 'Show a success toast.',
					},
					{
						name: 'toast.error(message)',
						type: 'function',
						default: '',
						description: 'Show an error toast.',
					},
					{
						name: 'toast.warning(message)',
						type: 'function',
						default: '',
						description: 'Show a warning toast.',
					},
					{
						name: 'toast.info(message)',
						type: 'function',
						default: '',
						description: 'Show an info toast.',
					},
					{
						name: 'toast.loading(message)',
						type: 'function → id',
						default: '',
						description: 'Show a loading toast; returns the id.',
					},
					{
						name: 'toast.dismiss(id?)',
						type: 'function',
						default: '',
						description: 'Dismiss one or all active toasts.',
					},
					{
						name: 'toast.promise(promise, labels)',
						type: 'function',
						default: '',
						description:
							'Tracks a promise with loading/success/error states.',
					},
				],
			},
			{
				id: 'notification',
				name: 'Notification',
				status: 'stable',
				description:
					'Componente de notificación inline con entrada animada. Muestra título, mensaje, icono opcional, estado de carga y botón de cierre.',
				preview: NotificationPreview,
				controls: [
					{
						type: 'text' as const,
						name: 'title',
						label: 'title',
						default: 'Archivos subidos',
					},
					{
						type: 'text' as const,
						name: 'message',
						label: 'message',
						default:
							'3 archivos subidos correctamente al servidor.',
					},
					{
						type: 'boolean' as const,
						name: 'loading',
						label: 'loading',
						default: false,
					},
					{
						type: 'boolean' as const,
						name: 'withCloseButton',
						label: 'withCloseButton',
						default: true,
					},
					{
						type: 'boolean' as const,
						name: 'withBorder',
						label: 'withBorder',
						default: true,
					},
				],
				controlledPreview: (v: Record<string, any>) => {
					const Demo = () => {
						const [visible, setVisible] = React.useState(true);
						return (
							<div className='flex flex-col items-start gap-3 w-full max-w-sm'>
								{visible ? (
									<Notification
										title={v.title as string}
										loading={v.loading as boolean}
										withCloseButton={
											v.withCloseButton as boolean
										}
										withBorder={v.withBorder as boolean}
										onClose={() => setVisible(false)}>
										{v.message as string}
									</Notification>
								) : (
									<button
										onClick={() => setVisible(true)}
										className='text-xs text-violet-400 hover:text-violet-300 transition-colors'>
										← Restaurar notificación
									</button>
								)}
							</div>
						);
					};
					return <Demo />;
				},
				props: [
					{
						name: 'title',
						type: 'ReactNode',
						default: '',
						description:
							'Encabezado en negrita de la notificación.',
					},
					{
						name: 'children',
						type: 'ReactNode',
						default: '',
						description: 'Cuerpo del mensaje.',
					},
					{
						name: 'icon',
						type: 'ReactNode',
						default: '',
						description: 'Icono a la izquierda del contenido.',
					},
					{
						name: 'loading',
						type: 'boolean',
						default: 'false',
						description: 'Muestra un Loader en lugar del icono.',
					},
					{
						name: 'withCloseButton',
						type: 'boolean',
						default: 'true',
						description: 'Muestra el botón × para cerrar.',
					},
					{
						name: 'onClose',
						type: '() => void',
						default: '',
						description: 'Llamado al pulsar el botón de cierre.',
					},
					{
						name: 'withBorder',
						type: 'boolean',
						default: 'true',
						description: 'Añade borde exterior.',
					},
					{
						name: 'color',
						type: 'string',
						default: '',
						description: 'Color de acento del icono.',
					},
					{
						name: 'radius',
						type: 'string',
						default: '',
						description: 'Radio de borde.',
					},
				],
			},
			{
				id: 'loading-overlay',
				name: 'LoadingOverlay',
				status: 'stable',
				description:
					'Overlay absoluto con un Loader centrado. Se posiciona sobre el contenedor relativo más cercano. Ideal para bloquear secciones durante operaciones asíncronas.',
				preview: LoadingOverlayPreview,
				controls: [
					{
						type: 'select' as const,
						name: 'loaderType',
						label: 'loader type',
						default: 'dots',
						options: ['oval', 'bars', 'dots'],
					},
					{
						type: 'number' as const,
						name: 'blur',
						label: 'blur',
						default: 2,
						min: 0,
						max: 10,
						step: 1,
					},
					{
						type: 'number' as const,
						name: 'duration',
						label: 'duration (ms)',
						default: 2500,
						min: 500,
						max: 8000,
						step: 500,
					},
				],
				controlledPreview: (v: Record<string, any>) => {
					const Demo = () => {
						const [loading, setLoading] = React.useState(false);
						const trigger = () => {
							setLoading(true);
							setTimeout(
								() => setLoading(false),
								v.duration as number,
							);
						};
						return (
							<div className='flex flex-col items-center gap-4'>
								<div
									className='relative w-64 h-32 rounded-xl border border-white/10 flex items-center justify-center'
									style={{
										background: 'rgba(255,255,255,0.03)',
									}}>
									<p className='text-sm text-zinc-400'>
										Contenido de la sección
									</p>
									<LoadingOverlay
										visible={loading}
										loaderProps={{
											type: v.loaderType as any,
											size: 'md',
										}}
										overlayProps={{
											blur: v.blur as number,
											opacity: 0.6,
											color: '#09090b',
										}}
									/>
								</div>
								<button
									onClick={trigger}
									disabled={loading}
									className='px-4 py-1.5 rounded-lg text-xs font-medium border border-white/10 text-zinc-300 hover:bg-white/5 transition-colors disabled:opacity-50'
									style={{
										background: 'rgba(255,255,255,0.04)',
									}}>
									{loading ? 'Cargando…' : 'Simular carga'}
								</button>
							</div>
						);
					};
					return <Demo />;
				},
				props: [
					{
						name: 'visible',
						type: 'boolean',
						default: '',
						description:
							'Requerido. Controla si el overlay está visible.',
					},
					{
						name: 'loaderProps',
						type: '{ type?, size? }',
						default: '',
						description:
							'Props pasadas al componente Loader interno.',
					},
					{
						name: 'overlayProps',
						type: '{ blur?, opacity?, color? }',
						default: '',
						description: 'Personaliza el fondo difuminado.',
					},
					{
						name: 'zIndex',
						type: 'number',
						default: '400',
						description: 'z-index del overlay.',
					},
					{
						name: 'transitionDuration',
						type: 'number',
						default: '',
						description:
							'Duración de la animación de entrada/salida en ms.',
					},
				],
			},
		],
	},
	{
		title: 'Typography',
		items: [
			{
				id: 'text',
				name: 'Text',
				status: 'stable' as const,
				description:
					'Polymorphic text element with size, weight, color, truncation and line-clamp helpers.',
				preview: TextPreview,
				controls: [
					{
						type: 'text' as const,
						name: 'children',
						label: 'content',
						default: 'The quick brown fox jumps over the lazy dog.',
					},
					{
						type: 'select' as const,
						name: 'size',
						label: 'size',
						default: 'md',
						options: ['xs', 'sm', 'md', 'lg', 'xl'],
					},
					{
						type: 'select' as const,
						name: 'fw',
						label: 'weight',
						default: '400',
						options: ['300', '400', '500', '600', '700', '900'],
					},
				],
				controlledPreview: (v: Record<string, any>) => (
					<Text
						size={v.size as any}
						fw={Number(v.fw) as any}>
						{v.children as string}
					</Text>
				),
				props: [
					{
						name: 'size',
						type: '"xs" | "sm" | "md" | "lg" | "xl"',
						default: '"md"',
						description: 'Font size preset.',
					},
					{
						name: 'fw',
						type: '100 | 200 | … | 900',
						default: '',
						description: 'Font weight.',
					},
					{
						name: 'c',
						type: 'string',
						default: '',
						description: 'Text color (any CSS value).',
					},
					{
						name: 'truncate',
						type: 'boolean | "start" | "end"',
						default: '',
						description: 'Clip overflowing text with an ellipsis.',
					},
					{
						name: 'lineClamp',
						type: 'number',
						default: '',
						description: 'Clamp text after N lines.',
					},
					{
						name: 'inline',
						type: 'boolean',
						default: 'false',
						description: 'Render as inline element.',
					},
					{
						name: 'span',
						type: 'boolean',
						default: 'false',
						description: 'Render as <span> instead of <p>.',
					},
					{
						name: 'component',
						type: 'React.ElementType',
						default: '"p"',
						description: 'Polymorphic root element.',
					},
				],
			},
			{
				id: 'title',
				name: 'Title',
				status: 'stable' as const,
				description:
					'Semantic heading element (h1–h6) with pre-configured size and weight per level.',
				preview: TitlePreview,
				controls: [
					{
						type: 'text' as const,
						name: 'children',
						label: 'content',
						default: 'Build something great',
					},
					{
						type: 'select' as const,
						name: 'order',
						label: 'order',
						default: '1',
						options: ['1', '2', '3', '4', '5', '6'],
					},
				],
				controlledPreview: (v: Record<string, any>) => (
					<Title order={Number(v.order) as any}>
						{v.children as string}
					</Title>
				),
				props: [
					{
						name: 'order',
						type: '1 | 2 | 3 | 4 | 5 | 6',
						default: '1',
						description: 'Heading level rendered.',
					},
					{
						name: 'size',
						type: 'string',
						default: '',
						description: 'Override the font-size CSS value.',
					},
					{
						name: 'fw',
						type: 'number',
						default: '',
						description: 'Override font weight.',
					},
					{
						name: 'c',
						type: 'string',
						default: '',
						description: 'Override text color.',
					},
				],
			},
			{
				id: 'blockquote',
				name: 'Blockquote',
				status: 'stable' as const,
				description:
					'Styled blockquote with a left brand border, optional icon and cite attribution.',
				preview: BlockquotePreview,
				controls: [
					{
						type: 'text' as const,
						name: 'children',
						label: 'quote',
						default:
							'Design is not just what it looks like and feels like. Design is how it works.',
					},
					{
						type: 'text' as const,
						name: 'cite',
						label: 'cite',
						default: 'Steve Jobs',
					},
				],
				controlledPreview: (v: Record<string, any>) => (
					<div className='max-w-sm'>
						<Blockquote cite={v.cite as string}>
							{v.children as string}
						</Blockquote>
					</div>
				),
				props: [
					{
						name: 'cite',
						type: 'string',
						default: '',
						description: 'Attribution shown below the quote.',
					},
					{
						name: 'icon',
						type: 'React.ReactNode',
						default: '',
						description: 'Icon rendered at the top of the quote.',
					},
				],
			},
			{
				id: 'code',
				name: 'Code',
				status: 'stable' as const,
				description:
					'Inline or block code with monospace font and subtle background.',
				preview: CodePreview,
				controls: [
					{
						type: 'text' as const,
						name: 'children',
						label: 'code',
						default:
							"import { Button } from '@kivora/react';\n\nfunction App() {\n  return <Button variant='solid'>Click me</Button>;\n}",
					},
					{
						type: 'boolean' as const,
						name: 'block',
						label: 'block',
						default: true,
					},
					{
						type: 'select' as const,
						name: 'language',
						label: 'language',
						default: 'typescript',
						options: [
							'typescript',
							'javascript',
							'tsx',
							'jsx',
							'bash',
							'json',
							'css',
							'html',
							'python',
						],
					},
					{
						type: 'boolean' as const,
						name: 'showLineNumbers',
						label: 'showLineNumbers',
						default: true,
					},
					{
						type: 'boolean' as const,
						name: 'copyable',
						label: 'copyable',
						default: false,
					},
				],
				controlledPreview: (v: Record<string, any>) => (
					<Code
						block={v.block as boolean}
						language={v.language as string}
						showLineNumbers={v.showLineNumbers as boolean}
						copyable={v.copyable as boolean}>
						{v.children as string}
					</Code>
				),
				props: [
					{
						name: 'children',
						type: 'ReactNode',
						default: '—',
						description:
							'Code to display. In block mode must be a string; inline accepts any ReactNode.',
					},
					{
						name: 'block',
						type: 'boolean',
						default: 'false',
						description:
							'Render as a code block with syntax highlighting instead of inline <code>.',
					},
					{
						name: 'language',
						type: 'string',
						default: '"typescript"',
						description:
							'Highlight.js language for syntax highlighting (block mode only).',
					},
					{
						name: 'showLineNumbers',
						type: 'boolean',
						default: 'false',
						description: 'Show line numbers (block mode only).',
					},
					{
						name: 'copyable',
						type: 'boolean',
						default: 'false',
						description:
							'Show a copy-to-clipboard button on hover.',
					},
					{
						name: 'highlighterStyle',
						type: "SyntaxHighlighterProps['style']",
						default: 'atomOneDark',
						description:
							'Syntax highlighter theme object from react-syntax-highlighter.',
					},
					{
						name: 'highlighterProps',
						type: 'Omit<SyntaxHighlighterProps, "language" | "style" | "showLineNumbers" | "children">',
						default: '—',
						description:
							'Extra props passed directly to SyntaxHighlighter (escape hatch).',
					},
					{
						name: 'className',
						type: 'string',
						default: '',
						description: 'Additional CSS class.',
					},
					{
						name: 'style',
						type: 'React.CSSProperties',
						default: '—',
						description:
							'Inline styles applied to the root element.',
					},
				],
			},
			{
				id: 'highlight',
				name: 'Highlight',
				status: 'stable' as const,
				description:
					'Wraps matched substrings inside a highlight mark element. Supports single or multiple terms.',
				preview: HighlightPreview,
				controls: [
					{
						type: 'text' as const,
						name: 'children',
						label: 'content',
						default: 'The quick brown fox jumps over the lazy dog',
					},
					{
						type: 'text' as const,
						name: 'highlight',
						label: 'highlight term',
						default: 'fox',
					},
				],
				controlledPreview: (v: Record<string, any>) => (
					<Highlight highlight={v.highlight as string}>
						{v.children as string}
					</Highlight>
				),
				props: [
					{
						name: 'highlight',
						type: 'string | string[]',
						default: '',
						description: 'Term(s) to highlight.',
					},
					{
						name: 'highlightColor',
						type: 'string',
						default: '',
						description: 'Custom highlight background color.',
					},
					{
						name: 'component',
						type: 'React.ElementType',
						default: '"mark"',
						description: 'Element wrapping each matched term.',
					},
				],
			},
			{
				id: 'mark',
				name: 'Mark',
				status: 'stable' as const,
				description:
					'Inline highlight wrapper rendered as <mark> with optional custom color.',
				preview: MarkPreview,
				controls: [
					{
						type: 'text' as const,
						name: 'children',
						label: 'content',
						default: 'important text',
					},
					{
						type: 'text' as const,
						name: 'color',
						label: 'color',
						default: '',
					},
				],
				controlledPreview: (v: Record<string, any>) => (
					<span className='text-sm text-zinc-300'>
						This is{' '}
						<Mark color={(v.color as string) || undefined}>
							{v.children as string}
						</Mark>{' '}
						in a sentence.
					</span>
				),
				props: [
					{
						name: 'color',
						type: 'string',
						default: '',
						description: 'Custom background color for the mark.',
					},
				],
			},
		],
	},
	{
		title: 'Navigation',
		items: [
			{
				id: 'tabs',
				name: 'Tabs',
				status: 'stable',
				description:
					'Compound tabs with animated indicator. Three variants (default, outline, pills), horizontal/vertical orientation and controlled/uncontrolled modes.',
				preview: TabsPreview,
				controls: [
					{
						type: 'select' as const,
						name: 'variant',
						label: 'variant',
						default: 'default',
						options: ['default', 'outline', 'pills'],
					},
					{
						type: 'select' as const,
						name: 'orientation',
						label: 'orientation',
						default: 'horizontal',
						options: ['horizontal', 'vertical'],
					},
					{
						type: 'boolean' as const,
						name: 'grow',
						label: 'tabs grow',
						default: false,
					},
				],
				controlledPreview: (v: Record<string, any>) => (
					<div className='w-full max-w-sm'>
						<Tabs
							defaultValue='overview'
							variant={v.variant as any}
							orientation={v.orientation as any}>
							<TabsList grow={v.grow as boolean}>
								<TabsTab value='overview'>Overview</TabsTab>
								<TabsTab value='settings'>Settings</TabsTab>
								<TabsTab value='members'>Members</TabsTab>
							</TabsList>
							<TabsPanel value='overview'>
								<p className='text-sm text-zinc-400 pt-2'>
									Overview panel content.
								</p>
							</TabsPanel>
							<TabsPanel value='settings'>
								<p className='text-sm text-zinc-400 pt-2'>
									Settings panel content.
								</p>
							</TabsPanel>
							<TabsPanel value='members'>
								<p className='text-sm text-zinc-400 pt-2'>
									Members panel content.
								</p>
							</TabsPanel>
						</Tabs>
					</div>
				),
				props: [
					{
						name: 'defaultValue',
						type: 'string',
						default: '',
						description: 'Initially selected tab (uncontrolled).',
					},
					{
						name: 'value',
						type: 'string',
						default: '',
						description: 'Controlled active tab value.',
					},
					{
						name: 'onChange',
						type: '(value: string) => void',
						default: '',
						description: 'Called when a tab is selected.',
					},
					{
						name: 'variant',
						type: '"default" | "outline" | "pills"',
						default: '"default"',
						description: 'Visual style of the tabs.',
					},
					{
						name: 'orientation',
						type: '"horizontal" | "vertical"',
						default: '"horizontal"',
						description: 'Layout direction.',
					},
					{
						name: 'keepMounted',
						type: 'boolean',
						default: 'true',
						description: 'Keep inactive panels in the DOM.',
					},
					{
						name: 'Tabs.List grow',
						type: 'boolean',
						default: 'false',
						description:
							'Make tabs expand to fill available width.',
					},
					{
						name: 'Tabs.Tab value',
						type: 'string',
						default: '',
						description: 'Required identifier for the tab.',
					},
					{
						name: 'Tabs.Panel value',
						type: 'string',
						default: '',
						description: 'Must match a Tabs.Tab value.',
					},
				],
			},
			{
				id: 'anchor',
				name: 'Anchor',
				status: 'stable' as const,
				description:
					'Styled anchor element with underline control and polymorphic rendering.',
				preview: AnchorPreview,
				controls: [
					{
						type: 'text' as const,
						name: 'children',
						label: 'label',
						default: 'Visit our documentation',
					},
					{
						type: 'select' as const,
						name: 'underline',
						label: 'underline',
						default: 'hover',
						options: ['always', 'hover', 'never'],
					},
				],
				controlledPreview: (v: Record<string, any>) => (
					<Anchor
						href='#'
						underline={v.underline as any}>
						{v.children as string}
					</Anchor>
				),
				props: [
					{
						name: 'underline',
						type: '"always" | "hover" | "never"',
						default: '"hover"',
						description: 'When to show the underline decoration.',
					},
					{
						name: 'href',
						type: 'string',
						default: '',
						description: 'Destination URL.',
					},
					{
						name: 'component',
						type: 'React.ElementType',
						default: '"a"',
						description: 'Polymorphic root element.',
					},
					{
						name: 'c',
						type: 'string',
						default: '',
						description: 'Override text color.',
					},
				],
			},
			{
				id: 'breadcrumbs',
				name: 'Breadcrumbs',
				status: 'stable' as const,
				description:
					'Accessible breadcrumb trail with a customisable separator.',
				preview: BreadcrumbsPreview,
				controls: [
					{
						type: 'text' as const,
						name: 'separator',
						label: 'separator',
						default: '/',
					},
				],
				controlledPreview: (v: Record<string, any>) => (
					<Breadcrumbs separator={v.separator as string}>
						<Anchor href='#'>Home</Anchor>
						<Anchor href='#'>Components</Anchor>
						<span className='text-zinc-400'>Breadcrumbs</span>
					</Breadcrumbs>
				),
				props: [
					{
						name: 'separator',
						type: 'React.ReactNode',
						default: '"/"',
						description:
							'Character or element rendered between items.',
					},
					{
						name: 'separatorMargin',
						type: 'number | string',
						default: '"0.375rem"',
						description: 'Space on each side of the separator.',
					},
				],
			},
			{
				id: 'nav-link',
				name: 'NavLink',
				status: 'stable' as const,
				description:
					'Sidebar-style nav item with label, description, left/right sections and collapsible children.',
				preview: NavLinkPreview,
				controls: [
					{
						type: 'text' as const,
						name: 'label',
						label: 'label',
						default: 'Dashboard',
					},
					{
						type: 'text' as const,
						name: 'description',
						label: 'description',
						default: 'Overview of your workspace',
					},
					{
						type: 'select' as const,
						name: 'variant',
						label: 'variant',
						default: 'light',
						options: ['filled', 'light', 'subtle'],
					},
					{
						type: 'boolean' as const,
						name: 'active',
						label: 'active',
						default: true,
					},
					{
						type: 'boolean' as const,
						name: 'disabled',
						label: 'disabled',
						default: false,
					},
				],
				controlledPreview: (v: Record<string, any>) => (
					<div className='w-64'>
						<NavLink
							label={v.label as string}
							description={v.description as string}
							variant={v.variant as any}
							active={v.active as boolean}
							disabled={v.disabled as boolean}
						/>
						<NavLink
							label='Settings'
							description='Account preferences'
							variant={v.variant as any}
						/>
						<NavLink
							label='Help'
							description='Documentation & support'
							variant={v.variant as any}
						/>
					</div>
				),
				props: [
					{
						name: 'label',
						type: 'React.ReactNode',
						default: '',
						description: 'Main text content.',
					},
					{
						name: 'description',
						type: 'React.ReactNode',
						default: '',
						description: 'Secondary line below the label.',
					},
					{
						name: 'leftSection',
						type: 'React.ReactNode',
						default: '',
						description: 'Icon or element on the left.',
					},
					{
						name: 'rightSection',
						type: 'React.ReactNode',
						default: '',
						description: 'Element anchored to the right.',
					},
					{
						name: 'active',
						type: 'boolean',
						default: 'false',
						description: 'Marks the link as currently active.',
					},
					{
						name: 'variant',
						type: '"filled" | "light" | "subtle"',
						default: '"light"',
						description: 'Active state visual style.',
					},
					{
						name: 'disabled',
						type: 'boolean',
						default: 'false',
						description: 'Prevents interaction.',
					},
				],
			},
			{
				id: 'pagination',
				name: 'Pagination',
				status: 'stable' as const,
				description:
					'Page-number control with siblings, boundaries, size variants and optional edge/control buttons.',
				preview: PaginationPreview,
				controls: [
					{
						type: 'number' as const,
						name: 'total',
						label: 'total pages',
						default: 10,
						min: 2,
						max: 50,
						step: 1,
					},
					{
						type: 'number' as const,
						name: 'siblings',
						label: 'siblings',
						default: 1,
						min: 0,
						max: 3,
						step: 1,
					},
					{
						type: 'select' as const,
						name: 'size',
						label: 'size',
						default: 'md',
						options: ['xs', 'sm', 'md', 'lg', 'xl'],
					},
					{
						type: 'boolean' as const,
						name: 'withEdges',
						label: 'withEdges',
						default: false,
					},
					{
						type: 'boolean' as const,
						name: 'disabled',
						label: 'disabled',
						default: false,
					},
				],
				controlledPreview: (v: Record<string, any>) => {
					const Demo = () => {
						const [page, setPage] = React.useState(1);
						return (
							<Pagination
								value={page}
								onChange={setPage}
								total={v.total as number}
								siblings={v.siblings as number}
								size={v.size as any}
								withEdges={v.withEdges as boolean}
								disabled={v.disabled as boolean}
							/>
						);
					};
					return <Demo />;
				},
				props: [
					{
						name: 'total',
						type: 'number',
						default: '',
						description: 'Total number of pages.',
					},
					{
						name: 'value',
						type: 'number',
						default: '',
						description: 'Controlled active page.',
					},
					{
						name: 'defaultValue',
						type: 'number',
						default: '1',
						description: 'Initial page (uncontrolled).',
					},
					{
						name: 'onChange',
						type: '(page: number) => void',
						default: '',
						description: 'Called when a page is selected.',
					},
					{
						name: 'siblings',
						type: 'number',
						default: '1',
						description: 'Pages shown either side of active.',
					},
					{
						name: 'boundaries',
						type: 'number',
						default: '1',
						description: 'Pages always visible at start/end.',
					},
					{
						name: 'withEdges',
						type: 'boolean',
						default: 'false',
						description: 'Show first / last page buttons.',
					},
					{
						name: 'withControls',
						type: 'boolean',
						default: 'true',
						description: 'Show prev / next buttons.',
					},
					{
						name: 'size',
						type: '"xs" | "sm" | "md" | "lg" | "xl"',
						default: '"md"',
						description: 'Button size.',
					},
					{
						name: 'disabled',
						type: 'boolean',
						default: 'false',
						description: 'Disables all controls.',
					},
				],
			},
			{
				id: 'stepper',
				name: 'Stepper',
				status: 'stable' as const,
				description:
					'Multi-step progress indicator with horizontal/vertical layout, completed icons and step-click navigation.',
				preview: StepperPreview,
				controls: [
					{
						type: 'select' as const,
						name: 'orientation',
						label: 'orientation',
						default: 'horizontal',
						options: ['horizontal', 'vertical'],
					},
					{
						type: 'number' as const,
						name: 'iconSize',
						label: 'iconSize',
						default: 38,
						min: 24,
						max: 60,
						step: 2,
					},
				],
				controlledPreview: (v: Record<string, any>) => {
					const Demo = () => {
						const [active, setActive] = React.useState(1);
						return (
							<div className='w-full max-w-sm space-y-4'>
								<Stepper
									active={active}
									onStepClick={setActive}
									orientation={v.orientation as any}
									iconSize={v.iconSize as number}>
									<StepperStep
										label='Account'
										description='Create account'
									/>
									<StepperStep
										label='Profile'
										description='Set up profile'
									/>
									<StepperStep
										label='Confirm'
										description='Review & confirm'
									/>
									<StepperCompleted>
										<p className='text-sm text-green-400'>
											All steps complete!
										</p>
									</StepperCompleted>
								</Stepper>
								<div className='flex gap-2'>
									<Button
										size='xs'
										variant='outline'
										onClick={() =>
											setActive((a) => Math.max(0, a - 1))
										}>
										Back
									</Button>
									<Button
										size='xs'
										onClick={() =>
											setActive((a) => Math.min(3, a + 1))
										}>
										Next
									</Button>
								</div>
							</div>
						);
					};
					return <Demo />;
				},
				props: [
					{
						name: 'active',
						type: 'number',
						default: '',
						description:
							'Index of the current active step (0-based).',
					},
					{
						name: 'onStepClick',
						type: '(step: number) => void',
						default: '',
						description: 'Called when a step icon is clicked.',
					},
					{
						name: 'orientation',
						type: '"horizontal" | "vertical"',
						default: '"horizontal"',
						description: 'Layout direction.',
					},
					{
						name: 'iconSize',
						type: 'number',
						default: '38',
						description: 'Size in px of the step icon circles.',
					},
					{
						name: 'Stepper.Step label',
						type: 'React.ReactNode',
						default: '',
						description: 'Title shown beside/below the icon.',
					},
					{
						name: 'Stepper.Step description',
						type: 'React.ReactNode',
						default: '',
						description: 'Subtitle shown below the label.',
					},
				],
			},
			{
				id: 'table-of-contents',
				name: 'TableOfContents',
				status: 'stable' as const,
				description:
					'Vertical link list that highlights the active section; supports indented hierarchy via the order field.',
				preview: TableOfContentsPreview,
				props: [
					{
						name: 'links',
						type: 'TableOfContentsItem[]',
						default: '',
						description: 'Array of { value, label, order? } items.',
					},
					{
						name: 'active',
						type: 'string',
						default: '',
						description: 'value of the currently active link.',
					},
					{
						name: 'onItemClick',
						type: '(item: TableOfContentsItem) => void',
						default: '',
						description: 'Called when a link is clicked.',
					},
				],
			},
		],
	},
	{
		title: 'Layout',
		items: [
			{
				id: 'stack',
				name: 'Stack',
				status: 'stable',
				description:
					'Vertical flex container — stacks children in a column with configurable gap, alignment, and justify.',
				preview: StackPreview,
				controls: [
					{
						type: 'select' as const,
						name: 'gap',
						label: 'gap',
						default: '12px',
						options: ['4px', '8px', '12px', '16px', '24px', '32px'],
					},
					{
						type: 'select' as const,
						name: 'align',
						label: 'align',
						default: 'stretch',
						options: [
							'stretch',
							'flex-start',
							'center',
							'flex-end',
						],
					},
					{
						type: 'select' as const,
						name: 'justify',
						label: 'justify',
						default: 'flex-start',
						options: [
							'flex-start',
							'center',
							'flex-end',
							'space-between',
						],
					},
				],
				controlledPreview: (v: Record<string, any>) => (
					<div
						style={{
							height: 240,
							border: '1px solid #3f3f46',
							borderRadius: 8,
							padding: 12,
							width: '100%',
							maxWidth: 320,
						}}>
						<Stack
							gap={v.gap as string}
							align={v.align as any}
							justify={v.justify as any}>
							{['Item A', 'Item B', 'Item C'].map((item) => (
								<div
									key={item}
									style={{
										background: 'rgba(59,130,246,0.15)',
										border: '1px solid rgba(59,130,246,0.4)',
										borderRadius: 4,
										padding: '6px 12px',
										fontSize: 13,
										color: '#93c5fd',
									}}>
									{item}
								</div>
							))}
						</Stack>
					</div>
				),
				props: [
					{
						name: 'gap',
						type: 'number | string',
						default: '"1rem"',
						description: 'Space between children.',
					},
					{
						name: 'align',
						type: 'CSSProperties["alignItems"]',
						default: '"stretch"',
						description: 'Cross-axis alignment.',
					},
					{
						name: 'justify',
						type: 'CSSProperties["justifyContent"]',
						default: '"flex-start"',
						description: 'Main-axis distribution.',
					},
					{
						name: 'component',
						type: 'React.ElementType',
						default: '"div"',
						description: 'Root element type.',
					},
				],
			},
			{
				id: 'group',
				name: 'Group',
				status: 'stable',
				description:
					'Horizontal flex container — rows children side-by-side with gap, wrapping, grow, and justify support.',
				preview: GroupPreview,
				controls: [
					{
						type: 'select' as const,
						name: 'gap',
						label: 'gap',
						default: '8px',
						options: ['4px', '8px', '12px', '16px', '24px', '32px'],
					},
					{
						type: 'select' as const,
						name: 'align',
						label: 'align',
						default: 'center',
						options: [
							'flex-start',
							'center',
							'flex-end',
							'stretch',
							'baseline',
						],
					},
					{
						type: 'select' as const,
						name: 'justify',
						label: 'justify',
						default: 'flex-start',
						options: [
							'flex-start',
							'center',
							'flex-end',
							'space-between',
							'space-around',
						],
					},
					{
						type: 'boolean' as const,
						name: 'wrap',
						label: 'wrap',
						default: true,
					},
					{
						type: 'boolean' as const,
						name: 'grow',
						label: 'grow',
						default: false,
					},
				],
				controlledPreview: (v: Record<string, any>) => (
					<div
						style={{
							border: '1px solid #3f3f46',
							borderRadius: 8,
							padding: 12,
							width: '100%',
							maxWidth: 400,
						}}>
						<Group
							gap={v.gap as string}
							align={v.align as any}
							justify={v.justify as any}
							wrap={v.wrap ? 'wrap' : 'nowrap'}
							grow={v.grow as boolean}>
							{['Alpha', 'Beta', 'Gamma', 'Delta'].map((item) => (
								<div
									key={item}
									style={{
										background: 'rgba(139,92,246,0.15)',
										border: '1px solid rgba(139,92,246,0.4)',
										borderRadius: 4,
										padding: '6px 12px',
										fontSize: 13,
										color: '#c4b5fd',
										whiteSpace: 'nowrap',
									}}>
									{item}
								</div>
							))}
						</Group>
					</div>
				),
				props: [
					{
						name: 'gap',
						type: 'number | string',
						default: '"0.5rem"',
						description: 'Space between children.',
					},
					{
						name: 'align',
						type: 'CSSProperties["alignItems"]',
						default: '"center"',
						description: 'Cross-axis alignment.',
					},
					{
						name: 'justify',
						type: 'CSSProperties["justifyContent"]',
						default: '"flex-start"',
						description: 'Main-axis distribution.',
					},
					{
						name: 'wrap',
						type: 'CSSProperties["flexWrap"]',
						default: '"wrap"',
						description: 'Whether children wrap to next line.',
					},
					{
						name: 'grow',
						type: 'boolean',
						default: 'false',
						description: 'Makes every child grow to equal width.',
					},
				],
			},
			{
				id: 'flex',
				name: 'Flex',
				status: 'stable',
				description:
					'Fully configurable flex container. When you need direction, rowGap/columnGap, or fine-grained flex control.',
				preview: FlexPreview,
				controls: [
					{
						type: 'select' as const,
						name: 'direction',
						label: 'direction',
						default: 'row',
						options: [
							'row',
							'row-reverse',
							'column',
							'column-reverse',
						],
					},
					{
						type: 'select' as const,
						name: 'gap',
						label: 'gap',
						default: '12px',
						options: ['4px', '8px', '12px', '16px', '24px'],
					},
					{
						type: 'select' as const,
						name: 'align',
						label: 'align',
						default: 'stretch',
						options: [
							'flex-start',
							'center',
							'flex-end',
							'stretch',
							'baseline',
						],
					},
					{
						type: 'select' as const,
						name: 'justify',
						label: 'justify',
						default: 'flex-start',
						options: [
							'flex-start',
							'center',
							'flex-end',
							'space-between',
							'space-around',
						],
					},
					{
						type: 'select' as const,
						name: 'wrap',
						label: 'wrap',
						default: 'nowrap',
						options: ['nowrap', 'wrap', 'wrap-reverse'],
					},
				],
				controlledPreview: (v: Record<string, any>) => (
					<div
						style={{
							border: '1px solid #3f3f46',
							borderRadius: 8,
							padding: 12,
							width: '100%',
							maxWidth: 400,
							minHeight: 120,
						}}>
						<Flex
							direction={v.direction as any}
							gap={v.gap as string}
							align={v.align as any}
							justify={v.justify as any}
							wrap={v.wrap as any}
							style={{ minHeight: 96 }}>
							{['One', 'Two', 'Three'].map((item, i) => (
								<div
									key={item}
									style={{
										background: 'rgba(20,184,166,0.15)',
										border: '1px solid rgba(20,184,166,0.4)',
										borderRadius: 4,
										padding: `${8 + i * 4}px 12px`,
										fontSize: 13,
										color: '#5eead4',
									}}>
									{item}
								</div>
							))}
						</Flex>
					</div>
				),
				props: [
					{
						name: 'direction',
						type: 'CSSProperties["flexDirection"]',
						default: '"row"',
						description: 'Flex direction.',
					},
					{
						name: 'gap',
						type: 'number | string',
						default: '—',
						description: 'Uniform gap between children.',
					},
					{
						name: 'rowGap',
						type: 'number | string',
						default: '—',
						description: 'Gap between rows.',
					},
					{
						name: 'columnGap',
						type: 'number | string',
						default: '—',
						description: 'Gap between columns.',
					},
					{
						name: 'align',
						type: 'CSSProperties["alignItems"]',
						default: '—',
						description: 'Cross-axis alignment.',
					},
					{
						name: 'justify',
						type: 'CSSProperties["justifyContent"]',
						default: '—',
						description: 'Main-axis distribution.',
					},
					{
						name: 'wrap',
						type: 'CSSProperties["flexWrap"]',
						default: '—',
						description: 'Flex wrap mode.',
					},
				],
			},
			{
				id: 'grid',
				name: 'Grid / Grid.Col',
				status: 'stable',
				description:
					'12-column CSS grid layout. Use Grid.Col with span and offset to place children precisely.',
				preview: GridPreview,
				controls: [
					{
						type: 'number' as const,
						name: 'columns',
						label: 'columns',
						default: 12,
						min: 1,
						max: 24,
						step: 1,
					},
					{
						type: 'select' as const,
						name: 'gutter',
						label: 'gutter',
						default: '1rem',
						options: [
							'0.25rem',
							'0.5rem',
							'1rem',
							'1.5rem',
							'2rem',
						],
					},
				],
				controlledPreview: (v: Record<string, any>) => (
					<Grid
						columns={v.columns as number}
						gutter={v.gutter as string}
						style={{ width: '100%', maxWidth: 400 }}>
						{[4, 8, 3, 9, 6, 6, 12].map((span, i) => (
							<GridCol
								key={i}
								span={Math.min(span, v.columns as number)}>
								<div
									style={{
										background: 'rgba(249,115,22,0.15)',
										border: '1px solid rgba(249,115,22,0.4)',
										borderRadius: 4,
										padding: '8px 4px',
										fontSize: 12,
										color: '#fdba74',
										textAlign: 'center',
									}}>
									{span}
								</div>
							</GridCol>
						))}
					</Grid>
				),
				props: [
					{
						name: 'columns',
						type: 'number',
						default: '12',
						description: 'Total number of grid columns.',
					},
					{
						name: 'gutter',
						type: 'number | string',
						default: '"1rem"',
						description: 'Gap between columns.',
					},
					{
						name: 'Col span',
						type: 'number | "auto" | "content"',
						default: '1',
						description: 'Number of columns the child occupies.',
					},
					{
						name: 'Col offset',
						type: 'number',
						default: '—',
						description: 'Empty columns to skip before this child.',
					},
				],
			},
			{
				id: 'simple-grid',
				name: 'SimpleGrid',
				status: 'stable',
				description:
					'Equal-column CSS grid. Simpler than Grid when each cell has the same width.',
				preview: SimpleGridPreview,
				controls: [
					{
						type: 'number' as const,
						name: 'cols',
						label: 'cols',
						default: 3,
						min: 1,
						max: 6,
						step: 1,
					},
					{
						type: 'select' as const,
						name: 'spacing',
						label: 'spacing',
						default: '1rem',
						options: [
							'0.25rem',
							'0.5rem',
							'1rem',
							'1.5rem',
							'2rem',
						],
					},
				],
				controlledPreview: (v: Record<string, any>) => (
					<SimpleGrid
						cols={v.cols as number}
						spacing={v.spacing as string}
						style={{ width: '100%', maxWidth: 400 }}>
						{Array.from({ length: 6 }, (_, i) => (
							<div
								key={i}
								style={{
									background: 'rgba(234,179,8,0.15)',
									border: '1px solid rgba(234,179,8,0.4)',
									borderRadius: 4,
									padding: '12px 0',
									fontSize: 13,
									color: '#fde047',
									textAlign: 'center',
								}}>
								Cell {i + 1}
							</div>
						))}
					</SimpleGrid>
				),
				props: [
					{
						name: 'cols',
						type: 'number | { base?, sm?, md?, lg?, xl? }',
						default: '2',
						description:
							'Number of columns (or responsive object).',
					},
					{
						name: 'spacing',
						type: 'number | string',
						default: '"1rem"',
						description: 'Column gap.',
					},
					{
						name: 'verticalSpacing',
						type: 'number | string',
						default: '—',
						description:
							'Row gap (defaults to spacing when omitted).',
					},
				],
			},
			{
				id: 'center',
				name: 'Center',
				status: 'stable',
				description:
					'Centers children both horizontally and vertically. Inline mode uses inline-flex.',
				preview: CenterPreview,
				controls: [
					{
						type: 'boolean' as const,
						name: 'inline',
						label: 'inline',
						default: false,
					},
				],
				controlledPreview: (v: Record<string, any>) => (
					<div
						style={{
							border: '1px solid #3f3f46',
							borderRadius: 8,
							padding: 12,
							width: '100%',
							maxWidth: 320,
							height: 160,
						}}>
						<Center
							inline={v.inline as boolean}
							style={{ width: '100%', height: '100%' }}>
							<div
								style={{
									background: 'rgba(59,130,246,0.15)',
									border: '1px solid rgba(59,130,246,0.4)',
									borderRadius: 4,
									padding: '8px 16px',
									fontSize: 13,
									color: '#93c5fd',
								}}>
								Centered content
							</div>
						</Center>
					</div>
				),
				props: [
					{
						name: 'inline',
						type: 'boolean',
						default: 'false',
						description: 'Uses inline-flex instead of flex.',
					},
					{
						name: 'component',
						type: 'React.ElementType',
						default: '"div"',
						description: 'Root element type.',
					},
				],
			},
			{
				id: 'container',
				name: 'Container',
				status: 'stable',
				description:
					'Constrains content width to a named size and centers it horizontally with auto margins.',
				preview: ContainerPreview,
				controls: [
					{
						type: 'select' as const,
						name: 'size',
						label: 'size',
						default: 'md',
						options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
					},
					{
						type: 'boolean' as const,
						name: 'fluid',
						label: 'fluid',
						default: false,
					},
				],
				controlledPreview: (v: Record<string, any>) => (
					<div
						style={{
							background: '#18181b',
							border: '1px dashed #52525b',
							borderRadius: 4,
							padding: 4,
							width: '100%',
						}}>
						<Container
							size={v.fluid ? undefined : (v.size as any)}
							fluid={v.fluid as boolean}
							style={{
								background: 'rgba(139,92,246,0.15)',
								border: '1px solid rgba(139,92,246,0.4)',
								borderRadius: 4,
								padding: '12px 16px',
							}}>
							<p
								style={{
									fontSize: 13,
									color: '#c4b5fd',
									margin: 0,
								}}>
								Container — size:{' '}
								{v.fluid ? 'fluid' : (v.size as string)}
							</p>
						</Container>
					</div>
				),
				props: [
					{
						name: 'size',
						type: '"xs" | "sm" | "md" | "lg" | "xl" | "2xl" | number',
						default: '"lg"',
						description:
							'Max-width preset (or arbitrary px value).',
					},
					{
						name: 'fluid',
						type: 'boolean',
						default: 'false',
						description: 'Removes max-width constraint.',
					},
				],
			},
			{
				id: 'space',
				name: 'Space',
				status: 'stable',
				description:
					'Renders an invisible spacer div with a specific height (h) or width (w) to add whitespace between elements.',
				preview: SpacePreview,
				controls: [
					{
						type: 'select' as const,
						name: 'h',
						label: 'h (height)',
						default: '32px',
						options: [
							'8px',
							'16px',
							'32px',
							'48px',
							'64px',
							'96px',
						],
					},
				],
				controlledPreview: (v: Record<string, any>) => (
					<Stack
						gap='0'
						style={{ width: '100%', maxWidth: 320 }}>
						<div
							style={{
								background: 'rgba(20,184,166,0.15)',
								border: '1px solid rgba(20,184,166,0.4)',
								borderRadius: 4,
								padding: '8px 12px',
								fontSize: 13,
								color: '#5eead4',
							}}>
							Element above
						</div>
						<div
							style={{
								position: 'relative',
								overflow: 'hidden',
							}}>
							<Space h={v.h as string} />
							<div
								style={{
									position: 'absolute',
									top: 0,
									left: 0,
									right: 0,
									bottom: 0,
									background:
										'repeating-linear-gradient(45deg, rgba(100,116,139,0.15) 0px, rgba(100,116,139,0.15) 4px, transparent 4px, transparent 10px)',
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
								}}>
								<span
									style={{
										fontSize: 11,
										color: '#94a3b8',
										background: '#18181b',
										padding: '2px 6px',
										borderRadius: 3,
									}}>
									h = {v.h as string}
								</span>
							</div>
						</div>
						<div
							style={{
								background: 'rgba(20,184,166,0.15)',
								border: '1px solid rgba(20,184,166,0.4)',
								borderRadius: 4,
								padding: '8px 12px',
								fontSize: 13,
								color: '#5eead4',
							}}>
							Element below
						</div>
					</Stack>
				),
				props: [
					{
						name: 'h',
						type: 'number | string',
						default: '—',
						description: 'Vertical space (height).',
					},
					{
						name: 'w',
						type: 'number | string',
						default: '—',
						description: 'Horizontal space (width).',
					},
				],
			},
			{
				id: 'aspect-ratio',
				name: 'AspectRatio',
				status: 'stable',
				description:
					'Preserves a given width-to-height ratio. Ideal for images, videos, and maps that must not distort.',
				preview: AspectRatioPreview,
				controls: [
					{
						type: 'select' as const,
						name: 'ratio',
						label: 'ratio',
						default: '16/9',
						options: ['1/1', '4/3', '16/9', '21/9', '9/16'],
					},
				],
				controlledPreview: (v: Record<string, any>) => {
					const [n, d] = (v.ratio as string).split('/').map(Number);
					return (
						<div style={{ width: '100%', maxWidth: 320 }}>
							<AspectRatio ratio={n / d}>
								<div
									style={{
										background: 'rgba(236,72,153,0.15)',
										border: '1px solid rgba(236,72,153,0.4)',
										borderRadius: 8,
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'center',
									}}>
									<span
										style={{
											fontSize: 13,
											color: '#f9a8d4',
										}}>
										{v.ratio as string}
									</span>
								</div>
							</AspectRatio>
						</div>
					);
				},
				props: [
					{
						name: 'ratio',
						type: 'number',
						default: '1',
						description: 'width ÷ height (e.g. 16/9, 4/3, 1).',
					},
				],
			},
			{
				id: 'app-shell',
				name: 'AppShell',
				status: 'stable',
				description:
					'Full-page layout primitive with sticky header, collapsible navbar, optional aside, and footer slots.',
				preview: AppShellPreview,
				props: [
					{
						name: 'header',
						type: '{ height: number | string }',
						default: '—',
						description: 'Header configuration.',
					},
					{
						name: 'navbar',
						type: '{ width, breakpoint?, collapsed? }',
						default: '—',
						description: 'Sidebar navbar configuration.',
					},
					{
						name: 'aside',
						type: '{ width, breakpoint?, collapsed? }',
						default: '—',
						description: 'Right-side aside configuration.',
					},
					{
						name: 'footer',
						type: '{ height: number | string }',
						default: '—',
						description: 'Footer configuration.',
					},
					{
						name: 'padding',
						type: 'number | string',
						default: '"1rem"',
						description: 'Inner padding for the main content area.',
					},
				],
			},
		],
	},
	{
		title: 'Overlays',
		items: [
			{
				id: 'overlay',
				name: 'Overlay',
				status: 'stable' as const,
				description:
					'Full-coverage dimming layer with optional blur, gradient and click handler. Used as a backdrop for modals and drawers.',
				preview: OverlayPreview,
				controls: [
					{
						type: 'number' as const,
						name: 'opacity',
						label: 'opacity',
						default: 0.6,
						min: 0,
						max: 1,
						step: 0.05,
					},
					{
						type: 'number' as const,
						name: 'blur',
						label: 'blur (px)',
						default: 0,
						min: 0,
						max: 20,
						step: 1,
					},
					{
						type: 'text' as const,
						name: 'color',
						label: 'color',
						default: '#000000',
					},
				],
				controlledPreview: (v: Record<string, any>) => (
					<div
						style={{
							position: 'relative',
							width: '100%',
							maxWidth: 320,
							height: 120,
							borderRadius: 8,
							overflow: 'hidden',
							border: '1px solid #3f3f46',
						}}>
						<div
							style={{
								padding: '12px 16px',
								fontSize: 13,
								color: '#a1a1aa',
							}}>
							Content beneath the overlay
						</div>
						<Overlay
							opacity={v.opacity as number}
							blur={v.blur as number}
							color={v.color as string}
						/>
					</div>
				),
				props: [
					{
						name: 'opacity',
						type: 'number',
						default: '0.6',
						description: 'Background opacity (0–1).',
					},
					{
						name: 'color',
						type: 'string',
						default: '"#000"',
						description: 'Overlay background color.',
					},
					{
						name: 'blur',
						type: 'number',
						default: '',
						description: 'Backdrop blur in px.',
					},
					{
						name: 'gradient',
						type: 'string',
						default: '',
						description:
							'CSS gradient string instead of solid color.',
					},
					{
						name: 'fixed',
						type: 'boolean',
						default: 'false',
						description: 'Use fixed positioning (viewport-wide).',
					},
					{
						name: 'onClick',
						type: '() => void',
						default: '',
						description: 'Handler when the overlay is clicked.',
					},
				],
			},
			{
				id: 'modal',
				name: 'Modal',
				status: 'stable' as const,
				description:
					'Accessible dialog with animated backdrop, compound header/body/footer, size variants and focus trap.',
				preview: ModalPreview,
				controls: [
					{
						type: 'select' as const,
						name: 'size',
						label: 'size',
						default: 'md',
						options: ['xs', 'sm', 'md', 'lg', 'xl', 'full'],
					},
					{
						type: 'text' as const,
						name: 'title',
						label: 'title',
						default: 'Modal title',
					},
					{
						type: 'boolean' as const,
						name: 'centered',
						label: 'centered',
						default: false,
					},
					{
						type: 'boolean' as const,
						name: 'withCloseButton',
						label: 'withCloseButton',
						default: true,
					},
				],
				controlledPreview: (v: Record<string, any>) => {
					const Demo = () => {
						const [opened, setOpened] = React.useState(false);
						return (
							<>
								<Button onClick={() => setOpened(true)}>
									Open Modal
								</Button>
								<Modal
									opened={opened}
									onClose={() => setOpened(false)}
									title={v.title as string}
									size={v.size as any}
									centered={v.centered as boolean}
									withCloseButton={
										v.withCloseButton as boolean
									}>
									<ModalBody>
										<p
											style={{
												margin: 0,
												fontSize: 14,
												color: '#a1a1aa',
											}}>
											Modal body content goes here. size:{' '}
											{v.size as string}.
										</p>
										<Group
											justify='flex-end'
											style={{ marginTop: 16 }}>
											<Button
												variant='subtle'
												onClick={() =>
													setOpened(false)
												}>
												Cancel
											</Button>
											<Button
												onClick={() =>
													setOpened(false)
												}>
												Confirm
											</Button>
										</Group>
									</ModalBody>
								</Modal>
							</>
						);
					};
					return <Demo />;
				},
				props: [
					{
						name: 'opened',
						type: 'boolean',
						default: '',
						description: 'Controls visibility.',
					},
					{
						name: 'onClose',
						type: '() => void',
						default: '',
						description: 'Called when the modal requests to close.',
					},
					{
						name: 'title',
						type: 'React.ReactNode',
						default: '',
						description: 'Heading rendered in ModalHeader.',
					},
					{
						name: 'size',
						type: '"xs" | "sm" | "md" | "lg" | "xl" | "full"',
						default: '"md"',
						description: 'Max width of the modal panel.',
					},
					{
						name: 'centered',
						type: 'boolean',
						default: 'false',
						description: 'Vertically center the modal.',
					},
					{
						name: 'withCloseButton',
						type: 'boolean',
						default: 'true',
						description: 'Show the × close button.',
					},
					{
						name: 'closeOnClickOutside',
						type: 'boolean',
						default: 'true',
						description: 'Close when clicking the overlay.',
					},
					{
						name: 'closeOnEscape',
						type: 'boolean',
						default: 'true',
						description: 'Close on Escape key.',
					},
					{
						name: 'zIndex',
						type: 'number',
						default: '300',
						description: 'CSS z-index of the modal.',
					},
				],
			},
			{
				id: 'drawer',
				name: 'Drawer',
				status: 'stable' as const,
				description:
					'Slide-in panel from any viewport edge with an animated backdrop.',
				preview: DrawerPreview,
				controls: [
					{
						type: 'select' as const,
						name: 'position',
						label: 'position',
						default: 'right',
						options: ['left', 'right', 'top', 'bottom'],
					},
					{
						type: 'text' as const,
						name: 'title',
						label: 'title',
						default: 'Drawer title',
					},
					{
						type: 'boolean' as const,
						name: 'withCloseButton',
						label: 'withCloseButton',
						default: true,
					},
				],
				controlledPreview: (v: Record<string, any>) => {
					const Demo = () => {
						const [opened, setOpened] = React.useState(false);
						return (
							<>
								<Button onClick={() => setOpened(true)}>
									Open Drawer
								</Button>
								<Drawer
									opened={opened}
									onClose={() => setOpened(false)}
									title={v.title as string}
									position={v.position as any}
									withCloseButton={
										v.withCloseButton as boolean
									}>
									<p
										style={{
											fontSize: 14,
											color: '#a1a1aa',
											margin: 0,
											padding: '12px 0',
										}}>
										Drawer content — position:{' '}
										{v.position as string}.
									</p>
								</Drawer>
							</>
						);
					};
					return <Demo />;
				},
				props: [
					{
						name: 'opened',
						type: 'boolean',
						default: '',
						description: 'Controls visibility.',
					},
					{
						name: 'onClose',
						type: '() => void',
						default: '',
						description:
							'Called when the drawer requests to close.',
					},
					{
						name: 'position',
						type: '"left" | "right" | "top" | "bottom"',
						default: '"right"',
						description: 'Which edge the drawer slides in from.',
					},
					{
						name: 'size',
						type: 'number | string',
						default: '"320px" / "40vh"',
						description:
							'Width (left/right) or height (top/bottom).',
					},
					{
						name: 'title',
						type: 'React.ReactNode',
						default: '',
						description: 'Header title text.',
					},
					{
						name: 'withCloseButton',
						type: 'boolean',
						default: 'true',
						description: 'Show the × close button.',
					},
					{
						name: 'closeOnClickOutside',
						type: 'boolean',
						default: 'true',
						description: 'Close when clicking the overlay.',
					},
					{
						name: 'closeOnEscape',
						type: 'boolean',
						default: 'true',
						description: 'Close on Escape key.',
					},
				],
			},
			{
				id: 'tooltip',
				name: 'Tooltip',
				status: 'stable' as const,
				description:
					'Hover-triggered label that appears around its trigger element with optional arrow and delay.',
				preview: TooltipPreview,
				controls: [
					{
						type: 'text' as const,
						name: 'label',
						label: 'label',
						default: 'Tooltip text',
					},
					{
						type: 'select' as const,
						name: 'position',
						label: 'position',
						default: 'top',
						options: [
							'top',
							'bottom',
							'left',
							'right',
							'top-start',
							'top-end',
							'bottom-start',
							'bottom-end',
						],
					},
					{
						type: 'boolean' as const,
						name: 'withArrow',
						label: 'withArrow',
						default: false,
					},
					{
						type: 'boolean' as const,
						name: 'disabled',
						label: 'disabled',
						default: false,
					},
				],
				controlledPreview: (v: Record<string, any>) => (
					<Tooltip
						label={v.label as string}
						position={v.position as any}
						withArrow={v.withArrow as boolean}
						disabled={v.disabled as boolean}>
						<Button variant='outline'>Hover me</Button>
					</Tooltip>
				),
				props: [
					{
						name: 'label',
						type: 'React.ReactNode',
						default: '',
						description: 'Text shown in the tooltip.',
					},
					{
						name: 'position',
						type: '"top" | "bottom" | "left" | "right"',
						default: '"top"',
						description: 'Where the tooltip appears.',
					},
					{
						name: 'withArrow',
						type: 'boolean',
						default: 'false',
						description: 'Show a pointing arrow.',
					},
					{
						name: 'delay',
						type: 'number',
						default: '0',
						description: 'Open delay in ms.',
					},
					{
						name: 'disabled',
						type: 'boolean',
						default: 'false',
						description: 'Suppress the tooltip.',
					},
					{
						name: 'multiline',
						type: 'boolean',
						default: 'false',
						description: 'Allow text wrapping.',
					},
					{
						name: 'width',
						type: 'number | string',
						default: '',
						description: 'Max width of the tooltip.',
					},
				],
			},
			{
				id: 'popover',
				name: 'Popover',
				status: 'stable' as const,
				description:
					'Click-triggered floating panel. Compound API: Popover → PopoverTarget + PopoverDropdown.',
				preview: PopoverPreview,
				controls: [
					{
						type: 'select' as const,
						name: 'position',
						label: 'position',
						default: 'bottom',
						options: [
							'top',
							'bottom',
							'left',
							'right',
							'bottom-start',
							'bottom-end',
						],
					},
					{
						type: 'boolean' as const,
						name: 'withArrow',
						label: 'withArrow',
						default: false,
					},
					{
						type: 'boolean' as const,
						name: 'closeOnClickOutside',
						label: 'closeOnClickOutside',
						default: true,
					},
				],
				controlledPreview: (v: Record<string, any>) => (
					<Popover
						position={v.position as any}
						withArrow={v.withArrow as boolean}
						closeOnClickOutside={v.closeOnClickOutside as boolean}>
						<PopoverTarget>
							<Button variant='outline'>Toggle popover</Button>
						</PopoverTarget>
						<PopoverDropdown>
							<p
								style={{
									margin: 0,
									fontSize: 13,
									color: '#a1a1aa',
									padding: '4px 0',
								}}>
								Popover content — position:{' '}
								{v.position as string}
							</p>
						</PopoverDropdown>
					</Popover>
				),
				props: [
					{
						name: 'opened',
						type: 'boolean',
						default: '',
						description: 'Controlled open state.',
					},
					{
						name: 'defaultOpened',
						type: 'boolean',
						default: 'false',
						description: 'Initial open state (uncontrolled).',
					},
					{
						name: 'onChange',
						type: '(opened: boolean) => void',
						default: '',
						description: 'Called when open state changes.',
					},
					{
						name: 'position',
						type: '"top" | "bottom" | "left" | "right" | …',
						default: '"bottom"',
						description: 'Preferred placement of the dropdown.',
					},
					{
						name: 'withArrow',
						type: 'boolean',
						default: 'false',
						description: 'Show arrow pointing to the trigger.',
					},
					{
						name: 'closeOnClickOutside',
						type: 'boolean',
						default: 'true',
						description: 'Close when clicking outside.',
					},
					{
						name: 'width',
						type: 'number | string | "target"',
						default: '',
						description:
							'Dropdown width. "target" matches trigger.',
					},
				],
			},
			{
				id: 'hover-card',
				name: 'HoverCard',
				status: 'stable' as const,
				description:
					'Hover-triggered floating card. Compound API: HoverCard → HoverCardTarget + HoverCardDropdown.',
				preview: HoverCardPreview,
				controls: [
					{
						type: 'number' as const,
						name: 'openDelay',
						label: 'openDelay (ms)',
						default: 0,
						min: 0,
						max: 1000,
						step: 50,
					},
					{
						type: 'number' as const,
						name: 'closeDelay',
						label: 'closeDelay (ms)',
						default: 150,
						min: 0,
						max: 1000,
						step: 50,
					},
					{
						type: 'select' as const,
						name: 'position',
						label: 'position',
						default: 'bottom',
						options: ['top', 'bottom', 'left', 'right'],
					},
					{
						type: 'boolean' as const,
						name: 'withArrow',
						label: 'withArrow',
						default: false,
					},
				],
				controlledPreview: (v: Record<string, any>) => (
					<HoverCard
						openDelay={v.openDelay as number}
						closeDelay={v.closeDelay as number}
						position={v.position as any}
						withArrow={v.withArrow as boolean}
						width={220}>
						<HoverCardTarget>
							<Button variant='outline'>Hover over me</Button>
						</HoverCardTarget>
						<HoverCardDropdown>
							<p
								style={{
									margin: 0,
									fontSize: 13,
									color: '#a1a1aa',
								}}>
								HoverCard content. Opens after{' '}
								{v.openDelay as number}ms.
							</p>
						</HoverCardDropdown>
					</HoverCard>
				),
				props: [
					{
						name: 'openDelay',
						type: 'number',
						default: '0',
						description: 'Delay before opening in ms.',
					},
					{
						name: 'closeDelay',
						type: 'number',
						default: '150',
						description: 'Delay before closing in ms.',
					},
					{
						name: 'position',
						type: '"top" | "bottom" | "left" | "right"',
						default: '"bottom"',
						description: 'Preferred placement.',
					},
					{
						name: 'width',
						type: 'number | string',
						default: '',
						description: 'Card width.',
					},
					{
						name: 'withArrow',
						type: 'boolean',
						default: 'false',
						description: 'Show arrow.',
					},
				],
			},
			{
				id: 'menu',
				name: 'Menu',
				status: 'stable' as const,
				description:
					'Dropdown context menu. Compound API: Menu → MenuTarget + MenuDropdown with MenuItem, MenuLabel, MenuDivider.',
				preview: MenuPreview,
				controls: [
					{
						type: 'select' as const,
						name: 'position',
						label: 'position',
						default: 'bottom-start',
						options: [
							'bottom',
							'bottom-start',
							'bottom-end',
							'top',
							'top-start',
							'top-end',
						],
					},
					{
						type: 'boolean' as const,
						name: 'withArrow',
						label: 'withArrow',
						default: false,
					},
					{
						type: 'boolean' as const,
						name: 'closeOnItemClick',
						label: 'closeOnItemClick',
						default: true,
					},
				],
				controlledPreview: (v: Record<string, any>) => (
					<Menu
						position={v.position as any}
						withArrow={v.withArrow as boolean}
						closeOnItemClick={v.closeOnItemClick as boolean}>
						<MenuTarget>
							<Button variant='outline'>Open menu</Button>
						</MenuTarget>
						<MenuDropdown>
							<MenuLabel>Application</MenuLabel>
							<MenuItem>Settings</MenuItem>
							<MenuItem>Profile</MenuItem>
							<MenuDivider />
							<MenuLabel>Danger zone</MenuLabel>
							<MenuItem color='red'>Delete account</MenuItem>
						</MenuDropdown>
					</Menu>
				),
				props: [
					{
						name: 'opened',
						type: 'boolean',
						default: '',
						description: 'Controlled open state.',
					},
					{
						name: 'defaultOpened',
						type: 'boolean',
						default: 'false',
						description: 'Initial open state (uncontrolled).',
					},
					{
						name: 'closeOnItemClick',
						type: 'boolean',
						default: 'true',
						description: 'Auto-close when an item is clicked.',
					},
					{
						name: 'position',
						type: '"bottom" | "bottom-start" | "bottom-end" | "top" | …',
						default: '"bottom"',
						description: 'Preferred dropdown placement.',
					},
					{
						name: 'width',
						type: 'number | string',
						default: '',
						description: 'Dropdown width.',
					},
					{
						name: 'withArrow',
						type: 'boolean',
						default: 'false',
						description: 'Show arrow pointing to the trigger.',
					},
				],
			},
			{
				id: 'dialog',
				name: 'Dialog',
				status: 'stable' as const,
				description:
					'Compact floating panel fixed to a viewport corner. Ideal for confirmations, quick notes and mini forms.',
				preview: DialogPreview,
				controls: [
					{
						type: 'select' as const,
						name: 'size',
						label: 'size',
						default: 'sm',
						options: ['xs', 'sm', 'md'],
					},
					{
						type: 'text' as const,
						name: 'title',
						label: 'title',
						default: 'Dialog title',
					},
					{
						type: 'boolean' as const,
						name: 'withCloseButton',
						label: 'withCloseButton',
						default: true,
					},
				],
				controlledPreview: (v: Record<string, any>) => {
					const Demo = () => {
						const [opened, setOpened] = React.useState(false);
						return (
							<div
								style={{ position: 'relative', minHeight: 80 }}>
								<Button onClick={() => setOpened(true)}>
									Open Dialog
								</Button>
								<Dialog
									opened={opened}
									onClose={() => setOpened(false)}
									title={v.title as string}
									size={v.size as any}
									withCloseButton={
										v.withCloseButton as boolean
									}>
									<p
										style={{
											margin: 0,
											fontSize: 13,
											color: '#a1a1aa',
										}}>
										Compact floating dialog. size:{' '}
										{v.size as string}.
									</p>
									<Button
										size='xs'
										style={{ marginTop: 8 }}
										onClick={() => setOpened(false)}>
										Got it
									</Button>
								</Dialog>
							</div>
						);
					};
					return <Demo />;
				},
				props: [
					{
						name: 'opened',
						type: 'boolean',
						default: '',
						description: 'Controls visibility.',
					},
					{
						name: 'onClose',
						type: '() => void',
						default: '',
						description: 'Called when the × button is clicked.',
					},
					{
						name: 'title',
						type: 'React.ReactNode',
						default: '',
						description: 'Header title.',
					},
					{
						name: 'position',
						type: '{ top?, bottom?, left?, right? }',
						default: '{ bottom: "1rem", right: "1rem" }',
						description: 'Fixed position in the viewport.',
					},
					{
						name: 'size',
						type: '"xs" | "sm" | "md"',
						default: '"sm"',
						description: 'Max width of the panel.',
					},
					{
						name: 'withCloseButton',
						type: 'boolean',
						default: 'true',
						description: 'Show the × close button.',
					},
				],
			},
		],
	},
	{
		title: 'Miscellaneous',
		items: [
			{
				id: 'box',
				name: 'Box',
				status: 'stable',
				description:
					'Polymorphic base element. Renders any HTML tag or React component while forwarding refs and spreading props.',
				preview: BoxPreview,
				controls: [
					{
						type: 'select' as const,
						name: 'component',
						label: 'component',
						default: 'div',
						options: [
							'div',
							'section',
							'article',
							'span',
							'aside',
							'main',
						],
					},
					{
						type: 'text' as const,
						name: 'children',
						label: 'content',
						default: 'Box content',
					},
				],
				controlledPreview: (v: Record<string, any>) => (
					<Box
						component={v.component as any}
						style={{
							background: 'rgba(59,130,246,0.1)',
							border: '1px solid rgba(59,130,246,0.3)',
							borderRadius: 6,
							padding: '12px 16px',
							fontSize: 13,
							color: '#93c5fd',
						}}>
						<span
							style={{
								opacity: 0.5,
								marginRight: 6,
								fontSize: 11,
							}}>
							&lt;{v.component as string}&gt;
						</span>
						{v.children as string}
					</Box>
				),
				props: [
					{
						name: 'component',
						type: 'React.ElementType',
						default: '"div"',
						description:
							'HTML tag or React component to render as.',
					},
				],
			},
			{
				id: 'paper',
				name: 'Paper',
				status: 'stable',
				description:
					'Card-like surface with configurable shadow, border-radius, padding, and optional border.',
				preview: PaperPreview,
				controls: [
					{
						type: 'select' as const,
						name: 'shadow',
						label: 'shadow',
						default: 'sm',
						options: ['none', 'xs', 'sm', 'md', 'lg', 'xl'],
					},
					{
						type: 'select' as const,
						name: 'radius',
						label: 'radius',
						default: 'md',
						options: ['none', 'xs', 'sm', 'md', 'lg', 'xl'],
					},
					{
						type: 'boolean' as const,
						name: 'withBorder',
						label: 'withBorder',
						default: false,
					},
				],
				controlledPreview: (v: Record<string, any>) => (
					<Paper
						shadow={v.shadow as any}
						radius={v.radius as any}
						withBorder={v.withBorder as boolean}
						p='md'
						style={{ maxWidth: 320, width: '100%' }}>
						<p
							style={{
								margin: 0,
								fontSize: 14,
								color: '#e4e4e7',
								fontWeight: 500,
							}}>
							Paper surface
						</p>
						<p
							style={{
								margin: '4px 0 0',
								fontSize: 13,
								color: '#71717a',
							}}>
							shadow: {v.shadow as string} · radius:{' '}
							{v.radius as string}
						</p>
					</Paper>
				),
				props: [
					{
						name: 'shadow',
						type: '"xs" | "sm" | "md" | "lg" | "xl" | "none"',
						default: '"sm"',
						description: 'Drop shadow size.',
					},
					{
						name: 'radius',
						type: '"xs" | "sm" | "md" | "lg" | "xl" | "none"',
						default: '"md"',
						description: 'Border-radius preset.',
					},
					{
						name: 'withBorder',
						type: 'boolean',
						default: 'false',
						description: 'Adds a 1 px border.',
					},
					{
						name: 'p',
						type: 'number | string',
						default: '—',
						description: 'Padding shorthand.',
					},
				],
			},
			{
				id: 'divider',
				name: 'Divider',
				status: 'stable',
				description:
					'Horizontal or vertical separator with optional label, variant (solid/dashed/dotted), and custom thickness.',
				preview: DividerPreview,
				controls: [
					{
						type: 'text' as const,
						name: 'label',
						label: 'label',
						default: '',
					},
					{
						type: 'select' as const,
						name: 'labelPosition',
						label: 'labelPosition',
						default: 'center',
						options: ['left', 'center', 'right'],
					},
					{
						type: 'select' as const,
						name: 'variant',
						label: 'variant',
						default: 'solid',
						options: ['solid', 'dashed', 'dotted'],
					},
					{
						type: 'select' as const,
						name: 'size',
						label: 'size',
						default: 'sm',
						options: ['xs', 'sm', 'md', 'lg', 'xl'],
					},
				],
				controlledPreview: (v: Record<string, any>) => (
					<div style={{ width: '100%', maxWidth: 360 }}>
						<p
							style={{
								fontSize: 13,
								color: '#71717a',
								marginBottom: 12,
							}}>
							Content above the divider
						</p>
						<Divider
							label={(v.label as string) || undefined}
							labelPosition={v.labelPosition as any}
							variant={v.variant as any}
							size={v.size as any}
						/>
						<p
							style={{
								fontSize: 13,
								color: '#71717a',
								marginTop: 12,
							}}>
							Content below the divider
						</p>
					</div>
				),
				props: [
					{
						name: 'orientation',
						type: '"horizontal" | "vertical"',
						default: '"horizontal"',
						description: 'Direction of the divider.',
					},
					{
						name: 'label',
						type: 'React.ReactNode',
						default: '—',
						description: 'Text shown in the middle of the line.',
					},
					{
						name: 'labelPosition',
						type: '"left" | "center" | "right"',
						default: '"left"',
						description: 'Where the label appears.',
					},
					{
						name: 'variant',
						type: '"solid" | "dashed" | "dotted"',
						default: '"solid"',
						description: 'Line style.',
					},
					{
						name: 'size',
						type: '"xs" | "sm" | "md" | "lg" | "xl" | number',
						default: '"sm"',
						description: 'Thickness of the line.',
					},
				],
			},
			{
				id: 'scroll-area',
				name: 'ScrollArea',
				status: 'stable',
				description:
					'Constrained scroll container with configurable overflow behaviour and scroll position callback.',
				preview: ScrollAreaPreview,
				controls: [
					{
						type: 'number' as const,
						name: 'h',
						label: 'height (px)',
						default: 140,
						min: 80,
						max: 320,
						step: 20,
					},
					{
						type: 'select' as const,
						name: 'type',
						label: 'type',
						default: 'auto',
						options: ['auto', 'always', 'scroll', 'hover', 'never'],
					},
				],
				controlledPreview: (v: Record<string, any>) => (
					<ScrollArea
						h={v.h as number}
						type={v.type as any}
						style={{
							width: '100%',
							maxWidth: 320,
							border: '1px solid #3f3f46',
							borderRadius: 6,
						}}>
						<div style={{ padding: '12px 16px' }}>
							{Array.from({ length: 12 }, (_, i) => (
								<p
									key={i}
									style={{
										margin: '0 0 8px',
										fontSize: 13,
										color: '#a1a1aa',
									}}>
									Scroll item {i + 1} — lorem ipsum dolor sit
									amet
								</p>
							))}
						</div>
					</ScrollArea>
				),
				props: [
					{
						name: 'h',
						type: 'number | string',
						default: '—',
						description: 'Fixed height of the scroll region.',
					},
					{
						name: 'w',
						type: 'number | string',
						default: '—',
						description: 'Fixed width of the scroll region.',
					},
					{
						name: 'mah',
						type: 'number | string',
						default: '—',
						description: 'Maximum height.',
					},
					{
						name: 'type',
						type: '"auto" | "always" | "scroll" | "hover" | "never"',
						default: '"auto"',
						description: 'When the scrollbar is visible.',
					},
					{
						name: 'onScrollPositionChange',
						type: '(pos: { x: number; y: number }) => void',
						default: '—',
						description: 'Fires on every scroll event.',
					},
				],
			},
			{
				id: 'collapse',
				name: 'Collapse',
				status: 'stable',
				description:
					'Animate-in/out height transition for expandable sections. Controlled via the `in` prop.',
				preview: CollapsePreview,
				controls: [
					{
						type: 'boolean' as const,
						name: 'in',
						label: 'in (expanded)',
						default: true,
					},
					{
						type: 'boolean' as const,
						name: 'animateOpacity',
						label: 'animateOpacity',
						default: true,
					},
					{
						type: 'number' as const,
						name: 'transitionDuration',
						label: 'duration (ms)',
						default: 200,
						min: 50,
						max: 1000,
						step: 50,
					},
				],
				controlledPreview: (v: Record<string, any>) => {
					const Demo = () => {
						const [expanded, setExpanded] = React.useState(true);
						return (
							<div style={{ width: '100%', maxWidth: 320 }}>
								<Button
									size='xs'
									variant='outline'
									onClick={() => setExpanded((e) => !e)}
									style={{ marginBottom: 8 }}>
									{expanded ? 'Collapse' : 'Expand'}
								</Button>
								<Collapse
									in={expanded}
									animateOpacity={v.animateOpacity as boolean}
									transitionDuration={
										v.transitionDuration as number
									}>
									<div
										style={{
											background: 'rgba(59,130,246,0.1)',
											border: '1px solid rgba(59,130,246,0.3)',
											borderRadius: 6,
											padding: '12px 16px',
											fontSize: 13,
											color: '#93c5fd',
										}}>
										Collapsible content — duration:{' '}
										{v.transitionDuration as number}ms
									</div>
								</Collapse>
							</div>
						);
					};
					return <Demo />;
				},
				props: [
					{
						name: 'in',
						type: 'boolean',
						default: '—',
						description: 'Whether the content is expanded.',
					},
					{
						name: 'animateOpacity',
						type: 'boolean',
						default: 'true',
						description: 'Also fades opacity on transition.',
					},
					{
						name: 'transitionDuration',
						type: 'number',
						default: '200',
						description: 'Animation duration in ms.',
					},
					{
						name: 'transitionTimingFunction',
						type: 'string',
						default: '"ease"',
						description: 'CSS timing function.',
					},
				],
			},
			{
				id: 'theme-icon',
				name: 'ThemeIcon',
				status: 'stable',
				description:
					'Styled icon container in five visual variants matching ActionIcon but non-interactive.',
				preview: ThemeIconPreview,
				controls: [
					{
						type: 'select' as const,
						name: 'variant',
						label: 'variant',
						default: 'filled',
						options: [
							'filled',
							'light',
							'outline',
							'subtle',
							'default',
						],
					},
					{
						type: 'select' as const,
						name: 'size',
						label: 'size',
						default: 'md',
						options: ['xs', 'sm', 'md', 'lg', 'xl'],
					},
					{
						type: 'select' as const,
						name: 'radius',
						label: 'radius',
						default: 'md',
						options: ['0', 'xs', 'sm', 'md', 'lg', 'xl', '9999px'],
					},
				],
				controlledPreview: (v: Record<string, any>) => (
					<div
						style={{
							display: 'flex',
							gap: 16,
							flexWrap: 'wrap',
							alignItems: 'center',
						}}>
						{(
							[
								'filled',
								'light',
								'outline',
								'subtle',
								'default',
							] as const
						).map((variant) => (
							<div
								key={variant}
								style={{
									display: 'flex',
									flexDirection: 'column',
									alignItems: 'center',
									gap: 6,
								}}>
								<ThemeIcon
									variant={variant}
									size={v.size as any}
									radius={v.radius as any}>
									<svg
										width='16'
										height='16'
										fill='none'
										viewBox='0 0 24 24'
										stroke='currentColor'>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth={2}
											d='M13 10V3L4 14h7v7l9-11h-7z'
										/>
									</svg>
								</ThemeIcon>
								<span
									style={{ fontSize: 10, color: '#71717a' }}>
									{variant === v.variant ? (
										<strong style={{ color: '#a1a1aa' }}>
											{variant}
										</strong>
									) : (
										variant
									)}
								</span>
							</div>
						))}
					</div>
				),
				props: [
					{
						name: 'variant',
						type: '"filled" | "light" | "outline" | "subtle" | "default"',
						default: '"filled"',
						description: 'Visual style.',
					},
					{
						name: 'size',
						type: '"xs" | "sm" | "md" | "lg" | "xl" | number',
						default: '"md"',
						description: 'Width and height of the container.',
					},
					{
						name: 'radius',
						type: 'string | number',
						default: '"0.375rem"',
						description: 'Border-radius.',
					},
					{
						name: 'color',
						type: 'string',
						default: '—',
						description: 'Overrides the brand color token.',
					},
				],
			},
			{
				id: 'transition',
				name: 'Transition',
				status: 'stable',
				description:
					'Render-prop animation wrapper. Mounts/unmounts children with CSS transitions using built-in or custom presets.',
				preview: TransitionPreview,
				controls: [
					{
						type: 'select' as const,
						name: 'transition',
						label: 'transition',
						default: 'fade',
						options: [
							'fade',
							'fade-up',
							'fade-down',
							'fade-left',
							'fade-right',
							'scale',
							'scale-y',
							'scale-x',
							'slide-up',
							'slide-down',
							'slide-left',
							'slide-right',
							'pop',
						],
					},
					{
						type: 'number' as const,
						name: 'duration',
						label: 'duration (ms)',
						default: 250,
						min: 50,
						max: 1000,
						step: 50,
					},
				],
				controlledPreview: (v: Record<string, any>) => {
					const Demo = () => {
						const [mounted, setMounted] = React.useState(false);
						return (
							<div
								style={{
									display: 'flex',
									flexDirection: 'column',
									gap: 12,
									width: '100%',
									maxWidth: 320,
								}}>
								<div style={{ display: 'flex', gap: 8 }}>
									<Button
										size='xs'
										onClick={() => setMounted(true)}
										disabled={mounted}>
										Show
									</Button>
									<Button
										size='xs'
										variant='outline'
										onClick={() => setMounted(false)}
										disabled={!mounted}>
										Hide
									</Button>
								</div>
								<Transition
									mounted={mounted}
									transition={v.transition as any}
									duration={v.duration as number}>
									{(styles) => (
										<div
											style={{
												...styles,
												background:
													'rgba(139,92,246,0.15)',
												border: '1px solid rgba(139,92,246,0.4)',
												borderRadius: 6,
												padding: '10px 14px',
												fontSize: 13,
												color: '#c4b5fd',
											}}>
											{v.transition as string} —{' '}
											{v.duration as number}ms
										</div>
									)}
								</Transition>
							</div>
						);
					};
					return <Demo />;
				},
				props: [
					{
						name: 'mounted',
						type: 'boolean',
						default: '—',
						description: 'Whether the element is shown.',
					},
					{
						name: 'transition',
						type: 'TransitionName | { in, out, transitionProperty }',
						default: '"fade"',
						description: 'Animation preset or custom object.',
					},
					{
						name: 'duration',
						type: 'number',
						default: '250',
						description: 'Enter animation duration in ms.',
					},
					{
						name: 'exitDuration',
						type: 'number',
						default: '—',
						description: 'Exit duration (defaults to duration).',
					},
					{
						name: 'keepMounted',
						type: 'boolean',
						default: 'false',
						description: 'Keep DOM node even when unmounted.',
					},
				],
			},
			{
				id: 'affix',
				name: 'Affix',
				status: 'stable',
				description:
					'Fixed-position element rendered via Portal. Useful for scroll-to-top buttons, floating actions, or persistent overlays.',
				preview: AffixPreview,
				controls: [
					{
						type: 'select' as const,
						name: 'vpos',
						label: 'vertical pos',
						default: 'bottom',
						options: ['top', 'bottom'],
					},
					{
						type: 'select' as const,
						name: 'hpos',
						label: 'horizontal pos',
						default: 'right',
						options: ['left', 'right'],
					},
					{
						type: 'number' as const,
						name: 'offset',
						label: 'offset (px)',
						default: 16,
						min: 0,
						max: 64,
						step: 4,
					},
				],
				controlledPreview: (v: Record<string, any>) => (
					<div
						style={{
							position: 'relative',
							width: '100%',
							maxWidth: 360,
							height: 160,
							borderRadius: 8,
							border: '1px solid #3f3f46',
							background: 'rgba(255,255,255,0.02)',
							overflow: 'hidden',
						}}>
						<p
							style={{
								position: 'absolute',
								top: 12,
								left: 12,
								fontSize: 11,
								color: '#52525b',
								margin: 0,
							}}>
							Simulated viewport (Affix → Portal → fixed)
						</p>
						<div
							style={{
								position: 'absolute',
								...(v.vpos === 'bottom'
									? { bottom: v.offset as number }
									: { top: v.offset as number }),
								...(v.hpos === 'right'
									? { right: v.offset as number }
									: { left: v.offset as number }),
							}}>
							<Button size='xs'>&#8593; Scroll to top</Button>
						</div>
					</div>
				),
				props: [
					{
						name: 'position',
						type: '{ top?, bottom?, left?, right? }',
						default: '{ bottom: "1rem", right: "1rem" }',
						description: 'CSS fixed position offsets.',
					},
					{
						name: 'zIndex',
						type: 'number',
						default: '200',
						description: 'Stack order.',
					},
					{
						name: 'withinPortal',
						type: 'boolean',
						default: 'true',
						description: 'Renders via Portal into document.body.',
					},
				],
			},
		],
	},
];

//
// Status helpers
//

const STATUS_LABEL: Record<Status, string> = {
	stable: 'Stable',
	beta: 'Beta',
	'coming-soon': 'Coming soon',
};
const STATUS_CLASS: Record<Status, string> = {
	stable: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/25',
	beta: 'bg-amber-500/10 text-amber-400 border-amber-500/25',
	'coming-soon': 'bg-zinc-500/10 text-zinc-500 border-zinc-600/30',
};
const STATUS_DOT: Record<Status, string> = {
	stable: 'bg-emerald-400',
	beta: 'bg-amber-400 animate-pulse',
	'coming-soon': 'bg-zinc-600',
};

//
// Page
//

export default function ComponentsPage() {
	const allItems = CATEGORIES.flatMap((c) => c.items);
	const [selectedId, setSelectedId] = useState(allItems[0].id);
	const [query, setQuery] = useState('');
	const [controlValues, setControlValues] = useState<Record<string, any>>({});
	const mainRef = useRef<HTMLElement>(null);
	const selected = allItems.find((i) => i.id === selectedId) ?? allItems[0];
	const PreviewComponent = selected.preview;

	// Reset controls when component changes
	useEffect(() => {
		if (selected.controls?.length) {
			setControlValues(
				Object.fromEntries(
					selected.controls.map((c) => [c.name, c.default]),
				),
			);
		} else {
			setControlValues({});
		}
	}, [selectedId]);

	const setControl = (name: string, value: any) =>
		setControlValues((prev) => ({ ...prev, [name]: value }));

	const selectComponent = (id: string) => {
		setSelectedId(id);
		setQuery('');
		mainRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
	};

	const normalised = query.toLowerCase().trim();
	const filteredCategories = normalised
		? CATEGORIES.map((cat) => ({
				...cat,
				items: cat.items.filter(
					(item) =>
						item.name.toLowerCase().includes(normalised) ||
						item.id.toLowerCase().includes(normalised),
				),
			})).filter((cat) => cat.items.length > 0)
		: CATEGORIES;

	return (
		<div className='min-h-screen bg-[#09090b] text-zinc-100 flex flex-col'>
			<Navbar />

			{/*  Two-column body  */}
			<div
				className='flex flex-1 pt-14 overflow-hidden'
				style={{ height: '100dvh' }}>
				{/*  Sidebar — fixed height, sticky search + scrollable list  */}
				<aside
					className='hidden md:flex flex-col w-56 shrink-0 border-r border-white/6 sticky top-14'
					style={{
						background: 'rgba(255,255,255,0.015)',
						height: 'calc(100dvh - 3.5rem)',
					}}>
					{/* Search — sticky, no scroll */}
					<div className='shrink-0 px-3 pt-5 pb-3 border-b border-white/6'>
						<div className='relative'>
							<svg
								className='absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-zinc-600 pointer-events-none'
								viewBox='0 0 20 20'
								fill='currentColor'>
								<path
									fillRule='evenodd'
									d='M9 3a6 6 0 100 12A6 6 0 009 3zM1 9a8 8 0 1114.32 4.906l3.387 3.387a1 1 0 01-1.414 1.414l-3.387-3.387A8 8 0 011 9z'
									clipRule='evenodd'
								/>
							</svg>
							<input
								type='text'
								placeholder='Search…'
								value={query}
								onChange={(e) => setQuery(e.target.value)}
								className='w-full bg-white/5 border border-white/8 rounded-md pl-8 pr-3 py-1.5 text-xs text-zinc-300 placeholder-zinc-600 focus:outline-none focus:ring-1 focus:ring-white/20 transition-colors'
							/>
							{query && (
								<button
									onClick={() => setQuery('')}
									className='absolute right-2 top-1/2 -translate-y-1/2 text-zinc-600 hover:text-zinc-400 transition-colors'>
									<svg
										className='w-3 h-3'
										viewBox='0 0 20 20'
										fill='currentColor'>
										<path
											fillRule='evenodd'
											d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
											clipRule='evenodd'
										/>
									</svg>
								</button>
							)}
						</div>
					</div>

					{/* Categories — scrollable */}
					<div className='flex-1 overflow-y-auto py-4 scrollbar-thin'>
						{filteredCategories.length === 0 ? (
							<p className='px-4 text-xs text-zinc-600'>
								No results for "{query}"
							</p>
						) : (
							filteredCategories.map((cat) => (
								<div
									key={cat.title}
									className='mb-5'>
									<p className='px-4 mb-1 text-[10px] font-semibold uppercase tracking-widest text-zinc-600'>
										{cat.title}
									</p>
									{cat.items.map((item) => (
										<button
											key={item.id}
											onClick={() =>
												selectComponent(item.id)
											}
											className={[
												'w-full flex items-center gap-2.5 px-4 py-1.5 text-sm text-left transition-colors',
												selectedId === item.id
													? 'text-white bg-white/6'
													: 'text-zinc-500 hover:text-zinc-300 hover:bg-white/4',
											].join(' ')}>
											<span
												className={[
													'w-1.5 h-1.5 rounded-full shrink-0',
													STATUS_DOT[item.status],
												].join(' ')}
											/>
											{item.name}
										</button>
									))}
								</div>
							))
						)}
					</div>
				</aside>

				{/*  Main content  */}
				<main
					ref={mainRef}
					className='flex-1 overflow-y-auto scrollbar-thin px-6 md:px-10 py-8'
					style={{ height: 'calc(100dvh - 3.5rem)' }}>
					<div className='max-w-3xl mx-auto'>
						{/* Header */}
						<div className='flex items-center gap-3 mb-2'>
							<h1 className='text-2xl font-bold text-white'>
								{selected.name}
							</h1>
							<span
								className={[
									'text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded border',
									STATUS_CLASS[selected.status],
								].join(' ')}>
								{STATUS_LABEL[selected.status]}
							</span>
						</div>
						<p className='text-zinc-400 text-sm mb-8 leading-relaxed'>
							{selected.description}
						</p>

						{/* Import */}
						<div className='mb-8'>
							<h2 className='text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-3'>
								Import
							</h2>
							<div className='rounded-xl border border-white/8 overflow-hidden'>
								<pre className='px-5 py-3 text-xs font-mono text-cyan-300/80 overflow-x-auto'>
									<code>{`import { ${
										selected.id === 'tabs'
											? 'Tabs, TabsList, TabsTab, TabsPanel'
											: selected.id === 'copy-button'
												? 'CopyButton, Button'
												: selected.id === 'file-button'
													? 'FileButton, Button'
													: selected.id ===
														  'accordion'
														? 'Accordion, AccordionItem, AccordionControl, AccordionPanel'
														: selected.id ===
															  'table'
															? 'Table, Thead, Tbody, Tr, Th, Td'
															: selected.id ===
																  'timeline'
																? 'Timeline, TimelineItem'
																: selected.id ===
																	  'list'
																	? 'List, ListItem'
																	: selected.name
									} } from '@kivora/react';`}</code>
								</pre>
							</div>
						</div>

						{/* Preview */}
						<div className='mb-8'>
							<h2 className='text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-3'>
								Preview
							</h2>
							<div
								className='rounded-2xl border border-white/8 p-8 flex items-center justify-center min-h-48'
								style={{
									background: 'rgba(255,255,255,0.02)',
									backgroundImage:
										'radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)',
									backgroundSize: '20px 20px',
								}}>
								{selected.controls?.length &&
								Object.keys(controlValues).length > 0 &&
								selected.controlledPreview ? (
									selected.controlledPreview(controlValues)
								) : (
									<PreviewComponent />
								)}
							</div>
						</div>

						{/* Controls */}
						{selected.controls && selected.controls.length > 0 && (
							<div className='mb-8'>
								<div className='flex items-center justify-between mb-3'>
									<h2 className='text-xs font-semibold uppercase tracking-widest text-zinc-500'>
										Controls
									</h2>
									<button
										onClick={() => {
											if (selected.controls) {
												setControlValues(
													Object.fromEntries(
														selected.controls.map(
															(c) => [
																c.name,
																c.default,
															],
														),
													),
												);
											}
										}}
										className='text-xs text-zinc-600 hover:text-zinc-400 transition-colors'>
										Reset
									</button>
								</div>
								<div className='rounded-xl border border-white/8 overflow-hidden divide-y divide-white/6'>
									{selected.controls.map((control) => (
										<div
											key={control.name}
											className='flex items-center gap-4 px-4 py-2.5'
											style={{
												background:
													'rgba(255,255,255,0.015)',
											}}>
											<span className='text-xs font-mono text-violet-300/80 w-24 shrink-0'>
												{control.label ?? control.name}
											</span>
											<span className='text-[10px] text-zinc-600 w-14 shrink-0'>
												{control.type}
											</span>
											{control.type === 'boolean' && (
												<Switch
													checked={
														controlValues[
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
														(controlValues[
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
													<input
														type='range'
														min={control.min ?? 0}
														max={control.max ?? 100}
														step={control.step ?? 1}
														value={
															(controlValues[
																control.name
															] as number) ??
															control.default
														}
														onChange={(e) =>
															setControl(
																control.name,
																Number(
																	e.target
																		.value,
																),
															)
														}
														className='flex-1 accent-violet-600 h-1 cursor-pointer'
													/>
													<span className='text-xs font-mono text-zinc-400 w-8 text-right'>
														{(controlValues[
															control.name
														] as number) ??
															control.default}
													</span>
												</div>
											)}
											{control.type === 'select' && (
												<div className='flex flex-wrap gap-1.5'>
													{control.options.map(
														(opt: string) => (
															<button
																key={opt}
																onClick={() =>
																	setControl(
																		control.name,
																		opt,
																	)
																}
																className={[
																	'px-2 py-0.5 rounded text-xs font-mono transition-colors',
																	controlValues[
																		control
																			.name
																	] === opt
																		? 'bg-violet-600 text-white'
																		: 'bg-white/6 text-zinc-400 hover:bg-white/10 hover:text-zinc-300',
																].join(' ')}>
																{opt}
															</button>
														),
													)}
												</div>
											)}
										</div>
									))}
								</div>
							</div>
						)}

						{/* Usage */}
						<div className='mb-8'>
							<h2 className='text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-3'>
								Usage
							</h2>
							<div className='rounded-xl border border-white/8 overflow-hidden'>
								<div
									className='flex items-center justify-between px-4 py-2.5 border-b border-white/6'
									style={{
										background: 'rgba(255,255,255,0.025)',
									}}>
									<div className='flex items-center gap-1.5'>
										<span className='w-2.5 h-2.5 rounded-full bg-red-500/70' />
										<span className='w-2.5 h-2.5 rounded-full bg-amber-500/70' />
										<span className='w-2.5 h-2.5 rounded-full bg-emerald-500/70' />
									</div>
									<span className='text-[10px] font-medium text-zinc-600 uppercase tracking-widest'>
										TSX
									</span>
								</div>
								<pre className='px-5 py-4 text-xs font-mono text-cyan-300/80 overflow-x-auto leading-relaxed'>
									<code>{getUsageCode(selected.id)}</code>
								</pre>
							</div>
						</div>

						{/* API */}
						<div>
							<h2 className='text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-3'>
								API
							</h2>
							<div className='rounded-xl border border-white/8 overflow-hidden'>
								<table className='w-full text-xs'>
									<thead>
										<tr
											className='border-b border-white/8 text-left'
											style={{
												background:
													'rgba(255,255,255,0.025)',
											}}>
											<th className='px-4 py-2.5 text-zinc-500 font-medium w-32'>
												Prop
											</th>
											<th className='px-4 py-2.5 text-zinc-500 font-medium'>
												Type
											</th>
											<th className='px-4 py-2.5 text-zinc-500 font-medium w-24'>
												Default
											</th>
											<th className='px-4 py-2.5 text-zinc-500 font-medium'>
												Description
											</th>
										</tr>
									</thead>
									<tbody>
										{selected.props.map((prop) => (
											<tr
												key={prop.name}
												className='border-b border-white/4 last:border-0'>
												<td className='px-4 py-2.5'>
													<code className='text-violet-300 font-mono'>
														{prop.name}
													</code>
												</td>
												<td className='px-4 py-2.5'>
													<code className='text-cyan-300/70 font-mono text-[10px]'>
														{prop.type}
													</code>
												</td>
												<td className='px-4 py-2.5'>
													<code className='text-amber-300/70 font-mono'>
														{prop.default}
													</code>
												</td>
												<td className='px-4 py-2.5 text-zinc-500'>
													{prop.description}
												</td>
											</tr>
										))}
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</main>
			</div>
		</div>
	);
}

// ─────────────────────────────────────────────────────────────────────────────
// Usage snippets
// ─────────────────────────────────────────────────────────────────────────────

function getUsageCode(id: string): string {
	const snippets: Record<string, string> = {
		button: `<Button variant="solid">Solid</Button>
<Button variant="outline" size="lg">Outline</Button>
<Button variant="ghost" leftSection={<Icon />}>With icon</Button>
<Button loading>Saving…</Button>
<Button href="/docs" component="a">Link button</Button>`,

		'action-icon': `<ActionIcon aria-label="Settings" variant="subtle">
  <SettingsIcon />
</ActionIcon>

<ActionIcon aria-label="Delete" variant="outline" size="lg">
  <TrashIcon />
</ActionIcon>

<ActionIcon aria-label="Loading" loading>
  <SpinnerIcon />
</ActionIcon>`,

		burger: `const [opened, setOpened] = useState(false);

<Burger
  opened={opened}
  onClick={() => setOpened((o) => !o)}
  size="md"
  aria-label="Toggle navigation"
/>

// Conectado a un menú lateral
<Burger opened={navOpen} size="sm" onClick={toggleNav} />`,

		'close-button': `// Uso básico
<CloseButton onClick={handleClose} />

// Personalizado con tamaño
<CloseButton size="lg" aria-label="Cerrar diálogo" onClick={closeModal} />

// Usado internamente en Modal/Drawer (no necesitas agregarlo manualmente)
<Modal title="Mi Modal" withCloseButton onClose={close} opened={open}>
  Contenido
</Modal>`,

		'copy-button': `import { CopyButton, Button } from '@kivora/react';

<CopyButton value="npm install @kivora/react">
  {({ copied, copy }) => (
    <Button variant={copied ? 'solid' : 'outline'} onClick={copy}>
      {copied ? '¡Copiado!' : 'Copiar'}
    </Button>
  )}
</CopyButton>

// Con ActionIcon
<CopyButton value={code} timeout={1500}>
  {({ copied, copy }) => (
    <ActionIcon aria-label="Copy" variant="ghost" onClick={copy}>
      {copied ? <CheckIcon /> : <CopyIcon />}
    </ActionIcon>
  )}
</CopyButton>`,

		'file-button': `import { FileButton, Button } from '@kivora/react';

// Archivo único
<FileButton accept="image/*" onChange={(file) => console.log(file)}>
  {({ onClick }) => (
    <Button variant="outline" onClick={onClick}>
      Subir imagen
    </Button>
  )}
</FileButton>

// Múltiples archivos
<FileButton multiple onChange={(files) => console.log(files)}>
  {({ onClick }) => (
    <Button onClick={onClick}>Seleccionar archivos</Button>
  )}
</FileButton>

// Resetear programáticamente
const resetRef = useRef<() => void>(null);
<FileButton resetRef={resetRef} onChange={setFile}>
  {({ onClick }) => <Button onClick={onClick}>Subir</Button>}
</FileButton>
<Button onClick={() => resetRef.current?.()}>Resetear</Button>`,

		'unstyled-button': `import { UnstyledButton } from '@kivora/react';

// Con tus propias clases CSS / Tailwind
<UnstyledButton
  className="px-4 py-2 rounded-xl bg-linear-to-r from-violet-600 to-cyan-500 text-white"
>
  Estilo propio
</UnstyledButton>

// Como enlace
<UnstyledButton href="/docs">Ir a docs</UnstyledButton>

// Como elemento personalizado
<UnstyledButton component="div" role="button" tabIndex={0}>
  Div accesible
</UnstyledButton>`,

		'text-input': `<TextInput
  label="Email"
  placeholder="you@example.com"
  description="We'll never share your email."
/>

<TextInput
  label="Username"
  placeholder="john_doe"
  error="Username is already taken."
  withAsterisk
/>`,

		'password-input': `<PasswordInput
  label="Password"
  placeholder="Enter your password"
  description="Minimum 8 characters."
/>

// Controlled visibility
const [visible, setVisible] = useState(false);
<PasswordInput
  label="Show password"
  visible={visible}
  onVisibilityChange={setVisible}
/>`,

		checkbox: `<Checkbox label="Accept terms and conditions" />

// Controlled
const [checked, setChecked] = useState(false);
<Checkbox
  label="Subscribe to newsletter"
  checked={checked}
  onChange={(e) => setChecked(e.target.checked)}
/>

// Indeterminate state
<Checkbox label="Select all" indeterminate />`,

		switch: `<Switch label="Notifications" />

// Controlled
const [enabled, setEnabled] = useState(false);
<Switch
  label="Dark mode"
  checked={enabled}
  onChange={(e) => setEnabled(e.target.checked)}
/>

// With on/off labels
<Switch onLabel="ON" offLabel="OFF" size="lg" />`,

		select: `<Select
  label="Framework"
  placeholder="Pick one"
  data={['React', 'Svelte', 'Solid', 'Vue']}
/>

// With option objects
<Select
  label="Country"
  data={[
    { value: 'us', label: 'United States' },
    { value: 'es', label: 'Spain' },
    { value: 'mx', label: 'Mexico' },
  ]}
/>`,

		avatar: `// Image avatar
<Avatar src="/user.jpg" alt="John Doe" size="md" />

// Fallback to initials
<Avatar variant="filled" size="lg">JD</Avatar>

// Sizes
<Avatar size="xs">XS</Avatar>
<Avatar size="sm">SM</Avatar>
<Avatar size="xl">XL</Avatar>`,

		badge: `<Badge variant="filled">Stable</Badge>
<Badge variant="light" size="lg">Beta</Badge>
<Badge variant="dot">New</Badge>
<Badge variant="outline" circle>3</Badge>

// With sections
<Badge leftSection={<CheckIcon />} variant="filled">
  Approved
</Badge>`,

		card: `<Card withBorder padding="1rem" radius="md">
  <p className="font-semibold mb-1">Card title</p>
  <p className="text-sm text-zinc-400 mb-4">Description goes here.</p>
  <Button variant="solid" fullWidth>Action</Button>
</Card>

// Custom shadow & radius
<Card shadow="lg" radius="xl" padding="1.5rem">
  Content
</Card>`,

		progress: `<Progress value={60} />
<Progress value={30} color="teal" size="sm" />
<Progress value={75} color="#f59e0b" size="lg" striped />

// Multi-section
<Progress
  sections={[
    { value: 40, color: 'indigo' },
    { value: 25, color: 'teal' },
    { value: 15, color: 'amber' },
  ]}
/>`,

		skeleton: `// Placeholder blocks
<Skeleton height={20} width="70%" />
<Skeleton height={12} />
<Skeleton circle height={40} width={40} />

// Reveal children when loaded
<Skeleton visible={isLoading}>
  <p>Actual content</p>
</Skeleton>`,

		alert: `<Alert variant="light" title="Information">
  Your account has been updated successfully.
</Alert>

<Alert
  variant="outline"
  title="Warning"
  withCloseButton
  onClose={() => setOpen(false)}>
  Your trial expires in 3 days.
</Alert>`,

		loader: `<Loader />
<Loader type="bars" size="lg" />
<Loader type="dots" size="sm" />

// Custom colour
<Loader type="oval" color="#06b6d4" />`,

		notification: `import { Notification } from '@kivora/react';

// Básica con cierre
<Notification
  title="Archivos subidos"
  withCloseButton
  onClose={() => setVisible(false)}
  withBorder
>
  3 archivos subidos correctamente.
</Notification>

// Con icono personalizado
<Notification
  title="Actualización disponible"
  icon={<InfoIcon />}
  withBorder
>
  v2.4.0 ya está disponible.
</Notification>

// Estado de carga
<Notification loading title="Sincronizando..." withBorder />`,

		'loading-overlay': `import { LoadingOverlay } from '@kivora/react';

// El contenedor debe tener position: relative
<div style={{ position: 'relative' }}>
  <p>Contenido de la sección</p>
  <LoadingOverlay
    visible={isLoading}
    loaderProps={{ type: 'dots', size: 'md' }}
    overlayProps={{ blur: 2, opacity: 0.6 }}
  />
</div>

// Con color de overlay personalizado
<LoadingOverlay
  visible={saving}
  overlayProps={{ color: '#09090b', blur: 4, opacity: 0.8 }}
  loaderProps={{ type: 'bars' }}
/>`,

		textarea: `<Textarea
  label="Bio"
  placeholder="Tell us about yourself..."
  autosize
  minRows={3}
  maxRows={6}
/>

// Resize handle
<Textarea label="Resizable" resize="vertical" />

// Validated
<Textarea label="Notes" error={error} required />`,

		'number-input': `<NumberInput
  label="Quantity"
  min={0}
  max={100}
  value={qty}
  onChange={setQty}
/>

// Currency
<NumberInput
  label="Price"
  prefix="$"
  decimalScale={2}
  allowNegative={false}
/>

// No step buttons
<NumberInput label="Score" hideControls placeholder="0–10" />`,

		radio: `import { Radio, RadioGroup } from '@kivora/react';

<RadioGroup
  label="Favorite framework"
  value={value}
  onChange={setValue}
>
  <Radio value="react" label="React" />
  <Radio value="vue" label="Vue" />
  <Radio value="svelte" label="Svelte" />
</RadioGroup>`,

		slider: `<Slider value={volume} onChange={setVolume} />

// With marks
<Slider
  defaultValue={50}
  marks={[
    { value: 0, label: "0%" },
    { value: 50, label: "50%" },
    { value: 100, label: "100%" },
  ]}
/>

// Always show label
<Slider defaultValue={30} labelAlwaysOn label={(v) => \`\${v}%\`} />`,

		rating: `<Rating value={rating} onChange={setRating} />

// Half-star fractions
<Rating value={3.5} fractions={2} />

// Read-only, 10 stars
<Rating value={7} count={10} readOnly />`,

		chip: `import { Chip, ChipGroup } from '@kivora/react';

// Single selection
<ChipGroup value={selected} onChange={setSelected}>
  <Chip value="react">React</Chip>
  <Chip value="vue">Vue</Chip>
</ChipGroup>

// Multi selection
<ChipGroup value={selected} onChange={setSelected} multiple>
  <Chip value="ts">TypeScript</Chip>
  <Chip value="tw">Tailwind</Chip>
</ChipGroup>`,

		'segmented-control': `<SegmentedControl
  value={view}
  onChange={setView}
  data={['List', 'Grid', 'Kanban']}
/>

// With object options and full width
<SegmentedControl
  defaultValue="md"
  fullWidth
  data={[
    { value: 'xs', label: 'XS' },
    { value: 'sm', label: 'SM' },
    { value: 'md', label: 'MD' },
    { value: 'lg', label: 'LG' },
  ]}
/>`,

		'tags-input': `<TagsInput
  label="Technologies"
  placeholder="Add tag..."
  value={tags}
  onChange={setTags}
/>

// Max 5 tags, no duplicates
<TagsInput
  label="Skills"
  defaultValue={["React"]}
  maxTags={5}
  allowDuplicates={false}
/>`,

		'pin-input': `// 4-digit PIN
<PinInput length={4} type="number" />

// 6-character OTP (masked)
<PinInput
  length={6}
  mask
  onComplete={(code) => verifyOTP(code)}
/>`,

		'color-input': `import { ColorInput, ColorPicker } from '@kivora/react';

// As a form field
<ColorInput
  label="Brand color"
  value={color}
  onChange={setColor}
  swatches={['#6366f1', '#0ea5e9', '#10b981']}
/>

// Standalone picker
<ColorPicker
  value={color}
  onChange={setColor}
  format="hex"
  withPicker
/>`,

		'multi-select': `<MultiSelect
  label="Frameworks"
  data={['React', 'Vue', 'Angular', 'Svelte']}
  value={selected}
  onChange={setSelected}
  searchable
  clearable
/>

// Max 3 values
<MultiSelect
  label="Tags"
  data={tags}
  defaultValue={[]}
  maxValues={3}
  hidePickedOptions
/>`,

		autocomplete: `<Autocomplete
  label="Framework"
  placeholder="Start typing..."
  data={['React', 'Angular', 'Vue', 'Svelte']}
/>

// Custom filter
<Autocomplete
  label="Country"
  data={countries}
  filter={(value, item) =>
    item.value.toLowerCase().startsWith(value.toLowerCase())
  }
/>`,

		'file-input': `<FileInput
  label="Avatar"
  accept="image/*"
  clearable
  value={file}
  onChange={setFile}
/>

// Multiple files
<FileInput
  label="Attachments"
  multiple
  accept=".pdf,.docx"
  placeholder="Pick files"
/>`,

		'json-input': `<JsonInput
  label="Config"
  placeholder="{}"
  formatOnBlur
  minRows={4}
  value={json}
  onChange={setJson}
/>

// Show custom error
<JsonInput
  label="Schema"
  validationError="Malformed JSON"
  minRows={6}
/>`,

		toast: `// In layout.tsx (once)
import { Toaster } from '@kivora/react';
<Toaster richColors position="bottom-right" />

// Anywhere in your app
import { toast } from '@kivora/react';
toast.success('Saved successfully!');
toast.error('Something went wrong.');

// With loading + auto dismiss
const id = toast.loading('Uploading…');
await upload();
toast.dismiss(id);
toast.success('Upload complete!');`,

		stack: `<Stack gap="md">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</Stack>

// Custom alignment
<Stack gap="xl" align="center">
  <Avatar size="lg">JD</Avatar>
  <Text>John Doe</Text>
</Stack>`,

		group: `<Group gap="sm">
  <Button variant="solid">Save</Button>
  <Button variant="outline">Cancel</Button>
</Group>

// Space between
<Group justify="space-between">
  <span>Label</span>
  <Badge>New</Badge>
</Group>

// Grow equally
<Group grow gap="sm">
  <Button>One</Button>
  <Button>Two</Button>
  <Button>Three</Button>
</Group>`,

		flex: `<Flex gap="sm" align="center">
  <Avatar src="/user.jpg" size="md" />
  <div>
    <Text size="sm">John Doe</Text>
    <Text size="xs" c="dimmed">Admin</Text>
  </div>
</Flex>

// Column direction
<Flex direction="column" gap="xs">
  <TextInput placeholder="Name" />
  <TextInput placeholder="Email" />
</Flex>

// Separate row and column gaps
<Flex wrap="wrap" rowGap="sm" columnGap="lg">
  ...
</Flex>`,

		grid: `import { Grid, GridCol } from '@kivora/react';

<Grid columns={12} gutter="1rem">
  <GridCol span={8}>Main content</GridCol>
  <GridCol span={4}>Sidebar</GridCol>
</Grid>

// Offset
<Grid columns={12}>
  <GridCol span={6} offset={3}>Centered col</GridCol>
</Grid>`,

		'simple-grid': `<SimpleGrid cols={3} spacing="1rem">
  <Card>...</Card>
  <Card>...</Card>
  <Card>...</Card>
</SimpleGrid>

// Responsive columns
<SimpleGrid cols={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing="md">
  {items.map((item) => <Card key={item.id}>...</Card>)}
</SimpleGrid>`,

		center: `// Fill parent and center
<Center className="h-48">
  <Loader />
</Center>

// Inline
<Center inline>
  <CheckIcon />
  <span>Verified</span>
</Center>`,

		container: `<Container size="lg">
  <h1>Page title</h1>
  <p>Content constrained to max-w-4xl</p>
</Container>

// Fluid (no max-width)
<Container fluid className="px-8">
  <FullWidthBanner />
</Container>`,

		space: `// Vertical spacing
<Heading>Title</Heading>
<Space h={24} />
<Paragraph>Content below</Paragraph>

// Horizontal spacer in a flex row
<Flex align="center">
  <Logo />
  <Space w={16} />
  <NavLinks />
</Flex>`,

		'aspect-ratio': `// 16:9 video thumbnail
<AspectRatio ratio={16 / 9} className="w-full">
  <img src="/thumbnail.jpg" className="object-cover w-full h-full rounded-xl" />
</AspectRatio>

// Square avatar
<AspectRatio ratio={1} className="w-24">
  <img src="/avatar.jpg" className="rounded-full object-cover w-full h-full" />
</AspectRatio>`,

		'app-shell': `import { AppShell } from '@kivora/react';

<AppShell
  header={{ height: 56 }}
  navbar={{ width: 240, breakpoint: 'sm' }}
>
  <AppShell.Header>
    <Navbar />
  </AppShell.Header>
  <AppShell.Navbar>
    <SideNav />
  </AppShell.Navbar>
  <AppShell.Main>
    {children}
  </AppShell.Main>
</AppShell>`,

		box: `// Default div
<Box className="p-4 rounded-xl">Content</Box>

// Polymorphic — renders as <section>
<Box component="section" aria-label="Hero">
  <h1>Welcome</h1>
</Box>

// Renders as <a>
<Box component="a" href="/docs" className="underline">
  Link box
</Box>`,

		paper: `<Paper shadow="md" radius="lg" p="1.5rem" withBorder>
  Card content here
</Paper>

// Flat card
<Paper shadow="none" withBorder p="1rem">
  Bordered, no shadow
</Paper>`,

		divider: `// Simple rule
<Divider />

// With centred label
<Divider label="OR" labelPosition="center" />

// Dashed variant
<Divider label="Section" variant="dashed" my={16} />

// Vertical inside a flex row
<div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
  <span>Left</span>
  <Divider orientation="vertical" />
  <span>Right</span>
</div>`,

		'scroll-area': `<ScrollArea h={300} mah="60vh">
  {items.map((item) => (
    <div key={item.id}>{item.name}</div>
  ))}
</ScrollArea>

// Track scroll position
<ScrollArea
  h={400}
  onScrollPositionChange={({ y }) => setScrollY(y)}
>
  {content}
</ScrollArea>`,

		collapse: `const [opened, setOpened] = useState(false);

<Button onClick={() => setOpened((o) => !o)}>
  Toggle
</Button>

<Collapse in={opened} transitionDuration={300}>
  <Paper p="1rem" withBorder>
    Animated content hidden/shown by CSS height transition.
  </Paper>
</Collapse>`,

		'theme-icon': `<ThemeIcon variant="filled" size="lg">
  <BoltIcon />
</ThemeIcon>

<ThemeIcon variant="light" size="xl" radius="50%">
  <StarIcon />
</ThemeIcon>

// Gradient
<ThemeIcon
  variant="filled"
  gradient={{ from: '#6366f1', to: '#0ea5e9', deg: 135 }}
>
  <SparklesIcon />
</ThemeIcon>`,

		transition: `// Built-in preset
<Transition mounted={opened} transition="fade-up" duration={200}>
  {(styles) => (
    <Paper style={styles} p="1rem">
      Animated element
    </Paper>
  )}
</Transition>

// Custom transition
<Transition
  mounted={opened}
  transition={{
    in: { opacity: 1, transform: 'scale(1)' },
    out: { opacity: 0, transform: 'scale(0.9)' },
    transitionProperty: 'opacity, transform',
  }}
  duration={150}
>
  {(styles) => <div style={styles}>Custom!</div>}
</Transition>`,

		affix: `// Scroll-to-top button fixed to viewport
<Affix position={{ bottom: 20, right: 20 }}>
  <Button
    variant="solid"
    size="sm"
    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
  >
    ↑ Top
  </Button>
</Affix>

// Custom z-index, no portal
<Affix position={{ top: 80, right: 16 }} withinPortal={false} zIndex={50}>
  <Badge variant="filled">Live</Badge>
</Affix>`,

		tabs: `<Tabs defaultValue="overview">
  <TabsList>
    <TabsTab value="overview">Overview</TabsTab>
    <TabsTab value="settings">Settings</TabsTab>
    <TabsTab value="members">Members</TabsTab>
  </TabsList>

  <TabsPanel value="overview">Overview content</TabsPanel>
  <TabsPanel value="settings">Settings content</TabsPanel>
  <TabsPanel value="members">Members content</TabsPanel>
</Tabs>

// Controlled
const [tab, setTab] = useState('overview');
<Tabs value={tab} onChange={setTab} variant="pills">`,

		anchor: `<Anchor href="/docs">Documentation</Anchor>

// Underline variants
<Anchor href="/terms" underline="always">Terms of Service</Anchor>
<Anchor href="/about" underline="never">About</Anchor>

// Polymorphic — renders as Next.js Link
<Anchor component={Link} href="/blog" underline="hover">
  Read the blog
</Anchor>`,

		breadcrumbs: `<Breadcrumbs separator="/">
  <Anchor href="/">Home</Anchor>
  <Anchor href="/components">Components</Anchor>
  <span>Breadcrumbs</span>
</Breadcrumbs>

// Custom separator element
<Breadcrumbs separator={<ChevronRightIcon className="w-3 h-3 text-muted" />}>
  {crumbs.map((c) => (
    <Anchor key={c.href} href={c.href}>{c.label}</Anchor>
  ))}
</Breadcrumbs>`,

		'nav-link': `// Simple active link
<NavLink label="Dashboard" href="/dashboard" active variant="light" />

// With icon and description
<NavLink
  label="Settings"
  description="Account & preferences"
  leftSection={<SettingsIcon className="w-4 h-4" />}
  href="/settings"
/>

// Collapsible nested links
<NavLink label="Components" defaultOpened>
  <NavLink label="Buttons" href="/components/buttons" />
  <NavLink label="Inputs" href="/components/inputs" />
</NavLink>`,

		pagination: `<Pagination total={20} defaultValue={1} onChange={setPage} />

// With edge buttons, custom size and extra siblings
<Pagination
  total={50}
  value={currentPage}
  onChange={setCurrentPage}
  withEdges
  size="sm"
  siblings={2}
  boundaries={1}
/>`,

		stepper: `const [active, setActive] = useState(0);

<Stepper active={active} onStepClick={setActive}>
  <StepperStep label="Account" description="Create account">
    {/* Step 1 content */}
  </StepperStep>
  <StepperStep label="Profile" description="Set up profile">
    {/* Step 2 content */}
  </StepperStep>
  <StepperStep label="Confirm" description="Review & confirm">
    {/* Step 3 content */}
  </StepperStep>
  <StepperCompleted>
    <p>All steps complete!</p>
  </StepperCompleted>
</Stepper>

<Button onClick={() => setActive((a) => Math.min(3, a + 1))}>Next step</Button>`,

		'table-of-contents': `<TableOfContents
  links={[
    { value: 'intro', label: 'Introduction', order: 1 },
    { value: 'install', label: 'Installation', order: 1 },
    { value: 'basic', label: 'Basic usage', order: 2 },
    { value: 'advanced', label: 'Advanced', order: 2 },
    { value: 'api', label: 'API reference', order: 1 },
  ]}
  active={activeSection}
  onItemClick={({ value }) => {
    document.getElementById(value)?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(value);
  }}
/>`,

		overlay: `// Absolute overlay inside a relative container
<div style={{ position: 'relative' }}>
  <img src="/hero.jpg" alt="Hero" />
  <Overlay opacity={0.5} />
</div>

// With blur + click to dismiss
<Overlay
  opacity={0.7}
  blur={4}
  onClick={close}
/>`,

		modal: `const [opened, setOpened] = useState(false);

<Button onClick={() => setOpened(true)}>Open modal</Button>

<Modal
  opened={opened}
  onClose={() => setOpened(false)}
  title="Confirm deletion"
  size="sm"
  centered
>
  <ModalBody>
    <p>Are you sure? This action cannot be undone.</p>
  </ModalBody>
  <ModalFooter>
    <Button variant="subtle" onClick={() => setOpened(false)}>Cancel</Button>
    <Button variant="filled" onClick={handleDelete}>Delete</Button>
  </ModalFooter>
</Modal>`,

		drawer: `const [opened, setOpened] = useState(false);

<Button onClick={() => setOpened(true)}>Open drawer</Button>

<Drawer
  opened={opened}
  onClose={() => setOpened(false)}
  title="Settings"
  position="right"
  size="400px"
>
  {/* drawer content */}
</Drawer>`,

		tooltip: `// Basic
<Tooltip label="Save document" position="top">
  <ActionIcon><SaveIcon /></ActionIcon>
</Tooltip>

// With arrow and delay
<Tooltip label="More info" withArrow delay={300}>
  <Button variant="subtle">Hover me</Button>
</Tooltip>`,

		popover: `<Popover position="bottom-start">
  <PopoverTarget>
    <Button variant="outline">Options</Button>
  </PopoverTarget>
  <PopoverDropdown>
    <div className="p-3 space-y-2">
      <p className="font-medium">Filter results</p>
      <Select data={['All', 'Active', 'Archived']} />
    </div>
  </PopoverDropdown>
</Popover>`,

		'hover-card': `<HoverCard openDelay={200}>
  <HoverCardTarget>
    <Anchor href="/users/jane">@jane</Anchor>
  </HoverCardTarget>
  <HoverCardDropdown>
    <div className="p-4 w-60">
      <Avatar src="/jane.jpg" />
      <p className="font-semibold mt-2">Jane Doe</p>
      <p className="text-sm text-muted">Full-stack engineer</p>
    </div>
  </HoverCardDropdown>
</HoverCard>`,

		menu: `<Menu>
  <MenuTarget>
    <ActionIcon variant="subtle"><DotsIcon /></ActionIcon>
  </MenuTarget>
  <MenuDropdown>
    <MenuLabel>Post actions</MenuLabel>
    <MenuItem>Edit</MenuItem>
    <MenuItem>Duplicate</MenuItem>
    <MenuDivider />
    <MenuItem>Delete</MenuItem>
  </MenuDropdown>
</Menu>`,

		dialog: `const [opened, setOpened] = useState(false);

<Button onClick={() => setOpened(true)}>Show dialog</Button>

<Dialog
  opened={opened}
  onClose={() => setOpened(false)}
  title="Quick note"
  position={{ bottom: 20, right: 20 }}
>
  <p className="px-4 pb-4 text-sm">
    A compact floating panel, perfect for confirmations or mini-forms.
  </p>
</Dialog>`,

		text: `// Size and weight
<Text size="lg" fw={600}>Section heading</Text>
<Text size="sm" c="#6b7280">Muted description</Text>

// Truncate long content
<Text size="sm" truncate>A very long string that will be clipped...</Text>

// Clamp to N lines
<Text size="sm" lineClamp={3}>Multi-line content that stops at three lines.</Text>

// Polymorphic — renders as <span>
<Text span size="sm">inline snippet</Text>`,

		title: `<Title order={1}>Page heading</Title>
<Title order={2}>Section heading</Title>
<Title order={3}>Sub-section</Title>

// Override size / color
<Title order={2} size="1rem" c="#6366f1">
  Custom styled title
</Title>`,

		blockquote: `<Blockquote cite="— Albert Einstein">
  Imagination is more important than knowledge.
</Blockquote>

// With icon
<Blockquote icon={<QuoteIcon />} cite="— Marie Curie">
  Nothing in life is to be feared, it is only to be understood.
</Blockquote>`,

		code: `// Inline
<Text>Run <Code>npm install @kivora/react</Code> to get started.</Text>

// Block
<Code block>
  {dedent\`
    import { Button } from '@kivora/react';
    <Button variant="solid">Click me</Button>
  \`}
</Code>`,

		highlight: `// Single term
<Highlight highlight="Kivora">
  Kivora UI is a multi-framework component library.
</Highlight>

// Multiple terms with custom color
<Highlight
  highlight={['component', 'library']}
  highlightColor="#fef08a"
>
  A component library built for developer experience.
</Highlight>`,

		mark: `// Default brand highlight
<Text>
  Press <Mark>Ctrl+K</Mark> to open the command palette.
</Text>

// Custom color
<Mark color="#bbf7d0">custom green</Mark>`,

		accordion: `import { Accordion, AccordionItem, AccordionControl, AccordionPanel } from '@kivora/react';

<Accordion defaultValue="faq-1">
  <AccordionItem value="faq-1">
    <AccordionControl>¿Qué es Kivora UI?</AccordionControl>
    <AccordionPanel>Una librería multi-framework...</AccordionPanel>
  </AccordionItem>
  <AccordionItem value="faq-2">
    <AccordionControl>¿Es gratuita?</AccordionControl>
    <AccordionPanel>Sí, licencia MIT.</AccordionPanel>
  </AccordionItem>
</Accordion>

// Múltiple + variante
<Accordion multiple variant="separated">
  ...
</Accordion>`,

		table: `import { Table, Thead, Tbody, Tr, Th, Td } from '@kivora/react';

<Table striped highlightOnHover withTableBorder>
  <Thead>
    <Tr>
      <Th>Nombre</Th>
      <Th>Rol</Th>
      <Th>Estado</Th>
    </Tr>
  </Thead>
  <Tbody>
    {rows.map((row) => (
      <Tr key={row.id}>
        <Td>{row.name}</Td>
        <Td>{row.role}</Td>
        <Td>{row.status}</Td>
      </Tr>
    ))}
  </Tbody>
</Table>`,

		timeline: `import { Timeline, TimelineItem } from '@kivora/react';

<Timeline active={2}>
  <TimelineItem title="Instalación">
    <p>npm install @kivora/react</p>
  </TimelineItem>
  <TimelineItem title="Configurar" bullet={<CheckIcon />}>
    <p>Importa los estilos en tu layout.</p>
  </TimelineItem>
  <TimelineItem title="Desplegar" lineVariant="dashed">
    <p>¡Listo para producción!</p>
  </TimelineItem>
</Timeline>`,

		indicator: `import { Indicator } from '@kivora/react';

// Contador
<Indicator label="3" size={18} position="top-end">
  <Avatar>JD</Avatar>
</Indicator>

// Punto animado (en línea)
<Indicator dot processing size={10} position="top-end">
  <Button variant="outline">Mensajes</Button>
</Indicator>

// Deshabilitado
<Indicator disabled>
  <Avatar>AB</Avatar>
</Indicator>`,

		pill: `import { Pill } from '@kivora/react';

// Básica
<Pill>React</Pill>
<Pill size="lg">TypeScript</Pill>

// Con botón de eliminar
const [tags, setTags] = useState(['React', 'Vite']);
{tags.map((tag) => (
  <Pill
    key={tag}
    withRemoveButton
    onRemove={() => setTags((ts) => ts.filter((t) => t !== tag))}
  >
    {tag}
  </Pill>
))}`,

		kbd: `import { Kbd } from '@kivora/react';

// Atajo de teclado
<div className="flex gap-1 items-center">
  <Kbd>Ctrl</Kbd> + <Kbd>K</Kbd>
</div>

// Mac
<Kbd>⌘</Kbd> <Kbd>Shift</Kbd> <Kbd>P</Kbd>

// Tamaños
<Kbd size="xs">xs</Kbd>
<Kbd size="md">md</Kbd>
<Kbd size="xl">xl</Kbd>`,

		list: `import { List, ListItem } from '@kivora/react';

// Sin ordenar
<List withPadding spacing="0.25rem">
  <ListItem>React</ListItem>
  <ListItem>TypeScript</ListItem>
  <ListItem>Tailwind CSS</ListItem>
</List>

// Ordenada
<List type="ordered" size="sm">
  <ListItem>Instalar</ListItem>
  <ListItem>Configurar</ListItem>
</List>

// Con iconos personalizados
<List icon={<CheckIcon />} center>
  <ListItem>Paso completado</ListItem>
  <ListItem icon={<XIcon />}>Paso fallido</ListItem>
</List>`,

		'number-formatter': `import { NumberFormatter } from '@kivora/react';

// Miles y decimales
<NumberFormatter value={1234567.89} thousandSeparator decimalScale={2} fixedDecimalScale />
// → 1,234,567.89

// Moneda
<NumberFormatter value={9999.5} style="currency" currency="USD" />
// → $9,999.50

// Porcentaje
<NumberFormatter value={0.754} style="percent" decimalScale={1} fixedDecimalScale />
// → 75.4%

// Prefijo / sufijo
<NumberFormatter value={42} prefix="~" suffix=" km" />
// → ~42 km`,

		'ring-progress': `import { RingProgress } from '@kivora/react';

// Sencillo
<RingProgress
  sections={[{ value: 65, color: '#7c3aed' }]}
  size={120}
  thickness={12}
  label={<Text size="sm" fw={700} ta="center">65%</Text>}
/>

// Multi-sección
<RingProgress
  sections={[
    { value: 40, color: '#7c3aed' },
    { value: 25, color: '#06b6d4' },
    { value: 15, color: '#f59e0b' },
  ]}
  roundCaps
  size={100}
/>`,

		'semi-circle-progress': `import { SemiCircleProgress } from '@kivora/react';

// Básico
<SemiCircleProgress
  value={68}
  size={200}
  thickness={16}
  color="#7c3aed"
  label={<Text fw={700}>68%</Text>}
/>

// Gauge de velocidad
<SemiCircleProgress
  value={speed}
  size={240}
  thickness={20}
  color={speed > 80 ? '#ef4444' : '#10b981'}
  label={<Text size="xl" fw={700}>{speed}</Text>}
/>`,

		spoiler: `import { Spoiler } from '@kivora/react';

<Spoiler maxHeight={80} showLabel="Ver más" hideLabel="Ver menos">
  <p>
    Contenido largo que se recortará pasada la altura máxima.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit...
  </p>
</Spoiler>

// Expandido por defecto
<Spoiler maxHeight={100} initiallyExpanded>
  <p>Texto inicialmente visible.</p>
</Spoiler>`,

		'color-swatch': `import { ColorSwatch } from '@kivora/react';

// Paleta de colores
const colors = ['#7c3aed', '#06b6d4', '#10b981', '#f59e0b'];

<div className="flex gap-2">
  {colors.map((c) => (
    <ColorSwatch key={c} color={c} size={28} withShadow />
  ))}
</div>

// Cuadrado en lugar de círculo
<ColorSwatch color="#7c3aed" size={40} radius="6px" />

// Como botón seleccionable
<ColorSwatch
  color={selectedColor}
  component="button"
  onClick={() => setColor(selectedColor)}
/>`,
	};

	return snippets[id] ?? `import { ${id} } from '@kivora/react';`;
}
