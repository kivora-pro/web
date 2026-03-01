// ─── Documentation System Types ──────────────────────────────────────────────

export type ComponentStatus =
	| 'stable'
	| 'beta'
	| 'alpha'
	| 'deprecated'
	| 'wip';

// ─── Props Table ──────────────────────────────────────────────────────────────

export interface PropDef {
	/** Nombre del prop */
	name: string;
	/** Tipo TypeScript como string */
	type: string;
	/** Valor por defecto como string */
	defaultValue?: string;
	/** Si es requerido */
	required?: boolean;
	/** Descripción en es */
	description_es: string;
	/** Descripción en en */
	description_en: string;
}

// ─── Playground Controls ──────────────────────────────────────────────────────

export interface SelectControl {
	type: 'select';
	prop: string;
	label_es: string;
	label_en: string;
	options: string[];
	defaultValue: string;
}

export interface BooleanControl {
	type: 'boolean';
	prop: string;
	label_es: string;
	label_en: string;
	defaultValue: boolean;
}

export interface TextControl {
	type: 'text';
	prop: string;
	label_es: string;
	label_en: string;
	defaultValue: string;
}

export interface RangeControl {
	type: 'range';
	prop: string;
	label_es: string;
	label_en: string;
	min: number;
	max: number;
	step: number;
	defaultValue: number;
}

export type ControlDef =
	| SelectControl
	| BooleanControl
	| TextControl
	| RangeControl;

export type ControlValues = Record<string, string | boolean | number>;

// ─── Component Doc ────────────────────────────────────────────────────────────

export interface ComponentDocConfig {
	/** Nombre del componente (ej: "Button") */
	name: string;
	/** Categoría (ej: "buttons") */
	category: string;
	/** Estado del componente */
	status: ComponentStatus;
	/** Descripción en ES */
	description_es: string;
	/** Descripción en EN */
	description_en: string;
	/** Props documentados */
	props: PropDef[];
	/** Definición de controles del playground */
	controls: ControlDef[];
	/** Función que genera el código dado los valores actuales del playground */
	codeTemplate: (values: ControlValues) => string;
}

// ─── Hook Documentation ───────────────────────────────────────────────────────

/** Parámetro de un hook (argumento o valor devuelto) */
export type HookParam = PropDef;

export interface HookDocConfig {
	name: string;
	description_es: string;
	description_en: string;
	/** Código de ejemplo de uso */
	usage: string;
	/** Argumentos de la función hook */
	params?: HookParam[];
	/** Valores/objetos devueltos por el hook */
	returns?: HookParam[];
}

// ─── Navigation ───────────────────────────────────────────────────────────────

export interface NavItem {
	label_es: string;
	label_en: string;
	href: string;
}

export interface NavGroup {
	label_es: string;
	label_en: string;
	/** Agrupa secciones para filtrado (ej. 'hooks', 'extensions', 'getting-started') */
	category?: string;
	items: NavItem[];
}
