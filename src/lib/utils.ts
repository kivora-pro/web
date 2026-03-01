/**
 * Combina clases de Tailwind filtrando valores falsy.
 * Versión ligera sin dependencias externas.
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
	return classes.filter(Boolean).join(' ');
}
