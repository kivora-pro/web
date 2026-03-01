import type { PropDef } from './types';

interface PropsTableProps {
	props: PropDef[];
	label?: string;
}

export function PropsTable({ props, label = 'Props' }: PropsTableProps) {
	return (
		<div className='mt-2'>
			<h3 className='mb-3 text-sm font-semibold uppercase tracking-widest text-zinc-500'>
				{label}
			</h3>
			<div className='overflow-x-auto rounded-xl border border-white/8'>
				<table className='w-full text-sm'>
					<thead>
						<tr className='border-b border-white/8 bg-white/3'>
							<th className='px-4 py-3 text-left font-medium text-zinc-400'>
								Prop
							</th>
							<th className='px-4 py-3 text-left font-medium text-zinc-400'>
								Tipo
							</th>
							<th className='px-4 py-3 text-left font-medium text-zinc-400'>
								Por defecto
							</th>
							<th className='px-4 py-3 text-left font-medium text-zinc-400'>
								Descripción
							</th>
						</tr>
					</thead>
					<tbody className='divide-y divide-white/5'>
						{props.map((p) => (
							<tr
								key={p.name}
								className='transition-colors hover:bg-white/2'>
								<td className='px-4 py-3 align-top'>
									<code className='rounded bg-brand/10 px-1.5 py-0.5 font-mono text-xs text-brand'>
										{p.name}
										{p.required && (
											<span className='ml-1 text-red-400'>
												*
											</span>
										)}
									</code>
								</td>
								<td className='px-4 py-3 align-top'>
									<code className='font-mono text-xs text-zinc-300 whitespace-pre-wrap leading-relaxed'>
										{p.type}
									</code>
								</td>
								<td className='px-4 py-3 align-top'>
									{p.defaultValue ? (
										<code className='rounded bg-zinc-800 px-1.5 py-0.5 font-mono text-xs text-zinc-300'>
											{p.defaultValue}
										</code>
									) : (
										<span className='text-zinc-600'>—</span>
									)}
								</td>
								<td className='px-4 py-3 align-top text-zinc-400 leading-relaxed'>
									{p.description_es}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}
