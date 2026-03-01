import { cn } from '../../lib/utils';

export interface BentoCardProps {
	title?: string;
	subtitle?: string;
	children?: React.ReactNode;
	className?: string;
	/** Fuerza fondo oscuro en lugar del claro por defecto */
	dark?: boolean;
	/** Clase para el área de header (title + subtitle) */
	headerClassName?: string;
}

export function BentoCard({
	title,
	subtitle,
	children,
	className,
	dark = false,
	headerClassName,
}: BentoCardProps) {
	return (
		<div
			className={cn(
				'relative h-full w-full overflow-hidden rounded-3xl border p-5 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md',
				dark
					? 'border-white/10 bg-neutral-950 text-white'
					: 'border-black/8 bg-white text-neutral-900',
				className,
			)}>
			{(title || subtitle) && (
				<div className={cn('mb-3', headerClassName)}>
					{title && (
						<p
							className={cn(
								'text-sm font-semibold leading-tight',
								dark ? 'text-white' : 'text-neutral-900',
							)}>
							{title}
						</p>
					)}
					{subtitle && (
						<p
							className={cn(
								'mt-0.5 text-xs leading-snug',
								dark ? 'text-neutral-400' : 'text-neutral-500',
							)}>
							{subtitle}
						</p>
					)}
				</div>
			)}
			{children}
		</div>
	);
}
