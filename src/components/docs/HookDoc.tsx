import { CodeBlock } from './CodeBlock';
import { IssueFooter } from './IssueFooter';
import { PropsTable } from './PropsTable';
import type { HookDocConfig } from './types';

interface HookDocProps {
	config: HookDocConfig;
	/** Demo interactiva opcional que se muestra sobre el código de uso */
	demo?: React.ReactNode;
}

export function HookDoc({ config, demo }: HookDocProps) {
	return (
		<article className='mx-auto w-full max-w-3xl pb-20'>
			{/* ── Header ── */}
			<div className='mb-8'>
				<div className='mb-3 flex flex-wrap items-center gap-3'>
					<div className='flex items-center gap-2 text-xs font-medium text-zinc-500'>
						<span>@kivora/react</span>
						<span>/</span>
						<span className='text-zinc-400'>hooks</span>
					</div>
				</div>

				<h1 className='mb-3 font-mono text-3xl font-bold tracking-tight text-white'>
					{config.name}
				</h1>

				<p className='text-base leading-relaxed text-zinc-400'>
					{config.description_es}
				</p>

				{/* Import snippet */}
				<div className='mt-4 flex items-center gap-3 rounded-lg border border-white/8 bg-[#0d0d1a] px-4 py-3'>
					<span className='font-mono text-xs text-zinc-500'>
						import
					</span>
					<code className='font-mono text-xs text-brand'>
						{'{ '}
						{config.name}
						{' }'}
					</code>
					<span className='font-mono text-xs text-zinc-500'>
						from
					</span>
					<code className='font-mono text-xs text-emerald-400'>
						&apos;@kivora/react&apos;
					</code>
				</div>
			</div>

			{/* ── Divider ── */}
			<div className='mb-8 h-px bg-white/6' />

			{/* ── Demo (opcional) ── */}
			{demo && (
				<section className='mb-10'>
					<SectionLabel>Demo</SectionLabel>
					<div className='rounded-xl border border-white/8 bg-[#0d0d1a] p-6'>
						{demo}
					</div>
				</section>
			)}

			{/* ── Uso ── */}
			<section className='mb-10'>
				<SectionLabel>Uso</SectionLabel>
				<CodeBlock
					code={config.usage}
					language='tsx'
				/>
			</section>

			{/* ── Parámetros ── */}
			{config.params && config.params.length > 0 && (
				<section className='mb-10'>
					<SectionLabel>Parámetros</SectionLabel>
					<PropsTable
						props={config.params}
						label='Parámetros'
					/>
				</section>
			)}

			{/* ── Retorno ── */}
			{config.returns && config.returns.length > 0 && (
				<section className='mb-10'>
					<SectionLabel>Retorno</SectionLabel>
					<PropsTable
						props={config.returns}
						label='Retorno'
					/>
				</section>
			)}

			{/* ── Issue footer ── */}
			<IssueFooter
				section='hooks'
				component={config.name}
			/>
		</article>
	);
}

function SectionLabel({ children }: { children: React.ReactNode }) {
	return (
		<h2 className='mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-widest text-zinc-500'>
			<span className='h-px flex-1 bg-white/6' />
			{children}
			<span className='h-px flex-1 bg-white/6' />
		</h2>
	);
}
