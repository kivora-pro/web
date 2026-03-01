import { IssueFooter } from './IssueFooter';
import { Playground } from './Playground';
import { PropsTable } from './PropsTable';
import { StatusBadge } from './StatusBadge';
import type { ComponentDocConfig, ControlValues } from './types';

interface ComponentDocProps {
	config: ComponentDocConfig;
	/** Función que recibe los valores actuales y devuelve el JSX del componente */
	renderPreview: (values: ControlValues) => React.ReactNode;
}

export function ComponentDoc({ config, renderPreview }: ComponentDocProps) {
	return (
		<article className='mx-auto w-full max-w-3xl pb-20'>
			{/* ── Header ── */}
			<div className='mb-8'>
				<div className='mb-3 flex flex-wrap items-center gap-3'>
					<div className='flex items-center gap-2 text-xs font-medium text-zinc-500'>
						<span>@kivora/react</span>
						<span>/</span>
						<span className='text-zinc-400'>{config.category}</span>
					</div>
					<StatusBadge status={config.status} />
				</div>

				<h1 className='mb-3 text-3xl font-bold tracking-tight text-white'>
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

			{/* ── Playground (Preview + Controls + Code) ── */}
			<section className='mb-10'>
				<SectionLabel>Vista previa interactiva</SectionLabel>
				<Playground
					controls={config.controls}
					codeTemplate={config.codeTemplate}
					renderPreview={renderPreview}
				/>
			</section>

			{/* ── Props ── */}
			<section className='mb-10'>
				<SectionLabel>Atributos</SectionLabel>
				<PropsTable props={config.props} />
			</section>

			{/* ── Issue footer ── */}
			<IssueFooter
				section={config.category}
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
