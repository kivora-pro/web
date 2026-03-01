'use client';

import { ComponentDoc } from '@/components/docs/ComponentDoc';
import type {
	ComponentDocConfig,
	ControlValues,
} from '@/components/docs/types';
import { Select } from '@kivora/react';

const DEMO_OPTIONS = ['Manzana', 'Naranja', 'Plátano', 'Fresa', 'Mango'];

const config: ComponentDocConfig = {
	name: 'Select',
	category: 'inputs',
	status: 'stable',
	description_es:
		'Selector de una opción con búsqueda integrada, limpieza, grupos, estado deshabilitado y personalización de estilos. Construido sobre react-select.',
	description_en:
		'Single option selector with built-in search, clearable, groups, disabled state and style customization. Built on react-select.',
	controls: [
		{
			type: 'text',
			prop: 'label',
			label_es: 'Label',
			label_en: 'Label',
			defaultValue: 'Fruta favorita',
		},
		{
			type: 'text',
			prop: 'placeholder',
			label_es: 'Placeholder',
			label_en: 'Placeholder',
			defaultValue: 'Elige una fruta',
		},
		{
			type: 'select',
			prop: 'size',
			label_es: 'Tamaño',
			label_en: 'Size',
			options: ['xs', 'sm', 'md', 'lg', 'xl'],
			defaultValue: 'md',
		},
		{
			type: 'boolean',
			prop: 'clearable',
			label_es: 'Limpiable',
			label_en: 'Clearable',
			defaultValue: false,
		},
		{
			type: 'boolean',
			prop: 'searchable',
			label_es: 'Buscable',
			label_en: 'Searchable',
			defaultValue: true,
		},
		{
			type: 'boolean',
			prop: 'disabled',
			label_es: 'Deshabilitado',
			label_en: 'Disabled',
			defaultValue: false,
		},
	],
	codeTemplate: (v: ControlValues) =>
		`<Select
  label="${v.label}"
  placeholder="${v.placeholder}"
  data={['Manzana', 'Naranja', 'Plátano', 'Fresa', 'Mango']}
  size="${v.size}"${v.clearable ? '\n  clearable' : ''}${!v.searchable ? '\n  searchable={false}' : ''}${v.disabled ? '\n  disabled' : ''}
/>`,
	props: [
		{
			name: 'data',
			type: 'string[] | { value: string; label: string; disabled?: boolean; group?: string }[]',
			required: true,
			description_es:
				'Lista de opciones. Acepta strings o objetos con value/label.',
			description_en:
				'List of options. Accepts strings or value/label objects.',
		},
		{
			name: 'value',
			type: 'string | null',
			description_es: 'Valor seleccionado (modo controlado).',
			description_en: 'Selected value (controlled mode).',
		},
		{
			name: 'defaultValue',
			type: 'string',
			description_es: 'Valor inicial (modo no controlado).',
			description_en: 'Initial value (uncontrolled mode).',
		},
		{
			name: 'onChange',
			type: '(value: string | null) => void',
			description_es: 'Callback al seleccionar una opción.',
			description_en: 'Callback when an option is selected.',
		},
		{
			name: 'label',
			type: 'ReactNode',
			description_es: 'Etiqueta del select.',
			description_en: 'Select label.',
		},
		{
			name: 'placeholder',
			type: 'string',
			description_es: 'Texto cuando no hay selección.',
			description_en: 'Text shown when nothing is selected.',
		},
		{
			name: 'clearable',
			type: 'boolean',
			defaultValue: 'false',
			description_es: 'Muestra botón × para borrar la selección.',
			description_en: 'Shows × button to clear the selection.',
		},
		{
			name: 'searchable',
			type: 'boolean',
			defaultValue: 'true',
			description_es: 'Permite filtrar opciones por texto.',
			description_en: 'Allows filtering options by text.',
		},
		{
			name: 'nothingFoundMessage',
			type: 'ReactNode',
			defaultValue: '"Sin resultados"',
			description_es: 'Mensaje cuando no hay opciones coincidentes.',
			description_en: 'Message when no options match the search.',
		},
		{
			name: 'size',
			type: '"xs" | "sm" | "md" | "lg" | "xl"',
			defaultValue: '"md"',
			description_es: 'Tamaño del select.',
			description_en: 'Select size.',
		},
		{
			name: 'disabled',
			type: 'boolean',
			description_es: 'Deshabilita el select.',
			description_en: 'Disables the select.',
		},
		{
			name: 'error',
			type: 'ReactNode',
			description_es: 'Mensaje de error.',
			description_en: 'Error message.',
		},
		{
			name: 'description',
			type: 'ReactNode',
			description_es: 'Texto de ayuda.',
			description_en: 'Helper text.',
		},
	],
};

function renderPreview(v: ControlValues) {
	return (
		<div className='w-72'>
			<Select
				label={v.label as string}
				placeholder={v.placeholder as string}
				data={DEMO_OPTIONS}
				size={v.size as 'xs' | 'sm' | 'md' | 'lg' | 'xl'}
				clearable={v.clearable as boolean}
				searchable={v.searchable as boolean}
				disabled={v.disabled as boolean}
			/>
		</div>
	);
}

export default function SelectPage() {
	return (
		<ComponentDoc
			config={config}
			renderPreview={renderPreview}
		/>
	);
}
