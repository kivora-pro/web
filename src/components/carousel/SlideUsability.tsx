'use client';

import { Code } from '@kivora/react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

const LOGIN_CODE = `import { Button, Stack, TextInput } from '@kivora/react';

export function LoginForm() {
  return (
    <Stack gap="md">
      <TextInput
        label="Email"
        placeholder="tu@email.com"
      />
      <TextInput
        label="Contrasena"
        type="password"
      />
      <Button>Entrar</Button>
    </Stack>
  );
}`;

function CodeBlock() {
	return (
		<Code
			block
			language='tsx'
			copyable
			showLineNumbers
			className='rounded-2xl'
			highlighterProps={{
				customStyle: {
					fontSize: '0.8rem',
					paddingTop: '1.75rem',
					paddingBottom: '1rem',
				},
			}}>
			{LOGIN_CODE}
		</Code>
	);
}

/* SVG Icons */
const IconPerformance = () => (
	<svg
		viewBox='0 0 24 24'
		className='h-5 w-5'
		fill='none'
		stroke='#a78bfa'
		strokeWidth='1.8'
		strokeLinecap='round'
		strokeLinejoin='round'>
		<path d='M13 2L3 14h9l-1 8 10-12h-9l1-8z' />
	</svg>
);
const IconA11y = () => (
	<svg
		viewBox='0 0 24 24'
		className='h-5 w-5'
		fill='none'
		stroke='#34d399'
		strokeWidth='1.8'
		strokeLinecap='round'
		strokeLinejoin='round'>
		<circle
			cx='12'
			cy='5'
			r='1.5'
		/>
		<path d='M5 9l7 1 7-1M12 10v5l-3 4M12 15l3 4' />
	</svg>
);
const IconTheme = () => (
	<svg
		viewBox='0 0 24 24'
		className='h-5 w-5'
		fill='none'
		stroke='#f472b6'
		strokeWidth='1.8'
		strokeLinecap='round'
		strokeLinejoin='round'>
		<circle
			cx='12'
			cy='12'
			r='9'
		/>
		<path d='M12 3a9 9 0 0 1 6.364 15.364C16.343 20.385 14.314 21 12 21c-2.485 0-4-1.5-4-3 0-2 2-3 2-5s-2-2-2-4a9 9 0 0 1 4-7.937' />
	</svg>
);
const IconCompose = () => (
	<svg
		viewBox='0 0 24 24'
		className='h-5 w-5'
		fill='none'
		stroke='#fbbf24'
		strokeWidth='1.8'
		strokeLinecap='round'
		strokeLinejoin='round'>
		<rect
			x='3'
			y='3'
			width='8'
			height='8'
			rx='1.5'
		/>
		<rect
			x='13'
			y='3'
			width='8'
			height='8'
			rx='1.5'
		/>
		<rect
			x='3'
			y='13'
			width='8'
			height='8'
			rx='1.5'
		/>
		<rect
			x='13'
			y='13'
			width='8'
			height='8'
			rx='1.5'
		/>
	</svg>
);

const icons = [IconPerformance, IconA11y, IconTheme, IconCompose];
const iconBgs = [
	'rgba(167,139,250,0.10)',
	'rgba(52,211,153,0.10)',
	'rgba(244,114,182,0.10)',
	'rgba(251,191,36,0.10)',
];
const iconBorders = [
	'rgba(167,139,250,0.20)',
	'rgba(52,211,153,0.20)',
	'rgba(244,114,182,0.20)',
	'rgba(251,191,36,0.20)',
];

export function SlideUsability() {
	const t = useTranslations('usability');

	const features = [
		{ icon: 0, title: t('f1Title'), desc: t('f1Desc') },
		{ icon: 1, title: t('f2Title'), desc: t('f2Desc') },
		{ icon: 2, title: t('f3Title'), desc: t('f3Desc') },
		{ icon: 3, title: t('f4Title'), desc: t('f4Desc') },
	];

	return (
		<div className='relative h-full w-full overflow-hidden'>
			<div className='relative z-10 flex h-full w-full items-center justify-center px-8 lg:px-20'>
				<div className='grid w-full max-w-5xl grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center'>
					{/* Left */}
					<div>
						<span className='inline-flex items-center gap-1.5 rounded-full border border-violet-500/20 bg-violet-500/8 px-3 py-1 text-xs font-semibold tracking-widest text-violet-400 uppercase'>
							<span className='h-1.5 w-1.5 rounded-full bg-violet-400' />
							{t('label')}
						</span>
						<h2 className='mt-5 text-4xl font-black leading-tight tracking-tight text-white lg:text-6xl'>
							{t('title')}
						</h2>
						<p className='mt-4 text-base leading-relaxed text-zinc-400'>
							{t('description')}
						</p>

						<ul className='mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2'>
							{features.map((f) => {
								const Icon = icons[f.icon];
								return (
									<li
										key={f.title}
										className='rounded-xl border bg-[#07071a]/80 p-4 backdrop-blur-xl'
										style={{
											borderColor: iconBorders[f.icon],
											background: 'rgba(7,7,26,0.80)',
										}}>
										<span
											className='flex h-8 w-8 items-center justify-center rounded-lg'
											style={{
												background: iconBgs[f.icon],
												border: `1px solid ${iconBorders[f.icon]}`,
											}}>
											<Icon />
										</span>
										<p className='mt-3 text-sm font-bold text-white'>
											{f.title}
										</p>
										<p className='mt-1 text-xs text-zinc-500'>
											{f.desc}
										</p>
									</li>
								);
							})}
						</ul>

						{/* CTAs */}
						<div className='mt-8 flex flex-wrap gap-3'>
							<Link
								href='/docs/getting-started'
								className='inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-bold text-white transition-opacity hover:opacity-85'
								style={{
									background:
										'linear-gradient(135deg,#7c3aed 0%,#6366f1 100%)',
								}}>
								Empezar
								<svg
									className='h-4 w-4'
									fill='none'
									viewBox='0 0 24 24'
									stroke='currentColor'
									strokeWidth={2.5}>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										d='M13 7l5 5m0 0l-5 5m5-5H6'
									/>
								</svg>
							</Link>
							<Link
								href='/docs/components'
								className='inline-flex items-center gap-2 rounded-xl border border-white/15 px-6 py-3 text-sm font-semibold text-zinc-300 transition-colors hover:border-white/30 hover:text-white'>
								Ver componentes
							</Link>
						</div>
					</div>

					{/* Right  code block */}
					<div>
						<CodeBlock />
					</div>
				</div>
			</div>
		</div>
	);
}
