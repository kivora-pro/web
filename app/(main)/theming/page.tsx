'use client';

import Navbar from '@/src/components/Navbar';
import { Code } from '@kivora/react';
import { useState } from 'react';

// ─────────────────────────────────────────────────────────────────────────────
// Data
// ─────────────────────────────────────────────────────────────────────────────

interface Token {
	variable: string;
	light: string;
	dark: string;
	description: string;
}

interface TokenGroup {
	title: string;
	tokens: Token[];
}

const TOKEN_GROUPS: TokenGroup[] = [
	{
		title: 'Brand',
		tokens: [
			{
				variable: '--color-brand',
				light: '#3b82f6',
				dark: '#3b82f6',
				description:
					'Primary brand colour used in interactive elements.',
			},
			{
				variable: '--color-brand-50',
				light: '#eff6ff',
				dark: '#eff6ff',
				description:
					'Lightest brand tint — backgrounds, subtle highlights.',
			},
			{
				variable: '--color-brand-100',
				light: '#dbeafe',
				dark: '#dbeafe',
				description: 'Very light brand tint.',
			},
			{
				variable: '--color-brand-200',
				light: '#bfdbfe',
				dark: '#bfdbfe',
				description: 'Light brand tint.',
			},
			{
				variable: '--color-brand-300',
				light: '#93c5fd',
				dark: '#93c5fd',
				description: 'Medium-light brand tint.',
			},
			{
				variable: '--color-brand-400',
				light: '#60a5fa',
				dark: '#60a5fa',
				description: 'Medium brand accent.',
			},
			{
				variable: '--color-brand-500',
				light: '#3b82f6',
				dark: '#3b82f6',
				description: 'Default brand colour — same as --color-brand.',
			},
			{
				variable: '--color-brand-600',
				light: '#2563eb',
				dark: '#2563eb',
				description: 'Darker brand shade for hover states.',
			},
			{
				variable: '--color-brand-700',
				light: '#1d4ed8',
				dark: '#1d4ed8',
				description: 'Dark brand shade.',
			},
			{
				variable: '--color-brand-800',
				light: '#1e40af',
				dark: '#1e40af',
				description: 'Very dark brand shade.',
			},
			{
				variable: '--color-brand-900',
				light: '#1e3a8a',
				dark: '#1e3a8a',
				description: 'Darkest brand shade.',
			},
		],
	},
	{
		title: 'Surface',
		tokens: [
			{
				variable: '--color-surface',
				light: '#ffffff',
				dark: '#0b1120',
				description: 'Base page / container background.',
			},
			{
				variable: '--color-surface-elevated',
				light: '#ffffff',
				dark: '#1e293b',
				description: 'Elevated containers: cards, modals, dropdowns.',
			},
			{
				variable: '--color-on-surface',
				light: '#0f172a',
				dark: '#f1f5f9',
				description: 'Default text colour on surfaces.',
			},
		],
	},
	{
		title: 'Neutral',
		tokens: [
			{
				variable: '--color-muted',
				light: '#94a3b8',
				dark: '#94a3b8',
				description: 'Secondary/placeholder text.',
			},
			{
				variable: '--color-border',
				light: '#e2e8f0',
				dark: '#334155',
				description: 'Separator lines and input borders.',
			},
		],
	},
	{
		title: 'Semantic',
		tokens: [
			{
				variable: '--color-success',
				light: '#22c55e',
				dark: '#22c55e',
				description: 'Positive actions and success states.',
			},
			{
				variable: '--color-success-400',
				light: '#4ade80',
				dark: '#4ade80',
				description: 'Light success accent.',
			},
			{
				variable: '--color-success-600',
				light: '#16a34a',
				dark: '#16a34a',
				description: 'Dark success shade.',
			},
			{
				variable: '--color-warning',
				light: '#f59e0b',
				dark: '#f59e0b',
				description: 'Warnings and cautionary states.',
			},
			{
				variable: '--color-warning-400',
				light: '#fbbf24',
				dark: '#fbbf24',
				description: 'Light warning accent.',
			},
			{
				variable: '--color-warning-600',
				light: '#d97706',
				dark: '#d97706',
				description: 'Dark warning shade.',
			},
			{
				variable: '--color-danger',
				light: '#ef4444',
				dark: '#ef4444',
				description: 'Destructive actions and error states.',
			},
			{
				variable: '--color-danger-400',
				light: '#f87171',
				dark: '#f87171',
				description: 'Light danger accent.',
			},
			{
				variable: '--color-danger-600',
				light: '#dc2626',
				dark: '#dc2626',
				description: 'Dark danger shade.',
			},
		],
	},
	{
		title: 'Typography',
		tokens: [
			{
				variable: '--font-sans',
				light: 'Inter, system-ui, -apple-system, sans-serif',
				dark: 'Inter, system-ui, -apple-system, sans-serif',
				description: 'Default sans-serif font stack.',
			},
		],
	},
];

