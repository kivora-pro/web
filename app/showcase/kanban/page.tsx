'use client';

import {
	Avatar,
	Badge,
	Button,
	Checkbox,
	Modal,
	ModalBody,
	ModalFooter,
	Progress,
	Select,
	Stepper,
	StepperCompleted,
	StepperStep,
	Tabs,
	TabsList,
	TabsPanel,
	TabsTab,
	Textarea,
	TextInput,
	Timeline,
	TimelineItem,
} from '@kivora/react';
import { useState } from 'react';

// ── Types & Data ──────────────────────────────────────────────────────────────

type Priority = 'critical' | 'high' | 'medium' | 'low';
type ColumnId = 'todo' | 'progress' | 'review' | 'done';

interface Task {
	id: number;
	title: string;
	desc: string;
	priority: Priority;
	assignee: string;
	initials: string;
	avatarColor: string;
	progress?: number;
	tags: string[];
	done: boolean;
}

interface Column {
	id: ColumnId;
	label: string;
	accent: string;
	dotColor: string;
	tasks: Task[];
}

const PRIORITY_MAP: Record<Priority, { label: string; color: string }> = {
	critical: { label: 'Crítico', color: 'red' },
	high: { label: 'Alta', color: 'orange' },
	medium: { label: 'Media', color: 'yellow' },
	low: { label: 'Baja', color: 'gray' },
};

const INITIAL_COLUMNS: Column[] = [
	{
		id: 'todo',
		label: 'Por hacer',
		accent: 'border-t-zinc-600',
		dotColor: 'bg-zinc-500',
		tasks: [
			{
				id: 1,
				title: 'Rediseñar pantalla de login',
				desc: 'Ajustar tipografía y espaciado según el DS v3.',
				priority: 'high',
				assignee: 'Elena Prado',
				initials: 'EP',
				avatarColor: 'bg-violet-500',
				tags: ['Design', 'Auth'],
				done: false,
			},
			{
				id: 2,
				title: 'Implementar dark mode',
				desc: 'Soporte de tema oscuro con CSS variables.',
				priority: 'medium',
				assignee: 'Carlos Méndez',
				initials: 'CM',
				avatarColor: 'bg-sky-500',
				tags: ['Frontend'],
				done: false,
			},
			{
				id: 3,
				title: 'Rate limiting en API',
				desc: 'Proteger endpoints con límite por IP.',
				priority: 'critical',
				assignee: 'Sofía Torres',
				initials: 'ST',
				avatarColor: 'bg-emerald-500',
				tags: ['Backend', 'Security'],
				done: false,
			},
		],
	},
	{
		id: 'progress',
		label: 'En progreso',
		accent: 'border-t-brand',
		dotColor: 'bg-brand',
		tasks: [
			{
				id: 4,
				title: 'Componente de tabla paginada',
				desc: 'Ordenación, filtros y virtualization.',
				priority: 'high',
				assignee: 'Javier Castro',
				initials: 'JC',
				avatarColor: 'bg-amber-500',
				tags: ['Component'],
				progress: 60,
				done: false,
			},
			{
				id: 5,
				title: 'Pipeline CI/CD en GitHub Actions',
				desc: 'Tests + lint + deploy automático.',
				priority: 'medium',
				assignee: 'Ana Ruiz',
				initials: 'AR',
				avatarColor: 'bg-rose-500',
				tags: ['DevOps'],
				progress: 35,
				done: false,
			},
		],
	},
	{
		id: 'review',
		label: 'Revisión',
		accent: 'border-t-amber-500',
		dotColor: 'bg-amber-500',
		tasks: [
			{
				id: 6,
				title: 'Animaciones de transición',
				desc: 'Revisar que no haya jank en móvil.',
				priority: 'low',
				assignee: 'Miguel Ángel',
				initials: 'MA',
				avatarColor: 'bg-indigo-500',
				tags: ['Animation', 'QA'],
				progress: 90,
				done: false,
			},
			{
				id: 7,
				title: 'Documentar API de hooks',
				desc: 'Ejemplos y props para la web de docs.',
				priority: 'medium',
				assignee: 'Lucía Vargas',
				initials: 'LV',
				avatarColor: 'bg-teal-500',
				tags: ['Docs'],
				progress: 80,
				done: false,
			},
		],
	},
	{
		id: 'done',
		label: 'Completado',
		accent: 'border-t-green-500',
		dotColor: 'bg-green-500',
		tasks: [
			{
				id: 8,
				title: 'Setup inicial del monorepo',
				desc: 'Turborepo + pnpm workspaces.',
				priority: 'high',
				assignee: 'Sofía Torres',
				initials: 'ST',
				avatarColor: 'bg-emerald-500',
				tags: ['DevOps'],
				done: true,
			},
			{
				id: 9,
				title: 'Sistema de tokens de diseño',
				desc: 'Paleta, radios, sombras y tipografía.',
				priority: 'high',
				assignee: 'Elena Prado',
				initials: 'EP',
				avatarColor: 'bg-violet-500',
				tags: ['Design System'],
				done: true,
			},
		],
	},
];

