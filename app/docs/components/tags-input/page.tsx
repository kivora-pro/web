'use client';

import { ComponentDoc } from '@/components/docs/ComponentDoc';
import type {
	ComponentDocConfig,
	ControlValues,
} from '@/components/docs/types';
import { TagsInput } from '@kivora/react';
import { useState } from 'react';

const config: ComponentDocConfig = {
	name: 'TagsInput',
	category: 'inputs',
	status: 'stable',
	description_es:
		'Campo de entrada para crear y gestionar etiquetas (tags). Permite escribir y presionar Enter (o coma) para añadir tags, con opciones de sugerencias, límite máximo y eliminación.',
	description_en:
		'Input field to create and manage tags. Allows typing and pressing Enter (or comma) to add tags, with suggestions, maximum limit and removal options.',
	controls: [
		{
			type: 'text',
			prop: 'placeholder',
			label_es: 'Placeholder',
			label_en: 'Placeholder',
			defaultValue: 'Añadir etiqueta...',
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
			type: 'range',
			prop: 'maxTags',
			label_es: 'Máx. etiquetas',
			label_en: 'Max tags',
			min: 2,
			max: 10,
			step: 1,
			defaultValue: 5,
		},
		{
			type: 'boolean',
			prop: 'allowDuplicates',
			label_es: 'Permitir duplicados',
			label_en: 'Allow duplicates',
			defaultValue: false,
		},
		{
			type: 'boolean',
			prop: 'clearable',
			label_es: 'Limpiar todo',
			label_en: 'Clearable',
			defaultValue: false,
		},
	],
	codeTemplate: (v: ControlValues) =>
		`const [value, setValue] = useState(['React', 'TypeScript']);

<TagsInput
  value={value}
  onChange={setValue}
  placeholder="${v.placeholder}"
  size="${v.size}"
  maxTags={${v.maxTags}}${v.allowDuplicates ? '\n  allowDuplicates' : ''}${v.clearable ? '\n  clearable' : ''}
/>`,
	props: [
		{
			name: 'value',
			type: 'string[]',
			description_es: 'Tags actuales (modo controlado).',
			description_en: 'Current tags (controlled mode).',
		},
		{
			name: 'defaultValue',
			type: 'string[]',
			description_es: 'Tags iniciales (modo no controlado).',
			description_en: 'Initial tags (uncontrolled mode).',
		},
		{
			name: 'onChange',
			type: '(value: string[]) => void',
			description_es: 'Callback llamado al cambiar los tags.',
			description_en: 'Callback called when tags change.',
		},
		{
			name: 'data',
			type: 'string[]',
			description_es: 'Sugerencias de autocompletado.',
			description_en: 'Autocomplete suggestions.',
		},
		{
			name: 'placeholder',
			type: 'string',
			description_es: 'Texto de marcador en el campo vacío.',
			description_en: 'Placeholder text for empty field.',
		},
		{
			name: 'size',
			type: '"xs" | "sm" | "md" | "lg" | "xl"',
			defaultValue: '"md"',
			description_es: 'Tamaño del campo.',
			description_en: 'Field size.',
		},
		{
			name: 'maxTags',
			type: 'number',
			description_es: 'Número máximo de tags permitidos.',
			description_en: 'Maximum number of allowed tags.',
		},
		{
			name: 'allowDuplicates',
			type: 'boolean',
			description_es: 'Permite añadir tags duplicados.',
			description_en: 'Allows adding duplicate tags.',
		},
		{
			name: 'splitChars',
			type: 'string[]',
			defaultValue: '[","]',
			description_es: 'Caracteres que separan tags al pegar.',
			description_en: 'Characters that split tags when pasting.',
		},
		{
			name: 'clearable',
			type: 'boolean',
			description_es: 'Muestra botón para limpiar todos los tags.',
			description_en: 'Shows button to clear all tags.',
		},
		{
			name: 'searchable',
			type: 'boolean',
			description_es: 'Habilita búsqueda en las sugerencias.',
			description_en: 'Enables search in suggestions.',
		},
		{
			name: 'label',
			type: 'ReactNode',
			description_es: 'Etiqueta del campo.',
			description_en: 'Field label.',
		},
		{
			name: 'description',
			type: 'ReactNode',
			description_es: 'Texto de ayuda.',
			description_en: 'Helper text.',
		},
		{
			name: 'error',
			type: 'ReactNode',
			description_es: 'Mensaje de error.',
			description_en: 'Error message.',
		},
	],
};

function TagsInputPreview({ v }: { v: ControlValues }) {
	const [value, setValue] = useState<string[]>(['React', 'TypeScript']);
	return (
		<div className='w-72'>
			<TagsInput
				value={value}
				onChange={setValue}
				placeholder={v.placeholder as string}
				size={v.size as 'xs' | 'sm' | 'md' | 'lg' | 'xl'}
				maxTags={v.maxTags as number}
				allowDuplicates={v.allowDuplicates as boolean}
				clearable={v.clearable as boolean}
			/>
		</div>
	);
}

function renderPreview(v: ControlValues) {
	return <TagsInputPreview v={v} />;
}

export default function TagsInputPage() {
	return (
		<ComponentDoc
			config={config}
			renderPreview={renderPreview}
		/>
	);
}
