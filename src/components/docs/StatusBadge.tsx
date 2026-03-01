import type { ComponentStatus } from './types';

interface StatusBadgeProps {
	status: ComponentStatus;
}

const config: Record<
	ComponentStatus,
	{ label_es: string; label_en: string; classes: string }
> = {
	stable: {
		label_es: 'Estable',
		label_en: 'Stable',
		classes:
			'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30',
	},
	beta: {
		label_es: 'Beta',
		label_en: 'Beta',
		classes: 'bg-amber-500/15 text-amber-400 border border-amber-500/30',
	},
	alpha: {
		label_es: 'Alpha',
		label_en: 'Alpha',
		classes: 'bg-orange-500/15 text-orange-400 border border-orange-500/30',
	},
	wip: {
		label_es: 'En desarrollo',
		label_en: 'Work in progress',
		classes: 'bg-zinc-500/15 text-zinc-400 border border-zinc-500/30',
	},
	deprecated: {
		label_es: 'Deprecado',
		label_en: 'Deprecated',
		classes: 'bg-red-500/15 text-red-400 border border-red-500/30',
	},
};

export function StatusBadge({ status }: StatusBadgeProps) {
	const { label_es, classes } = config[status];
	return (
		<span
			className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium ${classes}`}>
			<span className='h-1.5 w-1.5 rounded-full bg-current' />
			{label_es}
		</span>
	);
}