const DARK_MODE_CODE = `/* Option 1 – class strategy (recommended) */
<html class="dark">

/* Option 2 – automatic (OS-level preference) */
/* No setup needed — Kivora respects prefers-color-scheme */

/* Force light mode even on a dark OS */
<html class="light">`;

const OVERRIDE_CODE = `/* In your global CSS, after importing Kivora styles */
:root {
  --color-brand: #8b5cf6;      /* change brand to violet */
  --color-brand-500: #8b5cf6;
  --color-brand-600: #7c3aed;
}

html.dark {
  --color-surface: #0d0d0d;    /* deeper dark background */
}`;

const TAILWIND_CODE = `/* tailwind.config.ts — expose Kivora tokens as Tailwind classes */
import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: 'var(--color-brand)',
        surface: 'var(--color-surface)',
        'surface-elevated': 'var(--color-surface-elevated)',
        'on-surface': 'var(--color-on-surface)',
        muted: 'var(--color-muted)',
        border: 'var(--color-border)',
      },
    },
  },
} satisfies Config;`;

const IMPORT_CODE = `/* In your root layout or entry file */
import '@kivora/react/styles.css';`;

// ─────────────────────────────────────────────────────────────────────────────
// Color swatch
// ─────────────────────────────────────────────────────────────────────────────
function Swatch({ color }: { color: string }) {
	const isText = color.includes(',') || color.includes('system');
	if (isText) return null;
	return (
		<span
			className='inline-block w-4 h-4 rounded-sm border border-white/20 shrink-0'
			style={{ background: color }}
		/>
	);
}

// ─────────────────────────────────────────────────────────────────────────────
// Page
// ─────────────────────────────────────────────────────────────────────────────

