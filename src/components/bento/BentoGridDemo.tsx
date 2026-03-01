'use client';

import { BentoCard } from './BentoCard';
import {
	BentoGrid,
	TileA,
	TileB,
	TileC,
	TileD,
	TileE,
	TileF,
} from './BentoGrid';

/* ── Helpers visuales ──────────────────────────────────────────────── */

function Stat({ value, label }: { value: string; label: string }) {
	return (
		<div className='flex flex-col items-center'>
			<span className='text-3xl font-black text-white'>{value}</span>
			<span className='text-xs text-neutral-500'>{label}</span>
		</div>
	);
}

function Pill({ children }: { children: React.ReactNode }) {
	return (
		<span className='rounded-full border border-violet-500/30 bg-violet-500/10 px-2.5 py-0.5 text-[11px] font-medium text-violet-400'>
			{children}
		</span>
	);
}

function Bubble({
	text,
	align = 'left',
}: {
	text: string;
	align?: 'left' | 'right';
}) {
	return (
		<div
			className={`flex ${align === 'right' ? 'justify-end' : 'justify-start'}`}>
			<span
				className={`max-w-[80%] rounded-2xl px-3 py-1.5 text-xs ${
					align === 'right'
						? 'bg-violet-600 text-white'
						: 'bg-neutral-800 text-neutral-200'
				}`}>
				{text}
			</span>
		</div>
	);
}

/* ── Demo ──────────────────────────────────────────────────────────── */