const ACTIVITY = [
	{
		who: 'Javier Castro',
		action: 'movió',
		target: 'Componente de tabla paginada',
		from: 'En progreso',
		time: 'hace 5 min',
	},
	{
		who: 'Ana Ruiz',
		action: 'comentó en',
		target: 'Pipeline CI/CD',
		from: '',
		time: 'hace 22 min',
	},
	{
		who: 'Sofía Torres',
		action: 'cerró',
		target: 'Setup inicial del monorepo',
		from: '',
		time: 'hace 1 h',
	},
	{
		who: 'Miguel Ángel',
		action: 'abrió revisión de',
		target: 'Animaciones de transición',
		from: '',
		time: 'hace 2 h',
	},
	{
		who: 'Lucía Vargas',
		action: 'asignó',
		target: 'Documentar API de hooks',
		from: 'a sí misma',
		time: 'ayer',
	},
];

// ── Component ─────────────────────────────────────────────────────────────────

export default function KanbanPage() {
	const [columns, setColumns] = useState(INITIAL_COLUMNS);
	const [sprintStep, setSprintStep] = useState(1);
	const [search, setSearch] = useState('');
	const [dragging, setDragging] = useState<{
		taskId: number;
		fromCol: ColumnId;
	} | null>(null);
	const [dragOver, setDragOver] = useState<ColumnId | null>(null);

	// ── Add task modal ────────────────────────────────────────────────────────
	const BLANK_FORM = {
		title: '',
		desc: '',
		priority: 'medium' as Priority,
		tagsRaw: '',
	};
	const [modalOpen, setModalOpen] = useState(false);
	const [modalColId, setModalColId] = useState<ColumnId>('todo');
	const [form, setForm] = useState(BLANK_FORM);

	function openModal(colId: ColumnId) {
		setModalColId(colId);
		setForm(BLANK_FORM);
		setModalOpen(true);
	}

	function addTask() {
		if (!form.title.trim()) return;
		const newTask: Task = {
			id: Date.now(),
			title: form.title.trim(),
			desc: form.desc.trim(),
			priority: form.priority,
			assignee: 'Tú',
			initials: 'TÚ',
			avatarColor: 'bg-brand',
			tags: form.tagsRaw
				.split(',')
				.map((t) => t.trim())
				.filter(Boolean),
			done: modalColId === 'done',
		};
		setColumns((prev) =>
			prev.map((col) =>
				col.id === modalColId
					? { ...col, tasks: [...col.tasks, newTask] }
					: col,
			),
		);
		setModalOpen(false);
	}

	function handleDragStart(
		taskId: number,
		fromCol: ColumnId,
		e: React.DragEvent,
	) {
		e.dataTransfer.effectAllowed = 'move';
		setDragging({ taskId, fromCol });
	}

	function handleDragEnd() {
		setDragging(null);
		setDragOver(null);
	}

	function handleDragOver(e: React.DragEvent, colId: ColumnId) {
		e.preventDefault();
		e.dataTransfer.dropEffect = 'move';
		if (dragOver !== colId) setDragOver(colId);
	}

	function handleDragLeave(e: React.DragEvent<HTMLDivElement>) {
		// Only clear if leaving the column entirely (not entering a child)
		if (!e.currentTarget.contains(e.relatedTarget as Node)) {
			setDragOver(null);
		}
	}

	function handleDrop(toColId: ColumnId) {
		if (!dragging) return;
		const { taskId, fromCol } = dragging;
		setDragging(null);
		setDragOver(null);
		if (fromCol === toColId) return;
		setColumns((prev) => {
			let task: Task | undefined;
			const removed = prev.map((col) => {
				if (col.id === fromCol) {
					task = col.tasks.find((t) => t.id === taskId);
					return {
						...col,
						tasks: col.tasks.filter((t) => t.id !== taskId),
					};
				}
				return col;
			});
			if (!task) return prev;
			return removed.map((col) =>
				col.id === toColId
					? {
							...col,
							tasks: [
								...col.tasks,
								{ ...task!, done: toColId === 'done' },
							],
						}
					: col,
			);
		});
	}

	function toggleDone(colId: ColumnId, taskId: number) {
		setColumns((prev) =>
			prev.map((col) =>
				col.id === colId
					? {
							...col,
							tasks: col.tasks.map((t) =>
								t.id === taskId ? { ...t, done: !t.done } : t,
							),
						}
					: col,
			),
		);
	}

	const totalTasks = columns.flatMap((c) => c.tasks).length;
	const doneTasks = columns
		.flatMap((c) => c.tasks)
		.filter((t) => t.done).length;
	const sprintProgress = Math.round((doneTasks / totalTasks) * 100);

	return (
		<div className='min-h-screen bg-[#0a0a12] pt-10'>
			{/* Header */}
			<div className='border-b border-white/8 bg-[#07070f] px-6 py-4'>
				<div className='flex items-start justify-between'>
					<div>
						<p className='mb-0.5 text-xs text-zinc-500'>
							Sprint 4 · 28 feb – 14 mar 2026
						</p>
						<h1 className='text-xl font-bold text-white'>
							Tablero del equipo
						</h1>
					</div>
					<div className='flex items-center gap-2'>
						<TextInput
							placeholder='Buscar tarea…'
							value={search}
							onChange={(e) => setSearch(e.target.value)}
							size='sm'
							className='w-52'
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
						<div className='w-36'>
							<Select
								placeholder='Prioridad'
								size='sm'
								clearable
								data={[
									{ value: 'critical', label: 'Crítica' },
									{ value: 'high', label: 'Alta' },
									{ value: 'medium', label: 'Media' },
									{ value: 'low', label: 'Baja' },
								]}
							/>
						</div>
						<Button
							size='sm'
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
							}
							onClick={() => openModal('todo')}>
							Nueva tarea
						</Button>
					</div>
				</div>

				{/* Sprint progress bar */}
				<div className='mt-4 flex items-center gap-4'>
					<div className='flex-1'>
						<div className='mb-1 flex items-center justify-between'>
							<span className='text-[10px] text-zinc-500'>
								Progreso del sprint
							</span>
							<span className='text-[10px] font-medium text-zinc-400'>
								{doneTasks}/{totalTasks} tareas
							</span>
						</div>
						<Progress
							value={sprintProgress}
							size='xs'
						/>
					</div>
					<span className='text-xs font-bold text-white'>
						{sprintProgress}%
					</span>
				</div>
			</div>

			<div className='px-6 py-5'>
				<Tabs defaultValue='board'>
					<TabsList className='mb-6'>
						<TabsTab value='board'>Tablero</TabsTab>
						<TabsTab value='sprint'>Sprint</TabsTab>
						<TabsTab value='activity'>Actividad</TabsTab>
					</TabsList>

					{/* ── Board ── */}
					<TabsPanel value='board'>
						{dragging && (
							<p className='mb-3 text-center text-xs text-zinc-500'>
								Suelta la tarjeta en una columna para moverla
							</p>
						)}
						<div className='grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4'>
							{columns.map((col) => {
								const visible = col.tasks.filter(
									(t) =>
										!search ||
										t.title
											.toLowerCase()
											.includes(search.toLowerCase()),
								);
								const isOver = dragOver === col.id;
								const canDrop =
									dragging && dragging.fromCol !== col.id;
								return (
									<div
										key={col.id}
										onDragOver={(e) =>
											handleDragOver(e, col.id)
										}
										onDragLeave={handleDragLeave}
										onDrop={() => handleDrop(col.id)}
										className={`flex flex-col gap-3 rounded-xl transition-all duration-150 ${
											isOver && canDrop
												? 'bg-white/4 ring-1 ring-white/20'
												: ''
										}`}>
										{/* Column header */}
										<div
											className={`rounded-t-xl border-t-2 bg-white/2 border border-white/8 px-4 py-3 ${col.accent}`}>
											<div className='flex items-center justify-between'>
												<div className='flex items-center gap-2'>
													<span
														className={`h-2 w-2 rounded-full ${col.dotColor}`}
													/>
													<span className='text-sm font-semibold text-white'>
														{col.label}
													</span>
												</div>
												<Badge
													size='xs'
													variant='light'
													color='gray'>
													{visible.length}
												</Badge>
											</div>
										</div>

										{/* Tasks */}
										<div className='flex flex-col gap-2'>
											{visible.map((task) => {
												const p =
													PRIORITY_MAP[task.priority];
												const isDraggingThis =
													dragging?.taskId ===
													task.id;
												return (
													<div
														key={task.id}
														draggable
														onDragStart={(e) =>
															handleDragStart(
																task.id,
																col.id,
																e,
															)
														}
														onDragEnd={
															handleDragEnd
														}
														className={`cursor-grab active:cursor-grabbing rounded-xl border border-white/8 bg-white/2 p-4 transition-all duration-150 select-none ${
															isDraggingThis
																? 'opacity-30 scale-95 shadow-none'
																: 'hover:border-white/20 hover:bg-white/4'
														} ${task.done && !isDraggingThis ? 'opacity-50' : ''}`}>
														<div className='mb-2 flex items-start gap-2'>
															<Checkbox
																size='xs'
																checked={
																	task.done
																}
																onChange={() =>
																	toggleDone(
																		col.id,
																		task.id,
																	)
																}
																className='mt-0.5 shrink-0'
															/>
															<p
																className={`text-sm font-medium leading-tight ${task.done ? 'text-zinc-500 line-through' : 'text-white'}`}>
																{task.title}
															</p>
														</div>
														<p className='mb-3 pl-5 text-xs leading-relaxed text-zinc-500'>
															{task.desc}
														</p>

														{task.progress !==
															undefined && (
															<div className='mb-3 pl-5'>
																<Progress
																	value={
																		task.progress
																	}
																	size='xs'
																/>
																<p className='mt-1 text-[10px] text-zinc-600'>
																	{
																		task.progress
																	}
																	% completado
																</p>
															</div>
														)}

														<div className='ml-5 flex flex-wrap gap-1'>
															{task.tags.map(
																(tag) => (
																	<span
																		key={
																			tag
																		}
																		className='rounded-full bg-white/4 px-2 py-0.5 text-[10px] text-zinc-400'>
																		{tag}
																	</span>
																),
															)}
														</div>

														<div className='mt-3 flex items-center justify-between pl-5'>
															<Badge
																size='xs'
																color={
																	p.color as any
																}
																variant='light'>
																{p.label}
															</Badge>
															<Avatar
																size='xs'
																alt={
																	task.assignee
																}>
																{task.initials}
															</Avatar>
														</div>
													</div>
												);
											})}

											{/* Add task */}
											<button
												onClick={() =>
													openModal(col.id)
												}
												className='flex w-full items-center gap-2 rounded-xl border border-dashed border-white/8 px-4 py-3 text-xs text-zinc-600 transition-colors hover:border-white/20 hover:text-zinc-400'>
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
												Añadir tarea
											</button>
										</div>
									</div>
								);
							})}
						</div>
					</TabsPanel>

					{/* ── Sprint ── */}
					<TabsPanel value='sprint'>
						<div className='mx-auto max-w-xl py-4'>
							<Stepper
								active={sprintStep}
								onStepClick={setSprintStep}>
								<StepperStep
									label='Planificación'
									description='Sprints definidos y estimados'>
									<p className='text-sm text-zinc-400'>
										El equipo ha definido y estimado todas
										las tareas del sprint. Velocidad
										objetivo:{' '}
										<strong className='text-white'>
											42 puntos
										</strong>
										.
									</p>
								</StepperStep>
								<StepperStep
									label='Desarrollo'
									description='Tareas en progreso'>
									<p className='text-sm text-zinc-400'>
										{doneTasks} de {totalTasks} tareas
										completadas. Quedan{' '}
										<strong className='text-white'>
											{totalTasks - doneTasks}
										</strong>{' '}
										por cerrar.
									</p>
									<Progress
										value={sprintProgress}
										className='mt-3'
									/>
								</StepperStep>
								<StepperStep
									label='QA & Revisión'
									description='Code review y pruebas'>
									<p className='text-sm text-zinc-400'>
										2 tareas pendientes de revisión por
										parte del equipo de QA.
									</p>
								</StepperStep>
								<StepperStep
									label='Demo & Release'
									description='Presentación al cliente'>
									<p className='text-sm text-zinc-400'>
										Demo programada para el{' '}
										<strong className='text-white'>
											14 mar
										</strong>
										. Release en producción una vez
										aprobada.
									</p>
								</StepperStep>
								<StepperCompleted>
									<p className='text-center text-sm text-zinc-400'>
										¡Sprint completado! 🎉 Todos los
										objetivos alcanzados.
									</p>
								</StepperCompleted>
							</Stepper>

							<div className='mt-6 flex justify-between'>
								<Button
									variant='outline'
									size='sm'
									disabled={sprintStep === 0}
									onClick={() =>
										setSprintStep((s) => Math.max(0, s - 1))
									}>
									Atrás
								</Button>
								<Button
									size='sm'
									disabled={sprintStep === 4}
									onClick={() =>
										setSprintStep((s) => Math.min(4, s + 1))
									}>
									{sprintStep === 3
										? 'Finalizar sprint'
										: 'Siguiente etapa'}
								</Button>
							</div>
						</div>
					</TabsPanel>

					{/* ── Activity ── */}
					<TabsPanel value='activity'>
						<div className='mx-auto max-w-xl py-4'>
							<Timeline>
								{ACTIVITY.map((ev, i) => (
									<TimelineItem
										key={i}
										title={
											<span className='text-sm text-white'>
												<strong>{ev.who}</strong>{' '}
												{ev.action}{' '}
												<em className='not-italic text-zinc-300'>
													{ev.target}
												</em>
												{ev.from && (
													<span className='text-zinc-500'>
														{' '}
														{ev.from}
													</span>
												)}
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

			{/* ── Add task modal ─────────────────────────────────── */}
			<Modal
				opened={modalOpen}
				onClose={() => setModalOpen(false)}
				title='Nueva tarea'
				size='md'
				centered>
				<ModalBody className='flex flex-col gap-4'>
					<TextInput
						label='Título'
						placeholder='Ej. Revisar pull request…'
						required
						value={form.title}
						onChange={(e) =>
							setForm((f) => ({ ...f, title: e.target.value }))
						}
					/>
					<Textarea
						label='Descripción'
						placeholder='Contexto o detalles de la tarea…'
						rows={3}
						value={form.desc}
						onChange={(e) =>
							setForm((f) => ({ ...f, desc: e.target.value }))
						}
					/>
					<div className='grid grid-cols-2 gap-3'>
						<Select
							label='Prioridad'
							value={form.priority}
							onChange={(v) =>
								setForm((f) => ({
									...f,
									priority: (v ?? 'medium') as Priority,
								}))
							}
							data={[
								{ value: 'critical', label: '🔴 Crítica' },
								{ value: 'high', label: '🟠 Alta' },
								{ value: 'medium', label: '🟡 Media' },
								{ value: 'low', label: '⚪ Baja' },
							]}
						/>
						<Select
							label='Columna'
							value={modalColId}
							onChange={(v) =>
								setModalColId((v ?? 'todo') as ColumnId)
							}
							data={[
								{ value: 'todo', label: 'Por hacer' },
								{ value: 'progress', label: 'En progreso' },
								{ value: 'review', label: 'Revisión' },
								{ value: 'done', label: 'Completado' },
							]}
						/>
					</div>
					<TextInput
						label='Etiquetas'
						placeholder='Design, Backend, QA…'
						description='Separadas por comas'
						value={form.tagsRaw}
						onChange={(e) =>
							setForm((f) => ({ ...f, tagsRaw: e.target.value }))
						}
					/>
				</ModalBody>
				<ModalFooter>
					<Button
						variant='ghost'
						onClick={() => setModalOpen(false)}>
						Cancelar
					</Button>
					<Button
						disabled={!form.title.trim()}
						onClick={addTask}>
						Añadir tarea
					</Button>
				</ModalFooter>
			</Modal>
		</div>
	);
}
