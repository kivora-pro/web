'use client';

import { Code } from '@kivora/react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

export function SlideStepByStep() {
	const t = useTranslations('stepByStep');

	const steps = [
		{
			number: '01',
			title: t('s1Title'),
			description: t('s1Desc'),
			code: 'npm install @kivora/react',
			lang: 'cli',
		},
		{
			number: '02',
			title: t('s2Title'),
			description: t('s2Desc'),
			code: "import '@kivora/react/styles.css';",
			lang: 'ts',
		},
		{
			number: '03',
			title: t('s3Title'),
			description: t('s3Desc'),
			code: `import { KivoraProvider } from '@kivora/react';

<KivoraProvider>
  {children}
</KivoraProvider>`,
			lang: 'tsx',
		},
		{
			number: '04',
			title: t('s4Title'),
			description: t('s4Desc'),
			code: `import { Button, TextInput, Stack } from '@kivora/react';

<Stack gap="md">
  <TextInput label="Email" />
  <Button>Enviar</Button>
</Stack>`,
			lang: 'tsx',
		},
	];

	return (
		<div className='relative h-full w-full overflow-hidden'>
			<div className='relative z-10 flex h-full w-full items-center justify-center px-8 lg:px-20'>
				<div className='w-full max-w-4xl'>
					{/* Header */}
					<div className='text-center'>
						<span className='inline-flex items-center gap-1.5 rounded-full border border-violet-500/20 bg-violet-500/8 px-3 py-1 text-xs font-semibold tracking-widest text-violet-400 uppercase'>
							<span className='h-1.5 w-1.5 rounded-full bg-violet-400' />
							{t('label')}
						</span>
						<h2 className='mt-5 text-4xl font-black leading-tight tracking-tight text-white lg:text-6xl'>
							{t('title')}
						</h2>
						<p className='mt-4 text-base text-zinc-400 lg:text-lg'>
							{t('description')}
						</p>
					</div>

					{/* Steps grid */}
					<ol className='mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2'>
						{steps.map((step, idx) => (
							<li
								key={step.number}
								className='rounded-2xl border border-white/10 bg-[#07071a]/80 p-5 backdrop-blur-xl'>
								<div className='flex items-start gap-3'>
									{/* Step number badge */}
									<span
										className='flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-[11px] font-black text-white'
										style={{
											background: `linear-gradient(135deg,#7c3aed,#6366f1)`,
											opacity: 1 - idx * 0.05,
										}}>
										{step.number}
									</span>
									<div className='min-w-0'>
										<p className='font-bold text-white'>
											{step.title}
										</p>
										<p className='mt-1 text-xs text-zinc-500'>
											{step.description}
										</p>
									</div>
								</div>
								{/* Code block */}
								<Code
									block
									language={step.lang}
									copyable
									showLineNumbers
									className='mt-4'
									highlighterProps={{
										customStyle: {
											fontSize: '0.78rem',
											paddingTop: '1.5rem',
											paddingBottom: '0.75rem',
										},
									}}>
									{step.code}
								</Code>
							</li>
						))}
					</ol>

					{/* CTAs */}
					<div className='mt-8 flex flex-wrap items-center justify-center gap-3'>
						<a
							href='https://www.npmjs.com/package/@kivora/react'
							target='_blank'
							rel='noopener noreferrer'
							className='inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-bold text-white transition-opacity hover:opacity-85'
							style={{
								background:
									'linear-gradient(135deg,#7c3aed 0%,#6366f1 100%)',
							}}>
							{t('viewNpm')}
							<svg
								className='h-4 w-4'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'
								strokeWidth={2}>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
								/>
							</svg>
						</a>
						<Link
							href='/docs'
							className='inline-flex items-center gap-2 rounded-xl border border-white/15 px-6 py-3 text-sm font-semibold text-zinc-300 transition-colors hover:border-white/30 hover:text-white'>
							{t('viewDocs')}
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