export function BentoGridDemo() {
	return (
		<div className='p-6 md:p-10'>
			<BentoGrid>
				{/* A · Hero con install + stats */}
				<TileA>
					<BentoCard
						dark
						title='@kivora/react'
						subtitle='Componentes UI y hooks para React 18+ / Next.js'
						className='bg-gradient-to-br from-neutral-950 to-neutral-900'>
						{/* Terminal */}
						<div className='mb-4 rounded-xl border border-violet-500/20 bg-violet-500/8 px-4 py-3 font-mono text-sm'>
							<span className='text-violet-400'>$ </span>
							<span className='text-neutral-200'>
								npm i @kivora/react
							</span>
						</div>
						{/* Stats */}
						<div className='flex items-center gap-8'>
							<Stat
								value='60+'
								label='Componentes'
							/>
							<div className='h-10 w-px bg-white/10' />
							<Stat
								value='80+'
								label='Hooks'
							/>
							<div className='h-10 w-px bg-white/10' />
							<Stat
								value='100%'
								label='TypeScript'
							/>
						</div>
						{/* Pills */}
						<div className='mt-4 flex flex-wrap gap-2'>
							{['React 18+', 'Next.js', 'Vite', 'CRA'].map(
								(t) => (
									<Pill key={t}>{t}</Pill>
								),
							)}
						</div>
					</BentoCard>
				</TileA>

				{/* B · Badges */}
				<TileB>
					<BentoCard
						dark
						title='Badge'
						subtitle='4 variantes listas para usar'>
						<div className='flex flex-wrap gap-2'>
							{[
								{
									label: 'filled',
									cls: 'bg-violet-600 text-white',
								},
								{
									label: 'light',
									cls: 'bg-violet-500/15 text-violet-400 border border-violet-500/20',
								},
								{
									label: 'outline',
									cls: 'border border-violet-400 text-violet-400',
								},
								{
									label: 'dot',
									cls: 'border border-neutral-700 text-neutral-300 pl-5 relative',
								},
							].map(({ label, cls }) => (
								<span
									key={label}
									className={`rounded-full px-3 py-1 text-xs font-semibold ${cls}`}>
									{label === 'dot' && (
										<span className='absolute left-2 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-green-400' />
									)}
									{label}
								</span>
							))}
						</div>
					</BentoCard>
				</TileB>

				{/* C · Progress */}
				<TileC>
					<BentoCard
						dark
						title='Progress'
						subtitle='Indicadores de métricas'>
						<div className='space-y-3'>
							{[
								{
									label: 'TypeScript',
									value: 100,
									color: '#818cf8',
								},
								{
									label: 'Accesibilidad',
									value: 87,
									color: '#34d399',
								},
								{
									label: 'Cobertura',
									value: 72,
									color: '#f59e0b',
								},
							].map(({ label, value, color }) => (
								<div key={label}>
									<div className='mb-1 flex justify-between text-[11px]'>
										<span className='text-neutral-300'>
											{label}
										</span>
										<span className='text-neutral-500'>
											{value}%
										</span>
									</div>
									<div className='h-1.5 w-full rounded-full bg-neutral-800'>
										<div
											className='h-1.5 rounded-full transition-all'
											style={{
												width: `${value}%`,
												background: color,
											}}
										/>
									</div>
								</div>
							))}
						</div>
					</BentoCard>
				</TileC>

				{/* D · Avatars */}
				<TileD>
					<BentoCard
						dark
						title='Avatar'
						subtitle='Equipo activo'>
						<div className='flex -space-x-2'>
							{[
								{ i: 'AK', c: '#818cf8' },
								{ i: 'MR', c: '#34d399' },
								{ i: 'LP', c: '#f472b6' },
								{ i: 'JD', c: '#fb923c' },
							].map(({ i, c }) => (
								<div
									key={i}
									className='flex h-9 w-9 items-center justify-center rounded-full border-2 border-neutral-900 text-xs font-bold'
									style={{ background: `${c}22`, color: c }}>
									{i}
								</div>
							))}
						</div>
						<p className='mt-3 text-xs text-neutral-500'>
							4 miembros activos
						</p>
					</BentoCard>
				</TileD>

				{/* E · Chat / toasts */}
				<TileE>
					<BentoCard
						dark
						title='Toaster'
						subtitle='Notificaciones en tiempo real'
						className='flex flex-col justify-between'>
						{/* Bubbles */}
						<div className='flex flex-col gap-2'>
							<Bubble text='¿Cómo configuro el provider?' />
							<Bubble
								text='Envuelve tu app con <KivoraProvider>'
								align='right'
							/>
							<Bubble text='¡Perfecto, gracias! 🚀' />
						</div>
						{/* Toasts */}
						<div className='mt-4 space-y-2'>
							{[
								{
									c: '#86efac',
									bg: 'rgba(134,239,172,0.10)',
									b: 'rgba(134,239,172,0.2)',
									msg: '¡Guardado!',
									sub: 'Cambios aplicados',
								},
								{
									c: '#fcd34d',
									bg: 'rgba(251,191,36,0.08)',
									b: 'rgba(251,191,36,0.2)',
									msg: 'Atención',
									sub: 'Revisa los campos',
								},
								{
									c: '#fca5a5',
									bg: 'rgba(252,165,165,0.08)',
									b: 'rgba(252,165,165,0.2)',
									msg: 'Error',
									sub: 'Intenta de nuevo',
								},
							].map(({ c, bg, b, msg, sub }) => (
								<div
									key={msg}
									className='flex items-start gap-2 rounded-xl border px-3 py-2'
									style={{ background: bg, borderColor: b }}>
									<span
										className='mt-1 h-2 w-2 shrink-0 rounded-full'
										style={{ background: c }}
									/>
									<div>
										<p
											className='text-xs font-semibold'
											style={{ color: c }}>
											{msg}
										</p>
										<p className='text-[10px] text-neutral-500'>
											{sub}
										</p>
									</div>
								</div>
							))}
						</div>
					</BentoCard>
				</TileE>

				{/* F · Buttons */}
				<TileF>
					<BentoCard
						dark
						title='Button'
						subtitle='Variantes y tamaños'>
						<div className='flex flex-wrap items-center gap-3'>
							<button className='rounded-xl bg-violet-600 px-4 py-2 text-sm font-semibold text-white hover:bg-violet-700'>
								solid
							</button>
							<button className='rounded-xl border border-violet-500 px-4 py-2 text-sm font-semibold text-violet-400 hover:bg-violet-500/10'>
								outline
							</button>
							<button className='rounded-xl bg-violet-500/10 px-4 py-2 text-sm font-semibold text-violet-400 hover:bg-violet-500/20'>
								subtle
							</button>
							<button className='rounded-xl px-4 py-2 text-sm font-semibold text-violet-400 hover:bg-violet-500/10'>
								ghost
							</button>
							<button className='text-sm font-semibold text-violet-400 underline underline-offset-4 hover:text-violet-300'>
								link
							</button>
						</div>
					</BentoCard>
				</TileF>
			</BentoGrid>
		</div>
	);
}