export default function ThemingPage() {
	const [activeGroup, setActiveGroup] = useState(TOKEN_GROUPS[0].title);
	const [mode, setMode] = useState<'light' | 'dark'>('dark');

	const currentGroup = TOKEN_GROUPS.find((g) => g.title === activeGroup)!;

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
						Token groups
					</p>
					{TOKEN_GROUPS.map((g) => (
						<button
							key={g.title}
							onClick={() => setActiveGroup(g.title)}
							className={`flex items-center gap-2 px-4 py-1.5 text-sm text-left w-full transition-colors ${
								activeGroup === g.title
									? 'text-violet-400 bg-violet-500/10'
									: 'text-zinc-400 hover:text-zinc-200 hover:bg-white/5'
							}`}>
							{g.title}
							<span className='ml-auto text-[10px] text-zinc-600'>
								{g.tokens.length}
							</span>
						</button>
					))}
					<div className='mt-6 px-4 border-t border-white/6 pt-4'>
						<p className='text-[10px] font-semibold uppercase tracking-widest text-zinc-600 mb-3'>
							Quick links
						</p>
						{['Setup', 'Dark mode', 'Overriding', 'Tailwind'].map(
							(s) => (
								<a
									key={s}
									href={`#${s.toLowerCase().replace(' ', '-')}`}
									className='block text-xs text-zinc-500 hover:text-zinc-300 py-1 transition-colors'>
									{s}
								</a>
							),
						)}
					</div>
				</aside>

				{/* Main */}
				<main className='flex-1 md:ml-52 pb-24'>
					{/* Hero */}
					<div className='px-6 md:px-10 pt-12 pb-8 border-b border-white/6'>
						<div
							className='inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold tracking-widest uppercase mb-5 border border-white/10 text-zinc-400'
							style={{ background: 'rgba(255,255,255,0.04)' }}>
							Theming
						</div>
						<h1 className='text-3xl md:text-4xl font-bold text-white mb-3 leading-tight'>
							Design tokens &amp;
							<br />
							<span
								className='bg-clip-text text-transparent'
								style={{
									backgroundImage:
										'linear-gradient(135deg, #7c3aed, #06b6d4)',
								}}>
								CSS variables
							</span>
						</h1>
						<p className='text-zinc-400 text-base max-w-2xl'>
							Kivora exposes every visual decision as a CSS custom
							property. Override any token in your global
							stylesheet to adapt the library to your brand — no
							build step required.
						</p>
					</div>

					<div className='px-6 md:px-10 space-y-14 pt-10'>
						{/* Setup */}
						<section id='setup'>
							<h2 className='text-lg font-semibold text-zinc-200 mb-4'>
								Setup
							</h2>
							<p className='text-sm text-zinc-500 mb-4'>
								Import the compiled stylesheet once in your
								entry file. All CSS variables and component
								styles are included.
							</p>
							<Code
								block
								showLineNumbers
								copyable
								language='typescript'>
								{IMPORT_CODE}
							</Code>
						</section>

						{/* Token table */}
						<section>
							<div className='flex items-center justify-between mb-4'>
								<h2 className='text-lg font-semibold text-zinc-200'>
									{activeGroup} tokens
								</h2>
								<div
									className='flex items-center gap-1 p-0.5 rounded-lg border border-white/10'
									style={{
										background: 'rgba(255,255,255,0.04)',
									}}>
									{(['light', 'dark'] as const).map((m) => (
										<button
											key={m}
											onClick={() => setMode(m)}
											className={`px-3 py-1 rounded-md text-xs font-medium transition-colors capitalize ${
												mode === m
													? 'bg-white/10 text-zinc-200'
													: 'text-zinc-600 hover:text-zinc-400'
											}`}>
											{m}
										</button>
									))}
								</div>
							</div>
							<div
								className='rounded-xl border border-white/8 overflow-hidden'
								style={{
									background: 'rgba(255,255,255,0.02)',
								}}>
								<table className='w-full text-sm'>
									<thead>
										<tr className='border-b border-white/6'>
											<th className='text-left px-4 py-3 text-[10px] font-semibold uppercase tracking-widest text-zinc-600'>
												Variable
											</th>
											<th className='text-left px-4 py-3 text-[10px] font-semibold uppercase tracking-widest text-zinc-600'>
												Value ({mode})
											</th>
											<th className='hidden md:table-cell text-left px-4 py-3 text-[10px] font-semibold uppercase tracking-widest text-zinc-600'>
												Description
											</th>
										</tr>
									</thead>
									<tbody>
										{currentGroup.tokens.map((t, i) => (
											<tr
												key={t.variable}
												className={`border-b border-white/4 last:border-0 ${i % 2 === 0 ? '' : 'bg-white/[0.01]'}`}>
												<td className='px-4 py-3'>
													<code className='text-xs text-violet-300 font-mono'>
														{t.variable}
													</code>
												</td>
												<td className='px-4 py-3'>
													<div className='flex items-center gap-2'>
														<Swatch
															color={
																mode === 'light'
																	? t.light
																	: t.dark
															}
														/>
														<code className='text-xs text-cyan-300 font-mono'>
															{mode === 'light'
																? t.light
																: t.dark}
														</code>
													</div>
												</td>
												<td className='hidden md:table-cell px-4 py-3 text-xs text-zinc-500'>
													{t.description}
												</td>
											</tr>
										))}
									</tbody>
								</table>
							</div>
						</section>

						{/* Dark mode */}
						<section id='dark-mode'>
							<h2 className='text-lg font-semibold text-zinc-200 mb-2'>
								Dark mode
							</h2>
							<p className='text-sm text-zinc-500 mb-4'>
								Kivora ships with both class-based and
								media-query-based dark mode out of the box. No
								configuration required for automatic OS-level
								dark mode.
							</p>
							<Code
								block
								showLineNumbers
								copyable
								language='html'>
								{DARK_MODE_CODE}
							</Code>
							{/* Visual demo */}
							<div className='grid grid-cols-2 gap-4 mt-6'>
								{(['light', 'dark'] as const).map((m) => (
									<div
										key={m}
										className='rounded-xl p-5 border border-white/8'
										style={{
											background:
												m === 'dark'
													? '#0b1120'
													: '#ffffff',
											color:
												m === 'dark'
													? '#f1f5f9'
													: '#0f172a',
										}}>
										<p
											className='text-[10px] font-semibold uppercase tracking-widest mb-3'
											style={{
												color:
													m === 'dark'
														? '#94a3b8'
														: '#64748b',
											}}>
											{m === 'dark'
												? '🌙 Dark'
												: '☀️ Light'}
										</p>
										<div
											className='h-2 rounded-full mb-2'
											style={{ background: '#3b82f6' }}
										/>
										<div
											className='h-1.5 rounded-full mb-1 w-3/4'
											style={{
												background:
													m === 'dark'
														? '#334155'
														: '#e2e8f0',
											}}
										/>
										<div
											className='h-1.5 rounded-full w-1/2'
											style={{
												background:
													m === 'dark'
														? '#334155'
														: '#e2e8f0',
											}}
										/>
									</div>
								))}
							</div>
						</section>

						{/* Overriding */}
						<section id='overriding'>
							<h2 className='text-lg font-semibold text-zinc-200 mb-2'>
								Overriding tokens
							</h2>
							<p className='text-sm text-zinc-500 mb-4'>
								Redefine any CSS variable in your own stylesheet
								after importing Kivora&#39;s styles. All
								component styles will automatically pick up your
								values.
							</p>
							<Code
								block
								showLineNumbers
								copyable
								language='css'>
								{OVERRIDE_CODE}
							</Code>
						</section>

						{/* Tailwind */}
						<section id='tailwind'>
							<h2 className='text-lg font-semibold text-zinc-200 mb-2'>
								Using tokens with Tailwind
							</h2>
							<p className='text-sm text-zinc-500 mb-4'>
								Map Kivora CSS variables to Tailwind theme
								tokens so you can use them as utility classes
								like{' '}
								<code className='text-violet-400 font-mono text-xs'>
									bg-surface
								</code>{' '}
								or{' '}
								<code className='text-violet-400 font-mono text-xs'>
									text-brand
								</code>
								.
							</p>
							<Code
								block
								showLineNumbers
								copyable
								language='typescript'>
								{TAILWIND_CODE}
							</Code>
						</section>
					</div>
				</main>
			</div>
		</div>
	);
}
