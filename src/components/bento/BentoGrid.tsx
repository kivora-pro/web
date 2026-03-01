import { cn } from '../../lib/utils';

export interface BentoGridProps {
	children: React.ReactNode;
	className?: string;
}

/**
 * Contenedor principal del bento grid.
 *
 * Columnas:
 *   mobile  → 1 col
 *   md      → 6 cols
 *   lg      → 12 cols
 *
 * Cada fila mide 180 px en mobile/md y 200 px en lg.
 * Usa gap-4 (mobile) y gap-6 (md+).
 */
export function BentoGrid({ children, className }: BentoGridProps) {
	return (
		<div
			className={cn(
				'grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12',
				'auto-rows-[180px] md:auto-rows-[200px]',
				'gap-4 md:gap-6',
				className,
			)}>
			{children}
		</div>
	);
}

/* ── Tiles predefinidos con los spans de la spec ──────────────────── */

export interface BentoTileProps {
	children: React.ReactNode;
	className?: string;
}

/** A · grande arriba-izquierda */
export function TileA({ children, className }: BentoTileProps) {
	return (
		<div
			className={cn(
				'col-span-1 row-span-2 md:col-span-6 md:row-span-2 lg:col-span-7',
				className,
			)}>
			{children}
		</div>
	);
}

/** B · arriba-derecha */
export function TileB({ children, className }: BentoTileProps) {
	return (
		<div
			className={cn(
				'col-span-1 row-span-1 md:col-span-3 lg:col-span-5',
				className,
			)}>
			{children}
		</div>
	);
}

/** C · medio-izquierda */
export function TileC({ children, className }: BentoTileProps) {
	return (
		<div
			className={cn(
				'col-span-1 row-span-1 md:col-span-3 lg:col-span-4',
				className,
			)}>
			{children}
		</div>
	);
}

/** D · medio-centro */
export function TileD({ children, className }: BentoTileProps) {
	return (
		<div
			className={cn(
				'col-span-1 row-span-1 md:col-span-3 lg:col-span-3',
				className,
			)}>
			{children}
		</div>
	);
}

/** E · medio-derecha, doble altura */
export function TileE({ children, className }: BentoTileProps) {
	return (
		<div
			className={cn(
				'col-span-1 row-span-2 md:col-span-6 md:row-span-2 lg:col-span-5',
				className,
			)}>
			{children}
		</div>
	);
}

/** F · abajo-izquierda */
export function TileF({ children, className }: BentoTileProps) {
	return (
		<div
			className={cn(
				'col-span-1 row-span-1 md:col-span-6 lg:col-span-7',
				className,
			)}>
			{children}
		</div>
	);
}
