import { docsNav } from '@/components/docs/nav';
import Link from 'next/link';

const statusColors: Record<string, string> = {
	stable: 'text-emerald-400',
	beta: 'text-amber-400',
	alpha: 'text-orange-400',
	wip: 'text-zinc-500',
};

const implementedSlugs = new Set([
	'accordion',
	'action-icon',
	'affix',
	'alert',
	'anchor',
	'app-shell',
	'aspect-ratio',
	'autocomplete',
	'avatar',
	'background-image',
	'badge',
	'blockquote',
	'box',
	'breadcrumb',
	'burger',
	'button',
	'card',
	'center',
	'checkbox',
	'chip',
	'close-button',
	'code',
	'collapse',
	'color-input',
	'color-swatch',
	'combobox',
	'container',
	'copy-button',
	'dialog',
	'divider',
	'drawer',
	'file-button',
	'file-input',
	'flex',
	'floating-indicator',
	'focus-trap',
	'grid',
	'group',
	'highlight',
	'hover-card',
	'image',
	'indicator',
	'input',
	'json-input',
	'kbd',
	'list',
	'loader',
	'loading-overlay',
	'mark',
	'menu',
	'modal',
	'multi-select',
	'nav-link',
	'notification',
	'number-formatter',
	'number-input',
	'overlay',
	'pagination',
	'paper',
	'password-input',
	'pill',
	'pills-input',
	'pin-input',
	'popover',
	'portal',
	'progress',
	'radio',
	'rating',
	'ring-progress',
	'scroll-area',
	'segmented-control',
	'select',
	'semi-circle-progress',
	'simple-grid',
	'skeleton',
	'slider',
	'space',
	'spoiler',
	'stack',
	'stepper',
	'switch',
	'table',
	'table-of-contents',
	'tabs',
	'tags-input',
	'text',
	'text-input',
	'textarea',
	'theme-icon',
	'timeline',
	'title',
	'toast',
	'tooltip',
	'transition',
	'tree',
	'unstyled-button',
]);

export default function ComponentsIndexPage() {
	const componentGroups = docsNav.filter(
		(g) =>
			g.category !== 'hooks' &&
			!['Empezar', 'Extensiones'].includes(g.label_es),
	);

	return (
		<div className='mx-auto w-full max-w-3xl pb-20'>
			<div className='mb-10'>
				<p className='mb-2 text-xs font-semibold uppercase tracking-widest text-zinc-500'>
					@kivora/react
				</p>
				<h1 className='mb-4 text-3xl font-bold tracking-tight text-white'>
					Componentes
				</h1>
				<p className='text-base leading-relaxed text-zinc-400'>
					Todos los componentes se importan desde{' '}
					<code className='rounded bg-brand/10 px-1.5 py-0.5 font-mono text-sm text-brand'>
						@kivora/react
					</code>
					. API idéntica en todos los frameworks.
				</p>
			</div>

			{/* Quick install */}
			<div className='mb-10 rounded-xl border border-white/8 bg-[#0d0d1a] px-5 py-4'>
				<p className='mb-2 text-xs font-medium text-zinc-500'>
					Instalación
				</p>
				<code className='font-mono text-sm text-zinc-200'>
					npm install @kivora/react
				</code>
			</div>

			<div className='space-y-8'>
				{componentGroups.map((group) => (
					<section key={group.label_es}>
						<h2 className='mb-3 text-xs font-semibold uppercase tracking-widest text-zinc-500'>
							{group.label_es}
						</h2>
						<div className='grid grid-cols-1 gap-2 sm:grid-cols-2'>
							{group.items.map((item) => {
								const slug = item.href.split('/').pop() ?? '';
								const ready = implementedSlugs.has(slug);
								return (
									<Link
										key={item.href}
										href={item.href}
										className={[
											'flex items-center justify-between rounded-xl border px-4 py-3 transition-all',
											ready
												? 'border-white/8 bg-white/3 hover:border-brand/30 hover:bg-brand/5'
												: 'border-white/5 bg-white/1 opacity-50 cursor-not-allowed pointer-events-none',
										].join(' ')}>
										<span className='text-sm font-medium text-white'>
											{item.label_es}
										</span>
										{ready ? (
											<span
												className={`text-xs font-medium ${statusColors.stable}`}>
												Estable
											</span>
										) : (
											<span className='rounded-full border border-white/10 px-2 py-0.5 text-[10px] text-zinc-600'>
												Próximamente
											</span>
										)}
									</Link>
								);
							})}
						</div>
					</section>
				))}
			</div>
		</div>
	);
}
