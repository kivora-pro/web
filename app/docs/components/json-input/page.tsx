'use client';

import { ComponentDoc } from '@/components/docs/ComponentDoc';
import type {
	ComponentDocConfig,
	ControlValues,
} from '@/components/docs/types';
import { JsonInput } from '@kivora/react';

const config: ComponentDocConfig = {
	name: 'JsonInput',
	category: 'inputs',
	status: 'stable',
	description_es:
		'Área de texto con validación JSON integrada. Puede formatear automáticamente el contenido al perder el foco y resaltar errores de sintaxis.',
	description_en:
		'Textarea with built-in JSON validation. Can auto-format content on blur and highlight syntax errors.',
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
			prop: 'label',
			label_es: 'Etiqueta',
			label_en: 'Label',
			defaultValue: 'Configuración JSON',
		},
		{
			type: 'boolean',
			prop: 'formatOnBlur',
			label_es: 'Formatear al salir',
			label_en: 'Format on blur',
			defaultValue: false,
		},
		{
			type: 'boolean',
			prop: 'autosize',
			label_es: 'Alto automático',
			label_en: 'Autosize',
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
		const props: string[] = [];
		if (v.size !== 'md') props.push(`size="${v.size}"`);
		if (v.label) props.push(`label="${v.label}"`);
		if (v.formatOnBlur) props.push('formatOnBlur');
		if (v.autosize) props.push('autosize');
		if (v.disabled) props.push('disabled');
		const propsStr = props.length ? '\n  ' + props.join('\n  ') : '';
		return `import { JsonInput } from '@kivora/react';\n\n<JsonInput${propsStr}\n  validationError="JSON inválido"\n  minRows={4}\n/>`;
	},
	props: [
		{
			name: 'value',
			type: 'string',
			description_es: 'Valor actual (modo controlado).',
			description_en: 'Current value (controlled mode).',
		},
		{
			name: 'onChange',
			type: '(value: string) => void',
			description_es: 'Callback al cambiar el contenido.',
			description_en: 'Callback when content changes.',
		},
		{
			name: 'size',
			type: '"xs" | "sm" | "md" | "lg" | "xl"',
			defaultValue: '"md"',
			description_es: 'Tamaño del campo.',
			description_en: 'Field size.',
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
			description_es: 'Descripción debajo de la etiqueta.',
			description_en: 'Description below the label.',
		},
		{
			name: 'formatOnBlur',
			type: 'boolean',
			defaultValue: 'false',
			description_es: 'Formatea el JSON al perder el foco.',
			description_en: 'Formats the JSON when losing focus.',
		},
		{
			name: 'validationError',
			type: 'ReactNode',
			description_es: 'Mensaje de error para JSON inválido.',
			description_en: 'Error message for invalid JSON.',
		},
		{
			name: 'minRows',
			type: 'number',
			description_es: 'Número mínimo de filas visibles.',
			description_en: 'Minimum number of visible rows.',
		},
		{
			name: 'autosize',
			type: 'boolean',
			defaultValue: 'false',
			description_es: 'Ajusta la altura automáticamente al contenido.',
			description_en: 'Automatically adjusts height to content.',
		},
		{
			name: 'disabled',
			type: 'boolean',
			description_es: 'Deshabilita el campo.',
			description_en: 'Disables the field.',
		},
	],
};

function renderPreview(v: ControlValues) {
	return (
		<div className='w-72'>
			<JsonInput
				size={v.size as 'xs' | 'sm' | 'md' | 'lg' | 'xl'}
				label={v.label as string}
				formatOnBlur={v.formatOnBlur as boolean}
				autosize={v.autosize as boolean}
				disabled={v.disabled as boolean}
				validationError='JSON inválido'
				minRows={4}
				defaultValue='{"name": "kivora", "version": 1}'
			/>
		</div>
	);
}

export default function JsonInputPage() {
	return (
		<ComponentDoc
			config={config}
			renderPreview={renderPreview}
		/>
	);
}
