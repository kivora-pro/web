import { docsNav } from '@/components/docs/nav';
import Link from 'next/link';

export default function HooksPage() {
	const hookGroups = docsNav.filter((g) => g.category === 'hooks');

	return (
		<div className='mx-auto w-full max-w-3xl pb-20'>
			<div className='mb-10'>
				<p className='mb-2 text-xs font-semibold uppercase tracking-widest text-zinc-500'>
					@kivora/react
				</p>
				<h1 className='mb-4 text-3xl font-bold tracking-tight text-white'>
					Hooks
				</h1>
				<p className='text-base leading-relaxed text-zinc-400'>
					Colección de hooks de React para gestión de estado, DOM,
					APIs del navegador, timers, teclado y utilidades. Todos
					exportados directamente desde{' '}
					<code className='rounded bg-white/5 px-1.5 py-0.5 font-mono text-xs text-zinc-300'>
						@kivora/react
					</code>
					.
				</p>
			</div>

			<div className='space-y-10'>
				{hookGroups.map((group) => (
					<section key={group.label_es}>
						<h2 className='mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-widest text-zinc-500'>
							<span className='h-px flex-1 bg-white/6' />
							{group.label_es}
							<span className='h-px flex-1 bg-white/6' />
						</h2>

						<div className='grid grid-cols-1 gap-1 sm:grid-cols-2'>
							{group.items.map((item) => (
								<Link
									key={item.href}
									href={item.href}
									className='group flex items-center gap-3 rounded-lg border border-white/6 bg-white/2 px-4 py-3 transition-all hover:border-white/12 hover:bg-white/4'>
									<code className='font-mono text-sm text-brand'>
										{item.label_es}
									</code>
								</Link>
							))}
						</div>
					</section>
				))}
			</div>
		</div>
	);
}
