'use client';

import { ComponentDoc } from '@/components/docs/ComponentDoc';
import type {
	ComponentDocConfig,
	ControlValues,
} from '@/components/docs/types';
import { MultiSelect } from '@kivora/react';

const DEMO_DATA = ['React', 'Vue', 'Angular', 'Svelte', 'Solid', 'Qwik'];

const config: ComponentDocConfig = {
	name: 'MultiSelect',
	category: 'inputs',
	status: 'stable',
	description_es:
		'Campo de selección múltiple con búsqueda integrada. Muestra los valores seleccionados como etiquetas removibles y permite limitar el número máximo de valores.',
	description_en:
		'Multiple selection field with integrated search. Shows selected values as removable tags and allows limiting the maximum number of values.',
	controls: [
		{
			type: 'select',
			prop: 'size',
			label_es: 'Tamaño',
			label_en: 'Size',
			options: ['xs', 'sm', 'md', 'lg', 'xl'],
			defaultValue: 'md',
		},
		{
			type: 'text',
			prop: 'placeholder',
			label_es: 'Placeholder',
			label_en: 'Placeholder',
			defaultValue: 'Seleccionar frameworks',
		},
		{
			type: 'boolean',
			prop: 'searchable',
			label_es: 'Buscable',
			label_en: 'Searchable',
			defaultValue: false,
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
			prop: 'disabled',
			label_es: 'Deshabilitado',
			label_en: 'Disabled',
			defaultValue: false,
		},
	],
	codeTemplate: (v: ControlValues) => {
		const props: string[] = [
			`data={['React', 'Vue', 'Angular', 'Svelte']}`,
			`placeholder="${v.placeholder}"`,
		];
		if (v.size !== 'md') props.push(`size="${v.size}"`);
		if (v.searchable) props.push('searchable');
		if (v.clearable) props.push('clearable');
		if (v.disabled) props.push('disabled');
		return `import { MultiSelect } from '@kivora/react';\n\n<MultiSelect\n  ${props.join('\n  ')}\n/>`;
	},
	props: [
		{
			name: 'data',
			type: 'string[] | { value: string; label: string }[]',
			required: true,
			description_es: 'Opciones disponibles para seleccionar.',
			description_en: 'Available options to select.',
		},
		{
			name: 'value',
			type: 'string[]',
			description_es: 'Valores seleccionados (modo controlado).',
			description_en: 'Selected values (controlled mode).',
		},
		{
			name: 'placeholder',
			type: 'string',
			description_es: 'Texto shown cuando no hay selección.',
			description_en: 'Text shown when there is no selection.',
		},
		{
			name: 'size',
			type: '"xs" | "sm" | "md" | "lg" | "xl"',
			defaultValue: '"md"',
			description_es: 'Tamaño del campo.',
			description_en: 'Field size.',
		},
		{
			name: 'maxValues',
			type: 'number',
			description_es: 'Número máximo de valores seleccionables.',
			description_en: 'Maximum number of selectable values.',
		},
		{
			name: 'searchable',
			type: 'boolean',
			defaultValue: 'false',
			description_es: 'Habilita búsqueda en las opciones.',
			description_en: 'Enables search in options.',
		},
		{
			name: 'clearable',
			type: 'boolean',
			defaultValue: 'false',
			description_es: 'Muestra botón para limpiar todos los valores.',
			description_en: 'Shows button to clear all values.',
		},
		{
			name: 'nothingFoundMessage',
			type: 'ReactNode',
			description_es:
				'Mensaje cuando no hay coincidencias en la búsqueda.',
			description_en: 'Message when no search matches found.',
		},
		{
			name: 'disabled',
			type: 'boolean',
			description_es: 'Deshabilita el campo.',
			description_en: 'Disables the field.',
		},
		{
			name: 'label',
			type: 'ReactNode',
			description_es: 'Etiqueta del campo.',
			description_en: 'Field label.',
		},
	],
};

function renderPreview(v: ControlValues) {
	return (
		<div className='w-72'>
			<MultiSelect
				data={DEMO_DATA}
				size={v.size as 'xs' | 'sm' | 'md' | 'lg' | 'xl'}
				placeholder={v.placeholder as string}
				searchable={v.searchable as boolean}
				clearable={v.clearable as boolean}
				disabled={v.disabled as boolean}
				nothingFoundMessage='Sin resultados'
			/>
		</div>
	);
}

export default function MultiSelectPage() {
	return (
		<ComponentDoc
			config={config}
			renderPreview={renderPreview}
		/>
	);
}
